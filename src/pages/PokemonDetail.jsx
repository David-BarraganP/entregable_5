import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../components/Header";
import { borderByTypeDetail } from "../constants/pokemon";

const PokemonDetail = () => {
  const [pokemonInfo, setPokemonInfo] = useState(null);

  const { id } = useParams();

  const getPercentBarProgress = (stat_value) => {
    const porcent = (stat_value * 100) / 255;
    return porcent + "%";
  };

  const abilityToShow = pokemonInfo?.abilities[1]?.ability.name
    ? pokemonInfo.abilities[1].ability.name
    : pokemonInfo?.abilities[0]?.ability.name;


    // const type1 = pokemonInfo?.types[0]?.type?.name || '';
    // const type2 = pokemonInfo?.types[1]?.type?.name || '';
  
    // const typeToShow = type1 && type2 ? `${type1} / ${type2}` : type1 || type2;
  

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      .then(({ data }) => setPokemonInfo(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <section>
      <Header />
      <article className="text-center max-w-[500px] mx-auto py-10 ">
        <header>
          <img
            src={pokemonInfo?.sprites.other["official-artwork"].front_default}
            alt=""
          />
        </header>
        <span>#{pokemonInfo?.id}</span>
        <h3 className="capitalize font-bold">{pokemonInfo?.name}</h3>
        <div className="flex text-center justify-center items-center gap-10 p-7">
          <div>
            <h5>Weigth</h5>
            <span>{pokemonInfo?.weight}</span>
          </div>
          <div>
            <h5>Height</h5>
            <span>{pokemonInfo?.height}</span>
          </div>
        </div>

        <section className="grid justify-center gap-2">
          <div className="justify-center items-center gap-2 grid grid-cols-2">
            <div className="grid justify-center">
              <h3 className="capitalize font-semibold">Type</h3>
            </div>
            <div className="grid justify-ceneter  ">
              <h3 className="capitalize font-semibold">Abilities</h3>
            </div>
          </div>

          <div className=" grid justify-center gap-2  grid-cols-2">
            <Link
              className={` capitalize  text-white ${
                borderByTypeDetail[pokemonInfo?.types[0].type.name]
              } rounded-md grid justify-center items-center 
              p-1`}
              to={`/pokedex/${pokemonInfo?.id}`}
            >
              {pokemonInfo?.types.map((type) => type.type.name).join("  //  ")}
               {/* {pokemonInfo?.types[0].type.name}  */}
              {/* {typeToShow} */}    
            </Link>
            <div className="flex gap-1">
              <div className="border-4  rounded-md">
                {pokemonInfo?.abilities[0].ability.name}
              </div>
              <div className="border-4  rounded-md">
                {abilityToShow}
                {/* {pokemonInfo?.abilities[1]?.ability.name ? (
                  <p>{pokemonInfo?.abilities[1]?.ability.name}</p>
                ) : (
                  <p>{pokemonInfo?.abilities[0]?.ability.name}</p>
                )} */}
              </div>
            </div>
          </div>
        </section>

        <section>
          <h4 className="p-7">Status</h4>
          <ul className="grid gap-3">
            {pokemonInfo?.stats.map((stat) => (
              <li key={stat.stat.name}>
                <div className="flex justify-between">
                  <h5 className="capitalaze">{stat.stat.name}</h5>
                  <span>{stat.base_stat}/255</span>
                </div>
                {/* contenedor  barra de progreso */}
                <div className="h-6 bg-slate-200 rounded-sm overflow-hidden w-fuul ">
                  {/* progreso sobre el total */}
                  <div
                    style={{
                      width: getPercentBarProgress(stat.base_stat),
                    }}
                    className="h-full w-full bg-gradient-to-r
                    from-orange-500 to-yellow-400 "
                  ></div>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </article>
    </section>
  );
};

export default PokemonDetail;
