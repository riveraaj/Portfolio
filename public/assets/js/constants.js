export const projects = [{
        id: 1,
        type: 'web',
        image: '../../../public/assets/images/veterinary.png',
        title: 'Veterinary Webpage',
        description: 'This is a project with the theme of a veterinarian in which all the information related to the filing process and dynamic information queries are managed. This project has a public part and an administrative part. In this you can find the correct use of HTML tags and CSS rules, Use of Bootstrap, JQuery framework, PHP for session management, database (CRUD), sending emails and generating PDF files.',
        technologies: 'HTML5 / CSS / JavaScript / Bootstrap / JQuery / PHP / MYSQL',
        githubLink: 'https://github.com/riveraaj/Oh_My_Cat',
    },
    {
        id: 2,
        type: 'web',
        name: 'Authentication Webpage',
        image: '../../../public/assets/images/auth-app.png',
        description: 'This is a project of an application with authentication, both manually and through some services like Google, Facebook, GitHub and Twitter.',
        technologies: 'HTML5 / CSS / JavaScript / Bootstrap / C# / .NET / MVC / Entity Framework / ASP.NET / SQLServer',
        githubLink: 'https://github.com/riveraaj/Authentication-App'
    },
    {
        id: 3,
        type: 'web',
        name: 'Search Engine',
        image: '../../../public/assets/images/search.png',
        description: 'This is a project that simulates the google search engine on a smaller scale. It has: Routine, search and SpiderIndex services Database repositories Among others, such as controllers and part of the front-end (google search clone)',
        technologies: 'HTML5 / CSS / JAVA / Spring Boot / MYSQL',
        githubLink: 'https://github.com/riveraaj/Search-Engine'
    },
    {
        id: 4,
        type: 'web',
        name: 'Text Encryptor',
        image: '../../../public/assets/images/encryptor.png',
        description: 'This is the first Challenge of the ONE - Oracle Next Education program. This application has the function of encrypting and decoding text messages in a simple way. With the aim of exchanging information with other people in a safe and fun way.',
        technologies: 'HTML5 / CSS / JavaScript',
        githubLink: 'https://github.com/riveraaj/Text-Encryptor'
    },
    {
        id: 5,
        type: 'desktop',
        name: 'Calculator App',
        image: '../../../public/assets/images/calculator.png',
        description: 'This is a project that uses dynamic memory allocation, the development of recursive algorithms, and the use of lists and stacks as tools for designing, and solving problems of software.',
        technologies: 'JAVA',
        githubLink: 'https://github.com/riveraaj/Oh_My_Cat'
    },
    {
        id: 6,
        type: 'mobile',
        name: 'Theater Box Office App',
        image: '../../../public/assets/images/mobile-app.png',
        description: 'Solution for the purchase of tickets and admission to the event of several theaters, through a events calendar, capacity and ticket.',
        technologies: 'Android Studio / Gradle / Kotlin / XML / Firebase / Cloud Firestore',
        githubLink: 'https://github.com/riveraaj/TicketAJJAM'
    },
    {
        id: 7,
        type: 'desktop',
        name: 'Batch Handler',
        image: '../../../public/assets/images/batch-handler.png',
        description: 'This is a project made in console to manage batches of files through previous configuration that allows us to copy and move files in batches and delete files depending on the type of user configuration, in turn it has a log and deletion of the configuration of the registered lots.',
        technologies: 'Python',
        githubLink: 'https://github.com/riveraaj/Batch-handling'
    },
    {
        id: 8,
        type: 'desktop',
        name: 'Inventory',
        image: '../../../public/assets/images/inventory.png',
        description: 'This is an article inventory management project which works with the SQL Server database, has a Login, inventory registration, inventory allocation to three different warehouses and, in turn, has a user manual.',
        technologies: 'JAVA / SQLServer',
        githubLink: 'https://github.com/riveraaj/Inventory'
    },
];

export const linkDesktopList = [{
        id: 1,
        href: "#About",
        name: "ABOUT"
    },
    {
        id: 2,
        href: "#Skills",
        name: "SKILLS"
    },
    {
        id: 3,
        href: "#Projects",
        name: "PROJECTS"
    },
    {
        id: 4,
        href: "#Contact",
        name: "CONTACT"
    }
];

export const linkMobileTabletList = [{
        id: 1,
        href: "#Projects",
        classIcon: "fa-solid fa-briefcase"
    },
    {
        id: 2,
        href: "#About",
        classIcon: "fa-solid fa-address-card"
    },
    {
        id: 3,
        href: "#Home",
        classIcon: "fa-solid fa-house"
    },
    {
        id: 4,
        href: "#Skills",
        classIcon: "fa-solid fa-screwdriver-wrench"
    },
    {
        id: 5,
        href: "#Contact",
        classIcon: "fa-solid fa-message"
    }
];

export const iconSocialMediaList = [{
        id: 1,
        href: "https://www.linkedin.com/in/jriveraaa/",
        classIcon: "fa-brands fa-linkedin",
        hrefClass: "home-social-media",
        external: true
    },
    {
        id: 2,
        href: "https://github.com/riveraaj/",
        classIcon: "fa-brands fa-github",
        hrefClass: "home-social-media",
        external: true
    },
    {
        id: 3,
        href: "https://www.instagram.com/__riveraa.j/",
        classIcon: "fa-brands fa-instagram",
        hrefClass: "home-social-media",
        external: true
    },
];

export const skillsList = [{
        id: 1,
        name: 'Frontend',
        description: 'Front-end development is the process of designing and developing the user interface of a website or web application.',
        skillsSet: [{
                id: 1,
                name: 'HTML5'
            },
            {
                id: 2,
                name: 'CSS'
            },
            {
                id: 3,
                name: 'JavaScript'
            },
            {
                id: 4,
                name: 'Bootstrap'
            },
            {
                id: 5,
                name: 'JQuery'
            },
            {
                id: 6,
                name: 'React'
            },
            {
                id: 7,
                name: 'Google Cloud'
            },
            {
                id: 8,
                name: 'Figma'
            },
            {
                id: 9,
                name: 'Canva'
            }
        ]
    },
    {
        id: 2,
        name: 'Backend',
        description: 'Back-end development is the process of designing and developing the server side of a web application or website.',
        skillsSet: [{
                id: 1,
                name: 'JAVA'
            },
            {
                id: 2,
                name: 'Python'
            },
            {
                id: 3,
                name: 'PHP'
            },
            {
                id: 4,
                name: 'C#'
            },
            {
                id: 5,
                name: 'Entity Framework'
            },
            {
                id: 6,
                name: 'ASP.NET'
            },
            {
                id: 7,
                name: 'ADO.NET'
            },
            {
                id: 8,
                name: 'Microsoft MVC'
            },
            {
                id: 9,
                name: 'JPA'
            },
            {
                id: 10,
                name: 'Hibernet'
            },
            {
                id: 11,
                name: 'Servlet'
            },
            {
                id: 12,
                name: 'Spring MVC'
            },
            {
                id: 13,
                name: 'Spring Boot'
            },
            {
                id: 14,
                name: 'Spring'
            },
            {
                id: 15,
                name: 'Maven'
            }
        ]
    },
    {
        id: 3,
        name: 'Mobile',
        description: 'Mobile development is the process of designing and developing mobile applications for mobile devices, such as smartphones and tablets.',
        skillsSet: [{
                id: 1,
                name: 'Android Studio'
            },
            {
                id: 2,
                name: 'Gradle'
            },
            {
                id: 3,
                name: 'Kotlin'
            },
            {
                id: 4,
                name: 'Firebase'
            },
            {
                id: 5,
                name: 'JAVA'
            }
        ]
    },
    {
        id: 4,
        name: 'Database',
        description: 'The database is a fundamental component in the development of web and mobile applications, since it is in charge of storing and organizing the information used in the application.',
        skillsSet: [{
                id: 1,
                name: 'SQLServer'
            },
            {
                id: 2,
                name: 'MYSQL'
            },
            {
                id: 3,
                name: 'Oracle'
            },
            {
                id: 4,
                name: 'Cloud Firestore'
            }
        ]
    }
]