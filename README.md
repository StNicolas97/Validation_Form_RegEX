# Validation Formulaire - README

Ce projet est une application web simple permettant de valider les saisies utilisateur dans un formulaire. Il utilise des expressions régulières (**RegEx**) pour vérifier la conformité des champs suivants : nom complet, adresse email, numéro de téléphone, mot de passe, et code postal.

## Fonctionnalités principales
- **Validation du nom complet** :
  - Doit contenir au moins 2 caractères alphanumériques.
  - Affiche un message d'erreur en cas de saisie incorrecte.
- **Validation de l'adresse email** :
  - Doit respecter le format standard (exemple : utilisateur@domaine.com).
  - Affiche un message d'erreur en cas de saisie incorrecte.
- **Validation du numéro de téléphone** :
  - Doit être composé uniquement de 10 chiffres.
  - Affiche un message d'erreur en cas de saisie incorrecte.
- **Validation du mot de passe** :
  - Doit contenir au moins 8 caractères, incluant une majuscule, un chiffre, et un caractère spécial (!@#$%?&*).
  - Affiche un message d'erreur en cas de saisie incorrecte.
- **Validation du code postal** :
  - Doit être composé exactement de 5 chiffres.
  - Affiche un message d'erreur en cas de saisie incorrecte.

## Structure du Projet
- **HTML** : Formulaire avec des champs pour le nom complet, l'adresse email, le numéro de téléphone, le mot de passe, et le code postal.
- **CSS** : Optionnel, pour le style visuel du formulaire.
- **JavaScript** :
  - Ajout d'écouteurs d'événements sur le bouton de validation.
  - Validation des champs via des expressions régulières.
  - Affichage des messages d'erreur ou de succès.

## Utilisation
1. **Prérequis** :
   - Un navigateur web moderne supportant JavaScript.

2. **Lancer l'application** :
   - Ouvrez le fichier HTML dans votre navigateur.

3. **Tester la validation** :
   - Remplissez les champs du formulaire et cliquez sur le bouton de validation.
   - Les messages d'erreur s'afficheront sous les champs invalides.
   - Un message d'alerte confirmera la validation des champs corrects.

## Code Exemple : Validation d'un champ
Voici un extrait de code pour valider une adresse email :
```javascript
let email = document.getElementById('email').value.trim();
let regEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
if (!regEmail.test(email)) {
    document.getElementById('errorEmail').textContent = 'Veuillez entrer une adresse email valide (exemple : utilisateur@domaine.com).';
} else {
    document.getElementById('errorEmail').textContent = '';
    alert('Adresse email valide ! Votre saisie est correcte.');
}
```

## Auteurs
- **Nicolas Basson**

## Licence
Ce projet est open-source et sous licence MIT. Vous êtes libre de le modifier et de l'utiliser à votre convenance.

