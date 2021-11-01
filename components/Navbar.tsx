import Link from 'next/link'
import Lang from '../features/lang/Lang'

const Navbar = () => {
    return (
        <div className="navbar">
            <Link href="/">Main</Link>
            <Link href="/home">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/employees">Employees</Link>
            <Link href="/jobrequest">Job Request</Link>
            <Lang />
        </div>
    )
}

export default Navbar;