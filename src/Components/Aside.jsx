import { Layers, CircleGauge, Box, SquareUserRound,SquarePlus, Settings , BadgeHelp } from "lucide-react"
import img from "./../assets/fdfg.jpg"
export default function Aside() {
    return (
        <div className="bg-white  h-screen flex flex-col justify-between fixed">
            <div className="flex flex-col justify-center items-center ">
                <div className="font-extrabold flex justify-center items-center text-2xl h-20 mt-10">  <Layers className="text-2xl"/> <span className="ml-3">Dashboard</span></div>
       
               <button className=" bg-button text-white h-10  rounded flex items-center justify-center p-3 "><CircleGauge/> <span className="ml-3">Dashboard</span></button>
   

                <aside className="flex flex-col justify-between w-1/2 mt-4 h-48 ">
                    <a href="" className="text-iconcolor flex items-center  text-lg"><Box /> <span className="ml-2">Product</span> </a>
                    <a href="" className="text-iconcolor flex"> <SquareUserRound/>  <span className="ml-2">Customers </span></a>
                    <a href="" className="text-iconcolor flex"><SquarePlus/> <span className="ml-2">Incame</span> 
                    </a><a href="" className="text-iconcolor flex"><Settings/> <span className="ml-2">Promote</span>
                    </a><a href="" className="text-iconcolor flex"><BadgeHelp/> <span className="ml-2"> Help</span>  </a>
                </aside>

            </div>
            <div className="mb-10 flex flex-col justify-center items-center">
                <div className="bg-button h-28 w-11/12 flex flex-col items-center justify-center rounded-lg">
             
                    <p className="text-white text-center">Upgrade to  PRO to get access all Features!</p>
                    <button className="bg-white text-button w-1/2 mt-2 p-2 rounded-full">Get Pro Now!</button>
                </div>
                <div className="flex justify-center mt-5">
                    <img src={img} alt="" className="w-1/6 rounded-full"/><div className="ml-2"><h1 className="font-bold">Daniel Samassumba</h1> <span className="text-iconcolor">Softwere Developer</span></div>
                </div>
            </div>
        </div>
    )
}
