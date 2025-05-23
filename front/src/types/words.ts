export type WordsResponse = {
  message: string;
  words: { id: number; words: string }[];
};

export type SaveWordsRequest = {
  message: string;
  isPalindrome: boolean;
  words: string;
};
