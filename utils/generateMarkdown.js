// function to generate markdown for README
// [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]
// [![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]
function generateMarkdown(data) {
  return `# ${data.title}

  ![License: AGPL v3](https://img.shields.io/badge/License-${data.license}-blue.svg)

  ## Description
  ${data.description}

  ## Table of contents
  
  * [Installation](#installation)

  * [Usage](#usage)

  * [License](#license)

      * [Contributing](#contributing)

      * [Tests](#tests)

      * [Questions](#questions)

  ## Installation

  To install necessary dependencies, run the following command: 

  ~~~ 
  ${data.install}
  ~~~

  ## Usage 
  ${data.usage}

  ## License
  ${data.license}

  ## Contributing
  ${data.contributing}

  ## Tests
  ~~~ 
  ${data.tests}
  ~~~

  ## Questions

 If you have any questions about this project, please feel free to reach out to me at [${data.email}](mailto:${data.email}). 
 You can find out more about my work at [${data.git_username}](https://github.com/${data.git_username}).


`;
}

module.exports = generateMarkdown;
