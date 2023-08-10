export const Footer = () =>{
  return(
    <div className="w-full h-[26px] fixed botoom-0 items-center bg-blue flex justify-end text-white pr-32">
      <p>Tickets ® {new Date().getFullYear()} | </p>
      <p>Todos os Direitos Reservados</p>
    </div>
  )
}