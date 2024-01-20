import { useSelector } from 'react-redux';

function Main() {
	const { menuContent } = useSelector((state) => state.starbsTemplate);

	return (
		<div className='w-full p-4 lg:p-0'>
			<h1 className='font-Sodo__bold text-2xl lg:text-[1.75rem] lg:leading-[2.438rem]'>
				Menu
			</h1>

			{menuContent.map((item, index) => (
				<div key={index}>
					<h1 className='mt-10 mb-2 font-Sodo__bold text-2xl leading-9'>
						{item.title}
					</h1>
					<hr />

					<div className='py-5 flex flex-col md:flex-row flex-wrap gap-4'>
						{item.listItem.map((menu, index) => (
							<div
								key={index}
								className='w-full md:w-[40%] flex items-center gap-5'
							>
								<img
									src={menu.imageSrc}
									alt={menu.name}
									className='w-16 h-16 lg:w-28 lg:h-28 rounded-full'
								/>
								<h1 className='font-Sodo__regular leading-6'>{menu.name}</h1>
							</div>
						))}
					</div>
				</div>
			))}
		</div>
	);
}

export default Main;
