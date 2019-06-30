class CommandGeneral {

  constructor(parent) {

    this.parent = parent;

    // leave party
    this.parent.cmd.add(['dr', 'ㅇㄱ', 'ㅌㅌ', 'xx'], () => {
      this.parent.mod.send('C_LEAVE_PARTY', 1, {});
      this.parent.send(`Dropped party.`);
    });

    // reset instance
    this.parent.cmd.add(['res', 'ㄱㄷㄴ', 'ㄹㄹ', 'ff'], () => {
      this.parent.mod.send('C_RESET_ALL_DUNGEON', 1, {});
      this.parent.send(`Dungeons reset.`);
    });

  }

  destructor() {
    this.parent.cmd.remove(['dr', 'ㅇㄱ', 'ㅌㅌ', 'xx']);
    this.parent.cmd.remove(['res', 'ㄱㄷㄴ', 'ㄹㄹ', 'ff']);

    this.parent = undefined;
  }

}

module.exports = CommandGeneral;