import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://aujrnzotphmkuqvxedzw.supabase.co'
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'yJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF1anJuem90cGhta3VxdnhlZHp3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ3NDc3NTQsImV4cCI6MjA3MDMyMzc1NH0.n_6GW53XFHxP4jvqZKdA6cdxePADvJB-_GZmZ5g1PQo'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

