class CommandAce {

    constructor(parent) {

        this.parent = parent;

        this.parent.cmd.add(['ace'], (n1, n2, n3) => {
            n1 = parseInt(n1);
            n2 = parseInt(n2);
            n3 = parseInt(n3);

            if (isNaN(n2)) {
                n2 = 1;
            }

            if (isNaN(n3)) {
                n3 = 2;
            }

            if (n2 > 2 || n3 > 3) {
                return;
            }

            if (n2 === n3) {
                return;
            }

            switch (n1) {
                case 1:
                    this.goToAceDungeon(9032, n2, n3);
                    break;
                case 2:
                    this.goToAceDungeon(9031, n2, n3);
                    break;
                case 3:
                    if (this.parent.mod.majorPatchVersion >= 80) {
                        this.goToAceDungeon(3016, n2, n3);
                    }
                    break;
                default:
                    this.send(`Invalid argument. usage : ace [1|2]`);
            }
        });

    }

    destructor() {
        this.parent.cmd.remove(['ace']);
        this.parent = undefined;
    }

    goToAceDungeon(zone, n1, n2) {
        let _ = this.parent.mod.trySend('C_DUNGEON_WORK_ENTER', 1, {
            count: 2,
            unk1: 13,
            zone: zone,
            random: 0,
            unk2: 13,
            unk3: 21,
            challenge1: n1,
            unk4: 21,
            challenge2: n2
        });
        if (!_)
            this.send('Unmapped protocol packet &lt;C_DUNGEON_WORK_ENTER&gt;.');
    }

    send(msg) {
        this.parent.cmd.message(': ' + msg);
    }

}

module.exports = CommandAce;