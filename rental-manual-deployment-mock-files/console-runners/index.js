"use strict";

var _inquirer = require("inquirer");

(async () => {
  let exit = false;

  while (!exit) {
    const answer = await (0, _inquirer.prompt)({
      name: 'consoleRunner',
      type: 'list',
      message: 'Which console-runner do you want to run?',
      choices: ['seed-data', 'exit']
    });

    if (answer.consoleRunner !== 'exit') {
      const {
        run
      } = require(`./${answer.consoleRunner}.runner`);

      await run();
    } else {
      exit = true;
    }
  }
})();