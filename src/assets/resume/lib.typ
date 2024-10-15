#import "@preview/fontawesome:0.1.0": *
#import "@preview/linguify:0.4.0": *

// const color
#let color-darknight = rgb("#131A28")
#let color-darkgray = rgb("#333333")
#let color-gray = rgb("#5d5d5d")
#let default-accent-color = rgb("#262F99")

// const icons
#let linkedin-icon = box(
  fa-icon("linkedin", fa-set: "Brands", fill: color-darknight),
)
#let github-icon = box(
  fa-icon("github", fa-set: "Brands", fill: color-darknight),
)

#let website-icon = box(
  image("assets/house-solid.svg"))
)


// for some reason this icon doesn't work with fa-icon, so we use the local version
#let phone-icon = box(image("assets/square-phone-solid.svg"))

#let email-icon = box(fa-icon("envelope", fill: color-darknight))

/// Helpers

#let __justify_align(left_body, right_body) = {
  block[
    #left_body
    #box(width: 1fr)[
      #align(right)[
        #right_body
      ]
    ]
  ]
}

#let __justify_align_3(left_body, mid_body, right_body) = {
  block[
    #box(width: 1fr)[
      #align(left)[
        #left_body
      ]
    ]
    #box(width: 1fr)[
      #align(center)[
        #mid_body
      ]
    ]
    #box(width: 1fr)[
      #align(right)[
        #right_body
      ]
    ]
  ]
}

#let github-link(github-path) = {
  set box(height: 11pt)
  
  align(right + horizon)[
    #fa-icon("github", fa-set: "Brands", fill: color-darkgray) #link(
      "https://github.com/" + github-path,
      github-path,
    )
  ]
}

#let secondary-right-header(body) = {
  set text(
    size: 11pt,
    weight: "medium",
  )
  body
}

#let tertiary-right-header(body) = {
  set text(
    weight: "light",
    size: 9pt,
  )
  body
}

#let justified-header(primary, secondary) = {
  set block(
    above: 0.7em,
    below: 0.7em,
  )
  pad[
    #__justify_align[
      == #primary
    ][
      #secondary-right-header[#secondary]
    ]
  ]
}

#let secondary-justified-header(primary, secondary) = {
  __justify_align[
    === #primary
  ][
    #tertiary-right-header[#secondary]
  ]
}
/// --- End of Helpers

/// ---- Resume Template ----

#let resume(
  author: (:),
  date: datetime.today().display("[month repr:long] [day], [year]"),
  accent-color: default-accent-color,
  colored-headers: true,
  language: "en",
  body,
) = {
  if type(accent-color) == "string" {
    accent-color = rgb(accent-color)
  }
  
  let lang_data = toml("lang.toml")
  
  set document(
    author: author.firstname + " " + author.lastname,
    title: "resume",
  )
  
  set text(
    font: ("Source Sans Pro"),
    lang: language,
    size: 11pt,
    fill: color-darkgray,
    fallback: true,
  )
  
  set page(
    paper: "a4",
    margin: (left: 15mm, right: 15mm, top: 10mm, bottom: 10mm),
    footer: [
      #set text(
        fill: gray,
        size: 8pt,
      )
      #__justify_align_3[
      ][
      ][
        #counter(page).display()
      ]
    ],
    footer-descent: 0pt,
  )
  
  show par: set block(
    above: 0.75em,
    below: 0.75em,
  )
  set par(justify: true)
  
  set heading(
    numbering: none,
    outlined: false,
  )
  
  show heading.where(level: 1): it => [
    #set block(
      above: 1em,
      below: 1em,
    )
    #set text(
      size: 16pt,
      weight: "regular",
    )
    
    #align(left)[
      #let color = if colored-headers {
        accent-color
      } else {
        color-darkgray
      }
      #text[#strong[#text(color)[#it.body.text]]]
      #box(width: 1fr, line(length: 100%))
    ]
  ]
  
  show heading.where(level: 2): it => {
    set text(
      color-darkgray,
      size: 12pt,
      style: "normal",
      weight: "bold",
    )
    it.body
  }
  
  show heading.where(level: 3): it => {
    set text(
      size: 10pt,
      weight: "regular",
    )
    smallcaps[#it.body]
  }
  
  let name = {
    align(center)[
      #pad(bottom: 5pt)[
        #block[
          #set text(
            size: 32pt,
            style: "normal",
            font: ("Roboto"),
          )
          #text(fill: accent-color, weight: "thin")[#author.firstname]
          #text(weight: "bold")[#author.lastname]
        ]
      ]
    ]
  }
  
  let positions = {
    set text(
      accent-color,
      size: 15pt,
      weight: "regular",
    )
    align(center)[
      #smallcaps[
        #author.positions.join(
          text[#"  "#sym.dot.c#"  "],
        )
      ]
    ]
  }
   
  let contacts = {
    set box(height: 9pt)
    
    let separator = box(width: 5pt)
    
    align(center)[
      #set text(
        size: 9pt,
        weight: "regular",
        style: "normal",
      )
      #block[
        #align(horizon)[
          #if author.phone != none [
            #phone-icon
            #box[#text(author.phone)]
            #separator
          ]
          #if author.email != none [
            #email-icon
            #box[#text(author.email)]
          ]
          #if author.github != none [
            #separator
            #github-icon
            #box[#link("https://github.com/" + author.github)[#author.github]]
          ]
          #if author.linkedin != none [
            #separator
            #linkedin-icon
            #box[
              #link("https://www.linkedin.com/in/eric-sclafani-64b337226/")[#author.firstname #author.lastname]
            ]
          ]
          #if author.website != none [
            #separator
            #website-icon
            #box[
              #link("https://ericsclafani.dev")[Homepage]
            ]
          ]
        ]
      ]
    ]
  }
  
  name
  positions
  contacts
  body
}
#let resume-item(body) = {
  set text(
    size: 10pt,
    style: "normal",
    weight: "light",
    fill: color-darknight,
  )
  set par(leading: 0.65em)
  body
}

#let resume-entry(
  title: none,
  location: "",
  date: "",
  description: "",
  accent-color: default-accent-color,
) = {
  pad[
    #justified-header(title, location)
    #secondary-justified-header(description, date)
  ]
}

#let resume-certification(certification, date) = {
  justified-header(certification, date)
}

#let resume-skill-item(category, items) = {
  set block(below: 0.65em)
  set pad(top: 2pt)
  
  pad[
    #grid(
      columns: (20fr, 80fr),
      gutter: 10pt,
      align(right)[
        #set text(hyphenate: false)
        == #category
      ],
      align(left)[
        #set text(
          size: 11pt,
          style: "normal",
          weight: "light",
        )
        #items.join(", ")
      ],
    )
  ]
}