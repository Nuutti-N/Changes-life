from supabase import create_client, Client
import os
from .config import settings
from dotenv import load_dotenv
load_dotenv()

supabase_url = settings.supabase_url
supabase_key = settings.supabase_key


supabase: Client = create_client(supabase_url, supabase_key)
