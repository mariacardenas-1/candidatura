import style from './Button.module.css'
import Image from 'next/image'
import icon from '../../../public/whatsappIcon.png'
import Link from 'next/link'

export default function Button() {
    return (
        <Link 
            href="https://wa.link/56ld8t"
            target="_blank"
            rel="noopener noreferrer"
        >
            <button className={style.button}>
                Contáctame
                <Image src={icon} alt='whastApp' width={14}/>
            </button>
        </Link>
    )
}