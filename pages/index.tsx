import React, { useRef } from "react";
import Image from '../components/Image'
import GoToTop from "../components/GoToTop";
import Header from "../containers/Header";
import Body from "../containers/Body";
export default function Index(){
    const pageRoot = useRef()
    return (<>
    <Header></Header>
        <Body><h1>Hello World!</h1>
        <Image src="https://cdn.jsdelivr.net/gh/DazaiYuki/PicStorage/img/20200702013547.jpg"/>
        <GoToTop />
        <pre>
            {'long\nlong\nlong\nlong\nlong\nlong\nlong\nlong\nlong\nlong\nlong\nlong\nlong\nlong\nlong\nlong\nlong\nlong\nlong\nlong\nlong\nlong\nlong\nlong\nlong\nlong\nlong\nlong\nlong\nlong\nlong\nlong\nlong\nlong\nlong\nlong\nlong\nlong\nlong\nlong\nlong\nlong\nlong\nlong\nlong\nlong\nlong\nlong\nlong\nlong\nlong\nlong\nlong\nlong\nlong\nlong\nlong\nlong\nlong\nlong\nlong\nlong\nlong\nlong\nlong\ncontent'}
        </pre></Body>
    </>)
}