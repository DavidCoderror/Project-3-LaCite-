var styleElement = document.createElement('style');
document.head.appendChild(styleElement);

// Add the CSS rules for the .error-message class
styleElement.sheet.insertRule('.error-message { color: red; font-size: 12px; display: block; margin-top: 5px; }', 0);

// Add the CSS rules for the .error class
styleElement.sheet.insertRule('.error { border: 1px solid red; }', 1);


document.getElementById('acheter').addEventListener('click', function(event) {
    var nom = document.getElementById('nomInput').value;
    var telephone = document.getElementById('telephoneInput').value;
    var courriel = document.getElementById('courrielInput').value;
    var commentaire = document.getElementById('commentaireTextarea').value;

    validateAndDisplayError('nomInput', isValidName(nom), 'nom');
    validateAndDisplayError('telephoneInput', isValidPhoneNumber(telephone), 'telephone');
    validateAndDisplayError('courrielInput', isValidEmail(courriel), 'courriel');
    validateAndDisplayError('commentaireTextarea', isValidCommentaire(commentaire), 'commentaire');

    // Check if all fields are valid
    var nomError = document.querySelector('.nom-error').textContent;
    var telephoneError = document.querySelector('.telephone-error').textContent;
    var courrielError = document.querySelector('.courriel-error').textContent;
    var commentaireError = document.querySelector('.commentaire-error').textContent;

    if (nomError === '' && telephoneError === '' && courrielError === '' && commentaireError === '') {
        var message = '';

        if (document.getElementById('nomCheckbox').checked) {
            console.log('Nom checkbox is checked');
            message += 'Nom: ' + nom + '\n';
        }
        if (document.getElementById('telephoneCheckbox').checked) {
            console.log('Telephone checkbox is checked');
            message += 'Numero de Telephone: ' + telephone + '\n';
        }
        if (document.getElementById('courrielCheckbox').checked) {
            console.log('Courriel checkbox is checked');
            message += 'Courriel: ' + courriel + '\n';
        }
        if (document.getElementById('commentaireCheckbox').checked) {
            console.log('Commentaire checkbox is checked');
            message += 'Commentaire: ' + commentaire + '\n';
        }

        if (message.trim() !== '') {
            console.log('Message to display:', message);
            window.alert(message);
        }
    } else {
        event.preventDefault();
    }
})


function validateAndDisplayError(inputId, isValid, fieldName) {
    var errorMessage = document.querySelector('.' + fieldName + '-error');
    errorMessage.textContent = '';
    if (!isValid) {
        errorMessage.textContent = 'Veuillez entrer un ' + fieldName + ' valide.';
        document.getElementById(inputId).classList.add('error');
    } else {
        document.getElementById(inputId).classList.remove('error');
    }
}

function isValidName(name) {
    return /^[a-zA-Z\s]+$/.test(name);
}

function isValidPhoneNumber(phoneNumber) {
    return /^\d{10}$/.test(phoneNumber.replace(/\D/g, ''));
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidCommentaire(commentaire) {
    return commentaire.trim().length > 0;
}
