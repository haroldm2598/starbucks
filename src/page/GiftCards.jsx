import { useSelector } from 'react-redux';

import imgGroup from '../assets/images/giftcards/group-gift-cards.webp';
import Button from '../components/Button';
import CarouselContainer from './GiftCards/CarouselContainer';
import BusinessGift from './GiftCards/BusinessGift';
import Support from './GiftCards/Support';

function GiftCards() {
	const { giftcardsContent } = useSelector((state) => state.starbsTemplate);
	// todo list tomorrow fix the annoying array structure into one and map the rest of following. create new array for feature seperate from array
	return (
		<section className='mt-5 lg:mt-10 px-10 lg:px-0 min-h-screen'>
			<CarouselContainer
				title={giftcardsContent[0].title}
				data={giftcardsContent[0].imageContent}
			/>

			<div className='giftcardGroup max-w-7xl mx-auto px-5 py-2 flex items-center gap-5 rounded-lg'>
				<img src={imgGroup} alt='image group' className='h-16' />
				<p className='font-Sodo__regular text-sm lg:text-base'>
					New! Effortlessly send up to 10 eGifts per purchase. Select a design
					to start!
				</p>
			</div>

			<div className='recievedGift my-4'>
				<div className='max-w-7xl mx-auto py-5'>
					<div className='mb-10 flex flex-col lg:flex-row lg:items-center gap-1 lg:gap-4'>
						<h1 className='font-Sodo__semibold text-xl lg:text-2xl'>
							Received a gift card?
						</h1>
						<h2 className='font-Sodo__regular text-base lg:text-xl'>
							Earns 2★Stars per $1
						</h2>

						<div className='[&>*]:mr-5'>
							<Button
								name='Add or Reload'
								customStyle='btn-outline text-white'
							/>
							<Button
								name='Check balance'
								customStyle='btn-neutral text-white last:mr-0'
							/>
						</div>
					</div>

					<h1 className='font-Sodo__semibold text-right'>
						Card Terms & Conditions
					</h1>
				</div>
			</div>

			<CarouselContainer
				title={giftcardsContent[1].title}
				data={giftcardsContent[1].imageContent}
			/>

			<CarouselContainer
				title={giftcardsContent[2].title}
				data={giftcardsContent[2].imageContent}
			/>

			<CarouselContainer
				title={giftcardsContent[3].title}
				data={giftcardsContent[3].imageContent}
			/>

			<CarouselContainer
				title={giftcardsContent[4].title}
				data={giftcardsContent[4].imageContent}
			/>

			<BusinessGift />
			<Support />
		</section>
	);
}

export default GiftCards;
