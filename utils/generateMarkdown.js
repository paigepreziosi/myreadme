function renderLicenseBadge(license) {
  if (license == 'MIT') {
    return '[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  }
  if (license == 'Apache 2.0') {
    return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache)'
  }
  if (license == 'GPL 3.0') {
    return '[![License](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
  }
  if (license == 'BSD 3') {
    return '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD)'
  }
  if (license == 'None') {
    return ''
  }

}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
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
  
  ${data.license !== "None" ? "### License" : ""}
  ${data.license !== "None" ? renderLicenseBadge(data.license) : ""}

`;
}

module.exports = generateMarkdown;
