import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://dkqfhahduxjyldagicbv.supabase.co'
const supabaseAnonKey = 'sb_publishable_NXJZgS_8c5sOdFJ9h6gJUw_IPJ2rGp8'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
