// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  # $(data.title)

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Test](#test)
  - [Questions](#questions)

### Description
  $(data.description)

### Installation
  $(data.installation)

### Usage
 $(data.usage)

### Contributing
 $(data.contributing)

### Tests
  $(data.test)

### Questions
  If you have any questions about the repo, open an issue or contact me directly at ${data.email}. You can find more of my work at [github.com/${data.github}](https://github.com/${data.github}/).

`;
}

module.exports = generateMarkdown;
