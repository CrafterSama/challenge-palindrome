"use client";

import WordsForm from "@/components/modules/home/words-form";
import WordsList from "@/components/modules/home/words-list";
import { useWords } from "@/hooks/api/use-words";
import { WordsResponse } from "@/types/words";
import { UseQueryResult } from "@tanstack/react-query";

export default function Home() {
  const { data }: UseQueryResult<WordsResponse, Error> = useWords();
  console.log("data", data);

  return (
    <div className="min-h-screen container mx-auto px-4 py-8 max-w-2xl flex-column justify-center items-center">
      <WordsForm />
      <WordsList data={data as WordsResponse} />
    </div>
  );
}
