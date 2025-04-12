import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://yvirkmvwvujlxfmkjsnx.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl2aXJrbXZ3dnVqbHhmbWtqc254Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMzNDE3MzAsImV4cCI6MjA1ODkxNzczMH0.tN0KtRZPpIN_P4iijcQYT0ORG0YP7bLZ8EAG5_mhAZE";

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Supabase URL and Anon Key must be set in environment variables.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);