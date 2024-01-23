import Button from '../../components/Button';

function Support() {
	return (
		<div className='support'>
			<div className='max-w-7xl mx-auto px-5 xl:px-0 py-10 [&>*]:mb-4'>
				<h1 className='font-Sodo__bold text-sm uppercase'>gift card support</h1>
				<p className='w-[25rem] font-Sodo__regular text-base'>
					Use the links below to manage eGifts you have sent or received, or
					view our full Card Terms & Conditions
				</p>

				<div className='[&>*]:mr-4'>
					<Button
						name='eGift Support'
						hasOutline={true}
						customStyle='font-Sodo__semibold text-base'
					/>
					<Button
						name='See Terms & Conditions'
						hasOutline={true}
						customStyle='font-Sodo__semibold text-base'
					/>
					<Button
						name='eGift FAQs'
						hasOutline={true}
						customStyle='mt-5 lg:mt-0 font-Sodo__semibold text-base'
					/>
				</div>
			</div>
		</div>
	);
}

export default Support;
