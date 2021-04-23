```
Support seraph via donations, thanks in advance !
```

# cmd-slash [![](https://img.shields.io/badge/paypal-donate-333333.svg?colorA=0070BA&colorB=333333)](https://www.paypal.me/seraphinush) [![](https://img.shields.io/badge/patreon-pledge-333333.svg?colorA=F96854&colorB=333333)](https://www.patreon.com/seraphinush)
tera-toolbox module compilation to use slash commands for common functions

## Auto-update guide
- Create a folder called `cmd-slash` in `tera-toolbox/mods` and download >> [`module.json`](https://raw.githubusercontent.com/seraphinush-gaming/cmd-slash/master/module.json) << (right-click this link and save link as..) into the folder

## Usage
- `ace` · `ㅁㅊㄷ` · `시던`
  - No argument : rotates through Baracos' Trial > Akasha's Trial > Lilith's Trial > ..
    - Rotation does not include Lumikan's Trial
  - `a` · `akasha` : enter Akasha's Trial
  - `b` · `baracos` : enter Baracos' Trial
  - `c` · `catalepticon` : enter Lumikan's Trial
  - `g` · `gardan` : enter Gardan's Trial
  - `l` · `lilith` : enter Lilith's Trial
  - Time attack and hits taken count trial by default
- `broker` · `거중`
  - Call broker UI
- `dr` · `ㅇㄱ` · `ㅌㅌ` · `xx`
  - Drop party/raid
- `exit` · `종료`
  - Quit TERA
- `lobby` · `로비`
  - Return to lobby
- `res` · `ㄱㄷㄴ` · `ㄹㄹ` · `ff`
  - Reset dungeon

## Info
- Code schematic based on [`tera-game-state`](https://github.com/caali-hackerman/tera-game-state)
- Compiled modules :
  - `cmd-ace`
  - `cmd-broker` (mod. by [wuaw](https://github.com/wuaw), branch [seraphinush-gaming](https://github.com/ylennia-archives/cmd-broker))
  - `cmd-exit` (mod. by [teralove](https://github.com/teralove))
  - `exit-instantly` (mod. by [teralove](https://github.com/teralove))
  - `cmd-general` (mod. by [seraphinush-gaming](https://github.com/ylennia-archives/cmd-slash-kr))
  - `cmd-lobby` (mod. by [teralove](https://github.com/teralove))
- cmd-slash-kr : Dungeon reset is `/던전리셋`, on Korean keyboard which is `/ejswjsfltpt`

## Changelog
<details>

    2.0a
    - Added Lumikan's Trial support for `ace` option
    2.09
    - Removed `cmd-channel`
    2.08
    - Added Lilith's Trial support for `ace` option
    2.07
    - Reinstated `tera-game-state`
    - Added hot-reload support
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