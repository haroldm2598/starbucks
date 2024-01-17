import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

function RootLayout() {
	return (
		<>
			<header>
				<Navbar />
			</header>

			<main>
				<Outlet />
			</main>

			<footer>
				<Footer />
			</footer>
		</>
	);
}

export default RootLayout;
