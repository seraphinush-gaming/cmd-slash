<p align="center">
<a href="#">
<img src="https://github.com/seraphinush-gaming/pastebin/blob/master/logo_ttb_trans.png?raw=true" width="200" height="200" alt="tera-toolbox, logo by Foglio" />
</a>
</p>

# cmd-slash [![paypal](https://img.shields.io/badge/paypal-donate-333333.svg?colorA=253B80&colorB=333333)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=B7QQJZV9L5P2J&source=url) [![paypal.me](https://img.shields.io/badge/paypal.me-donate-333333.svg?colorA=169BD7&colorB=333333)](https://www.paypal.me/seraphinush)
tera-toolbox compilation module to use slash commands for common functions
```
Support seraph via paypal donations, thanks in advance !
```

## Auto-update guide
- Create a folder called `cmd-slash` in `tera-toolbox/mods` and download >> [`module.json`](https://raw.githubusercontent.com/seraphinush-gaming/cmd-slash/master/module.json) << (right-click this link and save link as..) into the folder

## Usage
- __`ace`__
  - Enter Ace dungeon, alternating between Baracos' Trial and Akasha's Trial
  - Time attack and hits taken count trial by default
- __`broker` · `거래`__
  - Call broker UI
- __`ch` · `초`__
  - Change channel
    - No argument : next channel
    - Number as argument : change channel to number (eg. `ch (num)`)
    - `b` : previous channel (!= one channel back)
    - `list` : list the number of channel in zone
- __`dr` · `ㅇㄱ` · `ㅌㅌ` · `xx`__
  - Drop party/raid
- __`exit`__
  - Quit TERA
- __`lobby` · `캐선`__
  - Return to lobby
- __`res` · `ㄱㄷㄴ` · `ㄹㄹ` · `ff`__
  - Reset dungeon

## Info
- Code schematic based on [`tera-game-state`](https://github.com/caali-hackerman/tera-game-state)
- Compiled modules :
  - `cmd-ace`
  - `cmd-broker` (mod. by [wuaw](https://github.com/wuaw), branch [seraphinush-gaming](https://github.com/ylennia-archives/cmd-broker))
  - `cmd-channel` (mod. by [teralove](https://github.com/teralove), branch [seraphinush-gaming](https://github.com/ylennia-archives/cmd-channel))
  - `cmd-exit` (mod. by [teralove](https://github.com/teralove))
  - `exit-instantly (mod. by [teralove](https://github.com/teralove))
  - `cmd-general` (mod. by [seraphinush-gaming](https://github.com/ylennia-archives/cmd-slash-kr))
  - `cmd-lobby` (mod. by [teralove](https://github.com/teralove))
- cmd-slash-kr : Dungeon reset is `/던전리셋`, which is `/ejswjsfltpt` on Korean keyboard
  - `res` in proxy chat or `/ejswjsfltpt` :thinking:
- cmd-channel : "Changing channels while inside a dungeon will teleport you out"
- cmd-channel : "Changing to a channel number that doesn't exist will send you to channel 1"

## Changelog
<details>

    2.06
    - Removed `talent` option
    2.05
    - Added `cmd-ace`
    2.04
    - Removed `tera-game-state` usage
    2.03
    - Added `ch list` to `cmd-channel`
    2.02
    - Updated for caali-proxy-nextgen
    2.01
    - Added automatic submodule scan
    - Added `cmd-exit` and `exit-instantly`
    2.00
    - Refactored into submodules
    1.00
    - Initial commit
    - Added `talent` option

</details>