// Render license badge if user choose license option

function badge(license) {
    if (license !== "None") {
      return `![Badge](https://img.shields.io/badge/License-${license}-blue.svg)`
    }
    return ``;
  }

// Render license table of content if user choose license option

  function link(license) {
    if (license !== "None") {
      return `- [License](#license-none)`
    }
    return ``;
  }

// Render license section if user choose license option

  function section(license) {
    if (license !== "None") {
      return `## License 
      This application is covered by the ${license} license.`
    }
    return ``;
  
  }

// Function generating answers to README file based on user's input

function generateMarkdown(answers) {
return `
# TiTle
${answers.title}

${badge(answers.license)}

${answers.name}

## Description 🔎
${answers.description}

## Table of Contents 📖
- [Installation](#installation-⚙️)
- [Usage](#usage-🎮)
${link(answers.license)}
- [Test](#tests-🧪)
- [Credits](#credits-🧑‍🤝‍🧑)
- [Questions](#questions-🙋)
- [Deployed Application](#deployed-application-🚀)

## Installation ⚙️
${answers.install}

## Usage 🎮
${answers.usage}

${section(answers.license)}

## Tests 🧪
${answers.test}


## Questions 🙋
If there are any questions, feel free to contact my email at: ${answers.email}

You can also find me on GitHub at: [${answers.github}](https://www.github.com/${answers.github})

## Deployed Application 🚀
This application was deplopyed at [${answers.deploy}](${answers.deploy})
`
}

module.exports = generateMarkdown

