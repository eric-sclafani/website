// NOTE:
// Tinymist MUST be version 11.20.0 for preview to work with this template. 

#import "lib.typ": *

#show: resume.with(
  author: (
    firstname: "Eric",
    lastname: "Sclafani",
    phone: none,
    email: "eric.sclafani321@gmail.com",
    github: "eric-sclafani",
    website: "https://ericsclafani.dev/",
    linkedin: "Eric Sclafani",
    positions: (
      "Software Developer",
    )
  ),
)

#align(center)[
#text(
    red,
    weight: "bold",
    "RESUME WORK IN PROGRESS")
]

= Experience

#resume-entry(
  title: "Junior .NET Developer",
  location: "Brooklyn, NY",
  date: "April 2024 - Present",
  description: "Kings County District Attorney's Office"
)

#resume-item[

  - Within first month of employment, built maintenance tool that enables non-technical Legal staff to perform CRUD operations on SQL Server lookup table. This table stores crucial information about different categories and subcategories legal documents can be classified as. This application uses ASP.NET Core Web API to handle HTTP requests, Angular for client-side interactivity, and Material UI for styled web components to provide a user-friendly interface. 
  

  // - Developed case flagger app as part of a suite of existing case flaggers that let Legal staff track information about defendants inside the Drug Treatment Alternative-to-Prison (DTAP) program. Initially a .NET Framework MVC and jQuery app, entirely re-engineered using Angular, Material UI, ASP.NET Web API, and SQL Server.
  // this app pulls data from many tables
  // 
  // This bureau aims at diverting drug-addicted defendants to treatment programs to seek help rather than face incarceration. 

  - Developed full-stack web application for Alternative Programs Bureau to manage data about defendants enrolled in court-mandated drug treatment programs. Stored data is normalized across many tables in SQL Server. Initially built with .NET Framework MVC and jQuery, re-engineered using ASP.NET Core Web API for server logic, Angular for data-driven reactive forms, and Material UI for crafting 

  - Wrote complex SQL Server queries, stored procedures, and views that supply data to numerous data-driven applications...

  - Integrated newer applications into large existing codebase spread across numerous repositories...

  - Worked with Legal staff to translate their application requirements into fully functional software tools...

  - Provided fast and efficient tech support for application users...

  - Collaborated on a team of \~10 developers...

  // TODO: add point about teamwork, user authorization with apps, REST APIs

]

#resume-entry(
  title: "Research Assistant",
  location: "Stony Brook, NY",
  date: "October 2022 - August 2023",
  description: "U.S. Government Research Program: IARPA HIATUS"
)

#resume-item[
  - Worked on a federal research project funded by the Intelligence Advanced Research Projects Activity (IARPA) called HIATUS, which focuses on authorship attribution, the task of automatically identifying the author of a document

  - Developed Gram2Vec, a Python package utilizing spaCy and Pandas to convert text into vectors based on writing style. Differs from other embedding algorithms like Word2Vec in that each vector position corresponds to a concrete feature pertaining to grammar usage. This makes the vectors interpretable, a property that traditional word vectors often lack

// mention iarpa provided testing code, as well as KNN approach I build using sckikit learn
  - Performed authorship attribution experiments using Gram2Vec with testing code and data provided by IARPA

  - Collaborated with team members to compile monthly progress reports

]

= Skills

#resume-skill-item("Frontend",
  (
    "Angular",
    "VueJS",
    "TypeScript",
    "JavaScript",
    "HTML",
    "jQuery",
    "RxJS",
    )
)

#resume-skill-item("UI",
  (
    "CSS",
    "SCSS",
    "Bootstrap",
    "Angular Material",
  )
)

#resume-skill-item("Backend",
  (
    "ASP.NET Core",
    ".NET",
    "MVC",
    "Python",
  )
)

#resume-skill-item("Database",
  (
    "SQL Server",
    "T-SQL",
    "SQLite"
  )
)


#resume-skill-item("Tools",
  (
    "Git",
    "Visual Studio",
    "Linux"
  )
)

#resume-skill-item("Other",
  (
    "Pandas",
    "Scikit-Learn",
    "NumPy",
    "spaCy",
    "Plotly",
    "Matplotlib"
  )
)
= Education

#resume-entry(
  title: "M.A. Computational Linguistics",
  location: "Stony Brook, NY",
  date: "August 2021 - May 2023",
  description: "Stony Brook University"
)

#resume-entry(
  title:"B.A. Linguistics",
  location:"Stony Brook, NY",
  date: "August 2019 - May 2021",
  description: "Stony Brook University"
)
