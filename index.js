'use strict';

const fs = require('fs');
const path = require('path');

class command_slash {

  constructor(mod) {

    this.m = mod;
    this.c = mod.command;
    this.g = mod.game;
    this.submodules = {};

    // initialize
    this.zone = 0;

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
    this.g.me.on('change_zone', (zone) => {
      this.zone = zone;
    });

  }

  destructor() {
    for (let submodule in this.submodules) {
      this.submodules[submodule].destructor();
      delete this[submodule];

      this.m.log(`.. Unloaded submodule [${submodule}]`);
    }
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

          this.m.log(`.. Loaded submodule [${submodule}]`);
        }
        catch (e) {
          delete this[submodule];
          this.m.warn(`Unable to load submodule [${submodule}] .. \n - ${e}\n`);
        }
      }
    }
  }

  send() { this.c.message(': ' + [...arguments].join('\n - ')); }

  // reload
  saveState() {
    return this.zone;
  }

  loadState(state) {
    this.zone = state;
  }  

}

module.exports = command_slash;