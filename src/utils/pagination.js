const paginatePokemons = (pokemons, currentPage) => {
    // ? cantidad de pokemons por pagina
    const POKEMONS_PER_PAGE = 20  


    //? los pokemons que se van a renderizar en la pagina acutal
    const sliceEnd = currentPage * POKEMONS_PER_PAGE
    const sliceStart = sliceEnd - POKEMONS_PER_PAGE
     const pokemonsInCurrentPage = pokemons.slice(sliceStart, sliceEnd) 

    //? ultima pagina o la cantidad de paginas
    const lastPage = Math.ceil(pokemons.length / POKEMONS_PER_PAGE ) 

    //? bloque actual
     const PAGES_PER_BLOCK = 7
     const actualBlock = Math.ceil(currentPage / PAGES_PER_BLOCK)

    //? paginas que se van a mostrar en el bloque actual
    const pagesInCurrentBlock = []
    const maxPage = actualBlock * PAGES_PER_BLOCK
    const minPage = maxPage - PAGES_PER_BLOCK + 1
    for(let i = minPage; i <= maxPage; i++){
        if (i <= lastPage){
            pagesInCurrentBlock.push(i)  
        }
    }
    return {
        pokemonsInCurrentPage,
        lastPage,
        pagesInCurrentBlock,

    }


}
 

export {paginatePokemons}