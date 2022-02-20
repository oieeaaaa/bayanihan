import cn from 'classnames'
import Link from 'next/link'
import styles from './footer.module.scss'

const Footer = () => (
  <footer className={styles.container}>
    <div className={cn(styles.body, 'container')}>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <span className={styles.listTitle}>Menu</span>
          <ul className={styles.nav}>
            <li>
              <Link href="/about">
                <a>About</a>
              </Link>
            </li>
            <li>
              <Link href="/register">
                <a>Register</a>
              </Link>
            </li>
          </ul>
        </li>
        <li className={styles.listItem}>
          <span className={styles.listTitle}>Socials</span>
          <ul className={styles.nav}>
            <li>
              <Link href="/">
                <a>Facebook</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Twitter</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Medium</a>
              </Link>
            </li>
          </ul>
        </li>
        <li className={styles.listItem}>
          <span className={styles.listTitle}>Supporters</span>
          <ul className={styles.nav}>
            <li>James</li>
            <li>Gina</li>
            <li>Kevin</li>
            <li>Josh</li>
            <li>Michael</li>
            <li>Hannah</li>
            <li>Michelle</li>
          </ul>
        </li>
      </ul>
    </div>
    <div className={styles.footnote}>
      <p className="container">
        &copy; 2022 Bayanihan; All rights reserved. Made in Baguio City,
        Philippines
      </p>
    </div>
  </footer>
)

export default Footer
