import { useSelector } from 'react-redux';

function Cta() {
	const { ctaContent } = useSelector((state) => state.starbsTemplate);
	return (
		<section className='ctaContent p-4 lg:px-8 lg:py-12'>
			<div className='font-Sodo__regular text-sm mb-4 [&>*]:mb-2'>
				<h1>At participating stores. Restrictions apply</h1>
				<p>
					* Excludes taxes and gratuities. At participating stores. Some
					restrictions apply. Flights purchased close to departure may not earn
					double Stars.
				</p>
				<p className='last:mb-0'>
					Stars and miles may not be earned on purchases of alcohol, Starbucks
					Cards and Starbucks Card reloads. For details, visit
					deltastarbucks.com/terms opens in new window
				</p>
			</div>

			<div className='grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-5'>
				{ctaContent.map((item, index) => (
					<div key={index}>
						<h1 className='mb-4 font-Sodo__bold text-[0.813rem] md:text-sm'>
							{item.title}
						</h1>
						{item.content.map((contents, index) => (
							<p
								key={index}
								className='mb-4 font-Sodo__regular text-[0.813rem] md:text-sm'
							>
								{contents}
							</p>
						))}
					</div>
				))}
			</div>
		</section>
	);
}

export default Cta;
