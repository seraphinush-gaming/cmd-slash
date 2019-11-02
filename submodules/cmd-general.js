class command_general {

  constructor(parent) {

    this.parent = parent;

    // leave party
    this.parent.c.add(['dr', 'ㅇㄱ', 'ㅌㅌ', 'xx'], () => {
      this.parent.m.send('C_LEAVE_PARTY', 1, {});
      this.parent.send(`Dropped party.`);
    });

    // reset instance
    this.parent.c.add(['res', 'ㄱㄷㄴ', 'ㄹㄹ', 'ff'], () => {
      this.parent.m.send('C_RESET_ALL_DUNGEON', 1, {});
      this.parent.send(`Dungeons reset.`);
    });

  }

  destructor() {
    this.parent.c.remove(['dr', 'ㅇㄱ', 'ㅌㅌ', 'xx']);
    this.parent.c.remove(['res', 'ㄱㄷㄴ', 'ㄹㄹ', 'ff']);
  }

}

module.exports = command_general;