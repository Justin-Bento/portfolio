import { RiInstagramFill, RiLinkedinFill, RiPinterestFill } from "react-icons/ri";

export const projects = [
  {
    id: 1,
    title: "Believe Support Services",
    body: "I streamlined the website to ensure that clients can easily explore a wide variety of programs offered by Believe. Additionally, I implemented features to help them stay updated with events and other important information.",
    image: "/projects/believe-support-services-logo.webp",
    url: "https://believesupportservices.vercel.app/",
  },
  {
    id: 1,
    title: "Paramount Properties LTD",
    body: "I created a website to showcase all the properties and services provided by the company. The purpose of the website is to effectively present this information to clients whenever they inquire or express interest.",
    image: "/projects/paramount-properties-ltd.png",
    url: "https://paramount-properties.vercel.app/",
  },
  {
    id: 1,
    title: "Option One Staffing Agency",
    body: "I constructed a website with the aim of helping customers connect with a recruitment consultant and access essential services and information provided by the company.",
    image: "/projects/option-one-staffing-agency.webp",
    url: "https://optionone-staffing-agency.vercel.app/",
  },
  {
    id: 1,
    title: "Agent Webb",
    body: "I redesigned Agent Webb to provide a comprehensive platform that helps people find everything they need in one place to guide them through the real estate transaction process from start to finish.",
    image: "/projects/marker-brand.png",
    url: "https://agentwebb.vercel.app/",
  },
  {
    id: 1,
    title: "Urban Greens Antigua",
    body: "I designed and developed the website with the goal of enhancing brand recognition and promoting the company's production and local supply of microgreens.",
    image: "/projects/urban-greens-antigua.png",
    url: "https://www.urbangreensantigua.com/",
  },
  {
    id: 1,
    title: "Antigua News Room Redesign",
    body: "I re-created a modern website design for as part of a design challenge I undertook some time ago to familiarize myself with Figma. This project was purely for fun and practice purposes.",
    image: "/projects/antigua-news-room-logo.png",
    url: "https://www.figma.com/file/x5pcKa5FUxF85JMBolszC9/Antigua-News-Room?node-id=0%3A1&t=FmqPUlUteGYw2OQo-1",
  },
  {
    id: 1,
    title: "ParkSmart",
    body: "An app designed by Justin Bento to help customers interact with a self-serving parking lot that eliminates the need for physical attendants",
    image: "/projects/parksmart-project.png",
    url: "https://www.canva.com/design/DAEXeWFsbI4/GeiVkAU9MYeVHZc0SDYlJw/view?utm_content=DAEXeWFsbI4&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink",
  },
];

export const footer_navigation = [
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/farahsdesignss_/',
    icon: (props:any) => <RiInstagramFill {...props} />
  },
  {
    name: 'Pintrest',
    href: 'https://www.pinterest.ca/fairyhakimpour/',
    icon: (props:any) => <RiPinterestFill {...props} />
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/farah-hakimpour-0b41911b8/',
    icon: (props:any) => <RiLinkedinFill {...props} />
  },
]
