import { useSelector } from 'react-redux';

function Hero() {
	const { homeContent } = useSelector((state) => state.starbsTemplate);

	console.log(homeContent);
	return (
		<section className='max-w-full max-h-fit lg:mx-8 my-8'>
			{/* try mo lagyan ng block at max-width yun pang image */}
			{homeContent.map((item, index) => (
				<div key={index} className='flex flex-col md:flex-row mb-8'>
					<div className={`${item.customStyle.orderImg} flex-1 bg-slate-400 `}>
						<img
							src={item.imageSrc}
							alt='image source'
							className=' h-full w-full block'
						/>
					</div>
					<div
						className={`${item.customStyle.orderInfo} flex-1 min-h-fit max-w-full px-4 py-8 lg:py-0 lg:px-0 flex flex-col justify-center items-center`}
					>
						<div className='lg:w-[28rem] [&>*]:mb-8 text-center'>
							<h1 className={`${item.customStyle.title}`}>{item.title}</h1>
							<p className={`${item.customStyle.description}`}>
								{item.description}
							</p>
							<button className='px-5 btn btn-sm btn-outline rounded-full last:mb-0'>
								{item.btnName}
							</button>
						</div>
					</div>
				</div>
			))}
		</section>
	);
}

export default Hero;
