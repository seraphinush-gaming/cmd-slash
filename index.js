'use strict';

const fs = require('fs');
const path = require('path');

class command_slash {

  constructor(mod) {

    this.mod = mod;
    this.submodules = {};

    if (fs.existsSync(path.join(__dirname, "submodules"))) {
      let list = fs.readdirSync(path.join(__dirname, "submodules"));

      for (let i = 0, n = list.length; i < n; i++) {
        this.init(list[i]);
      }
    } else {
      mod.warn(`Unable to find any submodules.`);
    }

  }

  destructor() {
    for (let submodule in this.submodules) {
      this.submodules[submodule].destructor();
      delete this[submodule];

      this.mod.log(`.. Unloaded submodule [${submodule}]`);
    }
  }

  init(submodules) {
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

  send(msg) { this.mod.command.message(': ' + msg); }

  // reload
  saveState() { }

  loadState() { }

}

module.exports = command_slash;