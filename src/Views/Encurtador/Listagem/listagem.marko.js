// Compiled using marko@4.13.4-1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/encurtador-de-url$1.0.0/src/Views/Encurtador/Listagem/listagem.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/components/taglib/component-globals-tag")),
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/async/await-reorderer-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!DOCTYPE html><html lang=\"pt-BR\"><head><meta charset=\"UTF-8\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"><title>Resumir/Ofuscar URL's</title></head><body>");

  component_globals_tag({}, out);

  out.w("<h1>URLS</h1><table><thead><th>ID</th><th>URL</th><th>Destino</th><th>Cliques</th><th>Data de Criação</th></thead><tr><td>1</td><td>https://resumeurl.herokuapp.com/teste01</td><td>http://google.com.br</td><td>5</td><td>19/06/2020 05:30h</td></tr><tr><td>2</td><td>https://resumeurl.herokuapp.com/teste02</td><td>http://facebook.com.br</td><td>3</td><td>19/06/2020 05:30h</td></tr></table>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "26");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/encurtador-de-url$1.0.0/src/Views/Encurtador/Listagem/listagem.marko",
    tags: [
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };