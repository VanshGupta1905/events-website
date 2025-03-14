import Link from "next/link"
import Image from "next/image"
export const Header=()=>{
    return (
        <div>
        <header>
            <div>
            <div className="topNav">
                <Image alt="logo" src={'/images/final_logo.png'} width={140} height={90}/>
            <nav>
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li> <Link href="/events">Events</Link></li> 
                    <li> <Link href="/about-us">About</Link></li>
                </ul>
              
            </nav>

            </div>
            <p className="title">Sed ut perspiciatis unde omnis </p>
            </div>
        </header>
        </div>
    )
}