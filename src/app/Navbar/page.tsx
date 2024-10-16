import Link from "next/link"

export default function Navbar () {
    return (
        <div className="flex items-center justify-center bg-red-700 text-white h-14 gap-4">  
            <Link href="/">Home</Link>
            <Link href="/Contact">Contact Us</Link> <br /> 
            <Link href="/About">About</Link>
        </div>
    )
}