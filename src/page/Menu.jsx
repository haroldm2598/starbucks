import Sticky from './Menu/sticky';
import Main from './Menu/main';
import Sidebar from './Menu/sidebar';

function Menu() {
	return (
		<>
			<Sticky />
			<section className='max-w-7xl mx-auto flex flex-col lg:flex-row gap-0 lg:gap-10'>
				<Sidebar />
				<Main />
			</section>
		</>
	);
}

export default Menu;
