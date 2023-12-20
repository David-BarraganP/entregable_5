import axios from "axios";
import { useEffect, useState } from "react";
import { borderByType, gradientsByType } from "../constants/pokemon";
import { Link } from "react-router-dom";

const PokemonPreview = ({ pokemonURL }) => {
  const [pokemonInfo, setPokemonInfo] = useState(null);



  useEffect(() => {
    axios
      .get(pokemonURL)
      .then(({ data }) => setPokemonInfo(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Link 
    className={`border-8 ${borderByType[pokemonInfo?.types[0].type.name]} rounded-md text-center grid gap-2`}
    to={`/pokedex/${pokemonInfo?.id}`}>
      
      <header className={`${gradientsByType[pokemonInfo?.types[0].type.name]} relative h-[140px]`}>
        <img
          src={pokemonInfo?.sprites.other["official-artwork"].front_default}
          alt=""
          className="absolute bottom-0 translate-y-[37%] w-full p-12" 
        />
      </header>
      <h3 className="capitalazes text-lg font-bold pt-10">
        {pokemonInfo?.name}</h3>
      <h4 className="capitalaze text-sm font-semibold">
        {pokemonInfo?.types.map((type) => type.type.name).join("  //  ")}
      </h4>
      <h5 className="text-xs text-slate-400 pb-1">
        types
      </h5>
      <hr />
      <ul className="grid grid-cols-2 gap-2 p-2">
        {pokemonInfo?.stats.map((stat) => (
          <li key={stat.stat.name}>
            <h5 className="uppercase taxt-xs">
              {stat.stat.name}</h5>
            <span className="text-sm font-bold">
              {stat.base_stat}</span>
          </li>
        ))}
      </ul>
    </Link> 
  );
};

export default PokemonPreview;
