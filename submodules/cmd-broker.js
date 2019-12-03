'use strict';

class cmd_broker {

  constructor(parent) {

    this.parent = parent;

    this.parent.c.add(['broker', '거래'], () => {
      this.parent.m.send('S_NPC_MENU_SELECT', 1, { type: 28 });
    });

  }

  destructor() {
    this.parent.c.remove(['broker', '거래']);
  }

}

module.exports = cmd_broker;