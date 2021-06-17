'use strict';

class CommandReset {

  constructor(parent) {

    this.command = parent.mod.command;

    // command
    parent.mod.command.add(['res', 'ㄱㄷㄴ', 'ㄹㄹ', 'ff'], () => {
      parent.mod.send('C_RESET_ALL_DUNGEON', 1, {});
    });

  }

  destructor() {
    this.command.remove(['res', 'ㄱㄷㄴ', 'ㄹㄹ', 'ff']);
  }

}

module.exports = CommandReset;