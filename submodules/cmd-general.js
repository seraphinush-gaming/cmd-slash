class CommandGeneral {

    constructor(parent) {

        this.parent = parent;

        this.installCommands();

    }

    destructor() {
        this.parent = undefined;
    }

    installCommands() {
        // leave party
        this.parent.cmd.add(['dr', 'ㅇㄱ', 'ㅌㅌ', 'xx'], function () {
            this.parent.mod.send('C_LEAVE_PARTY', 1, {});
            send(`Dropped party.`);
        });

        // reset instance
        this.parent.cmd.add(['res', 'ㄱㄷㄴ', 'ㄹㄹ', 'ff'], function () {
            this.parent.mod.send('C_RESET_ALL_DUNGEON', 1, {});
            send(`Dungeons reset.`);
        });

        // call talent ui
        this.parent.cmd.add(['talent', '특성'], function () {
            this.parent.mod.send('S_REQUEST_CONTRACT', 1, { type: 77 });
        });
    }

    send(msg) { this.parent.cmd.message(`: ` + msg); }

}

module.exports = CommandGeneral;