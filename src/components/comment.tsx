"use client"
import Giscus from "@giscus/react";
import {useEffect, useState} from "react";
import {DARK_THEME_EVENT} from "@/constants";

export default function BlogComment({term}: {term:string}){
    const [theme, setTheme] = useState(localStorage.theme)

    useEffect(() => {
        const handleTheme = () => {
            setTheme(localStorage.theme)
        }

        window.addEventListener(DARK_THEME_EVENT, handleTheme)
        return () => window.removeEventListener(DARK_THEME_EVENT, handleTheme)
    }, [])

    return (
        <>
            <Giscus
                id="comments"
                repo="firdausng/blog-comments"
                repoId="R_kgDOKBT8qg="
                category="Announcements"
                categoryId="DIC_kwDOF1L2fM4B-hVS"
                mapping="specific"
                term={term}
                reactionsEnabled="1"
                emitMetadata="0"
                inputPosition="top"
                theme={theme}
                lang="en"
                loading="lazy"
            />
        </>
    )
}