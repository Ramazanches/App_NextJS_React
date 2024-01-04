import A from './A'
import styles from '../styles/NavBar.module.css'

const NavBar = () => {
	
	return (
			<div className={styles.navbar}>
				<A href={'/'} text='Главная' />
				<A href={'/users'} text='Пользователи' />
			</div>
	)
}

export default NavBar