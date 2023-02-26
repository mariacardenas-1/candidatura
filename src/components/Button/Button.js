import style from './Button.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Button({link, cta, iconButton}) {
    return (
        <Link 
            href={link}
            target="_blank"
            rel="noopener noreferrer"
        >
            <button className={style.button}>
                {cta}
                <Image src={iconButton} alt='whastApp' width={14}/>
            </button>
        </Link>
    )
}