import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { Pool } from "pg";

const pool = new Pool({
  connectionString: "postgres://postgres.yvirkmvwvujlxfmkjsnx:0IxSdMwu3rO8DWWY@aws-0-ap-south-1.pooler.supabase.com:6543/postgres?sslmode=require&supa=base-pooler.x",
  ssl: {
    rejectUnauthorized: false,
  },
});

export async function POST(req: Request) {
  try {
    const { firstName, lastName, email, phone, password, grade, stream } =
      await req.json();

    if (
      !firstName ||
      !lastName ||
      !email ||
      !phone ||
      !password ||
      !grade
    ) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 });
    }

    if (!/^\d{10}$/.test(phone)) {
      return NextResponse.json(
        { error: "Invalid phone number format (10 digits required)" },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    console.log("Registration data:", { firstName, lastName, email, phone, hashedPassword, grade, stream });




    const result = await pool.query(
      `
      INSERT INTO users (first_name, last_name, email, phone, password_hash, grade, stream)
      VALUES ($1, $2, $3, $4, $5, $6, $7)
      RETURNING id
    `,
      [firstName, lastName, email, phone, hashedPassword, grade, stream]
    );

    console.log("Database insertion result:", result);

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Registration error:", error);

    if (error.code === "23505") {
      // Unique violation (duplicate key)
      if (error.constraint === "users_email_key") {
        return NextResponse.json(
          { error: "Email already in use" },
          { status: 400 }
        );
      } else if (error.constraint === "users_phone_key") {
        return NextResponse.json(
          { error: "Phone number already in use" },
          { status: 400 }
        );
      }
    }

    return NextResponse.json(
      { error: "Registration failed" },
      { status: 400 }
    );
  }
}