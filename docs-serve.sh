#!/bin/sh

# remover links simbolicos
find . -type l -delete

test -L docs/slides || ln -sr slides docs/slides

test -L docs/slides/reveal.js || ln -sr node_modules/reveal.js docs/slides/reveal.js
test -L docs/slides/reveal.js/plugin/chalk_board || ln -sr node_modules/reveal.js-chalkboard docs/slides/reveal.js/plugin/chalk_board
test -L docs/slides/reveal.js/plugin/menu || ln -sr node_modules/reveal.js-menu docs/slides/reveal.js/plugin/menu

mkdocs serve