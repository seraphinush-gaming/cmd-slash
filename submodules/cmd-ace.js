'use strict';

const AKASHA = 9031;
const BARACOS = 9032;

class cmd_ace {

  constructor(parent) {

    this.parent = parent;

    // command
    this.parent.c.add(['ace', 'ㅁㅊㄷ', '시험'], {
      '$none': () => {
        if (this.parent.zone == AKASHA) this.enter_ace_dungeon(BARACOS);
        else if (this.parent.zone == BARACOS) this.enter_ace_dungeon(AKASHA);
        else this.enter_ace_dungeon(BARACOS);
      },
      '$default': (arg) => {
        if (arg == 'a' || arg == 'akasha') this.enter_ace_dungeon(AKASHA);
        else if (arg == 'b' || arg == 'baracos') this.enter_ace_dungeon(BARACOS);
      }
    });

    // code
    this.parent.m.hook('S_SYSTEM_MESSAGE', 1, { order: 10 }, (e) => {
      if (this.parent.zone !== AKASHA && this.parent.zone !== BARACOS)
        return;

      let msg = this.parent.m.parseSystemMessage(e.message).id;
      if (msg === 'SMT_CANT_ENTER_DUNGEON_COUNT_LIMIT')
        this.parent.m.send('C_RESET_ALL_DUNGEON', 1, {});
    });

  }

  destructor() {
    this.parent.c.remove(['ace', 'ㅁㅊㄷ', '시험']);
  }

  // helper
  enter_ace_dungeon(zone) {
    let _ = this.parent.m.trySend('C_DUNGEON_WORK_ENTER', 1, {
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
    !_ ? this.parent.send('Unmapped protocol packet &lt;C_DUNGEON_WORK_ENTER&gt;.') : null;
  }

}

module.exports = cmd_ace;