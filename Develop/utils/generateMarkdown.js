// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "none"){
    return `![Github license](https://img.shields.io/badge/license-${license}-yellowgreen.svg)`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== ''){
    return `\n* [License](#license)\n`
  }
  return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "") {
    return `## License
    Licensed as ${license}`;
    
  }
  return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
${renderLicenseBadge(data.license)}
## Table of Contents
1: [Title](#Title)
2: [Description](#Description)
3: [Installation](#Installation)
4: [Benefits](#Benefits)
5: [Licenses](#Licenses)
6: [Contributions](#Contributions)
7: [Testing](#Testing)
8: [Contact-Me](#contact-me)
${renderLicenseLink(data.license)}
  # Title
   ${data.title}
  
   # Description
   ${data.description}
   
   # Installation
   ${data.installation}

   # Benefits
   ${data.benefits}

   # Licenses
   ${data.license}

   # Contributions 
   ${data.contributions}

   # Testing
   ${data.testing}
   
## Contact-Me
* Github - [${data.github}https://github.com/${data.github}]
* Email - [${data.email}]
  

${renderLicenseSection(data.license)}
  `;

}


module.exports = generateMarkdown;