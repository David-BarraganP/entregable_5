import { useDispatch } from "react-redux";
import { setTrainerName } from "../store/slices/trainerName.slice";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";


const Home = () => {

   const dispatch = useDispatch()
   const navigate = useNavigate()


  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setTrainerName(e.target.trainerName.value))
    navigate("/pokedex")
    
  };

  return (
    <section className="grid grid-rows-[1fr_auto] h-screen overflow-hidden">   
      <div className="text-center justify-self-center self-center">
        <main>
          <header>
            <img src="/images/pokedex.png" alt="" />
          </header>
          <h3>Hello trainer!</h3>
          <p>write your name to start...</p>
          <form onSubmit={handleSubmit}>
            <input
              name="trainerName"
              placeholder="your name..."
              type="text"
              autoComplete="off"
              required
            />
            <button
            className="border-2 p-1 bg-red-600 hover:bg-black text-white rounded-md"
             type="submit">Start</button>
          </form>
        </main>
      </div>
      <Footer />
    </section>
  );
};

export default Home;
