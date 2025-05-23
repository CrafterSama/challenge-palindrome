"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useSaveWords } from "@/hooks/api/use-words";
import { SaveWordsRequest } from "@/types/words";
import { useState } from "react";
import { toast } from "sonner";

const FormSchema = z.object({
  words: z.string().min(2, {
    message: "Words must be at least 2 characters.",
  }),
});

const WordsForm = () => {
  const [responseWhenSave, setResponseWhenSave] =
    useState<SaveWordsRequest | null>(null);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      words: "",
    },
  });

  const { mutate: onSaveWords } = useSaveWords();

  const onSubmit = (data: { words: string }) => {
    setResponseWhenSave(null);
    const words = data.words;

    onSaveWords(words, {
      onSuccess: (response: SaveWordsRequest | unknown) => {
        setResponseWhenSave(response as SaveWordsRequest);
        toast("Palabra Verificada");
      },
      onError: () => {
        toast("Error saving word");
      },
      onSettled: () => {
        form.reset();
        form.setValue("words", "");
      },
    });
  };

  return (
    <Card className="w-full p-4 flex flex-col justify-center items-center">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-2/3 space-y-6"
        >
          <FormField
            control={form.control}
            name="words"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Palabra</FormLabel>
                <FormControl>
                  <Input placeholder="Introduzca la palabra/frase" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="w-full" type="submit">
            Submit
          </Button>
        </form>
      </Form>
      {responseWhenSave && (
        <div className="text-center">
          <p className="text-2xl font-bold">
            {`${responseWhenSave.message} y ${
              responseWhenSave.isPalindrome ? "es" : "no es"
            } palindromo`}
          </p>
        </div>
      )}
    </Card>
  );
};

export default WordsForm;
