class CommandGeneral {

  constructor(parent) {

    this.parent = parent;

    // leave party
    this.parent.cmd.add(['dr', 'ㅇㄱ', 'ㅌㅌ', 'xx'], () => {
      this.parent.mod.send('C_LEAVE_PARTY', 1, {});
      this.send(`Dropped party.`);
    });

    // reset instance
    this.parent.cmd.add(['res', 'ㄱㄷㄴ', 'ㄹㄹ', 'ff'], () => {
      this.parent.mod.send('C_RESET_ALL_DUNGEON', 1, {});
      this.send(`Dungeons reset.`);
    });

    // call talent ui
    this.parent.cmd.add(['talent', '특성'], () => {
      this.parent.mod.send('S_REQUEST_CONTRACT', 1, { type: 77 });
    });

  }

  destructor() {
    this.parent.cmd.remove(['dr', 'ㅇㄱ', 'ㅌㅌ', 'xx']);
    this.parent.cmd.remove(['res', 'ㄱㄷㄴ', 'ㄹㄹ', 'ff']);
    this.parent.cmd.remove(['talent', '특성']);

    this.parent = undefined;
  }

  send(msg) { this.parent.cmd.message(': ' + msg); }

}

module.exports = CommandGeneral;