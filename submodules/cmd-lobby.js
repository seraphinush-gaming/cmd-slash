class command_lobby {

  constructor(parent) {

    this.parent = parent;

    this.parent.c.add(['lobby', '로비'], () => {
      this.parent.m.send('C_RETURN_TO_LOBBY', 1, {});
    });

  }

  destructor() {
    this.parent.c.remove(['lobby', '로비']);
  }

}

module.exports = command_lobby;