# tp06-framework

## Introduction

## Getting started

Dans *./filters* créez vos filtres en prenant bien soin de les exporter chacune comme une fonction  
module.exports = (text)=>{
  return text;
}

Note
Votre filtre dois recevoir un ou deux parametres : le premier est le résultat du filtre précédent (il est null pour le filtre de lapremière étape) le second est une chaine de caractère représentant les parametres que vous auriez renseignés au niveau de l'attribut params dans le fichier *./config-filters.json*

Ensuite créez la séquence du programme dans *./config-filters.json* en respectant le format suivant  
{
  "steps" : {
    "1": {
      "filter": "hello",
      "params" : ['hello world!'],
    },
  }
}

Et enfin exécutez votre programme avec la commande *node .*.

## 

##

## Equipe

HOULBOUMI SIM Bienvenue  
KAYM Kassai  
KOTTO Yann  
