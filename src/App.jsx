import {
	Route,
	RouterProvider,
	createHashRouter,
	createRoutesFromElements
} from 'react-router-dom';

import RootLayout from './layout/RootLayout';
import Home from './page/Home';
import Menu from './page/Menu';
import Rewards from './page/Rewards';
import GiftCards from './page/GiftCards';

import './assets/styles/main.scss';

function App() {
	const router = createHashRouter(
		createRoutesFromElements(
			<Route path='/' element={<RootLayout />}>
				<Route index element={<Home />} />
				<Route path='/menu' element={<Menu />} />
				<Route path='/rewards' element={<Rewards />} />
				<Route path='/giftcards' element={<GiftCards />} />
			</Route>
		)
	);

	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}

export default App;
