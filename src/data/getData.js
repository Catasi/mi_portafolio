import { DataEspanol } from "./dataFormacion/espanol.js";
import { DataIngles } from "./dataFormacion/english.js";
import { DataFrances } from "./dataFormacion/francais.js";

import { ProyectsEspanol } from "./dataProyectos/espanol.js";
import { ProyectsIngles } from "./dataProyectos/english.js";
import { ProyectsFrench } from "./dataProyectos/francais.js";

export function getDatosFormacion(currentLanguage) {
  switch (currentLanguage) {
    case "en":
      return DataIngles;
    case "fr":
      return DataFrances;
    default:
      return DataEspanol;
  }
}

export function getProyectos(currentLanguage) {
  switch (currentLanguage) {
    case "en":
      return ProyectsIngles;
    case "fr":
      return ProyectsFrench;
    default:
      return ProyectsEspanol;
  }
}
