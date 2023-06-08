import React from 'react'

interface Props {
    text ?: string;
    white ?: boolean;
    isH1 ?: boolean;
    style ?: {};
    children ?: any;
    className ?: string
}

const Headline2 = ({text, white, style, children,className} : Props) =>  <h2 style = {{color : white ? 'white' : 'inherit', fontSize : '2rem', fontWeight : '500', ...style}} className={className} >{children || text}</h2>

export default Headline2;