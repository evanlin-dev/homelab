const fs = require('fs');

const raw = fs.readFileSync('build_v3.js', 'utf-8');

let match = raw.match(/const C = \[\s*\/\/ all children([\s\S]+)\];\s*$/m);
let innerCode = "";
if (match) {
    innerCode = match[1];
} else {
    match = raw.match(/const C = \[([\s\S]+)\];/);
    innerCode = match[1];
}

class Paragraph { constructor(data) { this.data = data; this._type = 'Paragraph'; } }
class TextRun { constructor(data) { this.data = data; this._type = 'TextRun'; } }
class Table { constructor(data) { this.data = data; this._type = 'Table'; } }
class TableRow { constructor(data) { this.data = data; this._type = 'TableRow'; } }
class TableCell { constructor(data) { this.data = data; this._type = 'TableCell'; } }
class PageBreak { constructor() { this._type = 'PageBreak'; } }

const AlignmentType = { CENTER: 'CENTER' };
const HeadingLevel = { HEADING_1: 'HEADING_1', HEADING_2: 'HEADING_2', HEADING_3: 'HEADING_3' };
const BorderStyle = { SINGLE: 'SINGLE', NONE: 'NONE' };
const WidthType = { DXA: 'DXA' };
const ShadingType = { CLEAR: 'CLEAR' };

const BLUE = "1A3A5C";
const ORANGE = "C45911";
const RED = "C00000";
const GREEN = "375623";
const GREY = "F2F2F2";
const DARK_GREY = "666666";
const LIGHT_GREY = "E6E6E6";
const STRIPE = "F5F5F5";
const PAGE_W = 9360;

function getValColor(val) { return undefined; }

const h1 = t => ({ type: 'h1', content: t });
const h2 = t => ({ type: 'h2', content: t });
const h3 = t => ({ type: 'h3', content: t });
const body = (t, o) => ({ type: 'p', content: t });
const bullet = (t, o) => ({ type: 'list-item', content: t });
const spacer = () => ({ type: 'spacer' });
const pageBreak = () => ({ type: 'pageBreak' });
const hr = () => ({ type: 'hr' });

function note(label, text, color) {
    let level = 'note';
    if (color === RED) level = 'critical';
    else if (color === ORANGE) level = 'warning';
    return { type: 'note', title: label.trim(), content: text, level: level };
}

function colorBox(label, text, fillColor, textColor) {
    let level = 'note';
    if (fillColor === 'FDECEA') level = 'critical';
    else if (fillColor === 'FEF3E2') level = 'warning';
    else if (fillColor === 'E8F5E9') level = 'note';
    return { type: 'note', title: label.trim(), content: text, level: level };
}

function kvTable(rows, c1, c2) {
    return {
        type: 'table',
        headers: [],
        rows: rows.map(r => [r[0], r[1]])
    };
}

function compTable(headers, rows, colWidths) {
    return {
        type: 'table',
        headers: headers,
        rows: rows
    };
}

const C = eval(`[${innerCode}]`);

const sections = [];
let currentSection = null;

let currentList = null;

for (const item of C) {
    if (!item) continue;
    
    if (item.type === 'h1') {
        if (currentList) {
            currentSection.elements.push(currentList);
            currentList = null;
        }
        currentSection = {
            id: item.content.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''),
            title: item.content,
            elements: []
        };
        sections.push(currentSection);
    } else if (currentSection) {
        if (item.type === 'list-item') {
            if (!currentList) {
                currentList = { type: 'list', items: [] };
            }
            currentList.items.push(item.content);
        } else {
            if (currentList) {
                currentSection.elements.push(currentList);
                currentList = null;
            }
            
            if (item.type === 'h2' || item.type === 'h3' || item.type === 'p' || item.type === 'table' || item.type === 'note') {
                currentSection.elements.push(item);
            }
        }
    }
}
if (currentList && currentSection) {
    currentSection.elements.push(currentList);
}

// 1. Mini PC life Table -> Hardware Roadmap
const hwRoadmap = sections.find(s => s.title.includes('Hardware Roadmap'));
if (hwRoadmap) {
    hwRoadmap.elements.push({ type: 'h2', content: "The Mini PC's Life After the Tower" });
    hwRoadmap.elements.push({ type: 'p', content: "The HP EliteDesk 800 G6 Mini never becomes e-waste. At each stage it gets demoted to a new role that exactly fits its capabilities. Here is the full progression:" });
    hwRoadmap.elements.push({
        type: 'table',
        headers: ['When', 'Role', 'What runs on it', 'Why it fits'],
        rows: [
            ['Stages 1-2', 'Primary server', 'Full Docker stack: AdGuard, Jellyfin, Home Assistant, ntfy, Vaultwarden, Open-WebUI, PocketBase, Paperless-ngx, all monitoring tools', 'It is the only server. Everything runs here. 32GB is tight but manageable with selective deployment.'],
            ['Stage 3 (NAS added)', 'Primary server, lightened', 'Same Docker stack, but all media and bulk data migrate to the NAS. The 512GB SSD now has room to breathe for databases and Docker volumes.', "The Mini PC's CPU and RAM are freed from I/O pressure. It runs faster with less to manage locally."],
            ['Stage 4 (Tower added)', 'Proxmox Backup Server', 'PBS receives nightly block-level incremental backups from the tower. Deduplication means 30 days of VM snapshots fits in far less than 30x the raw size.', '10-15W idle is perfect for a machine that mostly sits and receives backup streams. No wasted electricity.'],
            ['Stage 4 (ongoing)', 'Lightweight secondary node', 'Optionally runs a handful of low-priority containers: AdGuard as a secondary DNS resolver, a Tailscale subnet router, or Uptime Kuma monitoring the tower itself.', 'If the tower goes down for maintenance, the Mini PC keeps DNS and VPN running. No single point of failure.'],
            ['Stage 5 (family floors)', 'Floor-level satellite node', 'Tailscale subnet router for that floor, local DNS resolver, Home Assistant satellite for floor-specific IoT, and a Syncthing node for floor-local file sync.', '10-15W 24/7 on a floor that needs always-on local services. Cheap to run and small enough to hide in a closet.']
        ]
    });
}

// 2. NAS drive selection Table -> Buying the NAS
const nasSection = sections.find(s => s.title.includes('Buying the NAS'));
if (nasSection) {
    nasSection.elements.push({ type: 'h2', content: "NAS Drive Selection" });
    nasSection.elements.push({ type: 'p', content: "The drives are the most important purchase for the NAS — the enclosure is just a container. For a ZFS mirror (2 drives, 1 can fail):" });
    nasSection.elements.push({
        type: 'table',
        headers: ['Drive', 'Best for', 'Recommended models', 'Cost per TB', 'Watch out for'],
        rows: [
            ['NAS-grade HDD (recommended)', 'Primary storage pool — Immich, media, backups', 'Seagate IronWolf Pro 16TB, WD Red Pro 18TB', '~$15-18/TB new', 'Avoid desktop drives (WD Blue, Seagate Barracuda) — not rated for NAS vibration and 24/7 duty cycles. They fail faster.'],
            ['Refurbished enterprise HDD', 'Bulk storage on a budget', 'Seagate Exos X18, WD Ultrastar DC HC550 (manufacturer-recertified)', '~$8-12/TB recertified', 'Buy manufacturer-recertified only — not third-party refurb. Seagate and WD sell their own recertified drives with a real warranty.'],
            ['NVMe SSD (metadata/cache)', 'Proxmox Backup Server dedup metadata, ZFS L2ARC cache', 'Samsung 980 Pro, WD SN850X (500GB-1TB)', '~$60-80 total', 'Only needed for the ZFS metadata vdev on TrueNAS. Synology handles this internally. Do not use QLC NVMe here.'],
            ['DO NOT USE: SMR drives', 'Nothing in a NAS', 'WD Red non-Pro (SMR), Seagate Barracuda Compute', 'Cheapest per TB', 'SMR drives are catastrophically slow during ZFS resilver operations. A failed drive replacement that should take hours takes days or weeks and can trigger a cascade failure.']
        ]
    });
}

// 3. eBay checklist & 4. Hardware Gotchas -> Buying the Tower
const towerSection = sections.find(s => s.title.includes('Buying the Tower'));
if (towerSection) {
    towerSection.elements.push({ type: 'h2', content: "eBay / Refurbished Hardware: Buying Checklist" });
    towerSection.elements.push({ type: 'p', content: "The refurbished enterprise market is the best value in homelab hardware. These are the specific things to verify before clicking Buy It Now:" });
    towerSection.elements.push({
        type: 'table',
        headers: ['Check this', 'What to look for', 'Red flag'],
        rows: [
            ['PSU included and tested', 'Listing explicitly states PSU is included and tested. Enterprise workstation PSUs are proprietary — replacement is expensive.', "'PSU not included', 'PSU untested', or silence on the subject. Walk away."],
            ['CPU generation', 'i7-10xxx, i9-10xxx, or Xeon W-2200 series (Cascade Lake, 2019+) for QuickSync Gen 10 and AVX-512.', "i7-7xxx, i9-7xxx, or Xeon W-2100 (Skylake-W, 2017) — older QuickSync, worse transcoding. Anything Broadwell or earlier is too old."],
            ['RAM type and speed', 'DDR4 ECC Registered (RDIMM) at 2933MHz or 3200MHz. Confirm the listing states ECC.', "'DDR4 non-ECC' or just 'DDR4' with no ECC mention. Non-ECC in a homelab running ZFS is a reliability risk."],
            ['Boot drive included', 'Some listings include the original SSD or HDD. Note the condition — you will likely replace it with your own NVMe.', "Drives with 40,000+ hours of SMART runtime. Fine as a throwaway test drive; not for production data."],
            ['BIOS accessible / not locked', "Ideally confirmed by seller. Enterprise machines sometimes have domain-joined BIOS passwords from corporate environments.", "'BIOS password unknown' or 'sold as-is, could not test'. These can sometimes be cleared but it adds friction."],
            ['RAID card model', 'Note the exact RAID card model (e.g., PERC H330, PERC H730). You will need to flash it to IT Mode for ZFS. Confirm guides exist for your specific card.', "'H830' or 'RAID card with cache battery' — the caching variants are harder to flash. Avoid if you can."],
            ['Seller feedback and return policy', 'Look for 98%+ positive feedback and at least 30-day returns. Enterprise resellers (not random individuals) are more reliable.', 'Zero-return listings from accounts with less than 50 feedback. No recourse if the machine is dead on arrival.'],
            ['Cosmetic vs functional condition', "'Cosmetic wear' is fine — scratches and dents do not affect performance. 'Fully tested, boots to BIOS' is the phrase you want.", "'Powers on, not further tested' — this means the seller saw POST and nothing else. No confirmation of CPU, RAM, or drive functionality."],
            ['Noise and thermals', 'Enterprise workstations are designed for offices, not server rooms. They are loud under load but acceptable for a closet or basement.', 'Rack-mounted servers (1U, 2U) — jet engine noise at full load. A tower workstation is far quieter than a 1U rack server.']
        ]
    });
    
    towerSection.elements.push({ type: 'h2', content: "General Hardware Gotchas" });
    towerSection.elements.push({ type: 'p', content: "Things that catch homelab beginners off guard when buying or setting up hardware for the first time:" });
    towerSection.elements.push({
        type: 'table',
        headers: ['Gotcha', 'What actually happens', 'How to avoid it'],
        rows: [
            ['SMR hard drives in a NAS', 'Shingled Magnetic Recording drives write data in overlapping tracks. During ZFS resilver (rebuilding after a drive swap), they throttle to near-zero write speeds. A resilver that should take 6 hours takes 4 days, during which a second failure means total data loss.', 'Buy CMR (Conventional Magnetic Recording) drives only: Seagate IronWolf Pro, WD Red Pro, Seagate Exos, WD Ultrastar. Never WD Red non-Pro (SMR), WD Blue, or Seagate Barracuda in a NAS.'],
            ['RAID card blocking ZFS', 'The enterprise workstation ships with a PERC RAID card in RAID mode. Windows sees one big disk. Proxmox sees one big disk. ZFS cannot see individual drive health, cannot heal bit rot, and cannot manage its own redundancy.', 'Flash the card to IT Mode (also called HBA Mode) before installing Proxmox. The ServeTheHome forums have model-specific guides. Confirm your exact card model before buying.'],
            ['Wrong RAM slot population', 'Buying 2x32GB sticks when 4x16GB is available. Two sticks on a quad-channel platform runs in dual-channel, halving memory bandwidth. ZFS metadata caching performance suffers significantly.', 'Fill all memory channels. Buy 4x16GB (or 8x8GB) instead of 2x32GB. Check your motherboard manual for the correct slot population order.'],
            ['QuickSync not available in a VM', "Jellyfin runs in a Docker container or VM. If you don't pass through the iGPU to the container, QuickSync is invisible and Jellyfin falls back to software transcoding (CPU), which is slow.", 'Either run Jellyfin directly on the host, or configure the Intel iGPU device pass-through in Proxmox: add /dev/dri to the LXC container config. This is well-documented.'],
            ['UPS with a smart plug instead', 'A Kasa or Shelly smart plug can monitor power draw but cannot issue a graceful server shutdown during an outage — it just cuts power when it decides. The server sees a hard power loss, same as no UPS at all.', 'Use a real UPS with a USB management port (APC or CyberPower 1500VA). Install NUT (Network UPS Tools) and configure it to automatically shut down Proxmox when battery hits 15%.'],
            ['Buying too much drive capacity at once', 'Buying 2x18TB drives immediately is expensive. If you fill a ZFS mirror over 80% capacity, ZFS performance degrades significantly due to fragmentation. You will then need to replace both drives simultaneously.', 'Start with 2x8TB or 2x10TB drives. Upgrade by replacing one drive at a time and letting ZFS resilver. ZFS expands the pool automatically when both drives are replaced with larger ones.'],
            ['Mixing drive models in a ZFS mirror', 'Putting a 7200RPM Seagate next to a 5400RPM WD in the same mirror. The pool runs at the speed of the slowest drive and the different vibration profiles can mask S.M.A.R.T. warning signs.', 'Buy identical drives for each vdev mirror. Same model, same capacity, same firmware if possible. If identical is not available, at least match RPM and CMR vs SMR status.'],
            ['Ignoring thermal paste age', 'Buying a refurbished workstation and immediately putting it under full load. Enterprise gear sometimes sits in warehouses for months or years. Old dried thermal paste causes thermal throttling and looks like a bad CPU.', 'Run Prime95 or stress-ng for 30 minutes immediately after purchase. If temps exceed 90C on the CPU, re-paste before deploying to production.'],
            ['NYC apartment electrical circuits', 'Plugging a tower server, NAS, UPS, networking gear, and a NAS into a single 15A circuit. At 120V that is only 1800W of headroom, and the UPS plus tower can draw 200-300W under load.', 'Measure actual draw with a Kill A Watt meter before committing. A dedicated circuit (20A) for the server closet is worth having an electrician add if you are in an apartment you control.']
        ]
    });
}

// 5. Stage 5 network details -> Stage 5
const stage5Section = sections.find(s => s.title.includes('Stage 5'));
if (stage5Section) {
    stage5Section.elements.push({ type: 'h2', content: "Network Architecture at Stage 5" });
    stage5Section.elements.push({ type: 'p', content: "The target network topology at Stage 5 is a managed UniFi stack with a central firewall, a building-wide switch backbone, and one AP per floor on the same SSID with seamless roaming. VLAN design:" });
    stage5Section.elements.push({
        type: 'list',
        items: [
            "<strong>VLAN 10 — Management</strong> — Only the tower server, NAS nodes, and your personal devices. No family member devices except yours. SSH and Proxmox management live here.",
            "<strong>VLAN 20 — Family Floor 1 (Parents)</strong> — Parents' devices, their floor's smart home gear. Full access to Jellyfin, Immich shared albums, Mealie, and family dashboard. No access to management VLAN.",
            "<strong>VLAN 30 — Family Floor 2 (Brother)</strong> — Brother's devices and IoT. Same shared service access as Floor 1. Firewall blocks cross-floor device visibility — no lateral movement between family units.",
            "<strong>VLAN 40 — Family Floor 3 (You)</strong> — Your personal devices, dev machines, and lab gear. Full access to all services including management tunnel via Tailscale.",
            "<strong>VLAN 50 — IoT</strong> — All smart plugs, sensors, cameras, and e-ink displays across every floor. Zero outbound internet access. Can only talk to Home Assistant on the management VLAN through a specific firewall rule.",
            "<strong>VLAN 60 — Guest</strong> — Visitors and contractor devices. Internet only. No access to any family service or device. Isolated completely from all other VLANs."
        ]
    });
    stage5Section.elements.push({ type: 'p', content: "<em>Key principle: shared services (Jellyfin, Vaultwarden, Mealie, Immich) are accessible from all family VLANs via specific firewall allow rules pointing at the server IP only. Everything else between VLANs is dropped by default. This gives every family member full access to the things they need while keeping their devices private from each other.</em>" });
}

fs.writeFileSync('data.js', 'const PLAN_DATA = ' + JSON.stringify(sections, null, 4) + ';\n');
