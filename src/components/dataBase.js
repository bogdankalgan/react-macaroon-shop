import {createClient} from "@supabase/supabase-js";

const URL = "https://cyglhgqybviyjypsovlm.supabase.co";
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN5Z2xoZ3F5YnZpeWp5cHNvdmxtIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTczNjE5OTQ3MSwiZXhwIjoyMDUxNzc1NDcxfQ.gFZ2MGwaXYZkdUf4Sil__KVd3XinBpOJAdMFUHpsBmI";


export const dataBase = createClient(URL, API_KEY);

export const uploadImageToSupabase = async (file) => {
    if (!file || !file.name) {
        console.error("Файл не передан или не содержит имени!");
        return null;
    }

    try {
        const fileExt = file.name.split(".").pop();
        const fileName = `${Date.now()}.${fileExt}`;
        const filePath = `news/${fileName}`;

        // 🔹 Загружаем файл в Supabase Storage
        const {error} = await dataBase.storage.from("news-images").upload(filePath, file);

        if (error) {
            console.error("Ошибка загрузки изображения в Supabase:", error);
            return null;
        }

        // 🔹 Получаем `publicURL` загруженного файла
        const {data} = dataBase.storage.from("news-images").getPublicUrl(filePath);

        if (!data) {
            console.error("Ошибка получения `publicURL` из Supabase.");
            return null;
        }
        

        return data.publicUrl; // 🔹 Возвращаем рабочий `publicURL`
    } catch (error) {
        console.error("Ошибка загрузки изображения:", error);
        return null;
    }
};
