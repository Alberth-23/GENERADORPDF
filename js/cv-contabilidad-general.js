// js/cv-contabilidad-general.js

function printCV(cvId) {
  const cv = document.getElementById(cvId);
  if (!cv) return;

  const previous = document.querySelector('.print-target');
  if (previous) previous.classList.remove('print-target');

  cv.classList.add('print-target');
  window.print();
}

// LÓGICA PARA CONTABILIDAD GENERAL
const formContabilidad = document.getElementById('form-contabilidad');
const panelCVContabilidad = document.getElementById('panel-cv-contabilidad');
const btnGenerarContabilidad = document.getElementById('btn-generar-contabilidad');
const btnPDFContabilidad = document.getElementById('btn-pdf-contabilidad');
const recContabilidad = document.getElementById('recomendaciones-contabilidad');

btnGenerarContabilidad.addEventListener('click', () => {
  const formData = new FormData(formContabilidad);
  const datos = Object.fromEntries(formData.entries());

  document.getElementById('cv-nombre-contabilidad').textContent =
    datos.nombre?.trim() || 'Nombre Apellido';

  document.getElementById('cv-puesto-contabilidad').textContent =
    datos.puesto?.trim() || 'Contador(a) General';

  const ciudad = datos.ciudad?.trim();
  const tel = datos.telefono?.trim();
  const mail = datos.email?.trim();

  let contacto = [];
  if (ciudad) contacto.push(ciudad);
  if (tel) contacto.push(tel);
  if (mail) contacto.push(mail);

  document.getElementById('cv-contacto-contabilidad').textContent =
    contacto.length ? contacto.join(' | ') : 'Ciudad, País | Teléfono | Email';

  document.getElementById('cv-perfil-contabilidad').textContent =
    datos.perfil?.trim() || 'Resume en 3–5 líneas tu experiencia en contabilidad general, NIIF y tributación.';

  document.getElementById('cv-experiencia-contabilidad').textContent =
    datos.experiencia?.trim() || 'Incluye tus responsabilidades principales: registros, conciliaciones, declaraciones, estados financieros, etc.';

  document.getElementById('cv-areas-contabilidad').textContent =
    datos.areas?.trim() || 'Detalla si te especializas en tributación, costos, auditoría, planillas, tesorería, etc.';

  document.getElementById('cv-herramientas-contabilidad').textContent =
    datos.herramientas?.trim() || 'Menciona sistemas contables, ERPs, manejo de Excel avanzado y plataformas de SUNAT u organismos tributarios.';

  document.getElementById('cv-educacion-contabilidad').textContent =
    datos.educacion?.trim() || 'Indica tu formación en Contabilidad, colegiatura y diplomados relevantes.';

  const cert = datos.certificaciones?.trim();
  const certSection = document.getElementById('cv-certificaciones-side-contabilidad');
  const certText = document.getElementById('cv-certificaciones-contabilidad');

  if (cert) {
    certText.textContent = cert;
    certSection.style.display = 'block';
  } else {
    certSection.style.display = 'none';
  }

  panelCVContabilidad.classList.add('visible');

  const recomendaciones = [];
  const perfilLen = (datos.perfil || '').trim().length;
  const expLen = (datos.experiencia || '').trim().length;
  const areasLen = (datos.areas || '').trim().length;
  const herrLen = (datos.herramientas || '').trim().length;

  if (!datos.perfil || perfilLen < 120) {
    recomendaciones.push('Amplía tu perfil profesional incluyendo años de experiencia, tipos de empresas (PYME, corporativas, estudio contable) y áreas fuertes (tributación, costos, etc.).');
  }

  if (!datos.experiencia || expLen < 200) {
    recomendaciones.push('Detalla más tu experiencia: cantidad de empresas o rubros atendidos, volumen de comprobantes, tipos de declaraciones que manejas.');
  }

  if (!datos.areas || areasLen < 80) {
    recomendaciones.push('Especifica claramente tus áreas de especialización: NIIF, tributación, costos, auditoría, planillas, etc.');
  }

  if (!datos.herramientas || herrLen < 60) {
    recomendaciones.push('Incluye software contable (CONCAR, SAP, etc.), ERPs y nivel de Excel (tablas dinámicas, macros, etc.).');
  }

  if (!cert) {
    recomendaciones.push('Si estás colegiado (CPC) o tienes diplomados NIIF/tributación, añádelos. Si no, considera obtener alguno para reforzar tu perfil.');
  }

  if (!mail) {
    recomendaciones.push('Incluye un correo profesional y revísalo frecuentemente para responder rápido a las empresas.');
  }

  if (!tel) {
    recomendaciones.push('Agrega un número de teléfono actualizado para facilitar entrevistas rápidas.');
  }

  if (!ciudad) {
    recomendaciones.push('Indica tu ciudad y país; muchas vacantes consideran la ubicación por temas de presencialidad.');
  }

  recomendaciones.push('Asegúrate de que tu CV sea claro, ordenado y sin errores, ya que en contabilidad la prolijidad es muy valorada.');

  let htmlRec = '<ul>';
  recomendaciones.forEach(r => {
    htmlRec += `<li>${r}</li>`;
  });
  htmlRec += '</ul>';
  recContabilidad.innerHTML = htmlRec;
});

btnPDFContabilidad.addEventListener('click', () => {
  printCV('cv-contabilidad');
});