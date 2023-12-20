import {  useEffect, useState } from "react"
import { paginatePokemons } from "../utils/pagination"
import Pagination from "./Pagination"
import PokemonPreview from "./PokemonPreview"



const PokemonList = ({pokemons}) => {
  const [currentPage, setCurrentPage] = useState(1)

     const {
      pokemonsInCurrentPage,
      lastPage,
      pagesInCurrentBlock,
     } = paginatePokemons(pokemons, currentPage)


     useEffect(() => {
setCurrentPage(1)
     }, [pokemons])


 



  return (
    <section>
    <section className="grid grid-cols-[repeat(auto-fill,_280px)] justify-center
    max-w-[1200px] mx-auto gap-4 py-10">
       {
        pokemonsInCurrentPage.map((pokemon) => (
          <PokemonPreview  key={pokemon.url} pokemonURL={pokemon.url}/>
        ))}
    </section>
    <Pagination 
     lastPage={lastPage}
     pagesInCurrentBlock={pagesInCurrentBlock}
     setCurrentPage={setCurrentPage}
     currentPage={currentPage}
     />
    </section>
  )
}

export default PokemonList
