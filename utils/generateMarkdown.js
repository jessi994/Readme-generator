// function to generate markdown for README

function generateMarkdown(data) {
  const obj = {
    'MIT': 'MIT-yellow',
    'gpl-2-0': 'GPL%20v2-blue',
    'Apache-2.0': 'Apache%202.0-blue'

  };
  return `# ${data.title}

  [![License: ${data.license}](https://img.shields.io/badge/License-${obj[data.license]}.svg)](https://opensource.org/licenses/${data.license})

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
