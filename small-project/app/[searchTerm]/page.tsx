import getWikiResult from "@/lib/getWikiResult";
import { Result } from "postcss";

type Props = {
  params: {
    searchTerm: string;
  };
};

export default async function SearchResults({ params: { searchTerm } }: Props) {
  const wikiData: Promise<SearchResult> = getWikiResult(searchTerm);
  const data = await wikiData;

  const results: Result[] | undefined = data?.query?.pages;

  const content = (
    <main className="bg-slate-200 mx-auto max-w-lg py-a min-h-screen">
      {results ? (
        Object.values(results).map((result, index) => (
          <p key={index}>{JSON.stringify(result)}</p>
        ))
      ) : (
        <h2 className="p-2 text-xl">{`${searchTerm} Not found`}</h2>
      )}
    </main>
  );

  return content;
}
