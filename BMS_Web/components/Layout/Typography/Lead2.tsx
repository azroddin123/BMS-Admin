import React from 'react'

interface Props {
    text ?: string;
    white ?: boolean;
    isH1 ?: boolean;
    style ?: object;
    className ?: string;
    children ?: any
}

const Lead2 = ({text, white, style, className, children} : Props) =>  <p style = {{ fontSize : '1rem', fontWeight : '400',...style}} className={className} >{children || text}</p>

export default Lead2;