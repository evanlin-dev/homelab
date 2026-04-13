const fs = require('fs');

const dataContent = fs.readFileSync('C:\\Users\\Evan\\Desktop\\dev\\homleab\\data.js', 'utf8');

// Match PLAN_DATA array
const planDataMatch = dataContent.match(/const PLAN_DATA = (\[[\s\S]*\]);/);
let PLAN_DATA = eval(planDataMatch[1]);

// Map sections by id
const sectionsMap = {};
PLAN_DATA.forEach(s => sectionsMap[s.id] = s);

// 1. Pull out discord-bot-hub from stage-1-day-one-services
const stage1 = sectionsMap['stage-1-day-one-services'];
if (stage1) {
    const discordBotHubElements = [];
    const remainingStage1Elements = [];
    let inDiscord = false;
    for (const el of stage1.elements) {
        if (el.id === 'discord-bot-hub') {
            inDiscord = true;
        }
        if (inDiscord && el.content === 'Install these immediately. Each runs within 32GB RAM. Install Tailscale and AdGuard Home first — everything else builds on top of them.') {
            inDiscord = false;
        }
        
        if (inDiscord) {
            discordBotHubElements.push(el);
        } else {
            remainingStage1Elements.push(el);
        }
    }
    
    sectionsMap['discord-bot-hub'] = {
        id: 'discord-bot-hub',
        title: 'Personal Bot Hub (Discord/Telegram)',
        elements: discordBotHubElements
    };
    stage1.elements = remainingStage1Elements;
}

// 2. Pull out network-architecture-at-stage-5 from stage-5-far-future-family-spreads-across-multiple-floors
const stage5 = sectionsMap['stage-5-far-future-family-spreads-across-multiple-floors'];
if (stage5) {
    const vlanElements = [];
    const remainingStage5Elements = [];
    let inVlan = false;
    for (const el of stage5.elements) {
        if (el.id === 'network-architecture-at-stage-5') {
            inVlan = true;
        }
        if (inVlan) {
            vlanElements.push(el);
        } else {
            remainingStage5Elements.push(el);
        }
    }
    
    sectionsMap['network-architecture-at-stage-5'] = {
        id: 'network-architecture-at-stage-5',
        title: 'Network Architecture at Stage 5',
        elements: vlanElements
    };
    stage5.elements = remainingStage5Elements;
}

// NAV_TREE order
const NAV_ORDER = [
    "table-of-contents",
    "choosing-your-os-getting-started",
    "pangolin-the-better-cloudflare-tunnels-replacement",
    "hardware-roadmap",
    "buying-the-tower-what-to-look-for",
    "buying-the-nas",
    "mac-mini-mac-studio-as-storage-vs-nas",
    "do-you-need-a-network-switch",
    "hardware-accessories-worth-getting",
    "hardware-deal-finder-automated-scraping-for-good-finds",
    "dev-environments-localhost-vs-build-vs-prod",
    "important-considerations",
    "lancache-game-download-cache-for-instant-updates",
    "stage-1-day-one-services",
    "discord-bot-hub",
    "stage-2-after-learning-docker-networking",
    "stage-3-after-getting-a-nas",
    "stage-4-after-a-tower-workstation",
    "stage-5-far-future-family-spreads-across-multiple-floors",
    "network-architecture-at-stage-5",
    "what-to-skip-and-why",
    "docker-container-count-what-to-realistically-expect",
    "llm-hardware-gpu-costs-practical-alternatives-and-looking-forward",
    "llm-hardware-detailed-reality-check",
    "hermes-agent-your-persistent-ai-team-member",
    "hermes-going-deeper",
    "hermes-vs-automation-tools-what-s-actually-different",
    "hermes-travel-planning",
    "reddit-automation-hub",
    "ai-enhanced-notes-ask-ai-to-refine-or-template",
    "second-brain-video-articles-and-ai-knowledge-capture",
    "chinese-i18n-automating-accurate-translations-across-all-tools",
    "language-learning-with-your-homelab",
    "personal-knowledge-base-learning-tracker",
    "wi-fi-heatmap-and-speed-testing",
    "multi-floor-speed-testing",
    "networking-fundamentals-what-you-actually-need-to-know",
    "port-and-service-reference",
    "security-hardening-checklist",
    "backup-testing-restore-drills",
    "troubleshooting-what-to-check-first",
    "interview-prep-practice-environment",
    "energy-monitoring-and-cost-dashboard",
    "subscription-tracker-beyond-manual-entry",
    "dns-privacy-dns-over-https-and-dns-over-tls",
    "git-workflow-for-homelab-configs",
    "what-not-to-self-host",
    "reference-links"
];

const NEW_PLAN_DATA = NAV_ORDER.map(id => {
    if (!sectionsMap[id]) {
        console.error(`Section not found: ${id}`);
        // return null;
    }
    return sectionsMap[id];
}).filter(Boolean);

// Check if any sections were left out
const leftOut = Object.keys(sectionsMap).filter(id => !NAV_ORDER.includes(id));
if (leftOut.length > 0) {
    console.warn(`Sections left out: ${leftOut.join(', ')}`);
}

const newContent = dataContent.replace(/const PLAN_DATA = \[[\s\S]*\];/, `const PLAN_DATA = ${JSON.stringify(NEW_PLAN_DATA, null, 4)};`);

fs.writeFileSync('C:\\Users\\Evan\\Desktop\\dev\\homleab\\data.js', newContent);
console.log('Successfully reordered and updated data.js');
