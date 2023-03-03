import useTranslation from 'next-translate/useTranslation';
import Languages from '../Languages/Languages'
import style from './Header.module.css'

export default function Header() {
      const { t } = useTranslation('common');
    return (
      <div className={style.header}>
        {t('headerText')}
        <Languages />
      </div>
    )
  }