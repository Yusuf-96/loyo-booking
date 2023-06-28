import { createClient } from '@supabase/supabase-js';

const SUPABASE_PROJECT_URLS = process.env.NEXT_PUBLIC_SUPABASE_PROJECT_URL;
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const supabase = createClient(SUPABASE_PROJECT_URLS, SUPABASE_ANON_KEY);

export { supabase };
