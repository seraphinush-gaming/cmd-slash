class CommandLobby {

  constructor(parent) {

    this.parent = parent;

    this.parent.cmd.add(['lobby', '로비'], () => {
      this.parent.mod.send('C_RETURN_TO_LOBBY', 1, {});
    });

  }

  destructor() {
    this.parent.cmd.remove(['lobby', '로비']);
    
    this.parent = undefined;
  }

}

module.exports = CommandLobby;