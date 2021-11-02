import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import {
    changeLang,
    selectedLang
} from './langSlice'
import { LanguageDiv,LanguageBtn } from '../../styles/styled-component'
import { useTranslation } from 'react-i18next'

function Lang() {
    const dispatch = useAppDispatch()
    const selectedLangauge = useAppSelector(selectedLang)
    // const [language, setLanguage] = useState('EN')
    const { i18n } = useTranslation()
    useEffect(() => {
        console.log("effect in lang")
        console.log(selectedLangauge.language.toLowerCase())
        i18n.changeLanguage(selectedLangauge.language.toLocaleLowerCase())
    },[selectedLangauge])
    console.log(selectedLangauge.language)

    return (
        <LanguageDiv>
            <LanguageBtn
                onClick={() => dispatch(changeLang('TH'))}
                isEna = {selectedLangauge.language !== 'TH' ? true : false}
            >TH</LanguageBtn>
            |
            <LanguageBtn
                onClick={() => dispatch(changeLang('EN'))}
                isEna = {selectedLangauge.language !== 'EN' ? true : false}
            >EN</LanguageBtn>
        </LanguageDiv>
    )
}

export default Lang;