"use server"

import { cookies } from "next/headers"
import { redirect } from "next/navigation";

export type UserSession = {
    id: string;
    email: string;
    name: string;
    role: string;
    exp: number;
};

// Auth actions
export async function login(email: string, password: string) {
    // In a real app, validate credentials here.
    // For this example, we'll just set a dummy token.
    const dummyUser: UserSession = {
        id: "dummy-id",
        email: email,
        name: "Dummy User",
        role: "STUDENT",
        exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 7, // 7 days
    };

    cookies().set("auth-token",  Buffer.from(JSON.stringify(dummyUser)).toString("base64"), {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 60 * 60 * 24 * 7,
        path: "/",
    });
    return { success: true };
}

export async function register(data: any) {
    // In a real app, handle user registration here.
    // For this example, we'll just return success.
    return { success: true };
}

export async function logout() {
    cookies().delete("auth-token");
    redirect("/auth/login");
}

export async function getSession(): Promise<UserSession | null> {
    const token = cookies().get("auth-token")?.value;

    if (!token) {
        return null;
    }

    try {
        const payload = JSON.parse(Buffer.from(token, "base64").toString());

        // Check if token is expired
        if (payload.exp < Math.floor(Date.now() / 1000)) {
            cookies().delete("auth-token");
            return null;
        }

        return payload;
    } catch (error) {
        console.error("Session parsing error:", error);
        return null;
    }
}

export async function requireAuth() {
    const session = await getSession();

    if (!session) {
        redirect("/auth/login");
    }

    return session;
}

export async function requireAdmin() {
    const session = await getSession();

    if (!session) {
        redirect("/auth/login");
    }

    if (session.role !== "ADMIN") {
        redirect("/dashboard");
    }

    return session;
}

