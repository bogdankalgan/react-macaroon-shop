import {createClient} from "@supabase/supabase-js";

const URL = "https://cyglhgqybviyjypsovlm.supabase.co";
const API_KEY =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN5Z2xoZ3F5YnZpeWp5cHNvdmxtIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTczNjE5OTQ3MSwiZXhwIjoyMDUxNzc1NDcxfQ.gFZ2MGwaXYZkdUf4Sil__KVd3XinBpOJAdMFUHpsBmI";


export const dataBase = createClient(URL, API_KEY);
