import Link from 'next/link'

const Navbar = () => {
    return (
        <div className="navbar">
            <Link href="/">Main</Link>
            <Link href="/home">Home</Link>
            <Link href="/about">About</Link>
        </div>
    )
}

export default Navbar;