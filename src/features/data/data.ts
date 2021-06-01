import {
  faFacebook,
  faTwitter,
  faLinkedin,
  // faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

import {
  faEnvelope,
  faPhone,
  faUserAstronaut,
  faCode,
  faCodeBranch,
  faCogs,
  faUniversalAccess,
} from "@fortawesome/free-solid-svg-icons";

const yearsOFExperience = new Date().getFullYear() - 2016;

export const data = {
  project: [
    {
      slug: "Youpay_Escrow_Services",
      image: "/images/projects/youpay.png",
      projectname: "YouPay Escow Service",
      link: "http://you-pay.herokuapp.com/",
      description: `YouPay is an escrow service that helps stand as a safe 
                    house for funds during the course of a transantion over the internet.
                    It was built with nodejs and ejs template engine with mongodb database.`,
    },
    {
      slug: "Resort_Hotel",
      image: "/images/projects/Resort Hostel.jpg",
      projectname: "Resort Hotel",
      link: "https://reacthotel.netlify.app/",
      description: `It is a hotel management system that helps the client to see different
                    types of room that are available in the hotel and also aids in booking rooms in the hotel.
                    it is developed with react and Contentiful API (a headless CMS).`,
    },
    {
      slug: "Designers_Store",
      image: "/images/projects/Designers Store.png",
      projectname: "Designers Store",
      link: "https://e-clothingstore.netlify.app/",
      description: `It is an ecommence system for clothing, where customers can go and 
                    buy different kinds of cloth.
                    It is developed with React and a local data.`,
    },
  ],
  social: [
    {
      link: "faFacebook",
      icon: faFacebook,
      account: "https://www.facebook.com/chukwuebuka.anyadiegwu",
      colorStyle: "text-primary",
    },
    {
      link: "faGithub",
      icon: faGithub,
      account: "https://www.github.com/chubukas",
      colorStyle: "text-dark",
    },
    {
      link: "faTwitter",
      icon: faTwitter,
      account: "https://www.twitter.com/chubukas",
      colorStyle: "text-primary",
    },
    // {
    //   link: "faInstagram",
    //   icon: faInstagram,
    //   account: "https://www.instagram.com/chubukas",
    //   colorStyle: "text-danger"
    // },
    {
      link: "faEnvelope",
      icon: faEnvelope,
      account: "mailto:chubukass@gmail.com",
      colorStyle: "text-danger",
    },

    {
      link: "faLinkedin",
      icon: faLinkedin,
      account: "https://www.linkedin.com/in/chubukas",
      colorStyle: "text-info",
    },

    {
      link: "faPhone",
      icon: faPhone,
      account: "tel:{+234 806 670 2567}",
      colorStyle: "text-success",
    },
  ],

  About: [
    {
      abt: `Am a dynamic and creative software developer 
        with over ${yearsOFExperience} years of experience in producing robust
        code for high-volume companies.`,
      icon: faUserAstronaut,
    },
    {
      abt: `Also eager to support the dev team at your company with top-notch coding skills.`,
      icon: faUserAstronaut,
    },
    {
      abt: `In previous roles, i doubled code-efficiency of the company, and 
      increased customer retention by 30% among others.`,
      icon: faUserAstronaut,
    },
    {
      abt: `With ${yearsOFExperience - 1
        } years of production experience with JavaScript, PHP, Mysql 
      and ${yearsOFExperience - 2
        } years of production experience with Vue, React, Express js, node js and Mongodb.`,
      icon: faUserAstronaut,
    },
    {
      abt: `Currently working Remotely with Midlman Limited, And also the 
      CTO of an estate manangment company Youplace Limited`,
      icon: faUserAstronaut,
    },
  ],
  Services: [
    {
      service: `Front-End Development`,
      icon: faCode,
    },
    {
      service: `Back-End Development`,
      icon: faUniversalAccess,
    },
    {
      service: `API Development`,
      icon: faCodeBranch,
    },
    {
      service: `Software Maintance`,
      icon: faCogs,
    },
  ],
  WorkExprience: [
    {
      date: `Feburary 2021 - Current`,
      rank: `Senior Developer`,
      company: `Midlman Limited`,
      works: [
        `Co-built the company’s web app, worked on both front and backend of the project.`,
        `Maintain and manage existing code base.`,
        `Design, develop and implement solution to users’ needs and requirements.`,
      ],
    },
    {
      date: `Feburary 2020 - Current`,
      rank: `Senior Developer`,
      company: `PicaDaliys Limited`,
      works: [
        `Worked directly with the developers department to achieve the company's technological goals.`,
        `Monitored multiple databases to keep track of all company inventories.`,
        `Researched and updated all required materials needed for firm and partners.`,
      ],
    },
    {
      date: `Feburary 2019 - Current`,
      rank: `Chief Technology Officer`,
      company: `Youplace Limited`,
      works: [
        `Setting a vision for how technology will be used in the company.`,
        `Creating timeline's for the development and deployment of all technological services.`,
        `Maintaining a consumer-focused outlook and aiding in the delivering of IT projects to market.`,
      ],
    },
  ],
  Education: [
    {
      cert: `FULL-STACK JAVASCRIPT NANODEGREE`,
      school: `Udacity, Inc.`,
      date: `June 2019 - October 2019`,
      description: `This course taught extensively, various technical skills needed to build 
      frontend and backend web applications based on javascript proggraming language.
      It also includes several projects encompassing the knowledge of:`,
      learned: [
        `Responsive Web Design`,
        `Object-Oriented Programming`,
        `Working with react frameworks`,
        `Web Accessibility`,
        `API Development and Documentation`,
        `Working with APIs`,
        `Server Deployment, Containerization and Testing`,
        `Database and Data Modelling for the Web`,
      ],
    },
    {
      cert: `HND in Computer Science`,
      school: `Institute Of Management And Technology, Enugu State, Nigeria`,
      date: `December 2006 - December 2011`,
      description: `Software Engineering Fundamentals, Computer Programming, Computer Architecture, 
      Algorithms and Data Structures, Systems Programming, Machine and Assembly Language Programming,
      Fotran Proggramming, Digital Electronics, Digital Computer Design, Microprocessors & Microcomputers,
      Computer Networks and Information Theory.`,
      learned: [],
    },
  ],
  Stacks: [
    {
      name: `Git`,
      link: `/images/skills/git.svg`,
    },
    {
      name: `Html5`,
      link: `/images/skills/html5.svg`,
    },
    {
      name: `Css3`,
      link: `/images/skills/css3.svg`,
    },
    {
      name: `Javascript`,
      link: `/images/skills/javascript.svg`,
    },
    {
      name: `React`,
      link: `/images/skills/react.svg`,
    },
    {
      name: `Vue`,
      link: `/images/skills/vue.svg`,
    },
    {
      name: `PhP`,
      link: `/images/skills/php.svg`,
    },
    {
      name: `Nodejs`,
      link: `/images/skills/nodejs.svg`,
    },
    {
      name: `Python`,
      link: `/images/skills/python.svg`,
    },
    {
      name: `Mongodb`,
      link: `/images/skills/mongodb.svg`,
    },
    {
      name: `Postgresql`,
      link: `/images/skills/postgresql.svg`,
    },
    {
      name: `sql`,
      link: `/images/skills/sql.svg`,
    },
  ],
};
