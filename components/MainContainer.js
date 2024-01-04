import NavBar from '../components/NavBar'
import Head from 'next/head'

const MainContainer = ({children, keywords}) => {
	
	return (
		<>

			<Head>
				<meta keywords={'ramazan new ssr site ' + keywords}></meta>
				<tilte>Главная страница</tilte>
			</Head>

			<NavBar />

			<div>{children}</div>

		</>
	)
}

export default MainContainer