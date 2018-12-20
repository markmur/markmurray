#!/usr/bin/env node

const chalk = require('chalk')
const boxen = require('boxen')
const ignoreChars = /[^!-~]/g;

function rainbow(str, offset) {
	if (!str || str.length === 0) {
		return str;
	}

	const hueStep = 360 / str.replace(ignoreChars, '').length;

	let hue = offset % 360;
	const chars = [];
	for (const c of str) {
		if (c.match(ignoreChars)) {
			chars.push(c);
		} else {
			chars.push(chalk.hsl(hue, 100, 50)(c));
			hue = (hue + hueStep) % 360;
		}
	}

	return chars.join('');
}

const options = {
  padding: 1,
  margin: 2,
  borderStyle: 'round'
}

const label = text => chalk.gray.bold(`${text}:`)
const link = text => chalk.magenta.bold(text)

const data = {
  name: chalk.white.bold('Mark Murray'),
  handle: '@markmur',
  work: chalk.white.italic('Senior Software Engineer @ Zalando, Dublin'),
  portfolio: chalk.cyan.bold('https://markmurray.co'),
  twitter: link('https://twitter.com/markmur'),
  github: link('https://github.com/markmur'),
  linkedin: link('https://linkedin.com/in/markmur/'),
  npx: chalk.green.bold('npx markmurray'),
}

const output = `
  ${data.name} / ${rainbow(data.handle, 0)}

  ${data.work}

  ${chalk.underline.cyan.bold('https://markmurray.co')}

   ${label('Twitter')} ${data.twitter}
    ${label('GitHub')} ${data.github}
  ${label('LinkedIn')} ${data.linkedin}

  ${label('Card')} ${data.npx}
`

console.log(chalk.green(boxen(output, options)))
