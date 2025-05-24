import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { WordsResponse } from "@/types/words";

type WordsListProps = {
  data: WordsResponse;
};

type WordProps = {
  id: string | number;
  words: string;
  is_palindrome: 0 | 1;
};

const WordsList = ({ data }: WordsListProps) => {
  return (
    <Table className="mt-4 w-full">
      <TableHeader>
        <TableRow className="w-full">
          <TableHead colSpan={2} className="w-full text-center">
            Palabra o Frase
          </TableHead>
          <TableHead colSpan={2} className="w-full text-center">
            Es Palindrome
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="overflow-y-auto max-h-[500px]">
        {data?.words?.map((word: WordProps) => (
          <TableRow key={word.id} className="w-full">
            <TableCell colSpan={2} className="w-full text-center">
              {word.words}
            </TableCell>
            <TableCell colSpan={2} className="w-full text-center">
              {word.is_palindrome ? "Si" : "No"}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default WordsList;
