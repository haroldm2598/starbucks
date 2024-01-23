import { Fragment } from 'react';
import { useSelector } from 'react-redux';

import GiftContainer from '../components/GiftContainer';
import Button from '../components/Button';

import CarouselContainer from './GiftCards/CarouselContainer';
import BusinessGift from './GiftCards/BusinessGift';
import Support from './GiftCards/Support';

import imgGroup from '../assets/images/giftcards/group-gift-cards.webp';

function GiftCards() {
	const { giftcardsContent } = useSelector((state) => state.starbsTemplate);

	return (
		<>
			<GiftContainer>
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
			</GiftContainer>

			<div className='recievedGift my-4'>
				<div className='max-w-7xl mx-auto px-5 xl:px-0 pt-10 pb-4'>
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
								hasOutline={true}
								customStyle='text-black'
							/>
							<Button
								name='Check balance'
								customStyle='btn-neutral text-white last:mr-0'
							/>
						</div>
					</div>

					<h1 className='font-Sodo__semibold text-sm lg:text-base text-right'>
						Card Terms & Conditions
					</h1>
				</div>
			</div>

			<GiftContainer>
				{giftcardsContent[1]?.carouselContent.map((item, index) => (
					<Fragment key={index}>
						<CarouselContainer title={item.title} data={item.imageContent} />
					</Fragment>
				))}
			</GiftContainer>

			<BusinessGift />
			<Support />
		</>
	);
}

export default GiftCards;
