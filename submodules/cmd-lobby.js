class CommandLobby {

    constructor(parent) {

        this.parent = parent;

        this.parent.cmd.add(['lobby', '캐선'], () => {
            this.parent.mod.send('C_RETURN_TO_LOBBY', 1, {});
        });

    }

    destructor() {
        this.parent = undefined;
    }

}

module.exports = CommandLobby;