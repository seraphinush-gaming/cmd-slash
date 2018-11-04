class CommandLobby {

    constructor(parent) {

        this.parent = parent;

        this.installCommands();

    }

    destructor() {
        this.parent = undefined;
    }

    installCommands() {
        this.parent.cmd.add(['lobby', '캐선'], function () {
            this.parent.mod.send('C_RETURN_TO_LOBBY', 1, {});
        });
    }

}

module.exports = CommandLobby;