from backend.config import settings
from supabase import create_client, Client


supabase: Client = create_client(settings.supabase_url, settings.supabase_key)
