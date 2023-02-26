import Link from 'next/link'
import style from './BaseLink.module.css'

export default function BaseLink({href, name, target = '_blank'}) {
    return (
      <Link href={href} target={target}>
        <div className={style.link}>{name}</div>
      </Link>
    )
  }