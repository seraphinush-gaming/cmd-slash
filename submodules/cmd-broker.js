'use strict';

class CommandBroker {

  constructor(parent) {

    this.command = parent.mod.command;

    // command
    parent.mod.command.add(['broker', '거중'], () => {
      parent.mod.send('S_NPC_MENU_SELECT', 1, { type: 28 });
    });

  }

  destructor() {
    this.command.remove(['broker', '거중']);

    this.command = undefined;
  }

}

module.exports = CommandBroker;