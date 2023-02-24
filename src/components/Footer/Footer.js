import style from './Footer.module.css'
import BaseLink from '../BaseLink/BaseLink'

export default function Footer() {
    return (
      <div className={style.prueba}>
        Diseño y desarrollo por: 
        <BaseLink
            href={'https://github.com/mariacardenas-1'}
            name={'Mafe Cárdenas'}
        />
      </div>
    )
  }