function calculateTotal() {
    // Récupérer tous les éléments de type "checkbox"
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');

    // Initialiser le prix total à 0
    let total = 0;
    // Parcourir les éléments de type "checkbox"
    for (let i = 0; i < checkboxes.length; i++) {
      // Récupérer l'élément de type "checkbox" courant
      var checkbox = checkboxes[i];

      // Si l'élément de type "checkbox" est coché, ajouter sa valeur au prix total
      if (checkbox.checked) {
        total += parseFloat(checkbox.value );
      }
    }

    // Afficher le prix total dans l'élément HTML approprié
    document.getElementById("total").innerHTML = total;
  }