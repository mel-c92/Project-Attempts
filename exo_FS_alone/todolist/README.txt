# ALGORITHMES

## MA LOGIQUE

STOCKAGE DES DONNEES DANS LE NAVIGATEUR
usage de localstorage

* déclarer un tableau pour stocker les 'li.innerText'
let dataTab = []
* ajouter chaque li.innerText dans le tableau
dataTab.push(newLi.innerText)
* stringify le tableau
let dataTabStringified = JSON.stringify(dataTab)
* Local Storage
localStorage.setItem("MyTodos", dataTabStringified)
- Mais où placer la partie suivante ??
* Retrouver mes petits à l'ouverture de la navigation:
localStorage.getItem("MyTodos")
* Revenir à l'étape où l'on peut utiliser les données du tableau
dataTab = JSON.parse(dataTabStringified)
- et comment faire pour que mes 'li' puissent s'afficher correctement ??

## LOGIQUE GEMINI :
Où Placer la Partie de Récupération des Données ?
Vous avez une question très pertinente : "Mais où placer la partie suivante ? Retrouver mes petits à l'ouverture de la navigation".

Pensez au moment où votre application est prête à interagir avec l'utilisateur. C'est-à-dire, quand le HTML est complètement chargé et que votre JavaScript peut commencer à manipuler le DOM.

Considérez ces deux scénarios :

Quand un utilisateur ouvre la page pour la toute première fois (ou après avoir effacé le cache/localStorage). À ce moment-là, y aura-t-il quelque chose dans localStorage sous votre clé "MyTodos" ?

Quand un utilisateur rouvre la page après l'avoir fermée (et qu'il avait des tâches enregistrées). À ce moment-là, y aura-t-il quelque chose dans localStorage ?

La logique de récupération des données (localStorage.getItem()) et de leur désérialisation (JSON.parse()) doit avoir lieu au démarrage de votre script, avant même que l'utilisateur n'ait la chance d'ajouter une nouvelle tâche. C'est l'étape où vous chargez l'état précédent de votre application.
____________
Récapitulatif du Flux Logique Global
Initialisation du Tableau : Déclarez votre dataTab au début de votre script.

Chargement au Démarrage : Juste après la déclaration de dataTab, essayez de récupérer les données de localStorage.

Si des données existent, parsez-les et remplissez dataTab avec.

Si aucune donnée n'existe, dataTab restera vide (ou vous pouvez l'initialiser explicitement comme vide).

Affichage Initial : Immédiatement après avoir chargé dataTab, parcourez-le et créez tous les <li> correspondants dans le DOM. C'est ce qui rendra vos tâches persistantes visibles.

Gestion des Événements (Ajout, Suppression, Toggle) :

Quand une tâche est ajoutée via le formulaire, ajoutez son texte à dataTab.

Quand une tâche est supprimée visuellement, retirez son texte de dataTab.

(Si vous implémentez le marquage "fait") Quand une tâche est marquée ou démarquée, mettez à jour son statut dans dataTab.

Après chaque modification de dataTab, appelez une fonction qui se charge de JSON.stringify(dataTab) et localStorage.setItem("MyTodos", dataTabStringified).

____________

Comment Faire pour que vos <li> s'Affichent Correctement ?
Une fois que vous avez récupéré et parsé les données de localStorage dans votre dataTab (qui contient maintenant les textes de vos anciennes tâches), il faut les recréer visuellement dans le DOM.

Pensez à la façon dont vous créez un newLi et son bouton de suppression lorsqu'une nouvelle tâche est ajoutée par l'utilisateur. La logique est très similaire !

Votre dataTab va vous donner la liste des textes de toutes les tâches à afficher. Vous devrez parcourir ce tableau. Pour chaque élément de ce tableau, vous devrez :

Créer un nouvel élément <li>.

Lui attribuer le texte de la tâche récupérée.

Créer son bouton de suppression.

Lui ajouter les écouteurs d'événements nécessaires (pour le marquage todo-done et la suppression).

Attacher ce <li> et son bouton à la <ul> visible dans le DOM.