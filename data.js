const PLAN_DATA = [
    {
        "id": "table-of-contents",
        "title": "Table of Contents",
        "elements": [
            {
                "type": "table",
                "headers": [
                    "Section",
                    "What It Covers"
                ],
                "rows": [
                    [
                        "1. Choosing Your OS — Getting Started",
                        "Proxmox vs Ubuntu vs TrueNAS vs Unraid decision table, first 30 minutes setup, getting-started guides"
                    ],
                    [
                        "2. Pangolin: The Better Cloudflare Tunnels Replacement",
                        "Self-hosted tunneled reverse proxy — replaces Cloudflare Tunnels + Nginx Proxy Manager"
                    ],
                    [
                        "3. Hardware Roadmap",
                        "Five-stage upgrade path from Mini PC through NAS, Tower, to family-wide infrastructure"
                    ],
                    [
                        "4. Buying the Tower: What to Look For",
                        "Specs, what to buy, red flags, refurbished enterprise workstation guide"
                    ],
                    [
                        "5. Buying the NAS",
                        "Synology vs QNAP vs DIY TrueNAS, drive selection, SMR vs CMR warning"
                    ],
                    [
                        "6. Mac Mini / Mac Studio as Storage — vs NAS",
                        "Honest comparison — Apple Silicon as inference node vs dedicated NAS"
                    ],
                    [
                        "7. Do You Need a Network Switch?",
                        "Stage-by-stage decision, recommended switches by stage"
                    ],
                    [
                        "8. Hardware Accessories Worth Getting",
                        "Stage-by-stage accessories: UPS, Coral TPU, Zigbee, RTL-SDR, e-ink, smart plugs"
                    ],
                    [
                        "9. Hardware Deal Finder: Automated Scraping for Good Finds",
                        "Automated scraping for homelab hardware — new deals and used finds"
                    ],
                    [
                        "10. Dev Environments: Localhost vs. Build vs. Prod",
                        "Dev/staging/prod distinction, single-server approach, VM isolation, toolchain"
                    ],
                    [
                        "11. Important Considerations",
                        "Colored warning boxes: tenant isolation, VPN, Vaultwarden backup, LL97, ZFS, DMCA, tenant privacy"
                    ],
                    [
                        "12. LanCache: Game Download Cache for Instant Updates",
                        "Steam/Epic/Battle.net caching — instant updates for the whole building"
                    ],
                    [
                        "13. Stage 1 — Day One Services",
                        "Initial services: AdGuard, Jellyfin, ntfy, Vaultwarden, and essential monitoring"
                    ],
                    [
                        "14. Personal Bot Hub (Discord/Telegram)",
                        "Centralizing notifications and LLM interaction via Discord and Telegram bots"
                    ],
                    [
                        "15. Stage 2 — After Learning Docker & Networking",
                        "Intermediate services: Home Assistant, n8n, Authelia, and self-hosted dev tools"
                    ],
                    [
                        "16. Stage 3 — After Getting a NAS",
                        "Storage-heavy services: Immich, Nextcloud, and automated backup pipelines"
                    ],
                    [
                        "17. Stage 4 — After a Tower Workstation",
                        "Resource-intensive services: Local LLMs, Frigate NVR, and Proxmox management"
                    ],
                    [
                        "18. Stage 5 — Far Future: Family Spreads Across Multiple Floors",
                        "Scaling the lab to support a distributed multi-floor family infrastructure"
                    ],
                    [
                        "19. Network Architecture at Stage 5",
                        "Detailed VLAN design and firewall rules for a multi-floor family environment"
                    ],
                    [
                        "20. What to Skip (and Why)",
                        "Services not worth running and better alternatives"
                    ],
                    [
                        "21. Docker Container Count: What to Realistically Expect",
                        "Resource planning and performance expectations for 50+ containers"
                    ],
                    [
                        "22. LLM Hardware: GPU Costs, Practical Alternatives, and Looking Forward",
                        "GPU cost table, Apple Silicon comparison, future efficiency trends, when to wait"
                    ],
                    [
                        "23. LLM Hardware: Detailed Reality Check",
                        "CPU-only inference today, Ollama model guide, quantization explained, API vs local decision matrix"
                    ],
                    [
                        "24. Hermes Agent: Your Persistent AI Team Member",
                        "Setup, use case table (80+ tasks), API vs local guidance, Multica"
                    ],
                    [
                        "25. Hermes: Going Deeper",
                        "Advanced Hermes workflows, SOUL.md customization, and persistent memory management"
                    ],
                    [
                        "26. Hermes vs Automation Tools: What's Actually Different",
                        "When to use Hermes, when to use n8n — the real distinction"
                    ],
                    [
                        "27. Hermes for Travel Planning (Wanderlog Style)",
                        "Using Hermes for flight tracking, itinerary generation, and local discovery"
                    ],
                    [
                        "28. Reddit Discovery Engine (Hermes Automation)",
                        "Automating content curation, sentiment analysis, and community engagement via Hermes"
                    ],
                    [
                        "29. AI-Enhanced Notes: Ask AI to Refine or Template",
                        "SilverBullet AI plugin, Hermes note workflows, study prompts"
                    ],
                    [
                        "30. Second Brain: Video, Articles, and AI Knowledge Capture",
                        "The Karpathy-style vault workflow adapted for your note structure and local models"
                    ],
                    [
                        "31. Chinese i18n: Automating Accurate Translations Across All Tools",
                        "Native app settings, automated translation pipeline, LibreTranslate, subtitle workflow"
                    ],
                    [
                        "32. Language Learning with Your Homelab",
                        "Hermes as Mandarin tutor, Whisper speaking practice, Jellyfin subtitle flip method, custom reading material"
                    ],
                    [
                        "33. Personal Knowledge Base + Learning Tracker",
                        "SilverBullet + Plane + Memos + Hermes combined system"
                    ],
                    [
                        "34. Wi-Fi Heatmap and Speed Testing",
                        "Floor plan tools, manual phone-based heatmap, and signal optimization"
                    ],
                    [
                        "35. Multi-Floor Speed Testing",
                        "Empirical bandwidth verification across different floors and networking hardware"
                    ],
                    [
                        "36. Networking Fundamentals: What You Actually Need to Know",
                        "IP/CIDR, DNS, ports, VLANs, firewall rules, key terms cheat sheet"
                    ],
                    [
                        "37. Port and Service Reference",
                        "Every service, its port, Docker mapping, and conflict notes"
                    ],
                    [
                        "38. Security Hardening Checklist",
                        "Day one, pre-exposure, and quarterly checklists. S.M.A.R.T. attributes."
                    ],
                    [
                        "39. Backup Testing: Restore Drills",
                        "Four specific drills: PBS, Vaultwarden, Rclone B2, ZFS resilver"
                    ],
                    [
                        "40. Troubleshooting: What to Check First",
                        "Six failure scenarios with ordered diagnostic steps and Docker error reference"
                    ],
                    [
                        "41. Interview Prep: Practice Environment",
                        "LeetCode tutor mode, system design mock sessions, full technical screen simulation, Hermes as study partner"
                    ],
                    [
                        "42. Energy Monitoring and Cost Dashboard",
                        "Shelly/Kasa smart plugs, HA energy integration, Grafana cost dashboard, Hermes monthly energy report"
                    ],
                    [
                        "43. Subscription Tracker — Beyond Manual Entry",
                        "Beyond Wallos: bank-feed-based automatic subscription detection"
                    ],
                    [
                        "44. DNS Privacy: DNS-over-HTTPS and DNS-over-TLS",
                        "Encrypt DNS queries so ISP cannot see your browsing. AdGuard Home upstream config, NextDNS setup."
                    ],
                    [
                        "45. Git Workflow for Homelab Configs",
                        "Four-repo structure, .gitignore patterns, secrets without leaking, Hermes credential auditing"
                    ],
                    [
                        "46. What Not to Self-Host",
                        "Email, SMS, CDN, payments, 99.9%+ SLA services — keep these in the cloud on purpose"
                    ],
                    [
                        "47. Reference Links",
                        "All external links organized by category"
                    ]
                ]
            }
        ]
    },
    {
        "id": "choosing-your-os-getting-started",
        "title": "Choosing Your OS — Getting Started",
        "elements": [
            {
                "type": "p",
                "content": "The most paralyzing decision for a first-time homelab builder is which operating system to install. The good news: the choice is reversible, and all of them are free. The bad news: picking the wrong one for your mindset wastes significant setup time. Here's a decision table that tells you which one to install today."
            },
            {
                "type": "h2",
                "content": "The Decision Table"
            },
            {
                "type": "table",
                "headers": [
                    "OS",
                    "What It Is",
                    "Install If…",
                    "Avoid If…",
                    "Learning Curve",
                    "This Plan Uses It For"
                ],
                "rows": [
                    [
                        "Proxmox VE",
                        "Hypervisor — runs VMs and LXC containers on bare metal. Web GUI built-in.",
                        "You want to try lots of things without re-installing the whole OS. You want VM snapshots before risky changes. You want to run multiple isolated services.",
                        "You just want to run a few Docker containers and don't care about VMs. You find the concept of VMs confusing and off-putting.",
                        "Medium — install is easy, concepts take a week to click",
                        "Primary OS on the tower workstation (Stage 4). The Mini PC also runs Proxmox Backup Server."
                    ],
                    [
                        "Ubuntu Server LTS",
                        "Bare Linux with no GUI. You SSH in and install Docker, Nginx, whatever you need.",
                        "You want to learn Linux fundamentals properly. You're comfortable in a terminal. You want the most direct, unmediated control.",
                        "You want a web GUI to manage things. You don't want to manually configure every service.",
                        "Medium-High — no training wheels, but best documentation online",
                        "Stage 1–3 on the Mini PC. Install Ubuntu Server 24.04 LTS, then Docker, then your stack."
                    ],
                    [
                        "Debian Stable",
                        "Essentially Ubuntu without the Canonical extras. Even more minimal.",
                        "You want rock-solid stability above all else. You plan to configure everything yourself.",
                        "You're new to Linux — Ubuntu is friendlier with better hardware support docs.",
                        "Medium-High",
                        "Optional alternative to Ubuntu for the Mini PC if you prefer it."
                    ],
                    [
                        "TrueNAS Scale",
                        "NAS-focused OS. ZFS-native, excellent UI for storage management. App store available.",
                        "Your primary goal is storage — NAS, file sharing, backups. Data safety is priority #1.",
                        "You want a general-purpose server. TrueNAS resists being pushed beyond its storage appliance role.",
                        "Low-Medium — excellent UI makes storage easy, but app management is clunky",
                        "The NAS at Stage 3. Install TrueNAS Scale on the NAS box, not the Mini PC."
                    ],
                    [
                        "Unraid",
                        "GUI-based, storage-flexible OS. Paid license ($59 one-time). Mix drive sizes freely.",
                        "You're a beginner who wants a GUI for everything. You don't mind paying for polish. You want ease above all.",
                        "You want the full open-source stack. You're comfortable with Linux. You want Proxmox-style VM power.",
                        "Low — most approachable beginner option",
                        "Not in this plan's primary path — but a valid alternative to TrueNAS for the NAS box."
                    ],
                    [
                        "macOS (Mac Mini/Studio)",
                        "Desktop OS repurposed as a server. Ollama and Docker run on it.",
                        "You already own Apple Silicon hardware and want to run Ollama locally for LLM inference.",
                        "You want a proper server OS — macOS reboots after updates, has keychain prompts, lacks ZFS. It's a desktop OS.",
                        "Low (macOS) — but High (making it behave as a server)",
                        "Optional LLM inference node at Stage 4+. NOT a replacement for the tower in this plan."
                    ]
                ]
            },
            {
                "type": "h2",
                "content": "Stage 1: The Right Setup for the HP EliteDesk 800 G6 Mini"
            },
            {
                "type": "p",
                "content": "For Stage 1, install Ubuntu Server 24.04 LTS. Here's why: Proxmox is overkill when you have one machine and no VMs to migrate. Ubuntu Server is where you'll actually learn Linux — file permissions, systemd, cron, networking, and Docker. That knowledge transfers to Proxmox later. Do not skip this stage."
            },
            {
                "type": "table",
                "headers": [],
                "rows": [
                    [
                        "Install Ubuntu Server 24.04 LTS",
                        "Download the server ISO from ubuntu.com. Write to USB with balenaEtcher or Ventoy. Boot the Mini PC from USB. Choose 'Ubuntu Server' (not desktop). Enable OpenSSH during install."
                    ],
                    [
                        "First commands after install",
                        "sudo apt update && sudo apt upgrade -y → then install Docker via the official Docker Engine install script (not apt's outdated version)."
                    ],
                    [
                        "Get Docker Compose",
                        "sudo apt install docker-compose-plugin — gives you the docker compose (v2) command. Never use pip install docker-compose."
                    ],
                    [
                        "Essential reading",
                        "DigitalOcean's Ubuntu tutorials are the best free resource for Linux fundamentals. Start with 'How To Use SSH Keys' and 'How To Use Systemd'."
                    ],
                    [
                        "When to move to Proxmox",
                        "When you buy the tower workstation at Stage 4. At that point, install Proxmox VE on the tower and keep Ubuntu on the Mini PC as the Proxmox Backup Server target."
                    ]
                ]
            },
            {
                "type": "h2",
                "content": "Getting Started: Your First 30 Minutes on the Server"
            },
            {
                "type": "list",
                "items": [
                    "SSH in from your laptop: ssh username@server-ip — this is your primary interface forever.",
                    "Set a static IP on the server: edit /etc/netplan/00-installer-config.yaml and set dhcp4: no with your chosen IP address. Run sudo netplan apply.",
                    "Install Tailscale first, before anything else: curl -fsSL https://tailscale.com/install.sh | sh → sudo tailscale up — this is your safety net for remote access.",
                    "Install AdGuard Home second — it becomes your DNS server for the whole network, which every subsequent service depends on.",
                    "Everything else installs via Docker Compose. Create /opt/stacks/[service-name]/docker-compose.yml for each service. Keep all compose files in one place."
                ]
            },
            {
                "type": "h2",
                "content": "Useful Getting-Started Guides"
            },
            {
                "type": "list",
                "items": [
                    "Proxmox VE Installation: https://www.proxmox.com/en/proxmox-ve/get-started",
                    "Ubuntu Server 24.04 Official Guide: https://ubuntu.com/server/docs",
                    "Docker Engine on Ubuntu (official): https://docs.docker.com/engine/install/ubuntu/",
                    "TrueNAS Scale Getting Started: https://www.truenas.com/docs/scale/gettingstarted/",
                    "Wolfgang's Channel (YouTube) — best Proxmox beginner videos: https://www.youtube.com/@WolfgangsChannel",
                    "Techno Tim (YouTube) — homelab tutorials, Docker, Proxmox: https://www.youtube.com/@TechnoTim",
                    "Jeff Geerling (YouTube) — Raspberry Pi, servers, home networking: https://www.youtube.com/@JeffGeerling",
                    "r/homelab wiki — community-maintained getting started guide: https://www.reddit.com/r/homelab/wiki/",
                    "r/selfhosted wiki — software recommendations and setup guides: https://www.reddit.com/r/selfhosted/wiki/"
                ]
            }
        ]
    },
    {
        "id": "pangolin-the-better-cloudflare-tunnels-replacement",
        "title": "Pangolin: The Better Cloudflare Tunnels Replacement",
        "elements": [
            {
                "type": "p",
                "content": "Pangolin is what you should use instead of — or alongside — Nginx Proxy Manager and Tailscale for exposing services externally. The quote from the community is accurate: it's a drop-in replacement for both. Here's what it actually is and why it matters for this plan."
            },
            {
                "type": "h2",
                "content": "What Pangolin Is"
            },
            {
                "type": "p",
                "content": "Pangolin is a self-hosted tunneled reverse proxy built by Fossorial (a YC 2025 company). It combines three things into one system: a WireGuard-based tunnel (like Cloudflare Tunnels or Tailscale), a reverse proxy with automatic SSL (like Nginx Proxy Manager, but using Traefik under the hood), and an identity-aware access control layer (like Authelia, but built-in). You run Pangolin on a cheap VPS, then a tiny client called Newt on your homelab server. No open ports, no router configuration, CGNAT-friendly."
            },
            {
                "type": "table",
                "headers": [],
                "rows": [
                    [
                        "Pangolin server",
                        "Runs on a cheap public VPS (Hetzner €4/mo, Oracle Always Free, etc.). Handles routing, SSL, and access control. You install it once with their installer script."
                    ],
                    [
                        "Newt client",
                        "A tiny user-space WireGuard client you run on your homelab server. Creates an outbound-only encrypted tunnel to Pangolin. No ports opened on your router."
                    ],
                    [
                        "Gerbil",
                        "The WireGuard interface management component — handles the actual tunnel mechanics. Installed automatically with Pangolin."
                    ],
                    [
                        "Traefik (under the hood)",
                        "The reverse proxy engine. You interact with it through Pangolin's web UI — no raw Traefik config needed."
                    ]
                ]
            },
            {
                "type": "h2",
                "content": "Why the Community Recommends It Over Cloudflare Tunnels + Nginx Proxy Manager"
            },
            {
                "type": "table",
                "headers": [
                    "Feature",
                    "Cloudflare Tunnels + NPM",
                    "Pangolin"
                ],
                "rows": [
                    [
                        "Data sovereignty",
                        "Traffic goes through Cloudflare's edge — they can see your traffic",
                        "Your VPS only, end-to-end encrypted. You control everything."
                    ],
                    [
                        "Video traffic",
                        "Cloudflare ToS restricts proxied video — they will warn you and throttle Jellyfin traffic",
                        "No restrictions — route video, game servers, anything you want"
                    ],
                    [
                        "Setup complexity",
                        "Two separate systems to manage (tunnel + proxy)",
                        "One system: proxy + tunnel + auth in one dashboard"
                    ],
                    [
                        "Built-in access control",
                        "Authelia required separately",
                        "Built-in: per-resource SSO, 2FA, pin codes, email whitelists"
                    ],
                    [
                        "Cost",
                        "Free tier (with restrictions)",
                        "Your VPS cost only — Pangolin itself is free/open source"
                    ],
                    [
                        "Self-hostable",
                        "No (Cloudflare is cloud-only)",
                        "Yes — 100% self-hosted including the control plane"
                    ],
                    [
                        "Port forwarding needed?",
                        "No",
                        "No — outbound tunnel only"
                    ],
                    [
                        "CGNAT / restrictive ISP",
                        "Works (outbound only)",
                        "Works (outbound only)"
                    ],
                    [
                        "HTTP header token protection",
                        "No",
                        "Yes — long HTTP token header per resource for extra security"
                    ]
                ]
            },
            {
                "type": "h2",
                "content": "How It Fits Into This Plan"
            },
            {
                "type": "table",
                "headers": [
                    "Stage",
                    "What Changes",
                    "Why"
                ],
                "rows": [
                    [
                        "Stage 1 (now)",
                        "Keep Tailscale for remote access. It's the right tool for device-to-device VPN. Use Cloudflare Tunnels for any public-facing services.",
                        "Pangolin requires a VPS. Not worth the overhead when you have one server and no video traffic concerns."
                    ],
                    [
                        "Stage 2 (learning)",
                        "Evaluate Pangolin when you start exposing Jellyfin or video content externally.",
                        "Cloudflare's video traffic restrictions become relevant the moment you route Jellyfin through them."
                    ],
                    [
                        "Stage 3+ (recommended)",
                        "Replace Cloudflare Tunnels with Pangolin for external service exposure. Keep Tailscale for internal device mesh.",
                        "Best of both: Tailscale for internal connectivity, Pangolin for clean externally-accessible subdomains with auth."
                    ]
                ]
            },
            {
                "type": "note",
                "title": "RECOMMENDATION:",
                "content": "Pangolin doesn't replace Tailscale for device-to-device connectivity (accessing your server from your phone). It replaces Cloudflare Tunnels + Nginx Proxy Manager for exposing services to external users (sharing Jellyfin with family, giving a tenant access to a specific app). Use both in parallel.",
                "level": "note"
            },
            {
                "type": "h2",
                "content": "Setup Overview"
            },
            {
                "type": "list",
                "items": [
                    "Get a cheap VPS — Hetzner CX11 (~€4/mo), Oracle Always Free (literally free), or any Debian/Ubuntu VPS with a public IP.",
                    "Point a wildcard DNS record at your VPS: *.yourdomain.com → VPS IP",
                    "Run the Pangolin installer on the VPS: wget and chmod+x the installer binary from Fossorial's GitHub releases, run it, answer 4 questions (domain, email, enable Gerbil).",
                    "Install Newt on your homelab server: one Docker container, three environment variables (server URL, site ID, secret).",
                    "Add resources in the Pangolin dashboard: create a new resource pointing to your service (e.g., jellyfin.yourdomain.com → localhost:8096), set auth method (SSO, pin, or public).",
                    "Done — Jellyfin is now accessible at jellyfin.yourdomain.com with SSL, no Cloudflare, no open ports."
                ]
            },
            {
                "type": "h2",
                "content": "Links"
            },
            {
                "type": "list",
                "items": [
                    "Pangolin GitHub: https://github.com/fosrl/pangolin",
                    "Pangolin documentation: https://docs.fossorial.io/",
                    "Pangolin vs Tailscale comparison: https://pangolin.net/blog/posts/pangolin-v-tailscale",
                    "Setup tutorial (Pi My Life Up): https://pimylifeup.com/pangolin-linux/"
                ]
            }
        ]
    },
    {
        "id": "hardware-roadmap",
        "title": "Hardware Roadmap",
        "elements": [
            {
                "type": "p",
                "content": "Five hardware stages unlock progressively more powerful services. Do not skip stages — each one builds on the last. The Mini PC you buy today never becomes obsolete; it gets a new job at every stage."
            },
            {
                "type": "table",
                "headers": [
                    "Stage",
                    "New Hardware",
                    "Mini PC's New Job",
                    "Est. Cost",
                    "Power Draw (Idle)"
                ],
                "rows": [
                    [
                        "Stage 1 — Now",
                        "HP EliteDesk 800 G6 Mini (~$314)",
                        "Primary server — runs everything",
                        "$264",
                        "10–15W"
                    ],
                    [
                        "Stage 2 — Learning",
                        "None (knowledge upgrade only)",
                        "Still primary server, now more capable",
                        "$0",
                        "10–15W"
                    ],
                    [
                        "Stage 3 — NAS",
                        "Synology DS923+ or TrueNAS box (~$500–800)",
                        "Keeps running light services + Docker stack. NAS absorbs all bulk storage.",
                        "$500–800",
                        "Mini PC: 10–15W + NAS: 15–25W"
                    ],
                    [
                        "Stage 4 — Tower",
                        "Dell T5820 / HP Z4 G4 refurb (~$400–500)",
                        "Demoted to Proxmox Backup Server vault.",
                        "$400–500",
                        "Mini PC: 10–15W + Tower: 50–70W"
                    ],
                    [
                        "Stage 5 — Family",
                        "UniFi network stack + second NAS (~$700–900)",
                        "Floor-level node: subnet router, local DNS, HA satellite.",
                        "$700–900",
                        "Full stack: ~120–160W total"
                    ]
                ]
            },
            {
                "type": "h2",
                "content": "The Mini PC's Life After the Tower"
            },
            {
                "type": "p",
                "content": "The HP EliteDesk 800 G6 Mini never becomes e-waste. At each stage it gets demoted to a new role that exactly fits its capabilities. Here is the full progression:"
            },
            {
                "type": "table",
                "headers": [
                    "When",
                    "Role",
                    "What runs on it",
                    "Why it fits"
                ],
                "rows": [
                    [
                        "Stages 1-2",
                        "Primary server",
                        "Full Docker stack: AdGuard, Jellyfin, Home Assistant, ntfy, Vaultwarden, Open-WebUI, PocketBase, Paperless-ngx, all monitoring tools",
                        "It is the only server. Everything runs here. 32GB is tight but manageable with selective deployment."
                    ],
                    [
                        "Stage 3 (NAS added)",
                        "Primary server, lightened",
                        "Same Docker stack, but all media and bulk data migrate to the NAS. The 512GB SSD now has room to breathe for databases and Docker volumes.",
                        "The Mini PC's CPU and RAM are freed from I/O pressure. It runs faster with less to manage locally."
                    ],
                    [
                        "Stage 4 (Tower added)",
                        "Proxmox Backup Server",
                        "PBS receives nightly block-level incremental backups from the tower. Deduplication means 30 days of VM snapshots fits in far less than 30x the raw size.",
                        "10-15W idle is perfect for a machine that mostly sits and receives backup streams. No wasted electricity."
                    ],
                    [
                        "Stage 4 (ongoing)",
                        "Lightweight secondary node",
                        "Optionally runs a handful of low-priority containers: AdGuard as a secondary DNS resolver, a Tailscale subnet router, or Uptime Kuma monitoring the tower itself.",
                        "If the tower goes down for maintenance, the Mini PC keeps DNS and VPN running. No single point of failure."
                    ],
                    [
                        "Stage 5 (family floors)",
                        "Floor-level satellite node",
                        "Tailscale subnet router for that floor, local DNS resolver, Home Assistant satellite for floor-specific IoT, and a Syncthing node for floor-local file sync.",
                        "10-15W 24/7 on a floor that needs always-on local services. Cheap to run and small enough to hide in a closet."
                    ]
                ]
            }
        ]
    },
    {
        "id": "buying-the-tower-what-to-look-for",
        "title": "Buying the Tower: What to Look For",
        "elements": [
            {
                "type": "table",
                "headers": [
                    "Spec",
                    "What to Buy",
                    "Why It Matters",
                    "Red Flags",
                    "Notes"
                ],
                "rows": [
                    [
                        "Chassis",
                        "Dell Precision T5820 or HP Z4 G4",
                        "Professional workstation chassis for 24/7 operation.",
                        "Consumer gaming towers — worse airflow, cheaper VRMs.",
                        "Either brand works. Dell tends to be cheaper used."
                    ],
                    [
                        "CPU",
                        "Intel Core i7-10700 or Xeon W-2145",
                        "Multiple cores, high clock, QuickSync Gen 10+ for Jellyfin.",
                        "Xeon E5 v3/v4 — no QuickSync, old platform, high TDP.",
                        "i7-10700 is the sweet spot: 8 cores, high clock, drops into T5820/Z4."
                    ],
                    [
                        "RAM",
                        "64GB DDR4 ECC Registered",
                        "ECC silently corrects memory errors. ZFS requires it.",
                        "Non-ECC RAM with ZFS — a bit flip can corrupt the entire pool.",
                        "Used server ECC RDIMM ~$120–140 for 64GB. Buy 4x16GB."
                    ],
                    [
                        "Storage (OS/VM)",
                        "2TB NVMe SSD (Samsung 980 Pro)",
                        "Fast NVMe is where Proxmox runs VM disks and Docker volumes.",
                        "QLC NAND SSDs — write speeds collapse under sustained load.",
                        "Do not cheap out here. A good NVMe is the biggest quality-of-life upgrade."
                    ],
                    [
                        "HBA Card",
                        "LSI 9300-8i or Dell H330 (flashed to IT Mode)",
                        "ZFS needs direct pass-through to drives.",
                        "Hardware RAID card not flashed to IT Mode.",
                        "Most used T5820/Z4 listings ship with PERC H330. Budget time to flash it."
                    ],
                    [
                        "Networking",
                        "Intel or Broadcom NIC, 10GbE preferred",
                        "Intel I219/I350 — excellent Linux driver support.",
                        "Realtek NICs — poor Linux drivers, intermittent disconnects.",
                        "Intel X520 or Mellanox ConnectX-3 cards are cheap used."
                    ]
                ]
            },
            {
                "type": "h2",
                "content": "eBay / Refurbished Hardware: Buying Checklist"
            },
            {
                "type": "p",
                "content": "The refurbished enterprise market is the best value in homelab hardware. These are the specific things to verify before clicking Buy It Now:"
            },
            {
                "type": "table",
                "headers": [
                    "Check this",
                    "What to look for",
                    "Red flag"
                ],
                "rows": [
                    [
                        "PSU included and tested",
                        "Listing explicitly states PSU is included and tested. Enterprise workstation PSUs are proprietary — replacement is expensive.",
                        "'PSU not included', 'PSU untested', or silence on the subject. Walk away."
                    ],
                    [
                        "CPU generation",
                        "i7-10xxx, i9-10xxx, or Xeon W-2200 series (Cascade Lake, 2019+) for QuickSync Gen 10 and AVX-512.",
                        "i7-7xxx, i9-7xxx, or Xeon W-2100 (Skylake-W, 2017) — older QuickSync, worse transcoding. Anything Broadwell or earlier is too old."
                    ],
                    [
                        "RAM type and speed",
                        "DDR4 ECC Registered (RDIMM) at 2933MHz or 3200MHz. Confirm the listing states ECC.",
                        "'DDR4 non-ECC' or just 'DDR4' with no ECC mention. Non-ECC in a homelab running ZFS is a reliability risk."
                    ],
                    [
                        "Boot drive included",
                        "Some listings include the original SSD or HDD. Note the condition — you will likely replace it with your own NVMe.",
                        "Drives with 40,000+ hours of SMART runtime. Fine as a throwaway test drive; not for production data."
                    ],
                    [
                        "BIOS accessible / not locked",
                        "Ideally confirmed by seller. Enterprise machines sometimes have domain-joined BIOS passwords from corporate environments.",
                        "'BIOS password unknown' or 'sold as-is, could not test'. These can sometimes be cleared but it adds friction."
                    ],
                    [
                        "RAID card model",
                        "Note the exact RAID card model (e.g., PERC H330, PERC H730). You will need to flash it to IT Mode for ZFS. Confirm guides exist for your specific card.",
                        "'H830' or 'RAID card with cache battery' — the caching variants are harder to flash. Avoid if you can."
                    ],
                    [
                        "Seller feedback and return policy",
                        "Look for 98%+ positive feedback and at least 30-day returns. Enterprise resellers (not random individuals) are more reliable.",
                        "Zero-return listings from accounts with less than 50 feedback. No recourse if the machine is dead on arrival."
                    ],
                    [
                        "Cosmetic vs functional condition",
                        "'Cosmetic wear' is fine — scratches and dents do not affect performance. 'Fully tested, boots to BIOS' is the phrase you want.",
                        "'Powers on, not further tested' — this means the seller saw POST and nothing else. No confirmation of CPU, RAM, or drive functionality."
                    ],
                    [
                        "Noise and thermals",
                        "Enterprise workstations are designed for offices, not server rooms. They are loud under load but acceptable for a closet or basement.",
                        "Rack-mounted servers (1U, 2U) — jet engine noise at full load. A tower workstation is far quieter than a 1U rack server."
                    ]
                ]
            },
            {
                "type": "h2",
                "content": "General Hardware Gotchas"
            },
            {
                "type": "p",
                "content": "Things that catch homelab beginners off guard when buying or setting up hardware for the first time:"
            },
            {
                "type": "table",
                "headers": [
                    "Gotcha",
                    "What actually happens",
                    "How to avoid it"
                ],
                "rows": [
                    [
                        "SMR hard drives in a NAS",
                        "Shingled Magnetic Recording drives write data in overlapping tracks. During ZFS resilver (rebuilding after a drive swap), they throttle to near-zero write speeds. A resilver that should take 6 hours takes 4 days, during which a second failure means total data loss.",
                        "Buy CMR (Conventional Magnetic Recording) drives only: Seagate IronWolf Pro, WD Red Pro, Seagate Exos, WD Ultrastar. Never WD Red non-Pro (SMR), WD Blue, or Seagate Barracuda in a NAS."
                    ],
                    [
                        "RAID card blocking ZFS",
                        "The enterprise workstation ships with a PERC RAID card in RAID mode. Windows sees one big disk. Proxmox sees one big disk. ZFS cannot see individual drive health, cannot heal bit rot, and cannot manage its own redundancy.",
                        "Flash the card to IT Mode (also called HBA Mode) before installing Proxmox. The ServeTheHome forums have model-specific guides. Confirm your exact card model before buying."
                    ],
                    [
                        "Wrong RAM slot population",
                        "Buying 2x32GB sticks when 4x16GB is available. Two sticks on a quad-channel platform runs in dual-channel, halving memory bandwidth. ZFS metadata caching performance suffers significantly.",
                        "Fill all memory channels. Buy 4x16GB (or 8x8GB) instead of 2x32GB. Check your motherboard manual for the correct slot population order."
                    ],
                    [
                        "QuickSync not available in a VM",
                        "Jellyfin runs in a Docker container or VM. If you don't pass through the iGPU to the container, QuickSync is invisible and Jellyfin falls back to software transcoding (CPU), which is slow.",
                        "Either run Jellyfin directly on the host, or configure the Intel iGPU device pass-through in Proxmox: add /dev/dri to the LXC container config. This is well-documented."
                    ],
                    [
                        "UPS with a smart plug instead",
                        "A Kasa or Shelly smart plug can monitor power draw but cannot issue a graceful server shutdown during an outage — it just cuts power when it decides. The server sees a hard power loss, same as no UPS at all.",
                        "Use a real UPS with a USB management port (APC or CyberPower 1500VA). Install NUT (Network UPS Tools) and configure it to automatically shut down Proxmox when battery hits 15%."
                    ],
                    [
                        "Buying too much drive capacity at once",
                        "Buying 2x18TB drives immediately is expensive. If you fill a ZFS mirror over 80% capacity, ZFS performance degrades significantly due to fragmentation. You will then need to replace both drives simultaneously.",
                        "Start with 2x8TB or 2x10TB drives. Upgrade by replacing one drive at a time and letting ZFS resilver. ZFS expands the pool automatically when both drives are replaced with larger ones."
                    ],
                    [
                        "Mixing drive models in a ZFS mirror",
                        "Putting a 7200RPM Seagate next to a 5400RPM WD in the same mirror. The pool runs at the speed of the slowest drive and the different vibration profiles can mask S.M.A.R.T. warning signs.",
                        "Buy identical drives for each vdev mirror. Same model, same capacity, same firmware if possible. If identical is not available, at least match RPM and CMR vs SMR status."
                    ],
                    [
                        "Ignoring thermal paste age",
                        "Buying a refurbished workstation and immediately putting it under full load. Enterprise gear sometimes sits in warehouses for months or years. Old dried thermal paste causes thermal throttling and looks like a bad CPU.",
                        "Run Prime95 or stress-ng for 30 minutes immediately after purchase. If temps exceed 90C on the CPU, re-paste before deploying to production."
                    ],
                    [
                        "NYC apartment electrical circuits",
                        "Plugging a tower server, NAS, UPS, networking gear, and a NAS into a single 15A circuit. At 120V that is only 1800W of headroom, and the UPS plus tower can draw 200-300W under load.",
                        "Measure actual draw with a Kill A Watt meter before committing. A dedicated circuit (20A) for the server closet is worth having an electrician add if you are in an apartment you control."
                    ]
                ]
            }
        ]
    },
    {
        "id": "buying-the-nas",
        "title": "Buying the NAS",
        "elements": [
            {
                "type": "table",
                "headers": [
                    "Option",
                    "Example Hardware",
                    "Pros",
                    "Cons"
                ],
                "rows": [
                    [
                        "Synology (recommended)",
                        "DS923+ ($600) or DS1522+ ($700) + drives",
                        "Dead-simple DSM OS, excellent Immich/Syncthing packages, great community.",
                        "Proprietary ecosystem. Expansion expensive. Less flexible than TrueNAS."
                    ],
                    [
                        "QNAP",
                        "TS-453E ($450) + drives",
                        "More hardware flexibility, PCIe slots on some models for 10GbE.",
                        "QTS clunkier than DSM. History of serious security vulnerabilities."
                    ],
                    [
                        "DIY TrueNAS Scale",
                        "Used mini ITX + LSI HBA + drives (~$200–300 compute)",
                        "Maximum flexibility, ZFS native, full Linux, cheaper compute.",
                        "Requires Linux and ZFS knowledge. No hand-holding."
                    ],
                    [
                        "Used enterprise NAS",
                        "Dell PowerVault MD1200 + SFF server",
                        "Massive raw capacity cheaply. 12+ bays for a few hundred dollars.",
                        "Power-hungry (100W+). Loud. JBOD only — needs host HBA."
                    ]
                ]
            },
            {
                "type": "h2",
                "content": "NAS Drive Selection"
            },
            {
                "type": "p",
                "content": "The drives are the most important purchase for the NAS — the enclosure is just a container. For a ZFS mirror (2 drives, 1 can fail):"
            },
            {
                "type": "table",
                "headers": [
                    "Drive",
                    "Best for",
                    "Recommended models",
                    "Cost per TB",
                    "Watch out for"
                ],
                "rows": [
                    [
                        "NAS-grade HDD (recommended)",
                        "Primary storage pool — Immich, media, backups",
                        "Seagate IronWolf Pro 16TB, WD Red Pro 18TB",
                        "~$15-18/TB new",
                        "Avoid desktop drives (WD Blue, Seagate Barracuda) — not rated for NAS vibration and 24/7 duty cycles. They fail faster."
                    ],
                    [
                        "Refurbished enterprise HDD",
                        "Bulk storage on a budget",
                        "Seagate Exos X18, WD Ultrastar DC HC550 (manufacturer-recertified)",
                        "~$8-12/TB recertified",
                        "Buy manufacturer-recertified only — not third-party refurb. Seagate and WD sell their own recertified drives with a real warranty."
                    ],
                    [
                        "NVMe SSD (metadata/cache)",
                        "Proxmox Backup Server dedup metadata, ZFS L2ARC cache",
                        "Samsung 980 Pro, WD SN850X (500GB-1TB)",
                        "~$60-80 total",
                        "Only needed for the ZFS metadata vdev on TrueNAS. Synology handles this internally. Do not use QLC NVMe here."
                    ],
                    [
                        "DO NOT USE: SMR drives",
                        "Nothing in a NAS",
                        "WD Red non-Pro (SMR), Seagate Barracuda Compute",
                        "Cheapest per TB",
                        "SMR drives are catastrophically slow during ZFS resilver operations. A failed drive replacement that should take hours takes days or weeks and can trigger a cascade failure."
                    ]
                ]
            }
        ]
    },
    {
        "id": "mac-mini-mac-studio-as-storage-vs-nas",
        "title": "Mac Mini / Mac Studio as Storage — vs NAS",
        "elements": [
            {
                "type": "p",
                "content": "A reader suggested using Apple Silicon as storage rather than a dedicated NAS. Here's the honest assessment."
            },
            {
                "type": "table",
                "headers": [
                    "",
                    "Mac Mini M4 (16GB, 256GB SSD)",
                    "Mac Mini M4 (64GB, 2TB SSD) + external drives",
                    "Synology DS923+ NAS"
                ],
                "rows": [
                    [
                        "Primary role",
                        "Dev machine / Ollama inference node",
                        "Storage + inference combined",
                        "Dedicated storage appliance"
                    ],
                    [
                        "Storage expansion",
                        "External USB drives only — clunky, no hot-swap, no RAID",
                        "External drives or Thunderbolt RAID enclosure",
                        "4–8 hot-swappable SATA bays, native ZFS or RAID"
                    ],
                    [
                        "Data safety",
                        "No ZFS, no native RAID, drive failure = data loss unless mirrored externally",
                        "Thunderbolt RAID adds mirror, but no ZFS checksumming or scrub",
                        "ZFS native: checksums, scrub, resilver, snapshot replication"
                    ],
                    [
                        "24/7 reliability",
                        "macOS not designed for 24/7 headless server operation — system updates, keychain prompts, sleep states",
                        "Same — macOS server friction is real",
                        "Designed specifically for 24/7 storage operation"
                    ],
                    [
                        "Idle power",
                        "~6–10W (excellent)",
                        "~10–15W with drives spinning",
                        "~15–25W (acceptable)"
                    ],
                    [
                        "LLM inference",
                        "Excellent — unified memory, best tokens/watt for models that fit",
                        "Same — 64GB runs Qwen2.5-72B at Q4",
                        "No GPU, inference not viable"
                    ],
                    [
                        "Cost",
                        "~$700–900 new (compute only — no storage included)",
                        "~$1,400+ (64GB model) + external RAID",
                        "~$600–800 (enclosure) + drives separately"
                    ],
                    [
                        "Verdict",
                        "Great inference node. Terrible NAS replacement.",
                        "Interesting hybrid but expensive for what it is. macOS storage friction is the deal-breaker.",
                        "Purpose-built. Right tool for the job."
                    ]
                ]
            },
            {
                "type": "note",
                "title": "RECOMMENDATION:",
                "content": "Use a Mac Mini or Mac Studio as an LLM inference node at Stage 4 if that's your priority, but keep a dedicated NAS for storage. The unified memory advantage is real for inference. The storage management on macOS is genuinely frustrating for 24/7 duty.",
                "level": "note"
            }
        ]
    },
    {
        "id": "do-you-need-a-network-switch",
        "title": "Do You Need a Network Switch?",
        "elements": [
            {
                "type": "h2",
                "content": "Stage 1–2: No Switch Required"
            },
            {
                "type": "p",
                "content": "With only the Mini PC, plug directly into your ISP router. Tailscale handles remote access without any router configuration needed."
            },
            {
                "type": "h2",
                "content": "Stage 3: Get a Switch When the NAS Arrives"
            },
            {
                "type": "p",
                "content": "Add a 2.5GbE unmanaged switch between the Mini PC and NAS. Speeds up nightly backup jobs, Immich photo sync, and NAS operations dramatically."
            },
            {
                "type": "h2",
                "content": "Stage 4: Get a Managed Switch"
            },
            {
                "type": "p",
                "content": "Once you have the tower running Proxmox, a managed switch enables VLANs for server management traffic isolation and IoT segmentation. An 8-port managed switch with 2.5GbE costs $60–120."
            },
            {
                "type": "h2",
                "content": "What to Buy"
            },
            {
                "type": "table",
                "headers": [
                    "Stage",
                    "Switch",
                    "Why",
                    "Cost"
                ],
                "rows": [
                    [
                        "Stage 3 (optional)",
                        "TP-Link TL-SG105 or QNAP QSW-1105-5T (5-port 2.5GbE unmanaged)",
                        "No config needed. Faster wired connections.",
                        "~$30–50"
                    ],
                    [
                        "Stage 4 (recommended)",
                        "TP-Link TL-SG2008 or Netgear GS308T (8-port managed gigabit)",
                        "VLAN support, QoS, trunking.",
                        "~$60–80"
                    ],
                    [
                        "Stage 4 (performance)",
                        "MikroTik CRS305-1G-4S+IN (4x 10GbE SFP+)",
                        "Fanless, 10GbE between tower and NAS.",
                        "~$100–130"
                    ],
                    [
                        "Stage 5",
                        "Ubiquiti UniFi Switch 24 (VLAN, PoE)",
                        "Powers all floor APs, central management.",
                        "~$200–400"
                    ]
                ]
            }
        ]
    },
    {
        "id": "hardware-accessories-worth-getting",
        "title": "Hardware Accessories Worth Getting",
        "elements": [
            {
                "type": "h2",
                "content": "Get These Immediately (Stage 1)"
            },
            {
                "type": "table",
                "headers": [
                    "Item",
                    "Recommended Model",
                    "Cost",
                    "Why It Matters"
                ],
                "rows": [
                    [
                        "Kill A Watt Meter",
                        "P3 Kill A Watt P4400",
                        "~$25–30",
                        "NYC electricity is expensive. Measure everything before committing to 24/7 operation."
                    ],
                    [
                        "UPS — 1500VA Pure Sine Wave",
                        "CyberPower CP1500PFCLCD or APC Smart-UPS 1500VA",
                        "~$180–250",
                        "A brownout during a ZFS write can corrupt your storage pool. Non-negotiable once you store data you care about."
                    ],
                    [
                        "Cat6A Ethernet Patch Cables (flat)",
                        "Monoprice — 1m, 3m, 5m lengths",
                        "~$5–15 each",
                        "Flat cables tuck under baseboards. Cat6A supports 10GbE at 100m."
                    ],
                    [
                        "Short HDMI Cable (0.5m)",
                        "Any brand",
                        "~$8–12",
                        "Keep plugged into the server permanently. When SSH fails at 2am, you need a monitor connection in 5 seconds."
                    ],
                    [
                        "Velcro Cable Straps",
                        "Velcro brand (not zip ties — reusable)",
                        "~$10 roll",
                        "A tidy server area means you'll actually maintain it. Not trivial."
                    ]
                ]
            },
            {
                "type": "h2",
                "content": "Get With Stage 2–3"
            },
            {
                "type": "table",
                "headers": [
                    "Item",
                    "Recommended Model",
                    "Cost",
                    "Why It Matters"
                ],
                "rows": [
                    [
                        "RTL-SDR v3 Dongle",
                        "RTL-SDR Blog V3 (official — clones have worse shielding)",
                        "~$35–40",
                        "Utility meter readings, ADS-B aircraft, weather data. One antenna, infinite software."
                    ],
                    [
                        "Google Coral TPU (USB)",
                        "Google Coral USB Accelerator",
                        "~$60–80",
                        "Required for Frigate NVR. Without it, camera AI will max your CPU continuously."
                    ],
                    [
                        "Zigbee USB Coordinator",
                        "SONOFF Zigbee 3.0 USB Dongle Plus",
                        "~$20–35",
                        "Local-only smart home without cloud dependency. One dongle controls hundreds of sensors."
                    ],
                    [
                        "Zigbee Sensors Starter Pack",
                        "Aqara Door/Window Sensor P2 x4 + motion sensors x2",
                        "~$60–100",
                        "Laundry done alerts, door left open, overnight temperature. Start small, expand based on actual use."
                    ],
                    [
                        "Wall-Mount Shelf or Rack",
                        "12U open-frame wall-mount or IKEA LACK stack",
                        "~$20–150",
                        "Turns a pile of hardware into a server room. Improves airflow and maintenance access."
                    ]
                ]
            },
            {
                "type": "h2",
                "content": "Get With Stage 4"
            },
            {
                "type": "table",
                "headers": [
                    "Item",
                    "Recommended Model",
                    "Cost",
                    "Why It Matters"
                ],
                "rows": [
                    [
                        "Google Coral M.2/PCIe TPU",
                        "Coral M.2 Accelerator A+E key or PCIe x1",
                        "~$25–35 (used)",
                        "PCIe version slots directly into the tower. 100+ FPS AI inference at 2W."
                    ],
                    [
                        "10GbE NIC for Tower",
                        "Intel X520-DA1 or Mellanox ConnectX-3 (used)",
                        "~$20–40 used",
                        "10GbE turns a 45-minute Proxmox backup into a 4-minute one."
                    ],
                    [
                        "IR Night Vision Camera",
                        "Reolink RLC-820A (wired PoE, 4K) or Wyze Cam v3 with RTSP firmware",
                        "~$20–80",
                        "RTSP-capable IR cameras for Frigate NVR. Wyze is cheapest; Reolink is native RTSP."
                    ],
                    [
                        "Thermal Paste + Kit",
                        "Arctic MX-6 or Thermal Grizzly Kryonaut",
                        "~$10–15",
                        "Refurbished workstations often have dry paste. Re-paste before full-load deployment."
                    ],
                    [
                        "ECC RAM 64GB (4x16GB DDR4 RDIMM)",
                        "Samsung or Micron (check T5820/Z4 QVL)",
                        "~$120–160 used",
                        "ZFS trusts RAM completely. ECC prevents bit flip data corruption."
                    ]
                ]
            },
            {
                "type": "h2",
                "content": "Fun / Quality-of-Life Hardware"
            },
            {
                "type": "table",
                "headers": [
                    "Item",
                    "Recommended Model",
                    "Cost",
                    "Notes"
                ],
                "rows": [
                    [
                        "e-Ink Display (wall-mounted)",
                        "Waveshare 7.5\" e-Paper HAT + Raspberry Pi Zero 2W, or Inkplate 10",
                        "~$50–80",
                        "MTA countdowns, weather, server status. Looks like paper, visible in any lighting. Family uses it daily."
                    ],
                    [
                        "Small Touchscreen Tablet (kiosk)",
                        "Amazon Fire HD 8 (kiosk mode) or refurb iPad mini",
                        "~$50–120",
                        "Kitchen or hallway mounted. Shows Homarr dashboard, Mealie meal plan, HA controls."
                    ],
                    [
                        "Smart Plugs (energy monitoring)",
                        "TP-Link Kasa EP25 (Matter, energy monitoring)",
                        "~$15–20 each",
                        "Laundry done alerts via current sensing. The payoff is immediate household goodwill."
                    ],
                    [
                        "Aqara Door/Window Sensors",
                        "Aqara Door and Window Sensor P2",
                        "~$15 each",
                        "Building entrance → ntfy push to all phones = free building intercom."
                    ]
                ]
            }
        ]
    },
    {
        "id": "hardware-deal-finder-automated-scraping-for-good-finds",
        "title": "Hardware Deal Finder: Automated Scraping for Good Finds",
        "elements": [
            {
                "type": "p",
                "content": "The refurbished enterprise hardware market moves fast. A good RTX 3090 or Dell T5820 listing on eBay sells within hours. This section sets up automated monitoring so you see deals as they appear rather than checking manually."
            },
            {
                "type": "h2",
                "content": "What to Monitor"
            },
            {
                "type": "table",
                "headers": [
                    "Hardware target",
                    "Where to find it",
                    "Good price signal",
                    "Notes"
                ],
                "rows": [
                    [
                        "Dell Precision T5820 / HP Z4 G4 (tower workstation)",
                        "eBay, Facebook Marketplace, r/hardwareswap",
                        "$350–500 for a complete system with CPU",
                        "Check CPU model — avoid Xeon W-21xx if QuickSync matters to you"
                    ],
                    [
                        "RTX 3090 (24GB VRAM)",
                        "eBay, r/hardwareswap, Facebook Marketplace",
                        "$350–500 used",
                        "Verify it's not a mining card — check for excess thermal paste, bent fins, high mining hours"
                    ],
                    [
                        "RTX 4070 Ti Super (16GB VRAM)",
                        "eBay, Best Buy open-box, Newegg refurb",
                        "$500–600 open-box/refurb",
                        "Good alternative to 3090 — better power efficiency, less VRAM"
                    ],
                    [
                        "Intel X520 / Mellanox ConnectX-3 (10GbE NICs)",
                        "eBay",
                        "$15–30 each",
                        "Used enterprise NICs — pair with SFP+ DAC cables (~$8 on AliExpress)"
                    ],
                    [
                        "Google Coral TPU (M.2 or USB)",
                        "eBay, AliExpress",
                        "$25–50",
                        "AliExpress has legitimate ones — check seller ratings"
                    ],
                    [
                        "Samsung 980 Pro / WD SN850 NVMe",
                        "Amazon warehouse, Newegg",
                        "20–30% off MSRP",
                        "Check for manufacturer-refurbished listings specifically"
                    ],
                    [
                        "Seagate IronWolf Pro / WD Red Pro HDDs",
                        "ServerPartDeals.com",
                        "Manufacturer recertified ~$10–15/TB",
                        "ServerPartDeals is the go-to for manufacturer-recertified NAS drives"
                    ],
                    [
                        "ECC RAM (DDR4 RDIMM)",
                        "eBay, Crucial.com",
                        "$20–30 per 16GB stick",
                        "Buy matched pairs. Check compatibility with your T5820/Z4 G4 QVL before ordering"
                    ]
                ]
            },
            {
                "type": "h2",
                "content": "Automated Monitoring Options"
            },
            {
                "type": "h3",
                "content": "Option 1: Changedetection.io (Already in the Plan — Simplest)"
            },
            {
                "type": "list",
                "items": [
                    "Already running from Stage 2. Add eBay saved search URLs as monitored pages.",
                    "For eBay: run a search with your filters (title, condition, price range, shipping to your zip), copy the URL, add to Changedetection. Set to check every 30 minutes.",
                    "Changedetection detects when new listings appear (the page changes) and sends an ntfy push. You get notified within 30 minutes of a new listing.",
                    "Limitation: no price filtering — you get all new listings, not just ones under your target price. Fine for categories where you know what a good price looks like."
                ]
            },
            {
                "type": "h3",
                "content": "Option 2: n8n Workflow with eBay Finding API"
            },
            {
                "type": "list",
                "items": [
                    "eBay has a free developer API (Finding API) that returns structured search results as JSON. Register at developer.ebay.com — free tier allows 5,000 calls/day.",
                    "n8n workflow: every 30 minutes → call eBay Finding API with your search terms → filter results where price is below your threshold → send ntfy push with listing title, price, and direct link.",
                    "This gives you actual price filtering. Only pings you for listings under your target — dramatically less noise than Changedetection.",
                    "Add a second filter: listings where 'sold' count is 0 (brand new listing) AND posted in last 2 hours. Catches fresh listings before they sell."
                ]
            },
            {
                "type": "h3",
                "content": "Option 3: Hermes Browser Automation (Most Flexible)"
            },
            {
                "type": "list",
                "items": [
                    "Tell Hermes: 'Every morning at 8am, search eBay for RTX 3090 under $450, condition used, US seller, shipping included. List any new listings not in my seen list. Add all results to the seen list so I only get new ones.'",
                    "Hermes maintains the seen list in memory across sessions. Handles Facebook Marketplace too — eBay API doesn't cover FB.",
                    "For Facebook Marketplace: Hermes uses browser automation (Playwright) to search your local area. Less reliable than the API approach but covers a source that n8n cannot easily reach."
                ]
            },
            {
                "type": "h3",
                "content": "Option 4: Reddit Alerts (r/hardwareswap)"
            },
            {
                "type": "list",
                "items": [
                    "Use PRAW (Python Reddit API Wrapper) in an n8n Code node or a simple Python script to monitor r/hardwareswap for posts matching your search terms.",
                    "Filter by flair (SELLING), price range, and location (US, [NY] preferred for cheap shipping).",
                    "r/hardwareswap is often cheaper than eBay for GPU and RAM. Dell workstations appear occasionally but less frequently."
                ]
            },
            {
                "type": "h2",
                "content": "Price Tracking for New Hardware"
            },
            {
                "type": "p",
                "content": "For new hardware where you are waiting for a price drop:"
            },
            {
                "type": "list",
                "items": [
                    "CamelCamelCamel (camelcamelcamel.com) — Amazon price history tracker. Supports email alerts when price drops to your target. Free. No homelab setup needed.",
                    "Keepa — more detailed Amazon price tracking. Browser extension shows historical price on the product page. Free tier is sufficient.",
                    "For non-Amazon: Changedetection.io pointed at the Newegg or B&H product page. Price change = ntfy notification. Manual check required since price is embedded in page HTML — use a CSS selector targeting the price element for clean alerts."
                ]
            }
        ]
    },
    {
        "id": "dev-environments-localhost-vs-build-vs-prod",
        "title": "Dev Environments: Localhost vs. Build vs. Prod",
        "elements": [
            {
                "type": "h2",
                "content": "Why the Distinction Matters"
            },
            {
                "type": "p",
                "content": "Running a single environment means any mistake — a bad database migration, a broken API change — hits your live project immediately. The three-environment model solves this."
            },
            {
                "type": "table",
                "headers": [],
                "rows": [
                    [
                        "Development (localhost)",
                        "Your laptop or VS Code Server on the tower. Hot-reload, test databases, no SSL, no external access."
                    ],
                    [
                        "Staging",
                        "Mirrors production as closely as possible. Same Docker Compose files, same env var structure, but a staging domain and sanitized database copy."
                    ],
                    [
                        "Production",
                        "Live environment. Real domain, real SSL, real data, real users. Only code that passed staging gets deployed here."
                    ]
                ]
            },
            {
                "type": "h2",
                "content": "Implementing This"
            },
            {
                "type": "h3",
                "content": "Stage 1–3: Practical Single-Server Approach"
            },
            {
                "type": "list",
                "items": [
                    "Dev: runs on your laptop using Docker Compose with .env.development",
                    "Staging: separate Docker Compose stack on the Mini PC under a staging subdomain via Nginx Proxy Manager",
                    "Production: primary stack on the same Mini PC with strict .env.production",
                    "Use Woodpecker CI: push to staging branch → auto-deploys to staging. Merge to main → deploys to prod."
                ]
            },
            {
                "type": "h3",
                "content": "Stage 4+: Proper VM Isolation"
            },
            {
                "type": "list",
                "items": [
                    "VM/LXC: staging — own IP, own Postgres, own PocketBase. Snapshot before risky migrations.",
                    "VM/LXC: production — live stack. Only touched via CI/CD pipeline.",
                    "VM/LXC: dev-tools — Gitea, Woodpecker CI. Separate from both so a broken CI doesn't affect live services."
                ]
            },
            {
                "type": "h3",
                "content": "Recommended Toolchain"
            },
            {
                "type": "table",
                "headers": [],
                "rows": [
                    [
                        "Git server",
                        "Gitea / Forgejo — private repos, branch protection on main"
                    ],
                    [
                        "CI/CD",
                        "Woodpecker CI — lightweight, runs in Docker alongside Gitea"
                    ],
                    [
                        "Deploy target",
                        "Coolify — self-hosted Vercel/Netlify alternative, handles env vars, domains, SSL, zero-downtime deploys"
                    ],
                    [
                        "Secret management",
                        "Woodpecker CI secrets (Stage 2–3); HashiCorp Vault (Stage 4)"
                    ],
                    [
                        "Reverse proxy",
                        "Nginx Proxy Manager (Stage 1–3) → Pangolin (Stage 3+)"
                    ]
                ]
            }
        ]
    },
    {
        "id": "important-considerations",
        "title": "Important Considerations",
        "elements": [
            {
                "type": "p",
                "content": "Read these before deploying anything. These are the mistakes that are expensive, embarrassing, or legally problematic to make after the fact."
            },
            {
                "type": "note",
                "title": "TENANT NETWORK ISOLATION — ALREADY HANDLED (FOR NOW)",
                "content": "Tenants are on completely separate routers and are already network-isolated from your family and server by default. You do not need VLANs for tenant separation right now — that problem is already solved. VLAN planning in Stage 5 addresses the future scenario when family members move to other floors.",
                "level": "note"
            },
            {
                "type": "critical",
                "title": "CRITICAL — NEVER OPEN PORT 80 OR 443 ON YOUR RESIDENTIAL ROUTER",
                "content": "Automated vulnerability scanners continuously sweep the entire IPv4 space. An open port on a residential router will be probed within hours. Use Cloudflare Tunnels (Stage 1–2) then Pangolin (Stage 3+) for externally exposed services — outbound-only encrypted tunnels where your real IP is never exposed. SSL is managed automatically.",
                "level": "critical"
            },
            {
                "type": "critical",
                "title": "CRITICAL — VAULTWARDEN OFF-SITE BACKUP IS NOT OPTIONAL",
                "content": "If Vaultwarden hosts the family's passwords and the server dies without an off-site backup, every account — banking, email, immigration portals, social media — becomes inaccessible simultaneously. Configure Rclone to sync the Vaultwarden data directory to Backblaze B2 on a nightly schedule from day one. Test the restore process before the family depends on it.",
                "level": "critical"
            },
            {
                "type": "warning",
                "title": "WARNING — NYC LOCAL LAW 97",
                "content": "Local Law 97 imposes carbon emissions caps on NYC buildings over 25,000 square feet. Fines began in 2025 based on 2024 emissions data. Even if your building is under the threshold, LL84 energy benchmarking requirements may still apply. Check nyc.gov for your building's specific obligations. The homelab tools in Stage 4 can automate tracking and deadline alerts.",
                "level": "warning"
            },
            {
                "type": "warning",
                "title": "WARNING — ZFS REQUIRES HBA IN IT MODE",
                "content": "Standard hardware RAID controllers mask individual drive health from the OS. ZFS requires direct low-level access to each drive to detect and heal bit rot. The tower workstation ships with a hardware RAID card — it must be flashed to IT Mode before installing Proxmox. This is documented on ServeTheHome forums for specific card models.",
                "level": "warning"
            },
            {
                "type": "warning",
                "title": "WARNING — POWER FAILURE DURING ACTIVE WRITES",
                "content": "A sudden power loss can corrupt an active ZFS pool. NYC grid reliability is lower than average, especially during summer peak demand. A 1500VA UPS provides approximately 15 minutes of runtime. Configure NUT (Network UPS Tools) to automatically issue a graceful Proxmox shutdown when the UPS battery hits 15%. Non-negotiable for any serious data storage.",
                "level": "warning"
            },
            {
                "type": "warning",
                "title": "WARNING — DOWNLOAD CLIENTS NEED A SEPARATE COMMERCIAL VPN",
                "content": "Your ISP monitors BitTorrent traffic and forwards DMCA notices to your account. Any download client (Transmission, qBittorrent, Deluge) used with Jellyseerr must be routed through a separate commercial VPN — not Tailscale. Tailscale exits through your residential IP, which defeats the purpose entirely. Use Gluetun (a Docker VPN kill-switch container) configured with Mullvad, ProtonVPN, or AirVPN — all three support the WireGuard config format Gluetun needs and allow P2P traffic. Mullvad is the most popular homelab choice: no logs, no account email required, pay with cash or crypto, ~$5/month. Run the download client container networked through Gluetun so all its traffic is forced through the commercial VPN tunnel. If the VPN drops, Gluetun kills the download client automatically — no accidental ISP exposure.",
                "level": "warning"
            },
            {
                "type": "warning",
                "title": "WARNING — TENANT DATA PRIVACY",
                "content": "If you build a tenant portal that collects maintenance requests, rent records, or personal contact information, you are acting as a data controller. Keep all tenant-facing services behind Tailscale or a login-gated reverse proxy. Have a clear data retention policy. As a landlord, you have additional legal obligations around tenant data privacy under NYC law.",
                "level": "warning"
            },
            {
                "type": "note",
                "title": "NOTE — THE MINI PC BECOMES YOUR BACKUP SERVER AT STAGE 4",
                "content": "When you buy the tower workstation, the HP EliteDesk 800 G6 Mini does not become obsolete — it becomes the Proxmox Backup Server target. At 10–15W idle, it is the perfect low-power vault for receiving nightly incremental backups from the tower. You get this 'free' as part of the natural upgrade path.",
                "level": "note"
            },
            {
                "type": "note",
                "title": "NOTE — AI TOOLS FOR CHINESE-SPEAKING FAMILY MEMBERS",
                "content": "Open-WebUI with OpenRouter routing to Claude or GPT-4o answers questions in Mandarin reliably. Qwen2 (local, Stage 4) is specifically optimized for Chinese language tasks. For medical, legal, and immigration questions, always frame AI responses as a starting point for research, not a final answer. Connect parents with NYC free legal aid organizations for serious matters.",
                "level": "note"
            }
        ]
    },
    {
        "id": "lancache-game-download-cache-for-instant-updates",
        "title": "LanCache: Game Download Cache for Instant Updates",
        "elements": [
            {
                "type": "p",
                "content": "LanCache.NET is a self-hosted caching proxy for game downloads. When the first machine on your network downloads a game or update, LanCache intercepts and caches it locally. Every subsequent machine on your network gets that content at local network speed (1–10Gbps) instead of re-downloading from the internet. This is one of the most genuinely satisfying homelab projects — the payoff is immediate and obvious."
            },
            {
                "type": "h2",
                "content": "What It Does"
            },
            {
                "type": "table",
                "headers": [],
                "rows": [
                    [
                        "How it works",
                        "Works as a transparent DNS-based caching proxy. It rewrites specific DNS entries (e.g., steamcontent.com) to point at your local cache server. Steam, Epic, Battle.net, and others download from your server instead of the internet — they never know the difference."
                    ],
                    [
                        "Supported platforms",
                        "Steam (official native support since 2024), Epic Games, Battle.net (Blizzard), Origin/EA, Riot (League of Legends, Valorant), Microsoft/Xbox, GOG, Uplay, and more. Covers essentially every major PC gaming platform."
                    ],
                    [
                        "The payoff",
                        "Machine 1 downloads Call of Duty at 500Mbps from the internet. LanCache stores 120GB. Machine 2, 3, 4 all download that same 120GB at 2.5–10Gbps from the local cache. Zero internet usage. Instant for large updates."
                    ],
                    [
                        "For your building",
                        "Especially valuable if multiple family members game on separate PCs across floors. One person downloads a big update; everyone else gets it instantly from the NAS."
                    ],
                    [
                        "Pre-filling (prefill tools)",
                        "Projects like steam-lancache-prefill can pre-download games into the cache before anyone requests them — useful for popular multiplayer games during a LAN party or before a big group play session."
                    ]
                ]
            },
            {
                "type": "h2",
                "content": "Setup"
            },
            {
                "type": "table",
                "headers": [
                    "Component",
                    "What It Does",
                    "Notes"
                ],
                "rows": [
                    [
                        "lancachenet/monolithic (Docker)",
                        "The caching proxy server. Handles all platforms with one container.",
                        "Mount a large cache directory from the NAS. Set CACHE_DISK_SIZE to match available storage."
                    ],
                    [
                        "lancachenet/lancache-dns (Docker)",
                        "DNS server that redirects game CDN hostnames to your cache server.",
                        "Run alongside AdGuard Home — set your network's DNS to this first, then upstream to AdGuard."
                    ],
                    [
                        "NAS storage",
                        "Where cached content is stored. 1TB handles most popular games. 4TB is comfortable for a family gaming library.",
                        "Set CACHE_DISK_SIZE in the container env. LanCache auto-prunes least-recently-used content when it approaches the limit."
                    ],
                    [
                        "Network",
                        "All gaming machines must use the LanCache DNS server for this to work.",
                        "Set in AdGuard Home's upstream DNS, or in your router's DHCP DNS setting."
                    ]
                ]
            },
            {
                "type": "h2",
                "content": "Realistic Storage Planning"
            },
            {
                "type": "list",
                "items": [
                    "1TB cache: covers most popular games (CS2, Valorant, Fortnite, etc.). Popular content stays cached; old installs rotate out.",
                    "4TB cache: comfortable for a family with varied gaming tastes. Large open-world games (Cyberpunk at 70GB, GTA V at 100GB) stay cached.",
                    "10TB cache: if you want effectively permanent storage of everything ever downloaded. Likely overkill.",
                    "Rule of thumb: 250 million cache entries per 1TB, at an average file size of ~500KB."
                ]
            },
            {
                "type": "note",
                "title": "NOTE:",
                "content": "LanCache only caches HTTP traffic, not HTTPS. The vast majority of game content is HTTP (game files, patches). Metadata, authentication, and DRM are HTTPS and pass through uncached — this is correct and expected behavior.",
                "level": "note"
            },
            {
                "type": "h2",
                "content": "Links"
            },
            {
                "type": "list",
                "items": [
                    "LanCache.NET documentation: https://lancache.net/",
                    "Monolithic Docker container: https://lancache.net/docs/containers/monolithic/",
                    "steam-lancache-prefill (pre-download tool): https://github.com/tpill90/steam-lancache-prefill",
                    "epic-lancache-prefill: https://github.com/tpill90/epic-lancache-prefill"
                ]
            }
        ]
    },
    {
        "id": "stage-1-day-one-services",
        "title": "Stage 1 — Day One Services",
        "elements": [
            {
                "type": "p",
                "content": "Install these immediately. Each runs within 32GB RAM. Install Tailscale and AdGuard Home first — everything else builds on top of them."
            },
            {
                "type": "table",
                "headers": [
                    "Service",
                    "Category",
                    "Difficulty",
                    "What It Does",
                    "Watch Out For"
                ],
                "rows": [
                    [
                        "<a href=\"https://tailscale.com/\" target=\"_blank\">Tailscale</a>",
                        "Network / VPN",
                        "2/10",
                        "Zero-config WireGuard VPN mesh. Install before everything else — your remote access safety net. Handles CGNAT automatically.",
                        "Free tier is sufficient."
                    ],
                    [
                        "<a href=\"https://adguard.com/en/adguard-home/overview.html\" target=\"_blank\">AdGuard Home</a>",
                        "Network / Privacy",
                        "2/10",
                        "Whole-network DNS ad and tracker blocking. Every device on every floor benefits instantly without installing anything.",
                        "Can break Google Shopping links. Whitelist for family exceptions."
                    ],
                    [
                        "<a href=\"https://github.com/louislam/uptime-kuma\" target=\"_blank\">Uptime Kuma</a>",
                        "Monitoring",
                        "2/10",
                        "Pings all services, fires alerts when anything goes down. Tiny footprint.",
                        "Cannot alert if the server itself dies. It goes down with the ship."
                    ],
                    [
                        "<a href=\"https://ntfy.sh/\" target=\"_blank\">ntfy.sh (self-hosted)</a>",
                        "Notifications",
                        "2/10",
                        "Unified push notification server. Every automation funnels here and lands on any family phone.",
                        "iOS requires a workaround for instant delivery — ntfy handles this better than Gotify."
                    ],
                    [
                        "<a href=\"https://lancache.net/\" target=\"_blank\">LanCache.NET</a>",
                        "Gaming / Network",
                        "3/10",
                        "Caches Steam, Epic, Battle.net, and more game downloads locally. Second PC downloads the same game at 10Gbps instead of the internet. Instant updates for everyone.",
                        "Needs DNS override integration with AdGuard Home. Requires NAS or large drive for cache storage."
                    ],
                    [
                        "<a href=\"https://jellyfin.org/\" target=\"_blank\">Jellyfin</a>",
                        "Media",
                        "3/10",
                        "Private ad-free streaming. QuickSync handles 4K transcoding. Chinese films and dramas for parents.",
                        "QuickSync works out of the box on Linux. Media files live on external drive now, NAS later."
                    ],
                    [
                        "<a href=\"https://www.navidrome.org/\" target=\"_blank\">Navidrome</a>",
                        "Media / Music",
                        "2/10",
                        "Self-hosted music streaming. Subsonic-compatible — works with Symfonium on any phone.",
                        "Supports Chinese character filenames correctly."
                    ],
                    [
                        "<a href=\"https://github.com/janeczku/calibre-web\" target=\"_blank\">Calibre-Web</a>",
                        "Media / Books",
                        "2/10",
                        "E-book library. Chinese novels, manga, reference books accessible on any device.",
                        "Needs Calibre desktop app to manage metadata. Web UI is read-only."
                    ],
                    [
                        "<a href=\"https://mealie.io/\" target=\"_blank\">Mealie</a>",
                        "Family / Food",
                        "2/10",
                        "Digital recipe book with URL scraping and grocery list generation. Import Chinese recipe sites.",
                        "Add Chinese recipe sites to the import allow-list."
                    ],
                    [
                        "<a href=\"https://vikunja.io/\" target=\"_blank\">Vikunja</a>",
                        "Family / Tasks",
                        "2/10",
                        "Shared household task manager with kanban and reminders.",
                        "Mobile app on iOS and Android."
                    ],
                    [
                        "<a href=\"https://github.com/dani-garcia/vaultwarden\" target=\"_blank\">Vaultwarden</a>",
                        "Security",
                        "3/10",
                        "Self-hosted Bitwarden. Free family org, unlimited shared collections. Chinese UI supported.",
                        "Off-site backup is mandatory. No backup = family loses all passwords on server failure."
                    ],
                    [
                        "<a href=\"https://github.com/Stirling-Tools/Stirling-PDF\" target=\"_blank\">Stirling-PDF</a>",
                        "Productivity",
                        "2/10",
                        "Local PDF editor. Process sensitive documents without uploading to Adobe.",
                        "Install both English and Simplified Chinese OCR language packs."
                    ],
                    [
                        "<a href=\"https://it-tools.tech/\" target=\"_blank\">IT-Tools</a>",
                        "Dev",
                        "1/10",
                        "100+ developer utilities in one page — JWT decoder, UUID generator, cron explainer, etc.",
                        "Fully static. Practically zero RAM or CPU."
                    ],
                    [
                        "<a href=\"https://docs.paperless-ngx.com/\" target=\"_blank\">Paperless-ngx</a>",
                        "Productivity",
                        "3/10",
                        "Document management with OCR. Scan and index important household papers in searchable Mandarin and English.",
                        "Install Simplified Chinese OCR packs immediately."
                    ],
                    [
                        "<a href=\"https://github.com/ll931217/Wallos\" target=\"_blank\">Wallos</a>",
                        "Finance",
                        "2/10",
                        "Subscription tracker. Logs every recurring household charge.",
                        "Manual entry only to start. Extend with n8n webhooks later."
                    ],
                    [
                        "<a href=\"https://github.com/alexjustesen/speedtest-tracker\" target=\"_blank\">Speedtest Tracker</a>",
                        "Monitoring",
                        "2/10",
                        "Scheduled Ookla speed tests over time. Documented ISP evidence for dispute claims.",
                        "Schedule during off-hours so it doesn't interfere with streaming."
                    ],
                    [
                        "<a href=\"https://github.com/containrrr/watchtower\" target=\"_blank\">Watchtower</a>",
                        "Maintenance",
                        "1/10",
                        "Automatically updates Docker container images on schedule.",
                        "Set WATCHTOWER_CLEANUP=true to remove old image layers."
                    ],
                    [
                        "<a href=\"https://dozzle.dev/\" target=\"_blank\">Dozzle</a>",
                        "Maintenance",
                        "1/10",
                        "Real-time Docker log viewer in browser. Replaces SSH for quick log checks.",
                        "Read-only viewer. Pair with Uptime Kuma for alerts."
                    ],
                    [
                        "<a href=\"https://gethomepage.dev/\" target=\"_blank\">Homepage / Homarr</a>",
                        "Dashboard",
                        "2/10",
                        "Unified dashboard with service icons, system stats, quick links.",
                        "Use PWA on iPhones to add to home screen without App Store."
                    ],
                    [
                        "<a href=\"https://github.com/nkanaev/yarr\" target=\"_blank\">Yarr RSS Reader</a>",
                        "Social / News",
                        "2/10",
                        "Self-hosted RSS reader. Aggregate homelab news, NYC blogs, Chinese news sources, tech feeds.",
                        "Supplement with n8n scrapers for paywalled Chinese news sites."
                    ],
                    [
                        "<a href=\"https://privatebin.info/\" target=\"_blank\">PrivateBin</a>",
                        "Dev / Fun",
                        "1/10",
                        "Encrypted self-hosted pastebin. Share code snippets end-to-end encrypted — server never sees content.",
                        "Set expiry on all pastes to avoid accumulation."
                    ],
                    [
                        "<a href=\"https://excalidraw.com/\" target=\"_blank\">Excalidraw (self-hosted)</a>",
                        "Dev / Creative",
                        "2/10",
                        "Whiteboard and diagram tool. Network diagrams, system architecture, UI wireframes, building floor plans.",
                        "Real-time collaboration with external users not available in self-hosted version."
                    ],
                    [
                        "<a href=\"https://usememos.com/\" target=\"_blank\">Memos (quick capture)</a>",
                        "Personal / Fun",
                        "2/10",
                        "Twitter-style micro-journal. Capture quick thoughts, links, code snippets. Pairs with SilverBullet for quick-capture → organized note workflow.",
                        "Memos is for quick capture; SilverBullet is for organized knowledge. Don't conflate them."
                    ],
                    [
                        "<a href=\"https://planka.app/\" target=\"_blank\">Planka (Kanban)</a>",
                        "Personal / Fun",
                        "2/10",
                        "Beautiful Trello-style personal Kanban. Trip planning, creative projects, personal to-dos.",
                        "Plane (Stage 2) is a superset. Migrate boards when Plane is deployed."
                    ],
                    [
                        "<a href=\"https://github.com/Forceu/Gokapi\" target=\"_blank\">Gokapi</a>",
                        "Privacy",
                        "2/10",
                        "Self-hosted file drop with expiring links. Share large files without WeTransfer.",
                        "Monitor disk usage if sharing large documents regularly."
                    ],
                    [
                        "<a href=\"https://github.com/sissbruecker/linkding\" target=\"_blank\">Linkding</a>",
                        "Productivity",
                        "2/10",
                        "Minimal bookmark manager with tags and search.",
                        "Browser extension for one-click saving from any device."
                    ],
                    [
                        "<a href=\"https://github.com/crazy-max/diun\" target=\"_blank\">Diun</a>",
                        "Maintenance",
                        "2/10",
                        "Alerts you via ntfy when a new Docker image version is available, before Watchtower applies it.",
                        "Pairs with Watchtower — get notified first, then let Watchtower update on schedule."
                    ],
                    [
                        "<a href=\"https://getdashdot.com/\" target=\"_blank\">Dashdot</a> / <a href=\"https://nicolargo.github.io/glances/\" target=\"_blank\">Glances</a>",
                        "Monitoring",
                        "1/10",
                        "Real-time system stats in the browser. CPU, RAM, disk, network, Docker containers.",
                        "Dashdot is visual (great for dashboards). Glances also has an API for integration."
                    ]
                ]
            }
        ]
    },
    {
        "id": "discord-bot-hub",
        "title": "Personal Bot Hub (Discord/Telegram)",
        "elements": [
            {
                "type": "h2",
                "content": "Personal Bot Hub (Discord/Telegram)"
            },
            {
                "type": "table",
                "headers": [
                    "Use Case",
                    "Benefit",
                    "Recommended Platform",
                    "Notes"
                ],
                "rows": [
                    [
                        "Server Status Alerts",
                        "Real-time pings for downtime",
                        "Telegram",
                        "Fast, reliable push notifications"
                    ],
                    [
                        "LLM Chat Gateway",
                        "Chat with local AI models",
                        "Telegram",
                        "Streaming speed is significantly faster than Discord"
                    ],
                    [
                        "Home Automation",
                        "Remote device control",
                        "Discord",
                        "Great for community/family multi-user access"
                    ],
                    [
                        "Media Requests",
                        "Request movies via bot",
                        "Discord",
                        "Integration with Jellyseerr is native and robust"
                    ],
                    [
                        "Security Notifier",
                        "Motion detection snapshots",
                        "Telegram",
                        "Encrypted and faster photo loading in most apps"
                    ]
                ]
            },
            {
                "type": "p",
                "content": "Why Telegram? For LLM streaming and rapid notifications, Telegram generally provides lower latency and a more 'real-time' feel compared to Discord."
            },
            {
                "type": "h3",
                "content": "Social & Fun Features (For Friends)"
            },
            {
                "type": "table",
                "headers": [
                    "Feature",
                    "Implementation",
                    "Recommended Platform"
                ],
                "rows": [
                    [
                        "Local Translation",
                        "Instant Chinese/English translation for group chats",
                        "Discord"
                    ],
                    [
                        "Game Server Control",
                        "Start/Stop Minecraft or Palworld via /start command",
                        "Discord"
                    ],
                    [
                        "Music Queue Bot",
                        "Friends can add YouTube/Spotify links to floor speakers",
                        "Discord"
                    ]
                ]
            },
            {
                "type": "h3",
                "content": "Family Status & Safety Hub"
            },
            {
                "type": "table",
                "headers": [
                    "Feature",
                    "Description",
                    "Recommended Platform"
                ],
                "rows": [
                    [
                        "Family Status",
                        "Query 'Who is home?' or 'Is the laundry done?'",
                        "Telegram/Discord"
                    ],
                    [
                        "Leak Detection",
                        "Instant critical alert if Aqara sensors detect water under sink",
                        "Telegram"
                    ],
                    [
                        "Door Lock Alert",
                        "Nudge if front door is unlocked after 11 PM",
                        "Telegram"
                    ],
                    [
                        "Stove Monitor",
                        "Critical alert if smart plug detects high load for >3 hours",
                        "Telegram"
                    ]
                ]
            },
            {
                "type": "h3",
                "content": "Maintenance & DevOps Hub"
            },
            {
                "type": "table",
                "headers": [
                    "Task",
                    "Hermes Implementation",
                    "Recommended Platform"
                ],
                "rows": [
                    [
                        "Docker Health",
                        "Weekly summary of running vs. stopped containers",
                        "Telegram"
                    ],
                    [
                        "Backup Success",
                        "Ntfy → Telegram confirmation after Rclone sync to B2",
                        "Telegram"
                    ],
                    [
                        "SSL Expiry Watch",
                        "30-day warning before Let's Encrypt certificates expire",
                        "Discord"
                    ],
                    [
                        "CPU/Temp Spikes",
                        "Alert if Tower workstation exceeds 90C during AI training",
                        "Telegram"
                    ]
                ]
            },
            {
                "type": "h3",
                "content": "Media & Entertainment Watch"
            },
            {
                "type": "table",
                "headers": [
                    "Feature",
                    "Benefit",
                    "Recommended Platform"
                ],
                "rows": [
                    [
                        "Movie Release Watch",
                        "Alert when a Jellyseerr request is ready to watch",
                        "Discord"
                    ],
                    [
                        "TV Airtime Reminders",
                        "Nudge 1 hour before a followed Chinese drama airs",
                        "Telegram"
                    ],
                    [
                        "Shared Watchlist",
                        "Add to family 'Must Watch' list via simple command",
                        "Discord"
                    ]
                ]
            },
            {
                "type": "h3",
                "content": "Actually Useful Hub (Technical & NYC)"
            },
            {
                "type": "table",
                "headers": [
                    "Use Case",
                    "Hermes Automation",
                    "Recommended Platform"
                ],
                "rows": [
                    [
                        "ZFS Health Alerts",
                        "Real-time push if a drive in the NAS pool shows checksum errors",
                        "Telegram"
                    ],
                    [
                        "NYC DOB Permit Watch",
                        "Monitor your block for new construction filings; summary every Monday",
                        "Telegram"
                    ],
                    [
                        "ISP Speed Proof",
                        "Daily graph of Speedtest results if below 80% of advertised speed",
                        "Discord"
                    ],
                    [
                        "UPS Shutdown Warning",
                        "Critical countdown during brownouts before server auto-shutdown",
                        "Telegram"
                    ]
                ]
            },
            {
                "type": "h3",
                "content": "Family Utility (Non-Technical)"
            },
            {
                "type": "table",
                "headers": [
                    "Feature",
                    "Benefit for Parents",
                    "Recommended Platform"
                ],
                "rows": [
                    [
                        "Smart Plug Energy Report",
                        "Monthly summary of how much the AC or Heater cost in RMB/USD",
                        "Telegram"
                    ],
                    [
                        "Grocery Sync",
                        "Add items to Mealie list via simple voice note or text",
                        "Telegram"
                    ],
                    [
                        "Photo Flashback",
                        "Daily 'On this day' highlight from Immich shared library",
                        "Telegram"
                    ],
                    [
                        "Intercom Broadcast",
                        "Text-to-speech announcement on all floor speakers via bot",
                        "Discord"
                    ]
                ]
            }
        ]
    },
    {
        "id": "stage-2-after-learning-docker-networking",
        "title": "Stage 2 — After Learning Docker & Networking",
        "elements": [
            {
                "type": "table",
                "headers": [
                    "Service",
                    "Category",
                    "Difficulty",
                    "What It Does",
                    "Watch Out For"
                ],
                "rows": [
                    [
                        "<a href=\"https://github.com/fosrl/pangolin\" target=\"_blank\">Pangolin + Newt</a>",
                        "Network / Infra",
                        "5/10",
                        "Replace Cloudflare Tunnels. Self-hosted tunneled reverse proxy with auth, auto-SSL, and no video traffic restrictions. The right choice once you're exposing Jellyfin externally.",
                        "Requires a cheap VPS (~€4/month). See the Pangolin section above."
                    ],
                    [
                        "<a href=\"https://nginxproxymanager.com/\" target=\"_blank\">Nginx Proxy Manager (interim)</a>",
                        "Network / Infra",
                        "4/10",
                        "GUI reverse proxy for early external access before Pangolin is set up. Give every service a real subdomain with auto-SSL.",
                        "Pair with Cloudflare Tunnels early on. Migrate to Pangolin when you have the VPS."
                    ],
                    [
                        "<a href=\"https://www.authelia.com/\" target=\"_blank\">Authelia</a>",
                        "Security",
                        "6/10",
                        "Adds 2FA and SSO in front of any service via the reverse proxy. One unified login for all household apps.",
                        "Configuration YAML is verbose. Test in staging — one misconfiguration locks you out entirely."
                    ],
                    [
                        "<a href=\"https://www.home-assistant.io/\" target=\"_blank\">Home Assistant</a>",
                        "IoT / Automation",
                        "4/10",
                        "Central IoT hub and automation engine. Laundry detection, mailbox alerts, DSNY trash reminders.",
                        "Runs best in its own VM or supervised install. Docker loses some add-on functionality."
                    ],
                    [
                        "<a href=\"https://n8n.io/\" target=\"_blank\">n8n</a>",
                        "Automation",
                        "5/10",
                        "Webhook and automation engine. NYC grid alerts, GitHub notifications, price change webhooks, laundry done push.",
                        "Infinite loop workflows will max RAM. Always add rate limits and error handling."
                    ],
                    [
                        "<a href=\"https://changedetection.io/\" target=\"_blank\">Changedetection.io</a>",
                        "Automation / NYC",
                        "3/10",
                        "Monitors any webpage for changes. NYC DOB permits, eBay hardware deals, visa status pages.",
                        "Use CSS selectors to target specific page elements to avoid false positives from ad content."
                    ],
                    [
                        "<a href=\"https://forgejo.org/\" target=\"_blank\">Gitea / Forgejo</a>",
                        "Dev",
                        "4/10",
                        "Self-hosted GitHub. Private repos for React projects, homelab configs, family scripts.",
                        "Forgejo is the community fork with more active development."
                    ],
                    [
                        "<a href=\"https://woodpecker-ci.org/\" target=\"_blank\">Woodpecker CI</a>",
                        "Dev",
                        "5/10",
                        "Lightweight CI/CD paired with Gitea. Tests, builds, and deploys on every push.",
                        "Requires a runner container. Keep pipeline configs in the repo so they version-control with code."
                    ],
                    [
                        "<a href=\"https://coolify.io/\" target=\"_blank\">Coolify</a>",
                        "Dev / Deploy",
                        "5/10",
                        "Self-hosted Vercel/Netlify. Listens for Git pushes, builds React projects, deploys automatically.",
                        "Compiling heavy node_modules causes brief CPU spikes, but 32GB RAM handles it fine."
                    ],
                    [
                        "<a href=\"https://pocketbase.io/\" target=\"_blank\">PocketBase</a>",
                        "Dev",
                        "3/10",
                        "Single-file backend — auth, database, file storage, REST API in one binary. Use instead of self-hosted Supabase on 16GB RAM.",
                        "Not for massive scale but perfect for personal and family apps. Single file = easy backup."
                    ],
                    [
                        "<a href=\"https://silverbullet.md/\" target=\"_blank\">SilverBullet</a>",
                        "Dev / Notes",
                        "3/10",
                        "Local-first markdown notes. Dev configs, architecture diagrams, homelab documentation. AI-refinement via silverbullet-ai plugin.",
                        "Stores notes as plain markdown files — easy to version control in Gitea."
                    ],
                    [
                        "<a href=\"https://plane.so/\" target=\"_blank\">Plane</a>",
                        "Dev / Learning",
                        "5/10",
                        "Best open-source Jira alternative. Clean UI, epics, cycles, Git integration. Also your learning Kanban.",
                        "Requires PostgreSQL, Redis, MinIO. Needs 2–4GB RAM — fits in 32GB comfortably."
                    ],
                    [
                        "<a href=\"https://www.bookstackapp.com/\" target=\"_blank\">BookStack</a>",
                        "Productivity",
                        "3/10",
                        "Family wiki. Network configs, Chinese-language guides for parents, tenant onboarding docs.",
                        "Set a quarterly review reminder. Discipline required to keep it updated."
                    ],
                    [
                        "<a href=\"https://github.com/benbusby/whoogle-search\" target=\"_blank\">Whoogle</a>",
                        "Privacy",
                        "3/10",
                        "Self-hosted Google search without ads, tracking, or personalization.",
                        "Occasionally breaks when Google updates their frontend."
                    ],
                    [
                        "<a href=\"https://openwebui.com/\" target=\"_blank\">Open-WebUI + OpenRouter</a>",
                        "AI",
                        "4/10",
                        "ChatGPT replacement. Routes to Claude/GPT-4o at API prices. Supports Mandarin natively. Kimi API works here too.",
                        "Do not run Ollama local models on this CPU — 1–2 tok/sec is unusable. Always use API."
                    ],
                    [
                        "<a href=\"https://wakapi.dev/\" target=\"_blank\">Wakapi (coding time tracker)</a>",
                        "Dev / Fun",
                        "2/10",
                        "Self-hosted WakaTime. Tracks languages, projects, and files across editors. Satisfying weekly stats.",
                        "VS Code plugin sends heartbeats to your Wakapi instance — configure to point at your server."
                    ],
                    [
                        "<a href=\"https://rallly.co/\" target=\"_blank\">Rallly (event scheduling)</a>",
                        "Social / Fun",
                        "2/10",
                        "Self-hosted Doodle. Schedule meetups with friends — no accounts required, no data sold.",
                        "Works best when friends don't need to create accounts. Share a link."
                    ],
                    [
                        "<a href=\"https://invidious.io/\" target=\"_blank\">Invidious</a> / <a href=\"https://piped.video/\" target=\"_blank\">Piped</a>",
                        "Privacy / Fun",
                        "3/10",
                        "Self-hosted YouTube frontend. No ads, no tracking, no recommendation rabbit holes. SponsorBlock built into Piped.",
                        "Pick one. Piped is more actively maintained."
                    ],
                    [
                        "<a href=\"https://hoppscotch.io/\" target=\"_blank\">Hoppscotch</a>",
                        "Dev",
                        "4/10",
                        "Self-hosted API development tool. Stores API collections on-prem — no homelab credentials on Postman's cloud.",
                        "Requires PostgreSQL and Redis for team sync. Use Bruno (Git-based) as zero-config alternative."
                    ],
                    [
                        "<a href=\"https://umami.is/\" target=\"_blank\">Umami</a>",
                        "Dev / Analytics",
                        "3/10",
                        "Privacy-respecting analytics for React apps. No cookies, no ad blockers, no Google.",
                        "Do not use PostHog — it will eat your 16GB RAM."
                    ],
                    [
                        "Hermes Agent",
                        "AI / Automation",
                        "5/10",
                        "Persistent self-improving AI agent that lives on your server. Connects to Telegram, Discord. Builds reusable skills over time. See the Hermes section above.",
                        "Start with OpenRouter or Kimi API. Run in Docker with limited permissions."
                    ],
                    [
                        "Multica",
                        "Dev / Agentic",
                        "5/10",
                        "Kanban board where AI coding agents are real teammates. Assign tasks to Claude Code or Codex; they pick up work overnight and report back.",
                        "Self-host via Docker Compose. Auto-detects claude, codex, openclaw, opencode on your PATH."
                    ],
                    [
                        "<a href=\"https://jellyseerr.dev/\" target=\"_blank\">Jellyseerr</a>",
                        "Media",
                        "4/10",
                        "Movie/show request portal for Jellyfin. Family submits a title; it handles sourcing.",
                        "Route download clients through VPN (Gluetun) to avoid DMCA notices."
                    ],
                    [
                        "<a href=\"https://tubearchivist.com/\" target=\"_blank\">Tube Archivist</a>",
                        "Media",
                        "4/10",
                        "Downloads and indexes YouTube channels locally. Archive Chinese cooking channels and language content.",
                        "Respects yt-dlp rate limits. Storage-hungry — needs NAS soon."
                    ],
                    [
                        "<a href=\"https://opendata.cityofnewyork.us/\" target=\"_blank\">NYC 311 / DOB scrapers</a>",
                        "NYC / Civic",
                        "5/10",
                        "Python scripts polling 311 Open Data and DOB NOW portal for your address. Know about HPD filings before formal notification.",
                        "DOB portal schema changes occasionally break scrapers. Use Open Data API endpoints where available."
                    ],
                    [
                        "<a href=\"https://api.mta.info/\" target=\"_blank\">MTA live dashboard</a>",
                        "NYC / Civic",
                        "5/10",
                        "Custom Python or HA dashboard parsing MTA GTFS Realtime for your station. Real countdowns on e-ink display or phone widget.",
                        "Limit refresh to 30–60 sec for e-ink. MTA feeds have ghost trains — cache locally."
                    ],
                    [
                        "<a href=\"https://immich.app/\" target=\"_blank\">Immich (starter)</a>",
                        "Family / Photos",
                        "4/10",
                        "Google Photos replacement. Auto-backup parents' phones. Face recognition, shared albums.",
                        "Initial library sync generates heat. Run overnight."
                    ],
                    [
                        "<a href=\"https://www.monicahq.com/\" target=\"_blank\">Monica CRM</a>",
                        "Productivity",
                        "3/10",
                        "Personal relationship manager. Birthdays, gift ideas, conversation notes, follow-up reminders for family and tenants.",
                        "Shines most with large extended families."
                    ],
                    [
                        "<a href=\"https://linkwarden.app/\" target=\"_blank\">Linkwarden</a>",
                        "Productivity",
                        "3/10",
                        "Bookmark manager that screenshots and archives the full page. Prevents link rot for homelab resources.",
                        "Headless Chrome adds ~500MB RAM overhead."
                    ],
                    [
                        "<a href=\"https://actualbudget.org/\" target=\"_blank\">Actual Budget</a>",
                        "Finance",
                        "4/10",
                        "Household budgeting with envelope method. SimpleFIN bridge for bank imports.",
                        "Encrypt your storage — transaction history is sensitive."
                    ]
                ]
            },
            {
                "type": "note",
                "title": "Elder Care: The Mom's Chair Sensor",
                "content": "Idea: Place an Aqara vibration or pressure sensor under mom's favorite chair. Monitor sitting duration to encourage healthy movement."
            },
            {
                "type": "h3",
                "content": "The 'Smart' Debate: Simple Script vs. Hermes Agent"
            },
            {
                "type": "p",
                "content": "While a binary script can detect 'sitting > 2 hours', it lacks the empathy and context required for elder care. Hermes transforms a 'buzzer' into a 'caretaker'."
            },
            {
                "type": "table",
                "headers": ["Scenario", "Simple Script (Binary)", "Hermes Agent (Nuanced)"],
                "rows": [
                    [
                        "Mom is feeling ill",
                        "Nudges her anyway; creates unnecessary stress.",
                        "Checks health logs or sleep stats; realizes she's resting and offers to bring water instead."
                    ],
                    [
                        "Watching a long movie",
                        "Interrupts the climax of the show with a notification.",
                        "Queries Jellyfin status; sees a movie is active and waits for the credits to roll before nudging."
                    ],
                    [
                        "Alarm Fatigue",
                        "Sends the same text every time; Mom eventually mutes the 'annoying buzzer'.",
                        "Rotates personalities and languages (warm Mandarin, funny English) to keep the interaction engaging."
                    ],
                    [
                        "User Feedback",
                        "Impossible to 'explain' to a script why she is sitting.",
                        "Accepts replies like 'My knee hurts' and automatically updates the weekly activity goals."
                    ],
                    [
                        "Environmental Context",
                        "Ignores everything but the clock.",
                        "Checks Weather API; suggests a walk only if it's not raining and the air quality is good."
                    ]
                ]
            }
        ]
    },
    {
        "id": "stage-3-after-getting-a-nas",
        "title": "Stage 3 — After Getting a NAS",
        "elements": [
            {
                "type": "table",
                "headers": [
                    "Service",
                    "Category",
                    "Difficulty",
                    "What It Does",
                    "Watch Out For"
                ],
                "rows": [
                    [
                        "Immich (full)",
                        "Family / Photos",
                        "4/10",
                        "Full family photo library on NAS. Face recognition, location maps, memory highlights.",
                        "Initial bulk sync generates heat. Run overnight."
                    ],
                    [
                        "Bazarr + Whisper AI",
                        "Family / Media",
                        "6/10",
                        "Auto-generates Chinese subtitles for English Jellyfin content. Entirely local.",
                        "A 2-hour movie takes 30+ minutes on CPU. Run as batch job."
                    ],
                    [
                        "Syncthing",
                        "Storage / Sync",
                        "3/10",
                        "Encrypted peer-to-peer file sync between devices and NAS.",
                        "Not a backup — syncs deletions. Still need Proxmox Backup Server for versioned backups."
                    ],
                    [
                        "Proxmox Backup Server",
                        "Backup",
                        "5/10",
                        "Block-level incremental VM snapshots with deduplication. NAS is the backup target.",
                        "Test restore drills monthly. An untested backup is not a backup."
                    ],
                    [
                        "LanCache (full deployment)",
                        "Gaming / Network",
                        "3/10",
                        "Full game download cache with NAS storage. First download is from internet; all subsequent downloads are local at 10Gbps.",
                        "Needs the NAS for adequate storage (1–4TB cache target)."
                    ],
                    [
                        "Grafana + InfluxDB",
                        "Monitoring",
                        "5/10",
                        "Time-series dashboards for grid stress, server power, building temps, network traffic, disk health.",
                        "Wait for NAS storage — InfluxDB writes constantly. Uptime Kuma covers monitoring needs until then."
                    ],
                    [
                        "LibreSpeed multi-floor",
                        "Fun / Monitoring",
                        "4/10",
                        "Self-hosted speed test server. Pi Zero 2W agents on each floor test every 30 min. Grafana dashboard shows download/upload/ping per floor over time.",
                        "Pi Zero 2W agents at ~$15 each. Reveals Wi-Fi dead zones and AP placement needs."
                    ],
                    [
                        "Kavita",
                        "Media / Books",
                        "3/10",
                        "Comic, manga, and novel server pointing at NAS storage.",
                        "Supports EPUB, CBZ, CBR, PDF."
                    ],
                    [
                        "<a href=\"https://www.audiobookshelf.org/\" target=\"_blank\">AudioBookshelf</a>",
                        "Family / Media",
                        "3/10",
                        "Self-hosted Audible. Serves audiobooks and podcasts with per-user progress sync.",
                        "Chinese audiobooks: ensure proper Unicode file names for metadata matching."
                    ],
                    [
                        "<a href=\"https://n8n.io/\" target=\"_blank\">n8n (full deployment)</a>",
                        "Automation",
                        "5/10",
                        "Full automation engine now that execution logs have real storage on the NAS.",
                        "Keep log retention to 30–90 days or logs eat NAS storage."
                    ],
                    [
                        "<a href=\"https://rclone.org/\" target=\"_blank\">Rclone + Backblaze B2</a>",
                        "Backup",
                        "4/10",
                        "Encrypted off-site backup of NAS to Backblaze B2 — the 3rd copy in the 3-2-1 strategy.",
                        "Test decryption before you need it. An encrypted backup you can't decrypt is not a backup."
                    ],
                    [
                        "<a href=\"https://forgejo.org/\" target=\"_blank\">Forgejo Actions</a>",
                        "Dev",
                        "6/10",
                        "Full CI/CD pipeline running locally. Tests, builds, deploys — stored and executed on your hardware.",
                        "Runner containers need CPU headroom. Queue builds so they don't run concurrently."
                    ],
                    [
                        "<a href=\"https://owncast.online/\" target=\"_blank\">Owncast</a>",
                        "Media / Fun",
                        "4/10",
                        "Self-hosted live streaming — RTMP ingest, web player, live chat. Private family watch parties.",
                        "Enable QuickSync hardware encoding in OBS for the source stream."
                    ],
                    [
                        "<a href=\"https://nextcloud.com/\" target=\"_blank\">Nextcloud (CalDAV/CardDAV)</a>",
                        "Family / Productivity",
                        "5/10",
                        "Shared family calendar and contacts sync. Run CalDAV/CardDAV only — not file storage.",
                        "Use Syncthing for files. Nextcloud is for calendar/contacts only in this setup."
                    ],
                    [
                        "<a href=\"https://gamevault.io/\" target=\"_blank\">GameVault</a>",
                        "Gaming / Fun",
                        "4/10",
                        "Self-hosted game library server. Organize and serve DRM-free games (GOG, itch.io) to family over the network.",
                        "Legal only for games you own. DRM-free games only."
                    ],
                    [
                        "<a href=\"https://szurubooru.org/\" target=\"_blank\">Szurubooru</a>",
                        "Dev / Creative",
                        "5/10",
                        "Self-hosted image board with boolean tag search. Organize art references, UI inspiration, project moodboards.",
                        "Moving files out strips metadata tags. Treat as the canonical storage location."
                    ]
                ]
            }
        ]
    },
    {
        "id": "stage-4-after-a-tower-workstation",
        "title": "Stage 4 — After a Tower Workstation",
        "elements": [
            {
                "type": "table",
                "headers": [
                    "Service",
                    "Category",
                    "Difficulty",
                    "What It Does",
                    "Watch Out For"
                ],
                "rows": [
                    [
                        "<a href=\"https://frigate.video/\" target=\"_blank\">Frigate NVR</a>",
                        "Security / IoT",
                        "8/10",
                        "AI camera recognition — only alerts for actual people and vehicles. Coral TPU strictly required.",
                        "Without Coral TPU, CPU inference will continuously max out the processor."
                    ],
                    [
                        "<a href=\"https://supabase.com/\" target=\"_blank\">Supabase (self-hosted)</a>",
                        "Dev",
                        "6/10",
                        "Full Postgres + Auth + Storage + Realtime backend. 15 containers runs fine on 64GB ECC RAM.",
                        "Do not attempt on 16GB RAM."
                    ],
                    [
                        "<a href=\"https://penpot.app/\" target=\"_blank\">Penpot</a>",
                        "Dev / Design",
                        "5/10",
                        "Open-source Figma with native SVG output and MCP AI agent integration.",
                        "RAM-hungry. Requires dedicated PostgreSQL and Redis."
                    ],
                    [
                        "<a href=\"https://ersatztv.org/\" target=\"_blank\">ErsatzTV</a>",
                        "Family / Media",
                        "6/10",
                        "Turns Jellyfin library into 24/7 live TV channels. Parents flip to a channel instead of browsing.",
                        "Continuous transcoding needs real TDP headroom. Not viable on the Mini PC CPU."
                    ],
                    [
                        "<a href=\"https://ollama.com/\" target=\"_blank\">Ollama + local LLMs</a>",
                        "AI",
                        "5/10",
                        "Fast local AI inference with a GPU or AI accelerator card. Qwen2 for Chinese, Llama 3 for English.",
                        "Unusable on CPU only. Use OpenRouter API until the tower is ready."
                    ],
                    [
                        "<a href=\"https://moonlight-stream.org/\" target=\"_blank\">Sunshine + Moonlight</a>",
                        "Gaming / Fun",
                        "5/10",
                        "Game streaming from tower to any screen. Play PC games on the living room TV at sub-10ms latency.",
                        "NVIDIA GameReady driver for NVENC. Quality degrades on WiFi — wire the host machine."
                    ],
                    [
                        "<a href=\"https://openai.com/research/whisper\" target=\"_blank\">Whisper + Speaker Diarization</a>",
                        "Family / AI",
                        "6/10",
                        "Transcribe and identify speakers in family video call recordings or meeting audio. Chinese diarization supported.",
                        "1-hour recording takes 30–60 minutes to process. Run as overnight batch jobs."
                    ],
                    [
                        "<a href=\"https://openinterpreter.com/\" target=\"_blank\">Open Interpreter (agent)</a>",
                        "Dev / AI",
                        "7/10",
                        "LLM-powered agent that executes code based on natural language. Run locally via Ollama.",
                        "Run in an isolated VM with no network access to production services. Never give it production credentials."
                    ],
                    [
                        "<a href=\"https://pterodactyl.io/\" target=\"_blank\">Pterodactyl + Minecraft</a>",
                        "Gaming / Fun",
                        "6/10",
                        "Game server management panel. Minecraft benefits from the tower's high single-thread clock speed.",
                        "Route traffic through Pangolin to mask home IP from players. Allocate 8GB RAM minimum per Minecraft server."
                    ],
                    [
                        "<a href=\"https://github.com/bemasher/rtlamr\" target=\"_blank\">rtlamr utility meters</a>",
                        "IoT / Building",
                        "7/10",
                        "RTL-SDR dongle intercepts 900MHz signals from building gas and water meters.",
                        "Requires USB passthrough to a VM or LXC container."
                    ],
                    [
                        "<a href=\"https://wazuh.com/\" target=\"_blank\">Wazuh SIEM</a>",
                        "Security",
                        "8/10",
                        "Intrusion detection. Alerts on suspicious logins, lateral network movement across all floors.",
                        "Complex to tune without alert fatigue. Graduate here after networking fundamentals are solid."
                    ],
                    [
                        "<a href=\"https://openwrt.org/\" target=\"_blank\">OpenWRT VLAN per floor</a>",
                        "Network / Security",
                        "7/10",
                        "Network-level isolation so tenants and family floors can't see each other's devices.",
                        "More urgent than Stage 4 placement suggests if tenants currently share your router."
                    ],
                    [
                        "<a href=\"https://qwenlm.github.io/\" target=\"_blank\">Qwen2 (Chinese LLM)</a>",
                        "Family / AI",
                        "6/10",
                        "Alibaba's Chinese-optimized LLM for Mandarin AI assistant. Local, private, fully Chinese.",
                        "7B needs ~8GB VRAM minimum. 72B needs significantly more (or Mac Studio 128GB)."
                    ],
                    [
                        "<a href=\"https://useanything.com/\" target=\"_blank\">Local RAG over NYC docs</a>",
                        "NYC / AI",
                        "7/10",
                        "Feed HPD notices, LL97 PDFs, DOB zoning maps into AnythingLLM for plain-English Q&A.",
                        "Government PDF parsing is difficult. Budget time for prompt tuning."
                    ],
                    [
                        "NYC LL97 compliance tracker",
                        "NYC / Civic",
                        "7/10",
                        "Python dashboard tracking your building's Energy Use Intensity against the legal emissions cap.",
                        "Buildings must also file LL84 annual benchmarking reports. Automate deadline reminders via ntfy."
                    ],
                    [
                        "<a href=\"https://storybook.js.org/\" target=\"_blank\">Storybook (CI-hosted)</a>",
                        "Dev",
                        "5/10",
                        "Auto-updating React component library documentation. Living design system and portfolio piece.",
                        "Only worthwhile once you have a real component library worth documenting."
                    ],
                    [
                        "<a href=\"https://plausible.io/\" target=\"_blank\">Plausible Analytics</a>",
                        "Dev / Analytics",
                        "4/10",
                        "Full self-hosted analytics with funnel tracking and custom event goals.",
                        "Heavier than Umami. Only justify for funnel tracking that Umami lacks."
                    ],
                    [
                        "Immigration doc assistant",
                        "Family / AI",
                        "7/10",
                        "RAG pipeline over USCIS documents and visa guides. Parents ask questions in Mandarin.",
                        "Label AI responses as informational — not legal advice. Critical docs reviewed by an attorney."
                    ],
                    [
                        "<a href=\"https://about.gitlab.com/\" target=\"_blank\">GitLab CE</a>",
                        "Dev / Enterprise",
                        "7/10",
                        "Enterprise Git and CI/CD. Hands-on practice with software used at large companies.",
                        "Requires 4–8GB RAM just to idle. Tower-only."
                    ],
                    [
                        "AI video analysis",
                        "Dev / Fun",
                        "7/10",
                        "Feed video clips to a local VLM for auto-captions, highlights, or sports breakdowns.",
                        "VLM video analysis is GPU-memory intensive. 4K will be slow even on 24GB VRAM."
                    ],
                    [
                        "<a href=\"https://useanything.com/\" target=\"_blank\">AnythingLLM (knowledge base)</a>",
                        "Dev / Social",
                        "6/10",
                        "Full RAG pipeline. Upload PDFs, web pages, notes. Family queries the knowledge base in natural language.",
                        "Best on the tower due to embedding model RAM requirements."
                    ],
                    [
                        "Jellyfin + SyncPlay watch party",
                        "Social / Fun",
                        "5/10",
                        "Synchronizes video playback across multiple clients. Watch a movie with friends across boroughs in perfect sync.",
                        "All participants need a Jellyfin account. Bandwidth scales with simultaneous streams."
                    ],
                    [
                        "Wakapi + Grafana leaderboard",
                        "Dev / Fun",
                        "4/10",
                        "Import coding time data into Grafana. Streak tracking, language breakdown, weekly comparison.",
                        "Only meaningful once you have consistent coding habits to visualize."
                    ],
                    [
                        "3D printer control",
                        "Creative / Fun",
                        "5/10",
                        "Octoprint or Mainsail on a Pi connected to a 3D printer. Remote monitoring, queue jobs, ntfy alerts.",
                        "Pair with a Kasa plug for emergency remote power cutoff via Home Assistant."
                    ],
                    [
                        "Multiplayer game server (Valheim/Terraria)",
                        "Gaming / Fun",
                        "6/10",
                        "Dedicated game server for friends. Valheim and Terraria are single-threaded — high clock speed beats core count.",
                        "Route traffic through Pangolin. Valheim needs 4–6GB RAM; Terraria 1–2GB."
                    ],
                    [
                        "Penpot (design collab)",
                        "Dev / Creative",
                        "5/10",
                        "Share Figma-like design files with developer friends. Component handoff, collaborative UI work.",
                        "Tower-only due to RAM. Slow on the Mini PC."
                    ]
                ]
            },
            {
                "type": "note",
                "title": "NOTE — ComfyUI Removed:",
                "content": "ComfyUI (Stable Diffusion) has been removed from this plan. The GPU resource contention with Ollama, the complexity of model management, and the limited general-use value for a family homelab make it poor ROI. If you specifically want image generation, ComfyUI is excellent — but set up Ollama and LLM inference first, and add it as a separate optional project.",
                "level": "warning"
            }
        ]
    },
    {
        "id": "stage-5-far-future-family-spreads-across-multiple-floors",
        "title": "Stage 5 — Far Future: Family Spreads Across Multiple Floors",
        "elements": [
            {
                "type": "p",
                "content": "This stage only becomes relevant when family members move to other floors. Timeline estimate: 3–7 years out."
            },
            {
                "type": "h2",
                "content": "Services That Only Make Sense at Stage 5"
            },
            {
                "type": "table",
                "headers": [
                    "Service",
                    "Category",
                    "Difficulty",
                    "What It Does",
                    "Watch Out For"
                ],
                "rows": [
                    [
                        "<a href=\"https://ui.com/unifi/network-controller\" target=\"_blank\">UniFi Network Controller</a>",
                        "Network / Infra",
                        "5/10",
                        "Central management for all UniFi APs, switches, and the firewall across every floor. Single dashboard to see every connected device in the building by floor.",
                        "Requires a dedicated controller VM or UniFi Cloud Key. The Dream Machine Pro has it built in."
                    ],
                    [
                        "VLAN per family unit",
                        "Network / Security",
                        "6/10",
                        "Assign each floor its own VLAN — parents' floor, brother's floor, your floor — with firewall rules allowing specific shared services (Jellyfin, Immich) but blocking everything else by default.",
                        "Plan for: Management, Family-Floor1, Family-Floor2, Family-Floor3, IoT, Guest."
                    ],
                    [
                        "<a href=\"https://ui.com/unifi/protect\" target=\"_blank\">UniFi Protect (cameras)</a>",
                        "Security / IoT",
                        "6/10",
                        "Unified camera management across all floors with AI person detection, package detection, and per-floor access control. Integrates natively with Frigate NVR for local AI processing.",
                        "Requires Ubiquiti camera hardware or compatible RTSP cameras. License costs apply for some features."
                    ],
                    [
                        "<a href=\"https://www.home-assistant.io/\" target=\"_blank\">Inter-floor Home Assistant</a>",
                        "IoT / Automation",
                        "6/10",
                        "One Home Assistant instance covering all floors — shared routines, cross-floor presence detection, unified lighting scenes, and multi-floor occupancy tracking for heating efficiency.",
                        "Zigbee repeaters needed between floors for thick concrete or brick walls. Map device locations before buying sensors."
                    ],
                    [
                        "Per-floor media endpoints",
                        "Media / Family",
                        "5/10",
                        "Each floor's TV pulls from the same Jellyfin server but has its own Jellyseerr account, watch history, and recommendations. No more overwriting each other's watch progress.",
                        "Jellyfin user profiles handle this natively. Set up separate accounts per floor unit, not per person."
                    ],
                    [
                        "<a href=\"https://immich.app/\" target=\"_blank\">Shared Immich with albums</a>",
                        "Family / Photos",
                        "5/10",
                        "One Immich instance where each family unit has their own library but can share albums with the whole family. Grandparents on one floor see shared albums without exposing their whole camera roll.",
                        "Immich's sharing model supports this natively. Set up from the beginning with per-floor accounts — migrating later is tedious."
                    ],
                    [
                        "<a href=\"https://nextcloud.com/\" target=\"_blank\">Family Nextcloud instance</a>",
                        "Productivity",
                        "6/10",
                        "Shared calendar, contacts, and document collaboration across all floors. Shared grocery lists, family event planning, and document collaboration on leases or tax filings.",
                        "Run CalDAV and CardDAV sync only — don't use Nextcloud as a file sync tool. Syncthing handles files better per floor."
                    ],
                    [
                        "<a href=\"https://pve.proxmox.com/wiki/High_Availability_Cluster\" target=\"_blank\">Proxmox HA cluster (2-node)</a>",
                        "Infrastructure",
                        "8/10",
                        "Two Proxmox nodes (tower + a second server on another floor) forming a basic HA cluster. If one node dies, VMs migrate automatically to the surviving node. True residential high availability.",
                        "Two-node clusters require a quorum device (a third lightweight machine or a cloud witness) to prevent split-brain scenarios. Complex to set up correctly but bullet-proof once stable."
                    ],
                    [
                        "<a href=\"https://netbox.dev/\" target=\"_blank\">NetBox (building-wide)</a>",
                        "Network / Dev",
                        "5/10",
                        "Full building infrastructure map — every device, IP, VLAN, patch panel port, Ethernet run, and AP location across all floors. The source of truth when something breaks at 2am.",
                        "Spend time upfront mapping the physical infrastructure. An incomplete NetBox is less useful than a good spreadsheet."
                    ],
                    [
                        "<a href=\"https://tailscale.com/\" target=\"_blank\">Per-floor Tailscale node</a>",
                        "Network / VPN",
                        "3/10",
                        "Each floor's main device (mini PC, NAS, or router) is a Tailscale node. Family members on any floor can securely reach shared services from anywhere in the world without VPN configuration.",
                        "Tailscale's subnet router feature lets each floor's node advertise its local subnet to the mesh. No per-device setup needed for non-technical family members."
                    ],
                    [
                        "<a href=\"https://grafana.com/\" target=\"_blank\">Family monitoring dashboard</a>",
                        "Monitoring / Family",
                        "5/10",
                        "A read-only Grafana dashboard showing all-floors status — which floor's internet is up, server health, power usage per floor, and whether anyone left a door sensor open. Visible on hallway tablets.",
                        "Keep it genuinely read-only. A display-only dashboard for non-technical family members should never have edit access to underlying systems."
                    ],
                    [
                        "<a href=\"https://www.freepbx.org/\" target=\"_blank\">Building intercom system</a>",
                        "IoT / Fun",
                        "7/10",
                        "SIP-based VoIP intercom using Asterisk or FreePBX. Each floor has an IP phone or tablet app. Ring any floor from any floor without using phones. Doorbell camera integrates as an extension.",
                        "SIP configuration is notoriously fiddly. Start with a simple Linphone or Zoiper app test before buying dedicated hardware."
                    ],
                    [
                        "<a href=\"https://actualbudget.org/\" target=\"_blank\">Shared Actual Budget</a>",
                        "Finance",
                        "5/10",
                        "Shared household budget with per-floor spending categories. Track shared building expenses (repairs, utilities) vs. per-unit costs. Generate a monthly summary for all family members.",
                        "Actual Budget supports multiple users but is not designed for true multi-user concurrent editing. Use separate budget files that sync to a shared Gitea repo as a workaround."
                    ],
                    [
                        "<a href=\"https://networkupstools.org/\" target=\"_blank\">Whole-building UPS monitor</a>",
                        "Monitoring / IoT",
                        "5/10",
                        "NUT (Network UPS Tools) with agents on each floor's UPS reporting status to a central dashboard. When NYC grid dips, all floors get simultaneous graceful shutdown commands.",
                        "Each floor's UPS needs its own NUT server agent. The central server polls all agents. Test the failover sequence manually before trusting it during an actual brownout."
                    ]
                ]
            }
        ]
    },
    {
        "id": "network-architecture-at-stage-5",
        "title": "Network Architecture at Stage 5",
        "elements": [
            {
                "type": "h2",
                "content": "Network Architecture at Stage 5"
            },
            {
                "type": "table",
                "headers": [],
                "rows": [
                    [
                        "VLAN 10 — Management",
                        "Tower, NAS, your personal devices. SSH and Proxmox management. No family devices."
                    ],
                    [
                        "VLAN 20 — Family Floor 1 (Parents)",
                        "Parents' devices. Full access to Jellyfin, Immich shared albums, Mealie. No management VLAN access."
                    ],
                    [
                        "VLAN 30 — Family Floor 2 (Brother)",
                        "Brother's devices and IoT. Same shared service access. Firewall blocks cross-floor device visibility."
                    ],
                    [
                        "VLAN 40 — Family Floor 3 (You)",
                        "Your personal devices, dev machines. Full access including management tunnel via Tailscale."
                    ],
                    [
                        "VLAN 50 — IoT",
                        "All smart plugs, sensors, cameras across every floor. Zero outbound internet. Home Assistant only via firewall rule."
                    ],
                    [
                        "VLAN 60 — Guest",
                        "Visitors and contractors. Internet only. No access to any family service or device."
                    ]
                ]
            },
            {
                "type": "h2",
                "content": "Network Architecture at Stage 5"
            },
            {
                "type": "p",
                "content": "The target network topology at Stage 5 is a managed UniFi stack with a central firewall, a building-wide switch backbone, and one AP per floor on the same SSID with seamless roaming. VLAN design:"
            },
            {
                "type": "list",
                "items": [
                    "<strong>VLAN 10 — Management</strong> — Only the tower server, NAS nodes, and your personal devices. No family member devices except yours. SSH and Proxmox management live here.",
                    "<strong>VLAN 20 — Family Floor 1 (Parents)</strong> — Parents' devices, their floor's smart home gear. Full access to Jellyfin, Immich shared albums, Mealie, and family dashboard. No access to management VLAN.",
                    "<strong>VLAN 30 — Family Floor 2 (Brother)</strong> — Brother's devices and IoT. Same shared service access as Floor 1. Firewall blocks cross-floor device visibility — no lateral movement between family units.",
                    "<strong>VLAN 40 — Family Floor 3 (You)</strong> — Your personal devices, dev machines, and lab gear. Full access to all services including management tunnel via Tailscale.",
                    "<strong>VLAN 50 — IoT</strong> — All smart plugs, sensors, cameras, and e-ink displays across every floor. Zero outbound internet access. Can only talk to Home Assistant on the management VLAN through a specific firewall rule.",
                    "<strong>VLAN 60 — Guest</strong> — Visitors and contractor devices. Internet only. No access to any family service or device. Isolated completely from all other VLANs."
                ]
            },
            {
                "type": "p",
                "content": "<em>Key principle: shared services (Jellyfin, Vaultwarden, Mealie, Immich) are accessible from all family VLANs via specific firewall allow rules pointing at the server IP only. Everything else between VLANs is dropped by default. This gives every family member full access to the things they need while keeping their devices private from each other.</em>"
            }
        ]
    },
    {
        "id": "what-to-skip-and-why",
        "title": "What to Skip (and Why)",
        "elements": [
            {
                "type": "table",
                "headers": [
                    "Service",
                    "Alternative",
                    "Reason to Skip"
                ],
                "rows": [
                    [
                        "Supabase (early)",
                        "PocketBase",
                        "15 containers exhausts 16GB RAM. PocketBase is a single binary with identical capabilities for personal apps."
                    ],
                    [
                        "Ollama / local LLMs on CPU",
                        "OpenRouter API via Open-WebUI",
                        "1–2 tokens/sec is unusable. API costs fractions of a cent."
                    ],
                    [
                        "PostHog analytics",
                        "Umami",
                        "PostHog's RAM will destabilize the server. Umami covers 90% of real analytics needs."
                    ],
                    [
                        "Frigate NVR (no Coral TPU)",
                        "Wait for Stage 4",
                        "Without the TPU, CPU inference during recording pegs your processor at 100% continuously."
                    ],
                    [
                        "ErsatzTV (24/7 channels)",
                        "Wait for Stage 4",
                        "Continuous transcoding on a 35W TDP chip causes thermal throttling. Tower-only."
                    ],
                    [
                        "AMD RX 580 in server",
                        "Intel QuickSync (built-in)",
                        "Idles at 30W+ doing nothing. AMF encoder inferior to QuickSync for Jellyfin."
                    ],
                    [
                        "Hardware RAID controller",
                        "HBA in IT Mode + ZFS",
                        "Masks drive health from OS. ZFS needs direct access to detect and heal bit rot."
                    ],
                    [
                        "Grafana + InfluxDB (early)",
                        "Uptime Kuma + Dashdot",
                        "Wait for NAS storage — InfluxDB writes constantly to disk. Uptime Kuma covers monitoring until then."
                    ],
                    [
                        "ComfyUI",
                        "Ollama + Open-WebUI first",
                        "GPU resource contention, model management complexity, limited family homelab value."
                    ]
                ]
            }
        ]
    },
    {
        "id": "docker-container-count-what-to-realistically-expect",
        "title": "Docker Container Count: What to Realistically Expect",
        "elements": [
            {
                "type": "p",
                "content": "A common anxiety for new homelab builders: 'how many containers is too many?' The honest answer is that container count itself is not the constraint. RAM and Postgres instance count are the real limits. Here is a realistic breakdown of what you will actually be running at each stage."
            },
            {
                "type": "h2",
                "content": "Stage 1: The Mini PC (32GB RAM)"
            },
            {
                "type": "p",
                "content": "Full Stage 1 stack deployed realistically: 30–38 containers. This sounds like a lot. It is not — most containers idle at 50–150MB RAM. Here is the actual breakdown:"
            },
            {
                "type": "table",
                "headers": [
                    "Group",
                    "Containers",
                    "RAM at idle",
                    "Notes"
                ],
                "rows": [
                    [
                        "Infrastructure",
                        "Tailscale, AdGuard Home, Pangolin (newt), Nginx Proxy Manager, Watchtower, Dozzle",
                        "~600MB",
                        "Tailscale is a daemon, not a container — ignore it in Docker count. Dozzle is 30MB."
                    ],
                    [
                        "Monitoring",
                        "Uptime Kuma, Dashdot/Glances",
                        "~300MB",
                        "Both very lightweight."
                    ],
                    [
                        "Media",
                        "Jellyfin, Navidrome, Calibre-Web",
                        "~800MB",
                        "Jellyfin is the heavy one (~500MB). Navidrome and Calibre-Web are tiny."
                    ],
                    [
                        "Family apps — no DB",
                        "Mealie, Vikunja, Stirling-PDF, IT-Tools, Gokapi, PrivateBin, Excalidraw, Memos",
                        "~600MB",
                        "These are all lightweight single-binary services. Stirling-PDF spikes on processing, idles at ~100MB."
                    ],
                    [
                        "Family apps — with DB (Immich)",
                        "immich-server, immich-microservices, immich-machine-learning, Redis",
                        "~1.8GB",
                        "Immich alone is 4 containers. Machine learning container is the heavy one at ~800MB idle."
                    ],
                    [
                        "Dev tools",
                        "Gitea, Woodpecker Server, Woodpecker Agent, PocketBase, Hoppscotch, Coolify",
                        "~900MB",
                        "Woodpecker needs two containers (server + agent). Coolify needs ~300MB."
                    ],
                    [
                        "Security / productivity",
                        "Vaultwarden, Paperless-ngx (server + consumer + redis), Wallos, Linkding, Linkwarden",
                        "~700MB",
                        "Paperless has 3 containers (server, consumer, and it uses Redis). Vaultwarden is 20MB."
                    ],
                    [
                        "AI",
                        "Open-WebUI",
                        "~400MB",
                        "Without Ollama running locally — just the UI pointing at OpenRouter API."
                    ],
                    [
                        "Notifications",
                        "ntfy",
                        "~50MB",
                        "Negligible."
                    ],
                    [
                        "Shared databases",
                        "1x Postgres (8–10 databases), 1x Redis (shared)",
                        "~500MB",
                        "This is the key optimization. See below."
                    ],
                    [
                        "LanCache",
                        "lancachenet/monolithic, lancachenet/lancache-dns",
                        "~300MB",
                        "Only if you have NAS storage for cache. Otherwise skip until Stage 3."
                    ],
                    [
                        "TOTAL",
                        "~35–40 containers",
                        "~7–8GB RAM",
                        "Leaving 22–24GB free for OS, page cache, Docker overhead, and headroom."
                    ]
                ]
            },
            {
                "type": "note",
                "title": "CRITICAL OPTIMIZATION — SHARED POSTGRES:",
                "content": "The single biggest mistake beginners make is running one Postgres container per service. Each Postgres instance uses ~200MB RAM minimum. 10 services with separate Postgres = 2GB just for databases. Instead: run one Postgres container and create separate databases within it. CREATE DATABASE mealie; CREATE DATABASE gitea; CREATE DATABASE paperless; — each service gets its own isolated database but shares the one container. This cuts your database RAM from 2GB to 200MB and simplifies backups dramatically.",
                "level": "critical"
            },
            {
                "type": "h3",
                "content": "Which Services CANNOT Share a Postgres Instance"
            },
            {
                "type": "p",
                "content": "Most services share a Postgres instance fine. Three categories cannot:"
            },
            {
                "type": "table",
                "headers": [
                    "Service",
                    "Why it needs its own Postgres",
                    "What to do"
                ],
                "rows": [
                    [
                        "Supabase (Stage 4)",
                        "Supabase heavily customizes Postgres with its own extensions, roles, and schema. It takes over the instance.",
                        "Run Supabase on its own Postgres container. Do not add other databases to Supabase's Postgres."
                    ],
                    [
                        "Immich",
                        "Immich needs the pgvecto.rs extension for face recognition vector similarity. This extension modifies the Postgres instance globally.",
                        "Run Immich on its own Postgres container. The immich docker-compose already does this."
                    ],
                    [
                        "Any service that requires a specific Postgres version different from your shared instance",
                        "Version mismatch causes connection failures.",
                        "Check the service docs. If it needs Postgres 16 and your shared instance is 15, spin up a separate container for it."
                    ]
                ]
            },
            {
                "type": "h2",
                "content": "Stage 4: Tower (64GB ECC RAM)"
            },
            {
                "type": "p",
                "content": "Adding the tower with Proxmox does not mean all containers move there — the Mini PC continues running its stack as Proxmox Backup Server and a lightweight node. The tower runs the heavy stuff in Proxmox VMs/LXCs."
            },
            {
                "type": "table",
                "headers": [
                    "Group",
                    "Containers / VMs",
                    "RAM",
                    "Notes"
                ],
                "rows": [
                    [
                        "Mini PC (continues as-is)",
                        "~35–40 containers",
                        "~7–8GB",
                        "Unchanged. Now also runs PBS — that is a separate VM, ~2GB."
                    ],
                    [
                        "Tower — dev tools VM",
                        "Supabase (15 containers!), Plane (4 containers), Penpot (3 containers), Multica (3 containers)",
                        "~12GB",
                        "Supabase alone is 15 containers. This VM needs 16GB allocated."
                    ],
                    [
                        "Tower — AI VM",
                        "Ollama, Open-WebUI, Hermes Agent, AnythingLLM",
                        "~6–8GB + VRAM",
                        "Ollama's RAM usage depends on which models are loaded. A 7B Q4 model uses ~5GB VRAM + ~2GB RAM."
                    ],
                    [
                        "Tower — media/NVR VM",
                        "Frigate NVR (3 containers), ErsatzTV",
                        "~3GB",
                        "Frigate needs its own VM for Coral TPU passthrough."
                    ],
                    [
                        "Tower — game server VM",
                        "Pterodactyl + game servers",
                        "~8–16GB",
                        "Per-game allocation. Minecraft needs 4–8GB per server."
                    ],
                    [
                        "Tower — shared infra",
                        "GitLab CE (optional, ~4GB alone)",
                        "~4GB",
                        "Only if you want enterprise CI/CD. Otherwise skip."
                    ],
                    [
                        "TOTAL (tower)",
                        "~60–80 containers/services across VMs",
                        "~35–45GB used of 64GB",
                        "Comfortable. 20GB+ headroom for new services and memory spikes."
                    ]
                ]
            },
            {
                "type": "h2",
                "content": "The RAM Budget Rule of Thumb"
            },
            {
                "type": "table",
                "headers": [
                    "Service type",
                    "Idle RAM estimate",
                    "Planning multiplier"
                ],
                "rows": [
                    [
                        "Single-binary lightweight apps (IT-Tools, Linkding, Wallos, Gokapi)",
                        "30–80MB",
                        "Easy — can add 10 of these before it matters"
                    ],
                    [
                        "Services with built-in SQLite (Vaultwarden, PocketBase, SilverBullet)",
                        "50–150MB",
                        "Negligible RAM impact"
                    ],
                    [
                        "Services with Postgres (pointing at shared instance)",
                        "100–300MB for the app",
                        "Add 0MB for the database — it's shared"
                    ],
                    [
                        "Services with dedicated Postgres (Immich, Supabase)",
                        "200–500MB for app + 200MB for Postgres",
                        "Budget 400–700MB per service"
                    ],
                    [
                        "Services with Redis (shared)",
                        "100–300MB for app",
                        "Add 0MB for Redis — it's shared"
                    ],
                    [
                        "Services with dedicated Redis (some need isolated Redis)",
                        "100–300MB for app + 100MB for Redis",
                        "Budget 200–400MB per service"
                    ],
                    [
                        "AI / ML services (Immich ML, Ollama, AnythingLLM)",
                        "500MB–2GB+",
                        "These are your real constraints. Isolate in their own VMs at Stage 4."
                    ],
                    [
                        "Multi-container suites (Supabase, Plane, Penpot)",
                        "2–4GB each",
                        "Stage 4 only. Each gets its own VM."
                    ]
                ]
            },
            {
                "type": "h2",
                "content": "Practical Container Management"
            },
            {
                "type": "list",
                "items": [
                    "Use Portainer or Dozzle to see all containers and their real-time RAM usage. The 'memory' column in docker stats is your ground truth.",
                    "Set memory limits in your compose files for any container that could theoretically consume unbounded RAM (Immich machine learning, Frigate). Add: mem_limit: 2g to the container definition.",
                    "Restart policies: use restart: unless-stopped for everything you want to survive reboots. Use restart: no for containers you want to control manually (test containers, one-shot jobs).",
                    "Compose project naming: keep each stack in its own directory under /opt/stacks/[service-name]/. This gives you clean docker compose up/down per service without affecting others.",
                    "Watchtower exclusions: some services (Gitea, Immich) have breaking changes in minor versions. Add the com.centurylinklabs.watchtower.enable=false label to containers you want to update manually rather than automatically."
                ]
            }
        ]
    },
    {
        "id": "llm-hardware-gpu-costs-practical-alternatives-and-looking-forward",
        "title": "LLM Hardware: GPU Costs, Practical Alternatives, and Looking Forward",
        "elements": [
            {
                "type": "p",
                "content": "The fundamental problem with local GPU inference: the GPUs that matter for LLMs are stupidly expensive. Here's an honest look at the economics, why Apple Silicon is genuinely compelling, and how to think about this decision over time."
            },
            {
                "type": "h2",
                "content": "The GPU Cost Problem"
            },
            {
                "type": "table",
                "headers": [
                    "GPU",
                    "VRAM",
                    "Models It Runs Well",
                    "Cost (new)",
                    "Cost (used)",
                    "Idle Draw",
                    "Verdict"
                ],
                "rows": [
                    [
                        "RTX 5090",
                        "32GB GDDR7",
                        "Qwen2.5-72B Q4, most 34B models fast",
                        "~$2,000",
                        "N/A yet",
                        "~30W",
                        "Best consumer GPU for LLMs. Price is the barrier."
                    ],
                    [
                        "RTX 4090",
                        "24GB GDDR6X",
                        "13B models fast. 34B Q4 possible. 70B slow.",
                        "~$1,600",
                        "~$1,000–1,200",
                        "~30W",
                        "Still expensive. Overkill for 7B/13B."
                    ],
                    [
                        "RTX 3090",
                        "24GB GDDR6",
                        "Same as 4090 for LLMs (VRAM = bottleneck, not compute)",
                        "Discontinued",
                        "~$350–500",
                        "~30W",
                        "Best used GPU value for LLMs if you can find one."
                    ],
                    [
                        "RTX 4070 Ti Super",
                        "16GB GDDR6X",
                        "7B–13B models fast. 34B too large.",
                        "~$800",
                        "~$550–650",
                        "~20W",
                        "16GB is genuinely limiting for anything beyond 13B."
                    ],
                    [
                        "RTX 4060 Ti 16GB",
                        "16GB GDDR6",
                        "7B–13B models. Slower than 4070.",
                        "~$500",
                        "~$350–400",
                        "~15W",
                        "Budget option. Adequate for 7B daily driver use."
                    ],
                    [
                        "Intel Arc A770",
                        "16GB GDDR6",
                        "7B models. Linux support improved but still behind NVIDIA.",
                        "~$300",
                        "~$180–250",
                        "~15W",
                        "Cheapest 16GB option. Driver quirks persist."
                    ],
                    [
                        "Apple M4 Max (36GB unified)",
                        "36GB shared",
                        "13B fast, 34B Q4 possible",
                        "~$2,000 (Mac Studio)",
                        "N/A",
                        "~6W idle",
                        "Best inference/watt. No CUDA. macOS only."
                    ],
                    [
                        "Apple M4 Max (128GB unified)",
                        "128GB shared",
                        "70B models comfortable. Frontier-class capability.",
                        "~$3,200 (Mac Studio)",
                        "N/A",
                        "~6W idle",
                        "The only consumer device that runs 70B+ fluently. Expensive."
                    ]
                ]
            },
            {
                "type": "p",
                "content": "The core tension: a GPU with enough VRAM to run useful Chinese-language models (Qwen2.5-72B needs ~42GB at Q4) costs as much as an entire Mac Studio M4 Max with 128GB unified memory. And the Mac Studio runs it faster per watt with zero thermal noise."
            },
            {
                "type": "h2",
                "content": "The Practical Path: What to Actually Do"
            },
            {
                "type": "table",
                "headers": [
                    "When",
                    "Action",
                    "What You Get"
                ],
                "rows": [
                    [
                        "Now (Stage 1–3)",
                        "Use OpenRouter API exclusively. Budget $5–15/month.",
                        "Claude Sonnet 4.6, GPT-4o, Qwen2.5-72B via API — better than any local model."
                    ],
                    [
                        "Stage 4 (~1–2 years)",
                        "Add a used RTX 3090 (24GB, ~$350–500) or wait for used RTX 4080/5070 Ti prices to drop.",
                        "Fast 7B–13B local inference. 34B possible at Q4. No cloud cost."
                    ],
                    [
                        "Stage 4 (if Qwen is priority)",
                        "RTX 3090 x2 via NVLink (48GB combined, ~$700 total) OR Mac Studio M4 Max 128GB.",
                        "70B Chinese models locally. Qwen2.5-72B runs fast."
                    ],
                    [
                        "2–3 years out",
                        "Reassess — models that need a 3090 today will run on a 4060-class GPU.",
                        "Same inference quality at lower hardware cost as model efficiency compounds."
                    ]
                ]
            },
            {
                "type": "h2",
                "content": "Future Efficiency: Why Waiting Pays"
            },
            {
                "type": "list",
                "items": [
                    "Model efficiency is compounding every 6–12 months. Qwen3-8B (2025) matches 2023-era 70B models on most benchmarks.",
                    "Q4_K_M quantization quality has improved dramatically — today's 4-bit is nearly indistinguishable from FP16 for conversational tasks.",
                    "MoE architectures (DeepSeek-V3, Mixtral) mean large models use only a fraction of their parameters per token — VRAM requirements don't scale linearly with capability anymore.",
                    "The GPU you 'need' today may run on hardware one tier cheaper in 2 years. If you're at Stage 1 now, don't buy a GPU today — wait until Stage 4."
                ]
            },
            {
                "type": "h2",
                "content": "Massive LLM Comparison"
            },
            {
                "type": "table",
                "headers": [
                    "Model",
                    "Type",
                    "Best Use Case",
                    "Local Hardware Req"
                ],
                "rows": [
                    [
                        "DeepSeek-V3",
                        "Free/API/Local",
                        "Best coding & logic ratio",
                        "Local requires 700GB+ VRAM"
                    ],
                    [
                        "Llama 3.1 8B",
                        "Free/Local",
                        "Runs on the Mini PC, great for simple tasks",
                        "8GB RAM/VRAM"
                    ],
                    [
                        "Llama 3.1 70B",
                        "Local/API",
                        "Needs a 3090/4090, the 'balanced' king",
                        "40GB+ VRAM (Quantized)"
                    ],
                    [
                        "Claude 3.5 Sonnet",
                        "Paid/API",
                        "Best for complex coding and nuances",
                        "N/A (Cloud)"
                    ],
                    [
                        "GPT-4o",
                        "Paid/API",
                        "Best all-rounder for general knowledge",
                        "N/A (Cloud)"
                    ],
                    [
                        "Qwen 2.5 72B",
                        "Local/API",
                        "Best for Chinese-language tasks and math",
                        "40GB+ VRAM"
                    ],
                    [
                        "Mistral NeMo",
                        "Local",
                        "Great 12B model that fits on most modern GPUs",
                        "12GB VRAM"
                    ]
                ]
            },
            {
                "type": "note",
                "title": "RECOMMENDATION:",
                "content": "Use OpenRouter API now. Add a used RTX 3090 (24GB) at Stage 4 — it's the best price-per-VRAM in the used market. If large Chinese LLM models (Qwen2.5-72B) are genuinely a priority, the Mac Studio M4 Max 128GB is the cleaner answer than chasing multi-GPU setups. But only if you can stomach the macOS server limitations.",
                "level": "note"
            }
        ]
    },
    {
        "id": "llm-hardware-detailed-reality-check",
        "title": "LLM Hardware: Detailed Reality Check",
        "elements": [
            {
                "type": "p",
                "content": "The previous LLM section gave you the decision tree. This section goes deeper — what you can actually run today on what you already have, how to think about model selection, and the honest assessment of when local inference is and isn't worth it."
            },
            {
                "type": "h2",
                "content": "What You Can Run Right Now (No GPU)"
            },
            {
                "type": "p",
                "content": "The Mini PC has an Intel i5-10500T with 32GB RAM. Here is the honest picture of what local inference looks like today without any GPU:"
            },
            {
                "type": "table",
                "headers": [
                    "Model",
                    "Size",
                    "RAM needed",
                    "Tokens/sec on i5-10500T",
                    "Usable for?",
                    "Not usable for?"
                ],
                "rows": [
                    [
                        "Phi-3 Mini (Q4)",
                        "~2GB",
                        "4GB",
                        "10–15 tok/s",
                        "Background summarization, quick Q&A, nightly reports, email drafts — anything non-interactive where you fire and forget",
                        "Real-time chat — 10 tok/s is borderline. You'll feel it."
                    ],
                    [
                        "Qwen2.5-1.5B (Q4)",
                        "~1GB",
                        "2GB",
                        "20–30 tok/s",
                        "Fast utility tasks: reformatting, classification, simple extraction. Runs at chat speed.",
                        "Complex reasoning, long document analysis, code generation"
                    ],
                    [
                        "Llama 3.2-3B (Q4)",
                        "~2GB",
                        "4GB",
                        "12–18 tok/s",
                        "Light code assistance, short summaries, simple automation scripts. A useful step up from Qwen 1.5B.",
                        "Anything requiring deep context or nuanced judgment"
                    ],
                    [
                        "Gemma 2-2B (Q4)",
                        "~2GB",
                        "4GB",
                        "15–20 tok/s",
                        "Instruction-following at small scale. Good for template filling and structured output generation.",
                        "Long context tasks — context window is limited"
                    ],
                    [
                        "Llama 3.1-8B (Q4)",
                        "~5GB",
                        "8GB",
                        "3–6 tok/s",
                        "Overnight batch jobs: summarizing RSS feeds, categorizing notes, generating weekly reports. Set it running and check in the morning.",
                        "Interactive chat — 3–6 tok/s feels painful in real time"
                    ],
                    [
                        "Qwen2.5-7B (Q4)",
                        "~5GB",
                        "8GB",
                        "3–6 tok/s",
                        "Same as Llama 3.1-8B. Better for Chinese language tasks — stronger Mandarin at this size than Llama.",
                        "Real-time interaction"
                    ]
                ]
            },
            {
                "type": "note",
                "title": "THE PRACTICAL RULE:",
                "content": "On CPU-only hardware, anything 3B and under is genuinely interactive. Anything 7B+ is batch-only. Design your Hermes automations accordingly: use small local models for real-time tasks, queue 7B+ jobs for overnight runs. API (OpenRouter) handles everything interactive until you have a GPU.",
                "level": "note"
            },
            {
                "type": "h2",
                "content": "Ollama Model Selection Guide"
            },
            {
                "type": "p",
                "content": "When you do have a GPU (Stage 4), these are the specific models worth pulling for each task. Pull with: ollama pull [model-name]"
            },
            {
                "type": "table",
                "headers": [
                    "Use case",
                    "Model to pull",
                    "Why this one",
                    "VRAM needed (Q4)"
                ],
                "rows": [
                    [
                        "English general assistant",
                        "llama3.1:8b",
                        "Best English instruction-following at 8B. Excellent for coding, writing, reasoning.",
                        "~5GB"
                    ],
                    [
                        "Chinese language (Mandarin)",
                        "qwen2.5:7b",
                        "Alibaba's Qwen series leads Chinese benchmarks at this size. Use for parent-facing content, translation QA, Chinese document understanding.",
                        "~5GB"
                    ],
                    [
                        "Chinese language (larger)",
                        "qwen2.5:14b",
                        "Significantly better Mandarin comprehension, formal register, legal language. Use when quality matters.",
                        "~9GB"
                    ],
                    [
                        "Fast utility / background",
                        "phi3:mini",
                        "Microsoft Phi-3 Mini. Extremely efficient. Use for quick classification, reformatting, label generation where speed matters more than quality.",
                        "~2GB"
                    ],
                    [
                        "Code generation",
                        "qwen2.5-coder:7b",
                        "Qwen's code-specialized model outperforms Llama at the same size for code. Use for Hermes dev workflow tasks.",
                        "~5GB"
                    ],
                    [
                        "Code review / large context",
                        "qwen2.5-coder:14b",
                        "Better reasoning over large codebases. Worth the VRAM if you're doing serious code work.",
                        "~9GB"
                    ],
                    [
                        "RAG embeddings",
                        "nomic-embed-text",
                        "The standard embedding model for local RAG pipelines (AnythingLLM, SilverBullet AI). Not a chat model — generates vector representations of text.",
                        "~300MB"
                    ],
                    [
                        "Image understanding (vision)",
                        "llava:13b or minicpm-v",
                        "Multimodal — understands images. Use for Frigate snapshot description, photo categorization in Immich, document image extraction.",
                        "~8GB"
                    ],
                    [
                        "Long document summarization",
                        "llama3.1:8b (128k context)",
                        "Llama 3.1 has a 128k context window — fits entire lease agreements, long log files, multi-chapter documents in one pass.",
                        "~5GB"
                    ],
                    [
                        "Reasoning / problem solving",
                        "qwq:32b",
                        "QwQ (Qwen with reasoning) — a thinking model that works through problems step by step. Use for complex decisions, not quick tasks. Slow but thorough.",
                        "~20GB — needs 24GB+ GPU"
                    ]
                ]
            },
            {
                "type": "h2",
                "content": "Quantization: What the Letters Mean"
            },
            {
                "type": "p",
                "content": "When you see model names like Q4_K_M or Q8_0, this describes how aggressively the model's weights have been compressed. Lower = smaller file + less RAM + slightly lower quality. Higher = larger file + more RAM + closer to original quality."
            },
            {
                "type": "table",
                "headers": [
                    "Quantization",
                    "Size vs 16-bit",
                    "Quality loss",
                    "When to use"
                ],
                "rows": [
                    [
                        "FP16 / BF16",
                        "100% (original)",
                        "None",
                        "Only if you have enough VRAM to load the full model. Rarely practical on consumer hardware for 7B+."
                    ],
                    [
                        "Q8_0",
                        "~50%",
                        "Negligible (~0.1%)",
                        "When you have the VRAM. Nearly identical to FP16 for most tasks."
                    ],
                    [
                        "Q6_K",
                        "~37%",
                        "Very small (~0.5%)",
                        "Good balance if you're on 16–24GB VRAM and want to fit larger models."
                    ],
                    [
                        "Q5_K_M",
                        "~31%",
                        "Small (~1%)",
                        "The recommended default for 24GB+ VRAM. Excellent quality-to-size ratio."
                    ],
                    [
                        "Q4_K_M",
                        "~25%",
                        "Moderate (~2–3%)",
                        "The standard for 8–16GB VRAM. This is what most people run. Quality is good for most tasks."
                    ],
                    [
                        "Q4_K_S",
                        "~22%",
                        "Slightly more than K_M",
                        "Only if K_M doesn't fit. Quality degrades more noticeably on complex reasoning."
                    ],
                    [
                        "Q3_K_M",
                        "~19%",
                        "Noticeable (~4–5%)",
                        "Emergency option to fit large models in small VRAM. Avoid for anything requiring nuanced output."
                    ],
                    [
                        "Q2_K",
                        "~13%",
                        "Significant — use only for toy tasks",
                        "The model will be noticeably dumber. Don't use for production automations."
                    ]
                ]
            },
            {
                "type": "note",
                "title": "RECOMMENDATION:",
                "content": "Default to Q4_K_M for everything. If you have headroom, try Q5_K_M and see if you notice a difference for your tasks. The jump from Q4_K_M to Q8_0 rarely justifies doubling the VRAM requirement for chat and assistant tasks.",
                "level": "note"
            },
            {
                "type": "h2",
                "content": "When Local Is Worth It vs API"
            },
            {
                "type": "table",
                "headers": [
                    "Scenario",
                    "Use local",
                    "Use API",
                    "Reason"
                ],
                "rows": [
                    [
                        "Private code — your actual work projects",
                        "✓",
                        "—",
                        "Your proprietary code should never leave your machine. Period."
                    ],
                    [
                        "Tenant data — names, units, lease details",
                        "✓",
                        "—",
                        "Personal data of real people. Keep it local regardless of API quality."
                    ],
                    [
                        "Financial records — rent, expenses, bank data",
                        "✓",
                        "—",
                        "Financial data is high-value and high-sensitivity. Local only."
                    ],
                    [
                        "Homelab configs — passwords embedded in files",
                        "✓",
                        "—",
                        "Server configs often contain credentials. Never paste these into a cloud API."
                    ],
                    [
                        "Interactive chat — real-time Q&A",
                        "—",
                        "✓",
                        "API is dramatically faster for interactive use until you have a powerful GPU."
                    ],
                    [
                        "Creative writing, brainstorming",
                        "—",
                        "✓",
                        "No sensitivity, and API gives better creative output. Use Claude or GPT-4o."
                    ],
                    [
                        "Public research — NYC laws, tech docs",
                        "—",
                        "✓",
                        "Public information. API gives better synthesis of large amounts of web content."
                    ],
                    [
                        "Translation of parent-facing notices",
                        "—",
                        "✓ (Claude/GPT-4o)",
                        "Quality matters here. API gives more natural Mandarin for non-sensitive docs."
                    ],
                    [
                        "Translation of tenant-specific documents",
                        "✓",
                        "—",
                        "Contains names, addresses, unit numbers. Local."
                    ],
                    [
                        "Nightly batch reports — system health",
                        "✓",
                        "—",
                        "System internals. Also runs overnight when latency doesn't matter."
                    ],
                    [
                        "Code explanation — open source code only",
                        "—",
                        "✓",
                        "Public code + API = fine. Your own code stays local."
                    ],
                    [
                        "Chinese language tasks — high quality needed",
                        "—",
                        "✓ (Qwen via OpenRouter)",
                        "Qwen-72B via OpenRouter beats local 7B for quality. Use API when quality of Mandarin matters."
                    ]
                ]
            }
        ]
    },
    {
        "id": "hermes-agent-your-persistent-ai-team-member",
        "title": "Hermes Agent: Your Persistent AI Team Member",
        "elements": [
            {
                "type": "p",
                "content": "Hermes Agent is an open-source, self-hosted autonomous AI agent built by Nous Research (the lab behind the Hermes model family). Unlike Claude or ChatGPT — which are stateless and forget everything between sessions — Hermes runs persistently on your server, remembers what it learns, builds reusable skills, connects to your messaging apps, and gets more capable the longer it runs. It was released in February 2026 under MIT license and is actively developed."
            },
            {
                "type": "h2",
                "content": "What Makes It Different"
            },
            {
                "type": "table",
                "headers": [],
                "rows": [
                    [
                        "Persistent memory",
                        "Hermes remembers your projects, preferences, and past decisions across every session. No re-explaining context. Uses SQLite with FTS5 full-text search for cross-session recall with LLM summarization."
                    ],
                    [
                        "Self-improving skills",
                        "When Hermes solves a complex task, it automatically writes a reusable skill document. Next time it faces a similar problem, it loads that skill instead of starting from scratch. Skills are shareable at agentskills.io."
                    ],
                    [
                        "Lives where you live",
                        "One gateway process connects CLI, Telegram, Discord, Slack, WhatsApp, Signal, Matrix, WeChat/WeCom, Home Assistant, and more. Start a conversation on Telegram, pick it up in the terminal."
                    ],
                    [
                        "Scheduled automations",
                        "Built-in cron scheduler. Set up daily reports, nightly backups, weekly briefings, morning summaries — all running unattended and delivered to any messaging platform."
                    ],
                    [
                        "Runs anywhere",
                        "6 terminal backends: local, Docker, SSH, Daytona, Singularity, Modal. Runs on a $5 VPS, your homelab server, or serverless cloud that costs nearly nothing when idle."
                    ],
                    [
                        "Model-agnostic",
                        "Switch between Nous Portal, OpenRouter (200+ models), OpenAI, Kimi/Moonshot, z.ai, MiniMax, or your own Ollama endpoint with hermes model — no code changes."
                    ],
                    [
                        "Kimi free API (your friend's suggestion)",
                        "Kimi (Moonshot AI) offers a generous free tier API that's excellent for non-sensitive testing and casual tasks. Use it to evaluate Hermes without spending on OpenRouter credits. For anything sensitive, use OpenRouter with Claude or a local model."
                    ]
                ]
            },
            {
                "type": "h2",
                "content": "What You Need to Run It"
            },
            {
                "type": "table",
                "headers": [
                    "Requirement",
                    "Minimum",
                    "Recommended",
                    "Notes"
                ],
                "rows": [
                    [
                        "Hardware",
                        "Any Linux server — the Mini PC at Stage 1 works",
                        "Tower workstation at Stage 4 for local model inference",
                        "Hermes itself is lightweight — the model backend determines hardware needs"
                    ],
                    [
                        "OS",
                        "Linux, macOS, or WSL2",
                        "Ubuntu Server 24.04 LTS on your homelab server",
                        "Windows native: not supported. Use WSL2."
                    ],
                    [
                        "Python",
                        "Python 3.11+",
                        "3.11 (installed automatically by the installer)",
                        "The installer handles this via uv"
                    ],
                    [
                        "Model API",
                        "OpenRouter API key (cheapest to start)",
                        "OpenRouter for cloud models + Ollama for local fallback",
                        "Kimi free API works for testing. OpenRouter for production."
                    ],
                    [
                        "Messaging platform",
                        "Optional — CLI works alone",
                        "Telegram bot token for mobile access",
                        "The Telegram gateway lets you talk to Hermes from anywhere"
                    ],
                    [
                        "Storage",
                        "~500MB for the agent + skill files",
                        "~2GB if using local Ollama models",
                        "SQLite database grows slowly — a year of heavy use is under 100MB"
                    ]
                ]
            },
            {
                "type": "h2",
                "content": "Installation"
            },
            {
                "type": "table",
                "headers": [],
                "rows": [
                    [
                        "One-line install",
                        "curl -fsSL https://raw.githubusercontent.com/NousResearch/hermes-agent/main/scripts/install.sh | bash"
                    ],
                    [
                        "Setup wizard",
                        "hermes setup — configures model provider, connects messaging platforms, sets identity"
                    ],
                    [
                        "Start it",
                        "hermes — opens the TUI. hermes gateway — starts the messaging gateway as a background process"
                    ],
                    [
                        "Run as systemd service",
                        "hermes gateway — run with --service flag, or follow their systemd guide to start on boot"
                    ],
                    [
                        "Telegram setup",
                        "Create a bot via @BotFather on Telegram, get the token, run hermes gateway and paste the token during setup"
                    ]
                ]
            },
            {
                "type": "h2",
                "content": "Use Cases — Massive Reference Table"
            },
            {
                "type": "p",
                "content": "Every row shows the task, which model backend is appropriate (API key vs local), and what makes it work. API = use OpenRouter/Kimi. Local = run via Ollama for privacy. Either = both work, choose based on data sensitivity."
            },
            {
                "type": "h3",
                "content": "Daily Life & Personal Productivity"
            },
            {
                "type": "table",
                "headers": [
                    "Task / Prompt",
                    "API or Local?",
                    "How It Works"
                ],
                "rows": [
                    [
                        "Morning briefing: weather, MTA delays, NYISO grid, calendar events, new NYC DOB filings on your block",
                        "API",
                        "Cron at 7:30am. Hermes calls weather API, MTA GTFS, NYISO endpoint, Google Calendar, scrapes DOB. Delivers to Telegram."
                    ],
                    [
                        "'What's on my calendar this week?'",
                        "API",
                        "Google Calendar MCP integration. Returns formatted week view."
                    ],
                    [
                        "'Remind me to take out trash tomorrow at 8pm'",
                        "Either",
                        "Natural language cron scheduling. Hermes writes the cron entry and delivers via Telegram at the scheduled time."
                    ],
                    [
                        "'Summarize everything I worked on this week'",
                        "API",
                        "Scans conversation history with FTS5, synthesizes a digest. Best with a capable model for coherent summaries."
                    ],
                    [
                        "'What did I say about the Proxmox config last month?'",
                        "Either",
                        "FTS5 full-text search across all past sessions. Purely local retrieval — no LLM call needed for the search, only the summary."
                    ],
                    [
                        "Budget tracking: 'I spent $47 at the grocery store'",
                        "Either",
                        "Hermes appends to a local expense file and confirms. Weekly summary via Telegram. Sensitive data — prefer local."
                    ],
                    [
                        "'What's my total spending on food this month?'",
                        "Local preferred",
                        "Reads the local expense file, sums by category. Keep financial data local."
                    ],
                    [
                        "Book and media tracking: 'I finished Three-Body Problem, 5 stars'",
                        "Either",
                        "Maintains a reading log with titles, dates, ratings, notes. Non-sensitive — either backend works."
                    ],
                    [
                        "'Recommend my next book based on what I've read'",
                        "API",
                        "Sends your reading log to the model, returns 3–5 tailored recommendations with reasoning."
                    ],
                    [
                        "'Set a sleep reminder at 11pm every night'",
                        "Either",
                        "Writes a recurring cron entry. Delivers via Telegram push."
                    ],
                    [
                        "'What's a good recipe for what I have in the fridge?' + [photo]",
                        "API",
                        "Vision model (GPT-4o or Claude) analyzes the fridge photo and suggests recipes. Local vision models also work (LLaVA)."
                    ],
                    [
                        "'Draft a polite message to my neighbor about the noise'",
                        "API",
                        "Tone-aware drafting. Provide context, Hermes generates, you review."
                    ],
                    [
                        "'Translate this letter I received into English'",
                        "Either — API for accuracy",
                        "Paste the text. API gives better translation quality for formal docs."
                    ],
                    [
                        "'What's the weather like in [city] right now?'",
                        "API",
                        "Web search tool or weather API call. Trivial task — Kimi free tier is fine."
                    ],
                    [
                        "'Plan my week — I have these commitments: [list]'",
                        "API",
                        "Generates a structured weekly plan with time blocks. Non-sensitive."
                    ],
                    [
                        "'I have 90 minutes free — what should I do?'",
                        "Either",
                        "Hermes reads your Plane backlog and SilverBullet learning queue, suggests the most impactful use of time."
                    ]
                ]
            },
            {
                "type": "h3",
                "content": "Homelab Operations"
            },
            {
                "type": "table",
                "headers": [
                    "Task / Prompt",
                    "API or Local?",
                    "How It Works"
                ],
                "rows": [
                    [
                        "'Check if all my Docker containers are healthy'",
                        "Local",
                        "Runs docker ps and docker stats via terminal backend. No data leaves your server."
                    ],
                    [
                        "'Tail the logs for my Immich container and tell me if anything looks wrong'",
                        "Local",
                        "Runs docker logs --tail 100, passes to local model for anomaly detection."
                    ],
                    [
                        "'What's my disk usage and which services are growing fastest?'",
                        "Local",
                        "Runs df -h and du on Docker volumes. Compares to last week's snapshot stored in memory."
                    ],
                    [
                        "'The server seems slow — diagnose it'",
                        "Local",
                        "Runs top, iostat, vmstat snapshots. Local model diagnoses CPU/RAM/IO bottlenecks. Keep system data local."
                    ],
                    [
                        "Nightly backup verification report",
                        "Local",
                        "Cron at 2am. Checks Healthchecks.io pings, PBS job status, Rclone B2 sync. Delivers pass/fail to Telegram."
                    ],
                    [
                        "'Update all my Docker containers and tell me what changed'",
                        "Local",
                        "Pulls new images, shows image diff, restarts containers one at a time. Logs what changed."
                    ],
                    [
                        "'Set up a new Docker Compose stack for Mealie'",
                        "API",
                        "Hermes scaffolds compose file, env vars, Nginx Proxy Manager config, backup considerations. API gives better results for code generation."
                    ],
                    [
                        "Weekly server audit: disk health, ZFS pool, SSL expiry, memory trend",
                        "Local",
                        "Runs smartctl, zpool status, cert expiry checks. Full system audit — keep local."
                    ],
                    [
                        "'My Immich container keeps restarting — what's wrong?'",
                        "Either",
                        "Reads logs, checks resource limits, cross-references known issues. API better for diagnosis of unfamiliar errors."
                    ],
                    [
                        "'Show me what changed in my Proxmox config in the last 2 weeks'",
                        "Local",
                        "Reads from your git-tracked /etc config backups. Purely local."
                    ],
                    [
                        "'Is my Tailscale up and all nodes reachable?'",
                        "Local",
                        "Runs tailscale status and reports any offline nodes."
                    ],
                    [
                        "'Renew my SSL certificates and restart Nginx'",
                        "Local",
                        "Runs certbot or acme.sh, then reloads nginx. Keep automation of production ops local."
                    ],
                    [
                        "'What's consuming the most bandwidth right now?'",
                        "Local",
                        "Runs nethogs or reads from Grafana/InfluxDB. Local system data."
                    ],
                    [
                        "'Generate a status page for all my services'",
                        "Either",
                        "Queries Uptime Kuma API, formats into a markdown status page, posts to BookStack."
                    ],
                    [
                        "'Back up my PocketBase database right now'",
                        "Local",
                        "Runs the backup script and confirms success. Never expose backup credentials to a cloud API."
                    ],
                    [
                        "'Add a new DNS entry in AdGuard Home for [service]'",
                        "Local",
                        "Calls AdGuard Home API. Local homelab admin — keep local."
                    ]
                ]
            },
            {
                "type": "h3",
                "content": "Development Workflow"
            },
            {
                "type": "table",
                "headers": [
                    "Task / Prompt",
                    "API or Local?",
                    "How It Works"
                ],
                "rows": [
                    [
                        "'Create a React component for a user profile card with these fields'",
                        "API",
                        "Writes component, test file, and Storybook story. API gives better code quality for complex components."
                    ],
                    [
                        "'Review my last 5 commits and suggest what to work on next'",
                        "API",
                        "Fetches git log, analyzes commit messages, proposes next tasks aligned with Plane backlog."
                    ],
                    [
                        "'Check the Woodpecker CI logs — did my push pass?'",
                        "Either",
                        "Fetches CI status via API. Non-sensitive pipeline status."
                    ],
                    [
                        "'Write a SQL migration to add a notifications table with these columns'",
                        "API",
                        "Writes migration SQL, rollback, and documents it. API gives better output for schema design."
                    ],
                    [
                        "'Debug this API error: [paste error + stack trace]'",
                        "API",
                        "Researches the error, suggests fixes, updates SilverBullet note. Paste public stack traces only to API."
                    ],
                    [
                        "'Generate OpenAPI docs for these endpoints: [paste code]'",
                        "Either",
                        "Writes YAML spec and human-readable docs. For internal/proprietary APIs, use local."
                    ],
                    [
                        "'What issues are open in my Gitea repo?'",
                        "Local",
                        "Calls Gitea API. Your internal repo structure stays local."
                    ],
                    [
                        "Daily dev standup: what did I work on, what's open, what's blocked?",
                        "Local preferred",
                        "Synthesizes git activity + Plane board state. Work context is sensitive — prefer local."
                    ],
                    [
                        "'Refactor this function to use async/await'",
                        "API or local",
                        "For proprietary code: local. For learning exercises or open-source work: API is fine."
                    ],
                    [
                        "'Write unit tests for this component'",
                        "API for quality",
                        "Generates comprehensive test suite. API (Claude) gives better test coverage than small local models."
                    ],
                    [
                        "'Explain what this code does in plain English'",
                        "Either",
                        "Code explanation. Use local for proprietary code."
                    ],
                    [
                        "'What's the best way to implement real-time updates in my React app?'",
                        "API",
                        "Architecture guidance — non-sensitive, benefits from a capable model."
                    ],
                    [
                        "'Set up a Woodpecker CI pipeline for my React project'",
                        "Either",
                        "Generates the .woodpecker.yml. Non-sensitive if using a public framework pattern."
                    ],
                    [
                        "'Review this PR diff and flag any issues'",
                        "Local for private code",
                        "Reads the diff, flags potential bugs, style issues, missing tests. Keep proprietary diffs local."
                    ],
                    [
                        "'Write a README for my project based on the code'",
                        "Either",
                        "Generates comprehensive README. For private repos, use local."
                    ],
                    [
                        "'What packages in my package.json have security vulnerabilities?'",
                        "Either",
                        "Runs npm audit or checks CVE database. Non-sensitive package names."
                    ],
                    [
                        "'Explain this regex to me'",
                        "Either",
                        "Regex explanation is non-sensitive. Either backend works."
                    ],
                    [
                        "'Generate a commit message for these changes'",
                        "Local preferred",
                        "Reads your actual code diff. Keep code context local."
                    ],
                    [
                        "'Set up pre-commit hooks for linting and tests'",
                        "API",
                        "Generates .pre-commit-config.yaml and setup instructions."
                    ],
                    [
                        "'How should I structure this feature in my PocketBase schema?'",
                        "API",
                        "Database schema design guidance. Non-sensitive if you describe abstractly."
                    ]
                ]
            },
            {
                "type": "h3",
                "content": "Family & Building Management"
            },
            {
                "type": "table",
                "headers": [
                    "Task / Prompt",
                    "API or Local?",
                    "How It Works"
                ],
                "rows": [
                    [
                        "'Draft a maintenance notice in English and Chinese about the hot water shutoff'",
                        "API",
                        "Writes both versions. API (Claude) gives more natural Mandarin — worth the API cost for parent-facing docs."
                    ],
                    [
                        "'Translate this HPD violation notice to Mandarin and explain what we need to do'",
                        "API for quality, Local for privacy",
                        "If the notice contains tenant names or unit numbers, use local. Otherwise API gives better translation."
                    ],
                    [
                        "'When does Mom's lease expire?'",
                        "Local",
                        "Queries PocketBase tenant ledger. Private tenant data — always local."
                    ],
                    [
                        "'Is there a new DOB permit filed on our block?'",
                        "Either",
                        "Runs the ACRIS/DOB scraper. Public data — either backend works."
                    ],
                    [
                        "'Generate the monthly rent receipt for Unit 2B'",
                        "Local",
                        "Pulls from landlord ledger, generates PDF. Financial tenant data — always local."
                    ],
                    [
                        "'What's our building energy usage this month vs last month?'",
                        "Either",
                        "Queries NYISO or Con Ed data. Public utility data — either works."
                    ],
                    [
                        "'Check if any tenant has outstanding maintenance requests'",
                        "Local",
                        "Queries PocketBase. Private tenant data — always local."
                    ],
                    [
                        "'Draft a lease renewal letter for Unit 3A in English and Chinese'",
                        "API for quality, Local for names",
                        "Strip names/addresses before sending to API if privacy-sensitive."
                    ],
                    [
                        "'What are the legal steps to handle a noise complaint in NYC?'",
                        "API",
                        "Legal research from public sources. Non-sensitive question."
                    ],
                    [
                        "'Summarize all building expenses this quarter'",
                        "Local",
                        "Financial data — always local."
                    ],
                    [
                        "'Create a maintenance schedule for the building HVAC'",
                        "Either",
                        "Generic schedule creation. Non-sensitive."
                    ],
                    [
                        "'What NYC inspections are due for our building this year?'",
                        "API",
                        "Researches public DOB inspection requirements. Public info."
                    ],
                    [
                        "'Remind all tenants about the rent increase 30 days in advance'",
                        "Local",
                        "Reads tenant contact data from PocketBase, drafts messages. Private data — always local."
                    ],
                    [
                        "'What's the current legal rent for a 2BR in our zip code?'",
                        "API",
                        "Researches DHCR data and market rates. Public information."
                    ],
                    [
                        "'Is there a noise complaint filed against our building on 311?'",
                        "Either",
                        "Queries 311 Open Data API. Public records."
                    ]
                ]
            },
            {
                "type": "h3",
                "content": "Research, Learning & Knowledge"
            },
            {
                "type": "table",
                "headers": [
                    "Task / Prompt",
                    "API or Local?",
                    "How It Works"
                ],
                "rows": [
                    [
                        "'Research the best Zigbee sensors for laundry detection under $30'",
                        "API",
                        "Web search + comparison + recommendation. Non-sensitive. API gives better synthesis."
                    ],
                    [
                        "'What are the current LL97 penalties for our building size?'",
                        "API",
                        "Fetches NYC DOB guidance. Public legal information."
                    ],
                    [
                        "'Explain ZFS deduplication like I'm a beginner'",
                        "Either",
                        "Educational content. Local models handle this fine."
                    ],
                    [
                        "'Summarize the latest homelab posts on Reddit about Proxmox'",
                        "API",
                        "Scrapes r/homelab/new and synthesizes. API better for coherent multi-source summaries."
                    ],
                    [
                        "'Find the cheapest RTX 3090 on eBay right now'",
                        "API",
                        "Browser automation to search and report. Public data."
                    ],
                    [
                        "'What changed in the latest Proxmox 8.x release notes?'",
                        "API",
                        "Fetches and summarizes release notes. Public documentation."
                    ],
                    [
                        "'I'm learning Docker networking — what should I practice next?'",
                        "Either",
                        "Reads your SilverBullet notes and Plane backlog to give personalized suggestions."
                    ],
                    [
                        "'Compare these two approaches: [paste code option A] vs [paste code option B]'",
                        "Local for proprietary, API for samples",
                        "Code comparison with analysis."
                    ],
                    [
                        "'Summarize this research paper: [paste abstract]'",
                        "API",
                        "Academic content summarization. Non-sensitive unless the paper is confidential."
                    ],
                    [
                        "'What is Pangolin and how does it compare to Tailscale?'",
                        "API",
                        "Technical comparison research from public sources."
                    ],
                    [
                        "'Explain the difference between ZFS RAID-Z1, Z2, and Z3'",
                        "Either",
                        "Technical education. Non-sensitive."
                    ],
                    [
                        "'What security vulnerabilities were disclosed this week relevant to my stack?'",
                        "API",
                        "Fetches CVE feeds and filters for your tech stack (Docker, Proxmox, nginx, etc.)."
                    ],
                    [
                        "'Generate a study plan for learning Kubernetes in 30 days'",
                        "Either",
                        "Curriculum generation. Non-sensitive."
                    ],
                    [
                        "'Quiz me on Linux networking concepts'",
                        "Either",
                        "Hermes runs an interactive quiz session. Fun and educational."
                    ],
                    [
                        "'What homelab projects are trending on GitHub this month?'",
                        "API",
                        "Scrapes GitHub trending and summarizes relevant projects."
                    ]
                ]
            },
            {
                "type": "h3",
                "content": "Creative, Social & Fun"
            },
            {
                "type": "table",
                "headers": [
                    "Task / Prompt",
                    "API or Local?",
                    "How It Works"
                ],
                "rows": [
                    [
                        "'Roast me based on my git commit history from last week'",
                        "API",
                        "Fetches commits, generates light-hearted roast. API gives wittier output."
                    ],
                    [
                        "'Write a birthday message for my mom in Mandarin that sounds warm, not machine-translated'",
                        "API (Claude or Qwen)",
                        "Qwen2 via OpenRouter gives the most natural Mandarin for personal messages."
                    ],
                    [
                        "'What's a fun weekend activity in NYC for a group of 5?'",
                        "API",
                        "Web search + curated suggestion based on weather, season, cost."
                    ],
                    [
                        "'Generate a plot idea for a short story set in a NYC tenement building'",
                        "API",
                        "Creative writing prompt. API gives more original output."
                    ],
                    [
                        "'Make a ranked list of the top 10 Chinese action films of the 2010s'",
                        "API",
                        "Research + ranking. Public information."
                    ],
                    [
                        "'Write a funny out-of-office reply for when I'm hacking on the homelab all weekend'",
                        "API",
                        "Tone-aware creative writing."
                    ],
                    [
                        "'Suggest a 30-day fitness challenge I can do in a small NYC apartment'",
                        "Either",
                        "Generic fitness content — either backend works."
                    ],
                    [
                        "'Generate trivia questions about NYC history for a family game night'",
                        "API",
                        "Better trivia quality from a capable model."
                    ],
                    [
                        "'Write a haiku about my homelab server crashing at 3am'",
                        "Either",
                        "Short creative writing. Either works."
                    ],
                    [
                        "'Suggest 5 YouTube channels similar to ones I already watch'",
                        "API",
                        "Research + recommendation. Non-sensitive."
                    ],
                    [
                        "'I have $200 and a free Sunday — plan me a fun NYC day'",
                        "API",
                        "Web search for current events, prices, hours."
                    ],
                    [
                        "'Generate a meme idea about Proxmox vs TrueNAS'",
                        "API",
                        "Tech humor. Non-sensitive."
                    ],
                    [
                        "'Recommend a new show on Jellyfin based on what I've watched'",
                        "Local",
                        "Reads your Jellyfin watch history. Personal viewing data — keep local."
                    ],
                    [
                        "'Draft a tweet thread about what I learned setting up ZFS'",
                        "API",
                        "Tech writing assistance. Non-sensitive."
                    ],
                    [
                        "'What are some good conversation topics for a family dinner in Mandarin?'",
                        "API",
                        "Cultural conversation starters. Non-sensitive."
                    ]
                ]
            },
            {
                "type": "h3",
                "content": "Scheduled Automations (Set and Forget)"
            },
            {
                "type": "table",
                "headers": [
                    "Automation",
                    "Schedule",
                    "API or Local?",
                    "What It Does"
                ],
                "rows": [
                    [
                        "Morning briefing",
                        "Daily 7:30am",
                        "API",
                        "MTA status, weather, NYISO grid forecast, calendar events, any new DOB filings. Delivered to Telegram."
                    ],
                    [
                        "Weekly server health report",
                        "Every Sunday 9am",
                        "Local",
                        "Disk usage, ZFS pool status, Docker container health, memory trend. Sensitive system data — local."
                    ],
                    [
                        "Monthly tenant rent reminders",
                        "1st of month",
                        "Local",
                        "Reads PocketBase, generates per-unit reminder messages. Private data — local."
                    ],
                    [
                        "Nightly backup verification",
                        "Every night 2am",
                        "Local",
                        "Checks all backup job pings. Reports failures to Telegram immediately."
                    ],
                    [
                        "Weekly dev review",
                        "Every Friday 6pm",
                        "Local preferred",
                        "Git commits, Plane issues closed, in-progress summary. Work context — prefer local."
                    ],
                    [
                        "Changedetection summary",
                        "Every 6 hours",
                        "Either",
                        "Checks flagged website changes (DOB permits, eBay deals, visa pages). Summarizes to Telegram."
                    ],
                    [
                        "SSL certificate expiry check",
                        "Every Monday",
                        "Local",
                        "Checks all certs via openssl. Local system check."
                    ],
                    [
                        "ZFS pool scrub trigger",
                        "Monthly",
                        "Local",
                        "Triggers zpool scrub on all pools, reports completion."
                    ],
                    [
                        "Grocery list from meal plan",
                        "Every Saturday",
                        "API",
                        "Reads Mealie weekly meal plan, generates categorized grocery list, sends to Telegram."
                    ],
                    [
                        "NYC grid stress alert",
                        "Real-time threshold",
                        "API",
                        "Polls NYISO. If grid stress exceeds threshold, sends Telegram alert about power conservation."
                    ],
                    [
                        "Learning queue nudge",
                        "Every Wednesday",
                        "Either",
                        "Reads Plane backlog, picks the top in-progress card, sends a 'work on this today' Telegram reminder."
                    ],
                    [
                        "Immich memory highlight",
                        "Daily 9am",
                        "Local",
                        "Queries Immich 'on this day' API, sends a family photo memory to Telegram. Personal photos — local."
                    ],
                    [
                        "Reddit homelab digest",
                        "Every Thursday",
                        "API",
                        "Scrapes r/homelab and r/selfhosted top posts of the week. Summarizes 5 most relevant."
                    ],
                    [
                        "AirBnB/hotel price watch for trips",
                        "Weekly",
                        "API",
                        "Browser automation to track saved searches, alerts if price drops below threshold."
                    ],
                    [
                        "NYC event digest",
                        "Every Friday morning",
                        "API",
                        "Scrapes NYC-specific events (food festivals, tech meetups, free concerts) for the upcoming weekend."
                    ]
                ]
            },
            {
                "type": "h2",
                "content": "Security Considerations"
            },
            {
                "type": "table",
                "headers": [
                    "Risk",
                    "Severity",
                    "Mitigation"
                ],
                "rows": [
                    [
                        "Agent executes code on your server",
                        "HIGH",
                        "Run in a Docker container with limited capabilities. Never mount production database credentials. Use read-only mounts where possible. Review tool permissions carefully in hermes tools."
                    ],
                    [
                        "Credential exposure in conversation history",
                        "HIGH",
                        "Never paste API keys or passwords into a conversation with Hermes. Use hermes config set for credentials — they go into the config file, not conversation history."
                    ],
                    [
                        "Telegram bot token compromised",
                        "MEDIUM",
                        "Restrict the Telegram bot to only your account ID. Add the ALLOWED_USERS setting in the gateway config. A leaked token means a stranger can issue commands to your agent."
                    ],
                    [
                        "Kimi/Moonshot API sending data to Chinese servers",
                        "MEDIUM",
                        "Use Kimi free API only for non-sensitive testing and casual queries. For homelab configs, building data, family info, or anything sensitive — use OpenRouter with Claude or a local Ollama model instead."
                    ],
                    [
                        "Agent modifying production files",
                        "MEDIUM",
                        "Create a dedicated hermes user with minimal permissions. Do not run Hermes as root. Test destructive operations (file edits, docker restarts) in staging before enabling them in production."
                    ],
                    [
                        "Memory stores sensitive personal information",
                        "LOW-MEDIUM",
                        "Review ~/.hermes/memory/ periodically. Hermes stores summaries of what you discuss. If you discuss sensitive topics, those summaries exist on disk. Encrypt the disk partition."
                    ],
                    [
                        "Skill files containing hardcoded values",
                        "LOW",
                        "Hermes auto-generates skill files. Review them before sharing at agentskills.io — they may contain paths, usernames, or server-specific details that shouldn't be public."
                    ]
                ]
            },
            {
                "type": "note",
                "title": "NOTE ON KIMI FREE API:",
                "content": "Your friend's suggestion is good for getting started. Kimi (Moonshot AI) has strong Chinese language understanding and a generous free tier. Use it for learning Hermes, building test automations, and anything where privacy isn't a concern. Switch to OpenRouter (Claude, GPT-4o) or local Ollama for anything involving your homelab configs, tenant data, family information, or building management.",
                "level": "warning"
            },
            {
                "type": "h2",
                "content": "Multica: AI Agents as Actual Teammates (for Dev Work)"
            },
            {
                "type": "p",
                "content": "If Hermes is your personal AI assistant, Multica is the tool that puts AI coding agents on your Kanban board as actual teammates. Instead of copy-pasting prompts into Claude Code or Codex and babysitting the output, you assign a task to an agent like you'd assign it to a colleague — and it picks it up, writes code, reports blockers, and updates status autonomously."
            },
            {
                "type": "table",
                "headers": [],
                "rows": [
                    [
                        "What it is",
                        "Open-source, self-hostable project management platform for human + AI teams. Vendor-neutral — works with Claude Code, Codex, OpenClaw, and OpenCode."
                    ],
                    [
                        "How it works",
                        "You run the Multica server (Docker Compose), install the Multica CLI on your dev machine, and start the daemon. Agents appear in the assignee picker alongside your name. Assign a task to 'Claude Code Agent' — the daemon spins up an isolated environment, runs the agent, and streams progress back to the board."
                    ],
                    [
                        "The insight from your tweet",
                        "Most people use AI by copy-pasting prompts and watching it work one task at a time — high supervision, low autonomy. Multica flips this: you write requirements on a Kanban card, the agent picks it up overnight, codes it, and posts an update. You review in the morning."
                    ],
                    [
                        "Skills compounding",
                        "Every solved problem becomes a reusable skill for the agent team. After a month, your agents know your codebase, your patterns, and your preferences without re-explanation."
                    ],
                    [
                        "Self-hosted setup",
                        "git clone multica-ai/multica → docker compose -f docker-compose.selfhost.yml up -d → runs PostgreSQL, backend, and frontend. Open localhost:3000."
                    ],
                    [
                        "Works with",
                        "Claude Code (claude CLI), OpenAI Codex (codex CLI), OpenClaw, OpenCode. The daemon auto-detects whichever is on your PATH."
                    ]
                ]
            },
            {
                "type": "h2",
                "content": "Links"
            },
            {
                "type": "list",
                "items": [
                    "Hermes Agent GitHub: https://github.com/NousResearch/hermes-agent",
                    "Hermes Agent documentation: https://hermes-agent.nousresearch.com/docs/",
                    "Skills Hub (community skill library): https://agentskills.io",
                    "Kimi/Moonshot free API: https://platform.moonshot.cn/",
                    "Multica GitHub: https://github.com/multica-ai/multica",
                    "Multica self-hosting guide: https://github.com/multica-ai/multica/blob/main/SELF_HOSTING.md"
                ]
            }
        ]
    },
    {
        "id": "hermes-going-deeper",
        "title": "Hermes: Going Deeper",
        "elements": [
            {
                "type": "p",
                "content": "The previous Hermes section covered what it can do. This section covers how to make it actually compound — the SOUL.md identity file, skill curation, multiple profiles for different contexts, MCP connections to your services, and multi-agent workflows."
            },
            {
                "type": "h2",
                "content": "SOUL.md: Hermes's Identity File"
            },
            {
                "type": "p",
                "content": "SOUL.md is the file that tells Hermes who you are, what you care about, and how to behave across every session. Most people never configure this intentionally and wonder why Hermes feels generic. It lives at ~/.hermes/SOUL.md. Edit it once; it shapes every subsequent interaction."
            },
            {
                "type": "h3",
                "content": "Starter SOUL.md Template for This Homelab"
            },
            {
                "type": "table",
                "headers": [],
                "rows": [
                    [
                        "Identity",
                        "You are a persistent homelab assistant and development partner. You work with a developer living in NYC who runs a self-hosted infrastructure stack on an HP EliteDesk 800 G6 Mini (Ubuntu Server, Docker), a Synology NAS (Stage 3+), and a Dell T5820 tower workstation (Proxmox, Stage 4+). The household includes Chinese-speaking parents who you may assist in Mandarin when asked."
                    ],
                    [
                        "Stack awareness",
                        "Primary services: Tailscale, AdGuard Home, Pangolin, Nginx Proxy Manager, Jellyfin, Immich, Vaultwarden, Home Assistant, n8n, Gitea/Forgejo, Woodpecker CI, PocketBase, SilverBullet, Plane, Open-WebUI. Key storage: ZFS on NAS (mirror), PBS for backups, Rclone → Backblaze B2 off-site. Primary languages: TypeScript/React for frontend, Python for automation, Docker Compose for everything."
                    ],
                    [
                        "Communication style",
                        "Direct and specific. Skip preamble. When diagnosing a problem, state your best hypothesis first, then explain why. When multiple approaches exist, give your recommendation before listing alternatives. Use technical terminology without explanation unless I ask."
                    ],
                    [
                        "Proactive warnings",
                        "Always warn me before any command that: modifies ZFS pool configuration, restarts production Docker services, touches Vaultwarden data, or changes Proxmox firewall rules. Flag these with [DESTRUCTIVE] before proceeding."
                    ],
                    [
                        "Privacy defaults",
                        "Default to local model inference for anything involving: source code from my projects, tenant data (names, addresses, lease details), financial records, homelab configuration files. Use API (OpenRouter) for public information, creative tasks, and research."
                    ],
                    [
                        "Skill creation preference",
                        "After solving any homelab problem that took more than 10 minutes, automatically draft a skill file and ask if I want to save it. Include: problem description, environment context, exact commands used, why they worked."
                    ],
                    [
                        "NYC context",
                        "My building is a 4-floor NYC brownstone. I own it and manage 3 tenant units. NYC-specific context: HPD violations, DOB permits, DSNY schedules, LL97 compliance, MTA subway lines [your lines here]. Grid operator: NYISO. Electricity provider: Con Edison."
                    ]
                ]
            },
            {
                "type": "h3",
                "content": "Parent-Facing Profile in Mandarin"
            },
            {
                "type": "p",
                "content": "Add a second SOUL.md for a separate Hermes profile configured for your parents. Run with: hermes --profile parents"
            },
            {
                "type": "table",
                "headers": [],
                "rows": [
                    [
                        "Identity",
                        "你是一个家庭助手，专门帮助一位讲普通话的家庭成员。请始终用简体中文回答，用自然、温和的语气，避免使用技术术语。如果被问到技术问题，用简单易懂的语言解释，或者建议联系家里的技术支持人员。"
                    ],
                    [
                        "Scope",
                        "Help with: checking family calendar, asking about recipes in Mealie, asking what's available to watch on Jellyfin, setting reminders, asking about building notices, and general questions. Do not attempt to diagnose server issues or make system changes."
                    ],
                    [
                        "Model",
                        "Configure this profile to use qwen2.5:72b via OpenRouter — Qwen gives the most natural Mandarin output and is specifically trained on Chinese text."
                    ],
                    [
                        "How to set up",
                        "hermes setup --profile parents → configure Qwen via OpenRouter → set SOUL.md to Mandarin instruction above → connect Telegram with a separate bot token for parents' group chat"
                    ]
                ]
            },
            {
                "type": "h2",
                "content": "Skill Files: Making Hermes Actually Compound"
            },
            {
                "type": "p",
                "content": "Skills are the memory that doesn't decay. Conversation history is searched but summarized over time — skills are loaded fresh every session. When Hermes solves a hard problem, it writes a skill so it never has to rediscover the solution. Here's what that looks like in practice."
            },
            {
                "type": "h3",
                "content": "Anatomy of a Skill File"
            },
            {
                "type": "table",
                "headers": [],
                "rows": [
                    [
                        "Location",
                        "~/.hermes/skills/your-skill-name/SKILL.md"
                    ],
                    [
                        "Structure",
                        "YAML front matter (name, description, tags) + markdown body with: what this skill does, when to use it, step-by-step procedure, exact commands, known failure modes, and links to related skills."
                    ],
                    [
                        "How Hermes loads it",
                        "At session start, Hermes sees all skill names and descriptions (~3,000 tokens total). When a task matches a skill, it loads the full content. You never hit token limits from skill descriptions alone."
                    ],
                    [
                        "Auto-creation",
                        "After a complex task, Hermes proposes a skill draft. You review, edit, approve. It's saved to ~/.hermes/skills/ and committed to a private Gitea repo for versioning."
                    ],
                    [
                        "Sharing",
                        "Skills follow the agentskills.io open standard. You can publish non-sensitive homelab skills and pull community skills from agentskills.io."
                    ]
                ]
            },
            {
                "type": "h3",
                "content": "Starter Skill Library for This Homelab"
            },
            {
                "type": "p",
                "content": "These are the first 12 skills worth writing or prompting Hermes to draft for you. Each takes 5–10 minutes to create and saves that time on every future occurrence."
            },
            {
                "type": "table",
                "headers": [
                    "Skill name",
                    "When Hermes loads it",
                    "What it contains"
                ],
                "rows": [
                    [
                        "docker-health-check",
                        "'Check if my containers are healthy' / 'Something is down'",
                        "docker ps format string, how to read status columns, what Exit codes mean, docker logs flags, how to diff running vs compose-expected services"
                    ],
                    [
                        "proxmox-vm-snapshot",
                        "'I'm about to make a risky change' / 'Snapshot before [X]'",
                        "Proxmox snapshot CLI commands, naming convention (date + description), how to verify snapshot, how to rollback, PBS vs local snapshot tradeoffs"
                    ],
                    [
                        "zfs-resilver-procedure",
                        "'Replace a drive' / 'Pool is degraded'",
                        "Full step-by-step: identify failing device, zpool offline, physical swap, zpool replace, monitor resilver, verify completion. Includes smartctl commands to confirm new drive health first."
                    ],
                    [
                        "nginx-proxy-new-service",
                        "'Set up reverse proxy for [service]' / 'Add a new subdomain'",
                        "NPM UI steps + CLI equivalent, SSL cert options, which port to forward to, Auth0/Authelia integration toggle, common proxy headers to add"
                    ],
                    [
                        "adguard-dns-override",
                        "'Add local DNS entry' / 'service.home not resolving'",
                        "AdGuard Home custom filtering syntax, how to add a local DNS rewrite, where it takes effect (immediate), how to test with nslookup"
                    ],
                    [
                        "vaultwarden-backup-verify",
                        "'Check Vaultwarden backup' / 'Verify password backup'",
                        "Rclone command to list recent B2 backup files, how to spin up a test Vaultwarden instance pointing at the backup, how to verify data integrity, what to check (accounts, organizations, collections)"
                    ],
                    [
                        "hermes-docker-exec",
                        "When Hermes needs to run commands inside a container",
                        "docker exec syntax, how to open a shell vs run a one-shot command, which containers have bash vs sh, how to pass environment variables"
                    ],
                    [
                        "pocketbase-query",
                        "'What tenants have [X]' / 'Query the building data'",
                        "PocketBase API endpoint pattern, auth token usage, common collection names in this specific setup (tenants, maintenance, leases), example filter syntax"
                    ],
                    [
                        "gitea-repo-setup",
                        "'Create a new repo' / 'Set up a project'",
                        "Gitea CLI or API commands to create repo, add webhook for Woodpecker, set branch protection on main, add README and .gitignore template"
                    ],
                    [
                        "n8n-debug-workflow",
                        "'My n8n workflow failed' / 'Automation not triggering'",
                        "Where to find execution logs in n8n UI, common failure patterns (auth expired, rate limit, malformed JSON), how to manually trigger a workflow for testing, how to inspect individual node input/output"
                    ],
                    [
                        "tailscale-troubleshoot",
                        "'Can't reach server remotely' / 'Tailscale issue'",
                        "Ordered diagnostic: tailscale status → check daemon → check firewall → check subnet routing → re-auth. Includes the exact UFW rule for Tailscale interface."
                    ],
                    [
                        "immich-maintenance",
                        "'Immich is slow' / 'Immich library not updating'",
                        "Immich job triggers via API, how to force a library scan, thumbnail regeneration, face detection re-run, database vacuum command, common causes of slow performance (missing NVMe for DB)"
                    ]
                ]
            },
            {
                "type": "h2",
                "content": "Multiple Profiles: Isolating Contexts"
            },
            {
                "type": "p",
                "content": "Hermes supports multiple profiles via --profile [name]. Each profile has its own SOUL.md, memory, skill set, and model configuration. They share the same installation but run completely isolated. Practically useful profiles for this setup:"
            },
            {
                "type": "table",
                "headers": [
                    "Profile",
                    "Model",
                    "SOUL.md focus",
                    "When to use"
                ],
                "rows": [
                    [
                        "default (homelab)",
                        "Claude Sonnet via OpenRouter",
                        "Stack-aware, technical, proactive warnings on destructive ops",
                        "Day-to-day homelab ops, debugging, server management"
                    ],
                    [
                        "dev",
                        "Claude Sonnet or GPT-4o via OpenRouter",
                        "Coding-focused, knows your React patterns and PocketBase schema, uses local for proprietary code tasks",
                        "Active development sessions, PR reviews, architecture decisions"
                    ],
                    [
                        "study",
                        "Llama 3.1 via Ollama (local)",
                        "Tutor mode — Socratic questioning, tracks weak spots, spaced repetition, interview prep",
                        "LeetCode sessions, concept learning, technical screen practice"
                    ],
                    [
                        "parents",
                        "Qwen2.5-72B via OpenRouter",
                        "Always responds in Mandarin, gentle tone, no technical jargon, limited scope to family-facing services",
                        "Parents' Telegram group — calendar, Jellyfin queries, reminders, building notices"
                    ],
                    [
                        "batch",
                        "Phi-3 Mini via Ollama (local, fast)",
                        "Minimal context, optimized for speed not quality — structured output only",
                        "Overnight batch jobs: log summarization, report generation, data classification where speed matters more than nuance"
                    ]
                ]
            },
            {
                "type": "h3",
                "content": "Extended SOUL.md Templates"
            },
            {
                "type": "p",
                "content": "Beyond the starter and parent profiles, here are SOUL.md templates for specific contexts you will encounter. Each is a complete drop-in — save as ~/.hermes/profiles/[name]/SOUL.md."
            },
            {
                "type": "h3",
                "content": "Language Learning Profile"
            },
            {
                "type": "table",
                "headers": [],
                "rows": [
                    [
                        "Profile name",
                        "language (run with: hermes --profile language)"
                    ],
                    [
                        "Model",
                        "Qwen2.5-72B via OpenRouter for Mandarin sessions. Claude Sonnet for English grammar/analysis."
                    ],
                    [
                        "Identity",
                        "You are a patient, adaptive language tutor. My target language is Mandarin Chinese (Simplified). My current level is approximately HSK 3. I am a native English speaker. My goal is conversational fluency with good reading ability."
                    ],
                    [
                        "Session behaviour",
                        "At the start of each conversation, ask if I want: (A) free conversation practice in Mandarin, (B) grammar focus on a specific topic, (C) reading practice with a text, or (D) vocabulary review from previous sessions. Adapt to my choice without preamble."
                    ],
                    [
                        "Error correction",
                        "Correct my errors inline, immediately, but gently. Do not let errors slide to avoid interrupting flow — I would rather be corrected than reinforce a mistake. When you correct me, show: (1) what I said, (2) what I should have said, (3) one sentence explaining why."
                    ],
                    [
                        "Weak spots to track",
                        "Track and store in memory: grammar patterns I consistently get wrong, vocabulary I mis-use, tones I approximate incorrectly. At the end of each session, append a brief 'session notes' to your memory: date, topic covered, errors made, words to review."
                    ],
                    [
                        "Spaced repetition",
                        "At the start of each new session, before anything else, show me 3–5 vocabulary items or patterns from previous sessions that are due for review. Keep this brief — 2 minutes maximum."
                    ],
                    [
                        "Cultural context",
                        "When a word or phrase has important cultural context (formal vs informal register, regional usage, written vs spoken difference), explain it unprompted. I want to sound natural, not just grammatically correct."
                    ]
                ]
            },
            {
                "type": "h3",
                "content": "Financial and Building Management Profile"
            },
            {
                "type": "table",
                "headers": [],
                "rows": [
                    [
                        "Profile name",
                        "building (run with: hermes --profile building)"
                    ],
                    [
                        "Model",
                        "Local Ollama (Llama 3.1 or Qwen2.5) — all financial and tenant data stays local. Never use API for this profile."
                    ],
                    [
                        "Identity",
                        "You are a property management assistant for a 4-floor NYC brownstone. You have access (via MCP) to the PocketBase database containing: tenant ledger, lease dates, maintenance request history, rent payment records, and building expense log. You also have access to the Actual Budget database via Postgres MCP."
                    ],
                    [
                        "Default data sources",
                        "Before answering any question about tenants, finances, or the building, query PocketBase first. Do not guess or use memory for factual building data — always query live."
                    ],
                    [
                        "Mandatory privacy",
                        "NEVER send any query to a cloud API. NEVER include tenant names, unit numbers, or financial figures in any message that leaves this server. All model inference must be local."
                    ],
                    [
                        "Proactive alerts",
                        "At the start of each session, check: (1) any leases expiring within 90 days, (2) any rent payments more than 5 days overdue, (3) any open maintenance requests older than 14 days. Report these without being asked."
                    ],
                    [
                        "NYC compliance",
                        "When I ask about any legal obligation, cite the specific NYC law or agency (HPD, DOB, DHCR, LL97) and recommend I verify with an attorney for anything consequential."
                    ]
                ]
            },
            {
                "type": "h3",
                "content": "Deep Work / Focus Profile"
            },
            {
                "type": "table",
                "headers": [],
                "rows": [
                    [
                        "Profile name",
                        "focus (run with: hermes --profile focus)"
                    ],
                    [
                        "Model",
                        "Local Ollama (Phi-3 Mini or Llama 3.2-3B) — fast, local, minimal context overhead."
                    ],
                    [
                        "Identity",
                        "You are a minimal, distraction-free work assistant. I am in a deep work session. Respond only to what I explicitly ask. Do not suggest tangents, related topics, or follow-up ideas unless I ask for them. Keep all responses under 100 words unless I specifically request more."
                    ],
                    [
                        "Session start",
                        "When I say 'focus session: [task]', acknowledge the task in one sentence and then say nothing more until I speak. Do not check in. Do not offer help. Wait."
                    ],
                    [
                        "Interruption triage",
                        "If I paste something that is not directly related to my stated task, say: 'That seems off-topic. Do you want to handle it now or save it for later?' Nothing more."
                    ],
                    [
                        "Session end",
                        "When I say 'session done', give me: tasks completed, time elapsed (from session start), any items I flagged for later, and one sentence on what to tackle next."
                    ],
                    [
                        "No memory",
                        "Do not create skills or update memory during focus sessions. This profile is ephemeral — what happens in focus sessions stays in focus sessions."
                    ]
                ]
            },
            {
                "type": "h3",
                "content": "Morning Briefing Profile (Scheduled, No Interaction)"
            },
            {
                "type": "table",
                "headers": [],
                "rows": [
                    [
                        "Profile name",
                        "morning (run with: hermes --profile morning — typically via cron)"
                    ],
                    [
                        "Model",
                        "Claude Haiku via OpenRouter — cheapest capable model, runs in seconds, costs fractions of a cent per briefing."
                    ],
                    [
                        "Identity",
                        "You are a morning briefing generator. You run automatically every day at 7:30am. You do not engage in conversation — you produce one structured report and send it to Telegram, then exit."
                    ],
                    [
                        "Report structure",
                        "Section 1 — Today: weather summary for NYC, calendar events from Google Calendar, MTA service alerts on [lines]. Section 2 — Server health: any containers down, disk usage over 80%, backup job failures from last night. Section 3 — NYC: any new DOB permit filings on the building block, NYISO grid forecast for today (if stress predicted: flag it). Section 4 — One thing: a single sentence from the learning queue — what to work on today."
                    ],
                    [
                        "Tone",
                        "No pleasantries. No 'Good morning!' No filler. Start immediately with the content. The report should fit in one Telegram message (4096 chars max)."
                    ],
                    [
                        "On failure",
                        "If any data source is unavailable, note it briefly ('MTA API unavailable') and continue. Never exit without sending something."
                    ]
                ]
            },
            {
                "type": "h3",
                "content": "Code Review Profile"
            },
            {
                "type": "table",
                "headers": [],
                "rows": [
                    [
                        "Profile name",
                        "review (run with: hermes --profile review)"
                    ],
                    [
                        "Model",
                        "Claude Sonnet via OpenRouter for public/open-source code. Local Ollama (Qwen2.5-Coder) for proprietary code."
                    ],
                    [
                        "Identity",
                        "You are a senior code reviewer. When I share code, give feedback in four categories only: (1) Bugs and correctness — actual errors, not style preferences. (2) Security — anything that could be exploited or leak data. (3) Performance — only if there is a meaningful real-world impact, not micro-optimizations. (4) Readability — only if a future maintainer would genuinely struggle."
                    ],
                    [
                        "What to skip",
                        "Do not comment on: code style if a linter handles it, variable naming unless it is genuinely confusing, architectural choices I have not asked you to evaluate, or anything that is purely a matter of preference."
                    ],
                    [
                        "Severity levels",
                        "Prefix each comment with: [MUST FIX] for bugs and security issues. [CONSIDER] for meaningful improvements. [OPTIONAL] for nice-to-haves. If there is nothing in a category, skip that category entirely."
                    ],
                    [
                        "Output format",
                        "One code block showing the specific lines you are commenting on, followed by your comment. No essays. One issue per comment block."
                    ]
                ]
            },
            {
                "type": "h2",
                "content": "MCP Connections: Giving Hermes Real Access"
            },
            {
                "type": "p",
                "content": "MCP (Model Context Protocol) lets Hermes talk directly to your services rather than using browser automation or shell commands. A Gitea MCP server means Hermes can read issues and create PRs natively. A Home Assistant MCP server means it can control lights and query sensors without a shell command. Here's the practical setup for the services in this plan:"
            },
            {
                "type": "table",
                "headers": [
                    "Service",
                    "MCP server",
                    "What it unlocks",
                    "Setup complexity"
                ],
                "rows": [
                    [
                        "Home Assistant",
                        "home-assistant-mcp (community)",
                        "Query sensor states, trigger automations, control devices. Hermes can check 'is the laundry done?' by reading the washer sensor directly.",
                        "Low — run as Docker container, point at HA API URL + long-lived access token"
                    ],
                    [
                        "Gitea / Forgejo",
                        "gitea-mcp (official Gitea project)",
                        "List repos, read issues, create PRs, read file contents, push commits. Hermes becomes a real Gitea user.",
                        "Low — run as Docker, configure with Gitea API token"
                    ],
                    [
                        "Postgres (shared instance)",
                        "postgres-mcp",
                        "Query any database on your shared Postgres instance. Hermes reads tenant data, building records, Actual Budget transactions — all via SQL, no shell required.",
                        "Low — run as Docker, point at Postgres connection string. Scope with a read-only user."
                    ],
                    [
                        "Plane",
                        "plane-mcp (community)",
                        "Read and update issues, create cards, move cards between states. Hermes closes your learning Kanban cards directly.",
                        "Medium — Plane API is less documented; check current community MCP status"
                    ],
                    [
                        "SilverBullet",
                        "filesystem MCP or SilverBullet API",
                        "Read and write notes directly. Hermes creates SilverBullet entries without copy-paste.",
                        "Low — SilverBullet stores notes as files; filesystem MCP reads the directory directly"
                    ],
                    [
                        "n8n",
                        "n8n-mcp (community)",
                        "Trigger workflows, read execution history, inspect workflow definitions.",
                        "Medium — requires n8n API key and the community MCP server"
                    ],
                    [
                        "Proxmox",
                        "proxmox-mcp (community)",
                        "Query VM status, start/stop VMs, read resource usage. Use with a scoped API token — read-only for monitoring, write for controlled automation.",
                        "Medium — requires Proxmox API token with appropriate permissions"
                    ]
                ]
            },
            {
                "type": "note",
                "title": "SECURITY NOTE ON MCP:",
                "content": "Each MCP server is an additional attack surface. Run each in its own Docker container with network access limited to the specific service it connects to. Use read-only credentials where possible — a Postgres MCP server pointed at a read-only user cannot accidentally drop a table. Review MCP server source code before installing community ones.",
                "level": "warning"
            },
            {
                "type": "h2",
                "content": "Multi-Agent Workflows: Hermes Spawning Subagents"
            },
            {
                "type": "p",
                "content": "For complex tasks, Hermes can spawn isolated subagents that run in parallel, each with their own context and terminal. Results are merged by the parent. This is where it starts feeling like a team rather than a single assistant."
            },
            {
                "type": "h3",
                "content": "Example: Full Server Audit"
            },
            {
                "type": "table",
                "headers": [],
                "rows": [
                    [
                        "Trigger",
                        "'Run a full server audit and give me a summary'"
                    ],
                    [
                        "What happens",
                        "Hermes spawns 4 subagents simultaneously: (1) Docker health check agent — runs docker ps, checks all container states, reads logs of any unhealthy containers. (2) Storage agent — checks ZFS pool status, disk S.M.A.R.T., NAS reachability, Rclone B2 sync recency. (3) Security agent — checks SSL cert expiry, reviews AdGuard Home blocked query stats, checks fail2ban ban list, verifies UFW rules. (4) Backup agent — checks PBS job history, verifies Vaultwarden B2 backup recency, checks Healthchecks.io status for all registered jobs."
                    ],
                    [
                        "Merge",
                        "Parent Hermes waits for all 4 to complete, merges results into a single structured report, flags anything requiring action, and sends to Telegram."
                    ],
                    [
                        "Time saved",
                        "A manual audit of all four areas takes 20–30 minutes. The parallel subagent audit takes 3–5 minutes with no human involvement."
                    ]
                ]
            },
            {
                "type": "h3",
                "content": "Example: Overnight Development Task"
            },
            {
                "type": "table",
                "headers": [],
                "rows": [
                    [
                        "Trigger",
                        "'While I sleep, scaffold the tenant portal React app with PocketBase backend, create the Gitea repo, set up Woodpecker CI pipeline, and draft the first 3 feature cards in Plane'"
                    ],
                    [
                        "What happens",
                        "Hermes spawns subagents for each domain: (1) Scaffold agent — generates React+Vite project, PocketBase schema, and docker-compose.yml. (2) Gitea agent (via MCP) — creates repo, pushes scaffold, sets branch protection. (3) CI agent — creates .woodpecker.yml, triggers first build. (4) Plane agent (via MCP) — creates project, drafts feature cards from the specification you gave."
                    ],
                    [
                        "Guardrails",
                        "Each subagent runs in an isolated Docker environment. No subagent has access to production databases or Proxmox. Hermes sends a Telegram summary when complete — you review before anything goes to production."
                    ],
                    [
                        "The key insight",
                        "You wrote a one-sentence requirement. Hermes turned it into parallel work across 4 domains. You wake up to a running scaffold, a structured repo, a CI pipeline, and a populated Plane board."
                    ]
                ]
            },
            {
                "type": "h2",
                "content": "API Key Management: How Many Keys and How to Organize Them"
            },
            {
                "type": "p",
                "content": "A question that comes up once you're running multiple Hermes profiles, n8n automations, Open-WebUI, and Multica agents simultaneously: do you need separate API keys for each? The answer is nuanced."
            },
            {
                "type": "h3",
                "content": "The Short Answer"
            },
            {
                "type": "p",
                "content": "No, you don't need separate keys per agent or per profile. One OpenRouter key can serve all of them simultaneously. But you should use separate keys per application for operational reasons — not because the agents require it."
            },
            {
                "type": "h3",
                "content": "Key Per Application — The Right Pattern"
            },
            {
                "type": "table",
                "headers": [
                    "Application",
                    "Key type",
                    "Why separate",
                    "Rotation risk if compromised"
                ],
                "rows": [
                    [
                        "Hermes (all profiles)",
                        "OpenRouter API key",
                        "One key for all Hermes profiles is fine — they all run under your account.",
                        "Low — Hermes runs on your server behind Tailscale. Key exposure would require server compromise."
                    ],
                    [
                        "Open-WebUI",
                        "OpenRouter API key (separate from Hermes)",
                        "Open-WebUI is a web interface potentially exposed via Pangolin. Separate key means compromised Open-WebUI key doesn't affect Hermes automations.",
                        "Medium — if Open-WebUI is externally accessible, its key has higher exposure."
                    ],
                    [
                        "n8n automations",
                        "OpenRouter API key (separate)",
                        "n8n automation keys are embedded in workflows. Separate key means you can rotate n8n's key without touching Hermes config.",
                        "Medium — n8n workflows can be inspected by anyone with n8n admin access."
                    ],
                    [
                        "Multica agents (Claude Code)",
                        "Anthropic API key",
                        "Claude Code uses Anthropic directly, not OpenRouter. Separate from your OpenRouter keys entirely.",
                        "Low — runs locally via the Multica daemon on your machine."
                    ],
                    [
                        "Kimi free API",
                        "Kimi/Moonshot API key",
                        "Completely separate service, separate key. Use only for non-sensitive casual tasks.",
                        "Low — use only for public-info tasks where exposure has limited impact."
                    ],
                    [
                        "Local Ollama",
                        "No key needed",
                        "Ollama runs locally. No API key. No token cost. No external exposure.",
                        "None — fully local."
                    ]
                ]
            },
            {
                "type": "h3",
                "content": "Practical Key Setup"
            },
            {
                "type": "table",
                "headers": [],
                "rows": [
                    [
                        "How many keys total",
                        "3–4 keys: one OpenRouter key per application (Hermes, Open-WebUI, n8n) + one Anthropic key for Claude Code + one Kimi key. That's it. Not one key per agent — one key per application type."
                    ],
                    [
                        "Where to store them",
                        "Vaultwarden for the master copy. Server-side in ~/.hermes/config for Hermes. In Docker Compose .env files (gitignored) for Open-WebUI and n8n. Never hardcoded, never committed to Gitea."
                    ],
                    [
                        "Rotation schedule",
                        "Rotate quarterly as part of the security hardening checklist. Hermes can remind you: 'Your OpenRouter keys are 87 days old — rotate this week.'"
                    ],
                    [
                        "Usage monitoring",
                        "OpenRouter dashboard shows per-key spending. Separate keys per application means you immediately see if one application is consuming unexpectedly — n8n runaway loop vs normal Hermes usage are instantly distinguishable."
                    ],
                    [
                        "If a key leaks",
                        "Revoke only the compromised key in the OpenRouter dashboard. Other applications continue unaffected. If all applications shared one key, a single leak forces you to update configuration everywhere simultaneously."
                    ],
                    [
                        "For the parent profile",
                        "The parents Hermes profile uses the same OpenRouter key as your default profile — it just selects a different model (Qwen). No separate key needed for a separate profile within the same Hermes installation."
                    ]
                ]
            }
        ]
    },
    {
        "id": "hermes-vs-automation-tools-what-s-actually-different",
        "title": "Hermes vs Automation Tools: What's Actually Different",
        "elements": [
            {
                "type": "p",
                "content": "This is a real question worth answering properly. n8n is already in this plan and it is excellent. Why would you also run Hermes? The honest answer is they solve different problems, and conflating them leads to using both badly."
            },
            {
                "type": "h2",
                "content": "The Core Difference"
            },
            {
                "type": "table",
                "headers": [],
                "rows": [
                    [
                        "n8n's strength",
                        "Deterministic, structured workflows triggered by specific events. 'When a new file appears in this folder, OCR it, extract these fields, write to this database, send this notification.' n8n is a pipeline — you define every step, and it executes them reliably and repeatably. Zero ambiguity. You can see exactly what ran and why."
                    ],
                    [
                        "Hermes's strength",
                        "Contextual judgment across sessions. 'Something seems off with my Immich container — can you look at the logs and tell me what's wrong?' requires reading logs, understanding what normal looks like, comparing to previous sessions where you discussed Immich, and making a judgment call. n8n cannot do this. A static workflow cannot handle inputs it has never seen."
                    ],
                    [
                        "The line between them",
                        "If you can fully specify every step in advance: n8n. If the task requires reading and understanding variable input, then deciding what to do: Hermes. If you need it to happen reliably on a schedule without human involvement: n8n. If you need a back-and-forth until the problem is solved: Hermes."
                    ]
                ]
            },
            {
                "type": "h2",
                "content": "Side-by-Side Comparison"
            },
            {
                "type": "table",
                "headers": [
                    "Task",
                    "Better tool",
                    "Why"
                ],
                "rows": [
                    [
                        "Send ntfy notification when disk usage exceeds 80%",
                        "n8n",
                        "Fully deterministic. Trigger = threshold. Action = notification. No judgment needed."
                    ],
                    [
                        "'My server is slow — what's wrong?'",
                        "Hermes",
                        "Requires reading multiple data sources, recognizing patterns, comparing to normal, making a diagnosis. Variable input."
                    ],
                    [
                        "When a new Jellyfin item is added, search for Chinese subtitles, download, and add to library",
                        "n8n",
                        "Defined trigger → defined steps → defined output. Classic pipeline."
                    ],
                    [
                        "'Set up a Docker Compose stack for Mealie with all the usual config'",
                        "Hermes",
                        "Requires understanding your existing stack patterns, knowing your conventions, adapting a template to your specific setup."
                    ],
                    [
                        "Every morning at 7am, fetch MTA alerts and send to Telegram",
                        "n8n",
                        "Scheduled, predictable, always the same output format."
                    ],
                    [
                        "'Summarize the last 3 days of server logs and tell me if anything looks concerning'",
                        "Hermes",
                        "Requires reading unstructured log data, understanding what 'concerning' means in your specific context, making a judgment."
                    ],
                    [
                        "When a new DOB permit is filed on your block, extract the details and add to a Notion database",
                        "n8n",
                        "Scrape → extract → write. Pipeline."
                    ],
                    [
                        "'Based on what's been breaking lately, what maintenance should I do this weekend?'",
                        "Hermes",
                        "Requires remembering past conversations, synthesizing across multiple incidents, making a prioritized recommendation."
                    ],
                    [
                        "Sync Immich photos to Backblaze B2 every night at 2am",
                        "n8n",
                        "Classic scheduled sync. n8n with Rclone or B2 API."
                    ],
                    [
                        "'I'm about to do a Proxmox upgrade — what should I check first and back up?'",
                        "Hermes",
                        "Contextual preparation based on your specific setup, past issues you've had, and current state of the system."
                    ],
                    [
                        "Send a weekly report of all n8n workflow failures",
                        "n8n",
                        "n8n can report on itself. Scheduled, predictable."
                    ],
                    [
                        "'My n8n workflow keeps failing — here's the error log'",
                        "Hermes",
                        "Debugging requires reading an error message, understanding the workflow context, suggesting a fix."
                    ]
                ]
            },
            {
                "type": "h2",
                "content": "How They Work Together"
            },
            {
                "type": "p",
                "content": "The best pattern: n8n handles the pipelines and feeds data to Hermes; Hermes handles the judgment calls and kicks off n8n workflows. Concretely:"
            },
            {
                "type": "list",
                "items": [
                    "n8n scrapes DOB permits nightly and writes to a PocketBase table. Hermes gets a morning Telegram message and can answer 'any new permits this week?' by querying that table.",
                    "n8n detects when disk usage hits 75% and sends a raw alert to Telegram. Hermes sees that alert in its memory and when you ask 'what should I clean up?', it already knows about the disk pressure.",
                    "Hermes diagnoses a broken Docker service and tells you the fix. You could have n8n execute that fix automatically — Hermes writes the n8n webhook call and you decide whether to run it.",
                    "n8n handles reliable, scheduled, unattended automation. Hermes handles interactive, variable, context-dependent tasks. Overlap in the middle: use whichever you built first for that task."
                ]
            },
            {
                "type": "note",
                "title": "RULE OF THUMB:",
                "content": "If you can write it as a flowchart with no 'it depends' nodes, use n8n. If the flowchart has 'it depends' nodes, use Hermes.",
                "level": "note"
            }
        ]
    },
    {
        "id": "hermes-travel-planning",
        "title": "Hermes for Travel Planning (Wanderlog Style)",
        "elements": [
            {
                "type": "p",
                "content": "Turn Hermes into a personal travel agent that manages every aspect of your trip from discovery to receipt logging."
            },
            {
                "type": "table",
                "headers": [
                    "Feature",
                    "Hermes Implementation",
                    "Integration",
                    "Benefit"
                ],
                "rows": [
                    [
                        "Itinerary Generation",
                        "Creates 7-day breakdown based on budget/interest",
                        "Local LLM",
                        "Instant customized planning"
                    ],
                    [
                        "Route Optimization",
                        "Calculates efficient POI paths via OSM",
                        "OpenStreetMap API",
                        "Saves travel time"
                    ],
                    [
                        "Family Voting",
                        "Sends options to Discord; tallies and updates master itinerary",
                        "Discord Bot",
                        "Simplified group decisions"
                    ],
                    [
                        "Live Weather Alerts",
                        "Suggests packing list adjustments 48h before",
                        "Weather API",
                        "Correct gear for trip"
                    ],
                    [
                        "Receipt Scanner",
                        "OCR scans and currency conversion",
                        "Paperless-ngx + Actual Budget",
                        "Hands-free expense tracking"
                    ],
                    [
                        "Flight Alert System",
                        "Scrapes price drops for specific routes",
                        "Google Flights Scraper",
                        "Saves money on airfare"
                    ]
                ]
            }
        ]
    },
    {
        "id": "reddit-automation-hub",
        "title": "Reddit Discovery Engine (Hermes Automation)",
        "elements": [
            {
                "type": "p",
                "content": "Manually browsing Reddit for homelab updates is time-consuming. Hermes can automate this discovery."
            },
            {
                "type": "table",
                "headers": [
                    "Source",
                    "Frequency",
                    "Logic",
                    "Notification"
                ],
                "rows": [
                    [
                        "r/selfhosted",
                        "Daily",
                        "Identify top 3 'Showcase' or 'Tool' posts with >50 upvotes",
                        "Telegram Digest"
                    ],
                    [
                        "r/homelab",
                        "Weekly",
                        "Summarize 'Labor of Love' posts or specific hardware deals",
                        "Discord Leaderboard"
                    ],
                    [
                        "r/NYC / r/CivicTech",
                        "Real-time",
                        "Alert on DOB permit changes or MTA service alerts",
                        "ntfy.sh push"
                    ]
                ]
            },
            {
                "type": "p",
                "content": "Why use Hermes? Standard RSS feeds are noisy. Hermes uses LLM reasoning to filter for tools you *don't* already have in your data.js or that solve a specific problem you logged in SilverBullet."
            }
        ]
    },
    {
        "id": "ai-enhanced-notes-ask-ai-to-refine-or-template",
        "title": "AI-Enhanced Notes: Ask AI to Refine or Template",
        "elements": [
            {
                "type": "p",
                "content": "Your SilverBullet + Plane knowledge system becomes dramatically more useful when you can ask an AI to help you refine a rough note, generate a template, or suggest what to document. This section describes how to build that workflow."
            },
            {
                "type": "h2",
                "content": "The Core Workflow"
            },
            {
                "type": "p",
                "content": "The pattern: you write rough notes (during or after learning something), then trigger an AI refinement pass that structures, clarifies, and formats the note into something useful for future reference. The AI never generates knowledge from scratch — it only helps you organize what you actually learned."
            },
            {
                "type": "table",
                "headers": [],
                "rows": [
                    [
                        "Quick capture",
                        "Write rough bullet points in Memos or SilverBullet immediately when you learn something. Speed > quality at this stage."
                    ],
                    [
                        "AI refinement (Hermes)",
                        "Send Hermes a message: 'Refine this note into a proper SilverBullet entry: [paste rough notes]'. Hermes structures it into title, problem description, what-failed section, what-worked section, and tags."
                    ],
                    [
                        "Template generation",
                        "'Generate a SilverBullet template for documenting a new Docker service setup.' Hermes produces a reusable markdown template with all the sections you need."
                    ],
                    [
                        "Retrospective prompt",
                        "'I just finished setting up Proxmox Backup Server. Ask me questions to help me write a complete SilverBullet entry.' Hermes interviews you and assembles the note."
                    ],
                    [
                        "Auto-tag suggestion",
                        "'Suggest tags for this note: [paste note]' — Hermes reads the content and proposes relevant tags (e.g., #proxmox #stage-4 #backup #zfs)."
                    ],
                    [
                        "SilverBullet AI plugin",
                        "SilverBullet has a growing plugin ecosystem including LLM integration. Connect it to your local Ollama endpoint or OpenRouter for in-editor AI assistance without leaving your notes."
                    ]
                ]
            },
            {
                "type": "h2",
                "content": "SilverBullet + AI Setup"
            },
            {
                "type": "list",
                "items": [
                    "SilverBullet has a built-in AI plugin (silverbullet-ai). Install it from the plugin library.",
                    "Configure it to point to your OpenRouter API key or local Ollama endpoint in the plugin settings.",
                    "In any note, select text and run the AI Refine command — it rewrites the selected section in place.",
                    "The AI Template command generates a blank template for a specified topic (e.g., 'docker service setup', 'debugging session', 'project retrospective')."
                ]
            },
            {
                "type": "h2",
                "content": "Useful AI Prompts for Notes"
            },
            {
                "type": "table",
                "headers": [],
                "rows": [
                    [
                        "Refine a rough note",
                        "'Take these rough bullet points from a debugging session and rewrite them as a structured SilverBullet note with: title (the problem), context, what I tried, what worked, why it works, and relevant links. Keep it factual and concise.'"
                    ],
                    [
                        "Generate a template",
                        "'Generate a markdown template for documenting a new self-hosted service setup. Include sections for: service name, why I added it, Docker Compose snippet, environment variables, reverse proxy config, backup considerations, and known gotchas.'"
                    ],
                    [
                        "Summarize a long thread",
                        "'I've been debugging this issue for 3 hours. Here's the full terminal output and my notes: [paste]. Summarize what the actual problem was and how I fixed it in under 200 words.'"
                    ],
                    [
                        "Suggest related topics",
                        "'Based on this note about setting up Proxmox Backup Server, what related topics should I document next? Suggest 5 specific things I probably learned during this process that I should write down before I forget.'"
                    ],
                    [
                        "Career translation",
                        "'Take this technical note about setting up a ZFS storage pool with RAID-Z2 and rewrite it as a 2-sentence bullet point for a resume or LinkedIn profile that a non-technical hiring manager can understand.'"
                    ]
                ]
            },
            {
                "type": "h2",
                "content": "The Plane + Hermes Integration"
            },
            {
                "type": "p",
                "content": "Connect Hermes to your Plane board so your learning tracker becomes an active part of your workflow, not just a place to dump tasks:"
            },
            {
                "type": "list",
                "items": [
                    "'What's in my Plane learning backlog?' — Hermes queries the Plane API and summarizes your queue",
                    "'I finished setting up ZFS — mark that Plane card as done and generate a SilverBullet note for it' — Hermes closes the card and triggers the note workflow",
                    "'I'm going to work on Docker networking today — what should I specifically try to learn?' — Hermes reads the card description and suggests concrete experiments",
                    "Weekly learning review via Telegram: 'How many cards did I complete this week vs last week? What's been in-progress the longest?' — Hermes queries Plane and generates the summary"
                ]
            }
        ]
    },
    {
        "id": "second-brain-video-articles-and-ai-knowledge-capture",
        "title": "Second Brain: Video, Articles, and AI Knowledge Capture",
        "elements": [
            {
                "type": "p",
                "content": "The Instagram reel you shared describes a workflow (Obsidian + Claude Code + Karpathy's prompt) that is genuinely powerful but has two friction points for your setup: Claude has usage limits, and you have already designed a note structure around SilverBullet + Plane. This section adapts the core idea to your existing system and sidesteps the Claude rate limit problem."
            },
            {
                "type": "h2",
                "content": "The Core Workflow — What Makes It Work"
            },
            {
                "type": "p",
                "content": "The insight from that reel is not the specific tools. It is the pattern: everything you consume goes into a raw sources folder, and a separate process organizes it into a wiki. You never manually organize — you just dump and ask questions. Here is that pattern mapped to what you are already building:"
            },
            {
                "type": "table",
                "headers": [],
                "rows": [
                    [
                        "Raw sources (in your system)",
                        "The Memos app — quick capture for anything you encounter. A /raw folder in SilverBullet for longer pieces. Everything goes in unformatted, untagged, immediately."
                    ],
                    [
                        "The wiki (in your system)",
                        "SilverBullet's main note tree — organized, tagged, cross-linked. The AI writes here; you rarely edit directly."
                    ],
                    [
                        "The organizer (in your system)",
                        "Hermes, running on OpenRouter (Claude or GPT-4o) for quality. Not Claude.ai directly — this sidesteps the usage limit entirely because you pay per token at wholesale rates rather than hitting a subscription cap."
                    ],
                    [
                        "The Karpathy prompt (adapted)",
                        "See below — the key is telling the AI exactly how to structure the output, what to link, and how to handle contradictions with existing notes."
                    ]
                ]
            },
            {
                "type": "h2",
                "content": "Why This Sidesteps the Claude Usage Limit"
            },
            {
                "type": "p",
                "content": "The reel suggests Claude Code pointing at your vault. The problem: Claude.ai has usage limits that make intensive vault-wide processing impractical. The fix is simple — use Claude via OpenRouter API, where you pay per token at roughly $0.003 per 1000 tokens for Claude Haiku. Processing a 10-minute YouTube transcript costs under $0.01. Running weekly vault health checks costs under $0.05. You get the same Claude quality with no usage cap and no subscription friction."
            },
            {
                "type": "h2",
                "content": "Video and Podcast Capture"
            },
            {
                "type": "p",
                "content": "This is the highest-value piece for most people — turning passive media consumption into searchable structured knowledge."
            },
            {
                "type": "table",
                "headers": [],
                "rows": [
                    [
                        "YouTube video",
                        "Paste the URL to Hermes: 'Summarize this video and create a SilverBullet note in my format: title as the core insight, key points, what I might apply, and relevant tags.' Hermes uses yt-dlp to fetch the transcript (auto-generated or CC), then processes it."
                    ],
                    [
                        "Podcast episode",
                        "Same workflow with a podcast RSS link or audio file. Hermes runs Whisper locally to transcribe first (Stage 4 with GPU — fast), then summarizes. For Stage 1–3, paste the show notes or a summary URL instead."
                    ],
                    [
                        "Instagram/Twitter thread",
                        "Paste the text directly. Hermes extracts the core insight, strips the marketing framing, and writes a clean SilverBullet note."
                    ],
                    [
                        "Article or blog post",
                        "Paste the URL. Hermes fetches via web_fetch, summarizes the key claim, extracts 2–3 actionable points, and flags if it contradicts anything in your existing notes."
                    ],
                    [
                        "Technical documentation",
                        "Paste the URL or text. Hermes creates a reference note: what problem this doc solves, the key API patterns or config options, and a code snippet if relevant."
                    ],
                    [
                        "Conference talk / course",
                        "Paste the transcript or key timestamps. Hermes structures it as a topic study note rather than a summary — concept by concept, with your current understanding gaps flagged."
                    ]
                ]
            },
            {
                "type": "h2",
                "content": "The Adapted Karpathy Prompt"
            },
            {
                "type": "p",
                "content": "This is the system prompt you give Hermes (via hermes config set or pasted at the start of an organization session) to turn raw dumps into structured wiki entries:"
            },
            {
                "type": "table",
                "headers": [],
                "rows": [
                    [
                        "The prompt",
                        "You are organizing a personal knowledge base in SilverBullet markdown format. For each piece of content I give you: 1) Write a note title that describes the core insight or problem, not the source. 2) Write the body in my voice — plain, specific, first-person where relevant. No filler phrases. 3) Add a 'Why it matters to me' section with 1–2 sentences connecting it to my actual projects and goals. 4) Add tags: topic tags (#docker, #proxmox, #llm etc.), a stage tag if relevant (#stage-2), and a type tag (#concept, #tool, #project, #reference). 5) Add a 'Contradicts' section if anything in this note conflicts with a previous note — name the conflicting note specifically. 6) Add a 'See also' section with 2–3 links to related notes if they exist. Never pad with generic advice. If something is not useful to include, leave it out."
                    ]
                ]
            },
            {
                "type": "h2",
                "content": "Weekly Vault Health Check"
            },
            {
                "type": "p",
                "content": "The 'weekly health check' mentioned in the reel is where the system compounds. Set this as a Hermes scheduled task:"
            },
            {
                "type": "list",
                "items": [
                    "Every Sunday at 10am: Hermes reads recent SilverBullet notes added in the past week and flags any contradictions with older notes.",
                    "Identifies orphaned notes — notes with no tags, no links to other notes, no 'See also' section. These are capture debt.",
                    "Surfaces the top 3 notes most referenced by others — your most valuable knowledge nodes. Sends them via Telegram as a 'reread this week' nudge.",
                    "Generates a 'knowledge gap' note: based on your recent questions and notes, what adjacent topics have you not covered yet that would deepen your understanding?"
                ]
            },
            {
                "type": "h2",
                "content": "Obsidian vs SilverBullet for This Workflow"
            },
            {
                "type": "p",
                "content": "The reel uses Obsidian. You have SilverBullet. The workflow is identical — both use plain markdown files in a folder structure. The practical differences:"
            },
            {
                "type": "table",
                "headers": [
                    "",
                    "Obsidian",
                    "SilverBullet (what you're using)"
                ],
                "rows": [
                    [
                        "Claude Code integration",
                        "Direct — Claude Code can read/write the vault folder on your local machine",
                        "Indirect — Hermes accesses SilverBullet via its file-based storage or API"
                    ],
                    [
                        "Plugin ecosystem",
                        "Larger — Obsidian has thousands of community plugins including advanced AI plugins",
                        "Smaller but growing — silverbullet-ai plugin handles LLM integration"
                    ],
                    [
                        "Self-hosted",
                        "Optional (Obsidian Sync is paid; use Syncthing instead)",
                        "Native — SilverBullet runs on your server, notes stored on NAS"
                    ],
                    [
                        "Mobile",
                        "Better Obsidian mobile app",
                        "SilverBullet works in mobile browser but no dedicated app"
                    ],
                    [
                        "The honest answer",
                        "If you want Claude Code pointing at a local vault on your laptop — use Obsidian with a Syncthing-synced vault. If you want everything server-side and browser-based — stay with SilverBullet. Both work for this workflow."
                    ]
                ]
            },
            {
                "type": "note",
                "title": "RECOMMENDATION:",
                "content": "Use SilverBullet for your server-side homelab notes and second brain (accessible from anywhere via browser, Hermes can read/write it). Add Obsidian on your laptop for the Claude Code vault workflow when you want local AI processing without Hermes in the loop. Sync the two via a Syncthing shared folder — they both read and write plain markdown. You get both worlds.",
                "level": "note"
            },
            {
                "type": "h2",
                "content": "The Karpathy LLM Wiki Pattern — Applied to Your Stack"
            },
            {
                "type": "p",
                "content": "Andrej Karpathy's llm-wiki gist (linked in Reference Links) describes a pattern that is more powerful than standard RAG: instead of re-deriving answers from raw documents every time you ask a question, the LLM builds and maintains a persistent wiki — integrating new sources once, noting contradictions, compiling synthesis into structured pages that compound with every addition."
            },
            {
                "type": "table",
                "headers": [],
                "rows": [
                    [
                        "The core insight",
                        "Most people treat their knowledge base as a retrieval system — ask a question, retrieve relevant chunks, generate an answer. Karpathy's pattern treats it as a compilation system — when you add a new source, the LLM integrates it into the existing wiki immediately. The synthesis is done once. Every subsequent query reads the already-compiled wiki, not the raw sources."
                    ],
                    [
                        "Why this is different",
                        "Standard RAG has to rediscover how five documents relate every time you ask a question. The wiki already has that synthesis written. A question that required reading three documents is now answered from one wiki page that already synthesized those three documents. It gets faster and better with every source you add, not slower."
                    ],
                    [
                        "The contradiction flag",
                        "When a new source contradicts an existing wiki page, Karpathy's system flags it explicitly rather than silently overwriting. Your wiki tracks where knowledge is uncertain or disputed. This is the part most systems miss."
                    ],
                    [
                        "Applied to your SilverBullet setup",
                        "The raw sources folder in SilverBullet is your input buffer. The organized wiki tree is the compiled output. Hermes is the compiler — it reads new entries in /raw, integrates them into existing wiki pages, updates cross-links, and flags contradictions. You just dump; Hermes compiles."
                    ],
                    [
                        "The compounding effect",
                        "After 6 months of consistent use: asking Hermes 'what do I know about ZFS pool management?' returns a synthesized wiki page drawing from 20 different things you've read, tried, and documented — not 20 separate raw notes. The answer is better than any single source."
                    ],
                    [
                        "Link to the gist",
                        "https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f — paste the full gist to your Hermes or Claude Code instance and ask it to build out the specifics for your SilverBullet + Hermes setup."
                    ]
                ]
            },
            {
                "type": "h3",
                "content": "Hermes as the Wiki Compiler — Exact Workflow"
            },
            {
                "type": "table",
                "headers": [],
                "rows": [
                    [
                        "Step 1: Dump",
                        "Any article, video transcript, podcast summary, book note, or conversation log goes into SilverBullet's /raw folder. No formatting required. Just paste and save."
                    ],
                    [
                        "Step 2: Compile (Hermes)",
                        "Daily or on-demand: ask Hermes to process everything in /raw and integrate into the wiki. It reads each raw file, identifies which wiki pages it is relevant to, updates those pages with new information, notes any contradictions, and moves the raw file to /raw/processed/"
                    ],
                    [
                        "Step 3: Cross-link",
                        "Hermes adds [[wiki-links]] between related pages — the same way Obsidian's graph view works, but the links are created intentionally by the compiler rather than manually by you."
                    ],
                    [
                        "Step 4: Contradiction check",
                        "Weekly: 'Check the wiki for contradictions.' Hermes finds pages where different sources disagree, flags them with a [DISPUTED] tag, and summarizes the disagreement so you can resolve it."
                    ],
                    [
                        "Step 5: Query the compiled wiki",
                        "'What do I know about Docker networking?' returns a synthesized answer from the wiki — not a search through 40 raw notes. The answer reflects everything you've ever added, compiled into one coherent page."
                    ]
                ]
            }
        ]
    },
    {
        "id": "chinese-i18n-automating-accurate-translations-across-all-tools",
        "title": "Chinese i18n: Automating Accurate Translations Across All Tools",
        "elements": [
            {
                "type": "p",
                "content": "A layered strategy is needed — no single tool covers everything. Use native i18n where the app supports it, automated machine translation for content, and LLM-assisted review for anything that matters."
            },
            {
                "type": "h2",
                "content": "Translation Quality by Content Type"
            },
            {
                "type": "table",
                "headers": [
                    "Content Type",
                    "Examples",
                    "Recommended Method",
                    "Why"
                ],
                "rows": [
                    [
                        "App UI strings",
                        "BookStack nav, Mealie settings, Jellyfin player",
                        "Native i18n + community language packs",
                        "Already translated by volunteers. Enable the language setting."
                    ],
                    [
                        "Family-facing notices",
                        "Tenant notices, thermostat guide",
                        "LLM (Claude/GPT-4o via OpenRouter) → human review",
                        "High accuracy, natural Mandarin. Parent-facing docs should read naturally."
                    ],
                    [
                        "Legal documents",
                        "Lease terms, HPD notices, visa docs",
                        "LLM → multi-model cross-check → human review",
                        "Critical — errors can have real consequences."
                    ],
                    [
                        "Media subtitles",
                        "Jellyfin English films",
                        "Whisper (ASR) + LibreTranslate or LLM cleanup",
                        "Speed over perfection. Whisper transcribes, LLM cleans up."
                    ],
                    [
                        "Bulk data / logs",
                        "Grafana labels, ntfy notifications",
                        "LibreTranslate API (self-hosted, automated)",
                        "Low stakes, high volume, fully automated."
                    ]
                ]
            },
            {
                "type": "h2",
                "content": "Apps With Native zh-CN — Enable These First"
            },
            {
                "type": "table",
                "headers": [
                    "App",
                    "How to Enable zh-CN",
                    "Quality"
                ],
                "rows": [
                    [
                        "Jellyfin",
                        "Dashboard → General → Language → 中文(简体)",
                        "Excellent"
                    ],
                    [
                        "Vaultwarden",
                        "User Settings → Language → 中文(简体)",
                        "Excellent"
                    ],
                    [
                        "Open-WebUI",
                        "Settings → Interface → Language → 中文(简体)",
                        "Very Good"
                    ],
                    [
                        "Home Assistant",
                        "Profile → Language → 中文(简体)",
                        "Good"
                    ],
                    [
                        "BookStack",
                        "Admin → Settings → App Language → zh_CN",
                        "Good"
                    ],
                    [
                        "Gitea / Forgejo",
                        "User Settings → Language → 中文(简体)",
                        "Good"
                    ],
                    [
                        "Immich",
                        "Settings → Language → 中文(简体)",
                        "Partial — actively translated"
                    ],
                    [
                        "Mealie",
                        "User Settings → Language → zh",
                        "Partial — some strings in English"
                    ]
                ]
            },
            {
                "type": "h2",
                "content": "Self-Hosted Translation Tools"
            },
            {
                "type": "table",
                "headers": [
                    "Tool",
                    "Stage",
                    "Quality",
                    "Use Case",
                    "Requires GPU?"
                ],
                "rows": [
                    [
                        "LibreTranslate (Argos)",
                        "Stage 1+",
                        "Acceptable for bulk",
                        "ntfy messages, Grafana labels, low-stakes automation",
                        "No — CPU only (~500MB RAM)"
                    ],
                    [
                        "LTEngine (LLM-powered)",
                        "Stage 4+",
                        "Near-DeepL quality",
                        "Higher-quality automated translation for family documents",
                        "Yes — GPU for usable speed"
                    ],
                    [
                        "OpenRouter (Claude/GPT-4o)",
                        "Stage 1+",
                        "Best available",
                        "Legal docs, parent-facing guides, lease notices",
                        "No (cloud API)"
                    ],
                    [
                        "Qwen2 (local, Stage 4)",
                        "Stage 4+",
                        "Best for zh-CN specifically",
                        "Superior Mandarin idiom, formal register understanding",
                        "Yes — 8GB+ VRAM"
                    ]
                ]
            },
            {
                "type": "h2",
                "content": "Translation Prompt Templates"
            },
            {
                "type": "table",
                "headers": [],
                "rows": [
                    [
                        "Family notice prompt",
                        "You are a professional translator for a Chinese-American family in NYC. Translate to Simplified Chinese (zh-CN). Use natural conversational Mandarin. For legal terms (landlord, tenant, lease, violation) use standard legal Chinese equivalents. Keep NYC agency names (HPD, DOB, DSNY) in English with a parenthetical Chinese explanation on first use. Do not translate proper names or addresses."
                    ],
                    [
                        "Quality review prompt",
                        "You are a native Simplified Chinese speaker reviewing a machine-generated translation. Evaluate for: (1) naturalness — does it sound like how a family member would actually speak? (2) accuracy — any mistranslations, especially of legal or technical terms? (3) appropriate register (formal/informal)? Rate overall quality 1–10 and flag any issues."
                    ],
                    [
                        "Subtitle cleanup prompt",
                        "You are improving machine-translated Chinese subtitles from an English film. Fix: awkward phrasing, overly literal translations, missing particles (的/了/吗), unnatural sentence structure. Keep each subtitle under 25 Chinese characters per line to fit the screen. Return only the corrected SRT content."
                    ]
                ]
            }
        ]
    },
    {
        "id": "language-learning-with-your-homelab",
        "title": "Language Learning with Your Homelab",
        "elements": [
            {
                "type": "p",
                "content": "The homelab infrastructure you are building is unexpectedly good for language learning — specifically because of three things already in this plan: Whisper for speech transcription, the subtitle pipeline for Jellyfin, and Hermes with persistent memory and a dedicated profile. This section describes how to use them together as a language learning system that adapts to you and improves with use."
            },
            {
                "type": "h2",
                "content": "Why This Is Different From Apps"
            },
            {
                "type": "p",
                "content": "Duolingo and similar apps give you: gamified repetition, fixed curriculum, generic feedback. What they cannot give you is a conversation partner who: remembers every error you made last Tuesday, knows your specific weak points from your specific history, generates reading material about topics you already care about (your homelab, NYC, your family context), and never judges or gets impatient. Hermes does all of these. The infrastructure cost is the OpenRouter API spend, which is under $2/month for a daily 20-minute session at Claude Haiku rates."
            },
            {
                "type": "h2",
                "content": "The Hermes Language Partner (Mandarin Focus)"
            },
            {
                "type": "p",
                "content": "Use the language learning SOUL.md profile from the Hermes deep section. Here is how sessions actually work:"
            },
            {
                "type": "table",
                "headers": [
                    "Session type",
                    "How to start",
                    "What Hermes does",
                    "Best frequency"
                ],
                "rows": [
                    [
                        "Free conversation",
                        "'开始对话练习' (Start conversation practice)",
                        "Picks a topic from your life (the homelab, NYC news, family), conducts a conversation in Mandarin, corrects errors inline with explanation, tracks new errors in memory",
                        "Daily, 10–20 minutes"
                    ],
                    [
                        "Grammar focus",
                        "'我想练习把字句' (I want to practice the ba-construction)",
                        "Explains the pattern, gives you 5 example sentences to complete, corrects your answers, provides 3 original sentences for you to translate",
                        "2–3x per week, 15 minutes"
                    ],
                    [
                        "Vocabulary review",
                        "'复习上周的词汇' (Review last week's vocabulary)",
                        "Loads vocabulary from memory (words flagged in past sessions), tests you in context sentences rather than flashcard format, retires words you get right 3 times in a row",
                        "Weekly, 10 minutes"
                    ],
                    [
                        "Reading practice",
                        "Paste a Chinese article or have Hermes fetch one",
                        "Hermes reads it, removes words above your level, gives you the simplified version with difficult words in context, asks comprehension questions",
                        "2–3x per week, 20 minutes"
                    ],
                    [
                        "Tone drill",
                        "'声调练习' (Tone practice)",
                        "Hermes gives you 10 words in pinyin only, you write the tones (1/2/3/4), Hermes corrects and explains. Low tech but effective.",
                        "Weekly, 10 minutes"
                    ]
                ]
            },
            {
                "type": "h2",
                "content": "Speaking Practice with Whisper"
            },
            {
                "type": "p",
                "content": "The Whisper pipeline already in the plan transcribes audio. With a USB microphone (already in the accessories list), you can create a speaking practice loop entirely on your homelab:"
            },
            {
                "type": "table",
                "headers": [],
                "rows": [
                    [
                        "How it works",
                        "Record yourself speaking Mandarin (any topic) → Whisper transcribes the audio to text → send the transcript to Hermes with the prompt 'This is what I said in Mandarin. Identify any tone marking errors (based on context), grammar mistakes, and unnatural phrasing. Show me the corrected version.'"
                    ],
                    [
                        "What Whisper gets right",
                        "Whisper is trained on Mandarin and handles tones surprisingly well in transcription. It will often transcribe the wrong character when you get a tone wrong — which is actually useful feedback. If you say ma with the wrong tone and Whisper writes a completely different character, that tells you something about how you are being heard."
                    ],
                    [
                        "Limitations",
                        "Whisper cannot tell you your tones are wrong if the wrong tone still produces a valid word in context. For tone correction, pairing Whisper transcription with a Hermes review of what you meant to say vs what was transcribed is more useful than Whisper alone."
                    ],
                    [
                        "Setup for Stage 1 (CPU-only)",
                        "Whisper tiny or Whisper base runs on the Mini PC CPU. Processing a 2-minute recording takes 30–60 seconds — slow but usable for post-session review, not real-time. For real-time, use Stage 4 with GPU."
                    ],
                    [
                        "Setup for Stage 4 (GPU)",
                        "Whisper large-v3 via Faster-Whisper on the tower GPU processes 2 minutes of audio in under 5 seconds. Near-real-time feedback is possible."
                    ]
                ]
            },
            {
                "type": "h2",
                "content": "Jellyfin Subtitle Flip: Immersive Listening"
            },
            {
                "type": "p",
                "content": "Your Jellyfin library already contains Chinese content (for parents) and English content with Chinese subtitles (from the Bazarr pipeline). The subtitle configuration is the most underused language learning tool in the entire plan:"
            },
            {
                "type": "table",
                "headers": [
                    "Method",
                    "How to configure in Jellyfin",
                    "Learning mode",
                    "Level appropriate for"
                ],
                "rows": [
                    [
                        "Chinese audio + English subtitles",
                        "Select Chinese audio track, English subtitle track. Available automatically for Chinese content in your library.",
                        "Comprehensible input — hear natural Chinese while reading meaning in English. Brain maps sounds to meaning without translation stress.",
                        "Beginner to intermediate — listening to Chinese you cannot fully understand yet"
                    ],
                    [
                        "Chinese audio + Chinese subtitles",
                        "Select Chinese audio and Chinese subtitle track. Generate Chinese subs via Bazarr if not present.",
                        "Listening + reading simultaneously — reinforces character recognition while hearing pronunciation",
                        "Intermediate — you can read characters but need audio reinforcement"
                    ],
                    [
                        "English audio + Chinese subtitles",
                        "Select English audio, Chinese subtitle track generated by your translation pipeline.",
                        "Reading Chinese at natural speed — the audio tells you the meaning if you get stuck on a character",
                        "Intermediate to advanced — tests reading fluency under time pressure"
                    ],
                    [
                        "English audio + no subtitles, then add Chinese subs on rewatch",
                        "Watch once for comprehension, rewatch key scenes with Chinese subtitles",
                        "Post-comprehension analysis — understand the meaning first, then see how to express it in Chinese",
                        "Advanced — you already know the content well enough to focus on the Chinese expression"
                    ]
                ]
            },
            {
                "type": "h2",
                "content": "Custom Reading Material Generated From What You Care About"
            },
            {
                "type": "p",
                "content": "The most effective reading material is content you are already interested in. Generic language learning apps give you generic content. Hermes generates reading material about your actual life:"
            },
            {
                "type": "list",
                "items": [
                    "'Write me a short paragraph in Mandarin about setting up a ZFS storage pool. Use vocabulary appropriate for HSK 3 level. Include a glossary of technical terms with pinyin and English translation at the bottom.'",
                    "'Translate this section of my HomeAssistant documentation into Mandarin at an intermediate level. Simplify any technical concepts that would be unfamiliar to someone who does not know English tech terminology.'",
                    "'Generate a 200-character story about a family living in a NYC apartment building. Use past tense throughout, which I am practicing. Include 5 new vocabulary words with context clues.'",
                    "'Create a mock conversation in Mandarin between a landlord and tenant about a maintenance request. Use formal register throughout. This is for reading practice — make it realistic and natural.'"
                ]
            },
            {
                "type": "h2",
                "content": "Vocabulary: Anki Sync Server (Already in Plan) + Hermes Integration"
            },
            {
                "type": "table",
                "headers": [],
                "rows": [
                    [
                        "Anki sync server",
                        "anki-sync-server Docker container syncs your Anki decks across devices. Your cards are on your server, not AnkiWeb's servers. Existing functionality already mentioned in the plan."
                    ],
                    [
                        "Hermes card generation",
                        "'Generate 10 Anki cards for the vocabulary I got wrong in today's session.' Hermes outputs in Anki's import format (tab-separated): front | back | example sentence | tags. Import directly."
                    ],
                    [
                        "Auto-deck from Jellyfin subtitles",
                        "n8n workflow: extract Chinese subtitle files from a watched episode → run through a frequency analysis script → identify words not yet in your Anki deck → generate cards for the top 10 unknown words. Watching a Chinese drama automatically builds your vocabulary deck."
                    ],
                    [
                        "Sentence mining",
                        "The most effective Anki method for language learning. Instead of word-only cards: one card = one sentence from a real source (subtitle, article, Hermes conversation) where you encountered an unknown word. Context is part of the card."
                    ]
                ]
            },
            {
                "type": "h2",
                "content": "Tracking Progress Over Time"
            },
            {
                "type": "list",
                "items": [
                    "Hermes memory stores your error history across sessions. Every month: 'Give me a summary of my Mandarin progress this month — errors I've stopped making, patterns I'm still struggling with, and one specific focus for next month.'",
                    "SilverBullet language learning note: one note per month with HSK-approximate level, active weak points, vocabulary count reached, and a sample of a Mandarin paragraph you wrote that month. Reading it back in 6 months is genuinely motivating.",
                    "The Anki deck size is a concrete metric. When your deck hits 1,000 mature cards (seen and remembered correctly multiple times), you have real intermediate vocabulary. Hermes can report your mature card count weekly."
                ]
            },
            {
                "type": "h2",
                "content": "Fuzhounese (Mindong) - The Dialect Discovery Engine"
            },
            {
                "type": "p",
                "content": "Resources for Fuzhounese are notoriously scarce. Use your homelab to bridge the gap using AI and local data."
            },
            {
                "type": "table",
                "headers": [
                    "Tool",
                    "How to use",
                    "Hermes Role"
                ],
                "rows": [
                    [
                        "Bàng-huâ-cê (Romanization)",
                        "Input phonetic script into Hermes to get Hanzi + English meaning",
                        "Acts as a real-time translator for romanized dialect."
                    ],
                    [
                        "Audio Transcriber",
                        "Feed old family videos into Whisper (Stage 4)",
                        "Automatically segments audio for parents to verify."
                    ],
                    [
                        "Dialect RAG",
                        "Upload 'Dictionary of the Foochow Dialect' (Maclay) to AnythingLLM",
                        "Allows you to query archaic or specific dialect terms in natural language."
                    ],
                    [
                        "Daily Phrase Bot",
                        "Hermes pulls a random phrase from the RAG store daily",
                        "Sends a 'Phrase of the Day' via Telegram with phonetic guide."
                    ]
                ]
            }
        ]
    },
    {
        "id": "personal-knowledge-base-learning-tracker",
        "title": "Personal Knowledge Base + Learning Tracker",
        "elements": [
            {
                "type": "p",
                "content": "The combined SilverBullet + Plane + AI workflow is one of the most valuable long-term investments in this plan. It turns daily learning into a compounding career asset."
            },
            {
                "type": "h2",
                "content": "The Combined System"
            },
            {
                "type": "table",
                "headers": [],
                "rows": [
                    [
                        "SilverBullet (personal wiki)",
                        "Your developer second brain. Markdown notes, code snippets, architecture diagrams. Fast search. AI refinement via silverbullet-ai plugin. Synced via Gitea."
                    ],
                    [
                        "Plane (learning Kanban)",
                        "Backlog → In Progress → Done. Each card has: topic, why relevant, estimated time, link to the SilverBullet note written when finished. Also your project management for real work."
                    ],
                    [
                        "Memos (quick capture)",
                        "Twitter-style quick capture for thoughts, links, code snippets mid-session. Feed refined versions to SilverBullet."
                    ],
                    [
                        "BookStack (family wiki)",
                        "Shared household knowledge written for non-technical family members. SilverBullet is for you; BookStack is for everyone."
                    ],
                    [
                        "Hermes Agent (AI refinement)",
                        "'Refine this rough note into a proper SilverBullet entry.' 'Generate a template for documenting a new Docker setup.' 'Ask me questions to help write a retrospective.'"
                    ],
                    [
                        "Wakapi (coding time)",
                        "Track what you're actually spending time on. Weekly Grafana dashboard. Honest feedback on where your hours go."
                    ],
                    [
                        "Linkwarden (reference archive)",
                        "Archive every external link referenced in SilverBullet notes. When the Stack Overflow answer 404s in 2 years, your archive still has it."
                    ]
                ]
            },
            {
                "type": "h2",
                "content": "Note Structure That Actually Works"
            },
            {
                "type": "table",
                "headers": [],
                "rows": [
                    [
                        "Title format",
                        "[Problem I was solving] — e.g., 'Jellyfin QuickSync not working in LXC container'"
                    ],
                    [
                        "Date and context",
                        "When you hit this. What you were trying to do. What the symptom was."
                    ],
                    [
                        "What I tried (and failed)",
                        "The most valuable part — future you will try the same dead ends without this."
                    ],
                    [
                        "What actually worked",
                        "Exact commands, config changes, full paths, specific container/VM name."
                    ],
                    [
                        "Why it works",
                        "Plain-English explanation, even partial. 'I think this works because...' is more useful than just commands."
                    ],
                    [
                        "Links",
                        "The forum post or GitHub issue that helped. Archive in Linkwarden."
                    ],
                    [
                        "Tags",
                        "#proxmox #jellyfin #quicksync #stage-2 — makes cross-referencing fast."
                    ]
                ]
            },
            {
                "type": "h2",
                "content": "AI Prompts for Notes (Use With Hermes or Direct API)"
            },
            {
                "type": "table",
                "headers": [],
                "rows": [
                    [
                        "Refine rough notes",
                        "'Take these rough bullet points from a debugging session and rewrite them as a structured SilverBullet note with: title (the problem), context, what I tried, what worked, why it works, and relevant links. Keep it factual and concise.'"
                    ],
                    [
                        "Generate a template",
                        "'Generate a markdown template for documenting a new self-hosted service setup. Sections: service name, why I added it, Docker Compose snippet, env variables, reverse proxy config, backup considerations, known gotchas.'"
                    ],
                    [
                        "Retrospective interview",
                        "'I just finished setting up Proxmox Backup Server. Ask me questions one at a time to help me write a complete SilverBullet entry.'"
                    ],
                    [
                        "Career translation",
                        "'Take this technical note about setting up a ZFS storage pool with RAID-Z2 and rewrite it as a 2-sentence bullet point for a resume that a non-technical hiring manager can understand.'"
                    ]
                ]
            }
        ]
    },
    {
        "id": "wi-fi-heatmap-and-speed-testing",
        "title": "Wi-Fi Heatmap and Speed Testing",
        "elements": [
            {
                "type": "p",
                "content": "The multi-floor speed testing in this plan tells you numbers. A heatmap tells you where the dead zones are. Combined, you know what the problem is and exactly where it is. This section covers the server-side monitoring (already in the plan), adding a spatial heatmap layer to it, and blueprint.am for the floor plan piece."
            },
            {
                "type": "h2",
                "content": "Step 1: Get Your Floor Plan Dimensions"
            },
            {
                "type": "p",
                "content": "You need accurate floor dimensions before you can build a meaningful heatmap. Three ways to get them, ordered by accuracy:"
            },
            {
                "type": "table",
                "headers": [
                    "Method",
                    "Accuracy",
                    "Time",
                    "Cost",
                    "How"
                ],
                "rows": [
                    [
                        "NYC DOB Building Plans (recommended)",
                        "High — original architectural drawings",
                        "1–2 hours to find and download",
                        "Free",
                        "Search the NYC DOB BIS portal (nyc.gov/buildings) for your building's Certificate of Occupancy and approved plans. Multi-family buildings are required to file these. The plan will have exact room dimensions."
                    ],
                    [
                        "Laser measure + hand sketch",
                        "Medium-high — ±2 inches",
                        "30–60 minutes per floor",
                        "~$30 for a laser measure (Bosch Zamo or similar)",
                        "Laser measure from wall to wall in each room. Sketch on paper or in Excalidraw. For a 4-floor building, one afternoon of work."
                    ],
                    [
                        "Leica DISTO or iPhone LiDAR scan",
                        "High — ±0.5 inches",
                        "15–30 minutes per floor",
                        "Free if you have an iPhone 12 Pro+, otherwise ~$200 for Leica DISTO D2",
                        "iPhone Pro models have a LiDAR scanner. Apps like RoomScan Pro or Canvas automatically build a dimensioned floor plan from a single walk-through. Export as DXF or PDF."
                    ],
                    [
                        "Estimate from Google Maps/satellite",
                        "Low — ±5–10 feet",
                        "10 minutes",
                        "Free",
                        "Measure the building footprint in Google Maps satellite view, then estimate internal walls. Only useful as a rough starting sketch."
                    ]
                ]
            },
            {
                "id": "blueprint-am-ai-design",
                "type": "h2",
                "content": "Step 2: Blueprint.am — AI Hardware Design for Your Network"
            },
            {
                "type": "p",
                "content": "Blueprint.am is an AI tool built by 3E8 Robotics that generates wiring diagrams, bills of materials, and assembly guides from a single text prompt. For networking, this means you can describe your building and get a suggested AP placement diagram, cable routing plan, and a parts list."
            },
            {
                "type": "table",
                "headers": [],
                "rows": [
                    [
                        "What it does",
                        "Paste a prompt like: '4-floor NYC brownstone, each floor approximately 900 sq ft, concrete floors between levels, I need Wi-Fi coverage on all floors and a wired connection to a server closet on floor 1.' Blueprint.am generates a wiring diagram showing AP placement, switch location, cable runs, and a BOM with specific product recommendations."
                    ],
                    [
                        "Why it's useful here",
                        "Instead of guessing where to put access points, you get a designed network layout with cable lengths estimated, PoE budget calculated, and switch port count verified. For a multi-floor building, this is significant planning work done in minutes."
                    ],
                    [
                        "For the heatmap",
                        "Blueprint.am can export a floor plan SVG. Import this into your heatmap tool as the base layer — now your speed measurements land on an accurate map of your actual apartment."
                    ],
                    [
                        "Link",
                        "https://www.blueprint.am/"
                    ]
                ]
            },
            {
                "type": "h2",
                "content": "Step 3: Manual Phone-Based Heatmap"
            },
            {
                "type": "p",
                "content": "The most practical heatmap approach for an apartment: walk around with your phone, take speed test readings at specific spots, and log their coordinates on the floor plan. No specialized hardware needed."
            },
            {
                "type": "table",
                "headers": [],
                "rows": [
                    [
                        "Tools needed",
                        "LibreSpeed running on your server (already in the plan). A printed or digital floor plan (from Step 1). A way to mark test points — a printed grid overlay or a simple spreadsheet."
                    ],
                    [
                        "Test procedure",
                        "Pick a 3x3 meter grid across each room. Stand at each grid point, run a LibreSpeed test from your phone browser, note the download speed and ping. Mark the result on your floor plan. 20–30 points per floor gives a useful picture."
                    ],
                    [
                        "Logging it",
                        "Create a PocketBase collection: floor, room, x_coord, y_coord, download_mbps, upload_mbps, ping_ms, timestamp, notes. Your phone's browser can submit to PocketBase via a simple HTML form you build in 30 minutes."
                    ],
                    [
                        "Visualization",
                        "A React app (Coolify-deployed) reads the PocketBase data and renders it as a color-coded overlay on your SVG floor plan. Green = good, yellow = marginal, red = dead zone. Update it every few months as you add or reposition APs."
                    ],
                    [
                        "What it reveals",
                        "Dead zones in specific rooms, floor-to-floor signal degradation, areas where a wired AP would help vs just repositioning the existing one, and validation that a new AP placement actually fixed the problem."
                    ]
                ]
            },
            {
                "type": "h2",
                "content": "Step 4: Automated Monitoring (LibreSpeed Already Handles This)"
            },
            {
                "type": "p",
                "content": "The LibreSpeed + Pi Zero 2W setup already in the plan handles the time-series monitoring. The heatmap is a one-off spatial snapshot you update when the network changes. Together they answer different questions:"
            },
            {
                "type": "table",
                "headers": [
                    "Question",
                    "Tool",
                    "What it shows"
                ],
                "rows": [
                    [
                        "Where are the dead zones right now?",
                        "Manual heatmap (phone + floor plan)",
                        "Spatial — where in the building is the problem"
                    ],
                    [
                        "When does the connection get slow?",
                        "LibreSpeed time-series + Grafana",
                        "Temporal — what time of day, what day of week"
                    ],
                    [
                        "Is this getting worse over time?",
                        "LibreSpeed 30-day trend in Grafana",
                        "Historical — ISP degradation, hardware aging"
                    ],
                    [
                        "Did moving the AP fix it?",
                        "Run the manual heatmap again after the change",
                        "Before/after comparison"
                    ]
                ]
            }
        ]
    },
    {
        "id": "multi-floor-speed-testing",
        "title": "Multi-Floor Speed Testing",
        "elements": [
            {
                "type": "p",
                "content": "A single speed test on the server tells you what the connection delivers from the wire. What matters for daily life is what each person's device sees — and that can differ dramatically due to Wi-Fi signal strength, wall attenuation, and access point congestion."
            },
            {
                "type": "h2",
                "content": "Implementation: LibreSpeed + Pi Zero 2W Agents"
            },
            {
                "type": "table",
                "headers": [],
                "rows": [
                    [
                        "LibreSpeed server (Mini PC)",
                        "One Docker container. Accessible at speedtest.yourdomain.com. Stores all test results in a local database."
                    ],
                    [
                        "Per-floor agents (Pi Zero 2W, ~$15)",
                        "Cron job every 30 minutes: curl the LibreSpeed API, record download/upload/ping/jitter. Results tagged by floor ID. Always-on, 1–2W draw."
                    ],
                    [
                        "Alternative (free)",
                        "Any family member visits the LibreSpeed URL from any device. Results auto-logged and tagged by IP (which maps to floor via DHCP reservations)."
                    ],
                    [
                        "Grafana dashboard",
                        "Download/upload/ping over time per floor. Instantly reveals when one floor degrades while another is fine — pointing to AP placement rather than ISP issues."
                    ],
                    [
                        "Alert thresholds",
                        "Download below 100Mbps → ntfy alert. Ping above 50ms → ISP routing issue, not Wi-Fi. Jitter above 20ms → affects video calls."
                    ]
                ]
            }
        ]
    },
    {
        "id": "networking-fundamentals-what-you-actually-need-to-know",
        "title": "Networking Fundamentals: What You Actually Need to Know",
        "elements": [
            {
                "type": "p",
                "content": "Most homelab guides assume you already understand networking. You don't need a CCNA — but you do need about 20 concepts solid. These are the ones that will bite you if you don't know them, roughly in the order you'll encounter them."
            },
            {
                "type": "h2",
                "content": "IP Addresses, Subnets, and CIDR"
            },
            {
                "type": "table",
                "headers": [],
                "rows": [
                    [
                        "IP address",
                        "A 32-bit number written as four octets: 192.168.1.50. Your devices all have one on the local network. Your server needs a static (fixed) one so it's always at the same address."
                    ],
                    [
                        "Subnet mask",
                        "Defines which part of the IP is the network and which is the device. /24 (255.255.255.0) means the first 3 octets are the network — so 192.168.1.x is your network, and .1 through .254 are available devices."
                    ],
                    [
                        "CIDR notation",
                        "The /24 after the IP. /24 = 254 usable addresses. /16 = 65,534 addresses. /32 = exactly one address. Most home networks are /24."
                    ],
                    [
                        "Default gateway",
                        "The IP of your router — typically 192.168.1.1 or 192.168.0.1. All traffic destined outside your local network goes through here first."
                    ],
                    [
                        "Private IP ranges",
                        "192.168.x.x, 10.x.x.x, and 172.16–31.x.x are reserved for local networks. They never appear on the public internet. Your server will always have one of these."
                    ],
                    [
                        "Static IP vs DHCP",
                        "DHCP = your router assigns an IP automatically (can change). Static = you hardcode it (never changes). Your server must have a static IP — either set in the OS or reserved in your router's DHCP settings."
                    ]
                ]
            },
            {
                "type": "h2",
                "content": "DNS — How Names Become Addresses"
            },
            {
                "type": "table",
                "headers": [],
                "rows": [
                    [
                        "What DNS does",
                        "Translates human names (jellyfin.yourdomain.com) into IP addresses. Without DNS, you'd access every service by IP:port."
                    ],
                    [
                        "Resolver",
                        "The DNS server your devices ask. By default your router. When you install AdGuard Home, you make it your resolver — it filters ads before forwarding to upstream DNS."
                    ],
                    [
                        "Upstream DNS",
                        "Where AdGuard Home forwards queries it doesn't block. Use 1.1.1.1 (Cloudflare) or 9.9.9.9 (Quad9) — not 8.8.8.8 (Google, logs everything)."
                    ],
                    [
                        "Local DNS override",
                        "AdGuard Home can return a custom IP for any name. This is how jellyfin.home → your server IP works on the local network without going out to the internet."
                    ],
                    [
                        "Split DNS",
                        "The technique where jellyfin.yourdomain.com resolves to your server's local IP when you're home, but the public IP (or Pangolin tunnel) when you're away. AdGuard Home handles the local side; Pangolin handles the remote side."
                    ],
                    [
                        "DNS propagation",
                        "When you change a public DNS record, it takes 0–48 hours to spread worldwide. Local overrides in AdGuard Home are instant."
                    ],
                    [
                        "TTL",
                        "Time To Live — how long DNS resolvers cache a record before re-asking. Set it low (300s) when making changes, high (86400s) once stable."
                    ]
                ]
            },
            {
                "type": "h2",
                "content": "Ports and Protocols"
            },
            {
                "type": "table",
                "headers": [],
                "rows": [
                    [
                        "Port",
                        "A number 0–65535 that identifies which service on a machine should receive traffic. IP gets you to the machine; port gets you to the service. Jellyfin is 8096, AdGuard is 3000, Proxmox is 8006."
                    ],
                    [
                        "TCP vs UDP",
                        "TCP is reliable — it confirms delivery. UDP is fast — it doesn't confirm. Web traffic is TCP. Video streaming and game traffic often prefer UDP. Most homelab services use TCP."
                    ],
                    [
                        "HTTP (80) and HTTPS (443)",
                        "HTTP is unencrypted web traffic. HTTPS is encrypted. Nginx Proxy Manager and Pangolin both terminate HTTPS and forward plain HTTP internally — fine because the internal network is trusted."
                    ],
                    [
                        "SSH (22)",
                        "Secure Shell — your primary tool for remote server administration. Disable password login immediately; use SSH keys only."
                    ],
                    [
                        "Common service ports",
                        "Proxmox: 8006 | AdGuard: 3000, 53 (DNS) | Jellyfin: 8096 | Home Assistant: 8123 | Gitea: 3000 | Portainer: 9000 | Uptime Kuma: 3001"
                    ],
                    [
                        "Port conflicts",
                        "Two services cannot share the same port on the same IP. If Gitea and AdGuard both want 3000, one must move. Change the host port in Docker Compose: 3001:3000 maps host port 3001 to container port 3000."
                    ]
                ]
            },
            {
                "type": "h2",
                "content": "VLANs — Network Segmentation"
            },
            {
                "type": "table",
                "headers": [],
                "rows": [
                    [
                        "What a VLAN is",
                        "A Virtual LAN — logically separates devices on the same physical switch as if they were on different physical networks. Traffic between VLANs must go through a router/firewall, where you control it with rules."
                    ],
                    [
                        "Why it matters",
                        "Without VLANs, all devices on your network can talk to each other freely. A compromised IoT device can reach your server. A tenant device can reach your NAS. VLANs eliminate this."
                    ],
                    [
                        "Tagged vs untagged",
                        "Untagged (access): the switch adds the VLAN tag — device doesn't know it's on a VLAN. Used for end devices (cameras, phones). Tagged (trunk): the device handles the VLAN tag. Used for uplinks between switches and the router."
                    ],
                    [
                        "PVID",
                        "Port VLAN ID — the default VLAN a port assigns to untagged traffic. Set this to the VLAN you want the device on."
                    ],
                    [
                        "Inter-VLAN routing",
                        "Traffic between VLANs flows through your router/firewall. You write explicit allow rules: VLAN 20 can reach server IP on port 8096 (Jellyfin). Everything else between VLANs is dropped by default."
                    ],
                    [
                        "You need a managed switch",
                        "Unmanaged switches cannot do VLANs. You need a switch with 802.1Q support. See the Switch section for recommendations."
                    ]
                ]
            },
            {
                "type": "h2",
                "content": "Firewall Rules — Reading and Writing Them"
            },
            {
                "type": "p",
                "content": "Firewall rules are evaluated top-to-bottom; first match wins. Most firewalls default to deny-all outbound and inbound except established connections. You write explicit allow rules for what you want."
            },
            {
                "type": "table",
                "headers": [
                    "Rule pattern",
                    "Means",
                    "Example"
                ],
                "rows": [
                    [
                        "Allow [source] → [destination] port [N]",
                        "Let traffic from source reach destination on that port",
                        "Allow VLAN20 → server:8096 (Jellyfin)"
                    ],
                    [
                        "Deny [source] → [destination]",
                        "Block traffic",
                        "Deny VLAN20 → VLAN40 (prevents cross-family snooping)"
                    ],
                    [
                        "Allow any → any port 80,443 outbound",
                        "Let everything browse the internet",
                        "Standard internet access rule"
                    ],
                    [
                        "Deny [IoT VLAN] → any except [HA IP]",
                        "IoT devices can only talk to Home Assistant",
                        "Coral TPU / Frigate isolation pattern"
                    ],
                    [
                        "Allow established,related",
                        "Let reply traffic through for existing connections",
                        "Always needed or you break everything"
                    ]
                ]
            },
            {
                "type": "h2",
                "content": "Key Networking Terms Cheat Sheet"
            },
            {
                "type": "table",
                "headers": [
                    "Term",
                    "One-line definition"
                ],
                "rows": [
                    [
                        "NAT",
                        "Network Address Translation — your router rewrites private IPs to your public IP for outbound internet traffic. Also why you can't just port-forward into a CGNAT connection."
                    ],
                    [
                        "CGNAT",
                        "Carrier-Grade NAT — your ISP gives multiple customers the same public IP. Port forwarding doesn't work. Pangolin and Tailscale both handle this via outbound tunnels."
                    ],
                    [
                        "MAC address",
                        "A hardware identifier burned into your network card. Routers use this for DHCP reservations — always give the same IP to the same device."
                    ],
                    [
                        "DHCP reservation",
                        "Tells your router: 'always give this MAC address this IP.' Effectively static IP without touching the server OS. Easier for most devices."
                    ],
                    [
                        "mDNS / Bonjour",
                        "Multicast DNS — lets devices discover each other by hostname (.local names) without a DNS server. Works within one VLAN; fails across VLANs unless you run an mDNS repeater."
                    ],
                    [
                        "MTU / Jumbo frames",
                        "Maximum Transmission Unit — the largest packet size. Default 1500 bytes. Jumbo frames (9000) speed up NAS transfers but must be set on every device in the path."
                    ],
                    [
                        "Link aggregation (LACP)",
                        "Bonding two physical network connections for double throughput or redundancy. Useful between NAS and switch at Stage 3+."
                    ],
                    [
                        "QoS",
                        "Quality of Service — prioritises certain traffic. Ensure Jellyfin streams aren't degraded when someone is downloading a large file."
                    ],
                    [
                        "Bandwidth vs latency",
                        "Bandwidth = how much data per second. Latency = how long a packet takes. High bandwidth but high latency still feels slow for interactive use (SSH, web browsing)."
                    ],
                    [
                        "Traceroute",
                        "Shows every hop a packet takes to its destination. traceroute google.com — useful for diagnosing whether slowness is on your LAN, your ISP, or beyond."
                    ]
                ]
            }
        ]
    },
    {
        "id": "port-and-service-reference",
        "title": "Port and Service Reference",
        "elements": [
            {
                "type": "p",
                "content": "Every service in this plan with its default port, protocol, whether it needs to be externally accessible, and the Docker Compose port mapping pattern. Pin this. You will look it up constantly."
            },
            {
                "type": "table",
                "headers": [
                    "Service",
                    "Default Port",
                    "Protocol",
                    "External Access?",
                    "Docker Compose mapping",
                    "Notes"
                ],
                "rows": [
                    [
                        "AdGuard Home (web UI)",
                        "3000",
                        "TCP",
                        "No — internal only",
                        "3000:3000",
                        "Access via local IP or Tailscale only"
                    ],
                    [
                        "AdGuard Home (DNS)",
                        "53",
                        "UDP+TCP",
                        "Yes — all devices point here",
                        "53:53/udp, 53:53/tcp",
                        "Must be accessible from all VLANs"
                    ],
                    [
                        "Tailscale",
                        "N/A (outbound)",
                        "WireGuard",
                        "N/A — outbound tunnel",
                        "No port mapping needed",
                        "Outbound only, no inbound port required"
                    ],
                    [
                        "Pangolin (newt client)",
                        "N/A (outbound)",
                        "WireGuard",
                        "N/A — outbound tunnel",
                        "Runs as separate container",
                        "Punches through to your VPS"
                    ],
                    [
                        "Nginx Proxy Manager (web UI)",
                        "81",
                        "TCP",
                        "No — internal only",
                        "81:81",
                        "Admin panel; your services get 80/443"
                    ],
                    [
                        "Nginx Proxy Manager (proxy)",
                        "80, 443",
                        "TCP",
                        "Yes — via Pangolin/tunnel",
                        "80:80, 443:443",
                        "The public-facing ports"
                    ],
                    [
                        "Jellyfin",
                        "8096",
                        "TCP",
                        "Via reverse proxy",
                        "8096:8096",
                        "Never expose directly; go through NPM/Pangolin"
                    ],
                    [
                        "Navidrome",
                        "4533",
                        "TCP",
                        "Via reverse proxy",
                        "4533:4533",
                        ""
                    ],
                    [
                        "Calibre-Web",
                        "8083",
                        "TCP",
                        "Via reverse proxy",
                        "8083:8083",
                        ""
                    ],
                    [
                        "Home Assistant",
                        "8123",
                        "TCP",
                        "Via reverse proxy",
                        "8123:8123",
                        "Also needs UDP 5353 for mDNS if used"
                    ],
                    [
                        "Uptime Kuma",
                        "3001",
                        "TCP",
                        "Via reverse proxy",
                        "3001:3001",
                        ""
                    ],
                    [
                        "Vaultwarden",
                        "8080",
                        "TCP",
                        "Via reverse proxy",
                        "8080:80",
                        "Container uses 80 internally"
                    ],
                    [
                        "Gitea",
                        "3000",
                        "TCP",
                        "Via reverse proxy",
                        "3000:3000",
                        "Conflicts with AdGuard UI — change one to 3002"
                    ],
                    [
                        "Gitea SSH",
                        "22",
                        "TCP",
                        "Optional — for git push over SSH",
                        "2222:22",
                        "Use 2222 on host to avoid conflicting with system SSH"
                    ],
                    [
                        "Woodpecker CI",
                        "8000",
                        "TCP",
                        "Via reverse proxy",
                        "8000:8000",
                        ""
                    ],
                    [
                        "Open-WebUI",
                        "8080",
                        "TCP",
                        "Via reverse proxy",
                        "3003:8080",
                        "Map to different host port if Vaultwarden uses 8080"
                    ],
                    [
                        "Ollama",
                        "11434",
                        "TCP",
                        "No — internal only",
                        "11434:11434",
                        "Bind to 127.0.0.1 or Docker internal network only"
                    ],
                    [
                        "PocketBase",
                        "8090",
                        "TCP",
                        "Via reverse proxy",
                        "8090:8090",
                        ""
                    ],
                    [
                        "SilverBullet",
                        "3000",
                        "TCP",
                        "Via reverse proxy",
                        "3002:3000",
                        "Change host port — conflicts with Gitea and AdGuard"
                    ],
                    [
                        "Immich (web)",
                        "2283",
                        "TCP",
                        "Via reverse proxy",
                        "2283:2283",
                        ""
                    ],
                    [
                        "Mealie",
                        "9000",
                        "TCP",
                        "Via reverse proxy",
                        "9000:9000",
                        ""
                    ],
                    [
                        "Vikunja",
                        "3456",
                        "TCP",
                        "Via reverse proxy",
                        "3456:3456",
                        ""
                    ],
                    [
                        "Bookstack",
                        "6875",
                        "TCP",
                        "Via reverse proxy",
                        "6875:6875",
                        ""
                    ],
                    [
                        "Paperless-ngx",
                        "8000",
                        "TCP",
                        "Via reverse proxy",
                        "8010:8000",
                        "Change host port — conflicts with Woodpecker"
                    ],
                    [
                        "Stirling-PDF",
                        "8080",
                        "TCP",
                        "Via reverse proxy",
                        "8888:8080",
                        "Many services use 8080 internally — always map to different host ports"
                    ],
                    [
                        "Grafana",
                        "3000",
                        "TCP",
                        "Via reverse proxy",
                        "3010:3000",
                        ""
                    ],
                    [
                        "Proxmox VE",
                        "8006",
                        "TCP",
                        "No — internal only, Tailscale",
                        "8006:8006",
                        "Never expose to internet. Tailscale only."
                    ],
                    [
                        "Proxmox Backup Server",
                        "8007",
                        "TCP",
                        "No — internal only",
                        "8007:8007",
                        "Same — Tailscale only"
                    ],
                    [
                        "Portainer",
                        "9000",
                        "TCP",
                        "No — internal only",
                        "9443:9443 (HTTPS)",
                        "Use HTTPS endpoint"
                    ],
                    [
                        "Hermes Agent gateway",
                        "8080",
                        "TCP",
                        "No — internal only",
                        "Configured in hermes gateway",
                        "Talk to it via Telegram/messaging, not direct web"
                    ],
                    [
                        "LanCache monolithic",
                        "80",
                        "TCP",
                        "No — LAN only",
                        "80:80",
                        "Must bind to 80; intercepts game CDN HTTP traffic"
                    ],
                    [
                        "LanCache DNS",
                        "53",
                        "UDP",
                        "Yes — all gaming devices",
                        "53:53/udp",
                        "Run on separate IP from AdGuard or use VLAN routing"
                    ],
                    [
                        "ntfy",
                        "80/443",
                        "TCP",
                        "Via reverse proxy",
                        "80:80",
                        "If self-hosting; cloud.ntfy.sh is fine for most uses"
                    ],
                    [
                        "Actual Budget",
                        "5006",
                        "TCP",
                        "Via reverse proxy",
                        "5006:5006",
                        ""
                    ],
                    [
                        "Wallos",
                        "8282",
                        "TCP",
                        "Via reverse proxy",
                        "8282:8282",
                        ""
                    ],
                    [
                        "Freshrss",
                        "80",
                        "TCP",
                        "Via reverse proxy",
                        "8090:80",
                        "Map host port — conflicts with LanCache on :80"
                    ],
                    [
                        "Memos",
                        "5230",
                        "TCP",
                        "Via reverse proxy",
                        "5230:5230",
                        ""
                    ],
                    [
                        "Linkwarden",
                        "3000",
                        "TCP",
                        "Via reverse proxy",
                        "3020:3000",
                        ""
                    ],
                    [
                        "PrivateBin",
                        "8080",
                        "TCP",
                        "Via reverse proxy",
                        "8070:8080",
                        ""
                    ]
                ]
            },
            {
                "type": "note",
                "title": "PORT CONFLICT PATTERN:",
                "content": "Many containers default to port 3000 or 8080 internally. You never change the internal port (right side of the colon in Docker). You only change the host port (left side). So if Gitea wants 3000:3000 and AdGuard also wants 3000:3000, change Gitea to 3002:3000. The container still thinks it's on 3000; your host reaches it on 3002.",
                "level": "note"
            }
        ]
    },
    {
        "id": "security-hardening-checklist",
        "title": "Security Hardening Checklist",
        "elements": [
            {
                "type": "p",
                "content": "Run this list after initial server setup, after adding new services, and quarterly thereafter. Items are ordered: do the top ones before you do anything else."
            },
            {
                "type": "h2",
                "content": "Day One — Before Anything Else"
            },
            {
                "type": "table",
                "headers": [
                    "Task",
                    "Command / Location",
                    "Why It Matters"
                ],
                "rows": [
                    [
                        "Disable SSH password auth",
                        "Edit /etc/ssh/sshd_config: PasswordAuthentication no → sudo systemctl restart ssh",
                        "Password brute-force is the #1 vector for compromised servers. Keys only from day one."
                    ],
                    [
                        "Generate and copy SSH keys",
                        "ssh-keygen -t ed25519 on your laptop → ssh-copy-id user@server",
                        "Ed25519 keys are shorter and more secure than RSA. One key pair per machine you SSH from."
                    ],
                    [
                        "Change default SSH port (optional)",
                        "Edit /etc/ssh/sshd_config: Port 2222",
                        "Reduces automated scan noise. Not real security but cuts log spam dramatically."
                    ],
                    [
                        "Install fail2ban",
                        "sudo apt install fail2ban → default config bans after 5 failed SSH attempts",
                        "Automatically bans IPs brute-forcing SSH. Set it and forget it."
                    ],
                    [
                        "Enable UFW firewall",
                        "sudo ufw allow 22 (or your SSH port) → sudo ufw enable",
                        "Default deny-all inbound. Explicitly allow only what you need."
                    ],
                    [
                        "Enable unattended security upgrades",
                        "sudo apt install unattended-upgrades → sudo dpkg-reconfigure -plow unattended-upgrades",
                        "Security patches apply automatically. Do not skip this — most compromises exploit known unpatched vulnerabilities."
                    ],
                    [
                        "Create a non-root sudo user",
                        "adduser yourusername → usermod -aG sudo yourusername",
                        "Never run your daily workflow as root. Log in as a normal user; sudo when needed."
                    ],
                    [
                        "Disable root SSH login",
                        "Edit /etc/ssh/sshd_config: PermitRootLogin no",
                        "Even with key auth, root SSH access is unnecessary and dangerous."
                    ]
                ]
            },
            {
                "type": "h2",
                "content": "Before Exposing Anything Externally"
            },
            {
                "type": "table",
                "headers": [
                    "Task",
                    "Command / Location",
                    "Why It Matters"
                ],
                "rows": [
                    [
                        "Confirm no ports open on router",
                        "Check router admin → port forwarding — should be empty",
                        "You should have zero open inbound ports. All external access via Pangolin/Tailscale tunnels only."
                    ],
                    [
                        "Verify Cloudflare/Pangolin tunnels are outbound-only",
                        "curl https://ifconfig.me from your server — should return your public IP, not a Cloudflare IP",
                        "Confirms your real IP is being protected by the tunnel."
                    ],
                    [
                        "Enable Authelia in front of all exposed services",
                        "Nginx Proxy Manager → each proxy host → Access List",
                        "Single sign-on with 2FA as the first thing anyone sees — before they reach any service."
                    ],
                    [
                        "Set a strong Authelia password policy",
                        "authelia config: min_length: 12, require_uppercase, require_number",
                        "Weak Authelia passwords defeat the point of having it."
                    ],
                    [
                        "Restrict Proxmox to Tailscale only",
                        "Proxmox → Datacenter → Firewall: allow only Tailscale subnet (100.64.0.0/10)",
                        "Proxmox must never be reachable from the internet. Compromise of Proxmox = compromise of everything."
                    ],
                    [
                        "Set Vaultwarden to invitation-only signup",
                        "SIGNUPS_ALLOWED=false in Vaultwarden env",
                        "Prevents random people from creating accounts on your password manager."
                    ],
                    [
                        "Review Gitea visibility settings",
                        "Admin → Site Administration → settings: repos default private",
                        "All repos private by default. Opt-in to public per repo."
                    ]
                ]
            },
            {
                "type": "h2",
                "content": "Ongoing — Quarterly Checklist"
            },
            {
                "type": "table",
                "headers": [
                    "Task",
                    "How",
                    "Frequency"
                ],
                "rows": [
                    [
                        "Rotate API keys and service passwords",
                        "Go through Vaultwarden, update any key that's >90 days old or was ever shared",
                        "Quarterly"
                    ],
                    [
                        "Review Docker container permissions",
                        "docker inspect [container] | grep -i cap — no container should have SYS_ADMIN unless required",
                        "Quarterly"
                    ],
                    [
                        "Audit exposed services via Pangolin",
                        "Pangolin dashboard → Resources — remove anything no longer needed",
                        "Quarterly"
                    ],
                    [
                        "Check for failed login attempts",
                        "grep 'Failed password' /var/log/auth.log | tail -50 — review and whitelist your own IPs",
                        "Monthly"
                    ],
                    [
                        "Review Authelia access logs",
                        "Check who's accessing what. Any unfamiliar IPs?",
                        "Monthly"
                    ],
                    [
                        "Update Hermes Agent",
                        "hermes update — pulls latest version",
                        "Monthly"
                    ],
                    [
                        "Test backup restoration",
                        "Restore one VM from PBS to a test environment. Can you actually recover?",
                        "Monthly"
                    ],
                    [
                        "Review Watchtower update log",
                        "Check what updated automatically — anything unexpected?",
                        "After each update cycle"
                    ],
                    [
                        "SSL certificate expiry check",
                        "sudo certbot certificates or check Nginx Proxy Manager cert expiry dates",
                        "Monthly — alert at 30 days remaining"
                    ],
                    [
                        "ZFS scrub results",
                        "zpool status — check for checksum errors or corrected faults since last scrub",
                        "After each monthly scrub"
                    ],
                    [
                        "Check disk S.M.A.R.T. health",
                        "smartctl -a /dev/sdX for each drive — focus on reallocated sectors, pending sectors, uncorrectable errors",
                        "Monthly"
                    ]
                ]
            },
            {
                "type": "h2",
                "content": "S.M.A.R.T. Attributes That Matter"
            },
            {
                "type": "p",
                "content": "Most S.M.A.R.T. attributes are noise. These five are the ones that actually predict imminent drive failure. A non-zero value on any of them for a drive containing data you care about means you order a replacement today, not next month."
            },
            {
                "type": "table",
                "headers": [
                    "Attribute ID",
                    "Name",
                    "What non-zero means",
                    "Action"
                ],
                "rows": [
                    [
                        "05",
                        "Reallocated Sectors Count",
                        "The drive has found bad sectors and remapped them to spares. The spare pool is finite.",
                        "1–5: monitor closely. >5: order replacement now."
                    ],
                    [
                        "0C7 (199)",
                        "UltraDMA CRC Error Rate",
                        "Errors between drive and SATA controller — often a bad cable, not the drive itself.",
                        "Replace the SATA cable first. If persists, the drive or controller is failing."
                    ],
                    [
                        "0B (11)",
                        "Recalibration Retries",
                        "Drive is struggling to find track positions — often a sign of mechanical wear.",
                        "Start watching reallocated sectors. Order a replacement if this climbs."
                    ],
                    [
                        "C5 (197)",
                        "Current Pending Sectors",
                        "Sectors that the drive suspects are bad but hasn't yet confirmed. The dangerous one — ZFS may be trying to read these.",
                        "Non-zero = imminent failure possible. Replace immediately."
                    ],
                    [
                        "C6 (198)",
                        "Uncorrectable Sector Count",
                        "Sectors the drive could not read or write at all. Data is already lost from these sectors.",
                        "Non-zero = some data is already unreadable. Replace now, check ZFS pool health immediately."
                    ]
                ]
            },
            {
                "type": "note",
                "title": "NOTE:",
                "content": "Run Scrutiny (already in the plan) to visualize these over time — a single bad value is less concerning than a value that is climbing week over week. A drive with 3 reallocated sectors that has been stable for 6 months is less worrying than one that gained 3 new reallocated sectors this week.",
                "level": "note"
            }
        ]
    },
    {
        "id": "backup-testing-restore-drills",
        "title": "Backup Testing: Restore Drills",
        "elements": [
            {
                "type": "p",
                "content": "A backup you have never tested is a backup you do not have. Each of these procedures should be run monthly, in a test environment, before you need them in a real emergency. The goal is to know exactly what recovery looks like before it is 2am and something has failed."
            },
            {
                "type": "h2",
                "content": "Drill 1: Proxmox Backup Server — VM Restore"
            },
            {
                "type": "table",
                "headers": [],
                "rows": [
                    [
                        "Scenario",
                        "A VM (e.g., your main Docker stack) has become corrupt or been accidentally deleted."
                    ],
                    [
                        "Step 1",
                        "Log into Proxmox Web UI → Datacenter → PBS storage"
                    ],
                    [
                        "Step 2",
                        "Select the VM backup from the list. Note the backup date and size shown."
                    ],
                    [
                        "Step 3",
                        "Click Restore → choose a new VMID (e.g., 999) so it creates a NEW VM rather than overwriting anything."
                    ],
                    [
                        "Step 4",
                        "Start the restored VM. SSH in. Verify: are Docker containers running? Is the data intact? Is the database consistent?"
                    ],
                    [
                        "Step 5",
                        "Delete the test VM once verified. The real VM is untouched."
                    ],
                    [
                        "What you learn",
                        "How long restore takes (note it). Whether your backup is actually consistent. Whether you know the restore process without googling."
                    ],
                    [
                        "Expected time",
                        "5–15 minutes for a 50GB VM restore over a local network."
                    ]
                ]
            },
            {
                "type": "h2",
                "content": "Drill 2: Vaultwarden — Export and Re-Import"
            },
            {
                "type": "table",
                "headers": [],
                "rows": [
                    [
                        "Scenario",
                        "Vaultwarden data is corrupt or the server is unreachable. Family cannot access any passwords."
                    ],
                    [
                        "Step 1",
                        "Restore the Vaultwarden data directory from your Rclone B2 backup to a test location."
                    ],
                    [
                        "Step 2",
                        "Spin up a fresh Vaultwarden Docker container pointing at the restored data directory."
                    ],
                    [
                        "Step 3",
                        "Log in to the test instance from a browser. Can you see all vaults, all passwords, all shared collections?"
                    ],
                    [
                        "Step 4",
                        "Test one family member's account — can they log in and see their items?"
                    ],
                    [
                        "Step 5",
                        "Shut down the test instance. Document how long this took and any issues encountered."
                    ],
                    [
                        "What you learn",
                        "Whether the B2 backup is actually usable (not just present). Whether you can restore without the original server."
                    ],
                    [
                        "Critical check",
                        "Verify the backup is recent — check the file modification date on B2. If the last sync was 2 weeks ago, your backup retention policy needs fixing."
                    ]
                ]
            },
            {
                "type": "h2",
                "content": "Drill 3: Rclone B2 — Full NAS Restore Simulation"
            },
            {
                "type": "table",
                "headers": [],
                "rows": [
                    [
                        "Scenario",
                        "The NAS has failed completely. You need to recover your most important data from off-site B2 backup."
                    ],
                    [
                        "Step 1",
                        "On a test machine (or a separate directory), run: rclone ls b2:your-bucket/important-dir -- verify the file list looks correct and recent."
                    ],
                    [
                        "Step 2",
                        "Pick one critical directory (e.g., Immich original photos for one month). Run: rclone copy b2:your-bucket/photos/2025-01 /tmp/restore-test/"
                    ],
                    [
                        "Step 3",
                        "Verify the restored files: open several images, check file sizes match, verify no corruption (md5sum comparison if you stored checksums)."
                    ],
                    [
                        "Step 4",
                        "Check the encryption: if you encrypted with rclone crypt, verify you can decrypt with your stored password. This is the most common failure point — encrypted backups whose keys are lost."
                    ],
                    [
                        "Step 5",
                        "Estimate full restore time based on your B2 egress speed and total backup size."
                    ],
                    [
                        "What you learn",
                        "Whether your rclone crypt password is documented and accessible. How long a full restore would actually take. Whether your most critical data is actually being synced."
                    ]
                ]
            },
            {
                "type": "h2",
                "content": "Drill 4: ZFS — Pool Resilver After Drive Failure"
            },
            {
                "type": "table",
                "headers": [],
                "rows": [
                    [
                        "Scenario",
                        "One drive in your NAS mirror shows a S.M.A.R.T. pre-failure warning. You need to replace it before the drive dies."
                    ],
                    [
                        "Step 1",
                        "Identify the failing drive: zpool status — look for DEGRADED or the specific device with errors."
                    ],
                    [
                        "Step 2",
                        "Order the replacement drive. While waiting, the pool is degraded but still functional — do not power off."
                    ],
                    [
                        "Step 3",
                        "When the new drive arrives, physically hot-swap it (Synology/TrueNAS support this). Or shut down, swap, and power back on."
                    ],
                    [
                        "Step 4",
                        "Run: zpool replace pool_name /dev/old_disk /dev/new_disk — ZFS begins resilvering immediately."
                    ],
                    [
                        "Step 5",
                        "Monitor with: zpool status — watch the resilver progress. On a 14TB drive, resilver takes 6–24 hours."
                    ],
                    [
                        "Step 6",
                        "Verify completion: zpool status should show ONLINE for all vdevs with zero errors."
                    ],
                    [
                        "What you learn",
                        "The resilver timeline for your drive size. Whether your pool configuration is correct (run this drill on a test pool with small files before you have real data)."
                    ],
                    [
                        "The drill version",
                        "Create a test ZFS pool on your Mini PC with two small USB drives (or two loop devices). Simulate a drive failure with zpool offline, replace the 'failed' drive, and watch the resilver. Do this before you depend on ZFS."
                    ]
                ]
            }
        ]
    },
    {
        "id": "troubleshooting-what-to-check-first",
        "title": "Troubleshooting: What to Check First",
        "elements": [
            {
                "type": "p",
                "content": "This is the map, not the manual. The manual lives in SilverBullet — write detailed notes there when you solve something. This section gives you the diagnostic order so you stop in the right place instead of wandering."
            },
            {
                "type": "h2",
                "content": "Service Not Accessible"
            },
            {
                "type": "p",
                "content": "Work through these in order. Stop at the first one that fails — that is where the problem is."
            },
            {
                "type": "table",
                "headers": [
                    "Step",
                    "Check",
                    "Command / Tool",
                    "What it rules out"
                ],
                "rows": [
                    [
                        "1",
                        "Is the container running?",
                        "docker ps | grep [service-name]",
                        "If not running: docker logs [container] to see why it crashed"
                    ],
                    [
                        "2",
                        "Is it listening on the expected port?",
                        "ss -tlnp | grep [port] or docker port [container]",
                        "Container may be running but crashed internally after start"
                    ],
                    [
                        "3",
                        "Can you reach it directly on the host?",
                        "curl http://localhost:[port] from the server itself",
                        "Rules out the container. If this fails, problem is inside Docker"
                    ],
                    [
                        "4",
                        "Is the reverse proxy pointed at the right host:port?",
                        "Nginx Proxy Manager → proxy host → check Forward Hostname and Port",
                        "A typo here is the most common cause of 502 Bad Gateway"
                    ],
                    [
                        "5",
                        "Is DNS resolving correctly?",
                        "nslookup service.yourdomain.com — from both server and a client device",
                        "Two different failure modes: wrong DNS record vs wrong proxy config"
                    ],
                    [
                        "6",
                        "Is there a firewall blocking it?",
                        "sudo ufw status or check Proxmox firewall rules",
                        "UFW may be blocking the port even though the service is running"
                    ],
                    [
                        "7",
                        "Is the SSL cert valid?",
                        "curl -v https://service.yourdomain.com 2>&1 | grep -i cert",
                        "Expired cert causes HTTPS failures that look like service failures"
                    ],
                    [
                        "8",
                        "Is Pangolin/Tailscale connected?",
                        "tailscale status or check Pangolin dashboard",
                        "Tunnel may have dropped — restart newt container"
                    ]
                ]
            },
            {
                "type": "h2",
                "content": "Server Not Responding (SSH Down)"
            },
            {
                "type": "table",
                "headers": [
                    "Step",
                    "Check",
                    "How"
                ],
                "rows": [
                    [
                        "1",
                        "Is the server powered on?",
                        "Check physical power light. Check UPS — did power cut happen?"
                    ],
                    [
                        "2",
                        "Is it on the network?",
                        "ping [server-ip] from another device on the same network"
                    ],
                    [
                        "3",
                        "Is SSH running but port blocked?",
                        "Try Tailscale IP if Tailscale is on a different interface: ssh user@100.x.x.x"
                    ],
                    [
                        "4",
                        "Did a kernel update break boot?",
                        "Connect monitor + keyboard. Watch boot messages. Does it hang? Does it show a grub menu?"
                    ],
                    [
                        "5",
                        "Is the filesystem full?",
                        "If boot succeeds but SSH fails: boot to recovery mode, check df -h — full / partition causes all sorts of failure"
                    ],
                    [
                        "6",
                        "Did Docker eat all the RAM?",
                        "Boot with reduced Docker services if possible. Check dmesg for OOM killer messages."
                    ],
                    [
                        "7",
                        "ZFS pool issue?",
                        "zpool status on the recovery console. A faulted pool can stall boot."
                    ],
                    [
                        "Last resort",
                        "Physical access",
                        "Connect HDMI and keyboard. The screen output will tell you exactly what is happening."
                    ]
                ]
            },
            {
                "type": "h2",
                "content": "Proxmox VM Not Starting"
            },
            {
                "type": "table",
                "headers": [
                    "Symptom",
                    "Check",
                    "Fix"
                ],
                "rows": [
                    [
                        "Task error: 'permission denied'",
                        "Check if the VM disk file exists: ls -lh /var/lib/vz/images/[VMID]/",
                        "Disk may have been moved or corrupted — restore from PBS"
                    ],
                    [
                        "Error: 'No space left on device'",
                        "pveam list or df -h on the Proxmox host",
                        "Local storage full — move VMs to NAS storage or expand"
                    ],
                    [
                        "VM starts then immediately stops",
                        "Check VM console output: in web UI, click console before starting",
                        "Often a kernel panic or misconfigured bootloader — visible in console"
                    ],
                    [
                        "'Lock file exists' error",
                        "qm unlock [VMID]",
                        "Leftover lock from a crash. Safe to remove if VM is definitively stopped."
                    ],
                    [
                        "Network not coming up in VM",
                        "Check VM network config in hardware tab. Check bridge: ip link show on Proxmox host.",
                        "Bridge may be misconfigured or missing after update"
                    ],
                    [
                        "PBS restore fails",
                        "Check PBS datastore free space. Check network connectivity to PBS.",
                        "PBS storage may be full — dedup doesn't always prevent this if tasks accumulate"
                    ]
                ]
            },
            {
                "type": "h2",
                "content": "ZFS Pool Degraded or Faulted"
            },
            {
                "type": "table",
                "headers": [
                    "State",
                    "What it means",
                    "What to do"
                ],
                "rows": [
                    [
                        "DEGRADED (one drive offline)",
                        "One drive failed or was removed. The pool still works from the mirror but has NO redundancy.",
                        "Check S.M.A.R.T. on the affected drive. Order replacement immediately. Do not add writes unless necessary."
                    ],
                    [
                        "DEGRADED (resilver in progress)",
                        "A replacement drive is being rebuilt from the mirror. Normal operation.",
                        "Wait. Monitor progress with zpool status. Do not interrupt unless the host must reboot."
                    ],
                    [
                        "FAULTED",
                        "The pool cannot be imported — possible data loss. Usually requires manual intervention.",
                        "zpool import -f [pool-name] may recover it. If that fails: boot from a live USB and attempt recovery. This is a SilverBullet runbook situation."
                    ],
                    [
                        "Checksum errors (non-zero)",
                        "ZFS detected and corrected corruption. The data is fine but the drive is struggling.",
                        "Run zpool scrub. Watch if errors accumulate. More than a few per week = drive health concern."
                    ],
                    [
                        "REMOVED",
                        "Drive was cleanly removed (hot-swap) or disconnected.",
                        "Reconnect the drive: zpool online pool_name [device]. If the drive is gone permanently, replace with zpool replace."
                    ],
                    [
                        "Scrub errors",
                        "Uncorrectable errors found during scrub. Some data is unreadable.",
                        "Check which files: zpool status -v. If backups are good, restore affected files. If no backup of those files, data may be lost."
                    ]
                ]
            },
            {
                "type": "h2",
                "content": "AdGuard Home: Everything Stopped Working"
            },
            {
                "type": "p",
                "content": "When AdGuard breaks, it takes the entire network's DNS with it. Everything stops loading. This is the most disruptive single point of failure in Stage 1."
            },
            {
                "type": "table",
                "headers": [
                    "Symptom",
                    "Check",
                    "Fix"
                ],
                "rows": [
                    [
                        "All domains resolve but ads show again",
                        "AdGuard container crashed — browser using ISP DNS fallback",
                        "docker restart adguard"
                    ],
                    [
                        "Nothing resolves at all",
                        "AdGuard container is down and no fallback configured",
                        "On another device, temporarily set DNS to 1.1.1.1 manually. Then fix AdGuard."
                    ],
                    [
                        "AdGuard shows as running but DNS fails",
                        "Port 53 conflict — another process took port 53",
                        "ss -tlunp | grep 53 to find the conflict. systemd-resolved is the common culprit on Ubuntu."
                    ],
                    [
                        "systemd-resolved conflict on Ubuntu",
                        "Ubuntu runs systemd-resolved on 127.0.0.53:53 by default",
                        "Edit /etc/systemd/resolved.conf: DNSStubListener=no → systemctl restart systemd-resolved"
                    ],
                    [
                        "Upstream DNS failing",
                        "AdGuard cannot reach 1.1.1.1 or 9.9.9.9",
                        "Check server internet connectivity: curl https://1.1.1.1 — network issue if this fails"
                    ],
                    [
                        "Specific domain broken for one device",
                        "That device has DNS cached from before AdGuard — or has manual DNS configured",
                        "On the device: ipconfig /flushdns (Windows) or sudo resolvectl flush-caches (Linux)"
                    ]
                ]
            },
            {
                "type": "h2",
                "content": "Tailscale: Can't Reach Server Remotely"
            },
            {
                "type": "table",
                "headers": [
                    "Symptom",
                    "Check",
                    "Fix"
                ],
                "rows": [
                    [
                        "tailscale status shows server as offline",
                        "Tailscale daemon on the server has crashed or been stopped",
                        "SSH into the server over LAN. sudo systemctl restart tailscaled"
                    ],
                    [
                        "Server shows online but SSH times out",
                        "Server firewall is blocking Tailscale traffic",
                        "sudo ufw allow in on tailscale0 — allow all traffic on the Tailscale interface"
                    ],
                    [
                        "Login expired / authentication required",
                        "Tailscale key has expired",
                        "sudo tailscale up — re-authenticate via the Tailscale admin console"
                    ],
                    [
                        "Tailscale connected but can't reach Docker services",
                        "Subnet routing not enabled",
                        "sudo tailscale up --advertise-routes=192.168.1.0/24 — enables access to local services"
                    ],
                    [
                        "Very high latency via Tailscale",
                        "DERP relay being used instead of direct connection",
                        "Usually resolves itself. Check Tailscale admin console for relay vs direct status."
                    ]
                ]
            },
            {
                "type": "h2",
                "content": "Docker Compose: Common Errors"
            },
            {
                "type": "table",
                "headers": [
                    "Error message",
                    "Cause",
                    "Fix"
                ],
                "rows": [
                    [
                        "port is already allocated",
                        "Another container or service is using that host port",
                        "Change the host port (left side of colon) in docker-compose.yml. See Port Reference table."
                    ],
                    [
                        "no such file or directory (volume mount)",
                        "The host directory in the volume mount doesn't exist",
                        "mkdir -p /opt/stacks/[service]/data — create the directory first"
                    ],
                    [
                        "permission denied (volume mount)",
                        "The container's user doesn't have permission to write to the mounted directory",
                        "chown -R 1000:1000 /opt/stacks/[service]/data — match the container's UID"
                    ],
                    [
                        "network [name] not found",
                        "The Docker network referenced in compose doesn't exist yet",
                        "docker network create [name] — or run docker compose up for the stack that owns the network first"
                    ],
                    [
                        "image not found",
                        "Typo in image name, or private registry not authenticated",
                        "docker pull [image] manually to see the actual error message"
                    ],
                    [
                        "container name already in use",
                        "A stopped container with the same name still exists",
                        "docker rm [container-name] — remove the stopped container first"
                    ],
                    [
                        "Exit code 1 immediately after start",
                        "Application crashed on startup — check logs",
                        "docker logs [container-name] — the actual error is in there"
                    ],
                    [
                        "Health check failing but app seems fine",
                        "Health check command is wrong or the service takes time to start",
                        "Add a startup delay: start_period: 30s in the healthcheck section"
                    ]
                ]
            }
        ]
    },
    {
        "id": "interview-prep-practice-environment",
        "title": "Interview Prep: Practice Environment",
        "elements": [
            {
                "type": "p",
                "content": "This section is a tool, not talking points. The goal is a homelab setup that actively helps you practice — coding challenges, system design, technical screens — using AI to give you feedback you can't get from LeetCode alone."
            },
            {
                "type": "h2",
                "content": "What This Covers"
            },
            {
                "type": "p",
                "content": "Three distinct modes of interview prep, each with a concrete homelab implementation:"
            },
            {
                "type": "table",
                "headers": [
                    "Mode",
                    "What you're practicing",
                    "Homelab role"
                ],
                "rows": [
                    [
                        "LeetCode / coding challenges",
                        "Problem-solving speed, patterns, edge cases",
                        "Hermes as an adaptive tutor who explains, quizzes you, tracks weak spots, and adjusts difficulty based on how you're doing — not a static problem bank"
                    ],
                    [
                        "System design",
                        "Whiteboarding distributed systems under time pressure",
                        "Your actual infrastructure as the reference. Hermes runs timed mock sessions, challenges your assumptions, and asks follow-up questions like an interviewer would"
                    ],
                    [
                        "Technical screen simulation",
                        "Thinking out loud while coding, handling pressure, recovering from mistakes",
                        "Hermes voices the interviewer role — asks clarifying questions, gives hints on a delay, and gives you a debrief afterward with specific things to improve"
                    ]
                ]
            },
            {
                "type": "h2",
                "content": "LeetCode Practice Environment"
            },
            {
                "type": "h3",
                "content": "The Problem With LeetCode Alone"
            },
            {
                "type": "p",
                "content": "LeetCode tells you pass/fail. It doesn't tell you why your thinking got stuck, which patterns you keep missing, or what to focus on next given where you are in your prep. Hermes fills those gaps."
            },
            {
                "type": "h3",
                "content": "Session Setup"
            },
            {
                "type": "table",
                "headers": [],
                "rows": [
                    [
                        "Hermes as tutor — starter prompt",
                        "'You are a coding interview tutor. I have [X weeks] until interviews at [company type]. My weak areas are [DP, graphs, etc.]. Each session: give me one problem matched to my level, let me attempt it, then give me a structured debrief. Track which patterns we've covered and remind me at the start of each session. If I haven't attempted something in 5 days, pick a problem from that category.'"
                    ],
                    [
                        "Session structure",
                        "Hermes gives you a problem. You open a blank editor (VS Code, Replit, or your Gitea-hosted coding environment). You work through it, thinking out loud in the chat. Hermes watches for stuck points but doesn't give answers — it gives directed hints after a configurable delay."
                    ],
                    [
                        "Configurable hint delay",
                        "Tell Hermes: 'Give me a hint only if I've been silent for 8 minutes or explicitly ask.' This mirrors the real interview dynamic where you have to drive."
                    ],
                    [
                        "Pattern tracking",
                        "After each problem, Hermes updates a running note: problem name, pattern (sliding window / two pointer / DFS / DP / etc.), whether you got it, and what you missed. After 10 sessions, it surfaces your three weakest patterns and weights toward those."
                    ],
                    [
                        "Spaced repetition",
                        "Every Sunday morning, Hermes sends you a Telegram message: 'You haven't reviewed [two-pointer problems] in 8 days. Here's a quick problem to stay sharp.' Low-friction maintenance."
                    ]
                ]
            },
            {
                "type": "h3",
                "content": "Clean Coding Environment — Spin Up in 60 Seconds"
            },
            {
                "type": "p",
                "content": "Keep a Gitea repo called interview-env. Clone and run in one command:"
            },
            {
                "type": "table",
                "headers": [],
                "rows": [
                    [
                        "What it contains",
                        "docker-compose.yml with Postgres 16 (seeded schema), Redis 7, a PocketBase backend, and a bare React+Vite frontend. Plus a /problems directory of solved problems with your notes."
                    ],
                    [
                        "One-command start",
                        "git clone gitea.home/you/interview-env && cd interview-env && docker compose up -d"
                    ],
                    [
                        "Why this matters",
                        "Take-home assessments: zero setup time. Live coding: you have a working full-stack reference. The environment is yours — you chose every piece of it and you can explain every choice."
                    ],
                    [
                        "Problem notes format",
                        "Each solved problem gets a markdown file: problem name, constraints, your first approach, why it was wrong, the correct approach, time/space complexity, and which pattern it demonstrates. Hermes generates this template after each session."
                    ]
                ]
            },
            {
                "type": "h2",
                "content": "System Design Practice"
            },
            {
                "type": "h3",
                "content": "How It Works"
            },
            {
                "type": "p",
                "content": "System design interviews are not about memorizing architecture diagrams. They are about demonstrating structured thinking under time pressure — scoping, asking good questions, making tradeoffs explicitly, and defending choices. Hermes simulates the interviewer, not the answer."
            },
            {
                "type": "table",
                "headers": [],
                "rows": [
                    [
                        "Mock session prompt for Hermes",
                        "'Run a 45-minute system design mock interview with me. Pick a real system (URL shortener, ride-sharing, video streaming, notification system, etc.) — don't tell me which one until I say start. Act as a senior engineer interviewer: ask clarifying questions, push back on my assumptions, ask me to go deeper on specific components, and at the end give me a debrief covering what I did well, what I missed, and one thing to focus on next time.'"
                    ],
                    [
                        "Starting the session",
                        "Type 'start' to Hermes. It names the system. You have 45 minutes. Think out loud — paste your rough architecture into the chat, describe your thinking, ask if you should go deeper on any component."
                    ],
                    [
                        "What Hermes challenges",
                        "Scale assumptions ('what if traffic spikes 100x?'), consistency tradeoffs ('you chose eventual consistency — what breaks for the user?'), component choices ('why Postgres here and not Cassandra?'), missing pieces ('you forgot the cache invalidation strategy')."
                    ],
                    [
                        "Debrief format",
                        "Hermes ends the session with: what you covered well, one component you skimmed, one question you should have asked the interviewer, and a 1–10 score on depth vs breadth balance."
                    ],
                    [
                        "Tracking progress",
                        "Hermes keeps a running log: systems covered, date, score, and the main gap from each session. After 5 sessions it identifies your structural weak spot (e.g., 'you consistently underspec the data model before jumping to infrastructure')."
                    ]
                ]
            },
            {
                "type": "h2",
                "content": "Full Technical Screen Simulation"
            },
            {
                "type": "p",
                "content": "This is the hardest mode — it requires Hermes to hold role throughout the session without breaking character, which works best with a capable model (Claude via OpenRouter). Run it when you are 2–3 weeks out and want to stress-test."
            },
            {
                "type": "table",
                "headers": [],
                "rows": [
                    [
                        "The prompt",
                        "'You are conducting a 60-minute technical screen for a mid-level frontend/fullstack engineer role. Start with 5 minutes of background questions, then give me a coding problem to work through while talking out loud. Give me one hint if I've been stuck for more than 10 minutes without progress. At the end, give me honest feedback as if you were actually writing feedback to a hiring committee.'"
                    ],
                    [
                        "The coding-out-loud practice",
                        "The most commonly failed part of real interviews is not solving the problem — it's failing to communicate your thinking while you solve it. Practice narrating: 'I'm thinking about this as a sliding window problem because... let me check the constraints first... I notice this edge case...' Hermes listens and gives feedback on your narration quality in the debrief."
                    ],
                    [
                        "Recovering from mistakes",
                        "Tell Hermes to simulate the experience of catching a bug mid-solution and recovering gracefully. Real interviews often turn on this moment — do you panic, or do you say 'I see the issue, let me trace through why...' and fix it systematically?"
                    ],
                    [
                        "Calibration",
                        "After 3 simulated screens, ask Hermes to compare your sessions and identify one consistent pattern: 'You always rush the problem clarification step. In all three sessions you started coding within 90 seconds of getting the problem. Interviewers notice this.'"
                    ]
                ]
            },
            {
                "type": "h2",
                "content": "Hermes as a General Study Partner"
            },
            {
                "type": "p",
                "content": "Beyond structured interview prep, Hermes is genuinely useful for learning anything technical — not just homelab topics. The key insight: Hermes has memory across sessions and can build a model of exactly where your understanding breaks down."
            },
            {
                "type": "table",
                "headers": [
                    "Study mode",
                    "How to set it up",
                    "What makes it better than reading/watching"
                ],
                "rows": [
                    [
                        "Concept deep-dives",
                        "'Explain [concept] to me starting from first principles. Check my understanding as you go by asking me to predict things before you explain them.'",
                        "Active recall beats passive reading. Hermes forces you to engage rather than just absorb."
                    ],
                    [
                        "Feynman testing",
                        "'I think [concept] works like [your explanation]. Find the holes in my understanding and ask me targeted questions until I can explain it correctly.'",
                        "Identifies exactly where your mental model is wrong, not just that it is wrong."
                    ],
                    [
                        "Spaced repetition review",
                        "Every week, Hermes reviews your SilverBullet notes and asks you questions about concepts you haven't revisited in 14+ days.",
                        "Combines your note-taking system with active recall — your notes become a quiz bank."
                    ],
                    [
                        "Concept mapping",
                        "'I'm learning [topic]. Based on my past questions and SilverBullet notes, what prerequisite concepts am I missing that are blocking deeper understanding?'",
                        "Identifies unknown unknowns — things you didn't know to look up."
                    ],
                    [
                        "Rubber duck debugging",
                        "Talk through a problem you're stuck on. Hermes asks clarifying questions without giving the answer. The act of explaining it clearly usually surfaces the issue.",
                        "Often you solve your own problem before Hermes needs to help — which is what you want in an interview too."
                    ],
                    [
                        "Video summarization",
                        "Paste a YouTube URL or transcript into the conversation. Hermes summarizes the key points, extracts actionable insights, and adds them to SilverBullet in your note format.",
                        "Turns passive video watching into structured knowledge capture. See the Second Brain section."
                    ]
                ]
            }
        ]
    },
    {
        "id": "energy-monitoring-and-cost-dashboard",
        "title": "Energy Monitoring and Cost Dashboard",
        "elements": [
            {
                "type": "p",
                "content": "The doc mentions NYC electricity costs and the Kill A Watt meter repeatedly. This section closes the loop: how to get per-device wattage into Home Assistant, build a Grafana cost dashboard, and have Hermes give you monthly energy reports. At $0.25/kWh in NYC, even a 15W idle device costs $33/year — the numbers add up fast when you are running a full homelab stack."
            },
            {
                "type": "h2",
                "content": "Hardware: Which Smart Plug to Use"
            },
            {
                "type": "table",
                "headers": [
                    "Plug",
                    "Energy monitoring?",
                    "Local control?",
                    "Home Assistant integration",
                    "Cost",
                    "Best for"
                ],
                "rows": [
                    [
                        "Kasa EP25 (already in accessories)",
                        "Yes — real-time watts, amps, voltage",
                        "Yes — works without Kasa cloud via local API",
                        "Excellent native HA integration via Kasa Local",
                        "~$15–20",
                        "Most devices: server, NAS, UPS, network gear"
                    ],
                    [
                        "Shelly Plug S / Shelly Plus Plug US",
                        "Yes — high accuracy, 0.1W resolution",
                        "Yes — MQTT or HTTP, fully local",
                        "Excellent — Shelly is the homelab community standard for energy monitoring",
                        "~$15–20",
                        "Preferred if you want open firmware (Shelly supports Tasmota / Mongoose OS)"
                    ],
                    [
                        "Emporia Vue 2 (whole-home)",
                        "Yes — per-circuit monitoring, clips onto breaker panel",
                        "Yes — local API available",
                        "Good HA integration via Emporia custom component",
                        "~$70",
                        "The whole building — see per-circuit usage including HVAC, washer/dryer, server closet"
                    ],
                    [
                        "TP-Link Kasa EP10",
                        "No energy monitoring",
                        "Yes — local API",
                        "Good",
                        "~$10",
                        "Devices you just want to automate, not monitor"
                    ]
                ]
            },
            {
                "type": "note",
                "title": "RECOMMENDATION:",
                "content": "Get one Shelly Plug S per major device (server, NAS, tower workstation, UPS, network switch) and one Emporia Vue 2 for whole-home circuit monitoring. The Emporia clips onto your breaker panel and gives you the full picture — the Shelly plugs give you per-device granularity within that picture.",
                "level": "note"
            },
            {
                "type": "h2",
                "content": "Home Assistant Energy Integration"
            },
            {
                "type": "table",
                "headers": [],
                "rows": [
                    [
                        "Step 1: Add smart plugs",
                        "Kasa EP25 → HA Settings → Devices → Add Integration → TP-Link Kasa. Shelly → HA Settings → Devices → Add Integration → Shelly. Both auto-discover on the local network."
                    ],
                    [
                        "Step 2: Enable HA Energy Dashboard",
                        "HA Settings → Energy → Add individual device consumption → select each smart plug entity (sensor.[device]_current_power). HA calculates kWh from the real-time watt readings automatically."
                    ],
                    [
                        "Step 3: Set your electricity rate",
                        "HA Energy Dashboard → Electricity grid → Add tariff → $0.25/kWh (Con Edison NYC average). HA will calculate cost automatically in the Energy dashboard."
                    ],
                    [
                        "Step 4: Create device-level entities",
                        "In HA's energy dashboard, label each plug: 'server-mini-pc', 'nas-synology', 'tower-t5820', 'ups-cyberpower', 'network-switch'. These labels appear in all dashboards and Grafana queries."
                    ],
                    [
                        "Step 5: Long-term statistics",
                        "HA stores energy data in its long-term statistics database. No InfluxDB needed for basic cost tracking — HA's built-in energy dashboard shows daily/weekly/monthly cost per device going back months."
                    ]
                ]
            },
            {
                "type": "h2",
                "content": "Grafana Energy Cost Dashboard"
            },
            {
                "type": "p",
                "content": "Home Assistant's built-in energy dashboard is good but not customizable enough for a multi-device homelab. Pull the data into Grafana for a proper per-device cost breakdown:"
            },
            {
                "type": "table",
                "headers": [],
                "rows": [
                    [
                        "Data source",
                        "Use the Home Assistant Grafana integration (hass-grafana-datasource) or push HA sensor data to InfluxDB via the InfluxDB integration in HA. InfluxDB is cleaner for long-term Grafana queries."
                    ],
                    [
                        "Key panels to build",
                        "(1) Current wattage per device — bar chart, real-time. Immediately shows the Mini PC at 12W, NAS at 20W, switch at 8W, etc. (2) Monthly kWh per device — stacked area chart over time. (3) Monthly cost per device ($) at $0.25/kWh — this is the one you screenshot for hardware justification decisions. (4) Projected annual cost — simple calculation: monthly cost * 12."
                    ],
                    [
                        "The hardware justification panel",
                        "A Grafana stat panel: 'Tower workstation monthly idle cost: $12.75 vs. Mini PC monthly cost: $0.90'. This makes the Stage 4 upgrade decision concrete — you know exactly what the always-on tower costs."
                    ],
                    [
                        "Grafana formula for cost",
                        "In InfluxDB query: SELECT mean(value) * 0.001 * 720 * 0.25 FROM homeassistant WHERE entity_id = 'sensor.mini_pc_power'. This converts average watts → kWh/month → cost/month at $0.25/kWh. Adjust 720 for hours in a month."
                    ],
                    [
                        "The Con Edison rate caveat",
                        "NYC Con Edison has time-of-use rates during summer peak demand (peak hours cost more). For accuracy, the Emporia Vue 2 can track time-of-use separately. For planning purposes, $0.25/kWh average is close enough."
                    ]
                ]
            },
            {
                "type": "h2",
                "content": "Hermes Monthly Energy Report"
            },
            {
                "type": "table",
                "headers": [],
                "rows": [
                    [
                        "Scheduled automation",
                        "1st of every month at 8am: Hermes queries the HA energy API (or InfluxDB) for last month's per-device energy consumption, calculates cost at $0.25/kWh, and sends a formatted Telegram report."
                    ],
                    [
                        "Report format",
                        "[ENERGY REPORT — March 2027] | Mini PC: 8.6 kWh — $2.15 | NAS: 14.4 kWh — $3.60 | Tower (idle): 51.8 kWh — $12.95 | Network stack: 5.8 kWh — $1.45 | TOTAL: 80.6 kWh — $20.15 | vs last month: +$2.10 (Tower added this month)"
                    ],
                    [
                        "Anomaly detection",
                        "If any device shows >20% higher consumption than its 3-month average, Hermes flags it: 'NAS power draw is 35% above average — check for runaway processes or drive resilver.'"
                    ],
                    [
                        "Annual projection",
                        "Hermes calculates: 'At current consumption, your annual electricity cost for homelab hardware is $241.80. Savings vs cloud equivalents (Google One, Spotify, iCloud, GitHub): ~$720/year.'"
                    ]
                ]
            }
        ]
    },
    {
        "id": "subscription-tracker-beyond-manual-entry",
        "title": "Subscription Tracker — Beyond Manual Entry",
        "elements": [
            {
                "type": "p",
                "content": "Wallos (already in the plan) is manual — you enter subscriptions yourself. That is fine for the ones you know about, but it misses the ones you forgot, the trials that converted, and the ones that quietly increased their price. Automatic detection requires connecting to your bank data."
            },
            {
                "type": "h2",
                "content": "How Automatic Detection Works"
            },
            {
                "type": "p",
                "content": "The pattern: connect a read-only feed of your bank transactions → run recurring charge detection logic → surface new or changed subscriptions. You never enter anything manually."
            },
            {
                "type": "h2",
                "content": "Option 1: Actual Budget + SimpleFIN (Most Private)"
            },
            {
                "type": "table",
                "headers": [],
                "rows": [
                    [
                        "What it is",
                        "Actual Budget (already in the plan) connects to SimpleFIN Bridge (~$1.50/month) which gives read-only access to US bank accounts via Open Banking APIs. Transactions sync automatically."
                    ],
                    [
                        "Subscription detection",
                        "Actual Budget does not do this automatically, but Hermes can. Give Hermes access to the Actual Budget API: 'Every month, look at the last 60 days of transactions, identify anything that appears on the same date each month for the same amount, and generate a subscription report. Flag any new ones I have not seen before, any that increased in price, and any that appear to have stopped.'"
                    ],
                    [
                        "Privacy",
                        "Your transaction data stays on your server in the Actual Budget database. SimpleFIN only reads, never writes. The only data that leaves is what SimpleFIN pulls from your bank to sync."
                    ],
                    [
                        "Cost",
                        "Actual Budget: free. SimpleFIN: ~$1.50/month per institution. Worth it."
                    ]
                ]
            },
            {
                "type": "h2",
                "content": "Option 2: Lunch Money (Cloud, Simple)"
            },
            {
                "type": "table",
                "headers": [],
                "rows": [
                    [
                        "What it is",
                        "Lunch Money is a budgeting app (~$10/month) with built-in recurring transaction detection. It connects directly to US banks via Plaid and automatically identifies subscriptions."
                    ],
                    [
                        "Why mention it",
                        "Zero setup. It just works. If you want automatic subscription detection today without building anything, this is the fastest path."
                    ],
                    [
                        "Privacy tradeoff",
                        "Your transaction data lives on Lunch Money's servers, not yours. Acceptable for most people; not acceptable if you want full data sovereignty."
                    ],
                    [
                        "Self-hosted alternative",
                        "Firefly III with the Firefly III Data Importer (FIDI) — connects to banks via Nordigen/GoCardless (EU) or Plaid (US). More complex to set up than Actual Budget but has better recurring transaction detection built in."
                    ]
                ]
            },
            {
                "type": "h2",
                "content": "Option 3: n8n + Plaid API (Most Powerful, More Setup)"
            },
            {
                "type": "table",
                "headers": [],
                "rows": [
                    [
                        "What it is",
                        "Plaid is the bank connection API that most fintech apps use. Plaid has a free development tier that allows up to 100 live Items (bank connections). You can connect your own bank accounts for personal use under the development tier."
                    ],
                    [
                        "n8n workflow",
                        "Weekly cron → call Plaid Transactions API for the last 60 days → group by merchant and amount → identify recurring patterns → compare to last week's patterns → surface new, changed, or stopped subscriptions → send to Actual Budget and ntfy."
                    ],
                    [
                        "The subscription detection logic",
                        "A subscription is: same merchant, same amount (within ±$1), appearing on the same day of month (within ±3 days), at least 2 times. Flag anything matching this pattern that was not in the previous week's pattern list."
                    ],
                    [
                        "Price increase detection",
                        "Same merchant, same recurrence pattern, but amount changed. Flag immediately — this is the one most people miss."
                    ],
                    [
                        "Data stays local",
                        "Plaid tokens and transaction data stored in your Postgres database on the server. Plaid processes the bank connection but you receive and store the transaction data."
                    ]
                ]
            },
            {
                "type": "note",
                "title": "RECOMMENDATION:",
                "content": "Start with Actual Budget + SimpleFIN + monthly Hermes review. This gives you automatic transaction sync with a manual AI-assisted analysis step. Upgrade to the n8n + Plaid workflow if you want fully automated weekly detection — but the setup complexity is significant and the monthly Hermes review catches everything important anyway.",
                "level": "note"
            }
        ]
    },
    {
        "id": "dns-privacy-dns-over-https-and-dns-over-tls",
        "title": "DNS Privacy: DNS-over-HTTPS and DNS-over-TLS",
        "elements": [
            {
                "type": "p",
                "content": "Every DNS query you make is visible to your ISP by default — they can see every domain name your network requests even if the actual web traffic is encrypted by HTTPS. The fix is encrypting the DNS queries themselves. AdGuard Home supports both sending encrypted DNS upstream (your queries to the internet are private) and receiving encrypted DNS from your devices (your devices communicate with AdGuard privately even on the local network)."
            },
            {
                "type": "h2",
                "content": "Two Directions of DNS Encryption"
            },
            {
                "type": "table",
                "headers": [
                    "Direction",
                    "What it protects",
                    "Where to configure"
                ],
                "rows": [
                    [
                        "Upstream DoH/DoT (AdGuard → internet)",
                        "Your ISP cannot see which domains you are looking up. Instead of sending plaintext DNS to 1.1.1.1:53, AdGuard sends encrypted HTTPS requests to https://1.1.1.1/dns-query.",
                        "AdGuard Home → Settings → DNS settings → Upstream DNS servers"
                    ],
                    [
                        "Local DoH/DoT (devices → AdGuard)",
                        "Devices on your local network communicate with AdGuard encrypted, even on the LAN. Less critical than upstream (you trust your own LAN), but prevents snooping on shared Wi-Fi and is a good practice for devices you are learning to secure.",
                        "AdGuard Home → Settings → Encryption settings — requires a certificate for your local domain"
                    ]
                ]
            },
            {
                "type": "h2",
                "content": "Configuring Encrypted Upstream DNS in AdGuard Home"
            },
            {
                "type": "table",
                "headers": [],
                "rows": [
                    [
                        "Step 1: Open DNS settings",
                        "AdGuard Home web UI → Settings → DNS settings → Upstream DNS servers"
                    ],
                    [
                        "Step 2: Replace default upstream",
                        "Remove 1.1.1.1 and 8.8.8.8 (these are plaintext). Add one of the following encrypted upstreams:"
                    ],
                    [
                        "Cloudflare DoH",
                        "https://cloudflare-dns.com/dns-query — fastest, strong privacy policy, but Cloudflare is still a US company"
                    ],
                    [
                        "Quad9 DoH",
                        "https://dns.quad9.net/dns-query — nonprofit, blocks malware domains, good privacy policy, no data sold"
                    ],
                    [
                        "NextDNS DoH (recommended for homelab)",
                        "https://dns.nextdns.io/[your-id] — free tier up to 300k queries/month, per-profile filtering, logs you can review, family-safe modes. Create a free account at nextdns.io."
                    ],
                    [
                        "Mullvad DoH",
                        "https://dns.mullvad.net/dns-query — zero logging, operated by the same team as Mullvad VPN, no account needed"
                    ],
                    [
                        "Step 3: Enable DNS-over-HTTPS bootstrap",
                        "Add a bootstrap DNS so AdGuard can resolve the DoH server's hostname on startup: 9.9.9.9 (plaintext, used only to find the encrypted server, then never used again)"
                    ],
                    [
                        "Step 4: Verify",
                        "After saving, go to AdGuard Home → Dashboard. Under 'Upstream DNS' you should see the DoH URL, not an IP address. Run a test query and confirm it resolves correctly."
                    ]
                ]
            },
            {
                "type": "h2",
                "content": "Why This Matters for This Specific Setup"
            },
            {
                "type": "list",
                "items": [
                    "Your ISP (typically Spectrum or Optimum in NYC) logs DNS queries and may sell this data. Encrypted DNS removes this visibility entirely.",
                    "Cloudflare Tunnels and Pangolin protect your server's inbound traffic. Encrypted DNS protects your outbound queries. Together they close the main visibility gaps in a residential internet connection.",
                    "When using Tailscale: Tailscale sets its own DNS resolver. Configure Tailscale to use your AdGuard Home IP as the DNS server so all Tailscale devices (including phones when away from home) also use encrypted upstream DNS.",
                    "Performance impact: negligible. DoH adds a few milliseconds per fresh DNS lookup. Since AdGuard caches responses, most queries hit the local cache anyway."
                ]
            },
            {
                "type": "note",
                "title": "NOTE:",
                "content": "If you switch to NextDNS (recommended), you get per-device query logs, custom blocklists on top of AdGuard, and the ability to see exactly which domains each device queries. Run both AdGuard Home (local ad blocking, local DNS overrides) and NextDNS (encrypted upstream, additional filtering). AdGuard forwards to NextDNS over DoH.",
                "level": "note"
            }
        ]
    },
    {
        "id": "git-workflow-for-homelab-configs",
        "title": "Git Workflow for Homelab Configs",
        "elements": [
            {
                "type": "p",
                "content": "The doc mentions committing configs to Gitea in several places but never shows what that actually looks like. A poorly structured config repo means you will eventually either commit a secret by accident or have a repo so disorganized you stop updating it. Here is the specific structure that works."
            },
            {
                "type": "h2",
                "content": "Repository Structure: Four Repos, One Purpose Each"
            },
            {
                "type": "table",
                "headers": [
                    "Repo name",
                    "What goes in it",
                    "What never goes in it",
                    "Who needs access"
                ],
                "rows": [
                    [
                        "homelab-stacks",
                        "All Docker Compose files, organized by service. /stacks/jellyfin/docker-compose.yml, /stacks/immich/docker-compose.yml, etc. Also includes each service's nginx-proxy-manager config exported as JSON.",
                        "Any .env files. Any files containing passwords, tokens, or API keys.",
                        "You only — private repo"
                    ],
                    [
                        "homelab-scripts",
                        "Python scripts, bash scripts, n8n workflow exports, cron job definitions, Ansible playbooks (Stage 4+). Anything you wrote that automates something.",
                        "Scripts with hardcoded credentials. Any script that contains a password inline.",
                        "You only — private repo"
                    ],
                    [
                        "homelab-notes",
                        "SilverBullet notes exported as markdown, or a Gitea-backed folder that SilverBullet syncs to. Your wiki, runbooks, and troubleshooting notes.",
                        "Personal financial data, tenant names, anything sensitive.",
                        "You only — private repo"
                    ],
                    [
                        "dotfiles",
                        "Shell configuration (.zshrc, .bashrc), vim/neovim config, SSH config (without private keys), tmux config, git config. The setup that makes any new server feel like home in 5 minutes.",
                        "SSH private keys. Any credential files (.netrc, .pgpass).",
                        "You only — private repo. Can be public if you sanitize it carefully."
                    ]
                ]
            },
            {
                "type": "h2",
                "content": "The .gitignore Pattern for Each Repo"
            },
            {
                "type": "table",
                "headers": [],
                "rows": [
                    [
                        "homelab-stacks .gitignore",
                        "*.env | .env | .env.* | **/secrets/ | **/data/ | **/.secrets | *.key | *.pem | *.crt (do not commit SSL certs from Let's Encrypt) | docker-compose.override.yml (local overrides often contain credentials)"
                    ],
                    [
                        "homelab-scripts .gitignore",
                        "config.py | config.yaml | secrets.yaml | *.token | .env | Any file you know contains credentials — add it immediately when you create the file, before you write anything sensitive into it"
                    ],
                    [
                        "dotfiles .gitignore",
                        "~/.ssh/id_* (private keys) | ~/.ssh/known_hosts (not sensitive but noisy) | .netrc | .pgpass | Any file ending in .secret or .key"
                    ]
                ]
            },
            {
                "type": "h2",
                "content": "How to Handle Secrets: Document Without Leaking"
            },
            {
                "type": "p",
                "content": "The problem: your docker-compose.yml references environment variables like POSTGRES_PASSWORD and VAULTWARDEN_ADMIN_TOKEN, but the actual values live in .env files that are gitignored. How does future-you (or a fresh server setup) know what values those variables need?"
            },
            {
                "type": "table",
                "headers": [],
                "rows": [
                    [
                        "The .env.example pattern",
                        "For every service, commit a .env.example file alongside the .env (which is gitignored). The .env.example contains every variable name with a placeholder value and a comment explaining what it is: POSTGRES_PASSWORD=change-me-strong-password # Min 20 chars, used by Gitea and Paperless. This documents the interface without leaking the secret."
                    ],
                    [
                        "Secret inventory in SilverBullet",
                        "Keep a note titled 'Secret Inventory' in SilverBullet: a table of every secret in the stack, which service uses it, where it is stored (Vaultwarden collection name), and when it was last rotated. Never put the actual value in the note — just the name and location."
                    ],
                    [
                        "Vaultwarden as the source of truth",
                        "Every secret in the homelab should have a corresponding entry in Vaultwarden. When you need to set up a new server, you pull the secret from Vaultwarden. The Gitea repo tells you which secrets are needed; Vaultwarden stores the actual values."
                    ],
                    [
                        "Environment variable injection at runtime",
                        "In your Docker Compose files, reference variables as ${VARIABLE_NAME}. On the server, the .env file in the same directory as the compose file is loaded automatically by Docker Compose. Never put the value inline in the compose file itself."
                    ]
                ]
            },
            {
                "type": "h2",
                "content": "Hermes: Auditing Repos for Accidentally Committed Credentials"
            },
            {
                "type": "table",
                "headers": [],
                "rows": [
                    [
                        "The ask",
                        "'Audit my homelab-stacks repo for any accidentally committed secrets or credentials.'"
                    ],
                    [
                        "What Hermes does",
                        "Clones the repo (via Gitea MCP or git clone), runs gitleaks or trufflehog against the full git history (including deleted files — they still exist in git history), and reports any detected secrets with file name, line number, and commit hash."
                    ],
                    [
                        "The important detail",
                        "'I deleted the file' does not help if it was ever committed. The secret is in git history forever unless you purge it with git filter-repo. Hermes can walk you through the purge process if it finds historical secrets."
                    ],
                    [
                        "Preventive measure",
                        "Add a pre-commit hook to your repos: install the gitleaks pre-commit hook. It scans every commit before it lands and refuses to commit if it detects a secret pattern. Hermes can set this up: 'Add gitleaks pre-commit hook to my homelab-stacks repo.'"
                    ],
                    [
                        "Weekly automated audit",
                        "Schedule as a Hermes cron: every Sunday, run gitleaks on all four homelab repos and report any new findings. Catches credentials added during the week before they have been pushed to Gitea for long."
                    ]
                ]
            },
            {
                "type": "h2",
                "content": "Commit Message Convention"
            },
            {
                "type": "p",
                "content": "Small thing, high value. A consistent commit message format makes Hermes's weekly dev review ('what did I change this week?') much more useful:"
            },
            {
                "type": "table",
                "headers": [],
                "rows": [
                    [
                        "Format",
                        "[service] action: description — e.g., [immich] add: thumbnail regeneration cron | [proxmox] fix: network bridge config after update | [n8n] update: DOB scraper to use Open Data v2 API"
                    ],
                    [
                        "Why it matters",
                        "When Hermes queries git log for the weekly review, it can parse [service] tags and group changes by service area. 'Here is everything you changed in your media stack this week' becomes a useful report rather than a raw list of commit messages."
                    ],
                    [
                        "Enforcing it",
                        "Add a commit-msg git hook that validates the format. Hermes can generate the hook: 'Create a git commit-msg hook that enforces [service] prefix format for my homelab repos.'"
                    ]
                ]
            }
        ]
    },
    {
        "id": "what-not-to-self-host",
        "title": "What Not to Self-Host",
        "elements": [
            {
                "type": "p",
                "content": "Self-hosting everything is a tempting philosophy once you have the infrastructure for it. It is also wrong. There is a category of services where self-hosting costs more in time, reliability, and risk than it saves in money or privacy. Knowing which services to keep in the cloud on purpose is as important as knowing which ones to bring home."
            },
            {
                "type": "h2",
                "content": "The Keep-in-Cloud List"
            },
            {
                "type": "table",
                "headers": [
                    "Service",
                    "Why not to self-host",
                    "What to use instead",
                    "Monthly cost"
                ],
                "rows": [
                    [
                        "Email (sending and receiving)",
                        "Mail server reputation is a months-long project to establish. A residential IP is almost certainly on spam blocklists before you even send your first email. SPF, DKIM, DMARC, PTR records, bounce handling, spam filtering — the operational burden is genuinely professional-grade. One misconfiguration and your family stops receiving email.",
                        "Fastmail ($3/mo per user) or Proton Mail ($4/mo). For transactional email (server alerts, app notifications), use Resend or SendGrid free tier.",
                        "$3–8/month — worth every cent"
                    ],
                    [
                        "SMS / cellular notifications",
                        "Requires a carrier account, phone number provisioning, and carrier-specific APIs. Self-hosted SMS is legally complicated (carrier ToS). Not feasible for a residential homelab.",
                        "Twilio (pay-per-message, fractions of a cent) or just use ntfy/Telegram which are free and better.",
                        "~$0 — just use Telegram"
                    ],
                    [
                        "CDN for public websites",
                        "Self-hosting a CDN requires servers in multiple geographic regions. If you are serving a public-facing website with global users, a residential connection cannot provide the latency or reliability of a real CDN edge network.",
                        "Cloudflare free tier — unlimited bandwidth, 200+ edge locations, DDoS protection, free. For anything going to the public internet, put it behind Cloudflare.",
                        "Free"
                    ],
                    [
                        "Payment processing",
                        "PCI DSS compliance for handling card data requires quarterly security scans, annual audits, and specific infrastructure controls. You cannot self-host a card processor from a home server.",
                        "Stripe — industry standard, excellent API, reasonable fees. Never attempt to process card data on your homelab.",
                        "2.9% + $0.30 per transaction — unavoidable"
                    ],
                    [
                        "Certificate Authority",
                        "Running your own CA for public domains is not trusted by browsers. Let's Encrypt (via Certbot or Nginx Proxy Manager) is the right answer for internal and external certs.",
                        "Let's Encrypt via Nginx Proxy Manager or Certbot — free, automated, globally trusted.",
                        "Free"
                    ],
                    [
                        "Public DDoS-resilient services",
                        "A residential internet connection has no DDoS mitigation. A large enough attack (even a moderate one) will saturate your connection and take down your ISP's equipment management.",
                        "Any service you expose publicly should be behind Pangolin or Cloudflare Tunnels. Your home IP should never be the endpoint that absorbs attacks.",
                        "Free (Pangolin VPS ~$4/mo)"
                    ],
                    [
                        "Anything requiring 99.9%+ uptime",
                        "Your home internet goes down. Your power goes down. Your UPS has finite runtime. NYC infrastructure is reliable but not carrier-grade. For any service where a 4-hour outage is unacceptable to real users (not family), self-hosting is the wrong choice.",
                        "Cloud hosting for critical services: Fly.io, Railway, Render — free tiers available. Keep your homelab as the backend; use cloud for the public-facing layer if uptime matters.",
                        "$0–20/month depending on traffic"
                    ],
                    [
                        "Apple iCloud features (Handoff, AirDrop, etc.)",
                        "These require Apple's private relay infrastructure. You can replace iCloud Photos (Immich) and iCloud Drive (Syncthing + Nextcloud) but not the protocol-level device integration features.",
                        "Keep iCloud at the lowest paid tier ($0.99/month) for device ecosystem features. Replace storage with Immich and Syncthing.",
                        "$0.99/month"
                    ],
                    [
                        "Google Maps / navigation",
                        "Self-hosted maps (OpenStreetMap + Nominatim + routing) exist and are excellent for static viewing. Real-time traffic, turn-by-turn navigation with live updates, and transit routing at NYC's complexity are genuinely difficult to replicate.",
                        "Google Maps or Apple Maps. OpenStreetMap-based apps (OsmAnd, Organic Maps) for privacy-respecting navigation without real-time traffic.",
                        "Free"
                    ]
                ]
            },
            {
                "type": "h2",
                "content": "The Nuanced Cases — Worth Evaluating"
            },
            {
                "type": "table",
                "headers": [
                    "Service",
                    "Self-host if…",
                    "Keep in cloud if…"
                ],
                "rows": [
                    [
                        "GitHub / GitLab",
                        "You have private repos with sensitive code, you want to own the CI infrastructure, or you want to avoid GitHub's TOS on certain projects.",
                        "You want public repo discoverability, GitHub Actions ecosystem, or you collaborate with people who cannot access your Gitea."
                    ],
                    [
                        "Video conferencing (Jitsi Meet)",
                        "You need private family video calls without Zoom data collection. Self-hosted Jitsi works well for small groups (2–8 people).",
                        "You regularly have calls with more than 8 people, or you need reliable mobile performance. Jitsi on residential hardware degrades under load."
                    ],
                    [
                        "Cloud storage (Dropbox/Google Drive)",
                        "You have replaced it with Syncthing + Immich + Nextcloud and everyone in the family uses the self-hosted version reliably.",
                        "Anyone in the family relies on the seamless desktop client integration that Syncthing cannot replicate (real-time selective sync, shared public links with edit access)."
                    ],
                    [
                        "Password manager (Bitwarden/1Password)",
                        "Vaultwarden with off-site backup and a tested restore procedure. You understand the risk: if the server dies and the backup is corrupt, your family loses all passwords simultaneously.",
                        "If any family member is not technical enough to understand the implications of the backup dependency, keep a cloud-hosted password manager."
                    ],
                    [
                        "VPN (commercial)",
                        "You do not need a commercial VPN if you have Tailscale + Pangolin — you have built your own equivalent or better.",
                        "If you need a VPN specifically for content geo-unlocking (Netflix regions, etc.) — residential VPN from a different country. Mullvad or ProtonVPN for this specific use case."
                    ]
                ]
            },
            {
                "type": "note",
                "title": "THE HONEST SUMMARY:",
                "content": "Self-hosting is best for: storage, media, notes, productivity tools, home automation, and any internal tool where you are the user. Self-hosting is wrong for: anything customer-facing requiring real uptime SLAs, email infrastructure, payment processing, and anything where a 4-hour outage affects people who did not choose to depend on your homelab.",
                "level": "note"
            }
        ]
    },
    {
        "id": "reference-links",
        "title": "Reference Links",
        "elements": [
            {
                "type": "h2",
                "content": "Homelab Communities"
            },
            {
                "type": "list",
                "items": [
                    "<a href=\"https://www.reddit.com/r/selfhosted/s/6M2rSQFWoW\" target=\"_blank\">r/selfhosted recommended services megathread</a>",
                    "<a href=\"https://github.com/gelatinescreams/The-One-File\" target=\"_blank\">The One File — curated self-hosted software list</a>",
                    "<a href=\"https://www.reddit.com/r/homelab/wiki/\" target=\"_blank\">r/homelab wiki</a>",
                    "<a href=\"https://forums.servethehome.com/\" target=\"_blank\">ServeTheHome forums (refurbished hardware)</a>",
                    "<a href=\"https://www.reddit.com/r/selfhosted/comments/1s51bg1/\" target=\"_blank\">Free 750-page self-hosting production guide</a>",
                    "<a href=\"https://www.youtube.com/@WolfgangsChannel\" target=\"_blank\">Wolfgang's Channel (Proxmox tutorials)</a>",
                    "<a href=\"https://www.youtube.com/@TechnoTim\" target=\"_blank\">Techno Tim (Docker, homelab tutorials)</a>",
                    "<a href=\"https://www.youtube.com/@JeffGeerling\" target=\"_blank\">Jeff Geerling (servers, Raspberry Pi)</a>"
                ]
            },
            {
                "type": "h2",
                "content": "Core Infrastructure"
            },
            {
                "type": "list",
                "items": [
                    "<a href=\"https://www.proxmox.com/en/proxmox-ve/get-started\" target=\"_blank\">Proxmox VE Getting Started</a>",
                    "<a href=\"https://ubuntu.com/server/docs\" target=\"_blank\">Ubuntu Server 24.04 LTS</a>",
                    "<a href=\"https://docs.docker.com/engine/install/ubuntu/\" target=\"_blank\">Docker Engine on Ubuntu</a>",
                    "<a href=\"https://www.truenas.com/docs/scale/gettingstarted/\" target=\"_blank\">TrueNAS Scale</a>",
                    "<a href=\"https://github.com/fosrl/pangolin\" target=\"_blank\">Pangolin GitHub</a>",
                    "<a href=\"https://docs.fossorial.io/\" target=\"_blank\">Pangolin docs</a>",
                    "<a href=\"https://tailscale.com/\" target=\"_blank\">Tailscale</a>",
                    "<a href=\"https://github.com/AdguardTeam/AdGuardHome\" target=\"_blank\">AdGuard Home</a>"
                ]
            },
            {
                "type": "h2",
                "content": "AI and Agents"
            },
            {
                "type": "list",
                "items": [
                    "<a href=\"https://github.com/NousResearch/hermes-agent\" target=\"_blank\">Hermes Agent GitHub</a>",
                    "<a href=\"https://hermes-agent.nousresearch.com/docs/\" target=\"_blank\">Hermes Agent docs</a>",
                    "<a href=\"https://agentskills.io\" target=\"_blank\">agentskills.io (community skills)</a>",
                    "<a href=\"https://platform.moonshot.cn/\" target=\"_blank\">Kimi/Moonshot free API</a>",
                    "<a href=\"https://openrouter.ai/\" target=\"_blank\">OpenRouter (Claude, GPT-4o, Qwen API)</a>",
                    "<a href=\"https://docs.openwebui.com/\" target=\"_blank\">Open-WebUI</a>",
                    "<a href=\"https://ollama.com/\" target=\"_blank\">Ollama</a>",
                    "<a href=\"https://github.com/multica-ai/multica\" target=\"_blank\">Multica GitHub</a>",
                    "<a href=\"https://github.com/different-ai/silverbullet-ai\" target=\"_blank\">SilverBullet silverbullet-ai plugin</a>"
                ]
            },
            {
                "type": "h2",
                "content": "Gaming"
            },
            {
                "type": "list",
                "items": [
                    "<a href=\"https://lancache.net/\" target=\"_blank\">LanCache.NET</a>",
                    "<a href=\"https://github.com/tpill90/steam-lancache-prefill\" target=\"_blank\">steam-lancache-prefill</a>",
                    "<a href=\"https://github.com/tpill90/epic-lancache-prefill\" target=\"_blank\">epic-lancache-prefill</a>",
                    "<a href=\"https://github.com/LizardByte/Sunshine\" target=\"_blank\">Sunshine (game streaming host)</a>",
                    "<a href=\"https://moonlight-stream.org/\" target=\"_blank\">Moonlight (game streaming client)</a>",
                    "<a href=\"https://gamevau.lt/\" target=\"_blank\">GameVault</a>"
                ]
            },
            {
                "type": "h2",
                "content": "NYC Civic & Legal"
            },
            {
                "type": "list",
                "items": [
                    "<a href=\"https://opendata.cityofnewyork.us/\" target=\"_blank\">NYC Open Data portal</a>",
                    "<a href=\"https://api.mta.info/\" target=\"_blank\">MTA GTFS Realtime API</a>",
                    "<a href=\"https://www.nyc.gov/site/sustainablebuildings/ll97/local-law-97.page\" target=\"_blank\">NYC LL97 guidance</a>",
                    "<a href=\"https://www.nyiso.com/real-time-dashboard\" target=\"_blank\">NYISO real-time grid</a>",
                    "<a href=\"https://a836-acris.nyc.gov/\" target=\"_blank\">NYC ACRIS property records</a>"
                ]
            },
            {
                "type": "h2",
                "content": "Hardware References"
            },
            {
                "type": "list",
                "items": [
                    "<a href=\"https://www.amazon.com/P3-P4400-Electricity-Usage-Monitor/dp/B00009MDBU\" target=\"_blank\">Kill A Watt P4400</a>",
                    "<a href=\"https://www.amazon.com/CyberPower-CP1500PFCLCD-Sinewave-Outlets-Mini-Tower/dp/B00429N19W\" target=\"_blank\">CyberPower CP1500PFCLCD UPS</a>",
                    "<a href=\"https://coral.ai/products/accelerator\" target=\"_blank\">Google Coral USB Accelerator</a>",
                    "<a href=\"https://coral.ai/products/m2-accelerator-ae\" target=\"_blank\">Google Coral M.2</a>",
                    "<a href=\"https://www.rtl-sdr.com/buy-rtl-sdr-dvb-t-dongles/\" target=\"_blank\">RTL-SDR Blog V3</a>",
                    "<a href=\"https://sonoff.tech/product/gateway-aiot/sonoff-zigbee-3-0-usb-dongle-plus-e/\" target=\"_blank\">SONOFF Zigbee 3.0 USB Dongle Plus</a>",
                    "<a href=\"https://mikrotik.com/product/crs305_1g_4s_in\" target=\"_blank\">MikroTik CRS305-1G-4S+IN</a>",
                    "<a href=\"https://support.apple.com/en-us/102027\" target=\"_blank\">Mac Studio power consumption (Apple official)</a>"
                ]
            },
            {
                "type": "h2",
                "content": "Translation & Chinese i18n"
            },
            {
                "type": "list",
                "items": [
                    "<a href=\"https://github.com/LibreTranslate/LibreTranslate\" target=\"_blank\">LibreTranslate</a>",
                    "<a href=\"https://github.com/LibreTranslate/LTEngine\" target=\"_blank\">LTEngine (LLM-powered translation)</a>",
                    "<a href=\"https://www.bazarr.media/\" target=\"_blank\">Bazarr (subtitle management)</a>",
                    "<a href=\"https://qwen.readthedocs.io/en/latest/\" target=\"_blank\">Qwen2.5 model family</a>"
                ]
            },
            {
                "type": "h2",
                "content": "Speed Testing & Monitoring"
            },
            {
                "type": "list",
                "items": [
                    "<a href=\"https://github.com/librespeed/speedtest\" target=\"_blank\">LibreSpeed self-hosted</a>",
                    "<a href=\"https://github.com/louislam/uptime-kuma\" target=\"_blank\">Uptime Kuma</a>",
                    "<a href=\"https://grafana.com/oss/grafana/\" target=\"_blank\">Grafana</a>",
                    "<a href=\"https://www.home-assistant.io/integrations/speedtestdotnet/\" target=\"_blank\">Home Assistant Speedtest integration</a>"
                ]
            },
            {
                "type": "h2",
                "content": "Knowledge Management"
            },
            {
                "type": "list",
                "items": [
                    "<a href=\"https://silverbullet.md/\" target=\"_blank\">SilverBullet</a>",
                    "<a href=\"https://docs.plane.so/\" target=\"_blank\">Plane</a>",
                    "<a href=\"https://docs.linkwarden.app/\" target=\"_blank\">Linkwarden</a>",
                    "<a href=\"https://www.usememos.com/\" target=\"_blank\">Memos</a>",
                    "<a href=\"https://wakapi.dev/\" target=\"_blank\">Wakapi</a>"
                ]
            },
            {
                "type": "p",
                "content": "Homelab Master Plan v3.3 | April 2026 | Added: energy monitoring, DNS privacy, git config workflow, what not to self-host, language learning, extended SOUL.md profiles, Hermes deep dive, container planning"
            }
        ]
    }
];
