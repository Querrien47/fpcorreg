
function validateForm() {
  var nombre = document.getElementById('nombre').value.trim();
  var email = document.getElementById('email').value.trim();
  var contraseña = document.getElementById('contraseña').value;
  var nivel = document.querySelector('input[name="nivel"]:checked');

  var emailRegex = /^\S+@\S+\.\S+$/;

  var errores = [];

  if (nombre === "") {
      errores.push("Por favor, ingresa tu nombre.");
  }

  if (!emailRegex.test(email)) {
      errores.push("Por favor, ingresa un correo electrónico válido.");
  }

  if (contraseña.length < 6) {
      errores.push("La contraseña debe tener al menos 6 caracteres.");
  }

  if (!nivel) {
      errores.push("Por favor, selecciona tu nivel educativo.");
  }

  if (errores.length > 0) {
      mostrarErrores(errores);
      return false;
  }

  return true;
}
function calcularEdad() {
  var fechaNacimiento = new Date(document.getElementById('fechaNacimiento').value);
  var hoy = new Date();

  var edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
  var mes = hoy.getMonth() - fechaNacimiento.getMonth();

  if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
      edad--;
  }

  document.getElementById('resultado').textContent = 'Tienes ' + edad + ' años.';
}

// Calcular edad al cargar la página
calcularEdad();


function mostrarErrores(errores) {
  var errorContainer = document.getElementById('errorContainer');
  errorContainer.innerHTML = '';

  errores.forEach(function(error) {
      var errorMessage = document.createElement('p');
      errorMessage.textContent = error;
      errorContainer.appendChild(errorMessage);
  });
}