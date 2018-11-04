// Version 2.00 r:00
'use strict';

class CommandSlash {

	constructor(mod) {

		this.mod = mod;
		this.cmd = m.command || m.require.command;
		this.submodules = {};

		this.initialize("cmd-broker");
		this.initialize("cmd-channel");
		this.initialize("cmd-general");
		this.initialize("cmd-lobby");

	}

	destructor() {
        this.mod = undefined;

        for(let submodule in this.submodules) {
            this.submodules[submodule].destructor();
            delete this[submodule];
        }

        this.submodules = undefined;
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
                }
                catch (e) {
                    console.log(`[cmd-slash] Unable to load submodule ${submodule}: ${e}`);
                }
            }
        }
    }

}

module.exports = function CommandSlashLoader(mod) {

	mod.game('change_zone', (zone) => { this.myZone = zone; });

	return new CommandSlash(mod);
}