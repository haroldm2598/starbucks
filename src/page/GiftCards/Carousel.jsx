// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/scrollbar';

function Carousel({ data }) {
	return (
		<Swiper
			modules={[Navigation, Pagination, Scrollbar, A11y]}
			spaceBetween={30}
			navigation
			breakpoints={{
				0: {
					slidesPerView: 2
				},
				768: {
					slidesPerView: 3
				},
				1024: {
					slidesPerView: 4
				}
			}}
			onSlideChange={() => console.log('slide change')}
			onSwiper={(swiper) => console.log(swiper)}
		>
			{data?.map((item, index) => (
				<SwiperSlide key={index} className=''>
					<img
						src={item.imageSrc}
						alt='image'
						className='rounded-lg transition-all duration-[250ms] ease-in-out hover:-translate-y-6 cursor-pointer'
					/>
				</SwiperSlide>
			))}
		</Swiper>
	);
}

export default Carousel;
