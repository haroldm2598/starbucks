function Hero() {
	return (
		<section className='heroContent min-h-full py-20 lg:py-0 lg:min-h-screen lg:px-8 flex flex-col items-center lg:items-start justify-center text-center lg:text-start'>
			<div className='[&>*]:mb-5'>
				<h1 className='w-40 lg:w-64 mx-auto lg:mx-0 font-Sodo__semibold text-2xl lg:text-4xl leading-9 lg:leading-[2.875rem] uppercase'>
					free coffee is a tap way
				</h1>
				<h2 className='font-Sodo__regular text-base lg:text-lg'>
					Join now to start earning Rewards.
				</h2>
				<button className='heroContent__btn px-5 btn btn-sm btn-neutral font-Sodo__semibold text-white rounded-full'>
					Join now
				</button>
				<h2 className='last:mb-0 font-Sodo__regular text-base lg:text-lg'>
					Or <span className='underline'>join in the app</span> for the best
					experience
				</h2>
			</div>
		</section>
	);
}

export default Hero;
