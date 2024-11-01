import Link from "next/link"
export default function Navbar (){
    return (
        <div>
        <nav className="flex bg-black h-20">
       <img className="ml-50"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHJZQuZYY1uO861_r45L2WIvNQcleiga_4cQ&s"  alt="logo" />
       
        
            <ul className="flex items-center ml-30 text-white gap-5">
               <Link href="/usedcars"> <li>Used Car</li></Link> 
                <Link href="/newcar"><li>New Car</li></Link>
               <Link href="bikes"><li>Bikes</li></Link>
                <Link href="autostore"><li>Auto Store</li></Link>
                <Link href="videos"><li>Videos</li></Link>
                <Link href="forums"><li>Forums</li></Link>
                <Link href="blogs"><li>Blog</li></Link>
                <Link href="more"><li>More</li></Link>
                <Link href="/contactus"><li>Contact Us</li></Link>
            </ul>
            
            <ul className="flex items-center ml-4 px-4 gap-2 absolute top-4 right-3">
            
         <li> <Link className="text-red-600"href="/sign up">sign up</Link></li>
         <li>  <Link className="text-red-600"href="/sign in">sign in</Link></li>
         </ul>   
         
            </nav>
      
        </div>
    )
}