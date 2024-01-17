import Reward from '../page/Rewards/Reward';
import Hero from '../page/Rewards/Hero';
import Features from '../page/Rewards/Features';
import Favourites from '../page/Rewards/Favourites';
import Extras from '../page/Rewards/Extras';
import EarnStar from '../page/Rewards/EarnStar';
import KeepRewards from '../page/Rewards/KeepRewards';
import Question from '../page/Rewards/Question';
import Cta from '../page/Rewards/Cta';

function Rewards() {
	return (
		<>
			<Reward />
			<Hero />
			<Features />
			<Favourites />
			<Extras />
			<EarnStar />
			<KeepRewards />
			<Question />
			<Cta />
		</>
	);
}

export default Rewards;
