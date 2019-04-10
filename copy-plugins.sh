#!/bin/sh

dest=$1

mkdir -p $dest/menu/ $dest/chalk_board/
cp -vR node_modules/reveal.js-menu/* $dest/menu/
cp -vR node_modules/reveal.js-chalkboard/* $dest/chalk_board/
