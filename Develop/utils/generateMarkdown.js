// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  return`
  ![License: ${license}](https://img.shields.io/badge/License-${license}-blue.svg)
  `
  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(confirmLicense, license) {

  if (!confirmLicense) {
    return '';
  }

  return  `
    
    ## Licenses

    This application has the following Licensing:

    ${renderLicenseBadge(license)}
    ${renderLicenseLink(license)}

    `;
    
  }


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  return `
  # ${data.name}

  ## Description
   
  ${data.description}

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  
  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## Credits

  ${data.credit}

 
  ${renderLicenseSection(data.confirmLicense, data.license)}


  ## Contribution Agreement

  
  `

}

module.exports = generateMarkdown;
