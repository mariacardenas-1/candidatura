import style from './mainLayout.module.css'

export default function MainLayout({ children }) {
    return (
      <>
        <main className={style.layout} >{children}</main>
      </>
    )
  }