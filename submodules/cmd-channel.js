class CommandChannel {

    constructor(parent) {

        this.parent = parent;
        this.channelCurr = 0;
        this.channelPrev = 0;
        this.myZone = 0;

        this.parent.mod.game.me.on('change_zone', (zone) => { this.myZone = zone; });

        this.parent.cmd.add(['ch', '초'], (p) =>  {
            if (!p) this.changeChannel(this.channelCurr + 1);
            else if (!isNaN(p)) { this.changeChannel(p); }
            else if (p === 'b' || p === 'ㅠ') this.changeChannel(this.channelPrev);
            else this.send(`Invalid argument. usage : ch (num)`);
        });

        this.installHooks();

    }

    destructor() {
        this.myZone - undefined;
        this.channelPrev = undefined;
        this.channelCurr = undefined;
        this.parent = undefined;
    }

    installHook(name, version, cb) {
        this.parent.mod.hook(name, version, cb);
    }

    installHooks() {
        this.installHook('S_CURRENT_CHANNEL', 2, function (e) {
            if (this.channelCurr !== e.channel) {
                this.channelPrev = this.channelCurr;
                this.channelCurr = e.channel;
            }
        });
    }

    changeChannel(num) {
        if (this.channelCurr > 20) return;
        switch (num) {
            case 0:
                num = 10;
                break;
            case (this.channelCurr):
                this.send(`Same channel selected.`);
                break;
        }
        num -= 1;
        this.parent.mod.send('C_SELECT_CHANNEL', 1, {
            unk: 1,
            zone: this.myZone,
            channel: num
        });
    }

    send(msg) { this.parent.cmd.message(`: ` + msg); }

}

module.exports = CommandChannel;