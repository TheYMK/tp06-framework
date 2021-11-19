# tp06-framework

## Introduction

L’objectif de ce TP est de créer un mini framework Javascript implémentant une architecture de
type modulaire PIPE/FILTER

## Getting started

Dans *./filters* créez vos filtres dans des fichiers *.js* en prenant bien soin de les exporter chacune comme une fonction  
module.exports = (input)=>{
  return input[1];
}

Note  
Votre filtre dois recevoir un ou deux paramètres : le premier est le résultat du filtre précédent (il est *null* pour le filtre de la première étape) le second est une chaine de caractère représentant les paramètres que vous auriez renseignés au niveau de l'attribut *params* dans le fichier *./config-filters.json*

Ensuite créez la séquence du programme dans *./config-filters.json* en respectant le format suivant  
{
  "steps" : {
    "1": {
      "filter": "hello",
      "params" : ['hello world!'],
    },
  }
}

Note  

- Il doit contenir à sa racine un attribut *steps* de type Array contenant des steps

- Chaque step doit avoir un identifiant (clef de l’objet)

- Chaque step doit avoir un attribut *filter* correspondant au fichier filter à exécuter  

- Une step peut avoir un attribut *params* de type Array contenant une liste de paramètres qui seront passés à la step lors de son exécution en plus des paramètres reçus de la step précédente

- Une step peut avoir un attribut *next* qui doit correspondre à l’id

Et enfin exécutez votre programme avec la commande *node .*.

## Equipe

HOULBOUMI SIM Bienvenue  
KAYM Kassai  
KOTTO Yann  
