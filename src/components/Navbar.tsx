import Link from 'next/link'
import Lang from '../features/lang/Lang'
import useTranslation from "next-translate/useTranslation";

const Navbar = () => {
    const { t } = useTranslation('navbar')

    return (
        <div className="navbar">
            <div className="navbar--menu">
                <Link href="/">{t('menu.main')}</Link>
                <Link href="/home">{t('menu.home')}</Link>
                <Link href="/about">{t('menu.about')}</Link>
                <Link href="/employees">{t('menu.employees')}</Link>
                <Link href="/jobrequest">{t('menu.jobrequest')}</Link>
                <Link href="/animate">{t('menu.animate')}</Link>
            </div>
            <Lang />
        </div>
    )
}

export default Navbar;