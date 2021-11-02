import Link from 'next/link'
import Lang from '../features/lang/Lang'
import { useTranslation } from 'react-i18next'

const Navbar = () => {
    const { t } = useTranslation()

    return (
        <div className="navbar">
            <div className="navbar--menu">
                <Link href="/">{t('menu.main')}</Link>
                <Link href="/home">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/employees">Employees</Link>
                <Link href="/jobrequest">Job Request</Link>
                <Link href="/animate">Animate</Link>
            </div>
            <Lang />
        </div>
    )
}

export default Navbar;