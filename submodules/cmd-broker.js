class CommandBroker {

    constructor(parent) {

        this.parent = parent;

        this.installCommands();

    }

    destructor() {
        this.parent = undefined;
    }

    installCommands() {
        this.parent.cmd.add(['broker', '거래'], function () {
            this.parent.mod.send('S_NPC_MENU_SELECT', 1, { type: 28 });
        });
    }

}

module.exports = CommandBroker;