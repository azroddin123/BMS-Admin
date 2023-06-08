import React from "react";
import styles from "@/styles/ui.module.scss";
import Link from "next/link";
interface ButtonProps {
  secondary?: boolean; // optional boolean prop
  text: string;
  link?: string;
  style ?: {};
  className ?: string;
  children ?: null 
}

const Button = ({ secondary, text, link = '/',style ,className, children}: ButtonProps) => {
  // console.log(secondary);
  return (
    <Link href = {link} >
    <div className={'max-w-[100px] text-md ' + ' ' + className + ' '+ styles.btn + " " + (secondary ? styles.btnS : styles.btnP) } style = {style} >
      {children || text}
    </div>
      </Link>
  );
};
 
export default Button;
