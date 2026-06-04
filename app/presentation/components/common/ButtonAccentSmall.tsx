import { LucideIcon } from "lucide-react"
import Link from "next/link";

export type ButtonSize = 'small' | 'medium' | 'large';

const sizeStyles: Record<ButtonSize, string> = {
        small: 'px-4 py-1 ',
        medium: 'px-12 py-2 ',
        large: 'px-18 py-3 '
    };

export type ButtonProps = {
      icon?: LucideIcon
      text: string
      size: ButtonSize
      uppercase?: boolean
      pruebaFuncion?: () => void;
}


export default function ButtonAccentSmall( { icon: Icon, text, size, uppercase, pruebaFuncion}: ButtonProps ) {
      return(
            <Link className={` flex gap-2 py-2 ${sizeStyles[size]}  rounded-md bg-colorAccent text-xs md:text-sm text-textDark ${uppercase ? ' font-semibold uppercase ' : ''} md:hover:scale-105 transition-transform duration-150 md:cursor-pointer  `} onClick={pruebaFuncion} href={""}> {Icon && <Icon size={16} color="#23212a" />} {text} </Link>
      )
}