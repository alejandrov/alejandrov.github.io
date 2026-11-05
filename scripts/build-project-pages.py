"""Regenerate shareable static project pages: python3 scripts/build-project-pages.py."""
from pathlib import Path
import json, html
root = Path(__file__).resolve().parents[1]
s = (root / 'script.js').read_text()
projects = json.loads(s[s.index('['):s.index('\n];')+2])
cases = json.loads((root / 'scripts/project-cases.json').read_text())
base = 'https://alejandrov.github.io/'
e = html.escape
for i, p in enumerate(projects):
    title = p['title'] + ' · Alejandro Villarroel'
    url = base + 'proyectos/' + p['slug'] + '/'
    description = p.get('solution', p['description'])
    image = base + p['image']
    case = cases.get(str(i))
    detail = ''
    if case:
        detail = '<section class="case-summary"><h2>El problema</h2><p>' + e(case['problem']) + '</p><h2>La solución</h2><p>' + e(case['solution']) + '</p></section>'
        steps = ''.join('<li><h3>' + e(step[0]) + '</h3><p>' + e(step[1]) + '</p></li>' for step in case['steps'])
        visual = (root / 'scripts/demos' / (p['slug'] + '.html')).read_text()
        detail += '<section class="walkthrough" aria-labelledby="walkthrough-title"><p class="mono">DEMO VISUAL ILUSTRATIVA · 18 SEGUNDOS</p><h2 id="walkthrough-title">Mira el flujo en acción</h2><p>Interfaz representativa con datos ficticios, basada en las funciones descritas del proyecto. No es una grabación del producto ni reproduce su interfaz exacta. No conecta sistemas ni realiza operaciones.</p>' + visual + '<div class="demo-navigation" hidden><button type="button" data-demo-step="0">1. ' + e(case['steps'][0][0]) + '</button><button type="button" data-demo-step="1">2. ' + e(case['steps'][1][0]) + '</button><button type="button" data-demo-step="2">3. ' + e(case['steps'][2][0]) + '</button></div><details class="demo-transcript"><summary>Leer la descripción del recorrido</summary><ol class="walkthrough-steps">' + steps + '</ol></details><div class="walkthrough-controls" hidden><button class="btn btn-primary" id="play-walkthrough">Iniciar recorrido</button><button class="text-link" id="pause-walkthrough" hidden>Pausar</button><button class="text-link" id="stop-walkthrough" hidden>Reiniciar</button><p id="walkthrough-status" role="status">También puedes leer los tres pasos a tu ritmo.</p></div></section>'
    markup = f'''<!DOCTYPE html>
<html lang="es"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="theme-color" content="#1f1f1f">
<title>{e(title)}</title><meta name="description" content="{e(description)}"><link rel="canonical" href="{url}">
<meta property="og:type" content="website"><meta property="og:locale" content="es_MX"><meta property="og:site_name" content="Alejandro Villarroel"><meta property="og:title" content="{e(title)}"><meta property="og:description" content="{e(description)}"><meta property="og:url" content="{url}"><meta property="og:image" content="{image}"><meta property="og:image:alt" content="Vista de {e(p['title'])}">
<meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="{e(title)}"><meta name="twitter:description" content="{e(description)}"><meta name="twitter:image" content="{image}">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&amp;family=Space+Mono:wght@400;700&amp;display=swap" rel="stylesheet"><link rel="icon" href="../../assets/favicon.svg"><link rel="stylesheet" href="../../styles.css"><script src="../../project-page.js" defer></script></head>
<body><a class="skip-link" href="#main">Saltar al contenido</a><header class="case-header container"><a class="logo" href="../../">alejandroVillarroel<span>_</span></a><a class="text-link" href="../../#projects">Todos los proyectos</a></header>
<main id="main" class="container project-page"><p class="mono">PROYECTO / {i+1:02d}</p><h1>{e(p['title'])}</h1><p class="project-lead">{e(p['description'])}</p><div class="project-tech">{''.join('<span>'+e(t)+'</span>' for t in p['tech'])}</div><img class="case-cover" src="../../{p['image']}" alt="Vista de {e(p['title'])}" width="1280" height="720">{detail}
<div class="case-actions"><a class="btn btn-primary" href="../../#contact">Cuéntame tu proyecto</a><a class="text-link" href="{e(p['url'])}" target="_blank" rel="noopener noreferrer">Explorar el sitio ↗</a><button class="text-link" id="copy-project" hidden>Copiar enlace del caso</button></div><p id="share-status" role="status"></p></main><footer class="container case-footer"><a href="../../#cases">← Volver al portafolio</a></footer></body></html>'''
    folder = root / 'proyectos' / p['slug']
    folder.mkdir(parents=True, exist_ok=True)
    (folder / 'index.html').write_text(markup)
print(f'Generated {len(projects)} project pages.')
