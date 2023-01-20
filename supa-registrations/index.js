import { createClient } from '@supabase/supabase-js'


const supabase = createClient(
    'https://ewctdwkhtqqlwfrjdxbh.supabase.co', 
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV3Y3Rkd2todHFxbHdmcmpkeGJoIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY2MDc1MDYwMCwiZXhwIjoxOTc2MzI2NjAwfQ.Z0QVhmN6yoIRc1HAbcPq6bMJytwTKaCdRTLmhEYSFM0'  
  )

const { data: user, error } = await supabase.auth.api.createUser({
    email: 'mfurqan@gmail.com',
    password: 'password',
    email_confirm: true,
    user_metadata: { name: 'Furqan' },
  })


  // Auxi Url and Sevice Key 
// // This is the url
    // 'https://rppaiefkdbkxkruwnydy.supabase.co',
    // // This is the service_role key
    // 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJwcGFpZWZrZGJreGtydXdueWR5Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY1MDY0Nzk5OSwiZXhwIjoxOTY2MjIzOTk5fQ.JNZrNO6wEgy3t2wIkF1QL3V9gpZr2Y--7lnR4p9zajE'