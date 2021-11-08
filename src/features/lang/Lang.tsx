import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { LanguageDiv, LanguageBtn } from '../../styles/styled-component'
import useTranslation from "next-translate/useTranslation";

function Lang() {
    // const dispatch = useAppDispatch()
    // const selectedLangauge = useAppSelector(selectedLang)
    // const [language, setLanguage] = useState('EN')
    const { pathname } = useRouter()
    const { t, lang } = useTranslation('navbar')

    return (
        <LanguageDiv>
            <LanguageBtn isEnable={lang !== "th"}>
                <Link href={pathname} locale="th">
                    TH
                </Link>
            </LanguageBtn>
            |
            <LanguageBtn isEnable={lang !== "en"}>
                <Link href={pathname} locale="en">
                    EN
                </Link>
            </LanguageBtn>
        </LanguageDiv>
    )
}

export default Lang;