import imageSrc from '../../assets/images/giftcards/bulk-gift-cards.webp';
import Button from '../../components/Button';

function BusinessGift() {
	return (
		<div className='businessGift py-10'>
			<div className='max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center gap-10'>
				<img src={imageSrc} alt='image source' className='w-96' />

				<div className='w-80 [&>*]:mb-4'>
					<h1 className='w-72 font-Sodo__regular text-2xl leading-9'>
						Business gifting — simplified
					</h1>
					<p className='font-Sodo__regular text-sm lg:text-base'>
						Bulk send physical or digital Starbucks Cards to gift, reward,
						incentivize, or show appreciation towards your customers, clients
						and team members. Minimum 15 cards per order.
					</p>
					<Button name='Shop now' />
				</div>
			</div>
		</div>
	);
}

export default BusinessGift;
