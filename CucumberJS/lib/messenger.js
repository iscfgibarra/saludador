const idiomas = require("./idiomas");

class Messenger {
  constructor(lang) {
    this.lang = idiomas[lang];
  }

  getMessage(fechaHora) {
    if (fechaHora === undefined) {
      return "Hello World!";
    }

    try {
      let hora = fechaHora.getHours();

      if (hora >= 0 && hora < 12) {
        return this.lang["MSG1"];
      } else if (hora >= 12 && hora < 18) {
        return this.lang["MSG2"];
      } else {
        return this.lang["MSG3"];
      }
    } catch (error) {
      throw "Fecha Invalida";
    }
  }
}

module.exports = Messenger;
