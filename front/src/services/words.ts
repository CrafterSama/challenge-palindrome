import { api } from "@/utils/api";
import { toast } from "sonner";

export const saveWordWhenIsTrue = async (words: string) => {
  try {
    const response = await api.post("/words-palindrome-checker", { words });
    return response;
  } catch (error) {
    toast("Error al tratar de guardar los datos");
    return [];
  }
};

export const getWords = async () => {
  try {
    const response = await api.get(`/words`);
    return response;
  } catch (error) {
    toast("Error al obtener los datos");
    return [];
  }
};
