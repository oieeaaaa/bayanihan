import Link from 'next/link'
import cn from 'classnames'
import styles from './header.module.scss'

const Header = () => (
  <header className={cn('container py-10')}>
    <nav className={cn(styles.nav, 'flex justify-between items-center')}>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/">
        <a className={styles.brand}>Bayanihan</a>
      </Link>
      <Link href="/register">
        <a>Register</a>
      </Link>
    </nav>
  </header>
)

export default Header
