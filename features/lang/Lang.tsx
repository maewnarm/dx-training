import { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import {
    changeLang,
    selectedLang
} from './langSlice'

function Lang() {
    const dispatch = useAppDispatch()
    const selectedLangauge = useAppSelector(selectedLang)
    // const [language, setLanguage] = useState('EN')

    return (
        <div className="navbar__language">
            <a
                onClick={() => dispatch(changeLang('TH'))}
                style={{ pointerEvents: selectedLangauge.language !== 'TH' ? 'inherit' : 'none' }}
            >TH</a>
            |
            <a
                onClick={() => dispatch(changeLang('EN'))}
                style={{ pointerEvents: selectedLangauge.language !== 'EN' ? 'inherit' : 'none' }}
            >EN</a>
        </div>
    )
}

export default Lang;