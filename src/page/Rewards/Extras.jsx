import { useSelector } from 'react-redux';

import HeadingTitle from '../../components/HeadingTitle';
import GridGallery from '../../components/GridGallery';

function Extras() {
	const { extraContent } = useSelector((state) => state.starbsTemplate);

	return (
		<section className='max-w-7xl mx-auto py-20'>
			<HeadingTitle
				title='Endless Extras'
				description='Joining Starbucks Rewards means unlocking access to exclusive benefits. Say hello to easy ordering, tasty Rewards and - yes, free coffee'
			/>

			<div className='grid grid-cols-1 lg:grid-cols-2 place-content-start lg:place-items-center gap-2'>
				<GridGallery data={extraContent} />
			</div>
		</section>
	);
}

export default Extras;
