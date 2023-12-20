
const Footer = () => {
  return (
    <footer className="relative">
        <div className="h-12 bg-red-600"></div>
        <div className="h-10 bg-black"></div>
        <div className="absolute left-[50%] -translate-x-[50%] bottom-0 z-20 h-[70%]">
          <img 
          className="h-full"
          src="/images/pokeball.png" alt="" />
        </div>
      </footer>
  )
}

export default Footer
