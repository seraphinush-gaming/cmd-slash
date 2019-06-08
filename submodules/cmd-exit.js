class CommandExit {

  constructor(parent) {

    this.parent = parent;

    this.parent.cmd.add(['exit'], () => {
      this.parent.mod.send('C_EXIT', 1, {});
    });

    this.load();

  }

  destructor() {
    this.parent.cmd.remove(['exit']);

    this.parent = undefined;
  }

  load() {
    this.parent.mod.hook('S_PREPARE_EXIT', 'raw', () => {
      this.parent.mod.send('S_EXIT', 3, {});
    });
  }

}

module.exports = CommandExit;