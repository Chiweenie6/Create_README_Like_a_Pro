// A function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  const licenseBadge = {
    apache: "[![Apache License](https://img.shields.io/badge/License-Apache%20License-yellow)](https://opensource.org/licenses/Apache-2.0)",
    mit: "[![MIT License](https://img.shields.io/badge/License-MIT-blue)]((https://opensource.org/licenses/MIT))",
    mozilla_public: "[![Mozilla Public License](https://img.shields.io/badge/License-Mozilla%20Public-orange)](https://opensource.org/licenses/MPL-2.0)"
  }
  return licenseBadge[license];
}

// A function that returns the license link
function renderLicenseLink(license) {
  const licenseLink = {
    apache: "[Apache](https://choosealicense.com/licenses/apache-2.0/)",
    mit: "[MIT](https://choosealicense.com/licenses/mit/)",
    mozilla_public: "[Mozilla Public](https://choosealicense.com/licenses/mpl-2.0/)"
  }
  return licenseLink[license];
}

// A function that returns the license section of README
function renderLicenseSection(license) {
  if(license) {
    return `${renderLicenseLink(license)} license, click link to view license.`
  } else {
    return "";
  }
  return licenseSection[license];
}

// Function for link to GitHub Repo
function gitHubRepo (data) {
  return `https://github.com/${data}`;
}

// A function to generate markdown for a README.md
function generateMarkdown(data) {
  return `# ${data.title}

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
  Image:   
  ![Image](../images/${data.screenshot})

## Installation
  ${data.installation}

## Contributing
  ${data.contributing}

## Tests
  ${data.tests}

## Questions
  Click ${gitHubRepo(data.gitHubUserName)} to view my GitHub profile.  
  Click ${data.email} to send me an email.

## License
  ${renderLicenseSection(data.license)}
`;
}

// Export function to index.js
module.exports = {generateMarkdown};
