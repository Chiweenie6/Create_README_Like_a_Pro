// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const licenseBadge = {
    Apache_License: "[![Apache_License](https://img.shields.io/badge/License-Apache%20License-yellow)]()",
    MIT: "[![MIT License](https://img.shields.io/badge/License-MIT-blue)]()",
    Mozilla_Public_License: "[![Mozilla Public License](https://img.shields.io/badge/License-Mozilla%20Public-orange)]()"
  }
  return licenseBadge[license];
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenseLink = {
    Apache_License: "[Apache_License](https://choosealicense.com/licenses/apache-2.0/)",
    MIT: "[MIT](https://choosealicense.com/licenses/mit/)",
    Mozilla_Public_License: "[Mozilla_Public_License](https://choosealicense.com/licenses/mpl-2.0/)"
  }
  return licenseLink[license];
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license) {
    return 
  }
  }
  return licenseSection[license];
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}

${renderLicenseBadge(data.license)}

## Table of Content
  - [Description](#Description)
  - [Usage](#Usage)
  - [Installation](#Installation)
  - [Contributing](#Contributing)
  - [Tests](#Tests)
  - [Questions](#Questions)
  - [License](#License)

## Description
  ${data.description}

## Usage
  ${data.usage}

## Installation
  ${data.installation}

## Contributing
  ${data.contributing}

## Tests
  ${data.tests}

## Questions
  ${data.gitHubUserName}/n
  ${data.email}

## License
  ${renderLicenseLink(data.licence)}
`;
}

module.exports = {generateMarkdown};
