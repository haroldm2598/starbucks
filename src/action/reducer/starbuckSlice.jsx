import { createSlice } from '@reduxjs/toolkit';
import {
	FaSpotify,
	FaFacebook,
	FaPinterest,
	FaInstagram,
	FaYoutube,
	FaTwitter
} from 'react-icons/fa6';

import home1 from '../../assets/images/newyear.webp';
import home2 from '../../assets/images/pistachi.jpg';
import home3 from '../../assets/images/community.webp';
import home4 from '../../assets/images/hazelnut.jpg';
import home5 from '../../assets/images/satisfying.jpg';
import home6 from '../../assets/images/venmo.jpg';

import circle1 from '../../assets/images/circle1.webp';
import circle2 from '../../assets/images/circle2.webp';
import circle3 from '../../assets/images/circle3.webp';

import fav1 from '../../assets/images/coffee.webp';
import fav2 from '../../assets/images/coffeebread.webp';
import fav3 from '../../assets/images/coffeeham.webp';
import fav4 from '../../assets/images/fruit.webp';
import fav5 from '../../assets/images/thumbler.webp';

import extra1 from '../../assets/images/freebies.webp';
import extra2 from '../../assets/images/payahead.webp';
import extra3 from '../../assets/images/freefaster.webp';

import earn1 from '../../assets/images/scan.png';
import earn2 from '../../assets/images/savepayment.webp';
import earn3 from '../../assets/images/preload.png';
import earn4 from '../../assets/images/registercard.webp';

const initialState = {
	isClick: false,
	currentState: 25,
	isQuestionClick: null,
	navLinks: [
		{ name: 'menu', path: '/menu' },
		{ name: 'rewards', path: '/rewards' },
		{ name: 'gift cards', path: '/giftcards' }
	],
	footerLinks: [
		{
			intro: [
				{
					title: 'About Us',
					content: [
						'Our Company',
						'Our Coffee',
						'Stories and News',
						'Starbucks Archive',
						'Investor Relations',
						'Customer Service',
						'Contact Us'
					]
				},
				{
					title: 'Careers',
					content: [
						'Culture and Values',
						'Inclusion, Diversity and Equity',
						'College Archievement Plan',
						'Alumni Community',
						'U.S. Careers',
						'International Careers'
					]
				},
				{
					title: 'Social Impact',
					content: [
						'People',
						'Planet',
						'Environmental and Social Impact Reporting'
					]
				},
				{
					title: 'For Business Partners',
					content: [
						'Landlord Support Center',
						'Suppliers',
						'Corporate Gift Card Sales',
						'Office and Foodservice Coffee'
					]
				},
				{
					title: 'Order and Pick Up',
					content: [
						'Order on the App',
						'Order on the Web',
						'Delivery',
						'Order and Pick Up Options',
						'Explore and Find Coffee for Home'
					]
				}
			],
			icons: [
				FaSpotify(),
				FaFacebook(),
				FaPinterest(),
				FaInstagram(),
				FaYoutube(),
				FaTwitter()
			],
			outro: [
				'Privacy Note',
				'Terms of Use',
				'Do Not Share My Personal Information',
				'CA Supply Chain Act',
				'Accessibility',
				'Cookie Preferences'
			]
		}
	],
	homeContent: [
		{
			customStyle: { orderImg: 'md:order-1', orderInfo: 'md:order-2' },
			imageSrc: home1,
			title: 'New Year, New Yays',
			description:
				'Jump-start your year with a week full of offers in the Starbucks app.*',
			btnName: 'Open the app'
		},
		{
			customStyle: { orderImg: 'md:order-2', orderInfo: 'md:order-1' },
			imageSrc: home2,
			title: 'Pistachi-Yum',
			description:
				'Creamy, cozy vibes make the Pistachio Latte a must-have this season.',
			btnName: 'Order now'
		},
		{
			customStyle: { orderImg: 'md:order-1', orderInfo: 'md:order-2' },
			imageSrc: home3,
			title: '"This is our community. We’re in it together."',
			description:
				'Our partners uplift each other and their communities every day.',
			btnName: 'Learn more'
		},
		{
			customStyle: { orderImg: 'md:order-2', orderInfo: 'md:order-1' },
			imageSrc: home4,
			title: 'Hey there, hazelnut',
			description:
				'Say hello to our Hazelnut Oatmilk Shaken Espresso, a rich and layered pick-me-up.',
			btnName: 'Order now'
		},
		{
			customStyle: { orderImg: 'md:order-1', orderInfo: 'md:order-2' },
			imageSrc: home5,
			title: 'Savory and satisfying',
			description:
				'Grab a subtly sweet Chicken, Maple Butter & Egg Sandwich on the way.',
			btnName: 'Order now'
		},
		{
			customStyle: { orderImg: 'md:order-2', orderInfo: 'md:order-1' },
			imageSrc: home6,
			title: 'Send Starbucks Cards in Venmo',
			description:
				'Send a little treat to someone you care about and brighten their day. You can now send Starbucks eGifts directly through Venmo.**',
			btnName: 'View in Venmo'
		}
	],
	featuresContent: [
		{
			imageSrc: circle1,
			title: 'Download the Starbucks® app',
			description:
				'Join in the app to get access to the full range of Starbucks® Rewards benefits. You can also join online.'
		},
		{
			imageSrc: circle2,
			title: 'Order and pay how you’d like',
			description:
				'Use cash, credit/debit card or save some time and pay right through the app. You’ll collect Stars all ways. Learn how'
		},
		{
			imageSrc: circle3,
			title: 'Earn Stars, get Rewards',
			description:
				'As you earn Stars, you can redeem them for Rewards—like free food, drinks, and more. Start redeeming with as little as 25 Stars!'
		}
	],
	favouritesContent: [
		{
			rate: 25,
			imageSrc: fav1,
			title: 'Customize your drink',
			description:
				'Make your drink just right with an extra espresso shot, nondairy milk or a dash of your favorite syrup.'
		},
		{
			rate: 100,
			imageSrc: fav2,
			title:
				'Brewed hot or iced coffee or tea, bakery item, packaged snack and more',
			description:
				'Treat yourself to an iced coffee, buttery croissant, bag of chips and more.'
		},
		{
			rate: 200,
			imageSrc: fav3,
			title: 'Handcrafted drink (Cold Brew, lattes and more) or hot breakfast',
			description:
				'Turn good mornings great with a delicious handcrafted drink of your choice, breakfast sandwich or oatmeal on us.'
		},
		{
			rate: 300,
			imageSrc: fav4,
			title: 'Sandwich, protein box or at-home coffee',
			description:
				'Enjoy a PM pick-me-up with a lunch sandwich, protein box or a bag of coffee—including Starbucks VIA Instant®.'
		},
		{
			rate: 400,
			imageSrc: fav5,
			title: 'Select Starbucks® merchandise',
			description:
				'Take home a signature cup, drink tumbler or your choice of coffee merch up to $20.'
		}
	],
	extraContent: [
		{
			imageSrc: extra1,
			title: 'Fun freebies',
			description:
				'Not only can you earn free coffee, look forward to a birthday treat plus coffee and tea refills.',
			btnName: 'Learn more'
		},
		{
			imageSrc: extra2,
			title: 'Order & pay ahead',
			description:
				'Enjoy the convenience of in-store, curbside or drive-thru pickup at select stores.',
			btnName: 'Learn more'
		},
		{
			imageSrc: extra3,
			title: 'Get to free faster',
			description:
				'Earn Stars even quicker with Bonus Star Challenges, Double Star Days and exciting games.',
			btnName: 'Learn more'
		}
	],
	earnContent: [
		{
			title: '1★ per dollar',
			info: 'Pay as you go',
			content: [
				{
					imageSrc: earn1,
					title: 'Scan and pay separately',
					description: 'Use cash or credit/debit card at the register.'
				},
				{
					imageSrc: earn2,
					title: 'Save payment in the app',
					description:
						"Check-out faster by saving a credit/debit card or PayPal to your account. You'll be able to order ahead or scan and pay at the register in one step."
				}
			]
		},
		{
			title: '2★ per dollar',
			info: 'Add funds in the app',
			content: [
				{
					imageSrc: earn3,
					title: 'Preload',
					description:
						'To save time and earn Stars twice as fast, add money to your digital Starbucks Card using any payment option. Scan and pay in one step or order ahead in the app.'
				},
				{
					imageSrc: earn4,
					title: 'Register your gift card',
					description:
						'Then use it to pay through the app. You can even consolidate balances from multiple cards in one place.'
				}
			]
		}
	],
	ctaContent: [
		{
			title: 'EARNING STARS',
			content: [
				'Stars cannot be earned on purchases of alcohol, Starbucks Cards or Starbucks Card reloads.',
				'Earn 1 Star per $1 spent when you scan your member barcode in the app, then pay with cash, credit/debit cards or mobile wallets at participating stores. You can also earn 1 Star per $1 spent when you link a payment method and pay directly through the app.',
				'Earn 2 Stars per $1 spent when you load funds and pay with your digital Starbucks Card in the app. You can also earn 2 Stars per $1 spent when you pay in-person at a participating store with your registered physical Starbucks Card or scan your member barcode in the app, and then use any physical Starbucks Card (regardless of whether it is registered) to complete the purchase.'
			]
		},
		{
			title: 'TERMS OF USE',
			content: [
				'For full program details visit starbucks.com/rewards/terms opens in new window',
				'Starbucks® Rewards benefits are available at participating Starbucks stores. Not all stores have the ability to honor Rewards at this time. Visit the Starbucks Store Locator opens in new window and search for locations honoring “Redeem Rewards”.'
			]
		},
		{
			title: 'BENEFITS',
			content: [
				'Free refills available during same in-store visit only. To qualify for the Birthday Reward, you must have made at least one Star-earning transaction.'
			]
		},
		{
			title: 'REDEEMING REWARDS',
			content: [
				'Rewards cannot be redeemed for alcoholic beverages or multi-serve items. You pay the difference for any beverage customization over $1 and/or merchandise item over $20. Not all stores honor tiered Rewards. Select stores redeem 200 Stars for free food or drink items only.'
			]
		}
	]
};

const dataSlice = createSlice({
	name: 'starbucks',
	initialState,
	reducers: {
		handleMenuClick: (state, action) => {
			state.isClick = !action.payload;
		},
		handleCurrentState: (state, action) => {
			state.currentState = action.payload;
		},
		handleQuestionClick: (state, action) => {
			if (state.isQuestionClick === action.payload) {
				state.isQuestionClick = null;
			}

			state.isQuestionClick = action.payload;
		}
	}
});

export const { handleMenuClick, handleCurrentState, handleQuestionClick } =
	dataSlice.actions;
export default dataSlice.reducer;
