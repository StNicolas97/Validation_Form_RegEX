let submitButton = document.getElementById('submitButton');

submitButton.addEventListener('click', valider);

function valider() {
    let lnom = document.getElementById('fullName').value.trim();
    let regNom = /^[a-zA-Z0-9._-]{2,}/;

    if (!regNom.test(lnom)) {
        document.getElementById('errorFullName').textContent = 'Veuillez entrer un nom valide (au moins 2 caractères alphanumériques).';
    } else {
        document.getElementById('errorFullName').textContent = '';
        alert('Nom valide ! Votre saisie a été acceptée.');
    }

    let lEmail = document.getElementById('email').value.trim();
    let regEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!regEmail.test(lEmail)) {
        document.getElementById('errorEmail').textContent = 'Veuillez entrer une adresse email valide (exemple : utilisateur@domaine.com).';
    } else {
        document.getElementById('errorEmail').textContent = '';
        alert('Adresse email valide ! Votre saisie est correcte.');
    }

    let lPhone = document.getElementById('phone').value.trim();
    let regPhone = /^\d{10}$/;
    if (!regPhone.test(lPhone)) {
        document.getElementById('errorPhone').textContent = 'Veuillez entrer uniquement des chiffres pour le numéro de téléphone.';
    } else {
        document.getElementById('errorPhone').textContent = '';
        alert('Numéro de téléphone valide ! Votre saisie est correcte.');
    }

    let lPassWord = document.getElementById('password').value.trim();
    let regPassword = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%?&*])[a-zA-Z0-9.!@#$%?]{8,}$/;

    if (!regPassword.test(lPassWord)) {
        document.getElementById('errorPassword').textContent = 'Votre mot de passe doit contenir au minimum : 8 caractères, une majuscule, un chiffre, et un caractère spécial (!@#$%?&*).';
    } else {
        document.getElementById('errorPassword').textContent = '';
        alert('Mot de passe valide ! Votre saisie est correcte.');
    }

    let lPostCode = document.getElementById('postalCode').value.trim();
    let regCode = /^\d{5}$/;
    if (!regCode.test(lPostCode)) {
        document.getElementById('errorPostalCode').textContent = 'Veuillez entrer un code postal valide composé de 5 chiffres.';
    } else {
        document.getElementById('errorPostalCode').textContent = '';
        alert('Code postal valide ! Votre saisie est correcte.');
    }
}
