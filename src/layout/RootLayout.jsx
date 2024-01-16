import Navbar from './Navbar';

import Hero from '../page/Hero';
import Reward from '../page/Reward';
import Features from '../page/Features';
import Favourites from '../page/Favourites';
import Extras from '../page/Extras';
import EarnStar from '../page/EarnStar';
import KeepRewards from '../page/KeepRewards';
import Question from '../page/Question';
import Cta from '../page/Cta';
import Footer from './Footer';

function RootLayout() {
	return (
		<>
			<header>
				<Navbar />
				<Reward />
			</header>

			<main>
				<Hero />
				<Features />
				<Favourites />
				<Extras />
				<EarnStar />
				<KeepRewards />
				<Question />
				<Cta />
			</main>

			<footer>
				<Footer />
			</footer>
		</>
	);
}

export default RootLayout;
