/*
 * RECURSOS — l'únic fitxer que cal editar per afegir o canviar materials.
 *
 * Camps:
 *   seccio:     "nouvinguts" | "eso" | "batxillerat" | "eines"  (pot ser una llista)
 *   titol:      nom del recurs
 *   descripcio: una o dues frases
 *   nivell:     opcional (A1, A2, B1...)
 *   etiquetes:  opcional, llista de paraules clau
 *   enllacos:   [{ text, url }]  — el primer es mostra destacat
 *   font:       opcional { text, url } — web original
 *   nou:        opcional true → etiqueta «Nou»
 */
window.RECURSOS = [
  /* ---------- NOUVINGUTS ---------- */
  {
    seccio: "nouvinguts",
    titol: "Nouvinguts. Paraules i fets",
    descripcio: "Unitats didàctiques del Servei d'Educació Plurilingüe (GVA, 2021) per a l'alumnat que s'incorpora al sistema educatiu: identificació personal, escola, família, menjar, compres, ciutat… Inclou suport d'expressions i vocabulari d'ús freqüent.",
    nivell: "A1-A2",
    etiquetes: ["unitats didàctiques", "GVA", "PDF"],
    enllacos: [
      { text: "Totes les unitats", url: "https://ceice.gva.es/va/web/ensenanzas-en-lenguas/publicaciones" },
      { text: "Presentació", url: "https://ceice.gva.es/documents/162640785/162670705/01_PRESENTACIO_NOUVINGUTS_PARAULES_I_FETS+DEF+(2).pdf/1c45360a-a101-4dc0-b5f6-6bb8f607b9b3" },
      { text: "Unitat 1", url: "https://ceice.gva.es/documents/162640785/162670705/U1_IDENTIFICACIO_PERSONAL+xDEF.pdf/db5b20e5-6a09-419b-b5d2-4630ce772e52" }
    ],
    font: { text: "Publicacions GVA", url: "https://ceice.gva.es/va/web/ensenanzas-en-lenguas/publicaciones" }
  },
  {
    seccio: "nouvinguts",
    titol: "Guies de conversa amb el valencià",
    descripcio: "Guies bilingües de la Generalitat amb pronunciació figurada i vocabulari per a la vida quotidiana: casa, escola, centre de salut, treball, administració…",
    nivell: "A1",
    etiquetes: ["vocabulari", "famílies", "PDF"],
    enllacos: [
      { text: "Anglés", url: "https://presidencia.gva.es/documents/161863132/162994870/guia_angles.pdf/732db7e4-8b1b-4d77-8e95-d2d05d4123f8" },
      { text: "Francés", url: "https://presidencia.gva.es/documents/161863132/162994870/guia_frances.pdf/b0d8389e-4d39-43da-8879-ceb3d0f983ae" },
      { text: "Alemany", url: "https://presidencia.gva.es/documents/161863132/162994870/guia_alemany.pdf/17864db6-2520-4223-bb5f-f586c4f27a62" },
      { text: "Portugués", url: "https://presidencia.gva.es/documents/161863132/162994870/guia_portugues.pdf/f83a1aff-f471-4f73-976c-7492acc8d767" },
      { text: "Xinés", url: "https://presidencia.gva.es/documents/161863132/162994870/guia_xines.pdf/d3d91806-fb8e-4de1-965a-f39d8ac63122" }
    ],
    font: { text: "Generalitat Valenciana", url: "https://presidencia.gva.es/" }
  },
  {
    seccio: "nouvinguts",
    titol: "Quaderns del valencià oral",
    descripcio: "Materials d'autoaprenentatge de la Universitat d'Alacant: catorze unitats temàtiques (qui som, el cos, la casa, la cuina, el temps lliure…) amb el vocabulari i les expressions bàsiques per a parlar de cada tema.",
    nivell: "A2-B1",
    etiquetes: ["autoaprenentatge", "oral", "vocabulari", "PDF"],
    enllacos: [
      { text: "Veure les 14 unitats", url: "quaderns-oral.html" },
      { text: "Còpia arxivada", url: "https://web.archive.org/web/20120104060234/http://www.ua.es/spv/formacio/materials/materials_propis.html" }
    ],
    font: { text: "Universitat d'Alacant (SPV)", url: "https://web.archive.org/web/20120104060234/http://www.ua.es/spv/formacio/materials/materials_propis.html" }
  },
  {
    seccio: "nouvinguts",
    titol: "Comencem — dossier de l'alumnat",
    descripcio: "Conjunt d'activitats per a les primeres setmanes de l'alumnat nouvingut a l'aula d'acollida.",
    nivell: "A1",
    etiquetes: ["aula d'acollida", "activitats"],
    enllacos: [
      { text: "Obrir el dossier", url: "https://sites.google.com/site/materialdauladacollida/home/dossiers/comencem-dossier-alumnat" }
    ],
    nou: true
  },
  {
    seccio: "nouvinguts",
    titol: "Curs en vídeo: aprén valencià",
    descripcio: "Canal de vídeos de la Universitat Politècnica de València per a començar a aprendre la llengua.",
    nivell: "A1-A2",
    etiquetes: ["vídeo", "UPV"],
    enllacos: [
      { text: "Veure el curs", url: "https://media.upv.es/#/portal/channel/eda03965-19d6-1a4e-abaf-cf5b04ce1a6e" }
    ]
  },
  {
    seccio: "nouvinguts",
    titol: "Blog «Sense pèls en la llengua»",
    descripcio: "Recull d'explicacions i exercicis de llengua.",
    etiquetes: ["blog", "exercicis"],
    enllacos: [
      { text: "Anar al blog", url: "http://sensepelsenlallengua.blogspot.com/p/blog-page.html" }
    ]
  },
  {
    seccio: ["nouvinguts", "eso"],
    titol: "Recursos valencià — exercicis",
    descripcio: "Exercicis en línia classificats per temes de gramàtica i ortografia.",
    etiquetes: ["blog", "exercicis", "ortografia"],
    enllacos: [
      { text: "Exercicis", url: "http://recursosvalencia.blogspot.com/p/exercicis.html" }
    ]
  },

  /* ---------- BATXILLERAT ---------- */
  {
    seccio: "batxillerat",
    titol: "Blog «La bona lletra»",
    descripcio: "Recursos de llengua i literatura per a batxillerat.",
    etiquetes: ["blog", "literatura"],
    enllacos: [
      { text: "Anar al blog", url: "https://labonalletrablog.wordpress.com" }
    ]
  },

  /* ---------- EINES (es mostren a totes les seccions) ---------- */
  {
    seccio: "eines",
    titol: "Diccionari normatiu valencià (AVL)",
    descripcio: "El diccionari de referència de l'Acadèmia Valenciana de la Llengua.",
    etiquetes: ["diccionari", "normativa"],
    enllacos: [{ text: "Consultar", url: "https://www.avl.gva.es/lexicval/" }]
  },
  {
    seccio: "eines",
    titol: "Corrector de Softcatalà",
    descripcio: "Corrector ortogràfic i gramatical gratuït, amb opció de formes valencianes.",
    etiquetes: ["corrector", "escriptura"],
    enllacos: [{ text: "Corregir un text", url: "https://www.softcatala.org/corrector/" }]
  },
  {
    seccio: "eines",
    titol: "Conjugador de verbs",
    descripcio: "Totes les formes dels verbs, amb les variants valencianes.",
    etiquetes: ["verbs", "gramàtica"],
    enllacos: [{ text: "Conjugar", url: "https://www.softcatala.org/conjugador-de-verbs/" }]
  },
  {
    seccio: "eines",
    titol: "Paraulògic",
    descripcio: "Joc diari de paraules per a ampliar el lèxic.",
    etiquetes: ["joc", "lèxic"],
    enllacos: [{ text: "Jugar", url: "https://vilaweb.cat/paraulogic/" }]
  }
];
