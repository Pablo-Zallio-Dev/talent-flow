import { createClient } from '@supabase/supabase-js';

// ⚠️ Ponemos valores de relleno. Luego los cambiarás por tus llaves reales de Supabase.
const SUPABASE_URL = 'https://daupgvsqrlgwrkukobcf.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRhdXBndnNxcmxnd3JrdWtvYmNmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk4NzQxODAsImV4cCI6MjA5NTQ1MDE4MH0.LKLY9BVbi3UntUl_P-7jeVlxvWu2yNYBPMPeV_kNBrE';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);