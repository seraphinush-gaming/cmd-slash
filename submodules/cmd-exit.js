'use strict';

class cmd_exit {

  constructor(parent) {

    this.command = parent.mod.command;

    // command
    parent.mod.command.add('exit', () => {
      parent.mod.send('C_EXIT', 1, {});
    });

    // code
    parent.mod.hook('S_PREPARE_EXIT', 'event', () => {
      parent.mod.send('S_EXIT', 3, {});
    });

  }

  destructor() {
    this.command.remove('exit');
  }

}

module.exports = cmd_exit;