# Aprén valencià

Web estàtica de materials per a aprendre valencià (persones nouvingudes, ESO i batxillerat).
HTML + CSS + una mica de JavaScript, **sense dependències ni pas de compilació**: es pot obrir
amb doble clic en `index.html` i es publica tal qual a qualsevol allotjament.

## Estructura

```
web/
├── index.html            Portada
├── nouvinguts.html       ┐
├── eso.html              ├ Pàgines de secció (es pinten des de js/recursos.js)
├── batxillerat.html      ┘
├── ens-enfonsem.html     Projecte transversal (plantilla per omplir)
├── quaderns-oral.html    Índex dels 14 PDF del Quadern de valencià oral
├── 404.html              Pàgina d'error
├── css/estil.css         Tot el disseny (mode clar i fosc automàtic)
├── js/recursos.js        ← LA LLISTA DE MATERIALS: l'únic fitxer que cal tocar
├── js/app.js             Pinta les targetes i el cercador
├── imatges/icona.svg
└── vo/                   ← ací han d'anar unitat_01_oral.pdf … unitat_14_oral.pdf
```

### Afegir un recurs

Obriu `js/recursos.js`, copieu un bloc `{ … }` i canvieu-ne els camps. Amb `seccio: "eso"` apareix a ESO;
amb `seccio: ["eso", "batxillerat"]` apareix a les dues; amb `seccio: "eines"` apareix al final de totes.

## Publicar-la (gratis i sense publicitat)

| Opció | Adreça resultant | Avantatges | Inconvenients |
|---|---|---|---|
| **GitHub Pages** | `josepgregori.github.io/aprenvalencia` | La més coneguda, domini propi gratuït amb HTTPS | Empresa privada (Microsoft) |
| **Codeberg Pages** | `josepgregori.codeberg.page/aprenvalencia` | Associació sense ànim de lucre europea, programari lliure | Comunitat més menuda; algun canvi de servidor en curs |
| **mural.uv.es/jogreso** | `mural.uv.es/jogreso` | Ja el teniu; només cal pujar fitxers per FTP/SFTP | Depén del compte de la UV; sense domini propi |

Cap de les tres mostra anuncis. Es pot publicar en més d'una alhora (per exemple, GitHub com a principal i mural.uv.es com a rèplica).

### GitHub Pages (pas a pas)

1. Creeu un repositori públic nou, p. ex. `aprenvalencia`.
2. Pugeu-hi el **contingut** de la carpeta `web/` (no la carpeta en si):
   ```bash
   cd web
   git init && git add . && git commit -m "Primera versió"
   git branch -M main
   git remote add origin https://github.com/USUARI/aprenvalencia.git
   git push -u origin main
   ```
3. Al repositori: **Settings → Pages → Source: Deploy from a branch → main / (root)**.
4. En un minut estarà a `https://USUARI.github.io/aprenvalencia/`.

### Codeberg Pages

1. Compte a codeberg.org i repositori públic `aprenvalencia`.
2. Pugeu el contingut de `web/` a una branca anomenada `pages`.
3. Estarà a `https://USUARI.codeberg.page/aprenvalencia/`.

### mural.uv.es

Copieu el contingut de `web/` a la carpeta pública del vostre compte (normalment `public_html`
o l'arrel que us indique el servei) amb un client SFTP com FileZilla o Cyberduck.

## Domini propi

- **.cat**: el domini de la comunitat lingüística; s'hi pot registrar qualsevol web amb contingut en la nostra llengua. Hi ha registradors amb el primer any molt barat, però la renovació sol costar uns 20–25 € l'any. Fixeu-vos sempre en el **preu de renovació**, no en el de l'oferta.
- Idees de nom: `aprenvalencia.cat`, `aprenvalencia.eu`, `ensenfonsem.cat`.
- Un cop comprat, a GitHub Pages: *Settings → Pages → Custom domain* i, al registrador, un registre CNAME `www → USUARI.github.io`.

## Pendent

- [x] PDF del Quadern de valencià oral rescatats de la Wayback Machine (original: `ua.es/spv/formacio/oralpdf/`).
- [ ] Omplir la pàgina **Ens enfonsem**.
- [ ] Afegir materials propis a ESO i Batxillerat.
- [ ] Revisar periòdicament els enllaços externs (les webs de la Generalitat canvien d'adreça sovint).
