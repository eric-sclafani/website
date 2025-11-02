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
      "Full stack Developer",
    )
  ),
)

= Experience

#resume-entry(
  title: "Junior Full Stack .NET Developer",
  location: "Brooklyn, NY",
  date: "April 2024 - Present",
  description: "Kings County District Attorney's Office"
)

#resume-item[


// need point on resolving user submitted tickets in timely manner...
// 


  // designed SQL server tables...

  // rxjs for performant interactivity
  

  // add info about how these apps handle important legal data for legal staff to do stuff with

  - Tailor-made and delivered 3+ full stack web applications for different bureaus/units to facilitate data operations (CRUD). These applications enable non-technical Legal staff to record and view sensitive data pertaining to defendant cases, diversion program updates, and other important information.

//? each sentence needs to be tied together here.
  - Using Angular, TypeScript, HTML, and CSS, developed intuitive user interfaces for web application frontends. Utilized Angular Material and Bootstrap to create user-friendly responsive Angular components. Built reactive forms to correctly capture and display important information submitted by Legal staff. Created custom form validation rules to ensure data consistency.

  - Designed robust RESTful APIs using ASP.NET Core Web API to handle HTTP requests in application backends. Each Web API endpoint executes T-SQL stored procedures containing custom query logic to suit the application needs. Data is normalized across many tables and databases in SQL Server.


  - Embedded SSRS reports hosted on separate server into application frontends via HTML iframes. They accept user-provided criteria and generate organized tabular data reports for non-technical end users.

  - Resolved user-submitted tickets in timely and efficient manner via ServiceDesk software.

  - Worked with Legal staff to translate their business requirements into full-stack applications.



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

  #show link: set text(fill: blue)
  - Research Paper: Peter Zeng, #text(weight: "bold")[Eric Sclafani], Owen Rambow, #link("https://arxiv.org/abs/2406.12131")["Gram2Vec: An Interpretable Document Vectorizer"]

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
    "Angular Material",
    "Bootstrap",
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


