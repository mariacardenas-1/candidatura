import Link from 'next/link'
import style from './BaseLink.module.css'

export default function BaseLink({href, name}) {
    return (
      <Link href={href}>
        <div className={style.link}>{name}</div>
      </Link>
    )
  }