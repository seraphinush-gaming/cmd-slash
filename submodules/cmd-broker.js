class CommandBroker {

    constructor(parent) {

        this.parent = parent;

        this.parent.cmd.add(['broker', '거래'], () => {
            this.parent.mod.send('S_NPC_MENU_SELECT', 1, { type: 28 });
        });

    }

    destructor() {
        this.parent = undefined;
    }

}

module.exports = CommandBroker;