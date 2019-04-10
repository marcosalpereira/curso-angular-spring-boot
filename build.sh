#!/bin/sh

# remover possiveis links simbolicos
find . -type l -delete

test -d public && rm -rf public

# mkdocs
mkdocs build

# reveal

# (re) gerar numeração dos slides
node resync-slides.js slides/slides.smd

cp -vR slides site/

test -d site/slides/reveal.js && rm -rf site/slides/reveal.js

cp -vR node_modules/reveal.js site/slides/

./copy-plugins.sh site/slides/reveal.js/plugin

mv site public

