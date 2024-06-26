import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CardComponent } from '../card/card.component';
import { Card } from '../_models/card';
import { Tag } from '../_models/tags';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
  providers: []
})
export class PortfolioComponent {

  projects: Card[] = [
    {
      id: 1,
      name: 'The Casino API',
      summary: 'This is a Python-based REST API using FastAPI and PostgreSQL for managing casino transactions and player operations. The project uses Pydantic, SQLAlchemy, Psycopg2. It also has e2e, integration and unit tests - all developed with Pytest. The deployment utilizes Dockerfiles and Docker Compose.',
      description: 'This project is a REST API designed to simulate services for casino users. The main goal was to create a backend system that manages player information, balances, and transactions in a virtual casino environment. The API provides various endpoints to manage players, balances, and transactions. These include creating, retrieving, updating, and deleting players; retrieving player balances; creating new bets; registering wins; rolling back transactions; and retrieving the transaction history of specific players. Additional endpoints are available for managing individual transactions. The API was developed using Python and the FastAPI framework, chosen for its speed and modern features. PostgreSQL was used as the relational database to ensure data integrity and reliability. The project includes end-to-end (e2e), integration, and unit tests to ensure the robustness and quality of the code. Pytest was the testing framework used for this purpose. Docker Compose was utilized to orchestrate two containerized services: the casino API (localhost:3001) and the PostgreSQL database (localhost:5433). This setup ensures easy deployment and consistency across different environments. The API is documented using Swagger, available at localhost:3001/docs. The project is organized into models, schemas, routes, services, repositories, and exceptions to ensure clean, modular, and maintainable code. It includes commit patterns, dependency management with Poetry, and follows best practices for API development and testing.',
      projectLink: 'https://github.com/barbaracalderon/casino-backend',
      tags: [Tag.PYTHON, Tag.PYTEST, Tag.FASTAPI, Tag.PYDANTIC, Tag.POSTGRESQL, Tag.SQLITE, Tag.SQLALCHEMY, Tag.DOCKER, Tag.DOCKERCOMPOSE],
      pictures: ["../../assets/casino01.png", "../../assets/casino02.png"]
    },
    {
      id: 2,
      name: 'The Pokédex Project',
      summary: 'The Pokédex project is a comprehensive system developed to manage and provide detailed information about Pokémon. It consists of a backend API built with FastAPI and a frontend interface developed using Angular. Docker is used for deploy and Pytest for unit tests.',
      description: 'In this project, I aimed to build a comprehensive Pokédex API and a user-friendly frontend interface to enhance the Pokémon experience. My primary objective here was to showcase knowledge in a variety of tools and development services. These included the creation of an API with FastAPI (Python), handling robust data size and asynchronous requests; showcasing alphabetical order for the Pokémon list and data; designing a dark-theme interface for improved user experience; developing an intuitive frontend interface that allows for easy browsing and access to Pokémon information; exporting Pokémon data to an XML file; using Gitflow for version control and collaborative development; Pytest for unit testing to maintain code quality and reliability; and Docker and Docker-Compose for building and deploying the application efficiently. With these tools and objectives in place, the Pokédex Project was created and is ready for testing, use, and deployment.',
      projectLink: 'https://github.com/barbaracalderon/pokedex-api',
      tags: [Tag.PYTHON, Tag.PYTEST, Tag.FASTAPI, Tag.ANGULAR, Tag.BOOTSTRAP, Tag.CSS3, Tag.HTML5, Tag.DOCKER, Tag.DOCKERCOMPOSE, Tag.SQLITE],
      pictures: ["../../assets/pokedex_01.png", "../../assets/pokedex_02.png", "../../assets/pokedex_03.png", "../../assets/pokedex_04.png", "../../assets/pokedex_05.png", "../../assets/pokedex_06.png", "../../assets/pokedex_07.png"]
    },
    {
      id: 3,
      name: 'TeamTrack',
      summary: 'TeamTrack is an application for visualizing projects with "open" status to keep track of your customers and activities.',
      description: 'TeamTrack was developed by me with the aim of facilitating project, customer, and task management, offering an intuitive interface and requested functionalities, similar to a watchdog. The combination of Spring Boot on the backend and Vue.js on the frontend provides an efficient application that is easy to maintain. We hope this system meets your needs and facilitates tracking your daily activities.',
      projectLink: 'https://github.com/barbaracalderon/teamtrack',
      tags: [Tag.VUEJS, Tag.TYPESCRIPT, Tag.HTML5, Tag.CSS3, Tag.BOOTSTRAP, Tag.JAVA, Tag.JPA, Tag.JDBC, Tag.JUNIT, Tag.MOCKITO, Tag.HIBERNATE, Tag.LOMBOK, Tag.SPRINGBOOT, Tag.SPRINGWEB],
      pictures: ["../../assets/teamtrack_06.png", "../../assets/teamtrack_07.png", "../../assets/teamtrack_08.png", "../../assets/teamtrack_09.png", "../../assets/teamtrack_10.png"]
    },
    {
      id: 4,
      name: 'Angular Portfolio App',
      summary: 'A responsive and dynamic portfolio website designed and developed by Barbara Calderon.',
      description: 'This portfolio is a dynamic and responsive web application built using Angular, showcasing my skills and projects as a software developer. The design and development of this portfolio aimed to provide a seamless user experience across different devices while highlighting various aspects of my professional journey. The potfolio has sections of home, about, education, portfolio projects and contact information. Key features are its dynamic content, the responsive design and modern aesthetics.',
      projectLink: 'https://github.com/barbaracalderon/angular-portfolio-app',
      tags: [Tag.ANGULAR, Tag.TYPESCRIPT, Tag.HTML5, Tag.CSS3, Tag.BOOTSTRAP],
      pictures: ["../../assets/portfolio_01.png", "../../assets/portfolio_02.png", "../../assets/portfolio_03.png", "../../assets/portfolio_04.png", "../../assets/portfolio_05.png"]
    },
    {
      id: 5,
      name: 'The Brazilian State Official Gazettes Restful API',
      summary: "The 'Diário Oficial da União' (DOU) Web Restful API developed in the thesis for the bachelor's degree in Information Systems at UFSC.",
      description: "The Diário Oficial da União (DOU) serves as an official communication medium of the Brazilian state to its nationals and interested parties, established in 1862. Traditionally printed by the National Press, the DOU underwent a transformation in 2017, becoming fully digitized and accessible only online. This work focuses on a case study capturing data from DOUs between 2020-2022. The project provides accessibility through a Web Restful API using the Swagger framework for documentation. For this project, a data model was developed to extract information about signers of documents in a DOU article, the type of its publication (dispatch, ordinance, etc.), main category (ministry, secretariat, etc.), publication date, and more.",
      projectLink: 'https://github.com/barbaracalderon/dou-rest-api',
      tags: [Tag.PYTHON, Tag.FLASK, Tag.HTML5, Tag.CSS3, Tag.JAVASCRIPT, Tag.INSOMNIA, Tag.POSTGRESQL, Tag.SQLALCHEMY, Tag.SQL],
      pictures: ["../../assets/dou_01.png", "../../assets/dou_02.png", "../../assets/dou_03.png"]
    },
    {
      id: 6,
      name: 'Slot Machine Game',
      summary: 'The slot machine game played in Casinos, with three spinning reels, recreated in Javascript, HTML5 and CSS3.',
      description: "This is a simple slot machine game built using HTML, CSS, and JavaScript. The game features three reels with various images, a start button to spin the reels, and dynamic display of balance and bet values. The slot machine game was created as a challenge project to explore frontend skills and JavaScript programming. Initially, the intention was to use Pixi.js for graphics rendering, but due to time constraints and a steep learning curve (first time dealing with it), a simpler approach with basic HTML, CSS, and JavaScript was chosen. I also had plans to add a slot lever sound effect when pressing play, but was unable to find a free resource available.",
      projectLink: 'https://github.com/barbaracalderon/simple-slot-machine-game',
      tags: [Tag.JAVASCRIPT, Tag.HTML5, Tag.CSS3],
      pictures: ["../../assets/sm_01.png", "../../assets/sm_02.png", "../../assets/sm_03.png"]
    },
    {
      id: 7,
      name: 'EduConnect API',
      summary: 'EduConnect Application is a RESTful API for educational management, handling students, teachers, courses, grades, subjects, and more. Developed in Java with Spring Boot and PostgreSQL, it provides CRUD operations and access control using JWToken.',
      description: "EduConnect is an educational management system designed to provide a RESTful API that simplifies the administration of educational institutions. Developed in Java using Spring Boot, the system facilitates the management of students, teachers, courses, grades, and other educational data. The API allows users to perform various operations such as creating, updating, retrieving, and deleting data stored in the PostgreSQL database, as well as authenticating users and controlling access to endpoints based on their roles and permissions. The project aims to adopt the Single Responsibility Principle (SRP), extensively described in the Object-Oriented Programming (OOP) paradigm by Robert C. Martin. This principle ensures that classes have only one responsibility. In the context of this project, SRP was implemented by structuring the codebase into distinct layers. Controller classes are tasked with receiving HTTP requests and delegating the processing to service classes, solely returning appropriate responses to the client. Service classes are responsible for implementing the business logic of the application, encapsulating operations such as validations, calculations, and data access through communication with repository classes. Repository classes provide methods to access and manipulate data in the database, sometimes creating specific methods within the JpaRepository extension. DTO (Data Transfer Object) classes handle the transportation of data between application layers, containing only attributes and access methods without any business logic. Interface classes define the contract with the service, specifying methods related to specific application functionality. This API also control routing access to users based on their role.",
      projectLink: 'https://github.com/barbaracalderon/fmt-educonnect',
      tags: [Tag.JAVA, Tag.SPRINGBOOT, Tag.SPRINGJWT, Tag.SPRINGSECURITY, Tag.SPRINGWEB, Tag.POSTGRESQL, Tag.INSOMNIA, Tag.POSTMAN, Tag.JDBC, Tag.JPA, Tag.LOMBOK, Tag.RESTAPI, Tag.SQL],
      pictures: ["../../assets/ec_01.png", "../../assets/ec_02.png", "../../assets/ec_03.png"]
    },
    {
      id: 8,
      name: '12 Barcodes API',
      summary: 'The 12 Barcodes API is a user-friendly RESTful API designed to provide a simple and practical solution for generating barcodes in applications.',
      description: "This RESTful API serves as a playground to explore and master technologies from the Flask ecosystem and some software design. Embracing the Model-View-Controller (MVC) architecture and DRY principle, I strive for a clean, organized codebase that fosters maintainability and scalability - in the rare chance this project ever grows to something unexpected. To ensure clarity and ease of use, I've meticulously documented this project according to the OpenAPI standard with Swagger. One unique aspect of this project is its reliance on lightweight data processing, foregoing the need for a traditional database. To achieve this, I crafted a buffer to handle images so it deals with image data directly in memory, avoiding the need to write it down. This may impact latency since the images are served without the need for a retrieval move. No need for a persistent storage. This decision reflects my commitment to simplicity. You need a barcode image, you get it. You need a little bit of information for that type of barcode, you get it. ",
      projectLink: 'https://github.com/barbaracalderon/the-12-barcodes-api',
      tags: [Tag.PYTHON, Tag.FLASK, Tag.HTML5, Tag.CSS3, Tag.JAVASCRIPT, Tag.POSTMAN],
      pictures: ["../../assets/12_01.png", "../../assets/12_02.png", "../../assets/12_03.png", "../../assets/12_04.png", "../../assets/12_05.png"]
    },
    {
      id: 9,
      name: 'Notelock API',
      summary: 'Notelock is a Restful API in Java that uses Spring Boot and JWT for authentication and security. Its endpoints are designed to manage resources such as notebooks and notes, with data persisted in a PostgreSQL database.',
      description: "Notelock is a robust RESTful API designed to manage notebooks and notes efficiently. Developed using Java with Spring Boot and JWT authentication, Notelock offers endpoints to handle various resources, including notebooks and notes, with data persistence in a PostgreSQL database. With Notelock, users can perform CRUD (Create, Read, Update, Delete) operations on notebooks and notes, facilitating the organization and management of their digital notes. The API prioritizes security and authentication, utilizing JWT tokens for secure user authentication. Built with scalability and reliability in mind, Notelock ensures seamless integration with other systems and applications. Its user-friendly interface and intuitive design make it ideal for developers seeking a reliable solution for managing digital notebooks and notes. Whether you're a developer looking to streamline note management in your applications or an organization in need of a robust note-taking solution, Notelock provides the tools and functionalities to meet your needs effectively.",
      projectLink: 'https://github.com/barbaracalderon/notelock',
      tags: [Tag.JAVA, Tag.SPRINGBOOT, Tag.SPRINGJWT, Tag.SPRINGSECURITY, Tag.SPRINGWEB, Tag.POSTGRESQL, Tag.INSOMNIA, Tag.POSTMAN, Tag.JDBC, Tag.JPA, Tag.LOMBOK, Tag.RESTAPI, Tag.SQL],
      pictures: ["../../assets/n_01.png", "../../assets/n_02.png"]
    },
    {
      id: 10,
      name: 'Majority App',
      summary: 'Majority App is a web application built using the Dash framework in Python. It provides insights into the voting behavior of US legislators on various bills.',
      description: "Majority App is a web application created using Dash, a Python framework designed for building analytical web applications. The primary purpose of Majority App is to provide insights into the voting behavior of US legislators on various bills. This makes it a valuable tool for public affairs professionals and political analysts who seek detailed information about legislative activities. As a mock application developed for educational purposes, Majority App offers several features that facilitate the exploration of legislative data. It includes a tab navigation system that allows users to move between different sections, such as information about the application, details on various bills, and data on individual legislators. The 'About Us' tab provides an overview of the application's capabilities, outlining the tools and features available. The 'Bills' tab allows users to select a specific bill and view comprehensive details, including the primary sponsor and the tally of votes for and against the bill. Meanwhile, the 'Legislators' tab enables users to examine the voting behavior of individual legislators, offering insights into the number of bills they have supported or opposed.",
      projectLink: 'https://github.com/barbaracalderon/majority-mock-app',
      tags: [Tag.PYTHON, Tag.DASH, Tag.PLOTLY],
      pictures: ["../../assets/ma_01.png", "../../assets/ma_02.png", "../../assets/ma_03.png"]
    },
    {
      id: 11,
      name: 'Tutor Mate API',
      summary: 'This project is a RESTful API developed in Java and Spring Boot to manage appointments between students and tutors. It uses JDK 17 and PostgreSQL database with the specified database schema.',
      description: "Tutor-Mate is a RESTful API developed in Java using Spring Boot, designed to manage appointments between students and tutors. It utilizes JDK 17 and PostgreSQL for database management with a specified schema. The API provides various endpoints to handle resources such as students, tutors, schedules, materials, and appointments. The API's endpoints allow users to perform CRUD operations, enabling the creation, reading, updating, and deletion of records. For instance, the /alunos endpoint manages student data, while the /tutores endpoint manages tutor data. Schedules can be managed via the /agendas endpoint, and educational materials are handled through the /materiais endpoint. The /agendamentos endpoint facilitates viewing and managing appointments specific to students or tutors. Built with a robust set of technologies, the Tutor-Mate API uses Java 17, Spring Boot for application development, Spring Boot Starter Data JPA for data persistence, Spring Boot Starter Web for web application development, and Spring Boot DevTools for enhanced productivity during development. PostgreSQL serves as the relational database, and Project Lombok helps reduce boilerplate code in Java. Maven is used as the dependency management and build automation tool.",
      projectLink: 'https://github.com/barbaracalderon/fmt-tutor-mate',
      tags: [Tag.JAVA, Tag.SPRINGBOOT, Tag.SPRINGWEB, Tag.POSTGRESQL, Tag.INSOMNIA, Tag.LOMBOK, Tag.RESTAPI, Tag.JPA, Tag.LOMBOK, Tag.SQL],
      pictures: ["../../assets/tm_01.png", "../../assets/tm_02.png", "../../assets/tm_03.png"]
    },
    {
      id: 12,
      name: 'The Music Time Machine Project',
      summary: 'Choose a day in time and automatically create a Spotify playlist of the top songs playing in the world in that moment.',
      description: "This project involves creating a program that interacts with Spotify to transport users back in time musically by retrieving and playing songs from a specific date in the past. To run the Music Time Machine Project, you need Python installed on your computer, a Spotify account, and a Spotify app created through the Spotify Developer Dashboard. The app created in the Developer Dashboard will serve as the project’s base, providing necessary credentials like CLIENT_ID, CLIENT_SECRET, and REDIRECT_URI. These credentials are essential for authenticating and interacting with Spotify's API, and should be securely stored as environment variables in your operating system to protect them from unauthorized access. Once the setup is complete, users can input a specific date in the format YYYY-MM-DD (year-month-day) to use the application. The program will then fetch and play songs that were popular on Spotify on that date, effectively creating a musical time-travel experience. The project includes detailed instructions on how to create a Spotify app and obtain the necessary credentials, as well as how to set environment variables. Screenshots of the app running are also provided for reference. The Music Time Machine Project showcases an ability to integrate Python with external APIs, demonstrating skills in application development and secure credential management. The goal of the project is to provide a nostalgic musical journey for users, allowing them to relive the hits from a specific date in the past through Spotify.",
      projectLink: 'https://github.com/barbaracalderon/music-time-machine-spotify',
      tags: [Tag.PYTHON, Tag.BEAUTIFULSOUP],
      pictures: ["../../assets/mt_01.png", "../../assets/mt_02.png", "../../assets/mt_03.png", "../../assets/mt_04.png"]
    },
    {
      id: 13,
      name: 'Library Manager API',
      summary: 'This project is a RESTful API for managing a simple library. It uses JDK 17 and PostgreSQL for the database with the specified database schema.',
      description: "The Library Manager API offers various endpoints to handle different entities within a library system, such as librarians, books, members, loans, and visitors. The API allows for creating, reading, updating, and deleting records for each of these entities, ensuring comprehensive management capabilities for the library. The database schema for the project was designed by myself and defined in such a way to allow for structured and organized data storage. The endpoints for managing librarians include operations to create new librarians, retrieve all or specific librarians, update their details, delete them, return their emails, and update their passwords. For loans, the API supports creating new loans, retrieving all or specific loans, updating loan details, and deleting loans. Book management endpoints enable operations to create, retrieve, update, and delete books, as well as list all book titles and authors. The member endpoints allow for the creation of new members, retrieval of all or specific members, updating member details, deleting members, listing member names, and phone numbers, and updating member phone numbers. Similarly, visitor endpoints cover creating new visitors, retrieving all or specific visitors, updating visitor details, and deleting visitors.",
      projectLink: 'https://github.com/barbaracalderon/fmt-library-manager',
      tags: [Tag.JAVA, Tag.SPRINGBOOT, Tag.SPRINGWEB, Tag.POSTGRESQL, Tag.INSOMNIA, Tag.LOMBOK, Tag.RESTAPI, Tag.JPA, Tag.LOMBOK, Tag.SQL],
      pictures: ["../../assets/lm_01.png", "../../assets/lm_02.png", "../../assets/lm_03.png"]
    },


  ]


  constructor(private titleService: Title) {
    this.titleService.setTitle('BC | Portfolio')
  }

  trackById(index: number, project: Card): number {
    return project.id;
  }

}
