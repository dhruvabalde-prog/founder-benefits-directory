import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey);

export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

/**
 * SQL Schema for Supabase (run this in Supabase SQL editor):
 * 
 * CREATE TABLE community_perks (
 *   id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
 *   created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
 *   title TEXT NOT NULL,
 *   category TEXT NOT NULL,
 *   provider TEXT NOT NULL,
 *   value_amount TEXT NOT NULL,
 *   short_description TEXT NOT NULL,
 *   official_link TEXT NOT NULL,
 *   upvotes INT DEFAULT 1,
 *   status TEXT DEFAULT 'pending'
 * );
 * 
 * CREATE TABLE user_bookmarks (
 *   id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
 *   created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
 *   user_id TEXT NOT NULL,
 *   benefit_id TEXT NOT NULL
 * );
 */
