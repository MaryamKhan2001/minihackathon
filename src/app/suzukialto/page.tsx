import Link from "next/link"
export default function SuzukiAlto(){
    return(
         <div className="items-center justify-between">
        <h1 className="font-semibold underline text-3xl text-center">SUZUKI ALTO 2024 PRICE IN PAKISTAN , IMAGES , REVIEWS AND SPECS</h1>
       <img className="ml-96 mt-12" width={400} height={400} src="https://cache4.pakwheels.com/system/car_generation_pictures/6013/original/Suzuki_Alto_-_PNG.png?1635945100" alt="suzuki alto" /> 
       <br />
       
       <p className=" -mt-48 flex items-center justify-center h-screen text-center">The Suzuki Alto is a compact city car known for its practicality and efficiency. Designed with urban driving in mind, it features a small footprint, making it easy to maneuver and park in tight spaces. The Alto typically offers a fuel-efficient engine, contributing to its reputation as an economical choice for daily commutes. Inside, it provides a surprisingly spacious cabin for its size, with a focus on functionality and comfort. </p>
       <h2 className="text-lime-600 text-center -mt-48 text-3xl">PKR 25,00,000/= </h2>
       <div className="flex justify-center">
       <Link href="/altosuzuki"><button className="bg-blue-600 border-2 border-blue-800 text-white py-2 px-4 rounded mt-8">
        Make Payment
       </button>
       </Link>
       </div>
      
       </div>
    )
}