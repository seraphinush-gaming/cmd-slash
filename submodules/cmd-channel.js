class CommandChannel {

    constructor(parent) {

        this.parent = parent;
        this.channelCurr = 0;
        this.channelPrev = 0;
        this.myZone = 0;

        this.installCommands();
        this.installHooks();

    }

    destructor() {
        this.myZone - undefined;
        this.channelPrev = undefined;
        this.channelCurr = undefined;
        this.parent = undefined;
    }

    installCommands() {
        this.parent.cmd.add(['ch', '초'], function (p) {
            if (!p) this.changeChannel(channelCurr + 1);
            else if (!isNaN(p)) { this.changeChannel(p); }
            else if (p === 'b' || p === 'ㅠ') this.changeChannel(channelPrev);
            else send(`Invalid argument. usage : ch (num)`);
        });
    }

    installHook(name, version, cb) {
        this.parent.mod.hook(name, version, cb);
    }

    installHooks() {

        installHook('S_CURRENT_CHANNEL', 2, function (e) {
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
            case (this.channelCurr):
                this.send(`Same channel selected.`);
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