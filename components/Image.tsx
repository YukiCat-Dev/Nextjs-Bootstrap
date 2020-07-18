//一个简单的组件示例
import React from 'react';
export interface ImageProps{
    src:string
}
///显示一个图像
export default function Image(props:ImageProps){
    return (<figure>
        <img src={props.src}/>
    <figcaption>引用自{props.src}</figcaption>
    </figure>)
}