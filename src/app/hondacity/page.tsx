import Link from "next/link"
export default function HondaCity(){
    return(
         <div className="items-center justify-between">
        <h1 className="font-semibold underline text-3xl text-center">HONDA CITY 2024 PRICE IN PAKISTAN , IMAGES , REVIEWS AND SPECS</h1>
       <img className="ml-96 mt-12" width={400} height={400} src="https://cache1.pakwheels.com/system/car_generation_pictures/6425/original/Honda_City_Front.jpg?1651424945" alt="honda city" /> 
       <br />
       
       <p className=" -mt-48 flex items-center justify-center h-screen text-center">The Honda City is a popular compact sedan that strikes a balance between style, comfort, and performance. Known for its sleek design and spacious interior, the City offers a comfortable ride for both drivers and passengers. It typically features a range of efficient engine options, delivering a smooth driving experience and good fuel economy.  </p>
       <h2 className="text-lime-600 text-center -mt-48 text-3xl">PKR 50,00,000/= </h2>
       <div className="flex justify-center">
       <Link href="/cityhonda"><button className="bg-blue-600 border-2 border-blue-800 text-white py-2 px-4 rounded mt-8">
        Make Payment
       </button>
       </Link>
       </div>
      
       </div>
    )
}