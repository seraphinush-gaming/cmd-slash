'use strict';

const AKASHA = 9031;
const BARACOS = 9032;
const LILITH = 3016;
const CATALEPTICON = 3040;

class cmd_ace {

  constructor(parent) {

    this.parent = parent;
    this.command = parent.mod.command;

    // command
    parent.mod.command.add(['ace', 'ㅁㅊㄷ', '시험'], {
      '$none': () => {
        if (parent.mod.game.me.zone == AKASHA) this.enter_ace_dungeon(LILITH, 1, 2)
        else if (parent.mod.game.me.zone == BARACOS) this.enter_ace_dungeon(AKASHA, 1, 2);
        else if (parent.mod.game.me.zone == LILITH) this.enter_ace_dungeon(BARACOS, 1, 2);
        else this.enter_ace_dungeon(BARACOS, 1, 2);
      },
      '$default': (arg) => {
        if (arg == 'a' || arg == 'akasha') this.enter_ace_dungeon(AKASHA, 1, 2);
        else if (arg == 'b' || arg == 'baracos') this.enter_ace_dungeon(BARACOS, 1, 2);
        else if (arg == 'l' || arg == 'lilith') this.enter_ace_dungeon(LILITH, 1, 2);
        else if (arg == 'c' || arg == 'catalepticon') this.enter_ace_dungeon(CATALEPTICON, 1, 2);
      }
    });

    // code
    parent.mod.hook('S_SYSTEM_MESSAGE', 1, { order: 10 }, (e) => {
      if (![AKASHA, BARACOS, LILITH].includes(parent.mod.game.me.zone))
        return;

      let msg = parent.mod.parseSystemMessage(e.message).id;
      if (msg === 'SMT_CANT_ENTER_DUNGEON_COUNT_LIMIT')
        parent.mod.send('C_RESET_ALL_DUNGEON', 1, {});
    });

  }

  destructor() {
    this.command.remove(['ace', 'ㅁㅊㄷ', '시험']);
  }

  // helper
  enter_ace_dungeon(zone, challenge_one = 1, challenge_2 = 2) {
    let res = this.parent.mod.trySend('C_DUNGEON_WORK_ENTER', 1, {
      count: 2,
      unk1: 13,
      zone: zone,
      random: 0,
      unk2: 13,
      unk3: 21,
      challenge1: challenge_one,
      unk4: 21,
      challenge2: challenge_2
    });
    !res ? this.parent.send(`Unmapped protocol packet &lt;C_DUNGEON_WORK_ENTER&gt;.`) : null;
  }

}

module.exports = cmd_ace;