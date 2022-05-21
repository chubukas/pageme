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
                    I built it with nodejs and ejs template engine with mongodb database.`,
    },
    {
      slug: "Resort_Hotel",
      image: "/images/projects/Resort Hostel.jpg",
      projectname: "Resort Hotel",
      link: "https://reacthotel.netlify.app/",
      description: `It is a hotel management system that helps the client to see different
                    types of room that are available in the hotel and also aids in booking rooms in the hotel.
                    i developed it with react and Contentiful API (a headless CMS).`,
    },
    {
      slug: "Designers_Store",
      image: "/images/projects/Designers Store.png",
      projectname: "Designers Store",
      link: "https://e-clothingstore.netlify.app/",
      description: `It is an ecommence system for clothing, where customers can go and 
                    buy different kinds of cloth.
                    I developed it with React and a local data.`,
    },
    {
      slug: "Midlman_pharmaceutical",
      image: "/images/projects/MidlMan.png",
      projectname: "Midlman Pharmaceutical",
      link: "https://themidlman.com/",
      description: `MidlMan is a health-tech pharmaceutical distribution company run by healthcare professionals.
                     They exist to connect suppliers to buyers of quality healthcare products at the best prices and
                     at the fastest possible time.
                     I develop it with React, Redux, express js, and monogodb`,
    },
    {
      slug: "Personal_Profile_site",
      image: "/images/projects/myown.png",
      projectname: "Personal Profile site",
      link: "https://pageme.netlify.app/",
      description: `This is my personal site.
                     I develop it with React, Redux and typescript`,
    },
    {
      slug: "CloudNotte_School_Management",
      image: "/images/projects/Cloudnotte.png",
      projectname: "CloudNotte",
      link: "https://app.cloudnotte.com/",
      description: `Cloudnotte is a school management software, that handles all the activities in the school.
                    It has more that 30 and more functionalities, it one of the best user friendly and automated
                    school management software out there, some schools are
                    currently using it and there a lot of testmonies from them.
                    It was develop with React, GoLang, ApolloClient and GraphQL and uses MongoDB as its database.
                    I was incharge the API consumtion and frontend logic for this project`,
    },
    {
      slug: "Question_Quiz_App",
      image: "/images/projects/quiz.png",
      projectname: "QuizApp",
      link: "https://quizapp-steel.vercel.app/",
      description: `This a quiz app that asks a general question about, 
                    history, politics, entertaintment etc, and at the end of the last
                    question, it gives you the total of your score and displays a
                    list of the questions and whether the answer was correct or not.
                    It was develop with React 16v with context API and the state management.`,
    },
    {
      slug: "Message_Dashboard",
      image: "/images/projects/dashboard.png",
      projectname: "Message Dashboard",
      link: "https://dashboardmessage.herokuapp.com",
      description: `Message Dashboard is a dashboard build with react.`,
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
      abt: `I create Management systems and  Websites for Churches, Schools, Health/Fitness companies,
            Financial Service companies, eCommence companies, Hospitals, Blogging companies, Resturants, Hotels,
            Estate management companies, Logistics companies and Transpotation companies.`,
      icon: faUserAstronaut,
    },
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
      abt: `With ${
        yearsOFExperience - 1
      } years of production experience with JavaScript, PHP, Mysql 
      and ${
        yearsOFExperience - 2
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
      cert: `BACK-END DEVELOPMENT`,
      school: `OpenClassRooms`,
      date: `August 2019 - November 2019`,
      description: `This course taught extensively, on backend development with NodeJs, ExpressJs
      and Mongodb, and also different ways on how to build a modernize backend.
      It also includes several projects encompassing the knowledge of:`,
      learned: [
        `Creating an Express web server`,
        `Using Mongoose to access a MongoDB in an Express app`,
        `Creating a Restful web Api using Node, Express and MongoDB`,
        `Protecting selected routes with token-based authentication in an Express app`,
        `Handling user files in an Express app`,
      ],
      certImage: `/images/cert/fullsatck.png`,
    },
    {
      cert: `RELATIONAL DATABASE WITH SQL`,
      school: `OpenClassRooms`,
      date: `August 2019 - November 2019`,
      description: `This course taught extensively, on Sql database and how to implement it on the backend
      with different frameworks.
      It also includes several projects encompassing the knowledge of:`,
      learned: [
        `Working and understanding sql `,
        `Understanding relational database`,
        `Using Sql to query a database`,
        `How to perform GROUP BY statement`,
        `Replicate real-world situations and query reports`,
        `Using Sql to perform data anlysis`,
      ],
      certImage: `/images/cert/sql.png`,
    },
    {
      cert: `BUILDING REST API`,
      school: `OpenClassRooms`,
      date: `August 2019 - November 2019`,
      description: `This course taught extensively, on how to build and query API.
      It also includes several projects encompassing the knowledge of:`,
      learned: [
        `Identify the value of Rest Api for your codebase projects.`,
        `Make requests and send responses with Rest Api`,
        `Understand how to generate neat reports for execution results`,
        `Understand the importance and procedure of Rest Api`,
        `Sercuring your Rest Apis`,
        `Design endpoints for Rest Api.`,
      ],
      certImage: `/images/cert/restapi.png`,
    },
    {
      cert: `FULL-STACK JAVASCRIPT`,
      school: `Udemy, Inc.`,
      date: `June 2019 - August 2019`,
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
      certImage: `/images/cert/udemyjs.png`,
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
      certImage: ``,
    },
  ],
  Stacks: [
    {
      name: `Git`,
      link: `/images/skills/git.svg`,
      width: undefined,
    },
    {
      name: `Html5`,
      link: `/images/skills/html5.svg`,
      width: undefined,
    },
    {
      name: `Css3`,
      link: `/images/skills/css3.svg`,
      width: undefined,
    },
    {
      name: `Javascript`,
      link: `/images/skills/javascript.svg`,
      width: undefined,
    },
    {
      name: `React`,
      link: `/images/skills/react.svg`,
      width: undefined,
    },
    {
      name: `Vue`,
      link: `/images/skills/vue.svg`,
      width: undefined,
    },
    {
      name: `PhP`,
      link: `/images/skills/php.svg`,
      width: undefined,
    },
    {
      name: `Nodejs`,
      link: `/images/skills/nodejs.svg`,
      width: undefined,
    },
    {
      name: `Python`,
      link: `/images/skills/python.svg`,
      width: undefined,
    },
    {
      name: `Mongodb`,
      link: `/images/skills/mongodb.svg`,
      width: undefined,
    },
    {
      name: `Postgresql`,
      link: `/images/skills/postgresql.svg`,
      width: undefined,
    },
    {
      name: `SQL`,
      link: `/images/skills/sql.svg`,
      width: undefined,
    },
    {
      name: `ApolloClient`,
      link: `/images/skills/apollo.png`,
      width: 60,
    },
    {
      name: `GraphQL`,
      link: `/images/skills/grapgql.png`,
      width: 60,
    },
  ],
};
