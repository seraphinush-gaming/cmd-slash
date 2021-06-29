'use strict';

class CommandDrop {

  constructor(parent) {

    this.command = parent.mod.command;

    // command
    parent.mod.command.add(['dr', 'ㅇㄱ', 'ㅌㅌ', 'xx'], () => {
      parent.mod.send('C_LEAVE_PARTY', 1, {});
    });

  }

  destructor() {
    this.command.remove(['dr', 'ㅇㄱ', 'ㅌㅌ', 'xx']);

    this.command = undefined;
  }

}

module.exports = CommandDrop;