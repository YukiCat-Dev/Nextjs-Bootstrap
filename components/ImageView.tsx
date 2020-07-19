import BaseComponentProps from './BaseComponentProps';
import React, { useState } from 'react';
import Indicator, { IndicatorProps, IndicateLevel } from './Indicator';
export interface ImageViewProps extends BaseComponentProps {
    src: string
    alt?: string
    refererPolicy?: ReferrerPolicy,
    width?: string
    height?: string
}
/**
 * 显示图片
 * @author KotoriK
 * @export
 * @param props
 * @returns
 */
export default function ImageView(props: ImageViewProps) {
    const [loaded, setLoaded] = useState(false)
    const [showIndicator, setShowIndicator] = useState({ level: IndicateLevel.PRELOAD } as IndicatorProps)
    return (
        <>
            {showIndicator && <Indicator {...showIndicator} style={{ ...props.style, transition: "opacity 2s ease" }} className={props.className} />}
            <img src={props.src}
                style={{ ...props.style }} className={props.className}
                onLoad={() => {
                    setShowIndicator(null)
                    setLoaded(true)
                }}
                hidden={!loaded}
                onError={() => {
                    setLoaded(false)
                    setShowIndicator({ level: IndicateLevel.ERROR })
                }} />
        </>
    )
}