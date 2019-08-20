'use strict';

const fs = require('fs');
const path = require('path');

class CommandSlash {

  constructor(mod) {

    this.mod = mod;
    this.game = mod.game;
    this.cmd = mod.command;
    this.submodules = {};

    this.myZone = 0;

    let list = [];
    if (fs.existsSync(path.join(__dirname, "submodules"))) {
      list = fs.readdirSync(path.join(__dirname, "submodules"));
    } else {
      fs.mkdirSync(path.join(__dirname, "submodules"));
    }
    for (let i = 0, n = list.length; i < n; i++) {
      this.initialize(list[i]);
    }

    // game state
    this.game.me.on('change_zone', (zone) => {
      this.myZone = zone;
    });

  }

  destructor() {
    for (let submodule in this.submodules) {
      this.submodules[submodule].destructor();
      delete this[submodule];
    }

    this.myZone = undefined;

    this.submodules = undefined;
    this.game = undefined;
    this.cmd = undefined;
    this.mod = undefined;
  }

  initialize(submodules) {
    if (typeof submodules === 'string') {
      submodules = [submodules];
    }

    for (let submodule of submodules) {
      if (!this.submodules[submodule]) {
        try {
          let req = require(`./submodules/${submodule}`);
          this.submodules[submodule] = new req(this);
          this[submodule] = this.submodules[submodule];

          this.mod.log(`.. Loaded submodule [${submodule}]`);
        }
        catch (e) {
          delete this[submodule];

          this.mod.warn(`Unable to load submodule [${submodule}] .. \n - ${e}\n`);
        }
      }
    }
  }

  send() { this.cmd.message(': ' + [...arguments].join('\n\t - ')); }

  // reload
  saveState() {
    let state = this.myZone;
    return state;
  }

  loadState(state) {
    this.myZone = state;
  }  

}

module.exports = CommandSlash;