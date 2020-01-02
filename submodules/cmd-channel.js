'use strict';

class cmd_channel {

  constructor(parent) {

    this.parent = parent;

    this.ch_cur = 0;
    this.ch_pre = 0;

    // command
    this.parent.c.add(['ch', '채널'], {
      '$none': () => {
        this.change_ch(this.ch_cur + 1);
      },
      'b': () => {
        this.change_ch(this.ch_pre);
      },
      'list': () => {
        if (this.ch_cur < 20) {
          this.parent.m.hookOnce('S_LIST_CHANNEL', 1, (e) => {
            this.parent.send(`This zone has ${e.channels.length} channel(s) in total.`);
            return false;
          });
          this.parent.m.send('C_LIST_CHANNEL', 1, {
            unk: 0,
            zone: this.parent.zone
          });
        }
      },
      '$default': (n) => {
        n = parseInt(n);
        !isNaN(n) ? this.change_ch(n) : this.parent.send(`Invalid argument. usage : ch [&lt;num&gt;|b|ㅠ|list]`);
      }
    });

    // code
    this.parent.m.hook('S_CURRENT_CHANNEL', 2, (e) => {
      if (this.ch_cur !== e.channel) {
        this.ch_pre = this.ch_cur;
        this.ch_cur = e.channel;
      }
    });

  }

  destructor() {
    this.parent.c.remove(['ch', '채널']);
  }

  // helper
  change_ch(n) {
    if (this.ch_cur <= 20) {
      n -= 1;
      let _ = this.parent.m.trySend('C_SELECT_CHANNEL', 1, {
        unk: 1,
        zone: this.parent.zone,
        channel: n
      });
      !_ ? this.parent.send(`Unmapped protocol packet &lt;C_SELECT_CHANNEL&gt;.`) : null;
    }
  }

}

module.exports = cmd_channel;