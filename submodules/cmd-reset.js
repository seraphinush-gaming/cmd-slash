'use strict';

class cmd_reset {

  constructor(parent) {

    this.parent = parent;

    this.parent.c.add(['res', 'ㄱㄷㄴ', 'ㄹㄹ', 'ff'], () => {
      this.parent.m.send('C_RESET_ALL_DUNGEON', 1, {});
      this.parent.send(`Dungeons reset.`);
    });

  }

  destructor() {
    this.parent.c.remove(['res', 'ㄱㄷㄴ', 'ㄹㄹ', 'ff']);
  }

}

module.exports = cmd_reset;