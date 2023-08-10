import { BannerPrimary } from "@/app/components/BannerPrimary";
import { BannerSecundary } from "@/app/components/BannerSecundary";
import { categories } from "@/app/utils/categories";

export default function Dashboard(){
  return(
    <div className="container mx-auto">
      <BannerPrimary/>
      <BannerSecundary/>
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div className="rounded">
          <div className="w-full p-3 h-[150px] relative bg-black bg-opacity-25 rounded-3xl shadow">
            <div className="text-white absolute top-3">
              <p className="text-normal pb-1 font-bold">Jorge e Mateus</p>
              <div className="flex">
                <div className="mr-4 flex">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth={1.5} 
                    stroke="currentColor" 
                    className="w-6 h-6"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" 
                    />
                  </svg>
                  <p>08/07/2023</p>
                </div>
                <div className="mr-4 flex">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth={1.5} 
                    stroke="currentColor" 
                    className="w-6 h-6"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" 
                    />
                  </svg>
                  <p>14h</p>
                </div>
              </div>
            </div>
            <div className="text-white absolute bottom-3">
              <div className="flex">  
                <div className="mr-4 flex">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth={1.5} 
                    stroke="currentColor" 
                    className="w-6 h-6"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" 
                    />
                  </svg>
                  <p>Mineirão - Belo Horizontee</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded">
          <div className="w-full p-3 h-[150px] relative bg-black bg-opacity-25 rounded-3xl shadow">
            <div className="text-white absolute top-3">
              <p className="text-normal pb-1 font-bold">Jorge e Mateus</p>
              <div className="flex">
                <div className="mr-4 flex">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth={1.5} 
                    stroke="currentColor" 
                    className="w-6 h-6"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" 
                    />
                  </svg>
                  <p>08/07/2023</p>
                </div>
                <div className="mr-4 flex">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth={1.5} 
                    stroke="currentColor" 
                    className="w-6 h-6"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" 
                    />
                  </svg>
                  <p>14h</p>
                </div>
              </div>
            </div>
            <div className="text-white absolute bottom-3">
              <div className="flex">  
                <div className="mr-4 flex">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth={1.5} 
                    stroke="currentColor" 
                    className="w-6 h-6"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" 
                    />
                  </svg>
                  <p>Mineirão - Belo Horizontee</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded">
          <div className="w-full p-3 h-[150px] relative bg-black bg-opacity-25 rounded-3xl shadow">
            <div className="text-white absolute top-3">
              <p className="text-normal pb-1 font-bold">Jorge e Mateus</p>
              <div className="flex">
                <div className="mr-4 flex">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth={1.5} 
                    stroke="currentColor" 
                    className="w-6 h-6"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" 
                    />
                  </svg>
                  <p>08/07/2023</p>
                </div>
                <div className="mr-4 flex">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth={1.5} 
                    stroke="currentColor" 
                    className="w-6 h-6"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" 
                    />
                  </svg>
                  <p>14h</p>
                </div>
              </div>
            </div>
            <div className="text-white absolute bottom-3">
              <div className="flex">  
                <div className="mr-4 flex">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth={1.5} 
                    stroke="currentColor" 
                    className="w-6 h-6"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" 
                    />
                  </svg>
                  <p>Mineirão - Belo Horizontee</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-2 text-blue" >
        <p className=" text-2xl font-medium">Navegue por tipo de evento</p>
        <p className="text-base font-ligth">Vá ao evento que é a sua cara :D</p>
      </div>
      <div className="grid md:grid-cols-7 grid-cols-2 lg:gap-2 sm:gap-1">
        {categories.map((categorie) => {
          return(
            <div className="flex flex-col items-center justify-center cursor-pointer ">
              <img src={categorie.icon} alt="" className="rounded-full"/>
              <p>{categorie.name}</p>
            </div>
          );           
        })}
      </div>
    </div>
  )
}