'use strict';

class cmd_exit {

  constructor(parent) {

    this.parent = parent;

    // command
    this.parent.c.add('exit', () => {
      this.parent.m.send('C_EXIT', 1, {});
    });

    // code
    this.parent.m.hook('S_PREPARE_EXIT', 'event', () => {
      this.parent.m.send('S_EXIT', 3, {});
    });

  }

  destructor() {
    this.parent.c.remove('exit');
  }

}

module.exports = cmd_exit;