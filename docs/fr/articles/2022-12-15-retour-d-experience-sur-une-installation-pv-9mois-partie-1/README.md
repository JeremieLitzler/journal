---
title: "Installation PV - quel retour d'expérience après 9 mois ? (partie 1)"
description: "Fin Mars 2022, nous avons mis en service notre installation photovoltaïque. Regardons comment j'ai modifié l'installation et ajusté les appareils et les usages dans mon foyer."
date: 2022-12-15
#head:
#  - [
#      meta,
#      {
#        rel: canonical,
#        href: https://thetooltip.substack.com/p/installation-pv-retour-dexperience,
#      },
#    ]
category:
  - Energie
tag:
  - Energie solaire
  - Autoconsommation
  - Eau chaude sanitaire
article: false
---

![Des tableaux électriques et un boitier avec un afficheur digital](./images/2022-12-15-tableau-pv-routeur-solaire-et-tableau-electrique.jpg 'Le routeur solaire de Robin Emley avec son afficheur digital et les 2 tableaux éléctriques pour la production (au fond) et la consommation (sous le routeur)')

Depuis la mise en route, j'ai réalisé un bon nombre de modifications, principalement dans la maison et pour le cumulus. Regardons ensemble les détails.

<!-- more -->

## Ajustements extérieurs de l'installation

### Orientation verticale des champs de panneaux

J'ai changé 3 fois l'inclinaison des champs sur les 9 mois :

- fin juin :
  - j'ai mis le champ Sud à 30 °
  - j'ai abaissé un peu les champs Sud-Est et Sud-Ouest, mais j'étais limité et donc ils n'étaient pas aussi bas.
- fin août, j'ai remonté le champ Sud à 45 °
- fin novembre, j'ai remonté tous les champs à au moins 60 °

![Vue des champs Sud et Sud-Est](./images/2022-12-31-vue-des-champs-sud-et-sud-est.jpg 'Les champs Sud et Sud-Est en position Printemps-Automne')

### Nettoyage des panneaux

J'ai réalisé un nettoyage mensuel.

Avec pas mal de chats autour de la propriété, j'ai vu que certains sont venus marchés sur les panneaux, mais heureusement, les moutons s'en sont abstenus.

## Ajustements intérieurs de l'installation

### Réorganisation du tableau _Routeur solaire_

::: tabs#schema

@tab Au printemps

Au mois de mai, je n'avais pas une solution optimale pour passer de l'alimentation solaire à l'alimentation réseau...

![Schéma électrique du 23 mai 2022](./images/installation.electrique-photovoltaique-version-2022-05-23.jpg)

@tab A la fin de l'été

Fin août 2022, j'ai enfin trouvé la configuration la plus pratique pour gérer les deux sources d'alimentation du cumulus.

![Schéma électrique à la fin de l'été 2022](./images/installation.electrique-photovoltaique-version-2022-08-31.jpg)

Ce qui a changé :

- je n'utilise plus le contacteur avec le signal HC/HP d'EDF. Il n'est utile et j'explique pourquoi dans les lignes suivantes.
- j'ai conservé les disjoncteur 15A-1 et 15A-2 pour avoir un contrôle indépendant sur les sorties du routeur solaire.
- j'ai supprimé les compteurs mécaniques pour compter l'énergie utilisée sur les prises connectées aux sorties du routeur solaire. Voir [plus bas pourquoi](#branchement-du-cumulus).

- j'ai installé un programmateur horaire à pins pour contrôler quand et combien de temps le cumulus est alimenté par le réseau.

  - Le disjoncteur 15A-3 permet de couper l'alimentation réseau du cumulus quand cela est nécessaire.
  - Le compteur d'énergie mécanique me permet de continuer le suivi de la consommation du cumulus sur le réseau.

:::

### Branchement du cumulus

Au départ, j'ai branché le cumulus de la mauvaise façon. Je ne pouvais pas laisser le disjoncteur historique dans le garage et le disjoncteur de la sortie 1 du routeur actifs tous les deux.

Sinon, ça sautait, car le branchement n'était pas en parallèle.

Cela m'obligeait à tout éteindre au niveau du tableau général, me rendre dans le garage, activer ou désactiver l'alimentation réseau et remettre l'alimentation sur le tableau général... Pas pratique.

Après plus de réflexion, j'ai réussi à brancher les deux avec le contrôle au niveau du tableau du routeur.

Sur la sortie routeur, j'ai enlevé les compteurs d'énergie mécaniques, car le comptage était faux. Je pense que cela est causé par le routeur et la façon dont il laisse passer le courant par impulsion.

Robin Emley m'a dit que cela dépend de [la calibration de la pince ampèremétrique](https://mk2pvrouter.co.uk/improved-calibration.html). Pour le moment, cela ne me dérange pas.

Avec le compteur d'énergie numérique sur le tableau de la sortie solaire, cela m'importait peu de ne pas avoir l'information précise de la consommation sur le routeur.

Le routeur indique le comptage journalier et celui-ci est réinitialisé chaque jour. Je me satisfais de ce que je peux noter chaque jour, même si en notre absence, on ne peut pas connaitre la quantité de surplus redirigée par le routeur.

Au lien d'aller directement du tableau général au cumulus, j'ai installé :

- un programmateur horaire à pins
  - pour contrôler le temps d'utilisation du réseau la nuit.
- un compteur d'énergie mécanique
  - pour compter le nombre de kWh consommés du réseau
- un disjoncteur derrière le compteur.
  - pour contrôler la possibilité de complétement désactiver l'utilisation du réseau pour chauffer l'eau.

Dans le garage, sur le support en OSB isolant le cumulus, j'ai installé le disjoncteur 15A-4.

J'ai utilisé un câble triphasé du tableau du routeur solaire au cumulus :

- une phase et ligne pour l'alimentation réseau
- une phase et ligne pour l'alimentation du routeur

Le câble de terre remonte du cumulus au tableau du routeur solaire.

L'entrée du disjoncteur reçoit :

- l'alimentation du réseau via le programmateur horaire
- l'alimentation du routeur solaire

La sortie est branchée comme avant au cumulus.

## Optimisation de la production

### Avec le cumulus

En octobre, j'ai dû activer l'alimentation du cumulus par le réseau.

A ce moment-là, 1.5 h de chauffe était largement suffisant pour les 5 jours où cela fut nécessaire.

En novembre, on a laissé le réseau preque tous les jours dû à la très mauvaise météo... J'ai augmenté à 2.5 h de chauffe la première semaine de décembre. J'ai diminué à 2h une semaine après car cela suffisait pour les douches chaudes de mesdames 🚿

==Le gros avantage== :

- en novembre, on a réussi presque -50 % de consommation réseau par rapport aux trois dernières années, et ce malgré l'absence du soleil une bonne partie du mois. Avant, le cumulus tournait 4h par nuit d'hiver...
- aussi, lorsqu'on lançait le lave-vaisselle en fin de nuit (le cumulus étant en route de 22h30 à 2h00 avec le signal HP/HC), le cumulus se remettait en route...

![Graphique de relevé Linky en février 2022](./images/exemple-de-cycle-1-en-fevrier-2022.jpg 'Le pic de 4h30 correspond au cycle 1 du lave-vaisselle où le cumulus se remettant en route pour chauffer l'eau que le lave-vaisselle a utilisé.')

==Autre point important :== j'ai mis le thermostat à 5 sur 5 au lieu de 2 sur 5 en été et 3 sur 5 en hiver quand on alimentait sur le réseau uniquement.

Oui, l'eau était bien chaude le printemps, l'été et l'automne, mais cela a permit d'avoir 2 à 3 jours de mauvais temps en septembre avec peu ou pas de soleil et ne pas utiliser le réseau pour chauffer l'ESC. Je l'ai remarqué principalement en août et septembre.

Est-ce que cela va faire vieillir la résistance ? Si vous avez la réponse, [partagez-la moi](../../contactez-moi/README.md) :)

### Avec le déhydrateur

Je l'ai beaucoup utilisé en juin, juillet et un peu en août et septembre.

Cela nous a permit de sècher les abricots, les poires, la verveine citronnée et les orties.

Je l'ai branché sur la sortie 2 lorsqu'on avait besoin que l'ECS soit chauffée, ce qui me conforte dans le choix de prendre un routeur avec 2 sorties.

L'inconvénient fut que cela chauffait l'air de la maison... Et cet été, ce n'était pas l'idéal !

### Avec le lave-vaisselle

Durant l'été, l'eau fut très chaude.

Le lave-vaisselle est branché sur l'eau depuis son installation.

Ce que nous avons fait l'été passé fut de lancer 2 cycles 5 ( rinçage de 11 min) pour amener l'eau et la vaisselle était alors presque _propre_. Si l'on avait besoin de faire tourner le lave-vaisselle, on le lançait ensuite en programme cycle 4 (ou _demi-charge_) durant 30 min et comme l'eau chaud était déjà là, la consommation du réseau apparaissait nul.

Sur un cycle plus long, le mode _eco_ de 2h45, la consommation était clairement diminuée.

![Graphique de relevé Linky en septembre 2022](./images/exemple-de-cycle-1-avec-eau-tres-chaude-septembre-2022.jpg 'Le pic de 15h correspond au cycle 1 du lave-vaisselle. Normalement, le cycle 1 consomme un peu moins de 1kWh.')

### Avec le lave-linge

Contrairement au lave-vaisselle, je n'ai pas branché le lave-linge sur l'eau chaude, car il faut installer un mitigeur et l'arrivée d'eau chaude est trop loin ni réalisée pour que ça valle le coup.

Par contre, nous avons profité du soleil et des jours ensoleillés pour laver le linge et consommer moins sur un cycle.

![Graphique de relevé Linky du 11 août 2022](./images/exemple-de-cycle-cotton-eco-40-en-aout-2022.jpg 'Le pic de 12h et la consommation continuant jusqu'à 15h correspond au cycle "Cotton éco" à 40° C')

:::danger A faire avant décembre
Je n'ai pas une date précédant l'activation de la production solaire.
:::

Historiquement, nous lavions notre linge au cycle _Synthétique à 40°_. Toutefois, après avoir essayer le cycle _Cotton eco à 40°_, il est apparu que la consommation était réduite.

Nous avons donc utilisé le cycle _Cotton eco à 40°_ plus long (3h au lieu de 1h35).

Entre la nuit et le journée, voici la différence :

![Graphique de consommation horaire enregistré par le Linky le 15 mai 2022](./images/cycle-cotton-eco-nuit-journee.jpg 'Avec le soleil, on réduit de plus de moitié la consommation du réseau.')

- Le cycle de 0h30 à 4h est bien plus important que celui de 13h30 à 17h.
- Le pic à 6h correspond à l'utilisation de notre pompe à eau.

### Avec la plaque à induction portable

De la même façon, nous avons utilisé, aussi bien que peu, une plaque à induction portable de 2100 W de puissance pour faire cuire doucement certains plats.

En général, je n'ai jamais dépassé 3.5 sur une échelle de 10.

La puissance de 3.5 correspond à 500 W.

Nous avons remarqué que même 2.5, soit 340 W, les aliments cuissaient.

Certes, cela prennait plus de temps que le feu à gaz dans la cuisine, mais en 2h, les légumes vapeurs étaient cuits par l'énergie solaire récupérée.

![Graphique de relevé Linky du 5 septembre 2022](./images/exemple-de-cuisson-induction.jpg 'De 15h à 18h, nous avons fait cuire un plat à puissance 2.5, soit 340 W. Le pic de 15h montre sûrement un nuage dans le ciel à ce moment.')

### Avec le mini radiateur électrique

Nous ne l'avons pas beaucoup utiliser, mais je pense qu'il fut utile pendant notre absence début octobre (12 jours).

L'idée :

- laisser la sortie 1 du routeur solaire sur le chauffe-eau (comme ça, l'eau est bien chaude en rentrant)
- brancher le radiateur sur le réglage 1000 W (pour optimiser la ventilation) sur la sortie 2 du routeur solaire.

:::note Pour rappel
Le routeur n'alimente les 2 sorties en même temps.

Si la sortie 1 ne consomme pas, la sortie 2 est alimenté par le surplus solaire.

Ce qui se révèle très pratique dans le scénario ci-dessus !
:::

## Et l'optimisation de la puissance maximum

### La puissance des appareils

Je me suis rendu que l'on possède beaucoup d'appareils électroménagers qui consomment beaucoup :

- un four de 3000 W
- un bouilloire de 2200 W
- etc...

Et je me suis posé la question : pourquoi des grosses puissances ?

Pour aller plus vite pour cuire un plat ou bouillir de l'eau.

En réalité combien cela prend-il de faire chauffer 300 ml d'eau à 2400 W au lieu de 1000 W, par exemple ?

D'après [Elisabeth Petit et son calculateur](https://editions-petiteelisabeth.fr/calculs_transfert_chaleur_6.php), il faut :

- 41.8 secondes pour chauffer 300 ml d'eau à 2400 W de puissance.
- 100.3 secondes pour chauffer 300 ml d'eau à 1000 W de puissance.

Soit 1 min de plus.

A-t-on vraiment besoin de gagner une minute pour chauffer notre eau le matin pour boire un café ou une tisane ?

Et lorsque votre installation photovoltaïque délivre maximum 1200 W instantannés, n'est-il pas mieux de chauffer à 1000 W plutôt que 2400 W ?

Je vous laisse juger pour vous-même.

### La puissance maximum souscrite auprès du fournisseur d'électricité

Depuis la mise en route de l'installation photovoltaïque, j'ai noté que la puissance maximum demandé au réseau à très peu dépassé les 3kWh.

La seul raison qu'on dépasse les 3kWh instantannés est le fait de mettre le cumulus et le lave-vaisselle ou le lave-linge et le lave-vaisselle en route en même temps.

Autant dire que cela est possible de décaler l'un ou l'autre.

## Quelle est la suite

A la fin du mois, je publierai les chiffres. Encore 2 semaines de relevés et vous pourrez découvrir ce qu'a produit l'installation et comment cela impacte notre consommation et notre facture.

En attendant, ==merci pour votre soutien !==

<!-- markdownlint-disable MD033 -->
<p class="newsletter-wrapper"><iframe class="newsletter-embed" src="https://thetooltip.substack.com/embed" frameborder="0" scrolling="no"></iframe></p>
