export type WordsResponse = {
  message: string;
  words: { id: number; words: string; is_palindrome: 0 | 1 }[];
};

export type SaveWordsRequest = {
  message: string;
  isPalindrome: boolean;
  words: string;
};
