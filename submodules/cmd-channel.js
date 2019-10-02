class CommandChannel {

  constructor(parent) {

    this.parent = parent;

    this.channelCurr = 0;
    this.channelPrev = 0;

    // command
    this.parent.cmd.add(['ch', '채널'], {
      '$none': () => {
        this.changeChannel(this.channelCurr + 1);
      },
      'b': () => {
        this.changeChannel(this.channelPrev);
      },
      'list': () => {
        if (this.channelCurr < 20) {
          this.parent.mod.send('C_LIST_CHANNEL', 1, {
            unk: 0,
            zone: this.parent.myZone
          });
          this.parent.mod.hookOnce('S_LIST_CHANNEL', 1, (e) => {
            this.parent.send(`This zone has ${e.channels.length} channel(s) in total.`);
            return false;
          });
        }
      },
      '$default': (num) => {
        num = parseInt(num);
        if (!isNaN(num)) {
          this.changeChannel(num);
        } else {
          this.parent.send(`Invalid argument. usage : ch [(num)|b|ㅠ|list]`);
        }
      }
    });

    // code
    this.parent.mod.hook('S_CURRENT_CHANNEL', 2, (e) => {
      if (this.channelCurr !== e.channel) {
        this.channelPrev = this.channelCurr;
        this.channelCurr = e.channel;
      }
    });

  }

  destructor() {
    this.parent.cmd.remove(['ch', '채널']);

    this.channelPrev = undefined;
    this.channelCurr = undefined;

    this.parent = undefined;
  }

  // helper
  changeChannel(num) {
    if (this.channelCurr <= 20) {
      num -= 1;
      let _ = this.parent.mod.trySend('C_SELECT_CHANNEL', 1, {
        unk: 1,
        zone: this.parent.myZone,
        channel: num
      });
      if (!_)
        this.parent.send('Unmapped protocol packet &lt;C_SELECT_CHANNEL&gt;.');
    }
  }

}

module.exports = CommandChannel;