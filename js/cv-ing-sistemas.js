// js/cv-ing-sistemas.js

function printCV(cvId) {
  const cv = document.getElementById(cvId);
  if (!cv) return;

  const previous = document.querySelector('.print-target');
  if (previous) previous.classList.remove('print-target');

  cv.classList.add('print-target');
  window.print();
}

// LÓGICA PARA ING. DE SISTEMAS
const formSistemas = document.getElementById('form-ing-sistemas');
const panelCVSistemas = document.getElementById('panel-cv-sistemas');
const btnGenerarSistemas = document.getElementById('btn-generar-sistemas');
const btnPDFSistemas = document.getElementById('btn-pdf-sistemas');
const recSistemas = document.getElementById('recomendaciones-sistemas');

btnGenerarSistemas.addEventListener('click', () => {
  const formData = new FormData(formSistemas);
  const datos = Object.fromEntries(formData.entries());

  // Cabecera
  document.getElementById('cv-nombre-sistemas').textContent =
    datos.nombre?.trim() || 'Nombre Apellido';

  document.getElementById('cv-puesto-sistemas').textContent =
    datos.puesto?.trim() || 'Ingeniero de Sistemas';

  const ciudad = datos.ciudad?.trim();
  const tel = datos.telefono?.trim();
  const mail = datos.email?.trim();

  const contacto = [];
  if (ciudad) contacto.push(ciudad);
  if (tel) contacto.push(tel);
  if (mail) contacto.push(mail);

  document.getElementById('cv-contacto-sistemas').textContent =
    contacto.length ? contacto.join(' | ') : 'Ciudad, País | Teléfono | Email';

  // Secciones de texto
  document.getElementById('cv-perfil-sistemas').textContent =
    datos.perfil?.trim() || 'Resume en 3–4 líneas tu experiencia, tecnologías clave y tipo de puesto que buscas.';

  document.getElementById('cv-experiencia-sistemas').textContent =
    datos.experiencia?.trim() || 'Incluye tus últimos puestos, logros concretos y tecnologías usadas.';

  document.getElementById('cv-proyectos-sistemas').textContent =
    datos.proyectos?.trim() || 'Agrega proyectos personales, académicos o laborales que refuercen tu perfil técnico.';

  document.getElementById('cv-habilidades-sistemas').textContent =
    datos.habilidades?.trim() || 'Especifica tus principales lenguajes, frameworks, herramientas y metodologías.';

  document.getElementById('cv-educacion-sistemas').textContent =
    datos.educacion?.trim() || 'Indica tu formación principal, institución y años de estudio.';

  const cert = datos.certificaciones?.trim();
  const certSection = document.getElementById('cv-certificaciones-side-sistemas');
  const certText = document.getElementById('cv-certificaciones-sistemas');

  if (cert) {
    certText.textContent = cert;
    certSection.style.display = 'block';
  } else {
    certSection.style.display = 'none';
  }

  // Mostrar panel de CV
  panelCVSistemas.classList.add('visible');

  // RECOMENDACIONES
  const recomendaciones = [];
  const perfilLen = (datos.perfil || '').trim().length;
  const expLen = (datos.experiencia || '').trim().length;
  const projLen = (datos.proyectos || '').trim().length;
  const habLen = (datos.habilidades || '').trim().length;

  if (!datos.perfil || perfilLen < 120) {
    recomendaciones.push('Amplía tu perfil profesional a 3–5 líneas, mencionando años de experiencia, tecnologías clave y el tipo de puesto que buscas.');
  }

  if (!datos.experiencia || expLen < 200) {
    recomendaciones.push('Detalla más tu experiencia: agrega logros medibles (porcentajes, tiempos, ahorros) y responsabilidades concretas en cada puesto.');
  }

  if (!datos.proyectos || projLen < 120) {
    recomendaciones.push('Agrega al menos 2–3 proyectos destacados con tecnologías usadas (ej: Java, React, SQL), tu rol específico y resultados obtenidos.');
  }

  if (!datos.habilidades || habLen < 60) {
    recomendaciones.push('Lista tus habilidades técnicas agrupadas: lenguajes, frameworks, bases de datos, herramientas DevOps y metodologías ágiles.');
  }

  if (!cert) {
    recomendaciones.push('Considera obtener y añadir certificaciones relevantes (Scrum, AWS, Azure, Google Cloud, Cisco, etc.) para reforzar tu perfil.');
  }

  if (!mail) {
    recomendaciones.push('Incluye un correo profesional (ej: nombre.apellido@...) para generar una mejor impresión.');
  }

  if (!tel) {
    recomendaciones.push('Incluye un número de teléfono actualizado para facilitar el contacto rápido del reclutador.');
  }

  if (!ciudad) {
    recomendaciones.push('Añade tu ciudad y país para que el reclutador sepa tu ubicación o disponibilidad.');
  }

  recomendaciones.push('Revisa la ortografía y mantén el CV en máximo 1–2 páginas para roles de Ingeniero de Sistemas.');

  let htmlRec = '<ul>';
  recomendaciones.forEach(r => {
    htmlRec += `<li>${r}</li>`;
  });
  htmlRec += '</ul>';
  recSistemas.innerHTML = htmlRec;
});

btnPDFSistemas.addEventListener('click', () => {
  printCV('cv-ing-sistemas');
});