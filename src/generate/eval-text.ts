import Handlebars from "handlebars";

export function evalText(template, sd) {
  if (!template) {
    return template;
  }
  if (!sd.title) {
    sd.title = sd.name;
  }
  return Handlebars.compile(template)(sd);
}
