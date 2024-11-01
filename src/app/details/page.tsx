import Link from "next/link"
export default function Forms (){
    return(
        <div>
        <h1 className="text-5x1 font-semibold text-center">ENTER YOUR DETAILS</h1>
        <form className="flex flex-col gap-5 justify-center items-center rounded-2xl px-4 mt-4">
            <input type="name"className="rounded-2xl text-black w-2/5 py-2 px-2" placeholder="Enter Your Name"/>
            <input type="email"className="rounded-2xl text-black w-2/5 py-2 px-2" placeholder="Enter Your Email" />
            <input type="password"className="rounded-2xl text-black w-2/5 py-2 px-2" placeholder="Card Number"/>
            <input type="address"className="rounded-2xl text-black w-2/5 py-2 px-2" placeholder="Enter Your Address"/>
        </form>
        <div className="flex justify-center">
        <Link href="/placeyourorder"><h2 className="mt-8 font-mono text-center text-2xl bg-blue-400 w-64">
          Place Your Order
        </h2>
        </Link>
        </div>
        </div>
    )
}