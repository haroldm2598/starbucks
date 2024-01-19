import { useSelector } from 'react-redux';

function Question() {
	const { questionContent } = useSelector((state) => state.starbsTemplate);

	return (
		<section className='max-w-7xl mx-auto px-4 lg:px-0 text-center'>
			{questionContent.map((item, index) => (
				<div
					key={index}
					className='[&>*]:mb-2 lg:w-[40rem] mx-auto text-center'
				>
					<h1 className='font-Sodo__regular text-sm'>{item.title}</h1>
					<p className='font-Sodo__regular text-sm leading-6'>
						{item.description}
					</p>
				</div>
			))}

			<h1 className='font-Sodo__regular text-sm'>
				**Account with Venmo required.
			</h1>
		</section>
	);
}

export default Question;
