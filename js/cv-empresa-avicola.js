// js/cv-empresa-avicola.js

function printCV(cvId) {
  const cv = document.getElementById(cvId);
  if (!cv) return;

  const previous = document.querySelector('.print-target');
  if (previous) previous.classList.remove('print-target');

  cv.classList.add('print-target');
  window.print();
}

// LÓGICA PARA EMPRESA AVÍCOLA
const formAvicola = document.getElementById('form-avicola');
const panelCVAvicola = document.getElementById('panel-cv-avicola');
const btnGenerarAvicola = document.getElementById('btn-generar-avicola');
const btnPDFAvicola = document.getElementById('btn-pdf-avicola');
const recAvicola = document.getElementById('recomendaciones-avicola');

btnGenerarAvicola.addEventListener('click', () => {
  const formData = new FormData(formAvicola);
  const datos = Object.fromEntries(formData.entries());

  document.getElementById('cv-nombre-avicola').textContent =
    datos.nombre?.trim() || 'Nombre Apellido';

  document.getElementById('cv-puesto-avicola').textContent =
    datos.puesto?.trim() || 'Puesto en empresa avícola';

  const ciudad = datos.ciudad?.trim();
  const tel = datos.telefono?.trim();
  const mail = datos.email?.trim();

  let contacto = [];
  if (ciudad) contacto.push(ciudad);
  if (tel) contacto.push(tel);
  if (mail) contacto.push(mail);

  document.getElementById('cv-contacto-avicola').textContent =
    contacto.length ? contacto.join(' | ') : 'Ciudad, País | Teléfono | Email';

  document.getElementById('cv-perfil-avicola').textContent =
    datos.perfil?.trim() || 'Resume tu experiencia en producción avícola, manejo de granjas, bioseguridad e indicadores productivos.';

  document.getElementById('cv-experiencia-avicola').textContent =
    datos.experiencia?.trim() || 'Describe tu experiencia en granjas, plantas de proceso, manejo de lotes y equipos de trabajo.';

  document.getElementById('cv-logros-avicola').textContent =
    datos.logros?.trim() || 'Incluye logros como mejora de conversión alimenticia, reducción de mortalidad, aumento de productividad u otros indicadores clave.';

  document.getElementById('cv-habilidades-avicola').textContent =
    datos.habilidades?.trim() || 'Menciona conocimientos en bioseguridad, bienestar animal, HACCP, BPM, manejo sanitario y manejo de vacunas.';

  document.getElementById('cv-educacion-avicola').textContent =
    datos.educacion?.trim() || 'Indica tu formación principal y cursos en producción animal o inocuidad.';

  const cert = datos.certificaciones?.trim();
  const certSection = document.getElementById('cv-certificaciones-section-avicola');
  const certText = document.getElementById('cv-certificaciones-avicola');

  if (cert) {
    certText.textContent = cert;
    certSection.style.display = 'block';
  } else {
    certSection.style.display = 'none';
  }

  panelCVAvicola.classList.add('visible');

  const recomendaciones = [];
  const perfilLen = (datos.perfil || '').trim().length;
  const expLen = (datos.experiencia || '').trim().length;
  const logrosLen = (datos.logros || '').trim().length;
  const habLen = (datos.habilidades || '').trim().length;

  if (!datos.perfil || perfilLen < 120) {
    recomendaciones.push('Amplía tu perfil explicando si te especializas en pollo de engorde, ponedoras, reproductoras o plantas de proceso.');
  }

  if (!datos.experiencia || expLen < 200) {
    recomendaciones.push('Detalla más tu experiencia: número de aves o granjas manejadas, tipo de sistema (cama profunda, jaulas, etc.), responsabilidades diarias.');
  }

  if (!datos.logros || logrosLen < 100) {
    recomendaciones.push('Incluye logros con indicadores clave: mejora de conversión, reducción de mortalidad, mejora de peso final, disminución de decomisos, etc.');
  }

  if (!datos.habilidades || habLen < 60) {
    recomendaciones.push('Agrega conocimientos en bioseguridad, programas de vacunación, manejo de alimentos y normas de inocuidad (HACCP, BPM).');
  }

  if (!cert) {
    recomendaciones.push('Considera cursos o certificaciones en inocuidad, producción avícola o bienestar animal para fortalecer tu perfil.');
  }

  if (!mail) {
    recomendaciones.push('Incluye un correo profesional que revises con frecuencia.');
  }

  if (!tel) {
    recomendaciones.push('Añade un número de teléfono o WhatsApp para facilitar la coordinación de entrevistas.');
  }

  if (!ciudad) {
    recomendaciones.push('Indica tu ciudad y país; en el sector avícola suele ser importante la cercanía a las plantas o granjas.');
  }

  recomendaciones.push('Adapta tu CV según si apuntas a granja, planta de proceso o área de calidad, resaltando la experiencia más relevante para ese enfoque.');

  let htmlRec = '<ul>';
  recomendaciones.forEach(r => {
    htmlRec += `<li>${r}</li>`;
  });
  htmlRec += '</ul>';
  recAvicola.innerHTML = htmlRec;
});

btnPDFAvicola.addEventListener('click', () => {
  printCV('cv-avicola');
});