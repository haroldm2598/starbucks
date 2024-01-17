import {
	Route,
	RouterProvider,
	createHashRouter,
	createRoutesFromElements
} from 'react-router-dom';

import RootLayout from './layout/RootLayout';
import Home from './page/Home';
import Rewards from './page/Rewards';

import './assets/styles/main.scss';

function App() {
	const router = createHashRouter(
		createRoutesFromElements(
			<Route path='/' element={<RootLayout />}>
				<Route index element={<Home />} />
				<Route path='/menu' element={<h1>Menu</h1>} />
				<Route path='/rewards' element={<Rewards />} />
				<Route path='/giftcards' element={<h1>Gift cards</h1>} />
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
