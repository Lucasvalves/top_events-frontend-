
export const Navbar = () => {
  return (
    <nav className="bg-blue flex mx-auto px-6 absolute top-0 w-full h-16 items-center ">
      <h1 className="text-white text-2xl mr-[6rem]">Tickets</h1>
      <div className="flex items-center w-[50vw]">
        <input 
          className="w-full rounded-md px-3 py-2 text-sm font-normal "
          type="text" 
          placeholder="Insira o nome ou endereço do seu evento por aqui:) " 
        />
      </div>
    </nav>
  )
}
