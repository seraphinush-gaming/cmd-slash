'use strict';

const AKASHA = 9031;
const BARACOS = 9032;
const LILITH = 3016;
const CATALEPTICON = 3040;
const GARDAN = 3042;
const HARNOVOG = 3043;
const ROGASH = 3046;

class CommandAce {

  constructor(parent) {

    this.parent = parent;
    this.command = parent.mod.command;

    // command
    parent.mod.command.add(['ace', 'ㅁㅊㄷ', '시던'], {
      '$none': () => {
        if (parent.mod.game.me.zone == AKASHA) this.enterAceDungeon(BARACOS, 1, 2);
        else if (parent.mod.game.me.zone == BARACOS) this.enterAceDungeon(AKASHA, 1, 2);
        //else if (parent.mod.game.me.zone == LILITH) this.enterAceDungeon(BARACOS, 1, 2);
        else this.enterAceDungeon(BARACOS, 1, 2);
      },
      '$default': (arg) => {
        arg = arg.toLowerCase();
        if (arg == 'a' || arg == 'akasha') this.enterAceDungeon(AKASHA, 1, 2);
        else if (arg == 'b' || arg == 'baracos') this.enterAceDungeon(BARACOS, 1, 2);
        else if (arg == 'l' || arg == 'lilith') this.enterAceDungeon(LILITH, 1, 2);
        else if (arg == 'c' || arg == 'catalepticon') this.enterAceDungeon(CATALEPTICON, 1, 2);
        else if (arg == 'g' || arg == 'gardan') this.enterAceDungeon(GARDAN, 1, 2);
        else if (arg == 'h' || arg == 'harnovog') this.enterAceDungeon(HARNOVOG, 1, 2);
        else if (arg == 'r' || arg == 'rogash') this.enterAceDungeon(ROGASH, 1, 2);
      }
    });

    // code
    parent.mod.hook('S_SYSTEM_MESSAGE', 1, { order: 10 }, (e) => {
      if (![AKASHA, BARACOS, LILITH, CATALEPTICON, GARDAN, HARNOVOG, ROGASH].includes(parent.mod.game.me.zone))
        return;

      let msg = parent.mod.parseSystemMessage(e.message).id;
      if (msg === 'SMT_CANT_ENTER_DUNGEON_COUNT_LIMIT')
        parent.mod.send('C_RESET_ALL_DUNGEON', 1, {});
    });

  }

  destructor() {
    this.command.remove(['ace', 'ㅁㅊㄷ', '시던']);

    this.command = undefined;
    this.mod = undefined;
  }

  // helper
  enterAceDungeon(zone, a = 1, b = 2) {
    let res = this.parent.mod.trySend('C_DUNGEON_WORK_ENTER', 1, {
      count: 2,
      unk1: 13,
      zone: zone,
      random: 0,
      unk2: 13,
      unk3: 21,
      challenge1: a,
      unk4: 21,
      challenge2: b
    });
    if (!res) this.parent.send(`Unmapped protocol packet &lt;C_DUNGEON_WORK_ENTER&gt;.`);
  }

}

module.exports = CommandAce;