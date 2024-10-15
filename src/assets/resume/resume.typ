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

// TODO: try to add an icon section in Author for my website link, call it Homepage (do after hosting website and buying domain)
#align(center)[
#text(
    red, 
    weight: "bold", 
    "RESUME WORK IN PROGRESS")
]

= Experience

#resume-entry(
  title: "Junior . NET Developer",
  location: "Brooklyn, NY",
  date: "April 2024 - Present",
  description: "Kings County District Attorney's Office"
)

#resume-item[

  - Within first month of employment, built document category/sub-category maintenance tool with Angular for the frontend, Material UI for the interface, ASP.NET Core backend, and SQL Server database. This app allows Legal staff to perform CRUD operations such as adding new document categories and editing existing ones inside of lookup tables. This tool is essential to ensure correctness for all document related data and the various applications that rely on it

  - Developed new case flagger app as part of a suite of existing apps that let Legal staff track information about defendants. Specifically, it tracks data about defendants inside the Drug Treatment Alternative-to-Prison (DTAP) program. Initially a .NET Framework MVC and jQuery app, entirely re-engineered using VueJS for the frontend, Vuetify for UI components, and ASP.NET Core for the backend with SQL Server as the database

  - Wrote complex SQL Server queries, stored procedures, and views that supply data to numerous data-driven applications

  - Integrated newer applications into large existing codebase spread across numerous repositories

  - Worked with Legal staff to translate their application requirements into fully functional software tools

  - Provided fast and efficient tech support for application users

  // TODO: add point about teamwork

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

// = Projects

// #resume-entry(
//   title: "Gram2Vec",
//   location: [#github-link("eric-sclafani/gram2vec")],
//   date: "November 2022 - August 2023",
//   description: "python library"
// )

// #resume-item[
//   -
// ]

= Skills

#resume-skill-item("Frontend",
  (
    "JavaScript",
    "TypeScript",
    "HTML",
    "Angular",
    "VueJS",
    "jQuery",
    "Ajax",
    "RxJS",
    "LeafletJS"
    )
)

#resume-skill-item("UI",
  (
    "CSS",
    "Bootstrap",
    "Material UI",
    "SCSS",
    "Vuetify"
  )
)

#resume-skill-item("Backend",
  (
    "ASP.NET Core",
    "C#",
    "MVC",
    "Python",
    "FastAPI"
  )
)
#resume-skill-item("Database",
  (
    "SQL server",
    "T-SQL",
    "MySQL"
  )
)

#resume-skill-item("Data Analysis",
  (
    "Pandas",
    "Scikit-Learn",
    "NumPy",
    "spaCy",
    "Plotly",
    "Matplotlib"
  )
)

#resume-skill-item("Tools",
  (
    "Excel",
    "Git",
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
