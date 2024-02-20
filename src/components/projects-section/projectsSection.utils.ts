import { TabCardData } from '@/types'

export const titleTab = ['all', 'web', 'rust']

export const tabCardData: TabCardData[] = [
  {
    title: 'React Restaurant',
    description: 'Password: 123. Folks It is the App for Restaurants, It caters to three positions: Administrator, Waiter, and Delivery. The app empowers restaurant staff with tools for managing orders, payments, and deliveries, resulting in an improved dining experience. ',
    image: 'images/restaurant.png',
    tag: ['all', 'web'],
    gitUrl: 'https://github.com/IgorMilya/project-lost',
    previewUrl: 'https://project-lost.vercel.app/',
  },
  // {
  //   title: 'Simple E-Shop',
  //   description: 'Written on React with ReactContext. Used JSON-DB for storing data',
  //   image: 'images/budget-cli.png',
  //   tag: ['all', 'web'],
  //   gitUrl: 'https://github.com/IgorMilya/Simple-E-Shop/tree/master',
  //   previewUrl: 'https://github.com/IgorMilya/Budget-CLI',
  // },
  {
    title: 'Next.js Portfolio Website',
    description: 'Responsive website',
    image: 'images/portfolio.png',
    tag: ['all', 'web'],
    gitUrl: 'https://github.com/IgorMilya/Portfolio-webpage',
    previewUrl: 'https://portfolio-webpage-nine.vercel.app/',
  },
  {
    title: 'theHam for business',
    description: 'Please take into account that this landing was calculated on wide windows(monitors). Vanila multi-pages',
    image: 'images/theHam.png',
    tag: ['all', 'web'],
    gitUrl: 'https://github.com/IgorMilya/Step-theHam',
    previewUrl: 'https://igormilya.github.io/Step-theHam/',
  },
  {
    title: 'Hospital',
    description: 'HendyHealth is a program designed for clinic administrators to register new visitors. The program allows the user to add, delete, and edit records of patients or visitors to the clinic. All data recorded in the application is stored in a database on the server. Take into account the API which we used, was broken down, thus, we can not login. ',
    image: 'images/hospital.png',
    tag: ['all', 'web'],
    gitUrl: 'https://github.com/IgorMilya/Step-Project-HendyHealth',
    previewUrl: 'https://igormilya.github.io/Step-Project-HendyHealth/',
  },
  {
    title: 'Landing Forkio',
    description: 'Responsive website',
    image: 'images/forkio.png',
    tag: ['all', 'web'],
    gitUrl: 'https://github.com/IgorMilya/Step-ForkIo',
    previewUrl: 'https://igormilya.github.io/Step-ForkIo/',
  },
  {
    title: 'File-Explorer-CLI',
    description: 'CLI prototype of File-Explorer',
    image: 'images/rust-cli.png',
    tag: ['all', 'rust'],
    gitUrl: 'https://github.com/IgorMilya/File-Explorer-CLI',
    previewUrl: 'https://github.com/IgorMilya/File-Explorer-CLI',
  },
  {
    title: 'Budget-CLI',
    description: 'CLI tool where you can count your spending',
    image: 'images/budget-cli.png',
    tag: ['all', 'rust'],
    gitUrl: 'https://github.com/IgorMilya/Budget-CLI',
    previewUrl: 'https://github.com/IgorMilya/Budget-CLI',
  },
]