// js/cv-empresa-mango.js

function printCV(cvId) {
  const cv = document.getElementById(cvId);
  if (!cv) return;

  const previous = document.querySelector('.print-target');
  if (previous) previous.classList.remove('print-target');

  cv.classList.add('print-target');
  window.print();
}

// LÓGICA PARA EMPRESA DE MANGO
const formMango = document.getElementById('form-mango');
const panelCVMango = document.getElementById('panel-cv-mango');
const btnGenerarMango = document.getElementById('btn-generar-mango');
const btnPDFMango = document.getElementById('btn-pdf-mango');
const recMango = document.getElementById('recomendaciones-mango');

btnGenerarMango.addEventListener('click', () => {
  const formData = new FormData(formMango);
  const datos = Object.fromEntries(formData.entries());

  const tipo = datos.tipo || 'profesional'; // profesional u operario

  // CABECERA
  document.getElementById('cv-nombre-mango').textContent =
    datos.nombre?.trim() || 'Nombre Apellido';

  const puestoDefault = tipo === 'operario'
    ? 'Operario de cosecha y selección de mango'
    : 'Puesto en empresa de mango';

  document.getElementById('cv-puesto-mango').textContent =
    datos.puesto?.trim() || puestoDefault;

  const ciudad = datos.ciudad?.trim();
  const tel = datos.telefono?.trim();
  const mail = datos.email?.trim();

  let contacto = [];
  if (ciudad) contacto.push(ciudad);
  if (tel) contacto.push(tel);
  if (mail) contacto.push(mail);

  document.getElementById('cv-contacto-mango').textContent =
    contacto.length ? contacto.join(' | ') : 'Ciudad, País | Teléfono | Email';

  // TEXTOS SEGÚN TIPO
  const perfilDefault = tipo === 'operario'
    ? 'Presenta brevemente tu experiencia o tus ganas de trabajar en cosecha, selección o embalaje de mango.'
    : 'Resume en 3–5 líneas tu experiencia en agroindustria de mango, producción, packing, exportación o control de calidad.';

  const expDefault = tipo === 'operario'
    ? 'Indica si has trabajado antes en campo, packing o fábricas, aunque sea por campañas o como peón.'
    : 'Describe tu experiencia en campo, packing, plantas de proceso, control de calidad o logística de exportación.';

  const logrosDefault = tipo === 'operario'
    ? 'Comenta logros como puntualidad, buen rendimiento, cumplimiento de metas diarias, buena asistencia y responsabilidad.'
    : 'Incluye logros como aumento de rendimiento, reducción de mermas, mejora de calidad de fruta o cumplimiento de auditorías y programas de exportación.';

  const habilidadesDefault = tipo === 'operario'
    ? 'Menciona habilidades como responsabilidad, trabajo en equipo, resistencia física, aprender rápido, cuidado del producto y cumplimiento de normas de seguridad.'
    : 'Menciona conocimientos en normas y sistemas de calidad (GlobalG.A.P, HACCP, BRC, BPM, trazabilidad) y habilidades de gestión de equipos o procesos.';

  const educacionDefault = tipo === 'operario'
    ? 'Indica tu nivel de estudios (por ejemplo, secundaria completa) y cualquier curso básico relacionado con industria o seguridad.'
    : 'Indica tu formación principal (carreras técnicas o universitarias) y cursos/diplomados en calidad, producción o exportación.';

  document.getElementById('cv-perfil-mango').textContent =
    datos.perfil?.trim() || perfilDefault;

  document.getElementById('cv-experiencia-mango').textContent =
    datos.experiencia?.trim() || expDefault;

  document.getElementById('cv-logros-mango').textContent =
    datos.logros?.trim() || logrosDefault;

  document.getElementById('cv-habilidades-mango').textContent =
    datos.habilidades?.trim() || habilidadesDefault;

  document.getElementById('cv-educacion-mango').textContent =
    datos.educacion?.trim() || educacionDefault;

  const cert = datos.certificaciones?.trim();
  const certSection = document.getElementById('cv-certificaciones-section-mango');
  const certText = document.getElementById('cv-certificaciones-mango');

  if (cert) {
    certText.textContent = cert;
    certSection.style.display = 'block';
  } else {
    certSection.style.display = 'none';
  }

  panelCVMango.classList.add('visible');

  // RECOMENDACIONES
  const recomendaciones = [];
  const perfilLen = (datos.perfil || '').trim().length;
  const expLen = (datos.experiencia || '').trim().length;
  const logrosLen = (datos.logros || '').trim().length;
  const habLen = (datos.habilidades || '').trim().length;

  if (!datos.perfil || perfilLen < 80) {
    recomendaciones.push('Escribe una presentación de al menos 3 líneas explicando quién eres y a qué tipo de puesto postulas en la empresa de mango.');
  }

  if (!datos.experiencia || expLen < 120) {
    recomendaciones.push('Detalla un poco más tu experiencia: en qué áreas trabajaste (cosecha, selección, packing, calidad, logística) y en cuántas campañas o temporadas.');
  }

  if (!datos.logros || logrosLen < 80) {
    recomendaciones.push('Agrega ejemplos concretos de buenos resultados: cumplimiento de metas diarias, reducción de mermas, mejores rendimientos, etc.');
  }

  if (!datos.habilidades || habLen < 60) {
    recomendaciones.push('Incluye habilidades importantes para el trabajo en agroindustria: responsabilidad, trabajo en equipo, cuidado del producto y respeto de normas de seguridad.');
  }

  if (!cert) {
    recomendaciones.push('Si tienes cursos o certificaciones en calidad, seguridad o normas agrícolas, añádelos. Si no, considera llevar alguno para destacar más.');
  }

  if (!mail) {
    recomendaciones.push('Incluye un correo profesional que revises con frecuencia para responder rápido a las empresas.');
  }

  if (!tel) {
    recomendaciones.push('Agrega un número de teléfono o WhatsApp para coordinar entrevistas rápidamente.');
  }

  if (!ciudad) {
    recomendaciones.push('Indica tu ciudad y país; en agroindustria es importante la cercanía a las zonas de producción y plantas.');
  }

  if (tipo === 'operario') {
    recomendaciones.push('Resalta tu disponibilidad para trabajar por campañas, en turnos rotativos o jornadas largas si es necesario.');
    recomendaciones.push('Si es posible, menciona referencias de supervisores o jefes anteriores que puedan hablar de tu responsabilidad y desempeño.');
  } else {
    recomendaciones.push('Destaca si has liderado equipos, coordinado turnos o gestionado indicadores de producción y calidad.');
    recomendaciones.push('Menciona si has participado en auditorías de certificaciones (GlobalG.A.P, HACCP, BRC) o implementación de mejoras en procesos.');
  }

  let htmlRec = '<ul>';
  recomendaciones.forEach(r => {
    htmlRec += `<li>${r}</li>`;
  });
  htmlRec += '</ul>';
  recMango.innerHTML = htmlRec;
});

btnPDFMango.addEventListener('click', () => {
  printCV('cv-mango');
});