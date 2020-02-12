const idiomas = require("./idiomas");

class Messenger {
  constructor(lang) {
    this.lang = idiomas[lang];
  }

  getMessage(horas, minutos) {
    try {
      if (horas > 24) {
        throw "Hora Invalida";
      }

      if (minutos > 59) {
        throw "Hora Invalida";
      }

      if (horas >= 0 && horas < 12) {
        return this.lang["MSG1"];
      } else if (horas >= 12 && horas < 18) {
        return this.lang["MSG2"];
      } else {
        return this.lang["MSG3"];
      }
    } catch (error) {
      console.log(error);
      throw "Fecha Invalida";
    }
  }
}

module.exports = Messenger;
