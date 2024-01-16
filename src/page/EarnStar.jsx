import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import HeadingTitle from '../components/HeadingTitle';
import GridGallery from '../components/GridGallery';

function EarnStar() {
	const { earnContent } = useSelector((state) => state.starbsTemplate);

	return (
		<section className='earnStarsContent'>
			<div className='max-w-7xl mx-auto py-20'>
				<HeadingTitle
					title='Cash or card, you earn Stars'
					description='No matter how you pay, you can earn Stars with your morning coffee. Those Stars add up to (really delicious) Rewards'
				/>

				<div className='px-2 lg:px-0'>
					{earnContent.map((item, index) => (
						<Fragment key={index}>
							<div className='mb-4'>
								<h1 className='font-Sodo__semibold text-lg'>{item.title}</h1>
								<h2 className='font-Sodo__regular'>{item.info}</h2>
							</div>
							<div className='mb-4 grid grid-cols-1 lg:grid-cols-2 place-content-start lg:place-items-center gap-4'>
								<GridGallery data={item.content} />
							</div>
						</Fragment>
					))}
				</div>
			</div>
		</section>
	);
}

export default EarnStar;
