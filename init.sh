#!/bin/bash

read -r -p "Are you sure (y/N)?" continua

if [ "$continua" != "y" ]
then
    exit 1
fi

echo "Inicializando ..."
rm -vrf docs/exercicios
rm -vrf docs/img
> docs/index.md
> slides/slides.smd

mv slides/img/background.png /tmp/cqs.$$$
for f in slides/img/*
do
    rm $f
done
mv /tmp/cqs.$$$ slides/img/background.png

echo "Edite .mkdocs.yml, slides/slides.smd, docs/index.md"
