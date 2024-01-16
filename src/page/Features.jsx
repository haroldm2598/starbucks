import { useSelector } from 'react-redux';
import HeadingTitle from '../components/HeadingTitle';
import Gallery from '../components/Gallery';

function Features() {
	const { featuresContent } = useSelector((state) => state.starbsTemplate);

	return (
		<section className='max-w-7xl mx-auto py-20'>
			<HeadingTitle
				title='Getting started is easy'
				description='Earn Stars and get rewarded in a few easy steps.'
			/>

			<div className='grid grid-cols-1 lg:grid-cols-3'>
				<Gallery data={featuresContent} />
			</div>
		</section>
	);
}

export default Features;
