// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

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
  npm i
  ~~~

  ## Usage 

  ## License

  ## Contributing

  ## Tests

  ## Questions

  The application will be invoked by using the following command:

  ~~~ bash
  node index.js
  ~~~


`;
}

module.exports = generateMarkdown;
