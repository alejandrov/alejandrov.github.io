'use strict';
// Project content preserved from the original portfolio.
const projects = [
    {
        "title": "Aqua Vivant",
        "description": "Plataforma inmobiliaria para explorar propiedades, gestionar solicitudes de contacto y centralizar la experiencia comercial con automatización, CRM y asistencia basada en IA.",
        "impact": "Impacto: acelera la captación de leads y ordena el seguimiento comercial.",
        "image": "assets/aqua-vivant-card.jpg",
        "url": "https://ia.aquavivant.com/",
        "tech": [
            "React",
            "Material UI",
            "CRM",
            "IA"
        ]
    },
    {
        "title": "Palante Ganado",
        "description": "Plataforma integral para la administración digital de ganado en ranchos. Permite el seguimiento en tiempo real del inventario, registro de movimientos y generación de reportes detallados para optimizar la gestión ganadera.",
        "impact": "Impacto: convierte inventario, movimientos y reportes en una operación trazable.",
        "image": "assets/palanteganado-card.jpg",
        "url": "https://palanteganado.com/",
        "tech": [
            "React",
            "Node.js",
            "MongoDB",
            "Stripe"
        ]
    },
    {
        "title": "Ventanilla Digital",
        "description": "Plataforma innovadora para la creación y gestión de trámites gubernamentales en línea. Facilita el acceso a servicios públicos, reduce tiempos de espera y mejora la eficiencia en procesos administrativos.",
        "impact": "Impacto: reduce fricción ciudadana y digitaliza procesos de atención pública.",
        "image": "assets/ventanilla-card.jpg",
        "url": "http://cancun-digital.mx/",
        "tech": [
            "Vue.js",
            "Express",
            "PostgreSQL"
        ]
    },
    {
        "title": "Ventanilla Digital Monterrey",
        "description": "Nueva versión de la plataforma para gestión digital de trámites municipales, con automatización, seguimiento de solicitudes y herramientas de atención ciudadana impulsadas por IA.",
        "impact": "Impacto: moderniza trámites municipales con asistencia inteligente y autoservicio.",
        "image": "assets/ventanilla-monterrey-card.jpg",
        "url": "https://ventanilladigital.monterrey.gob.mx/",
        "tech": [
            "React",
            "IA",
            "Gobierno Digital",
            "Automatización"
        ]
    },
    {
        "title": "Sistema MatIAs",
        "description": "Bot inteligente para WhatsApp con integración de Gemini para respuestas automáticas, procesamiento de lenguaje natural y automatización de procesos de negocio.",
        "impact": "Impacto: atiende conversaciones frecuentes sin depender siempre de un operador.",
        "image": "assets/matias-card.jpg",
        "url": "http://matias.gobierno-digital.mx/",
        "tech": [
            "Node.js",
            "Gemini API",
            "WhatsApp API",
            "Socket.io",
            "MongoDB"
        ]
    },
    {
        "title": "Garner System 3.0",
        "description": "Nueva versión del sistema para planificación, priorización y entrega de resultados con IA. Integra seguimiento operativo, tableros de control y flujos de trabajo para gobiernos municipales.",
        "impact": "Impacto: da visibilidad ejecutiva a prioridades, avances y operación diaria.",
        "image": "assets/garner-ia-card.jpg",
        "url": "https://monterrey.garner-ia.com/",
        "tech": [
            "React",
            "IA",
            "Dashboards",
            "Gobierno Digital"
        ]
    },
    {
        "title": "Agentecitas",
        "description": "Agente conversacional para WhatsApp que automatiza la atención, agenda citas, gestiona servicios y centraliza el seguimiento operativo de negocios con asistencia inteligente.",
        "impact": "Impacto: agenda y responde clientes 24/7 sin saturar al equipo humano.",
        "image": "assets/agentecitas-card.jpg",
        "url": "https://agentecitas.up.railway.app/",
        "tech": [
            "React",
            "WhatsApp",
            "IA",
            "CRM"
        ]
    },
    {
        "title": "Aguacatin",
        "description": "Plataforma innovadora para conectar distribuidores de pañales, permitiendo comparar precios y ofertas en tiempo real. Facilita la distribución eficiente y el acceso a mejores oportunidades de negocio.",
        "impact": "Impacto: facilita comparación de ofertas y mejora decisiones de compra.",
        "image": "assets/aguacatin-card.jpg",
        "url": "https://aguacatin.com/",
        "tech": [
            "React",
            "Node.js",
            "MongoDB",
            "Express"
        ]
    }
];
(() => {
    const $ = (selector, root = document) => root.querySelector(selector);
    const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let motionPaused = reducedMotion.matches;
    let toastTimer;
    function toast(message) {
        const element = $('.toast');
        clearTimeout(toastTimer);
        element.textContent = message;
        element.hidden = false;
        toastTimer = setTimeout(() => { element.hidden = true; }, 4000);
    }
    function syncMotion() {
        document.documentElement.classList.toggle('motion-paused', motionPaused);
    }
    syncMotion();
    reducedMotion.addEventListener('change', event => { motionPaused = event.matches; syncMotion(); });
    $('#year').textContent = new Date().getFullYear();

    // Navigation and section progress.
    const menu = $('.nav-menu');
    const menuToggle = $('.menu-toggle');
    const setMenu = (open) => {
        menu.classList.toggle('open', open);
        menuToggle.setAttribute('aria-expanded', String(open));
        menuToggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
    };
    menuToggle.addEventListener('click', () => setMenu(!menu.classList.contains('open')));
    $$('a[href^="#"]').forEach(link => link.addEventListener('click', () => setMenu(false)));
    document.addEventListener('click', event => { if (!event.target.closest('.nav')) setMenu(false); });
    document.addEventListener('keydown', event => { if (event.key === 'Escape') setMenu(false); });
    window.matchMedia('(min-width: 851px)').addEventListener('change', event => { if (event.matches) setMenu(false); });
    let scrollTick = false;
    function updateScroll() {
        const max = document.documentElement.scrollHeight - innerHeight;
        document.documentElement.style.setProperty('--progress', `${max > 0 ? (scrollY / max) * 100 : 0}%`);
        const section = $$('main section[id]').filter(item => item.getBoundingClientRect().top < 180).pop();
        $$('.nav-menu a').forEach(link => link.classList.toggle('active', !!section && link.hash === `#${section.id}`));
        scrollTick = false;
    }
    window.addEventListener('scroll', () => { if (!scrollTick) { scrollTick = true; requestAnimationFrame(updateScroll); } }, { passive: true });
    updateScroll();

    // Filtering keeps every project accessible in the HTML without JavaScript.
    const cards = $$('.project-card');
    $$('.filters button').forEach(button => button.addEventListener('click', () => {
        const filter = button.dataset.filter;
        $$('.filters button').forEach(item => {
            const active = item === button;
            item.classList.toggle('active', active);
            item.setAttribute('aria-pressed', String(active));
        });
        let count = 0;
        cards.forEach(card => {
            card.hidden = filter !== 'all' && !card.dataset.category.split(' ').includes(filter);
            if (!card.hidden) count++;
        });
        $('.project-count').textContent = `MOSTRANDO ${String(count).padStart(2, '0')} / 08`;
        updateScroll();
    }));

    // Native dialogs provide focus trapping, Escape and focus restoration.
    const projectDialog = $('#project-dialog');
    const escapeHTML = value => value.replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
    function openProject(index) {
        const project = projects[index];
        if (!project) return;
        $('#project-dialog-body').innerHTML = `<img src="${project.image}" alt="Vista de ${escapeHTML(project.title)}" width="900" height="500"><div class="dialog-content"><h2 id="project-dialog-title">${escapeHTML(project.title)}</h2><p>${escapeHTML(project.description)}</p><p class="dialog-impact">${escapeHTML(project.impact)}</p><div class="project-tech">${project.tech.map(tech => `<span>${escapeHTML(tech)}</span>`).join('')}</div><a class="btn btn-primary" href="${project.url}" target="_blank" rel="noopener noreferrer">Explorar el sitio</a></div>`;
        projectDialog.showModal();
    }
    $$('[data-open-project]').forEach(button => button.addEventListener('click', () => openProject(Number(button.dataset.openProject))));
    $$('dialog').forEach(dialog => {
        $('.dialog-close', dialog).addEventListener('click', () => dialog.close());
        dialog.addEventListener('click', event => {
            if (event.target !== dialog) return;
            const box = dialog.getBoundingClientRect();
            if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) dialog.close();
        });
    });

    // A searchable command palette: Ctrl/Command K, arrows, Enter, Escape.
    const commandDialog = $('#command-dialog');
    const commandInput = $('#command-search');
    const commands = [
        { title: 'Inicio', type: 'SECCIÓN', target: '#home' },
        { title: 'Proceso de desarrollo · de tu idea a un sistema', type: 'SECCIÓN', target: '#process' },
        { title: 'Proyectos profesionales', type: 'SECCIÓN', target: '#projects' },
        { title: 'Sobre Alejandro', type: 'SECCIÓN', target: '#about' },
        { title: 'Servicios · desarrollo y consultoría', type: 'SECCIÓN', target: '#services' },
        { title: 'Laboratorio de agentes IA', type: 'LAB', target: '#lab' },
        { title: 'Stack técnico · tecnologías', type: 'SECCIÓN', target: '#skills' },
        { title: 'Experiencia profesional', type: 'SECCIÓN', target: '#experience' },
        { title: 'Contacto · iniciar un proyecto', type: 'SECCIÓN', target: '#contact' },
        ...projects.map((project, index) => ({ title: project.title, type: 'PROYECTO', index, keywords: project.tech.join(' ') + ' ' + project.description })),
        ...$$('[data-service]').map(item => ({ title: item.dataset.service, type: 'SERVICIO', target: '#contact', service: item.dataset.service }))
    ];
    let selectedResult = 0;
    let filteredCommands = commands;
    const normalize = value => value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    function renderCommands() {
        const query = normalize(commandInput.value.trim());
        filteredCommands = commands.filter(item => normalize(`${item.title} ${item.keywords || ''}`).includes(query));
        selectedResult = 0;
        const results = $('#command-results');
        results.replaceChildren();
        if (!filteredCommands.length) {
            const empty = document.createElement('p');
            empty.className = 'command-empty';
            empty.textContent = 'No hay coincidencias. Prueba con “IA”, “React” o “contacto”.';
            results.append(empty);
        }
        filteredCommands.forEach((command, index) => {
            const button = document.createElement('button');
            button.className = 'command-result' + (index === 0 ? ' selected' : '');
            button.innerHTML = `<small>${command.type}</small><span>${escapeHTML(command.title)}</span>`;
            button.addEventListener('click', () => executeCommand(command));
            results.append(button);
        });
    }
    function executeCommand(command) {
        if (!command) return;
        commandDialog.close();
        if (typeof command.index === 'number') openProject(command.index);
        else {
            if (command.service) prefillService(command.service);
            $(command.target).scrollIntoView({ behavior: motionPaused ? 'instant' : 'smooth' });
        }
    }
    function openCommands() {
        if (commandDialog.open) { commandDialog.close(); return; }
        if (projectDialog.open) projectDialog.close();
        commandInput.value = '';
        renderCommands();
        commandDialog.showModal();
        commandInput.focus();
    }
    $('.command-trigger').addEventListener('click', openCommands);
    commandInput.addEventListener('input', renderCommands);
    commandDialog.addEventListener('keydown', event => {
        if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
            event.preventDefault();
            if (!filteredCommands.length) return;
            selectedResult = (selectedResult + (event.key === 'ArrowDown' ? 1 : -1) + filteredCommands.length) % filteredCommands.length;
            const results = $$('.command-result');
            results.forEach((item, index) => item.classList.toggle('selected', index === selectedResult));
            results[selectedResult].scrollIntoView({ block: 'nearest' });
        } else if (event.key === 'Enter' && event.target === commandInput) {
            event.preventDefault();
            executeCommand(filteredCommands[selectedResult]);
        }
    });
    document.addEventListener('keydown', event => {
        if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') { event.preventDefault(); openCommands(); }
    });

    // A transparent, deterministic agent demo. No API and no claim of live AI.
    const missions = {
        appointments: {
            input: 'Hola, ¿tienen una cita disponible para mañana?',
            explanation: 'Identifico la intención de agendar, consulto los horarios disponibles y propongo opciones antes de confirmar la cita.',
            logs: ['> intención detectada: agendar_cita', '> consultando calendario de ejemplo…', '> opciones encontradas · esperando confirmación'],
            output: 'En este ejemplo hay espacio a las 10:00 y a las 16:30. ¿Cuál prefieres? La cita se registra solo después de tu confirmación.'
        },
        government: {
            input: '¿Qué necesito para solicitar una licencia de funcionamiento?',
            explanation: 'Reconozco el trámite, consulto una base de requisitos y organizo los siguientes pasos para la persona solicitante.',
            logs: ['> intención detectada: consultar_trámite', '> consultando catálogo de ejemplo…', '> guía preparada · validación humana disponible'],
            output: 'Te mostraría los requisitos del catálogo municipal y el enlace de solicitud. Si tu caso requiere revisión, lo canalizaría al área correspondiente. Los requisitos dependen del municipio.'
        },
        leads: {
            input: 'Busco una propiedad para invertir. Mi presupuesto es de 2 millones.',
            explanation: 'Extraigo necesidades y presupuesto, consulto el inventario y preparo el contexto para que el equipo comercial continúe.',
            logs: ['> intención detectada: inversión_inmobiliaria', '> conectando inventario y CRM de ejemplo…', '> lead estructurado · listo para seguimiento'],
            output: 'Anoto tu presupuesto de $2 millones y el objetivo de inversión. ¿En qué zona buscas? Con ese dato puedo filtrar opciones y preparar el seguimiento con un asesor.'
        }
    };
    let missionKey = 'appointments';
    let demoGeneration = 0;
    const runButton = $('#run-demo');
    function selectMission(key) {
        missionKey = key;
        demoGeneration++;
        const mission = missions[key];
        $$('.lab-options button').forEach(button => {
            const active = button.dataset.mission === key;
            button.classList.toggle('active', active);
            button.setAttribute('aria-pressed', String(active));
        });
        $('#lab-input').textContent = mission.input;
        $('#lab-output').textContent = mission.explanation;
        $('#lab-log').textContent = '> flujo listo para ejecutar_';
        $$('.pipeline-node').forEach(node => node.classList.remove('running', 'done'));
        runButton.disabled = false;
        runButton.innerHTML = 'Ejecutar simulación <span aria-hidden="true">▶</span>';
    }
    $$('.lab-options button').forEach(button => button.addEventListener('click', () => selectMission(button.dataset.mission)));
    runButton.addEventListener('click', async () => {
        const generation = ++demoGeneration;
        const mission = missions[missionKey];
        const nodes = $$('.pipeline-node');
        runButton.disabled = true;
        runButton.textContent = 'Ejecutando…';
        $('#lab-output').textContent = 'Procesando el flujo de ejemplo…';
        $('#lab-log').textContent = '';
        nodes.forEach(node => node.classList.remove('running', 'done'));
        for (let i = 0; i < nodes.length; i++) {
            if (generation !== demoGeneration) return;
            nodes[i].classList.add('running');
            $('#lab-log').textContent = mission.logs.slice(0, i + 1).join('\n');
            await new Promise(resolve => setTimeout(resolve, motionPaused ? 60 : 650));
            if (generation !== demoGeneration) return;
            nodes[i].classList.remove('running');
            nodes[i].classList.add('done');
        }
        $('#lab-output').textContent = mission.output;
        runButton.disabled = false;
        runButton.innerHTML = 'Repetir simulación <span aria-hidden="true">↻</span>';
    });

    // Contact preserves the existing Formspree destination; no submissions on load.
    function prefillService(service) {
        const message = $('#message');
        if (!message.value.trim()) message.value = `Me interesa ${service.toLowerCase()}. Mi proyecto consiste en: `;
    }
    $('#copy-email').addEventListener('click', async () => {
        try { await navigator.clipboard.writeText('alejandrovillarroel@gmail.com'); toast('Email copiado. ¡Hablemos!'); }
        catch { toast('Mi email: alejandrovillarroel@gmail.com'); }
    });
    const form = $('.contact-form');
    form.addEventListener('submit', async event => {
        event.preventDefault();
        const status = $('.form-status');
        const button = $('button[type="submit"]', form);
        const name = $('#name');
        const message = $('#message');
        status.className = 'form-status';
        if (!name.value.trim() || !message.value.trim()) {
            status.textContent = 'Completa tu nombre y describe tu proyecto.';
            status.classList.add('error');
            (!name.value.trim() ? name : message).focus();
            return;
        }
        if (button.disabled) return;
        button.disabled = true;
        button.textContent = 'Enviando tu idea…';
        status.textContent = 'Enviando mensaje…';
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 20000);
        try {
            const response = await fetch(form.action, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' }, signal: controller.signal });
            if (!response.ok) throw new Error('Submission failed');
            form.reset();
            status.textContent = '¡Mensaje enviado! Te contactaré pronto para hablar de tu proyecto.';
            status.classList.add('success');
        } catch {
            status.textContent = 'No se pudo enviar. Tu mensaje sigue aquí; intenta de nuevo o escríbeme a alejandrovillarroel@gmail.com.';
            status.classList.add('error');
        } finally {
            clearTimeout(timeout);
            button.disabled = false;
            button.innerHTML = 'Hablemos de tu proyecto';
        }
    });
})();
