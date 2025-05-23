"use client";

import { getWords, saveWordWhenIsTrue } from "@/services/words";
import { WordsResponse } from "@/types/words";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useSaveWords = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (words: string) => saveWordWhenIsTrue(words),
    onSettled: () => {
      queryClient.invalidateQueries(["words"] as any);
    },
  });
};

export const useWords = () => {
  return useQuery<WordsResponse, Error>({
    queryKey: ["words"],
    queryFn: async (): Promise<WordsResponse> => {
      const response = await getWords();
      return response as WordsResponse;
    },
  });
};
