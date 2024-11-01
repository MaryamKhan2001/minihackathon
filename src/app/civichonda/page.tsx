import Link from "next/link"
export default function CivicHonda(){
    return(
        <div className="items-center justify-between">
        <h1 className="font-semibold underline text-3xl text-center">HONDA CIVIC 2024 PRICE IN PAKISTAN , IMAGES , REVIEWS AND SPECS</h1>
       <img className="ml-96 mt-12" width={400} height={400} src="https://cache3.pakwheels.com/system/car_generation_pictures/6000/original/Civic_10th_Gen_-_PNG.png?1635418859"  alt="honda civic" /> 
      
       <div className="flex items-center justify-center gap-12">
      <button className="mt-16 px-6 py-3 bg-blue-600 border-2 border-blue-800 text-white">
       Book a test drive
      </button>
      <button className="mt-16 px-6 py-3 bg-blue-600 border-2 border-blue-800 text-white">
       Request Bank Finance
      </button>
      <button className="mt-16 px-6 py-3 bg-blue-600 border-2 border-blue-800 text-white">
       Visit Place
      </button>
      <button className="mt-16 px-6 py-3 bg-blue-600 border-2 border-blue-800 text-white">
       Car Inspection
      </button>
</div>
<div>
    <h3 className="flex items-center justify-center text-3xl mt-12">Vehicle Description</h3>
    <ul className="flex mt-12 gap-8 ml-16">
        <li>Number of Doors = 4</li>
        <li>Engine = 1800 CC</li>
        <li>Condition = 9/10</li>
        <li>Driven = 9,500 KM</li>
        <li>Suspension Type = Soft Suspension</li> 
    </ul>
    <ul className="flex mt-12 gap-8 ml-72">
        <li>Avg = 13 km/ltr</li>
        <li>Transmission = Automatic</li>
        <li>Fuel Type = High Octane</li>
    </ul>
</div>
<div>
    <h3 className="text-lime-600 text-center mt-6 text-3xl">PKR = 90,00,000/=</h3>
</div>
<div className="flex justify-center">
       <Link href="/hondacivic"><button className=" bg-blue-600 border-2 border-blue-800 text-white px-6 py-2 rounded mt-8">
        Back
       </button>
       </Link>
       </div>
       <div className="flex justify-center">
       <Link href="/details"><button className="text-2xl bg-blue-600 border-2 border-blue-800 text-white px-14 py-2 rounded mt-8">
        Confirm
       </button>
       </Link>
       </div>
       </div>
    )
}