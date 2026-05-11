import { Button } from "@base-ui/react";
import Image from "next/image";
import { LuShipWheel } from "react-icons/lu";


export default function Home() {
  return (
    <div className="flex border-4">
    <div className="flex flex-col flex-1 justify-center w-100 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1 className="absolute top-60 left-180 z-100 -translate-x-1/2 -translate-y-1/2 text-[13vw] font-black text-gray-400 select-none pointer-events-none">
        Fathom
      </h1>
      <h1 className="absolute top-120 left-180 z-100 -translate-x-1/2 -translate-y-1/2 text-[12vw] font-black text-black-500 select-none pointer-events-none">
        Maritime
      </h1>
      <h1 className="absolute font-bold text-white top-120 left-180 z-100 -translate-x-1/2 -translate-y-1/2 text-[12vw] font-black text-black-500 select-none pointer-events-none">
        Maritime
      </h1>
    </div >
    <div className=" absolute top-1/2 left-1/2 -translate-x-[250px] -translate-y-[250px] animate-[spin_8s_linear_infinite] w-100 h-100 text-[400px]" >
    <LuShipWheel className="lg"/>
    </div>
    </div>
  );
}
