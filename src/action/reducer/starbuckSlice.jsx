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

import menuDrinks1 from '../../assets/images/menu/oleato.avif';
import menuDrinks2 from '../../assets/images/menu/hotcoffee.avif';
import menuDrinks3 from '../../assets/images/menu/hotteas.avif';
import menuDrinks4 from '../../assets/images/menu/hotdrinks.avif';
import menuDrinks5 from '../../assets/images/menu/frapp.avif';
import menuDrinks6 from '../../assets/images/menu/coldcoffees.avif';
import menuDrinks7 from '../../assets/images/menu/icedteas.avif';
import menuDrinks8 from '../../assets/images/menu/colddrinks.avif';

import menuFood1 from '../../assets/images/menu/hotbreakfast.avif';
import menuFood2 from '../../assets/images/menu/oatmeal.avif';
import menuFood3 from '../../assets/images/menu/bakery.avif';
import menuFood4 from '../../assets/images/menu/lunch.avif';
import menuFood5 from '../../assets/images/menu/snacks.avif';

import menuCoffe1 from '../../assets/images/menu/wholebean.avif';
import menuCoffe2 from '../../assets/images/menu/ground.avif';
import menuCoffe3 from '../../assets/images/menu/viainstant.avif';

import menuMerch1 from '../../assets/images/menu/coldcups.avif';
import menuMerch2 from '../../assets/images/menu/tumblers.avif';
import menuMerch3 from '../../assets/images/menu/mugs.avif';
import menuMerch4 from '../../assets/images/menu/others.avif';

import featureCards1 from '../../assets/images/giftcards/ConfettiCelebrationFY24.avif';
import featureCards2 from '../../assets/images/giftcards/MyTreatFY24.avif';
import featureCards3 from '../../assets/images/giftcards/ValentineHeartsFY24.avif';
import featureCards4 from '../../assets/images/giftcards/WarmMyHeartFY23.avif';
import featureCards5 from '../../assets/images/giftcards/LoveYouGirlFY20.avif';
import featureCards6 from '../../assets/images/giftcards/LNYDragonFY24.png';
import featureCards7 from '../../assets/images/giftcards/BuildingSnowmenFY24.jpg';
import featureCards8 from '../../assets/images/giftcards/BigThankYouFY22.avif';
import featureCards9 from '../../assets/images/giftcards/GreatWorkDeservesCoffeeFY23.avif';
import featureCards10 from '../../assets/images/giftcards/ThinkinOfYaFY24.avif';
import featureCards11 from '../../assets/images/giftcards/YoureJustTheBestFY23.webp';
import featureCards12 from '../../assets/images/giftcards/YayForCoffeeFY24.avif';
import featureCards13 from '../../assets/images/giftcards/GoodVibesFY22.avif';
import featureCards14 from '../../assets/images/giftcards/BirthdayCakeFY24.jpg';
import featureCards15 from '../../assets/images/giftcards/BirthYayBalloonsFY24.avif';
import featureCards16 from '../../assets/images/giftcards/WoohooFY23.avif';
import featureCards17 from '../../assets/images/giftcards/HeritageBrandFY24.avif';

import valentine from '../../assets/images/giftcards/ValentinesDayFY23.avif';

import winter1 from '../../assets/images/giftcards/winter1.jpg';
import winter2 from '../../assets/images/giftcards/winter2.avif';
import winter3 from '../../assets/images/giftcards/winter3.avif';
import winter4 from '../../assets/images/giftcards/winter4.avif';

import birthday1 from '../../assets/images/giftcards/birthday1.avif';
import birthday2 from '../../assets/images/giftcards/birthday2.avif';
import birthday3 from '../../assets/images/giftcards/birthday3.avif';

import thank1 from '../../assets/images/giftcards/thank1.avif';
import thank2 from '../../assets/images/giftcards/thank2.avif';

import celebration1 from '../../assets/images/giftcards/celebration1.avif';
import celebration2 from '../../assets/images/giftcards/celebration2.avif';

import appreciation1 from '../../assets/images/giftcards/APPRECIATION1.avif';
import appreciation2 from '../../assets/images/giftcards/APPRECIATION2.avif';
import appreciation3 from '../../assets/images/giftcards/APPRECIATION3.avif';

import encouragement1 from '../../assets/images/giftcards/ENCOURAGEMENT.avif';
import encouragement2 from '../../assets/images/giftcards/ENCOURAGEMENT1.avif';
import encouragement3 from '../../assets/images/giftcards/ENCOURAGEMENT2.avif';

import affection1 from '../../assets/images/giftcards/AFFECTION.avif';
import affection2 from '../../assets/images/giftcards/AFFECTION1.avif';

import workplace1 from '../../assets/images/giftcards/WORKPLACE.avif';
import workplace2 from '../../assets/images/giftcards/WORKPLACE1.avif';
import workplace3 from '../../assets/images/giftcards/WORKPLACE2.avif';

import anytime1 from '../../assets/images/giftcards/ANYTIME.avif';
import anytime2 from '../../assets/images/giftcards/ANYTIME1.avif';
import anytime3 from '../../assets/images/giftcards/ANYTIME2.avif';

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
			customStyle: {
				orderImg: 'md:order-1',
				orderInfo: 'md:order-2 homeContent__firstContent',
				title: 'font-Sodo__semibold text-[1.75rem] lg:text-5xl',
				description: 'font-Sodo__regular text-[1.375rem] lg:text-2xl'
			},
			imageSrc: home1,
			title: 'New Year, New Yays',
			description:
				'Jump-start your year with a week full of offers in the Starbucks app.*',
			btnName: 'Open the app'
		},
		{
			customStyle: {
				orderImg: 'md:order-2',
				orderInfo: 'md:order-1 homeContent__secondContent',
				title: 'font-Sodo__semibold text-[1.75rem] lg:text-5xl',
				description: 'font-Sodo__regular text-[1.375rem] lg:text-2xl'
			},
			imageSrc: home2,
			title: 'Pistachi-Yum',
			description:
				'Creamy, cozy vibes make the Pistachio Latte a must-have this season.',
			btnName: 'Order now'
		},
		{
			customStyle: {
				orderImg: 'md:order-1',
				orderInfo: 'md:order-2 homeContent__thirdContent',
				title: 'font-Sodo__semibold text-[1.375rem] lg:text-2xl',
				description: 'font-Sodo__regular text-base lg:text-xl'
			},
			imageSrc: home3,
			title: '"This is our community. We’re in it together."',
			description:
				'Our partners uplift each other and their communities every day.',
			btnName: 'Learn more'
		},
		{
			customStyle: {
				orderImg: 'md:order-2',
				orderInfo: 'md:order-1 homeContent__fourthContent',
				title: 'font-Sodo__semibold text-[1.75rem] lg:text-5xl',
				description: 'font-Sodo__regular text-[1.375rem] lg:text-2xl'
			},
			imageSrc: home4,
			title: 'Hey there, hazelnut',
			description:
				'Say hello to our Hazelnut Oatmilk Shaken Espresso, a rich and layered pick-me-up.',
			btnName: 'Order now'
		},
		{
			customStyle: {
				orderImg: 'md:order-1',
				orderInfo: 'md:order-2 homeContent__fifthContent',
				title: 'font-Sodo__semibold text-[1.75rem] lg:text-5xl',
				description: 'font-Sodo__regular text-[1.375rem] lg:text-2xl'
			},
			imageSrc: home5,
			title: 'Savory and satisfying',
			description:
				'Grab a subtly sweet Chicken, Maple Butter & Egg Sandwich on the way.',
			btnName: 'Order now'
		},
		{
			customStyle: {
				orderImg: 'md:order-2',
				orderInfo: 'md:order-1 homeContent__sixthContent',
				title: 'font-Sodo__semibold text-2xl',
				description: 'font-Sodo__regular text-base lg:text-xl'
			},
			imageSrc: home6,
			title: 'Send Starbucks Cards in Venmo',
			description:
				'Send a little treat to someone you care about and brighten their day. You can now send Starbucks eGifts directly through Venmo.**',
			btnName: 'View in Venmo'
		}
	],
	menuContent: [
		{
			title: 'Drinks',
			listItem: [
				{ imageSrc: menuDrinks1, name: 'Oleato' },
				{ imageSrc: menuDrinks2, name: 'Hot Coffees' },
				{ imageSrc: menuDrinks3, name: 'Hot Teas' },
				{ imageSrc: menuDrinks4, name: 'Hot Drinks' },
				{ imageSrc: menuDrinks5, name: 'Frappucino Blended Beverages' },
				{ imageSrc: menuDrinks6, name: 'Cold Coffees' },
				{ imageSrc: menuDrinks7, name: 'Iced Teas' },
				{ imageSrc: menuDrinks8, name: 'Cold Drinks' }
			]
		},
		{
			title: 'Food',
			listItem: [
				{ imageSrc: menuFood1, name: 'Hot Breakfast' },
				{ imageSrc: menuFood2, name: 'Oatmeal & Yogurt' },
				{ imageSrc: menuFood3, name: 'Bakery' },
				{ imageSrc: menuFood4, name: 'Lunch' },
				{ imageSrc: menuFood5, name: 'Snacks & Sweets' }
			]
		},
		{
			title: 'At Home Coffee',
			listItem: [
				{ imageSrc: menuCoffe1, name: 'Whole Bean' },
				{ imageSrc: menuCoffe2, name: 'Ground' },
				{ imageSrc: menuCoffe3, name: 'VIA Instant' }
			]
		},
		{
			title: 'Mechandise',
			listItem: [
				{ imageSrc: menuMerch1, name: 'Cold Cups' },
				{ imageSrc: menuMerch2, name: 'Tumblers' },
				{ imageSrc: menuMerch3, name: 'Mugs' },
				{ imageSrc: menuMerch4, name: 'Other' }
			]
		}
	],
	questionContent: [
		{
			title: '*Triple Star Tuesday:​',
			description:
				'Offer valid 1/16/24 at participating stores. Must activate this offer to earn triple Stars on transactions made during the offer window. Stars cannot be earned on purchases of alcohol, Starbucks Cards or Starbucks Card reloads. See starbucks.com/terms for details.​'
		},
		{
			title: '$3 Thursday:​',
			description:
				'Valid 12-6pm only on 1/18/24 at participating stores on a grande or smaller handcrafted drink. Customizations cost extra. Excludes canned, bottled beverages and alcohol. Valid for one time use. Cannot be combined with other offers or discounts. Excludes delivery services.​'
		},
		{
			title: 'BOGO Weekend:​​',
			description:
				'Valid 12-6pm only on 1/20/24-1/21/24 at participating stores. Buy a handcrafted drink, get one of equal or lesser value for free ($10 max value). Product availability varies by store. Limited to stock on hand. Cannot be combined with other offers or promotions. Excludes delivery services.'
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
	],
	// giftcardsContent: [
	// 	{
	// 		title: 'featured',
	// 		imageContent: [
	// 			{ imageSrc: featureCards1 },
	// 			{ imageSrc: featureCards2 },
	// 			{ imageSrc: featureCards3 },
	// 			{ imageSrc: featureCards4 },
	// 			{ imageSrc: featureCards5 },
	// 			{ imageSrc: featureCards6 },
	// 			{ imageSrc: featureCards7 },
	// 			{ imageSrc: featureCards8 },
	// 			{ imageSrc: featureCards9 },
	// 			{ imageSrc: featureCards10 },
	// 			{ imageSrc: featureCards11 },
	// 			{ imageSrc: featureCards12 },
	// 			{ imageSrc: featureCards13 },
	// 			{ imageSrc: featureCards14 },
	// 			{ imageSrc: featureCards15 },
	// 			{ imageSrc: featureCards16 },
	// 			{ imageSrc: featureCards17 }
	// 		]
	// 	},
	// 	{
	// 		title: 'LUNAR NEW YEAR | 2/10',
	// 		imageContent: [{ imageSrc: featureCards6 }]
	// 	},
	// 	{
	// 		title: "VALENTINE'S DAY | 2/14",
	// 		imageContent: [
	// 			{ imageSrc: featureCards3 },
	// 			{ imageSrc: featureCards4 },
	// 			{ imageSrc: valentine },
	// 			{ imageSrc: featureCards5 }
	// 		]
	// 	},
	// 	{
	// 		title: "VALENTINE'S DAY | 2/14",
	// 		imageContent: [
	// 			{ imageSrc: featureCards7 },
	// 			{ imageSrc: winter1 },
	// 			{ imageSrc: winter2 },
	// 			{ imageSrc: winter3 },
	// 			{ imageSrc: winter4 }
	// 		]
	// 	},
	// 	{
	// 		title: 'birthday',
	// 		imageContent: [
	// 			{ imageSrc: featureCards14 },
	// 			{ imageSrc: featureCards15 },
	// 			{ imageSrc: birthday1 },
	// 			{ imageSrc: birthday2 },
	// 			{ imageSrc: birthday3 }
	// 		]
	// 	},
	// 	{
	// 		title: 'thank you',
	// 		imageContent: [
	// 			{ imageSrc: featureCards2 },
	// 			{ imageSrc: featureCards8 },
	// 			{ imageSrc: thank1 },
	// 			{ imageSrc: thank2 }
	// 		]
	// 	},
	// 	{
	// 		title: 'celebration',
	// 		imageContent: [
	// 			{ imageSrc: featureCards1 },
	// 			{ imageSrc: featureCards16 },
	// 			{ imageSrc: celebration1 },
	// 			{ imageSrc: celebration2 }
	// 		]
	// 	},
	// 	{
	// 		title: 'appreciation',
	// 		imageContent: [
	// 			{ imageSrc: appreciation1 },
	// 			{ imageSrc: appreciation2 },
	// 			{ imageSrc: featureCards14 },
	// 			{ imageSrc: appreciation3 }
	// 		]
	// 	},
	// 	{
	// 		title: 'encouragement',
	// 		imageContent: [
	// 			{ imageSrc: encouragement1 },
	// 			{ imageSrc: featureCards16 },
	// 			{ imageSrc: encouragement2 },
	// 			{ imageSrc: encouragement3 }
	// 		]
	// 	},
	// 	{
	// 		title: 'affection',
	// 		imageContent: [
	// 			{ imageSrc: affection1 },
	// 			{ imageSrc: featureCards13 },
	// 			{ imageSrc: featureCards4 },
	// 			{ imageSrc: affection2 },
	// 			{ imageSrc: featureCards5 }
	// 		]
	// 	},
	// 	{
	// 		title: 'workplace',
	// 		imageContent: [
	// 			{ imageSrc: featureCards12 },
	// 			{ imageSrc: workplace1 },
	// 			{ imageSrc: workplace2 },
	// 			{ imageSrc: workplace3 }
	// 		]
	// 	},
	// 	{
	// 		title: 'anytime',
	// 		imageContent: [
	// 			{ imageSrc: featureCards17 },
	// 			{ imageSrc: featureCards12 },
	// 			{ imageSrc: anytime1 },
	// 			{ imageSrc: anytime2 },
	// 			{ imageSrc: anytime3 }
	// 		]
	// 	}
	// ],
	giftcardsContent: [
		{
			title: 'featured',
			imageContent: [
				{ imageSrc: featureCards1 },
				{ imageSrc: featureCards2 },
				{ imageSrc: featureCards3 },
				{ imageSrc: featureCards4 },
				{ imageSrc: featureCards5 },
				{ imageSrc: featureCards6 },
				{ imageSrc: featureCards7 },
				{ imageSrc: featureCards8 },
				{ imageSrc: featureCards9 },
				{ imageSrc: featureCards10 },
				{ imageSrc: featureCards11 },
				{ imageSrc: featureCards12 },
				{ imageSrc: featureCards13 },
				{ imageSrc: featureCards14 },
				{ imageSrc: featureCards15 },
				{ imageSrc: featureCards16 },
				{ imageSrc: featureCards17 }
			]
		},
		{
			carouselContent: [
				{
					title: 'LUNAR NEW YEAR | 2/10',
					imageContent: [{ imageSrc: featureCards6 }]
				},
				{
					title: "VALENTINE'S DAY | 2/14",
					imageContent: [
						{ imageSrc: featureCards3 },
						{ imageSrc: featureCards4 },
						{ imageSrc: valentine },
						{ imageSrc: featureCards5 }
					]
				},
				{
					title: "VALENTINE'S DAY | 2/14",
					imageContent: [
						{ imageSrc: featureCards7 },
						{ imageSrc: winter1 },
						{ imageSrc: winter2 },
						{ imageSrc: winter3 },
						{ imageSrc: winter4 }
					]
				},
				{
					title: 'birthday',
					imageContent: [
						{ imageSrc: featureCards14 },
						{ imageSrc: featureCards15 },
						{ imageSrc: birthday1 },
						{ imageSrc: birthday2 },
						{ imageSrc: birthday3 }
					]
				},
				{
					title: 'thank you',
					imageContent: [
						{ imageSrc: featureCards2 },
						{ imageSrc: featureCards8 },
						{ imageSrc: thank1 },
						{ imageSrc: thank2 }
					]
				},
				{
					title: 'celebration',
					imageContent: [
						{ imageSrc: featureCards1 },
						{ imageSrc: featureCards16 },
						{ imageSrc: celebration1 },
						{ imageSrc: celebration2 }
					]
				},
				{
					title: 'appreciation',
					imageContent: [
						{ imageSrc: appreciation1 },
						{ imageSrc: appreciation2 },
						{ imageSrc: featureCards14 },
						{ imageSrc: appreciation3 }
					]
				},
				{
					title: 'encouragement',
					imageContent: [
						{ imageSrc: encouragement1 },
						{ imageSrc: featureCards16 },
						{ imageSrc: encouragement2 },
						{ imageSrc: encouragement3 }
					]
				},
				{
					title: 'affection',
					imageContent: [
						{ imageSrc: affection1 },
						{ imageSrc: featureCards13 },
						{ imageSrc: featureCards4 },
						{ imageSrc: affection2 },
						{ imageSrc: featureCards5 }
					]
				},
				{
					title: 'workplace',
					imageContent: [
						{ imageSrc: featureCards12 },
						{ imageSrc: workplace1 },
						{ imageSrc: workplace2 },
						{ imageSrc: workplace3 }
					]
				},
				{
					title: 'anytime',
					imageContent: [
						{ imageSrc: featureCards17 },
						{ imageSrc: featureCards12 },
						{ imageSrc: anytime1 },
						{ imageSrc: anytime2 },
						{ imageSrc: anytime3 }
					]
				}
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
