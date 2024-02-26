// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

// found shields.io to create badges

function renderLicenseBadge(license) {
  if (license === 'free') {
    return '[![License: Free](https://img.shields.io/badge/License-Free-blue.svg)](link-to-license)';
  } else if (license === 'full') {
    return '[![License: Full](https://img.shields.io/badge/License-Full-green.svg)](link-to-license)';
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'free') {
    return '[Free License](link-to-free-license)';
  } else if (license === 'full') {
    return '[Full License](link-to-full-license)';
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = '## License\n';

 }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
