document.getElementById('registrationForm').addEventListener('submit', function(event) {
  event.preventDefault();
  if (validateForm()) {
      document.getElementById('successMessage').style.display = 'block';
  }
});

function validateForm() {
  const nombre = document.getElementById('nombre').value.trim();
  const email = document.getElementById('email').value.trim();
  const telefono = document.getElementById('telefono').value.trim();
  const vinculo = document.querySelector('input[name="vinculo"]:checked');
  const nivel = document.querySelector('input[name="nivel"]:checked');
  const nombrealu = document.getElementById('nombrealu').value.trim();
  const genero = document.querySelector('input[name="genero"]:checked');
  const fechaNacimiento = document.getElementById('fechaNacimiento').value;
  const direccion = document.getElementById('direccion').value.trim();
  const localidad = document.getElementById('localidad').value.trim();

  if (!nombre || !email || !telefono || !vinculo || !nivel || !nombrealu || !genero || !fechaNacimiento || !direccion || !localidad) {
      alert("Por favor, complete todos los campos requeridos.");
      return false;
  }

  if (!validateEmail(email)) {
      alert("Por favor, ingrese un correo electrónico válido.");
      return false;
  }

  if (!validatePhone(telefono)) {
      alert("Por favor, ingrese un número de teléfono válido.");
      return false;
  }

  return true;
}

function validateEmail(email) {
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return re.test(String(email).toLowerCase());
}

function validatePhone(phone) {
  const re = /^[0-9]{10,15}$/;
  return re.test(String(phone));
}
