import useTranslation from 'next-translate/useTranslation';
import Button from '../Button/Button'
import styles from './HeroText.module.css'
import Image from 'next/image'
import Link from 'next/link'
import icon from '../../../public/whatsappIcon.png'


export default function HeroText({isDesktop}) {
  const { t } = useTranslation('common')
    return (
        <div className= {isDesktop ? styles.heroDesktop : styles.heroMobile}>
            <h1 className={styles.title}>
              {t('title')}
            </h1>
            <p className={styles.text}>{t('description')}<strong>{t('description1')}</strong>
              {t('description2')}<strong> {t('description3')} </strong>{t('description4')}<strong>{t('description5')}</strong>{t('description6')}
            </p>
            <div className={styles.iconBox}> 
            <Link href='https://www.facebook.com/profile.php?id=100089668390660&mibextid=ZbWKwL' target='_blank'>
              <Image
               className={styles.photo}
               src="/facebook-icon.png"
               alt="13"
               width={40}
               height={40}
               priority
               />
               </Link>
               <Link href='https://instagram.com/ruso_alcalde?igshid=ZDdkNTZiNTM=' target='_blank'>
                  <Image
                  className={styles.photo}
                  src="/instagram-icon.png"
                  alt="13"
                  width={40}
                  height={40}
                  priority
                />
                </Link>
                <Link href='https://www.tiktok.com/@rusoalcaldetunja' target='_blank'>
                <Image
                  className={styles.photo}
                  src="/tiktok-icon.png"
                  alt="13"
                  width={40}
                  height={40}
                  priority
                />
                 </Link>
            </div>

            <Button 
              link='https://wa.link/56ld8t' 
              cta={t('headerCta')} 
              iconButton={icon}
            />
        </div>
    )
  }