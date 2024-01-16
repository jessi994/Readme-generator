# Readme-generator

## Descritption
This project generates a README file in the utils folder of this repo. This project was built to become familiar with the use of node.js for future work with react, alongside building a handy README generator for developers. During the course of this project the functionality of the inquirer library was understood and used to recieve input from the user and the fs library was used to write the README file. This allows developers to quickly and easily create a README file by using a command-line application to generate one.

## User Story

* As a developer, I want a README generator so that I can quickly create a professional README for a new project


## This project does the following:
* Create a command-line application that accepts user input.
  * When a user is prompted for information about the application repository then a high-quality, professional README.md is generated with:
    * The title of my project 
    * Sections entitled:
      * Description 
      * Table of Contents 
      * Installation 
      * Usage 
      * License 
      * Contributing 
      * Tests 
      * Questions
    * When a user enters the project title then it is displayed as the title of the README
    * When a user enters a description, installation instructions, usage information, contribution guidelines, and test instructions then this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
    * When a user chooses a license for their application from a list of options then a badge for that license is added near the top of the README and a notice is added to the section of the README entitled **License** that explains which license the application is covered under
    * When a user enters their GitHub username then this is added to the section of the README entitled Questions, with a link to their GitHub profile
    * When a user enters their email address then this is added to the section of the README entitled Questions, with instructions on how to reach them with additional questions
    * When a user clicks on the links in the **Table of Contents** then they are taken to the corresponding section of the README

### README generator Walkthrough Video:



https://github.com/jessi994/Readme-generator/assets/147608169/4664d3f3-c67e-4d4f-82d5-1e94ab0a3097


### Credits
N/A
