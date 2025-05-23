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

const WordsList = ({ data }: WordsListProps) => {
  return (
    <Table className="mt-4 w-full">
      <TableHeader>
        <TableRow>
          <TableHead colSpan={3} className="w-full text-center">
            Lista de Palabras Palindromes
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data?.words?.map((word: { id: string | number; words: string }) => (
          <TableRow key={word.id}>
            <TableCell colSpan={3} className="w-full text-center">
              {word.words}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default WordsList;
