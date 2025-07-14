import { useSearchParams } from "react-router-dom"; 
import { useFetch, useTitle } from "../hooks/";
import { Card } from "../components";


export const Search = ({apiPath}) => {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q");

  const { data:movies } = useFetch(apiPath, queryTerm);
  const pageTitle = useTitle(`Search result for ${queryTerm}`);
  
  return (
    <main>
      <section className="py-7">
        <p className="text-3xl text-gray-700 dark:text-white">{ movies.length === 0 ? `No result found for ${queryTerm}` : `Result for ${queryTerm}`}</p>
      </section>
      <section className="py-7">
        <div className="grid justify-items-center grid-cols-[repeat(auto-fill,_minmax(360px,_1fr))] gap-4">
          
          { movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          )) }
        </div>
      </section>
    </main>
  )
}
