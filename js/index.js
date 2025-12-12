// ====== NAVEGACIÓN ENTRE "PÁGINAS" (SECCIONES) ======
const navButtons = document.querySelectorAll('.nav-btn');
const pages = document.querySelectorAll('.page');

navButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const targetId = btn.getAttribute('data-page');

    pages.forEach(page => page.classList.remove('active'));

    const targetPage = document.getElementById(targetId) || document.getElementById('welcome');
    targetPage.classList.add('active');
  });
});

// ====== FUNCIÓN GENÉRICA PARA IMPRIMIR UN CV ======
function printCV(cvId) {
  const cv = document.getElementById(cvId);
  if (!cv) return;

  // Quitamos cualquier print-target anterior
  const previous = document.querySelector('.print-target');
  if (previous) previous.classList.remove('print-target');

  // Marcamos este CV como objetivo de impresión
  cv.classList.add('print-target');

  window.print();
}

// ====== LÓGICA PARA ING. DE SISTEMAS ======
const formSistemas = document.getElementById('form-ing-sistemas');
const panelCVSistemas = document.getElementById('panel-cv-sistemas');
const btnGenerarSistemas = document.getElementById('btn-generar-sistemas');
const btnPDFSistemas = document.getElementById('btn-pdf-sistemas');
const recSistemas = document.getElementById('recomendaciones-sistemas');

btnGenerarSistemas.addEventListener('click', () => {
  const formData = new FormData(formSistemas);
  const datos = Object.fromEntries(formData.entries());

  document.getElementById('cv-nombre-sistemas').textContent =
    datos.nombre?.trim() || 'Nombre Apellido';

  document.getElementById('cv-puesto-sistemas').textContent =
    datos.puesto?.trim() || 'Ingeniero de Sistemas';

  const ciudad = datos.ciudad?.trim();
  const tel = datos.telefono?.trim();
  const mail = datos.email?.trim();

  let contacto = [];
  if (ciudad) contacto.push(ciudad);
  if (tel) contacto.push(tel);
  if (mail) contacto.push(mail);

  document.getElementById('cv-contacto-sistemas').textContent =
    contacto.length ? contacto.join(' | ') : 'Ciudad, País | Teléfono | Email';

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
  const certSection = document.getElementById('cv-certificaciones-section-sistemas');
  const certText = document.getElementById('cv-certificaciones-sistemas');

  if (cert) {
    certText.textContent = cert;
    certSection.style.display = 'block';
  } else {
    certSection.style.display = 'none';
  }

  panelCVSistemas.classList.add('visible');

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

// ====== LÓGICA PARA ING. INDUSTRIAL ======
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

// ====== LÓGICA PARA CONTABILIDAD GENERAL ======
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
  const certSection = document.getElementById('cv-certificaciones-section-contabilidad');
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

// ====== LÓGICA PARA EMPRESA DE MANGO ======
const formMango = document.getElementById('form-mango');
const panelCVMango = document.getElementById('panel-cv-mango');
const btnGenerarMango = document.getElementById('btn-generar-mango');
const btnPDFMango = document.getElementById('btn-pdf-mango');
const recMango = document.getElementById('recomendaciones-mango');

btnGenerarMango.addEventListener('click', () => {
  const formData = new FormData(formMango);
  const datos = Object.fromEntries(formData.entries());

  document.getElementById('cv-nombre-mango').textContent =
    datos.nombre?.trim() || 'Nombre Apellido';

  document.getElementById('cv-puesto-mango').textContent =
    datos.puesto?.trim() || 'Puesto en empresa de mango';

  const ciudad = datos.ciudad?.trim();
  const tel = datos.telefono?.trim();
  const mail = datos.email?.trim();

  let contacto = [];
  if (ciudad) contacto.push(ciudad);
  if (tel) contacto.push(tel);
  if (mail) contacto.push(mail);

  document.getElementById('cv-contacto-mango').textContent =
    contacto.length ? contacto.join(' | ') : 'Ciudad, País | Teléfono | Email';

  document.getElementById('cv-perfil-mango').textContent =
    datos.perfil?.trim() || 'Resume tu experiencia en agroindustria de mango, producción, packing, exportación o calidad.';

  document.getElementById('cv-experiencia-mango').textContent =
    datos.experiencia?.trim() || 'Describe tu experiencia en campo, packing, plantas de proceso, control de calidad o logística de exportación.';

  document.getElementById('cv-logros-mango').textContent =
    datos.logros?.trim() || 'Incluye logros como aumento de rendimiento, reducción de mermas, mejora de calidad o cumplimiento de programas de exportación.';

  document.getElementById('cv-habilidades-mango').textContent =
    datos.habilidades?.trim() || 'Menciona conocimientos en normas y sistemas de calidad (GlobalG.A.P, HACCP, BRC, BPM, trazabilidad, etc.).';

  document.getElementById('cv-educacion-mango').textContent =
    datos.educacion?.trim() || 'Indica tu formación principal y cursos relacionados con agroindustria, calidad o exportación.';

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

  const recomendaciones = [];
  const perfilLen = (datos.perfil || '').trim().length;
  const expLen = (datos.experiencia || '').trim().length;
  const logrosLen = (datos.logros || '').trim().length;
  const habLen = (datos.habilidades || '').trim().length;

  if (!datos.perfil || perfilLen < 120) {
    recomendaciones.push('Amplía tu perfil explicando en qué parte de la cadena del mango te especializas (campo, packing, calidad, logística).');
  }

  if (!datos.experiencia || expLen < 200) {
    recomendaciones.push('Detalla más tu experiencia: número de campañas, tipo de empresas, volumen de fruta manejada, mercados a los que exportaste.');
  }

  if (!datos.logros || logrosLen < 100) {
    recomendaciones.push('Incluye logros concretos: reducción de reclamos, mejora de porcentaje de fruta exportable, cumplimiento de auditorías, etc.');
  }

  if (!datos.habilidades || habLen < 60) {
    recomendaciones.push('Agrega conocimientos en normas de calidad (GlobalG.A.P, HACCP, BRC) y herramientas de trazabilidad e inocuidad.');
  }

  if (!cert) {
    recomendaciones.push('Si tienes cursos o certificaciones en inocuidad, calidad o normas agrícolas, añádelos. Si no, considera obtener alguno.');
  }

  if (!mail) {
    recomendaciones.push('Incluye un correo profesional para facilitar el contacto con empresas agroexportadoras.');
  }

  if (!tel) {
    recomendaciones.push('Añade un número de teléfono o WhatsApp para coordinar entrevistas rápidamente.');
  }

  if (!ciudad) {
    recomendaciones.push('Indica tu ciudad y país, importante en agroindustria por la cercanía a zonas de producción.');
  }

  recomendaciones.push('Adapta tu CV al tipo de puesto (producción, calidad, logística, exportaciones) resaltando logros relacionados con ese enfoque.');

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

// ====== LÓGICA PARA EMPRESA AVÍCOLA ======
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