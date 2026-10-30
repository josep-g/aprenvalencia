/* Pinta els recursos de la secció indicada en <main data-seccio="..."> i activa el cercador. */
(function () {
  "use strict";

  var main = document.querySelector("[data-seccio]");
  if (!main || !window.RECURSOS) return;

  var seccio = main.getAttribute("data-seccio");
  var llista = document.getElementById("llista-recursos");
  var eines = document.getElementById("llista-eines");
  var cerca = document.getElementById("cerca");
  var recompte = document.getElementById("recompte");

  function teSeccio(r, s) {
    return Array.isArray(r.seccio) ? r.seccio.indexOf(s) !== -1 : r.seccio === s;
  }

  function el(etiqueta, classe, text) {
    var e = document.createElement(etiqueta);
    if (classe) e.className = classe;
    if (text) e.textContent = text;
    return e;
  }

  function esExtern(url) { return /^https?:\/\//.test(url); }

  function targeta(r) {
    var art = el("article", "recurs");
    var cap = el("div", "etiquetes");
    if (r.nivell) cap.appendChild(el("span", "etiqueta nivell", r.nivell));
    if (r.nou) cap.appendChild(el("span", "etiqueta nou", "Nou"));
    (r.etiquetes || []).forEach(function (t) { cap.appendChild(el("span", "etiqueta", t)); });
    if (cap.childNodes.length) art.appendChild(cap);

    art.appendChild(el("h3", null, r.titol));
    if (r.descripcio) art.appendChild(el("p", null, r.descripcio));

    var ul = el("ul", "enllacos");
    (r.enllacos || []).forEach(function (e, i) {
      var li = el("li");
      var a = el("a", i === 0 ? "principal" : null, e.text);
      a.href = e.url;
      if (esExtern(e.url)) { a.target = "_blank"; a.rel = "noopener"; }
      li.appendChild(a);
      ul.appendChild(li);
    });
    art.appendChild(ul);

    if (r.font) {
      var f = el("p", "font", "Font: ");
      var fa = el("a", null, r.font.text);
      fa.href = r.font.url; fa.target = "_blank"; fa.rel = "noopener";
      f.appendChild(fa);
      art.appendChild(f);
    }
    art.dataset.text = [r.titol, r.descripcio, r.nivell, (r.etiquetes || []).join(" ")]
      .join(" ").toLowerCase();
    return art;
  }

  function omple(contenidor, recursos, missatgeBuit) {
    if (!contenidor) return;
    contenidor.innerHTML = "";
    if (!recursos.length) {
      var b = el("p", "buit", missatgeBuit);
      contenidor.appendChild(b);
      return;
    }
    recursos.forEach(function (r) { contenidor.appendChild(targeta(r)); });
  }

  var propis = window.RECURSOS.filter(function (r) { return teSeccio(r, seccio); });
  var deEines = window.RECURSOS.filter(function (r) { return teSeccio(r, "eines"); });

  omple(llista, propis, "Estem preparant els materials d'aquesta secció. Mentrestant, trobareu eines útils just ací baix.");
  omple(eines, deEines, "");

  function normalitza(s) {
    return s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
  }

  function filtra() {
    var q = normalitza(cerca.value.trim());
    var visibles = 0, total = 0;
    document.querySelectorAll(".recurs").forEach(function (art) {
      total++;
      var ok = !q || normalitza(art.dataset.text).indexOf(q) !== -1;
      art.hidden = !ok;
      if (ok) visibles++;
    });
    if (recompte) recompte.textContent = q ? visibles + " de " + total + " recursos" : total + " recursos";
  }

  if (cerca) { cerca.addEventListener("input", filtra); filtra(); }
})();
