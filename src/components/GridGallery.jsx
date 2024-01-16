function GridGallery({ data }) {
	return (
		<>
			{data?.map((item, index) => (
				<div
					key={index}
					className='flex flex-row items-start lg:items-center gap-8 lg:gap-5 px-5 lg:px-0 [&>*]:mb-2'
				>
					<img
						src={item.imageSrc}
						alt={item.title}
						className='w-20 h-20 object-contain'
					/>

					<div className='text-start'>
						<h1 className='font-Sodo__semibold text-base lg:text-xl leading-6'>
							{item.title}
						</h1>
						<p className='lg:w-80 xl:w-96 font-Sodo__regular text-sm lg:text-base'>
							{item.description}
						</p>
					</div>
				</div>
			))}
		</>
	);
}

export default GridGallery;
