import useTranslation from 'next-translate/useTranslation';
import style from './Footer.module.css'
import BaseLink from '../BaseLink/BaseLink'

export default function Footer() {
    const { t } = useTranslation('common');
    return (
      <div className={style.prueba}>
                {t('footerText')}
        <BaseLink
            href={'https://github.com/mariacardenas-1'}
            name={'Mafe Cárdenas'}
        />
      </div>
    )
  }