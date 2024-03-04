// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  }
  if (license == 'Apache') {
    return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache)'
  }
  if (license == 'GPL') {
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
  }
  if (license == 'BSD') {
    return '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD)'
  }
  if (license == 'None') {
    return ''
  }

}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  # ${data.title}

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Test](#test)
  - [Questions](#questions)
  ${data.license !== "None" ? "- [License](#license)" : ""}

### Description
  ${data.description}

### Installation
  ${data.installation}

### Usage
 ${data.usage}

### Contributing
 ${data.contributing}

### Tests
  ${data.test}

### Questions
  If you have any questions about the repo, open an issue or contact me directly at ${data.email}. You can find more of my work at [github.com/${data.github}](https://github.com/${data.github}/).

${data.license} !== 'None' ? '### License' : ''}
${data.license} !== 'None' ? renderLicenseLink(data.license) : ''}
`;
}

module.exports = generateMarkdown;
