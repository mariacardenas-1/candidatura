import style from './mainLayout.module.css'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer.js'

export default function MainLayout({ children }) {
    return (
      <div className={style.layout}>
        <Header />
        <main className={style.main} >{children}</main>
        <Footer />
      </div>
    )
  }