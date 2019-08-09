class CommandExit {

  constructor(parent) {

    this.parent = parent;

    // command
    this.parent.cmd.add(['exit'], () => {
      this.parent.mod.send('C_EXIT', 1, {});
    });

    // code
    this.parent.mod.hook('S_PREPARE_EXIT', 'raw', () => {
      this.parent.mod.send('S_EXIT', 3, {});
    });

  }

  destructor() {
    this.parent.cmd.remove(['exit']);

    this.parent = undefined;
  }

}

module.exports = CommandExit;