import { useRouter } from "next/router";
import Link from "next/link";

interface NavbarProps{
    text: string;
    href: string;
}

const style = {
    color: '#0070f3',
    textDecoration: 'underline'
}

export const ActiveLink = ({text, href}: NavbarProps) => {

    const { asPath } = useRouter();
    
  return (
    <Link style={ asPath === href ? style : undefined} href={href}>{text}</Link>
  )
}
