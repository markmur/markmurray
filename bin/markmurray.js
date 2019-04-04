#!/usr/bin/env node

const chalk = require("chalk");
const boxen = require("boxen");

const options = {
  padding: 1,
  margin: 2,
  borderStyle: "round"
};

const label = text => chalk.gray.bold(`${text}:`);
const link = text => chalk.magenta.bold(text);

const data = {
  name: chalk.green.bold("Mark Murray"),
  handle: chalk.white("@markmur"),
  work: chalk.white.italic("Software Engineer @ Zalando, Dublin"),
  portfolio: chalk.cyan.bold("https://markmurray.co"),
  twitter: link("https://twitter.com/mrkmur"),
  github: link("https://github.com/markmur"),
  linkedin: link("https://linkedin.com/in/markmur/"),
  npx: chalk.green.bold("npx markmurray")
};

const output = `
  ${data.name} / ${data.handle}

  ${data.work}                    

  ${chalk.underline.cyan.bold("https://markmurray.co")}

   ${label("Twitter")} ${data.twitter}
    ${label("GitHub")} ${data.github}
  ${label("LinkedIn")} ${data.linkedin}

  ${label("Card")} ${data.npx}
`;

console.log(chalk.green(boxen(output, options)));
