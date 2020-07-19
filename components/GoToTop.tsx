import { useState, useEffect } from "react";
import style from './GoToTop.module.css'


/**
 * 回到顶部
 *
 * @author KotoriK
 * @export
 * @returns
 */
export default function GoToTop() {
    const [visible, setVisible] = useState<boolean>(false)
    const handleScroll = (ev: Event) => {
        setVisible(window.scrollY > 0)
    }
    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true }
        )
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    },[/**仅在第一次渲染时运行 */])
    return (
        <img src="/svg/back-to-top.svg" className={style['goto-top'] + (visible ? (' ' + style['active']) : '')} onClick={handleClick} />
    )
}