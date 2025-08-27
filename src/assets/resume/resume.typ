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

// this point is technically false; all maint tools are for IT and other tech departments (like BOLT)
  - Within first month of employment, built web-based maintenance tool that enables non-technical Legal staff to perform CRUD operations on SQL Server lookup table. This table stores crucial data about different (sub)categories that legal documents can be classified as. Legal trials require many documents, and the disorganization of them can negatively impact a trial, of which this tool mitigates. This application uses ASP.NET Core Web API to handle HTTP requests, Angular for client-side interactivity, and Material UI for styled web components to provide a user-friendly experience.
  
  - Developed web application for Alternative Programs Bureau Drug Treatment Unit to manage data about defendants enrolled in court-mandated drug treatment programs. This unit aims to divert drug-addicted defendants to treatment programs to seek help rather than face incarceration. Stored data is normalized across many tables in SQL Server. Initially built with .NET Framework MVC and jQuery, re-engineered using ASP.NET Core Web API for server logic, Angular for data-driven reactive forms, and Material UI for crafting an intuitive interface.

// Charge maintenance

  // - Assumed responsibility of maintaining existing web application 

// mental health case flagger

  // TODO: add point about teamwork, user authorization with apps, REST APIs, Charge Maintenance Tool

  // IDEA: since many apps use same tech stack, separate the tech stack into its own point, and focus more on the application itself in the other bullet points? This is to reduce redundant points possibly

// need point solely about using stored procedures,

// need point on resolving user submitted tickets in timely manner...

  - Wrote application-specific SQL Server stored procedures to facilitate data transfer between database and applications....

  - Worked with Legal staff to translate their business requirements into full-stack applications tailored to their specific needs....

  - Embedded SSRS reports into frontend applications that accept user inputs and generate 





]

#resume-entry(
  title: "Research Assistant",
  location: "Stony Brook, NY",
  date: "October 2022 - August 2023",
  description: "U.S. Government Research Program: IARPA HIATUS"
)

#resume-item[
  - Worked on a federal research project funded by the Intelligence Advanced Research Projects Activity (IARPA) called HIATUS, which focuses on authorship attribution, the task of automatically identifying the author of a document.

  - Developed Gram2Vec, a Python package utilizing spaCy and Pandas to convert text into vectors based on writing style. Differs from other embedding algorithms like Word2Vec in that each vector position corresponds to a concrete feature pertaining to grammar usage. This makes the vectors interpretable, a property that traditional word vectors often lack.

  - Performed authorship attibutions experiments with Gram2Vec using custom built K-Nearest Neighbors testing algorithm, as well as an evaluation suite provided by IARPA.

  - Collaborated with team members to compile monthly progress reports.

]

= Skills

#resume-skill-item("Frontend",
  (
    "Angular",
    "RxJS",
    "TypeScript",
    "JavaScript",
    "HTML",
    "jQuery",
    "VueJS",
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
    "SSRS",
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
