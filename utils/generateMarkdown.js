// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const licenseBadge = {
    apache_license: "[![Apache_License](https://img.shields.io/badge/License-Apache%20License-yellow)](https://opensource.org/licenses/Apache-2.0)",
    mit: "[![MIT License](https://img.shields.io/badge/License-MIT-blue)]((https://opensource.org/licenses/MIT))",
    mozilla_public_license: "[![Mozilla Public License](https://img.shields.io/badge/License-Mozilla%20Public-orange)](https://opensource.org/licenses/MPL-2.0)"
  }
  return licenseBadge[license];
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenseLink = {
    apache_license: "[Apache_License](https://choosealicense.com/licenses/apache-2.0/)",
    mit: "[MIT](https://choosealicense.com/licenses/mit/)",
    mozilla_public_license: "[Mozilla_Public_License](https://choosealicense.com/licenses/mpl-2.0/)"
  }
  return licenseLink[license];
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license) {
    return `${renderLicenseLink(license)} license`
  } else {
    return "";
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
  ${data.gitHubUserName}
  ${data.email}

## License
  ${renderLicenseSection(data.license)}
`;
}

module.exports = {generateMarkdown};
