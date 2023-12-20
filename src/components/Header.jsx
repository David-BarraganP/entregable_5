

const Header = () => {
  return (
    <header className="relative">
    <div className="h-14 bg-red-600 relative">
        <div className="absolute w-[250px] sm:w-[300px] -bottom-2 left-2">
            <img src="/images/pokedex.png"
            alt="" />
        </div>
    </div>
    <div className="h-10 bg-black"></div>
    <div className="absolute right-0 -translate-x-[20%] bottom-2 z-20 h-[60%]">
      <img 
      className="h-full"
      src="/images/pokeball.png"
       alt="" />
    </div>
  </header>
  )
}

export default Header
