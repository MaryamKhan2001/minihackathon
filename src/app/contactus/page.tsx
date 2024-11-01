import Link from "next/link"
export default function ContacUs(){
    return(
        
        <div className="flex items-center gap-28 ml-80 mt-8">
            <Link href="https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2F">
            <div>
                <img height={100} width={100} src="https://store-images.s-microsoft.com/image/apps.30645.9007199266245907.cb06f1f9-9154-408e-b4ef-d19f2325893b.ac3b465e-4384-42a8-9142-901c0405e1bc" alt="facbook" />
            </div>
            </Link>

           <Link href="https://www.instagram.com/accounts/login/">
            <div>
        <img height={100} width={100} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6IB5qpWdVHsMpYNy2w_LywTl6mwn6qr39qQ&s" alt="instagram" />
            </div>
          </Link>
          
            <Link href="https://www.linkedin.com/login">
            <div>
          <img height={100} width={100} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRokEYt0yyh6uNDKL8uksVLlhZ35laKNQgZ9g&s" alt="linkedin" />
            </div>
            </Link>
        </div>
    )
}