#import "lib.typ": *

#show: resume.with(
  author: (
    firstname: "Eric", 
    lastname: "Sclafani",
    phone: "631-681-2797",
    email: "eric.sclafani321@gmail.com", 
    github: "eric-sclafani",

    linkedin: "Eric Sclafani",
    positions: (
      "Software Developer",
    )
  ),
)

// TODO: try to add an icon section in Author for my website link, call it Homepage


= Experience

#resume-entry(
  title: "Junior .NET Developer",
  location: "Brooklyn, NY",
  date: "April 2024 - Present",
  description: "Kings County District Attorney's Office"
)

#resume-item[
  // within first two months of employment, developed full-stack internal tooling using Angular and ASP.NET that communicates with SQL Server to extract different types of data (cases, NYPD, etc...). This tool (document type sub type) lets users perform CRUD operations on various lookup tables in SQL Server. Dropped into an existing codebase and created a new module

  // SQL server is the RDBMS, T-SQL is the sql language used inside of it

  // talk about building case flagger using MVC/Razor Pages, stored procedures, SQL Server

  // talk about performing multi-class classification of the document type subtype stuff

  // talk about getting app requirements from legal staff (ADAs, paralegals) and translating these requirements into tools for them to use

  // USED BOOTSTRAP TO CREATE RESPONSIVE UIs, SQL views

  //* MENTION: TSQL, ASP.NET, jQuery, Ajax, MVC  
  - Within first month of employment, developed RESTful application written in Angular and ASP.NET for legal staff to perform CRUD operations on lookup tables in SQL Server database...
  - Wrote T-SQL stored procedures in SQL Server...
  - Translated application requirements from legal staff into ...
  - 
]

#resume-entry(
  title: "Research Project Assistant",
  location: "Stony Brook, NY",
  date: "October 2022 - August 2023",
  description: "U.S. Government Research Program: IARPA HIATUS"
)

#resume-item[
  - Worked on a federal research project funded by the Intelligence Advanced Research Projects Activity (IARPA) called HIATUS, which focuses on authorship attribution, the task of automatically identifying the author of a document

// TODO: make wording clearer here, relate to AA above
  - Developed Gram2Vec, a Python package utilizing spaCy and Pandas to convert text into vectors based on writing style. Differs from other embedding algorithms like Word2Vec in that each vector position corresponds to a concrete feature pertaining to grammar usage. This makes the document vectors interpretable, a desirable property that Word2Vec vectors lack

  - Collaborated with team members to compile monthly progress reports

]

= Projects

#resume-entry(
  title: "Gram2Vec",
  location: [#github-link("eric-sclafani/gram2vec")],
  date: "November 2022 - August 2023",
  description: "python library"
)

#resume-item[
  - 
]

// maybe split into frontend, backend, languages, data analysis?
// material UI
= Skills

#resume-skill-item("Frontend", 
  (
    strong("JavaScript"), 
    strong("TypeScript"),
    "HTML",
    "CSS",
    "jQuery",
    "Ajax",
    "RxJS",
    "Angular",
    "Bootstrap",
    "SCSS"
    )
)


#resume-skill-item("Backend", 
  (
    strong("SQL Server"), 
    strong("ASP.NET"),
    "T-SQL",
    "C#",
    "MVC",
    "Python",
    "FastAPI"
  )
)

#resume-skill-item("Data Analysis", 
  (
    strong("Pandas"),
    strong("Scikit-Learn"),
    "NumPy",
    "spaCy",
    "Plotly",
    "Matplotlib"
  )
)

#resume-skill-item("Tools", 
  (
    strong("Excel"),
    strong("Git"),
    "Visual Studio",
    "Linux"
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