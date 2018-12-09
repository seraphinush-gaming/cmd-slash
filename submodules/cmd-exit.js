class CommandExit {

    constructor(parent) {

        this.parent = parent;

        this.parent.cmd.add(['exit'], () => {
            this.parent.mod.send('C_EXIT', 1, {});
        });

        this.installHook();

    }

    destructor() {
        this.parent = undefined;
    }

    installHook() {
        this.parent.mod.hook('S_PREPARE_EXIT', 'raw', () => {
            this.parent.mod.send('S_EXIT', 3, {});
        }); 
    }

}

module.exports = CommandExit;