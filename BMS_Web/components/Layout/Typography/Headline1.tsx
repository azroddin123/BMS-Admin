import React from 'react'

interface Props {
    text ?: string;
    white ?: boolean;
    isH1 ?: boolean;
    style ?: {};
    children ?: any;
    className ?: any;
}

const Headline1 = ({text, white, style, children, isH1, className} : Props) => 
isH1 ?
<h1 style = {{color : white ? 'white' : 'inherit',  fontWeight : '500', ...style}} className={'font-medium  text-3xl md:text-5xl mb-4 ' + className} >{children || text}</h1>
:<h2 style = {{color : white ? 'white' : 'inherit', fontWeight : '500',...style}} className={'font-medium text-3xl md:text-5xl mb-4 ' + className} >{children || text}</h2>

export default Headline1;