const NAV_TREE = [
    {
        name: "Planning & Setup",
        children: [
            { id: "table-of-contents", title: "Table of Contents" },
            { id: "choosing-your-os-getting-started", title: "Choosing Your OS" },
            { id: "pangolin-the-better-cloudflare-tunnels-replacement", title: "Pangolin Integration" }
        ]
    },
    {
        name: "Hardware Roadmap",
        children: [
            { id: "hardware-roadmap", title: "Hardware Roadmap" },
            { id: "buying-the-tower-what-to-look-for", title: "Buying the Tower" },
            { id: "buying-the-nas", title: "Buying the NAS" },
            { id: "mac-mini-mac-studio-as-storage-vs-nas", title: "Mac Mini / Studio" },
            { id: "do-you-need-a-network-switch", title: "Managed Switches" },
            { id: "hardware-accessories-worth-getting", title: "Must-Have Accessories" },
            { id: "hardware-deal-finder-automated-scraping-for-good-finds", title: "Hardware Deal Finder" }
        ]
    },
    {
        name: "Services & Infra",
        children: [
            { id: "dev-environments-localhost-vs-build-vs-prod", title: "Dev Environments" },
            { id: "important-considerations", title: "Core Gotchas" },
            { id: "lancache-game-download-cache-for-instant-updates", title: "LanCache Setup" },
            { id: "stage-1-day-one-services", title: "Stage 1 Services" },
            { id: "discord-bot-hub", title: "Personal Bot Hub" },
            { id: "stage-2-after-learning-docker-networking", title: "Stage 2 Services" },
            { id: "stage-3-after-getting-a-nas", title: "Stage 3 Services" },
            { id: "stage-4-after-a-tower-workstation", title: "Stage 4 Services" },
            { 
                name: "Stage 5 & Future", 
                children: [
                    { id: "stage-5-far-future-family-spreads-across-multiple-floors", title: "Future Roadmap" },
                    { id: "network-architecture-at-stage-5", title: "VLAN Architecture" }
                ]
            },
            { id: "what-to-skip-and-why", title: "What to Skip" },
            { id: "docker-container-count-what-to-realistically-expect", title: "Container Count" }
        ]
    },
    {
        name: "AI & LLM Hub",
        children: [
            { id: "llm-hardware-gpu-costs-practical-alternatives-and-looking-forward", title: "GPU & Hardware" },
            { id: "llm-hardware-detailed-reality-check", title: "LLM Reality Check" },
            {
                name: "Hermes Agent",
                children: [
                    { id: "hermes-agent-your-persistent-ai-team-member", title: "Hermes Core" },
                    { id: "hermes-going-deeper", title: "Hermes: Going Deeper" },
                    { id: "hermes-vs-automation-tools-what-s-actually-different", title: "Hermes vs n8n" },
                    { id: "hermes-travel-planning", title: "Travel Planning" },
                    { id: "reddit-automation-hub", title: "Reddit Automation" }
                ]
            },
            { id: "ai-enhanced-notes-ask-ai-to-refine-or-template", title: "AI-Enhanced Notes" },
            { id: "second-brain-video-articles-and-ai-knowledge-capture", title: "Second Brain (Karpathy)" },
            { id: "chinese-i18n-automating-accurate-translations-across-all-tools", title: "Chinese i18n" },
            { id: "language-learning-with-your-homelab", title: "Language Learning" }
        ]
    },
    {
        name: "Reference & Tools",
        children: [
            { id: "personal-knowledge-base-learning-tracker", title: "Learning Tracker" },
            { 
                name: "Performance & Testing",
                children: [
                    { id: "wi-fi-heatmap-and-speed-testing", title: "Wi-Fi Heatmaps" },
                    { id: "blueprint-am-ai-design", title: "Blueprint.am (AI Design)" },
                    { id: "multi-floor-speed-testing", title: "Speed Testing" }
                ]
            },
            { id: "networking-fundamentals-what-you-actually-need-to-know", title: "Networking 101" },
            { id: "port-and-service-reference", title: "Port Reference" },
            { id: "security-hardening-checklist", title: "Security Checklist" },
            { id: "backup-testing-restore-drills", title: "Backup Drills" },
            { id: "troubleshooting-what-to-check-first", title: "Troubleshooting Tree" },
            { id: "interview-prep-practice-environment", title: "Interview Prep" },
            { id: "energy-monitoring-and-cost-dashboard", title: "Energy Dashboard" },
            { id: "subscription-tracker-beyond-manual-entry", title: "Subscription Tracker" },
            { id: "dns-privacy-dns-over-https-and-dns-over-tls", title: "DNS Privacy" },
            { id: "git-workflow-for-homelab-configs", title: "Git Config Workflow" },
            { id: "what-not-to-self-host", title: "What NOT to host" },
            { id: "reference-links", title: "Reference Links" }
        ]
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const toc = document.getElementById('toc');
    const container = document.getElementById('sections-container');
    const sidebarHeader = document.querySelector('#sidebar header');
    
    // Theme Toggle
    const themeBtn = document.createElement('button');
    themeBtn.className = 'theme-toggle';
    const updateThemeBtn = (theme) => {
        themeBtn.innerHTML = theme === 'dark' ? '☀️' : '🌙';
        themeBtn.title = theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode';
    };
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeBtn(savedTheme);
    themeBtn.onclick = () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeBtn(newTheme);
    };
    sidebarHeader.appendChild(themeBtn);

    const sectionsMap = {};
    PLAN_DATA.forEach(section => sectionsMap[section.id] = section);

    function createNavNode(item, level = 0) {
        const li = document.createElement('li');
        li.className = item.children ? 'nav-group' : 'nav-leaf';
        if (level > 0) li.classList.add('nested');

        if (item.children) {
            const title = document.createElement('div');
            title.className = 'group-title';
            title.innerHTML = `${item.name} <span class="toggle-icon">▸</span>`;
            title.onclick = (e) => {
                e.stopPropagation();
                const isOpen = li.classList.toggle('open');
                title.querySelector('.toggle-icon').textContent = isOpen ? '▾' : '▸';
            };
            li.appendChild(title);

            const ul = document.createElement('ul');
            ul.className = 'nav-children';
            item.children.forEach(child => ul.appendChild(createNavNode(child, level + 1)));
            li.appendChild(ul);
        } else {
            const a = document.createElement('a');
            a.href = `#${item.id}`;
            a.textContent = item.title || (sectionsMap[item.id] ? sectionsMap[item.id].title : item.id);
            a.onclick = (e) => {
                e.preventDefault();
                const target = document.getElementById(item.id);
                if (target) target.scrollIntoView({ behavior: 'smooth' });
            };
            li.appendChild(a);
        }
        return li;
    }

    const navRoot = document.createElement('ul');
    navRoot.className = 'nav-root';
    NAV_TREE.forEach(node => navRoot.appendChild(createNavNode(node)));
    toc.appendChild(navRoot);

    // Render Content
    PLAN_DATA.forEach(section => {
        const sectionEl = document.createElement('section');
        sectionEl.id = section.id;
        const h1 = document.createElement('h1');
        h1.textContent = section.title;
        sectionEl.appendChild(h1);
        
        section.elements.forEach(el => {
            let elNode;
            switch (el.type) {
                case 'p':
                    elNode = document.createElement('p');
                    elNode.innerHTML = el.content;
                    break;
                case 'h2':
                case 'h3':
                    elNode = document.createElement(el.type);
                    elNode.innerHTML = el.content;
                    break;
                case 'table':
                    elNode = document.createElement('table');
                    if (el.headers && el.headers.length) {
                        const thead = document.createElement('thead');
                        const trH = document.createElement('tr');
                        el.headers.forEach(h => {
                            const th = document.createElement('th');
                            th.textContent = h;
                            trH.appendChild(th);
                        });
                        thead.appendChild(trH);
                        elNode.appendChild(thead);
                    }
                    const tbody = document.createElement('tbody');
                    el.rows.forEach(row => {
                        const tr = document.createElement('tr');
                        
                        // Row Severity Logic - Only check column if header matches Severity or Risk
                        let rowSeverity = null;
                        const severityColIdx = el.headers ? (() => {
                            const lowHeaders = el.headers.map(h => h.toLowerCase());
                            const sevIdx = lowHeaders.findIndex(h => h.includes('severity'));
                            if (sevIdx !== -1) return sevIdx;
                            return lowHeaders.findIndex(h => h.includes('risk'));
                        })() : -1;

                        if (severityColIdx !== -1) {
                            const cell = row[severityColIdx];
                            if (typeof cell === 'string') {
                                const lower = cell.toLowerCase();
                                // Keywords for Critical/High
                                if (lower.includes('8/10') || lower.includes('9/10') || lower.includes('10/10') || 
                                    lower.includes('critical') || lower.includes('high')) {
                                    rowSeverity = 'severity-critical';
                                } 
                                // Keywords for Warning/Medium
                                else if (lower.includes('5/10') || lower.includes('6/10') || lower.includes('7/10') || 
                                         lower.includes('warning') || lower.includes('medium')) {
                                    rowSeverity = 'severity-warning';
                                }
                            }
                        }
                        if (rowSeverity) tr.classList.add(rowSeverity);

                        row.forEach((cell, idx) => {
                            const td = document.createElement('td');
                            if (section.id === 'table-of-contents' && idx === 0) {
                                const match = cell.match(/^\d+\.\s+(.*)/);
                                if (match) {
                                    const title = match[1];
                                    const targetSection = PLAN_DATA.find(s => s.title.includes(title));
                                    if (targetSection) {
                                        td.innerHTML = `<a href="#${targetSection.id}">${cell}</a>`;
                                        td.querySelector('a').onclick = (e) => {
                                            e.preventDefault();
                                            document.getElementById(targetSection.id).scrollIntoView({ behavior: 'smooth' });
                                        };
                                    } else { td.innerHTML = cell; }
                                } else { td.innerHTML = cell; }
                            } else { td.innerHTML = cell; }
                            tr.appendChild(td);
                        });
                        tbody.appendChild(tr);
                    });
                    elNode.appendChild(tbody);
                    break;
                case 'note':
                case 'critical':
                case 'warning':
                    elNode = document.createElement('div');
                    elNode.className = el.type;
                    const h4 = document.createElement('h4');
                    h4.textContent = el.title || el.type;
                    elNode.appendChild(h4);
                    const p = document.createElement('p');
                    p.innerHTML = el.content;
                    elNode.appendChild(p);
                    break;
                case 'list':
                    elNode = document.createElement('ul');
                    el.items.forEach(item => {
                        const li = document.createElement('li');
                        li.innerHTML = item;
                        elNode.appendChild(li);
                    });
                    break;
            }
            if (elNode) {
                if (el.id) elNode.id = el.id;
                sectionEl.appendChild(elNode);
            }
        });
        container.appendChild(sectionEl);
    });
    
    // Intersection Observer for Sidebar Highlighting
    const visibleSections = new Set();
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                visibleSections.add(entry.target.id);
            } else {
                visibleSections.delete(entry.target.id);
            }
        });

        // Find the section closest to the top among visible ones
        let activeId = null;
        let minTop = Infinity;

        visibleSections.forEach(id => {
            const el = document.getElementById(id);
            if (el) {
                const rect = el.getBoundingClientRect();
                // We prefer sections that are near the top of the viewport
                const top = Math.abs(rect.top - 100); 
                if (top < minTop) {
                    minTop = top;
                    activeId = id;
                }
            }
        });

        if (activeId) {
            document.querySelectorAll('#toc a').forEach(a => {
                a.classList.remove('active');
                if (a.getAttribute('href') === `#${activeId}`) {
                    a.classList.add('active');
                    // Ensure the active link is visible in the sidebar
                    const navGroup = a.closest('.nav-group');
                    if (navGroup && !navGroup.classList.contains('open')) {
                        navGroup.classList.add('open');
                        const toggle = navGroup.querySelector('.toggle-icon');
                        if (toggle) toggle.textContent = '▾';
                    }
                }
            });
        }
    }, { 
        rootMargin: '-10% 0px -70% 0px', // Target the upper part of the screen
        threshold: 0 
    });
    document.querySelectorAll('section').forEach(section => observer.observe(section));
});
