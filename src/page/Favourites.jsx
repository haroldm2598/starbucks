import { useDispatch, useSelector } from 'react-redux';
import { AnimatePresence, motion } from 'framer-motion';

import { handleCurrentState } from '../action/reducer/starbuckSlice';

function Favourites() {
	const { favouritesContent, currentState } = useSelector(
		(state) => state.starbsTemplate
	);
	const dispatch = useDispatch();

	return (
		// https://codesandbox.io/p/sandbox/carousel-fade-effect-forked-n2k7rg?file=%2Fsrc%2FCarousel.js%3A56%2C11
		// Carousel animation
		<section className='my-5'>
			<div className='favouriteContent__title shadow-2xl'>
				<div className='max-w-7xl mx-auto py-2 text-center'>
					<h1 className='my-8 font-Sodo__semibold text-2xl lg:text-3xl'>
						Get your favorites for free
					</h1>

					<div className='my-8 flex flex-row justify-center gap-5 lg:gap-10'>
						{favouritesContent.map((item, index) => (
							<h1
								key={index}
								onClick={() => dispatch(handleCurrentState(item.rate))}
								className='font-Sodo__semibold text-base sm:text-2xl cursor-pointer favouriteContent__title--links favouriteContent__title--grow'
							>
								{item.rate}
								<span className='text-yellow-400 text-xs'>★</span>
							</h1>
						))}
					</div>
				</div>
			</div>

			<div className='favouriteContent__carousel h-full py-5'>
				{favouritesContent.map((item, index) => {
					if (item.rate === currentState) {
						return (
							<AnimatePresence key={index}>
								<motion.div
									className='flex flex-col lg:flex-row justify-center items-center'
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									exit={{ opacity: 0 }}
									transition={{ delay: 0.4, type: 'tween', stiffness: 120 }}
								>
									<img
										src={item.imageSrc}
										alt={item.title}
										className='w-96 h-72 object-contain'
									/>

									<div className='text-center lg:text-start'>
										<h1 className='mb-4 w-full lg:w-96 font-Sodo__semibold text-xl'>
											{item.title}
										</h1>
										<p className='px-2 lg:px-0 w-full lg:w-96 font-Sodo__regular'>
											{item.description}
										</p>
									</div>
								</motion.div>
							</AnimatePresence>
						);
					}
				})}
			</div>
		</section>
	);
}

export default Favourites;
