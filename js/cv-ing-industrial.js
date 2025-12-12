// js/cv-ing-industrial.js

function printCV(cvId) {
  const cv = document.getElementById(cvId);
  if (!cv) return;

  const previous = document.querySelector('.print-target');
  if (previous) previous.classList.remove('print-target');

  cv.classList.add('print-target');
  window.print();
}

// LÓGICA PARA ING. INDUSTRIAL
const formIndustrial = document.getElementById('form-ing-industrial');
const panelCVIndustrial = document.getElementById('panel-cv-industrial');
const btnGenerarIndustrial = document.getElementById('btn-generar-industrial');
const btnPDFIndustrial = document.getElementById('btn-pdf-industrial');
const recIndustrial = document.getElementById('recomendaciones-industrial');

btnGenerarIndustrial.addEventListener('click', () => {
  const formData = new FormData(formIndustrial);
  const datos = Object.fromEntries(formData.entries());

  document.getElementById('cv-nombre-industrial').textContent =
    datos.nombre?.trim() || 'Nombre Apellido';

  document.getElementById('cv-puesto-industrial').textContent =
    datos.puesto?.trim() || 'Ingeniero Industrial';

  const ciudad = datos.ciudad?.trim();
  const tel = datos.telefono?.trim();
  const mail = datos.email?.trim();

  let contacto = [];
  if (ciudad) contacto.push(ciudad);
  if (tel) contacto.push(tel);
  if (mail) contacto.push(mail);

  document.getElementById('cv-contacto-industrial').textContent =
    contacto.length ? contacto.join(' | ') : 'Ciudad, País | Teléfono | Email';

  document.getElementById('cv-perfil-industrial').textContent =
    datos.perfil?.trim() || 'Resume en 3–5 líneas tu experiencia en procesos, producción, logística y mejora continua.';

  document.getElementById('cv-experiencia-industrial').textContent =
    datos.experiencia?.trim() || 'Incluye tus experiencias en plantas, almacenes, logística o áreas de operaciones.';

  document.getElementById('cv-logros-industrial').textContent =
    datos.logros?.trim() || 'Añade proyectos de mejora continua, reducción de tiempos, costos y mermas, con resultados cuantificados.';

  document.getElementById('cv-herramientas-industrial').textContent =
    datos.herramientas?.trim() || 'Especifica herramientas como Lean, Six Sigma, 5S, VSM, ERPs, Excel avanzado, etc.';

  document.getElementById('cv-educacion-industrial').textContent =
    datos.educacion?.trim() || 'Indica tu formación principal, institución y años de estudio.';

  const cert = datos.certificaciones?.trim();
  const certSection = document.getElementById('cv-certificaciones-section-industrial');
  const certText = document.getElementById('cv-certificaciones-industrial');

  if (cert) {
    certText.textContent = cert;
    certSection.style.display = 'block';
  } else {
    certSection.style.display = 'none';
  }

  panelCVIndustrial.classList.add('visible');

  const recomendaciones = [];
  const perfilLen = (datos.perfil || '').trim().length;
  const expLen = (datos.experiencia || '').trim().length;
  const logrosLen = (datos.logros || '').trim().length;
  const herrLen = (datos.herramientas || '').trim().length;

  if (!datos.perfil || perfilLen < 120) {
    recomendaciones.push('Amplía tu perfil profesional mencionando sectores (manufactura, servicios, logística) y tipos de procesos que manejas.');
  }

  if (!datos.experiencia || expLen < 200) {
    recomendaciones.push('Detalla más tu experiencia: volumen de producción, tamaño de equipos, tipos de procesos y responsabilidades clave.');
  }

  if (!datos.logros || logrosLen < 120) {
    recomendaciones.push('Incluye logros de mejora continua con números: reducción de tiempos de ciclo, disminución de mermas, aumento de productividad, etc.');
  }

  if (!datos.herramientas || herrLen < 60) {
    recomendaciones.push('Agrega herramientas y metodologías como Lean, Six Sigma, 5S, VSM, Kanban, así como ERPs y Excel avanzado.');
  }

  if (!cert) {
    recomendaciones.push('Considera certificaciones en Lean, Six Sigma o gestión de calidad para fortalecer tu perfil industrial.');
  }

  if (!mail) {
    recomendaciones.push('Incluye un correo profesional para facilitar la comunicación con reclutadores.');
  }

  if (!tel) {
    recomendaciones.push('Añade un número de teléfono actualizado para contactos rápidos.');
  }

  if (!ciudad) {
    recomendaciones.push('Indica tu ciudad y país para que las empresas conozcan tu ubicación o disponibilidad.');
  }

  recomendaciones.push('Adapta tu CV al tipo de industria (manufactura, agroindustria, logística) resaltando logros que encajen con ese entorno.');

  let htmlRec = '<ul>';
  recomendaciones.forEach(r => {
    htmlRec += `<li>${r}</li>`;
  });
  htmlRec += '</ul>';
  recIndustrial.innerHTML = htmlRec;
});

btnPDFIndustrial.addEventListener('click', () => {
  printCV('cv-ing-industrial');
});