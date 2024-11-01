import { headers } from "next/headers";
import Link from "next/link";
export default function Herosection(){
    return(
        <div>         
            <div>
                <h1 className="flex items-center ml-96 font-semibold mt-3 text-white">Sell Your Car on PakWheels And Get the Best Price</h1>  
            </div>
            <div className=" flex justify-center gap-4">
                <div className="ml-12 mt-6 space-y-2">
                    <h1 className="text-blue-800">Post your Ad on PakWheels</h1>
                    <br />
                    <h1>
                        <span>✔</span> Post your Ad For Free in 3 Easy steps
                    </h1>
                    <h1>
                        <span>✔</span> Get Genuine offers from Verified Buyers
                    </h1>
                    <h1> 
                        <span>✔</span> Sell your car fast at the best price
                    </h1>
                    <br />
                    <button className="bg-red-500 text-white ml-5 rounded">Post Your Ad</button>
                </div>
                <h1 className="ml-24 mt-28 font-semibold">OR</h1>
                <div className="mt-6 ml-20 space-y-2">
                    <h1 className="text-blue-800 ml-6">Try PakWheels Sell It For Me</h1>
                    <br />
                    <h1>
                        <span>✔</span> Dedicated Sales Expert To Sell Your Car
                    </h1>
                    <h1>
                        <span>✔</span> We Bargain For You And Share The Best Offer
                    </h1>
                    <h1> 
                        <span>✔</span> We Ensure Safe & Secure Transaction
                    </h1>
                    <br />
                    <button className="bg-blue-500 text-white ml-5 rounded">Post Your Ad</button>
                </div>
            </div>
            <br />
            <hr />
            <br />
            <div>
                <h1 className=" font-bold ml-60 mt-6">FEATURED NEW CARS</h1>
                <div className="flex gap-6 mt-6 font-medium ml-60">
                <h1>Popular</h1>
                <h1>Upcoming</h1>
                <h1>New Launched</h1>
                </div>
              
                <div className="flex justify-center -ml-52 gap-3 ">
                <Link href="/toyotacorolla">
                <div className="border border-black ml-4 mt-6">
                <img height={200} width={120} src="https://cache4.pakwheels.com/system/car_generation_pictures/2867/original/Toyota_Corolla_10th.jpg?1444079020" alt="toyota corolla" />
                <h3 className="ml-4">Toyota Corolla</h3>
                <p className="text-green-500 text-sm ml-1">PKR 59.7-75.5 lacs</p>
                <p className="ml-4">★★★☆☆</p>
                </div>
                </Link>
                
                <Link href="/suzukialto">
                <div className="border border-black ml-4 mt-6">
                <img height={200} width={120} src="https://cache4.pakwheels.com/system/car_generation_pictures/6013/original/Suzuki_Alto_-_PNG.png?1635945100" alt="suzuki alto" />
                <h3 className="ml-4">Suzuki Alto</h3>
                <p className="text-green-500 text-sm ml-1">PKR 23.3-30.5 lacs</p>
                <p className="ml-4">★★★☆☆</p>
                </div>
                </Link>

                <Link href="/hondacity"> 
                <div className="border border-black ml-4 mt-6">  
                <img height={200} width={120} src="https://cache1.pakwheels.com/system/car_generation_pictures/6425/original/Honda_City_Front.jpg?1651424945" alt="honda city" />
                <h3 className="ml-4" >Honda City</h3>
                <p  className="text-green-500 text-sm ml-1">PKR 46.5-58.5 lacs</p>
                <p className="ml-4">★★★☆☆</p>
                 </div>
                </Link>  
               
                
                <Link href="/hondacivic">
                <div className="border border-black ml-4 mt-6"></div>
                <img className="ml-4" height={200} width={120} src="https://cache3.pakwheels.com/system/car_generation_pictures/6000/original/Civic_10th_Gen_-_PNG.png?1635418859" alt="honda civic" />
                <h3 className="ml-8">Honda Civic</h3>
                <p className="text-green-500 text-sm ml-6">PKR 86.6-99.0 lacs</p>
                <p className="ml-8">★★★☆☆</p>
                </Link>
                </div>

            </div>
        </div>
        
    );
}