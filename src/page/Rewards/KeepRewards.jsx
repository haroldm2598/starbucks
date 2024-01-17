import HeadingTitle from '../../components/HeadingTitle';
import deltaLogo from '../../assets/images/deltalogo.png';

function KeepRewards() {
	return (
		<section className='keepRewardsContent h-full'>
			<div className='keepRewardsContent__bg mx-0 lg:mx-10'>
				<div className='max-w-7xl mx-auto py-20'>
					<HeadingTitle
						title='Keep the Rewards Coming'
						description="The Rewards don't stop at your morning coffee. Join Starbucks Rewards and unlock perks from our partners, all while earning more Stars"
					/>

					<div className='mb-4 text-center [&>*]:mb-5'>
						<div className='w-44 md:w-96 mx-auto'>
							<img src={deltaLogo} alt='delta logo' className='h-full w-full' />
						</div>
						<p className='w-3/5 mx-auto font-Sodo__regular text-sm lg:text-base'>
							Link your Delta SkyMiles and Starbucks Rewards accounts to earn 1
							mile per $1* spent at Starbucks and double Stars on Delta travel
							days
						</p>

						<button className='px-5 btn btn-sm btn-success text-white rounded-full last:mr-0'>
							Join Starbucks Rewards
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}

export default KeepRewards;
