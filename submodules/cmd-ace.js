class CommandAce {

  constructor(parent) {

    this.parent = parent;

    // command
    this.parent.cmd.add(['ace', 'ㅁㅊㄷ', '시험'], () => {
      switch (this.parent.myZone) {
        case 9031:
          this.goToAceDungeon(9032);
          break;
        case 9032:
          this.goToAceDungeon(9031);
          break;
        default:
          this.goToAceDungeon(9032);
      }
    });

    // code
    this.parent.mod.hook('S_SYSTEM_MESSAGE', 1, (e) => {
      if (this.parent.myZone !== 9031 && this.parent.myZone !== 9032) {
        return;
      }

      let msg = this.parent.mod.parseSystemMessage(e.message).id;
      if (msg === 'SMT_CANT_ENTER_DUNGEON_COUNT_LIMIT') {
        this.parent.mod.send('C_RESET_ALL_DUNGEON', 1, {});
      }
    });

  }

  destructor() {
    this.parent.cmd.remove(['ace', 'ㅁㅊㄷ', '시험']);

    this.parent = undefined;
  }

  // helper
  goToAceDungeon(zone) {
    let _ = this.parent.mod.trySend('C_DUNGEON_WORK_ENTER', 1, {
      count: 2,
      unk1: 13,
      zone: zone,
      random: 0,
      unk2: 13,
      unk3: 21,
      challenge1: 1,
      unk4: 21,
      challenge2: 2
    });
    if (!_)
      this.parent.send('Unmapped protocol packet &lt;C_DUNGEON_WORK_ENTER&gt;.');
  }

}

module.exports = CommandAce;