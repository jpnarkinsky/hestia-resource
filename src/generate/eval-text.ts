import Handlebars from "handlebars";

export function evalText(template, sd) {
  if (!sd.title) {
    sd.title = sd.name;
  }
  return Handlebars.compile(template)(sd);
}
