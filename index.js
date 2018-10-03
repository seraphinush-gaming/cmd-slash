// Version 1.00 r:00
'use strict';

module.exports = function CmdSlash(m) {
	const cmd = m.command || m.require.command;

	// cmd-channel
	let myZone = 0,
		channelCurr = 0,
		channelPrev = 0;

	// command
	cmd.add(['lobby', '캐선'], () => { m.send('C_RETURN_TO_LOBBY', 1, {}); }); // lobby
	cmd.add(['dr', 'ㅇㄱ', 'ㅌㅌ', 'xx'], () => { // leave party
			m.send('C_LEAVE_PARTY', 1, {});
			send(`Dropped party.`);
	});
	cmd.add(['res', 'ㄱㄷㄴ', 'ㄹㄹ', 'ff'], () => { // reset instance
			m.send('C_RESET_ALL_DUNGEON', 1, {});
			send(`Dungeons reset.`);
	});
	cmd.add(['broker', '거래'], () => { m.send('S_NPC_MENU_SELECT', 1, { type: 28 }); }); // call broker ui
	cmd.add(['talent', '특성'], () => { m.send('S_NPC_MENU_SELECT', 1, { type: 77 }); }); // call talent ui
	cmd.add(['ch', '초'], (p) => { // change channel
		if (!p) changeChannel(channelCurr + 1);
		else if (!isNaN(p)) { changeChannel(p); }
		else if (['b','ㅠ'].includes(p)) changeChannel(channelPrev);
		else send(`Invalid argument. usage : ch (num)`);
	});

	// mod.game
	m.game.me.on('change_zone', (zone, quick) => { myZone = zone; });

	// cmd-channel
	// code
	m.hook('S_CURRENT_CHANNEL', 2, (e) => {
		if (channelCurr === e.channel) return
		channelPrev = channelCurr;
		channelCurr = e.channel;
	});

	// helper
	function changeChannel(num) {
		if (channelCurr > 20) return
		if (num == 0) num = 10;
		if (num == channelCurr) {
			send(`Same channel selected.`);
			return
		}
		num -= 1;
		m.send('C_SELECT_CHANNEL', 1, {
			unk: 1,
			zone: myZone,
			channel: num
		});
	}

	function send(msg) { cmd.message(`: ` + msg); }

}