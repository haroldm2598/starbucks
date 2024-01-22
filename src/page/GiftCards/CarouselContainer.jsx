import Carousel from './Carousel';

function CarouselContainer({ title, data }) {
	return (
		<div className='max-w-7xl mx-auto py-10 lg:px-10 xl:px-5 2xl:px-0'>
			<h1 className='my-5 font-Sodo__bold text-sm uppercase'>{title}</h1>
			<Carousel data={data} />
		</div>
	);
}

export default CarouselContainer;
