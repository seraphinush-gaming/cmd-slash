'use strict';

class cmd_drop {

  constructor(parent) {

    this.parent = parent;

    this.parent.c.add(['dr', 'ㅇㄱ', 'ㅌㅌ', 'xx'], () => {
      this.parent.m.send('C_LEAVE_PARTY', 1, {});
      this.parent.send(`Dropped party.`);
    });
  }

  destructor() {
    this.parent.c.remove(['dr', 'ㅇㄱ', 'ㅌㅌ', 'xx']);
  }

}

module.exports = cmd_drop;