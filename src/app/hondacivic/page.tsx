import Link from "next/link"
export default function HondaCivic(){
    return(
         <div className="items-center justify-between">
        <h1 className="font-semibold underline text-3xl text-center">HONDA CIVIC 2024 PRICE IN PAKISTAN , IMAGES , REVIEWS AND SPECS</h1>
       <img className="ml-96 mt-12" width={400} height={400} src="https://cache3.pakwheels.com/system/car_generation_pictures/6000/original/Civic_10th_Gen_-_PNG.png?1635418859" alt="honda civic" /> 
       <br />
       
       <p className=" -mt-48 flex items-center justify-center h-screen text-center">The Honda Civic is a highly regarded compact car known for its dynamic performance, reliability, and advanced features. Available in various body styles, including sedan, coupe, and hatchback, the Civic appeals to a broad audience with its versatile design. It often comes equipped with efficient engines that deliver a spirited driving experience </p>
       <h2 className="text-lime-600 text-center -mt-48 text-3xl">PKR 90,00,000/= </h2>
       <div className="flex justify-center">
       <Link href="/civichonda"><button className="bg-blue-600 border-2 border-blue-800 text-white py-2 px-4 rounded mt-8">
        Make Payment
       </button>
       </Link>
       </div>
      
       </div>
    )
}