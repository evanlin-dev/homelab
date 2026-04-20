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
                        "24. AI-Enhanced Notes: Ask AI to Refine or Template",
                        "SilverBullet AI plugin, note workflows, study prompts"
                    ],
                    [
                        "25. Second Brain: Video, Articles, and AI Knowledge Capture",
                        "The Karpathy-style vault workflow adapted for your note structure and local models"
                    ],
                    [
                        "26. Chinese i18n: Automating Accurate Translations Across All Tools",
                        "Native app settings, automated translation pipeline, LibreTranslate, subtitle workflow"
                    ],
                    [
                        "27. Language Learning with Your Homelab",
                        "Whisper speaking practice, Jellyfin subtitle flip method, custom reading material"
                    ],
                    [
                        "28. Personal Knowledge Base + Learning Tracker",
                        "SilverBullet + Plane + Memos combined system"
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
                    ],
                    [
                        "48. Media Pipeline: The *Arr Stack",
                        "Sonarr, Radarr, Prowlarr, qBittorrent, Bazarr — the full automated pipeline that feeds Jellyfin"
                    ],
                    [
                        "49. TLS & Certificate Management",
                        "Let's Encrypt, DNS-01 challenge, Caddy auto-certs, mkcert for LAN-only services, cert expiry monitoring"
                    ],
                    [
                        "50. Monitoring & Observability Stack",
                        "Prometheus + Grafana + Loki + node_exporter + cAdvisor — what to monitor, alert thresholds, free dashboard imports"
                    ],
                    [
                        "51. Infrastructure as Code: Ansible for Homelab",
                        "Why Ansible, core playbooks, inventory structure, Ansible Vault for secrets — rebuild your stack from scratch in one command"
                    ],
                    [
                        "52. Secrets Management in Docker",
                        "sops + age, .env patterns, Ansible Vault, what to store in Vaultwarden — avoid credential leaks in git"
                    ],
                    [
                        "53. Family Onboarding: Getting Non-Technical Users on Your Services",
                        "Best client apps per service, split-horizon DNS, onboarding sessions, the 2AM support call prevention guide"
                    ],
                    [
                        "54. Proxmox: Hands-On Setup Guide",
                        "VM vs LXC decision table, first 5 actions post-install, PBS backup setup, snapshot workflow"
                    ],
                    [
                        "55. Container Management UI: Portainer vs Dockge",
                        "Comparison table, why Dockge fits this plan's compose-first approach, when to use each"
                    ],
                    [
                        "56. Game Streaming: Sunshine & Moonlight",
                        "Setup guide, hardware requirements, client platforms, bitrate tuning, remote play via Tailscale"
                    ],
                    [
                        "57. Home Assistant: Automations Worth Building",
                        "Integration categories, 12+ automation blueprints, must-have add-ons, avoiding the complexity trap"
                    ],
                    [
                        "58. Cloud ROI: Is Your Homelab Actually Cheaper?",
                        "Hardware amortization, electricity costs, cloud service comparison table, break-even analysis"
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
                "content": "For this build, we are using <strong>Proxmox VE 8.x</strong>. While Ubuntu is simpler for pure Docker, Proxmox gives you the ability to snapshop your work and run isolated containers (LXC) for high-impact apps like Paperless-ngx."
            },
            {
                "type": "table",
                "headers": [
                    "Task",
                    "Details"
                ],
                "rows": [
                    [
                        "Proxmox Installation",
                        "Flash Proxmox VE ISO to USB via balenaEtcher. Boot G6 Mini (F9 for boot menu). Use Graphical Installer. Set static IP (e.g., 192.168.100.2/24)."
                    ],
                    [
                        "Post-Install Cleanup",
                        "Log in to Web UI (https://[IP]:8006). Open Shell. Run the 'Post-Install' script to fix repositories and remove the subscription nag."
                    ],
                    [
                        "Post-Install Script",
                        "<code>bash -c \"$(curl -fsSL https://raw.githubusercontent.com/community-scripts/ProxmoxVE/main/tools/pve/post-pve-install.sh)\"</code>. Answers: Disable Enterprise (y), Add No-Sub (y), Disable Nag (y), Disable HA (y), Disable Corosync (y), Update (y), Reboot (y). Select 'No' (n) for Beta/Test repos."
                    ],
                    [
                        "Network Verification",
                        "Using Gateway (e.g., 192.168.100.1) for DNS is correct. If script downloads fail, temporarily add a public DNS like 1.1.1.1 in System -> DNS."
                    ],
                    [
                        "Router DHCP Reservation",
                        "Log into the router (e.g., 192.168.50.1). Go to LAN -> DHCP Server. Enable 'Manual Assignment' and bind the server's MAC address to the static IP address (e.g., 192.168.50.188). Hit '+' and 'Apply' to finalize. This ensures the router never accidentally assigns your server's IP to another device."
                    ]
                ]
            },
            {
                "type": "h2",
                "content": "The Ubuntu + Proxmox Path: Creating Your Primary Docker VM"
            },
            {
                "type": "p",
                "content": "Instead of running services in individual containers, we are creating one robust <strong>Ubuntu Server VM</strong> to act as a Docker hub. This is the 'Gold Standard' for learning and reliability."
            },
            {
                "type": "table",
                "headers": [
                    "Resource",
                    "Allocation",
                    "Reasoning"
                ],
                "rows": [
                    [
                        "CPU Cores",
                        "2 Cores (Type: host)",
                        "Enough for 30+ containers. Keeping it at 2 ensures the Proxmox host stays responsive. 'Host' type allows the VM to use your i5's full instruction set."
                    ],
                    [
                        "Memory (RAM)",
                        "4096 MiB (4GB)",
                        "Docker is very efficient. 4GB can handle Paperless, Home Assistant, and 10 other apps with ease. Proxmox makes it easy to increase this in 5 seconds later."
                    ],
                    [
                        "Disk Space",
                        "100 GB (SSD Emulation)",
                        "Gives you 90GB+ for documents and app data. SSD Emulation tells the VM it is on high-speed storage, improving performance."
                    ],
                    [
                        "OS Type",
                        "Ubuntu 24.04 Server (Headless)",
                        "No GUI = less RAM usage. 99% of Docker tutorials are written for Ubuntu, making troubleshooting much easier."
                    ],
                    [
                        "The 'Safety Net'",
                        "Snapshots",
                        "The #1 reason for a VM. Take a snapshot before updates. If you break it, hit 'Rollback' to fix it instantly."
                    ]
                ]
            },
            {
                "type": "h2",
                "content": "Step-by-Step: Ubuntu VM Installation"
            },
            {
                "type": "table",
                "headers": [
                    "Installation Step",
                    "The Right Choice",
                    "Technical Reasoning"
                ],
                "rows": [
                    [
                        "Type of Install",
                        "Ubuntu Server (standard)",
                        "Provides all standard system tools. Avoid 'Minimized' for your first build to make manual troubleshooting easier."
                    ],
                    [
                        "Storage Configuration",
                        "Uncheck 'Set up this disk as an LVM group'",
                        "Standard partitions are easier to manage and resize for beginners. LVM adds a layer of abstraction that often leads to 'missing disk space' confusion later."
                    ],
                    [
                        "SSH Setup",
                        "Check 'Install OpenSSH Server'",
                        "Mandatory for remote access. Allows you to manage the server from your laptop terminal instead of the Proxmox web console."
                    ],
                    [
                        "Featured Server Snaps",
                        "Do not select any",
                        "Keeping the OS 'clean' is better for stability. We will install Docker manually to ensure we have the official, most up-to-date versions."
                    ],
                    [
                        "DHCP Reservation",
                        "Lock the VM's IP in the router",
                        "Just like the Proxmox host, your Docker VM needs a permanent address. Use the Asus router's 'Manual Assignment' for 192.168.50.65."
                    ]
                ]
            },
            {
                "type": "h2",
                "content": "Step-by-Step: Post-Install Hardening & Docker"
            },
            {
                "type": "table",
                "headers": [
                    "Task",
                    "Command",
                    "Why it matters"
                ],
                "rows": [
                    [
                        "System Updates",
                        "<code>sudo apt update && sudo apt upgrade -y</code>",
                        "Ensures your VM has the latest security patches from Ubuntu."
                    ],
                    [
                        "Guest Agent",
                        "<code>sudo apt install qemu-guest-agent -y</code>",
                        "Essential 'bridge' between Proxmox and Ubuntu. Allows Proxmox to see the VM's IP and handle safe shutdowns."
                    ],
                    [
                        "Docker Engine",
                        "<code>curl -fsSL https://get.docker.com -o get-docker.sh && sudo sh get-docker.sh</code>",
                        "The actual engine that will run Paperless-ngx and all other services."
                    ],
                    [
                        "Docker Permissions",
                        "<code>sudo usermod -aG docker $USER</code>",
                        "Allows you to manage containers without needing 'sudo' every time. Much safer and standard for dev work."
                    ],
                    [
                        "Portainer GUI",
                        "<code>docker run -d -p 9443:9443 --name portainer --restart=always -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer-ce:2.21.5</code>",
                        "Installs the web-based 'Control Panel' for Docker. Allows you to manage Paperless-ngx and other apps via a browser instead of the terminal."
                    ]
                ]
            },
            {
                "type": "h2",
                "content": "Accessing Your Homelab Dashboard"
            },
            {
                "type": "table",
                "headers": [
                    "Tool",
                    "URL",
                    "Purpose"
                ],
                "rows": [
                    [
                        "Proxmox (The Boss)",
                        "<code>https://192.168.50.188:8006</code>",
                        "Hardware and VM management. Use for snapshots, reboots, and backups."
                    ],
                    [
                        "Portainer (The Worker)",
                        "<code>https://192.168.50.65:9443</code>",
                        "Docker App management. Use for installing Paperless-ngx, checking logs, and starting/stopping services."
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
                    ],
                    [
                        "Document Scanner",
                        "Brother ADS-1700W or Fujitsu ScanSnap iX1600",
                        "~$250–450",
                        "Essential for a truly paperless home. These models support direct scan-to-network-folder for automation. Check the <a href=\"https://github.com/paperless-ngx/paperless-ngx/wiki/Scanner-&-Software-Recommendations\" target=\"_blank\">official wiki</a> for more models."
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
                    ],
                    [
                        "UPS (1500VA Pure Sine Wave)",
                        "eBay, Facebook Marketplace, Amazon Warehouse",
                        "$150–200 for reputable brands (APC/CyberPower)",
                        "Ensure batteries are recently replaced or factor in ~$50 for new ones. Avoid 'untested' listings."
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
                        "Install Simplified Chinese OCR packs immediately. Use Brother MFC-L2710DW with 'Scan to Network' (SMB) to the consume folder. For double-sided docs: use Paperless-ngx's 'double-sided' folder or a script to merge two separate scans of front and back. Check the <a href=\"https://github.com/paperless-ngx/paperless-ngx/wiki/Scanner-&-Software-Recommendations\" target=\"_blank\">official recommendations</a> for more scanner hardware."
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
                        "<a href=\"https://gethomepage.dev/\" target=\"_blank\">Homepage</a> / <a href=\"https://homarr.dev/\" target=\"_blank\">Homarr</a>",
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
                        "<a href=\"https://github.com/docmost/docmost\" target=\"_blank\">Docmost</a>",
                        "Knowledge Management",
                        "3/10",
                        "Modern Notion-style documentation platform. Real-time collaboration, collapsible sidebars, and diagram support.",
                        "Requires PostgreSQL and Redis companions."
                    ]
                ]
            }
        ]
    },
    {
        "id": "personal-bot-hub-discord-telegram",
        "title": "Personal Bot Hub (Discord/Telegram)",
        "elements": [
            {
                "type": "p",
                "content": "A Telegram or Discord bot is your server's 'voice.' It sends you alerts when a drive is failing, lets you restart a container from the subway, and acts as a secure gateway for LLM interaction. Using bots keeps your lab accessible without needing a heavy dashboard app on mobile."
            },
            {
                "type": "h2",
                "content": "Scenario Breakdown"
            },
            {
                "type": "table",
                "headers": [
                    "Task",
                    "Method",
                    "Why"
                ],
                "rows": [
                    [
                        "Emergency Alerts",
                        "Telegram (ntfy)",
                        "ntfy is built for alerts. Instant delivery, high override, works on lock screens. If a server is on fire, you need ntfy."
                    ],
                    [
                        "Daily Maintenance",
                        "Discord Bot",
                        "Discord is better for 'Conversational Admin.' Threaded history, easy file sharing, and great for multi-user family groups."
                    ],
                    [
                        "File Retrieval",
                        "Telegram Bot",
                        "Snapping a photo of a receipt or downloading a PDF. Telegram handles direct file/photo uploads much faster than Discord."
                    ]
                ]
            },
            {
                "type": "h2",
                "content": "Architecture Overview"
            },
            {
                "type": "p",
                "content": "Most bots in this plan run as a single Python container using <code>python-telegram-bot</code> or <code>discord.py</code>. The bot container mounts the Docker socket (<code>/var/run/docker.sock</code>) to issue commands to other containers."
            },
            {
                "type": "h2",
                "content": "Core Security"
            },
            {
                "type": "p",
                "content": "A bot with <code>/docker restart</code> access is a root shell. You must whitelist your specific User ID in the bot code. If someone else messages your bot, it should simply ignore them."
            },
            {
                "type": "h3",
                "content": "Bot Security Checklist"
            },
            {
                "type": "p",
                "content": "A Telegram bot with homelab command access is a privileged target — it can restart containers, control smart home devices, or expose camera feeds. Treat it like any other credential."
            },
            {
                "type": "table",
                "headers": [
                    "Risk",
                    "Mitigation"
                ],
                "rows": [
                    [
                        "Leaked Telegram bot token",
                        "Set ALLOWED_USERS to your Telegram numeric user ID. A stranger with the token gets nothing without being whitelisted."
                    ],
                    [
                        "Command executed by wrong user in Discord",
                        "Use Discord permission overwrites per-channel. Never rely on command names alone — check role in code."
                    ],
                    [
                        "Bot token stored in .env committed to git",
                        "Store all tokens in Vaultwarden. Pull via environment injection at container start, never hardcode."
                    ],
                    [
                        "Shared server exposure",
                        "Never register destructive commands (restart, shutdown, /cam) in any shared server. Private server or Telegram only."
                    ],
                    [
                        "Alert fatigue causing you to ignore real alerts",
                        "Configure quiet hours (midnight–7am) for non-critical alerts. Bundle repeat alerts — 5 restarts = 1 message, not 5."
                    ],
                    [
                        "Family member account compromised",
                        "Scope family commands to read-only. /lights and /laundry yes, /docker and /cam no."
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
                "type": "p",
                "content": "Once you are comfortable with 'one stack, one app,' it's time to move to interconnected services. This stage requires understanding Docker networks and internal DNS."
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
                        "<a href=\"https://www.home-assistant.io/\" target=\"_blank\">Home Assistant</a>",
                        "Automation",
                        "5/10",
                        "The 'Super App' for your home. Controls Zigbee sensors, energy plugs, and building alerts. Runs in Docker or as a VM.",
                        "Needs a Zigbee USB dongle for local control. Avoid the cloud-dependent Wi-Fi devices."
                    ],
                    [
                        "<a href=\"https://n8n.io/\" target=\"_blank\">n8n</a>",
                        "Automation",
                        "6/10",
                        "Low-code automation. Connects your apps (e.g. 'When Paperless sees a utility bill, log it in Wallos and send an ntfy push').",
                        "Self-hosted version is fully featured. Use the official Docker image."
                    ],
                    [
                        "<a href=\"https://github.com/authelia/authelia\" target=\"_blank\">Authelia</a> / <a href=\"https://www.authentik.io/\" target=\"_blank\">Authentik</a>",
                        "Security",
                        "7/10",
                        "Single Sign-On (SSO) for your homelab. One password for all apps. Adds 2FA (Duo/Google Auth) to everything.",
                        "Complex to set up. Requires a reverse proxy (Nginx Proxy Manager) to work."
                    ],
                    [
                        "<a href=\"https://changedetection.io/\" target=\"_blank\">Changedetection.io</a>",
                        "Monitoring",
                        "3/10",
                        "Monitors websites for changes. Use it to track eBay hardware prices, NYC local law updates, or Hermes agent releases.",
                        "Requires Playwright companion container for JavaScript-heavy sites."
                    ],
                    [
                        "<a href=\"https://gitea.io/\" target=\"_blank\">Gitea</a> / <a href=\"https://forgejo.org/\" target=\"_blank\">Forgejo</a>",
                        "Dev",
                        "4/10",
                        "Self-hosted GitHub. Keep your private code, homelab config files, and bot scripts on your own hardware.",
                        "Very lightweight. Supports SSH and HTTPS git access."
                    ],
                    [
                        "<a href=\"https://plane.so/\" target=\"_blank\">Plane</a>",
                        "Dev / Learning",
                        "5/10",
                        "Self-hosted Jira/Linear replacement. Project management for your homelab roadmap. Track your 'Stages' as issues.",
                        "Uses several containers (Postgres, Redis, Minio). 32GB RAM handles it easily."
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
                "type": "p",
                "content": "Now that you have 10TB+ of space, we move from 'Light Tools' to 'Data Giants.' This is the point where the homelab becomes the family's digital core."
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
                        "<a href=\"https://immich.app/\" target=\"_blank\">Immich</a>",
                        "Photos",
                        "6/10",
                        "High-performance photo backup. Replaces Google Photos/iCloud. AI face grouping and object search. Chinese UI support.",
                        "Heavy AI processing — works best if you have a GPU or many CPU cores."
                    ],
                    [
                        "<a href=\"https://nextcloud.com/\" target=\"_blank\">Nextcloud</a>",
                        "Files",
                        "7/10",
                        "The 'Everything' cloud. Document editing, file sync, shared calendars for the building. Replaces Google Drive/Dropbox.",
                        "Performance can be slow on large folders. Database tuning is required."
                    ],
                    [
                        "<a href=\"https://github.com/rclone/rclone\" target=\"_blank\">Rclone</a>",
                        "Backups",
                        "4/10",
                        "The 'Swiss Army Knife' of data movement. Encrypts your NAS data and syncs it to Backblaze B2 or another floor.",
                        "CLI-heavy but incredibly reliable. Set it up once and let it run via cron."
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
                "type": "p",
                "content": "This is the 'Power User' stage. You have a dedicated GPU and 128GB+ RAM. The server is now doing 'Heavy Lifting' like 24/7 security AI and local LLMs."
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
                        "<a href=\"https://ollama.com/\" target=\"_blank\">Ollama</a> / <a href=\"https://github.com/open-webui/open-webui\" target=\"_blank\">Open-WebUI</a>",
                        "AI",
                        "4/10",
                        "Private ChatGPT. Run Llama 3 or Qwen2 locally. No data leaves your house. Parents can ask questions in Mandarin.",
                        "Requires an NVIDIA GPU (8GB+ VRAM) for usable speed. CPU-only is slow."
                    ],
                    [
                        "<a href=\"https://frigate.video/\" target=\"_blank\">Frigate NVR</a>",
                        "Security",
                        "8/10",
                        "AI-powered security cameras. Detects people, cars, and packages in real-time without cloud subscription.",
                        "Requires a Google Coral TPU or a GPU for object detection."
                    ],
                    [
                        "<a href=\"https://www.proxmox.com/en/proxmox-backup-server/overview\" target=\"_blank\">Proxmox Backup Server</a>",
                        "Maintenance",
                        "5/10",
                        "Block-level, deduplicated backups of your whole server. If you break an app, restore it to exactly 3 hours ago.",
                        "Should run on the Mini PC while the main stack runs on the Tower."
                    ]
                ]
            }
        ]
    },
    {
        "id": "stage-5-far-future-family-spreads-across-multiple-floors",
        "title": "Stage 5 — Far Future: Family Spreads Across Multiple Floors",
        "elements": [
            {
                "type": "p",
                "content": "Your lab is no longer a hobby; it is utility infrastructure for multiple households. This stage is about high availability and network complexity."
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
                        "Site-to-Site VPN",
                        "Network",
                        "9/10",
                        "WireGuard tunnels connecting different floor routers. Parents on Floor 1 access Jellyfin on Floor 3 as if it were local.",
                        "Requires low-latency routing and good upload speed on both ends."
                    ],
                    [
                        "Proxmox Clustering",
                        "Maintenance",
                        "9/10",
                        "Merging multiple servers into one management dashboard. Move apps between floors without downtime.",
                        "Requires dedicated 10GbE heartbeat links for stability."
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
                "type": "p",
                "content": "At Stage 5, your homelab is a multi-node distributed system. This requires moving beyond a single flat network into isolated VLANs for security and performance."
            },
            {
                "type": "h2",
                "content": "VLAN Segmentation Strategy"
            },
            {
                "type": "table",
                "headers": [
                    "VLAN ID",
                    "Name",
                    "Members",
                    "Security Level",
                    "Access Rules"
                ],
                "rows": [
                    [
                        "10",
                        "MANAGEMENT",
                        "Proxmox hosts, switches, UPS management cards, PDU",
                        "CRITICAL",
                        "Access from Trusted Admin VLAN only. No internet access."
                    ],
                    [
                        "20",
                        "TRUSTED",
                        "Main PCs, laptops, server SSH, private bot hub",
                        "HIGH",
                        "Full access to all VLANs. Internet access allowed."
                    ],
                    [
                        "30",
                        "FAMILY",
                        "iPhones, Androids, family iPads, Wiki.js, Memos",
                        "MEDIUM",
                        "Access to Media and Printers. No access to Management or Dev."
                    ],
                    [
                        "40",
                        "IOT (UNTRUSTED)",
                        "Smart bulbs, plugs, cameras, smart fridge, weather station",
                        "LOW",
                        "Isolate from all local VLANs. No internet access (local-only control)."
                    ],
                    [
                        "50",
                        "GUEST",
                        "Visitors, delivery phones, non-family devices",
                        "NONE",
                        "Internet access only. Isolate from all local resources."
                    ]
                ]
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
                    "Why People Try It",
                    "Why You Should Skip",
                    "Better Alternative"
                ],
                "rows": [
                    [
                        "Self-Hosted Email",
                        "Privacy and control over 'Big Tech' inbox.",
                        "Impossible to maintain deliverability. You will spend 40 hours/year fixing blacklists. One mistake = your bank/work emails bounce.",
                        "iCloud+ Custom Domain or ProtonMail. Keep the server, outsource the delivery."
                    ],
                    [
                        "Kubernetes (K8s)",
                        "Industry standard for container scaling.",
                        "Massive complexity overhead. A single-node homelab gains zero benefit and loses 20% of its CPU just to run the K8s control plane.",
                        "Docker Compose. It is 10x easier and 100% sufficient for home use."
                    ],
                    [
                        "Owncast",
                        "Self-hosted Twitch alternative.",
                        "Extreme bandwidth demand. If 5 people watch your 1080p stream, your NYC home upload speed will likely collapse.",
                        "Private YouTube stream or unlisted Twitch. Let their servers handle the bandwidth."
                    ],
                    [
                        "Bitwarden (Official)",
                        "Full enterprise-grade password manager.",
                        "Written in .NET Core. Requires 4GB+ RAM and 10 containers to run properly. Heavy for home hardware.",
                        "Vaultwarden. Re-written in Rust. Identical features, uses 50MB RAM, single container."
                    ],
                    [
                        "TrueNAS SCALE Apps",
                        "Convenient one-click app store built into the NAS.",
                        "Uses a complex Kubernetes-based system under the hood. Hard to customize and fragile during upgrades.",
                        "Run Docker on the Mini PC. Keep the NAS for storage only. Decouple storage from compute."
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
                "content": "Beginners often worry about 'overloading' their server with too many containers. Here is the reality of container density on homelab hardware."
            },
            {
                "type": "table",
                "headers": [
                    "Count",
                    "Hardware Required",
                    "Performance Reality"
                ],
                "rows": [
                    [
                        "1–10",
                        "Raspberry Pi 4 / Mini PC",
                        "Idle CPU near 0%. You won't even notice they are running."
                    ],
                    [
                        "10–25",
                        "Mini PC (HP EliteDesk G6)",
                        "The sweet spot. 16GB RAM is 50% full. System is responsive and fast."
                    ],
                    [
                        "25–50",
                        "Mini PC (32GB RAM) or Tower",
                        "RAM becomes the bottleneck. CPU still handles it easily unless running heavy AI/Transcoding."
                    ],
                    [
                        "50–100",
                        "Tower Workstation (64GB+)",
                        "Logging and monitoring (Grafana/Loki) are now mandatory to find memory leaks and hung processes."
                    ],
                    [
                        "100+",
                        "Cluster (3+ Nodes)",
                        "The 'Home Data Center' stage. Networking and disk I/O are your primary constraints."
                    ]
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
                "content": "Local AI is the fastest-growing part of the homelab world. But unlike Plex or Home Assistant, AI performance is 100% tied to your GPU's VRAM. If it doesn't fit in VRAM, it doesn't run (or runs too slow to use)."
            },
            {
                "type": "table",
                "headers": [
                    "Target Model",
                    "Minimum VRAM",
                    "Recommended GPU",
                    "Est. Used Cost"
                ],
                "rows": [
                    [
                        "Llama 3 (8B) / Qwen2 (7B)",
                        "8GB",
                        "RTX 3060 (12GB) or RTX 4060 Ti (16GB)",
                        "$250–400"
                    ],
                    [
                        "Mixtral 8x7B / Llama 3 (70B) Quantized",
                        "24GB",
                        "RTX 3090 (24GB)",
                        "$650–850"
                    ],
                    [
                        "Llama 3 (70B) Full / Multi-Model",
                        "48GB+",
                        "2x RTX 3090 (NVLink preferred)",
                        "$1,400–1,800"
                    ]
                ]
            }
        ]
    },
    {
        "id": "llm-hardware-detailed-reality-check",
        "title": "LLM Hardware: Detailed Reality Check",
        "elements": [
            {
                "type": "table",
                "headers": ["Inference Method", "Speed (Tokens/Sec)", "Hardware Needed", "Best For"],
                "rows": [
                    ["CPU (G6 Mini i5)", "1–3 t/s", "Nothing extra", "Testing small models (8B), simple summarization, slow conversation"],
                    ["NVIDIA GPU (Mid-tier)", "20–50 t/s", "RTX 3060/4060 ($300)", "Daily use, real-time chat, small agents"],
                    ["NVIDIA GPU (Flagship)", "80–120 t/s", "RTX 3090/4090 ($800–1600)", "Large models (70B), high-speed research, heavy automation"],
                    ["Apple Silicon (Unified)", "5–15 t/s", "Mac Mini/Studio (M2/M3)", "Mid-size models (30B), best energy efficiency, high-res vision"],
                    ["NPU (NPU-enabled CPUs)", "10–20 t/s", "Core Ultra / Ryzen 8000", "The future — specialized silicon for on-device AI"]
                ]
            }
        ]
    },
    {
        "id": "llm-comparison-guide",
        "title": "LLM Selection & Ranking Guide (2026)",
        "elements": [
            {
                "type": "p",
                "content": "The AI landscape moves fast. This guide ranks the top models currently available based on their performance in homelab tasks like coding, documentation refinement, and local inference."
            },
            {
                "type": "table",
                "headers": [
                    "Model",
                    "Tier",
                    "Best For...",
                    "Cost Model",
                    "Privacy Level"
                ],
                "rows": [
                    [
                        "Claude 3.5 Sonnet",
                        "<strong>S-Tier</strong>",
                        "Coding, nuanced reasoning, following complex instructions.",
                        "Free tier / $20/mo",
                        "Cloud API"
                    ],
                    [
                        "GPT-4o (OpenAI)",
                        "<strong>S-Tier</strong>",
                        "Vision (Receipts/Photos), speed, general-purpose chat.",
                        "Free tier / $20/mo",
                        "Cloud API"
                    ],
                    [
                        "Llama 3.1 (405B)",
                        "<strong>S-Tier</strong>",
                        "The 'King' of Open Source. Best reasoning without an API.",
                        "Free (Local)",
                        "100% Private"
                    ],
                    [
                        "DeepSeek Coder V2",
                        "<strong>A-Tier</strong>",
                        "Pure coding performance. Competitive with Claude 3.5.",
                        "Free tier (API)",
                        "Cloud API"
                    ],
                    [
                        "Gemini 2.5 Pro",
                        "<strong>A-Tier</strong>",
                        "Massive context (2M tokens). Analyzing huge logs/codebases.",
                        "Free tier / $20/mo",
                        "Cloud API"
                    ],
                    [
                        "Qwen 2.5 (72B)",
                        "<strong>A-Tier</strong>",
                        "Excellent multilingual support and concise technical writing.",
                        "Free (Local)",
                        "100% Private"
                    ],
                    [
                        "Mistral Large 2",
                        "<strong>A-Tier</strong>",
                        "Efficient, multilingual, and strong logic capabilities.",
                        "API / Local",
                        "Private / Hybrid"
                    ],
                    [
                        "Llama 3.1 (8B/70B)",
                        "<strong>B-Tier</strong>",
                        "Daily driver for local homelab bots (Ollama). Fast.",
                        "Free (Local)",
                        "100% Private"
                    ],
                    [
                        "Phi-3.5 (Mini)",
                        "<strong>B-Tier</strong>",
                        "Ultra-lightweight. Perfect for simple summarization tasks.",
                        "Free (Local)",
                        "100% Private"
                    ]
                ]
            },
            {
                "type": "h2",
                "content": "Decision Matrix: Which one to use?"
            },
            {
                "type": "list",
                "items": [
                    "<strong>If Coding:</strong> Use Claude 3.5 Sonnet or DeepSeek Coder V2.",
                    "<strong>If Vision (Photos):</strong> Use GPT-4o.",
                    "<strong>If Long Logs (2MB+):</strong> Use Gemini 2.5 Pro.",
                    "<strong>If Privacy is #1:</strong> Use Llama 3.1 or Qwen 2.5 via local Ollama."
                ]
            }
        ]
    },
    {
        "id": "ai-enhanced-notes-ask-ai-to-refine-or-template",
        "title": "AI-Enhanced Notes: Ask AI to Refine or Template",
        "elements": [
            {
                "type": "p",
                "content": "Your notes are only as good as their organization. Hermes can act as your personal librarian."
            },
            {
                "type": "table",
                "headers": ["Prompt Type", "Example", "Result"],
                "rows": [
                    ["Refinement", "'Here is a messy log of my Docker setup. Clean it up into a structured guide.'", "Polished Markdown with headings and code blocks."],
                    ["Templating", "'I am starting a new project called Linkwarden. Generate a documentation template for it.'", "A pre-filled structure with sections for 'Setup', 'Config', and 'Backup'."],
                    ["Retrospective", "'Ask me 5 questions to help me write a retrospective on my Stage 1 build.'", "The agent prompts you for reflections, then summarizes them into a post-mortem."]
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
                "content": "We consume 10x more information than we remember. This system ensures that every valuable YouTube video or technical article you find becomes a permanent, searchable part of your brain."
            },
            {
                "type": "h2",
                "content": "The 'Karpathy' Workflow"
            },
            {
                "type": "p",
                "content": "Andrej Karpathy (OpenAI/Tesla) famously uses a high-context, manual note-taking style. We are adapting this for a homelab with AI assistance."
            },
            {
                "type": "table",
                "headers": ["Input Source", "Capture Tool", "AI Enhancement"],
                "rows": [
                    ["YouTube Technical Video", "Linkwarden (Bookmark) → yt-dlp (Download)", "Hermes reads the transcript → summarizes key technical commands → posts to Wiki.js."],
                    ["Technical Article / Blog", "Linkwarden (PDF Snapshot)", "Hermes extracts the 'Signal' — removes ads, filler, and intros. Saves only the technical meat."],
                    ["Twitter/X Thread", "Memos (Copy link)", "Hermes unrolls the thread → identifies the core claim → links to related research in your Vault."],
                    ["PDF Whitepaper", "Nextcloud (Upload)", "Hermes performs RAG (Retrieval) on the PDF. You can 'chat' with the paper to ask specific questions about the data."]
                ]
            },
            {
                "type": "h2",
                "content": "The Hierarchy of Storage"
            },
            {
                "type": "list",
                "items": [
                    "<strong>Memos:</strong> The 'Incoming' tray. Everything lands here first. Fast, messy, unorganized.",
                    "<strong>Linkwarden:</strong> The 'Reference' library. Original source material (PDFs, screenshots) lives here forever.",
                    "<strong>Wiki.js:</strong> The 'Knowledge' vault. This is where you write your own synthesis. 'How I understand this topic' instead of 'What the author said'."
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
                "content": "Since your homelab serves a multi-generational family, language support is not just a feature — it is the requirement for adoption. This section covers automating high-quality Simplified Chinese (Mandarin) translation across the stack."
            },
            {
                "type": "h2",
                "content": "The Core Philosophy"
            },
            {
                "type": "p",
                "content": "Never rely on browser 'Auto-Translate' (Chrome Translate). It is inaccurate for technical or medical terms and breaks UI layouts. Aim for <strong>Native i18n</strong> (the app itself supports Chinese) or <strong>Pre-translated content</strong>."
            },
            {
                "type": "table",
                "headers": ["Service", "i18n Strategy", "Mandarin Level"],
                "rows": [
                    ["Wiki.js", "Native Locale settings (Download Chinese pack)", "EXCELLENT. Full UI and content toggle."],
                    ["Jellyfin", "Native (External metadata from TMDB/TheTVDB)", "GREAT. Posters, descriptions, and titles in Chinese."],
                    ["Vaultwarden", "Native UI setting (User-specific)", "GOOD. Dashboard is fully translated."],
                    ["Immich", "Community localization", "DECENT. Active development on Chinese support."],
                    ["Home Assistant", "Native + custom dashboards", "UNLIMITED. You can write your own dashboard buttons in Chinese."]
                ]
            },
            {
                "type": "h2",
                "content": "The Translation Pipeline (Stage 3+)"
            },
            {
                "type": "p",
                "content": "For content that isn't native (like your own notes), we use an automated pipeline:"
            },
            {
                "type": "list",
                "items": [
                    "<strong>Input:</strong> You write a homelab guide in English in Wiki.js.",
                    "<strong>Trigger:</strong> n8n detects a new page or a manual 'Translate' button click.",
                    "<strong>Engine:</strong> OpenRouter (Claude 3.5) or local Qwen2 (72B). <strong>Why Qwen?</strong> It is currently the world-class open-weights model for Mandarin Chinese.",
                    "<strong>Output:</strong> A new page is created in the /zh/ folder of Wiki.js automatically."
                ]
            },
            {
                "type": "note",
                "title": "NOTE ON QUALITY:",
                "content": "For parent-facing documents (immigration, medical, legal), always use an API model like Claude or GPT-4o. Local models are great for 'Where is the milk,' but high-stakes translation needs the most 'intelligent' models available.",
                "level": "note"
            }
        ]
    },
    {
        "id": "language-learning-with-your-homelab",
        "title": "Language Learning with Your Homelab",
        "elements": [
            {
                "type": "p",
                "content": "Your server is the ultimate language tutor. Unlike a human, it never gets tired of repeating the same phrase 100 times, and unlike an app (Duolingo), it uses your actual life data as the curriculum."
            },
            {
                "type": "h2",
                "content": "The 'Active Immersion' System"
            },
            {
                "type": "table",
                "headers": ["Method", "How It Works", "Tools Needed"],
                "rows": [
                    ["Hermes Tutor", "Tell Hermes: 'I am practicing Mandarin. Only reply to me in Chinese. If I make a grammar mistake, correct me in English at the end of your message.'", "Hermes + OpenRouter (Claude)"],
                    ["Jellyfin Subtitle Flip", "Watch English movies with Chinese subtitles, or Chinese movies with dual subs. Use Bazarr to download exact sub-rip (.srt) files.", "Jellyfin + Bazarr"],
                    ["Whisper Practice", "Record yourself speaking Mandarin on your phone → send to server → Whisper transcribes it → Hermes reviews your pronunciation.", "Whisper (Docker) + Hermes"],
                    ["Daily News Digest", "n8n scrapes top news from BBC Chinese or CCTV → Hermes summarizes in simple Mandarin → sent to your phone as a daily reading.", "n8n + Hermes"]
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
                "content": "Documentation is the difference between a 'pile of hardware' and a 'homelab.' This system ensures you are always making progress and never solving the same problem twice."
            },
            {
                "type": "h2",
                "content": "The Documentation 'Trinity'"
            },
            {
                "type": "table",
                "headers": ["Tool", "Purpose", "Best For..."],
                "rows": [
                    ["Memos", "Instant Capture", "Command-line snippets, quick thoughts, 'Aha!' moments. Zero friction."],
                    ["Wiki.js", "Master Hub", "Finalized guides, network maps, family instructions. Organized and polished."],
                    ["Docmost", "Notion-style Wiki", "OFFICIALLY LIVE. Access at http://192.168.50.65:3000. Modern, folder-based documentation hub with native Chinese/English toggles. Replaces BookStack for better family usability."],
                    ["AFFiNE", "Thinking Space", "Personal second brain. Infinite canvas for mapping complex Hermes logic. Fits Nothing OS aesthetic."]
                ]
            },
            {
                "type": "h2",
                "content": "What to Document (The 'Must-Haves')"
            },
            {
                "type": "list",
                "items": [
                    "<strong>IP & Port Table:</strong> Every service, its internal IP, its Docker port, and its exposed port.",
                    "<strong>The 'Why' Log:</strong> Why did you choose Proxmox? Why did you pick that specific smart plug? Future you will forget.",
                    "<strong>Hard-Fix Log:</strong> When a service crashes and you spend 2 hours fixing it, write down the one command that finally worked.",
                    "<strong>Family Onboarding:</strong> A checklist of which apps your parents have installed and their login status."
                ]
            },
            {
                "type": "note",
                "title": "RULE:",
                "content": "If you solve a problem, you haven't finished until you've documented the solution. No documentation = no progress.",
                "level": "note"
            }
        ]
    },
    {
        "id": "wi-fi-heatmap-and-speed-testing",
        "title": "Wi-Fi Heatmap and Speed Testing",
        "elements": [
            {
                "type": "p",
                "content": "In a multi-floor building, Wi-Fi is a battle against physics. This section uses the homelab to empirically prove where your network is failing."
            },
            {
                "type": "h2",
                "content": "Toolchain"
            },
            {
                "type": "table",
                "headers": ["Tool", "Purpose", "Notes"],
                "rows": [
                    ["UniFi Design Center", "Predictive Heatmapping", "Upload your floor plans. Place virtual APs. See where signal will drop before you drill holes."],
                    ["Wi-Fi SweetSpots (iOS/Android)", "Real-time Throughput", "Walk around your floor. It graphs your bandwidth in real-time. Use this to find 'dead zones' in corners."],
                    ["LibreSpeed (Self-hosted)", "Internal Speed Test", "Run a local speed test server in Docker. Tests your internal LAN speed (device to server) without being limited by your ISP's speed."],
                    ["OpenSpeedTest", "Internal Speed Test", "Excellent high-bandwidth alternative to LibreSpeed. No configuration needed."]
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
                "content": "Building-wide connectivity is about more than just 'bars' on your phone. You need to measure throughput floor-by-floor."
            },
            {
                "type": "h2",
                "content": "The Empirical Test Suite"
            },
            {
                "type": "list",
                "items": [
                    "<strong>Floor 1 (Router Base):</strong> Baseline speed (e.g. 940Mbps wired / 600Mbps Wi-Fi).",
                    "<strong>Floor 2 (Directly Above):</strong> Expected 30-50% drop if using Wi-Fi mesh. Target: 200Mbps+.",
                    "<strong>Floor 3 (Furthest Point):</strong> The 'stress test'. If speeds drop below 50Mbps, a wired backhaul (MoCA or Ethernet) is mandatory."
                ]
            },
            {
                "type": "note",
                "title": "NYC REALITY:",
                "content": "NYC apartment walls are often thick plaster or brick. Wi-Fi signals die quickly. MoCA 2.5 adapters (Ethernet over Coax) are the best friend of an NYC homelabber — use the existing cable TV jacks to get gigabit speeds between floors.",
                "level": "note"
            }
        ]
    },
    {
        "id": "networking-fundamentals-what-you-actually-need-to-know",
        "title": "Networking Fundamentals: What You Actually Need to Know",
        "elements": [
            {
                "type": "table",
                "headers": ["Term", "Simplified Meaning", "Homelab Context"],
                "rows": [
                    ["IP Address / CIDR", "Your server's mailing address.", "192.168.1.10/24 means your network has 254 possible addresses."],
                    ["DNS", "The phonebook of the internet.", "AdGuard Home is your private phonebook. You decide which sites are blocked."],
                    ["Ports", "The 'doors' on your server.", "Jellyfin is at door 8096. Wiki.js is at door 3000. Only one app can use a door at a time."],
                    ["VLAN", "Virtual walls inside your router.", "Keeps your 'untrusted' smart lightbulbs from seeing your 'trusted' personal server."],
                    ["Gateway", "The door to the outside world.", "Almost always your router's IP (192.168.1.1)."],
                    ["DHCP", "The waiter handing out IP addresses.", "Your router automatically gives your phone an IP. You should set 'Static IPs' for your servers so they don't change."]
                ]
            }
        ]
    },
    {
        "id": "port-and-service-reference",
        "title": "Port and Service Reference",
        "elements": [
            {
                "type": "table",
                "headers": ["Service", "Default Port", "Internal Mapping", "External (Proxy) URL", "Status"],
                "rows": [
                    ["Proxmox Web UI", "8006", "N/A (Host)", "https://homelab.local:8006", "✅"],
                    ["Caddy (Proxy)", "80/443", "80:80, 443:443", "https://lin-os.com", "✅"],
                    ["AdGuard Home", "3000", "3000:3000", "http://adguard.evan.home", "✅"],
                    ["Wiki.js", "3000", "3001:3000", "https://wiki.lin-os.com", "✅"],
                    ["Infisical", "8080", "8081:8080", "https://secrets.lin-os.com", "✅"],
                    ["VS Code Server", "8443", "8443:8443", "https://code.lin-os.com", "✅"],
                    ["Uptime Kuma", "3001", "3006:3001", "https://status.lin-os.com", "✅"],
                    ["Jellyfin", "8096", "8096:8096", "https://media.lin-os.com", "⏳"],
                    ["Linkwarden", "3000", "3002:3000", "https://links.lin-os.com", "⏳"]
                ]
            }
        ]
    },
    {
        "id": "security-hardening-checklist",
        "title": "Security Hardening Checklist",
        "elements": [
            {
                "type": "h2",
                "content": "Day One: Pre-Exposure"
            },
            {
                "type": "list",
                "items": [
                    "Change Proxmox default password.",
                    "Enable 2FA on your router and all admin accounts.",
                    "Disable 'Root login' over SSH (use a regular user + sudo).",
                    "Verify your firewall is blocking all incoming traffic from the WAN."
                ]
            },
            {
                "type": "h2",
                "content": "Firewall & Port Strategy"
            },
            {
                "type": "list",
                "items": [
                    "<b>No-Port Rule:</b> Close all incoming ports on your router; use Cloudflare Tunnels instead.",
                    "<b>Internal UFW:</b> Set default deny incoming on the VM; allow only Tailscale/Local.",
                    "<b>Port Randomization:</b> Move SSH from port 22 to a random high port (e.g., 49222)."
                ]
            },
            {
                "type": "h2",
                "content": "Deep SSH Hardening"
            },
            {
                "type": "list",
                "items": [
                    "<b>Disable Passwords:</b> Force SSH Keys (Ed25519) only.",
                    "<b>PermitRootLogin:</b> Set to 'no' in sshd_config.",
                    "<b>AllowUsers:</b> Whitelist only your specific username.",
                    "<b>MFA:</b> Add 2FA/MFA for SSH sessions."
                ]
            },
            {
                "type": "h2",
                "content": "Active Security Monitoring Software"
            },
            {
                "type": "table",
                "headers": ["Software", "Core Function", "Why It's Needed"],
                "rows": [
                    ["CrowdSec", "Collaborative IPS", "Modern community-driven firewall that blocks malicious IPs globally."],
                    ["Infisical", "Secrets Management", "Centralized, encrypted platform for managing app secrets and .env variables."],
                    ["Fail2ban", "Log-based blocking", "Essential for basic protection on SSH and local services."],
                    ["Wazuh", "SIEM / XDR", "Enterprise-grade endpoint monitoring, file integrity checks, and vulnerability detection."],
                    ["Uptime Kuma", "Service Availability", "Instant notification if critical security services (VPN, Auth portals) go offline."],
                    ["Authentik / Authelia", "Identity (IAM)", "Centralized SSO with MFA for all self-hosted dashboards and tenant portals."],
                    ["Glances / Netdata", "Resource Monitoring", "Identifying CPU/Network anomalies that could signal a breach or mining activity."],
                    ["Trivy / Clair", "Image Scanning", "Automated scanning of Docker images for known CVEs before deployment."]
                ]
            },
            {
                "type": "h2",
                "content": "Credential & Secrets Audit"
            },
            {
                "type": "table",
                "headers": ["Service", "Sensitive Fields", "Why it needs configuration"],
                "rows": [
                    ["TREK", "ADMIN_PASSWORD, ADMIN_EMAIL, ENCRYPTION_KEY", "Admin access and data encryption."],
                    ["Linkwarden", "POSTGRES_PASSWORD, NEXTAUTH_SECRET", "Database security and session signing."],
                    ["Homepage", "PROXMOX_API_TOKEN (Secret)", "Read-only access to hypervisor stats."],
                    ["n8n", "N8N_ENCRYPTION_KEY, CREDENTIALS", "Encrypting third-party API keys within workflows."]
                ]
            },
            {
                "type": "h2",
                "content": "Secrets Management Recommendations"
            },
            {
                "type": "table",
                "headers": ["Software", "Description"],
                "rows": [
                    ["Infisical (Recommended)", "Modern, end-to-end encrypted platform for managing secrets. Great UI and easy integration."],
                    ["HashiCorp Vault", "The industry standard. Extremely powerful but has a steeper learning curve."],
                    ["SOPS (Secrets Operations)", "Encrypts your .env or .yaml files using age or PGP, allowing for safe Git commits."],
                    ["Doppler", "Developer-focused secrets manager that syncs secrets across your entire stack."]
                ]
            },
            {
                "type": "h2",
                "content": "Public Exposure Guide (Pre-Flight)"
            },
            {
                "type": "table",
                "headers": ["Step", "Best Practice"],
                "rows": [
                    ["Domain & DNS", "Use Cloudflare for DNS/WAF. Proxy all records."],
                    ["Connectivity", "Outbound-only via Cloudflare Tunnels (No ports open)."],
                    ["SSL/TLS", "Strict HTTPS. Use Wildcard Certs to hide subdomains."],
                    ["Reverse Proxy", "Caddy or Nginx Proxy Manager for traffic routing."]
                ]
            },
            {
                "type": "h2",
                "content": "Advanced Hardening (Defense in Depth)"
            },
            {
                "type": "list",
                "items": [
                    "<b>OIDC / SSO:</b> Wrap public services in Authentik/Authelia.",
                    "<b>Geo-Blocking:</b> Block all non-essential country traffic in Cloudflare.",
                    "<b>IP Whitelisting:</b> Restrict access to known IPs (Tailscale exit nodes).",
                    "<b>CrowdSec:</b> Link proxy logs to block known malicious actors."
                ]
            },
            {
                "type": "h2",
                "content": "S.M.A.R.T. Attributes to Watch"
            },
            {
                "type": "p",
                "content": "Your server's drives will fail. It's not a matter of 'if,' but 'when.' Watch these attributes in Proxmox/TrueNAS weekly:"
            },
            {
                "type": "table",
                "headers": ["Attribute", "What It Means", "Action Threshold"],
                "rows": [
                    ["Reallocated Sector Count", "The drive found a bad spot and moved data to a spare area.", "Any number above 0 = start planning replacement. Above 10 = replace immediately."],
                    ["Current Pending Sector", "Unstable sectors waiting to be remapped.", "If this increases over time, the drive is dying fast."],
                    ["Power On Hours", "How long the drive has been spinning.", "Refurbished drives often have 30k+ hours. Not a failure sign, but watch more closely."],
                    ["Temperature", "Operating heat.", "Target: 30°C–45°C. Above 50°C consistently will shorten life significantly."]
                ]
            }
        ]
    },
    {
        "id": "backup-testing-restore-drills",
        "title": "Backup Testing: Restore Drills",
        "elements": [
            {
                "type": "p",
                "content": "A backup you haven't tested isn't a backup; it's a prayer. Perform these drills once per quarter."
            },
            {
                "type": "table",
                "headers": ["Drill", "Scenario", "Success Condition"],
                "rows": [
                    ["PBS Snap Restore", "You 'accidentally' delete your Docker VM.", "VM is back online with all services running in < 5 minutes."],
                    ["Vaultwarden Key", "You lose your primary phone/computer.", "You can log in to a new browser using your master password and emergency backup key."],
                    ["Rclone B2 Pull", "Your server is stolen/burned in a fire.", "You can download your core 100GB of 'Life Data' from the cloud onto a new laptop."],
                    ["ZFS Drive Swap", "One drive in your mirror is pulled (simulated failure).", "The pool stays 'ONLINE' (degraded) and resilvers automatically when a new drive is inserted."]
                ]
            }
        ]
    },
    {
        "id": "troubleshooting-what-to-check-first",
        "title": "Troubleshooting: What to Check First",
        "elements": [
            {
                "type": "h2",
                "content": "The 'Big Three' Failure Points"
            },
            {
                "type": "list",
                "items": [
                    "<strong>DNS:</strong> Is AdGuard Home down? (If yes, nothing will resolve).",
                    "<strong>Networking:</strong> Can you ping your router? Can you ping 1.1.1.1?",
                    "<strong>Storage:</strong> Is the disk full? (Docker containers crash immediately if disk is 100%)."
                ]
            },
            {
                "type": "h2",
                "content": "Docker Error Cheat Sheet"
            },
            {
                "type": "table",
                "headers": ["Error Message", "Translation", "Likely Fix"],
                "rows": [
                    ["'Port already in use'", "Two apps are fighting for the same door.", "Check your Port Reference table. Change the host port in docker-compose.yml."],
                    ["'Exec format error'", "You are trying to run a Mac/ARM app on your Intel server.", "Look for the ':latest' tag or an 'amd64' version of the image."],
                    ["'Permission denied'", "Docker doesn't have the key to that folder.", "Check PUID/PGID settings. Run <code>ls -l</code> to see who owns the folder."],
                    ["'No space left on device'", "Your 512GB SSD is crying.", "Run <code>docker system prune -a</code> to delete old, unused images."]
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
                "content": "Your homelab is your resume. Use it to practice for the job you want next."
            },
            {
                "type": "list",
                "items": [
                    "<strong>LeetCode Tutor:</strong> Tell Hermes: 'Give me a medium-level LeetCode problem about linked lists. Don't give me the answer, just guide me.'",
                    "<strong>System Design:</strong> Use Excalidraw to map out a global-scale architecture for an app you're building. Ask Hermes to find the single point of failure in your diagram.",
                    "<strong>Live Tech Screen:</strong> Have Hermes act as an interviewer. 'You are a senior engineer at Google. Interview me about distributed databases.'"
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
                "content": "Running a server 24/7 costs money. This section ensures there are no surprises on your electric bill."
            },
            {
                "type": "table",
                "headers": ["Tool", "How It Connects", "Data Visibility"],
                "rows": [
                    ["Kasa EP25 Smart Plug", "Wi-Fi (via Matter/Home Assistant)", "Real-time wattage, daily kWh, voltage drop monitoring."],
                    ["Home Assistant Energy Tab", "Built-in Dashboard", "Graphs daily cost based on NYC rate ($0.20/kWh)."],
                    ["Hermes Energy Report", "Weekly Telegram Push", "'Your server cost $4.12 this week. Jellyfin transcoding was the highest draw.'"]
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
                "content": "Wallos is great, but manually entering every Hulu price hike is annoying. The next level is automated tracking."
            },
            {
                "type": "list",
                "items": [
                    "Use n8n to monitor your email for keywords like 'Your receipt' or 'Renewal'.",
                    "Forward those emails to Hermes to extract the price and service name.",
                    "Hermes pings the Wallos API to update your monthly total automatically."
                ]
            }
        ]
    },
    {
        "id": "dns-privacy-dns-over-https-and-dns-over-tls",
        "title": "DNS Privacy: DNS-over-HTTPS and DNS-over-TLS",
        "elements": [
            {
                "type": "p",
                "content": "Standard DNS is plaintext. Your ISP knows every website you visit. Encrypting your DNS queries fixes this."
            },
            {
                "type": "table",
                "headers": ["Method", "Tool", "Pros"],
                "rows": [
                    ["DoH (DNS over HTTPS)", "AdGuard Home → NextDNS Upstream", "Looks like normal web traffic. Impossible for ISP to block or sniff."],
                    ["DoT (DNS over TLS)", "AdGuard Home → Cloudflare Upstream", "Dedicated port (853). More efficient but easier for some ISPs to block."],
                    ["NextDNS", "External Cloud Provider", "Excellent dashboard showing you *exactly* which companies are trying to track your smart TV."]
                ]
            }
        ]
    },
    {
        "id": "git-workflow-for-homelab-configs",
        "title": "Git Workflow for Homelab Configs",
        "elements": [
            {
                "type": "p",
                "content": "Don't just keep your configs on the server. Version control them like a professional."
            },
            {
                "type": "list",
                "items": [
                    "<strong>Local:</strong> Edit files in VS Code on your laptop.",
                    "<strong>Gitea:</strong> Push changes to your internal Gitea server. This is your primary backup.",
                    "<strong>CI/CD:</strong> Woodpecker CI detects the push → validates the YAML syntax → restarts the Docker container on the server automatically.",
                    "<strong>Audit:</strong> Hermes reviews your commits every Sunday to ensure no passwords were accidentally left in plaintext."
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
                "content": "Self-hosting is about freedom, not suffering. Some things are better left to the pros."
            },
            {
                "type": "table",
                "headers": ["Service", "Why Skip?", "The Risk"],
                "rows": [
                    ["Email Server", "IP blacklisting, spam filters.", "You will stop receiving bank/work emails."],
                    ["Primary File Storage (no cloud)", "Hardware failure, fire, theft.", "Losing 10 years of family photos forever."],
                    ["Payments / Stripe", "PCI compliance, extreme security risk.", "Identity theft and financial liability."],
                    ["Public-Facing Web Hosting", "DDoS attacks, bot scrapers.", "Taking down your whole home internet line."]
                ]
            }
        ]
    },
    {
        "id": "home-business-os-bot",
        "title": "Home Business OS Telegram Bot",
        "elements": [
            {
                "type": "p",
                "content": "A zero-typing, visual-first Telegram bot acting as a complete operating system for a home-based resale or small-scale business. Designed for speed, it uses AI vision to handle the 'boring' parts of inventory and finance."
            },
            {
                "type": "h2",
                "content": "Architecture Overview"
            },
            {
                "type": "p",
                "content": "The system runs as an asynchronous Python service interacting with multiple local and cloud APIs:"
            },
            {
                "type": "list",
                "items": [
                    "<strong>Telegram Bot API:</strong> User interface for all business actions.",
                    "<strong>OpenAI GPT-4o Vision:</strong> Identification and receipt OCR.",
                    "<strong>SQLite:</strong> Local storage for inventory and finance ledgers.",
                    "<strong>CUPS:</strong> Thermal printing via shell integration.",
                    "<strong>Localization:</strong> i18n support for English, Chinese, and Spanish."
                ]
            },
            {
                "type": "h2",
                "content": "Core Features"
            },
            {
                "type": "table",
                "headers": [
                    "Feature",
                    "Capability",
                    "Technical Detail"
                ],
                "rows": [
                    [
                        "Visual Inventory",
                        "Location tracking via marked-up photos",
                        "User sends photo of shelf with circle; bot saves as location ID."
                    ],
                    [
                        "AI Auto-Lister",
                        "Identifies items and drafts listings",
                        "GPT-4o Vision returns copy-pasteable title and description."
                    ],
                    [
                        "Appraisal Engine",
                        "Automated MSRP and deep-linking",
                        "Generates pre-filled links for FB Marketplace and Craigslist with local zip code."
                    ],
                    [
                        "Smart Printing",
                        "Thermal label printing and tracking",
                        "CUPS lp command handles auto-cropping 8.5x11 PDFs to 4x6 labels."
                    ],
                    [
                        "Automated Ledger",
                        "Income and fee tracking",
                        "Auto-deducts platform fees (eBay 13%, FB 5%, Etsy 6.5%)."
                    ],
                    [
                        "Tax Engine",
                        "Quarterly estimates and 1099-K alerts",
                        "Alerts user as sales approach the $600 IRS reporting threshold."
                    ]
                ]
            },
            {
                "type": "h2",
                "content": "Database Schema"
            },
            {
                "type": "p",
                "content": "Core logic is maintained in these SQLite tables:"
            },
            {
                "type": "list",
                "items": [
                    "<strong>Inventory:</strong> id, photo_id, location, name, msrp, status",
                    "<strong>Sales:</strong> id, item_id, platform, gross, fee, net, date",
                    "<strong>Expenses:</strong> id, receipt_photo, amount, category, date",
                    "<strong>Printer:</strong> id, job_type, roll_count, labels_printed",
                    "<strong>Goals:</strong> id, monthly_target, tax_env, supply_env"
                ]
            },
            {
                "type": "h2",
                "content": "Business Analytics & Cash Flow"
            },
            {
                "type": "p",
                "content": "The bot acts as a financial advisor, providing a Sunday P&L digest and a 'Runway' indicator (estimated weeks of income based on current inventory and sell-through rates). It uses a 70/20/10 envelope allocator to automatically split every sale into income, supplies, and taxes."
            },
            {
                "type": "h2",
                "content": "Implementation Roadmap (bot.py)"
            },
            {
                "type": "p",
                "content": "The Python backend uses python-telegram-bot for async handling and aiohttp for Vision API calls. Deep-links are generated via parameterized URL strings for various platforms. Thermal paper tracking is maintained via a simple decrement counter in SQLite, triggered by successful lp print job exits."
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
,

    {
        "id": "backup-testing-restore-drills",
        "title": "Backup Testing: Restore Drills",
        "elements": [
            {
                "type": "p",
                "content": "A backup you have never tested is a backup you do not have. Each of these procedures should be run monthly, in a test environment, before you need them in a real emergency. The goal is to know exactly what recovery looks like before it is 2am and something has failed."
            },
            {
                "type": "p",
                "content": "Drill 1: Proxmox Backup Server \u2014 VM Restore\nScenario\nA VM (e.g., your main Docker stack) has become corrupt or been accidentally deleted.\nStep 1\nLog into Proxmox Web UI \u2192 Datacenter \u2192 PBS storage\nStep 2\nSelect the VM backup from the list. Note the backup date and size shown.\nStep 3\nClick Restore \u2192 choose a new VMID (e.g., 999) so it creates a NEW VM rather than overwriting anything.\nStep 4\nStart the restored VM. SSH in. Verify: are Docker containers running? Is the data intact? Is the database consistent?\nStep 5\nDelete the test VM once verified. The real VM is untouched.\nWhat you learn\nHow long restore takes (note it). Whether your backup is actually consistent. Whether you know the restore process without googling.\nExpected time\n5\u201315 minutes for a 50GB VM restore over a local network."
            },
            {
                "type": "p",
                "content": "Drill 2: Vaultwarden \u2014 Export and Re-Import\nScenario\nVaultwarden data is corrupt or the server is unreachable. Family cannot access any passwords.\nStep 1\nRestore the Vaultwarden data directory from your Rclone B2 backup to a test location.\nStep 2\nSpin up a fresh Vaultwarden Docker container pointing at the restored data directory.\nStep 3\nLog in to the test instance from a browser. Can you see all vaults, all passwords, all shared collections?\nStep 4\nTest one family member's account \u2014 can they log in and see their items?\nStep 5\nShut down the test instance. Document how long this took and any issues encountered.\nWhat you learn\nWhether the B2 backup is actually usable (not just present). Whether you can restore without the original server.\nCritical check\nVerify the backup is recent \u2014 check the file modification date on B2. If the last sync was 2 weeks ago, your backup retention policy needs fixing."
            },
            {
                "type": "p",
                "content": "Drill 3: Rclone B2 \u2014 Full NAS Restore Simulation\nScenario\nThe NAS has failed completely. You need to recover your most important data from off-site B2 backup.\nStep 1\nOn a test machine (or a separate directory), run: rclone ls b2:your-bucket/important-dir -- verify the file list looks correct and recent.\nStep 2\nPick one critical directory (e.g., Immich original photos for one month). Run: rclone copy b2:your-bucket/photos/2025-01 /tmp/restore-test/\nStep 3\nVerify the restored files: open several images, check file sizes match, verify no corruption (md5sum comparison if you stored checksums).\nStep 4\nCheck the encryption: if you encrypted with rclone crypt, verify you can decrypt with your stored password. This is the most common failure point \u2014 encrypted backups whose keys are lost.\nStep 5\nEstimate full restore time based on your B2 egress speed and total backup size.\nWhat you learn\nWhether your rclone crypt password is documented and accessible. How long a full restore would actually take. Whether your most critical data is actually being synced."
            },
            {
                "type": "p",
                "content": "Drill 4: ZFS \u2014 Pool Resilver After Drive Failure\nScenario\nOne drive in your NAS mirror shows a S.M.A.R.T. pre-failure warning. You need to replace it before the drive dies.\nStep 1\nIdentify the failing drive: zpool status \u2014 look for DEGRADED or the specific device with errors.\nStep 2\nOrder the replacement drive. While waiting, the pool is degraded but still functional \u2014 do not power off.\nStep 3\nWhen the new drive arrives, physically hot-swap it (Synology/TrueNAS support this). Or shut down, swap, and power back on.\nStep 4\nRun: zpool replace pool_name /dev/old_disk /dev/new_disk \u2014 ZFS begins resilvering immediately.\nStep 5\nMonitor with: zpool status \u2014 watch the resilver progress. On a 14TB drive, resilver takes 6\u201324 hours.\nStep 6\nVerify completion: zpool status should show ONLINE for all vdevs with zero errors.\nWhat you learn\nThe resilver timeline for your drive size. Whether your pool configuration is correct (run this drill on a test pool with small files before you have real data).\nThe drill version\nCreate a test ZFS pool on your Mini PC with two small USB drives (or two loop devices). Simulate a drive failure with zpool offline, replace the 'failed' drive, and watch the resilver. Do this before you depend on ZFS."
            }
        ]
    },
    {
        "id": "troubleshooting-what-to-check-first",
        "title": "Troubleshooting: What to Check First",
        "elements": [
            {
                "type": "p",
                "content": "This is the map, not the manual. The manual lives in SilverBullet \u2014 write detailed notes there when you solve something. This section gives you the diagnostic order so you stop in the right place instead of wandering."
            },
            {
                "type": "p",
                "content": "Service Not Accessible\nWork through these in order. Stop at the first one that fails \u2014 that is where the problem is."
            },
            {
                "type": "p",
                "content": "Step\nCheck\nCommand / Tool\nWhat it rules out\n1\nIs the container running?\ndocker ps | grep [service-name]\nIf not running: docker logs [container] to see why it crashed\n2\nIs it listening on the expected port?\nss -tlnp | grep [port] or docker port [container]\nContainer may be running but crashed internally after start\n3\nCan you reach it directly on the host?\ncurl http://localhost:[port] from the server itself\nRules out the container. If this fails, problem is inside Docker\n4\nIs the reverse proxy pointed at the right host:port?\nNginx Proxy Manager \u2192 proxy host \u2192 check Forward Hostname and Port\nA typo here is the most common cause of 502 Bad Gateway\n5\nIs DNS resolving correctly?\nnslookup service.yourdomain.com \u2014 from both server and a client device\nTwo different failure modes: wrong DNS record vs wrong proxy config\n6\nIs there a firewall blocking it?\nsudo ufw status or check Proxmox firewall rules\nUFW may be blocking the port even though the service is running\n7\nIs the SSL cert valid?\ncurl -v https://service.yourdomain.com 2>&1 | grep -i cert\nExpired cert causes HTTPS failures that look like service failures\n8\nIs Pangolin/Tailscale connected?\ntailscale status or check Pangolin dashboard\nTunnel may have dropped \u2014 restart newt container"
            },
            {
                "type": "p",
                "content": "Server Not Responding (SSH Down)\nStep\nCheck\nHow\n1\nIs the server powered on?\nCheck physical power light. Check UPS \u2014 did power cut happen?\n2\nIs it on the network?\nping [server-ip] from another device on the same network\n3\nIs SSH running but port blocked?\nTry Tailscale IP if Tailscale is on a different interface: ssh user@100.x.x.x\n4\nDid a kernel update break boot?\nConnect monitor + keyboard. Watch boot messages. Does it hang? Does it show a grub menu?\n5\nIs the filesystem full?\nIf boot succeeds but SSH fails: boot to recovery mode, check df -h \u2014 full / partition causes all sorts of failure\n6\nDid Docker eat all the RAM?\nBoot with reduced Docker services if possible. Check dmesg for OOM killer messages.\n7\nZFS pool issue?\nzpool status on the recovery console. A faulted pool can stall boot.\nLast resort\nPhysical access\nConnect HDMI and keyboard. The screen output will tell you exactly what is happening."
            },
            {
                "type": "p",
                "content": "Proxmox VM Not Starting\nSymptom\nCheck\nFix\nTask error: 'permission denied'\nCheck if the VM disk file exists: ls -lh /var/lib/vz/images/[VMID]/\nDisk may have been moved or corrupted \u2014 restore from PBS\nError: 'No space left on device'\npveam list or df -h on the Proxmox host\nLocal storage full \u2014 move VMs to NAS storage or expand\nVM starts then immediately stops\nCheck VM console output: in web UI, click console before starting\nOften a kernel panic or misconfigured bootloader \u2014 visible in console\n'Lock file exists' error\nqm unlock [VMID]\nLeftover lock from a crash. Safe to remove if VM is definitively stopped.\nNetwork not coming up in VM\nCheck VM network config in hardware tab. Check bridge: ip link show on Proxmox host.\nBridge may be misconfigured or missing after update\nPBS restore fails\nCheck PBS datastore free space. Check network connectivity to PBS.\nPBS storage may be full \u2014 dedup doesn't always prevent this if tasks accumulate"
            },
            {
                "type": "p",
                "content": "ZFS Pool Degraded or Faulted\nState\nWhat it means\nWhat to do\nDEGRADED (one drive offline)\nOne drive failed or was removed. The pool still works from the mirror but has NO redundancy.\nCheck S.M.A.R.T. on the affected drive. Order replacement immediately. Do not add writes unless necessary.\nDEGRADED (resilver in progress)\nA replacement drive is being rebuilt from the mirror. Normal operation.\nWait. Monitor progress with zpool status. Do not interrupt unless the host must reboot.\nFAULTED\nThe pool cannot be imported \u2014 possible data loss. Usually requires manual intervention.\nzpool import -f [pool-name] may recover it. If that fails: boot from a live USB and attempt recovery. This is a SilverBullet runbook situation.\nChecksum errors (non-zero)\nZFS detected and corrected corruption. The data is fine but the drive is struggling.\nRun zpool scrub. Watch if errors accumulate. More than a few per week = drive health concern.\nREMOVED\nDrive was cleanly removed (hot-swap) or disconnected.\nReconnect the drive: zpool online pool_name [device]. If the drive is gone permanently, replace with zpool replace.\nScrub errors\nUncorrectable errors found during scrub. Some data is unreadable.\nCheck which files: zpool status -v. If backups are good, restore affected files. If no backup of those files, data may be lost."
            },
            {
                "type": "p",
                "content": "AdGuard Home: Everything Stopped Working\nWhen AdGuard breaks, it takes the entire network's DNS with it. Everything stops loading. This is the most disruptive single point of failure in Stage 1."
            },
            {
                "type": "p",
                "content": "Symptom\nCheck\nFix\nAll domains resolve but ads show again\nAdGuard container crashed \u2014 browser using ISP DNS fallback\ndocker restart adguard\nNothing resolves at all\nAdGuard container is down and no fallback configured\nOn another device, temporarily set DNS to 1.1.1.1 manually. Then fix AdGuard.\nAdGuard shows as running but DNS fails\nPort 53 conflict \u2014 another process took port 53\nss -tlunp | grep 53 to find the conflict. systemd-resolved is the common culprit on Ubuntu.\nsystemd-resolved conflict on Ubuntu\nUbuntu runs systemd-resolved on 127.0.0.53:53 by default\nEdit /etc/systemd/resolved.conf: DNSStubListener=no \u2192 systemctl restart systemd-resolved\nUpstream DNS failing\nAdGuard cannot reach 1.1.1.1 or 9.9.9.9\nCheck server internet connectivity: curl https://1.1.1.1 \u2014 network issue if this fails\nSpecific domain broken for one device\nThat device has DNS cached from before AdGuard \u2014 or has manual DNS configured\nOn the device: ipconfig /flushdns (Windows) or sudo resolvectl flush-caches (Linux)"
            },
            {
                "type": "p",
                "content": "Tailscale: Can't Reach Server Remotely\nSymptom\nCheck\nFix\ntailscale status shows server as offline\nTailscale daemon on the server has crashed or been stopped\nSSH into the server over LAN. sudo systemctl restart tailscaled\nServer shows online but SSH times out\nServer firewall is blocking Tailscale traffic\nsudo ufw allow in on tailscale0 \u2014 allow all traffic on the Tailscale interface\nLogin expired / authentication required\nTailscale key has expired\nsudo tailscale up \u2014 re-authenticate via the Tailscale admin console\nTailscale connected but can't reach Docker services\nSubnet routing not enabled\nsudo tailscale up --advertise-routes=192.168.1.0/24 \u2014 enables access to local services\nVery high latency via Tailscale\nDERP relay being used instead of direct connection\nUsually resolves itself. Check Tailscale admin console for relay vs direct status."
            },
            {
                "type": "p",
                "content": "Docker Compose: Common Errors\nError message\nCause\nFix\nport is already allocated\nAnother container or service is using that host port\nChange the host port (left side of colon) in docker-compose.yml. See Port Reference table.\nno such file or directory (volume mount)\nThe host directory in the volume mount doesn't exist\nmkdir -p /opt/stacks/[service]/data \u2014 create the directory first\npermission denied (volume mount)\nThe container's user doesn't have permission to write to the mounted directory\nchown -R 1000:1000 /opt/stacks/[service]/data \u2014 match the container's UID\nnetwork [name] not found\nThe Docker network referenced in compose doesn't exist yet\ndocker network create [name] \u2014 or run docker compose up for the stack that owns the network first\nimage not found\nTypo in image name, or private registry not authenticated\ndocker pull [image] manually to see the actual error message\ncontainer name already in use\nA stopped container with the same name still exists\ndocker rm [container-name] \u2014 remove the stopped container first\nExit code 1 immediately after start\nApplication crashed on startup \u2014 check logs\ndocker logs [container-name] \u2014 the actual error is in there\nHealth check failing but app seems fine\nHealth check command is wrong or the service takes time to start\nAdd a startup delay: start_period: 30s in the healthcheck section"
            }
        ]
    },
    {
        "id": "interview-prep-practice-environment",
        "title": "Interview Prep: Practice Environment",
        "elements": [
            {
                "type": "p",
                "content": "This section is a tool, not talking points. The goal is a homelab setup that actively helps you practice \u2014 coding challenges, system design, technical screens \u2014 using AI to give you feedback you can't get from LeetCode alone."
            },
            {
                "type": "p",
                "content": "What This Covers\nThree distinct modes of interview prep, each with a concrete homelab implementation:"
            },
            {
                "type": "p",
                "content": "Mode\nWhat you're practicing\nHomelab role\nLeetCode / coding challenges\nProblem-solving speed, patterns, edge cases\nHermes as an adaptive tutor who explains, quizzes you, tracks weak spots, and adjusts difficulty based on how you're doing \u2014 not a static problem bank\nSystem design\nWhiteboarding distributed systems under time pressure\nYour actual infrastructure as the reference. Hermes runs timed mock sessions, challenges your assumptions, and asks follow-up questions like an interviewer would\nTechnical screen simulation\nThinking out loud while coding, handling pressure, recovering from mistakes\nHermes voices the interviewer role \u2014 asks clarifying questions, gives hints on a delay, and gives you a debrief afterward with specific things to improve"
            },
            {
                "type": "p",
                "content": "LeetCode Practice Environment\nThe Problem With LeetCode Alone\nLeetCode tells you pass/fail. It doesn't tell you why your thinking got stuck, which patterns you keep missing, or what to focus on next given where you are in your prep. Hermes fills those gaps."
            },
            {
                "type": "p",
                "content": "Session Setup\nHermes as tutor \u2014 starter prompt\n'You are a coding interview tutor. I have [X weeks] until interviews at [company type]. My weak areas are [DP, graphs, etc.]. Each session: give me one problem matched to my level, let me attempt it, then give me a structured debrief. Track which patterns we've covered and remind me at the start of each session. If I haven't attempted something in 5 days, pick a problem from that category.'\nSession structure\nHermes gives you a problem. You open a blank editor (VS Code, Replit, or your Gitea-hosted coding environment). You work through it, thinking out loud in the chat. Hermes watches for stuck points but doesn't give answers \u2014 it gives directed hints after a configurable delay.\nConfigurable hint delay\nTell Hermes: 'Give me a hint only if I've been silent for 8 minutes or explicitly ask.' This mirrors the real interview dynamic where you have to drive.\nPattern tracking\nAfter each problem, Hermes updates a running note: problem name, pattern (sliding window / two pointer / DFS / DP / etc.), whether you got it, and what you missed. After 10 sessions, it surfaces your three weakest patterns and weights toward those.\nSpaced repetition\nEvery Sunday morning, Hermes sends you a Telegram message: 'You haven't reviewed [two-pointer problems] in 8 days. Here's a quick problem to stay sharp.' Low-friction maintenance."
            },
            {
                "type": "p",
                "content": "Clean Coding Environment \u2014 Spin Up in 60 Seconds\nKeep a Gitea repo called interview-env. Clone and run in one command:\nWhat it contains\ndocker-compose.yml with Postgres 16 (seeded schema), Redis 7, a PocketBase backend, and a bare React+Vite frontend. Plus a /problems directory of solved problems with your notes.\nOne-command start\ngit clone gitea.home/you/interview-env && cd interview-env && docker compose up -d\nWhy this matters\nTake-home assessments: zero setup time. Live coding: you have a working full-stack reference. The environment is yours \u2014 you chose every piece of it and you can explain every choice.\nProblem notes format\nEach solved problem gets a markdown file: problem name, constraints, your first approach, why it was wrong, the correct approach, time/space complexity, and which pattern it demonstrates. Hermes generates this template after each session."
            },
            {
                "type": "p",
                "content": "System Design Practice\nHow It Works\nSystem design interviews are not about memorizing architecture diagrams. They are about demonstrating structured thinking under time pressure \u2014 scoping, asking good questions, making tradeoffs explicitly, and defending choices. Hermes simulates the interviewer, not the answer."
            },
            {
                "type": "p",
                "content": "Mock session prompt for Hermes\n'Run a 45-minute system design mock interview with me. Pick a real system (URL shortener, ride-sharing, video streaming, notification system, etc.) \u2014 don't tell me which one until I say start. Act as a senior engineer interviewer: ask clarifying questions, push back on my assumptions, ask me to go deeper on specific components, and at the end give me a debrief covering what I did well, what I missed, and one thing to focus on next time.'\nStarting the session\nType 'start' to Hermes. It names the system. You have 45 minutes. Think out loud \u2014 paste your rough architecture into the chat, describe your thinking, ask if you should go deeper on any component.\nWhat Hermes challenges\nScale assumptions ('what if traffic spikes 100x?'), consistency tradeoffs ('you chose eventual consistency \u2014 what breaks for the user?'), component choices ('why Postgres here and not Cassandra?'), missing pieces ('you forgot the cache invalidation strategy').\nDebrief format\nHermes ends the session with: what you covered well, one component you skimmed, one question you should have asked the interviewer, and a 1\u201310 score on depth vs breadth balance.\nTracking progress\nHermes keeps a running log: systems covered, date, score, and the main gap from each session. After 5 sessions it identifies your structural weak spot (e.g., 'you consistently underspec the data model before jumping to infrastructure')."
            },
            {
                "type": "p",
                "content": "Full Technical Screen Simulation\nThis is the hardest mode \u2014 it requires Hermes to hold role throughout the session without breaking character, which works best with a capable model (Claude via OpenRouter). Run it when you are 2\u20133 weeks out and want to stress-test."
            },
            {
                "type": "p",
                "content": "The prompt\n'You are conducting a 60-minute technical screen for a mid-level frontend/fullstack engineer role. Start with 5 minutes of background questions, then give me a coding problem to work through while talking out loud. Give me one hint if I've been stuck for more than 10 minutes without progress. At the end, give me honest feedback as if you were actually writing feedback to a hiring committee.'\nThe coding-out-loud practice\nThe most commonly failed part of real interviews is not solving the problem \u2014 it's failing to communicate your thinking while you solve it. Practice narrating: 'I'm thinking about this as a sliding window problem because... let me check the constraints first... I notice this edge case...' Hermes listens and gives feedback on your narration quality in the debrief.\nRecovering from mistakes\nTell Hermes to simulate the experience of catching a bug mid-solution and recovering gracefully. Real interviews often turn on this moment \u2014 do you panic, or do you say 'I see the issue, let me trace through why...' and fix it systematically?\nCalibration\nAfter 3 simulated screens, ask Hermes to compare your sessions and identify one consistent pattern: 'You always rush the problem clarification step. In all three sessions you started coding within 90 seconds of getting the problem. Interviewers notice this.'"
            }
        ]
    },
    {
        "id": "energy-monitoring-and-cost-dashboard",
        "title": "Energy Monitoring and Cost Dashboard",
        "elements": [
            {
                "type": "p",
                "content": "The doc mentions NYC electricity costs and the Kill A Watt meter repeatedly. This section closes the loop: how to get per-device wattage into Home Assistant, build a Grafana cost dashboard, and have Hermes give you monthly energy reports. At $0.25/kWh in NYC, even a 15W idle device costs $33/year \u2014 the numbers add up fast when you are running a full homelab stack."
            },
            {
                "type": "p",
                "content": "Hardware: Which Smart Plug to Use\nPlug\nEnergy monitoring?\nLocal control?\nHome Assistant integration\nCost\nBest for\nKasa EP25 (already in accessories)\nYes \u2014 real-time watts, amps, voltage\nYes \u2014 works without Kasa cloud via local API\nExcellent native HA integration via Kasa Local\n~$15\u201320\nMost devices: server, NAS, UPS, network gear\nShelly Plug S / Shelly Plus Plug US\nYes \u2014 high accuracy, 0.1W resolution\nYes \u2014 MQTT or HTTP, fully local\nExcellent \u2014 Shelly is the homelab community standard for energy monitoring\n~$15\u201320\nPreferred if you want open firmware (Shelly supports Tasmota / Mongoose OS)\nEmporia Vue 2 (whole-home)\nYes \u2014 per-circuit monitoring, clips onto breaker panel\nYes \u2014 local API available\nGood HA integration via Emporia custom component\n~$70\nThe whole building \u2014 see per-circuit usage including HVAC, washer/dryer, server closet\nTP-Link Kasa EP10\nNo energy monitoring\nYes \u2014 local API\nGood\n~$10\nDevices you just want to automate, not monitor"
            },
            {
                "type": "p",
                "content": "Home Assistant Energy Integration\nStep 1: Add smart plugs\nKasa EP25 \u2192 HA Settings \u2192 Devices \u2192 Add Integration \u2192 TP-Link Kasa. Shelly \u2192 HA Settings \u2192 Devices \u2192 Add Integration \u2192 Shelly. Both auto-discover on the local network.\nStep 2: Enable HA Energy Dashboard\nHA Settings \u2192 Energy \u2192 Add individual device consumption \u2192 select each smart plug entity (sensor.[device]_current_power). HA calculates kWh from the real-time watt readings automatically.\nStep 3: Set your electricity rate\nHA Energy Dashboard \u2192 Electricity grid \u2192 Add tariff \u2192 $0.25/kWh (Con Edison NYC average). HA will calculate cost automatically in the Energy dashboard.\nStep 4: Create device-level entities\nIn HA's energy dashboard, label each plug: 'server-mini-pc', 'nas-synology', 'tower-t5820', 'ups-cyberpower', 'network-switch'. These labels appear in all dashboards and Grafana queries.\nStep 5: Long-term statistics\nHA stores energy data in its long-term statistics database. No InfluxDB needed for basic cost tracking \u2014 HA's built-in energy dashboard shows daily/weekly/monthly cost per device going back months."
            },
            {
                "type": "p",
                "content": "Grafana Energy Cost Dashboard\nHome Assistant's built-in energy dashboard is good but not customizable enough for a multi-device homelab. Pull the data into Grafana for a proper per-device cost breakdown:"
            },
            {
                "type": "p",
                "content": "Data source\nUse the Home Assistant Grafana integration (hass-grafana-datasource) or push HA sensor data to InfluxDB via the InfluxDB integration in HA. InfluxDB is cleaner for long-term Grafana queries.\nKey panels to build\n(1) Current wattage per device \u2014 bar chart, real-time. Immediately shows the Mini PC at 12W, NAS at 20W, switch at 8W, etc. (2) Monthly kWh per device \u2014 stacked area chart over time. (3) Monthly cost per device ($) at $0.25/kWh \u2014 this is the one you screenshot for hardware justification decisions. (4) Projected annual cost \u2014 simple calculation: monthly cost * 12.\nThe hardware justification panel\nA Grafana stat panel: 'Tower workstation monthly idle cost: $12.75 vs. Mini PC monthly cost: $0.90'. This makes the Stage 4 upgrade decision concrete \u2014 you know exactly what the always-on tower costs.\nGrafana formula for cost\nIn InfluxDB query: SELECT mean(value) * 0.001 * 720 * 0.25 FROM homeassistant WHERE entity_id = 'sensor.mini_pc_power'. This converts average watts \u2192 kWh/month \u2192 cost/month at $0.25/kWh. Adjust 720 for hours in a month.\nThe Con Edison rate caveat\nNYC Con Edison has time-of-use rates during summer peak demand (peak hours cost more). For accuracy, the Emporia Vue 2 can track time-of-use separately. For planning purposes, $0.25/kWh average is close enough."
            },
            {
                "type": "p",
                "content": "Hermes Monthly Energy Report\nScheduled automation\n1st of every month at 8am: Hermes queries the HA energy API (or InfluxDB) for last month's per-device energy consumption, calculates cost at $0.25/kWh, and sends a formatted Telegram report.\nReport format\n[ENERGY REPORT \u2014 March 2027] | Mini PC: 8.6 kWh \u2014 $2.15 | NAS: 14.4 kWh \u2014 $3.60 | Tower (idle): 51.8 kWh \u2014 $12.95 | Network stack: 5.8 kWh \u2014 $1.45 | TOTAL: 80.6 kWh \u2014 $20.15 | vs last month: +$2.10 (Tower added this month)\nAnomaly detection\nIf any device shows >20% higher consumption than its 3-month average, Hermes flags it: 'NAS power draw is 35% above average \u2014 check for runaway processes or drive resilver.'\nAnnual projection\nHermes calculates: 'At current consumption, your annual electricity cost for homelab hardware is $241.80. Savings vs cloud equivalents (Google One, Spotify, iCloud, GitHub): ~$720/year.'"
            }
        ]
    },
    {
        "id": "dns-privacy-dns-over-https-and-dns-over-tls",
        "title": "DNS Privacy: DNS-over-HTTPS and DNS-over-TLS",
        "elements": [
            {
                "type": "p",
                "content": "Every DNS query you make is visible to your ISP by default \u2014 they can see every domain name your network requests even if the actual web traffic is encrypted by HTTPS. The fix is encrypting the DNS queries themselves. AdGuard Home supports both sending encrypted DNS upstream (your queries to the internet are private) and receiving encrypted DNS from your devices (your devices communicate with AdGuard privately even on the local network)."
            },
            {
                "type": "p",
                "content": "Two Directions of DNS Encryption\nDirection\nWhat it protects\nWhere to configure\nUpstream DoH/DoT (AdGuard \u2192 internet)\nYour ISP cannot see which domains you are looking up. Instead of sending plaintext DNS to 1.1.1.1:53, AdGuard sends encrypted HTTPS requests to https://1.1.1.1/dns-query.\nAdGuard Home \u2192 Settings \u2192 DNS settings \u2192 Upstream DNS servers\nLocal DoH/DoT (devices \u2192 AdGuard)\nDevices on your local network communicate with AdGuard encrypted, even on the LAN. Less critical than upstream (you trust your own LAN), but prevents snooping on shared Wi-Fi and is a good practice for devices you are learning to secure.\nAdGuard Home \u2192 Settings \u2192 Encryption settings \u2014 requires a certificate for your local domain"
            },
            {
                "type": "p",
                "content": "Configuring Encrypted Upstream DNS in AdGuard Home\nStep 1: Open DNS settings\nAdGuard Home web UI \u2192 Settings \u2192 DNS settings \u2192 Upstream DNS servers\nStep 2: Replace default upstream\nRemove 1.1.1.1 and 8.8.8.8 (these are plaintext). Add one of the following encrypted upstreams:\nCloudflare DoH\nhttps://cloudflare-dns.com/dns-query \u2014 fastest, strong privacy policy, but Cloudflare is still a US company\nQuad9 DoH\nhttps://dns.quad9.net/dns-query \u2014 nonprofit, blocks malware domains, good privacy policy, no data sold\nNextDNS DoH (recommended for homelab)\nhttps://dns.nextdns.io/[your-id] \u2014 free tier up to 300k queries/month, per-profile filtering, logs you can review, family-safe modes. Create a free account at nextdns.io.\nMullvad DoH\nhttps://dns.mullvad.net/dns-query \u2014 zero logging, operated by the same team as Mullvad VPN, no account needed\nStep 3: Enable DNS-over-HTTPS bootstrap\nAdd a bootstrap DNS so AdGuard can resolve the DoH server's hostname on startup: 9.9.9.9 (plaintext, used only to find the encrypted server, then never used again)\nStep 4: Verify\nAfter saving, go to AdGuard Home \u2192 Dashboard. Under 'Upstream DNS' you should see the DoH URL, not an IP address. Run a test query and confirm it resolves correctly."
            },
            {
                "type": "p",
                "content": "Why This Matters for This Specific Setup\n    \u2022 Your ISP (typically Spectrum or Optimum in NYC) logs DNS queries and may sell this data. Encrypted DNS removes this visibility entirely.\n    \u2022 Cloudflare Tunnels and Pangolin protect your server's inbound traffic. Encrypted DNS protects your outbound queries. Together they close the main visibility gaps in a residential internet connection.\n    \u2022 When using Tailscale: Tailscale sets its own DNS resolver. Configure Tailscale to use your AdGuard Home IP as the DNS server so all Tailscale devices (including phones when away from home) also use encrypted upstream DNS.\n    \u2022 Performance impact: negligible. DoH adds a few milliseconds per fresh DNS lookup. Since AdGuard caches responses, most queries hit the local cache anyway."
            },
            {
                "type": "p",
                "content": "NOTE: If you switch to NextDNS (recommended), you get per-device query logs, custom blocklists on top of AdGuard, and the ability to see exactly which domains each device queries. Run both AdGuard Home (local ad blocking, local DNS overrides) and NextDNS (encrypted upstream, additional filtering). AdGuard forwards to NextDNS over DoH."
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
                "type": "p",
                "content": "Repository Structure: Four Repos, One Purpose Each\nRepo name\nWhat goes in it\nWhat never goes in it\nWho needs access\nhomelab-stacks\nAll Docker Compose files, organized by service. /stacks/jellyfin/docker-compose.yml, /stacks/immich/docker-compose.yml, etc. Also includes each service's nginx-proxy-manager config exported as JSON.\nAny .env files. Any files containing passwords, tokens, or API keys.\nYou only \u2014 private repo\nhomelab-scripts\nPython scripts, bash scripts, n8n workflow exports, cron job definitions, Ansible playbooks (Stage 4+). Anything you wrote that automates something.\nScripts with hardcoded credentials. Any script that contains a password inline.\nYou only \u2014 private repo\nhomelab-notes\nSilverBullet notes exported as markdown, or a Gitea-backed folder that SilverBullet syncs to. Your wiki, runbooks, and troubleshooting notes.\nPersonal financial data, tenant names, anything sensitive.\nYou only \u2014 private repo\ndotfiles\nShell configuration (.zshrc, .bashrc), vim/neovim config, SSH config (without private keys), tmux config, git config. The setup that makes any new server feel like home in 5 minutes.\nSSH private keys. Any credential files (.netrc, .pgpass).\nYou only \u2014 private repo. Can be public if you sanitize it carefully."
            },
            {
                "type": "p",
                "content": "The .gitignore Pattern for Each Repo\nhomelab-stacks .gitignore\n*.env | .env | .env.* | **/secrets/ | **/data/ | **/.secrets | *.key | *.pem | *.crt (do not commit SSL certs from Let's Encrypt) | docker-compose.override.yml (local overrides often contain credentials)\nhomelab-scripts .gitignore\nconfig.py | config.yaml | secrets.yaml | *.token | .env | Any file you know contains credentials \u2014 add it immediately when you create the file, before you write anything sensitive into it\ndotfiles .gitignore\n~/.ssh/id_* (private keys) | ~/.ssh/known_hosts (not sensitive but noisy) | .netrc | .pgpass | Any file ending in .secret or .key"
            },
            {
                "type": "p",
                "content": "How to Handle Secrets: Document Without Leaking\nThe problem: your docker-compose.yml references environment variables like POSTGRES_PASSWORD and VAULTWARDEN_ADMIN_TOKEN, but the actual values live in .env files that are gitignored. How does future-you (or a fresh server setup) know what values those variables need?"
            },
            {
                "type": "p",
                "content": "The .env.example pattern\nFor every service, commit a .env.example file alongside the .env (which is gitignored). The .env.example contains every variable name with a placeholder value and a comment explaining what it is: POSTGRES_PASSWORD=change-me-strong-password # Min 20 chars, used by Gitea and Paperless. This documents the interface without leaking the secret.\nSecret inventory in SilverBullet\nKeep a note titled 'Secret Inventory' in SilverBullet: a table of every secret in the stack, which service uses it, where it is stored (Vaultwarden collection name), and when it was last rotated. Never put the actual value in the note \u2014 just the name and location.\nVaultwarden as the source of truth\nEvery secret in the homelab should have a corresponding entry in Vaultwarden. When you need to set up a new server, you pull the secret from Vaultwarden. The Gitea repo tells you which secrets are needed; Vaultwarden stores the actual values.\nEnvironment variable injection at runtime\nIn your Docker Compose files, reference variables as ${VARIABLE_NAME}. On the server, the .env file in the same directory as the compose file is loaded automatically by Docker Compose. Never put the value inline in the compose file itself."
            },
            {
                "type": "p",
                "content": "Hermes: Auditing Repos for Accidentally Committed Credentials\nThe ask\n'Audit my homelab-stacks repo for any accidentally committed secrets or credentials.'\nWhat Hermes does\nClones the repo (via Gitea MCP or git clone), runs gitleaks or trufflehog against the full git history (including deleted files \u2014 they still exist in git history), and reports any detected secrets with file name, line number, and commit hash.\nThe important detail\n'I deleted the file' does not help if it was ever committed. The secret is in git history forever unless you purge it with git filter-repo. Hermes can walk you through the purge process if it finds historical secrets.\nPreventive measure\nAdd a pre-commit hook to your repos: install the gitleaks pre-commit hook. It scans every commit before it lands and refuses to commit if it detects a secret pattern. Hermes can set this up: 'Add gitleaks pre-commit hook to my homelab-stacks repo.'\nWeekly automated audit\nSchedule as a Hermes cron: every Sunday, run gitleaks on all four homelab repos and report any new findings. Catches credentials added during the week before they have been pushed to Gitea for long."
            },
            {
                "type": "p",
                "content": "Commit Message Convention\nSmall thing, high value. A consistent commit message format makes Hermes's weekly dev review ('what did I change this week?') much more useful:"
            },
            {
                "type": "p",
                "content": "Format\n[service] action: description \u2014 e.g., [immich] add: thumbnail regeneration cron | [proxmox] fix: network bridge config after update | [n8n] update: DOB scraper to use Open Data v2 API\nWhy it matters\nWhen Hermes queries git log for the weekly review, it can parse [service] tags and group changes by service area. 'Here is everything you changed in your media stack this week' becomes a useful report rather than a raw list of commit messages.\nEnforcing it\nAdd a commit-msg git hook that validates the format. Hermes can generate the hook: 'Create a git commit-msg hook that enforces [service] prefix format for my homelab repos.'"
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
                "type": "p",
                "content": "The Keep-in-Cloud List\nService\nWhy not to self-host\nWhat to use instead\nMonthly cost\nEmail (sending and receiving)\nMail server reputation is a months-long project to establish. A residential IP is almost certainly on spam blocklists before you even send your first email. SPF, DKIM, DMARC, PTR records, bounce handling, spam filtering \u2014 the operational burden is genuinely professional-grade. One misconfiguration and your family stops receiving email.\nFastmail ($3/mo per user) or Proton Mail ($4/mo). For transactional email (server alerts, app notifications), use Resend or SendGrid free tier.\n$3\u20138/month \u2014 worth every cent\nSMS / cellular notifications\nRequires a carrier account, phone number provisioning, and carrier-specific APIs. Self-hosted SMS is legally complicated (carrier ToS). Not feasible for a residential homelab.\nTwilio (pay-per-message, fractions of a cent) or just use ntfy/Telegram which are free and better.\n~$0 \u2014 just use Telegram\nCDN for public websites\nSelf-hosting a CDN requires servers in multiple geographic regions. If you are serving a public-facing website with global users, a residential connection cannot provide the latency or reliability of a real CDN edge network.\nCloudflare free tier \u2014 unlimited bandwidth, 200+ edge locations, DDoS protection, free. For anything going to the public internet, put it behind Cloudflare.\nFree\nPayment processing\nPCI DSS compliance for handling card data requires quarterly security scans, annual audits, and specific infrastructure controls. You cannot self-host a card processor from a home server.\nStripe \u2014 industry standard, excellent API, reasonable fees. Never attempt to process card data on your homelab.\n2.9% + $0.30 per transaction \u2014 unavoidable\nCertificate Authority\nRunning your own CA for public domains is not trusted by browsers. Let's Encrypt (via Certbot or Nginx Proxy Manager) is the right answer for internal and external certs.\nLet's Encrypt via Nginx Proxy Manager or Certbot \u2014 free, automated, globally trusted.\nFree\nPublic DDoS-resilient services\nA residential internet connection has no DDoS mitigation. A large enough attack (even a moderate one) will saturate your connection and take down your ISP's equipment management.\nAny service you expose publicly should be behind Pangolin or Cloudflare Tunnels. Your home IP should never be the endpoint that absorbs attacks.\nFree (Pangolin VPS ~$4/mo)\nAnything requiring 99.9%+ uptime\nYour home internet goes down. Your power goes down. Your UPS has finite runtime. NYC infrastructure is reliable but not carrier-grade. For any service where a 4-hour outage is unacceptable to real users (not family), self-hosting is the wrong choice.\nCloud hosting for critical services: Fly.io, Railway, Render \u2014 free tiers available. Keep your homelab as the backend; use cloud for the public-facing layer if uptime matters.\n$0\u201320/month depending on traffic\nApple iCloud features (Handoff, AirDrop, etc.)\nThese require Apple's private relay infrastructure. You can replace iCloud Photos (Immich) and iCloud Drive (Syncthing + Nextcloud) but not the protocol-level device integration features.\nKeep iCloud at the lowest paid tier ($0.99/month) for device ecosystem features. Replace storage with Immich and Syncthing.\n$0.99/month\nGoogle Maps / navigation\nSelf-hosted maps (OpenStreetMap + Nominatim + routing) exist and are excellent for static viewing. Real-time traffic, turn-by-turn navigation with live updates, and transit routing at NYC's complexity are genuinely difficult to replicate.\nGoogle Maps or Apple Maps. OpenStreetMap-based apps (OsmAnd, Organic Maps) for privacy-respecting navigation without real-time traffic.\nFree"
            },
            {
                "type": "p",
                "content": "The Nuanced Cases \u2014 Worth Evaluating\nService\nSelf-host if\u2026\nKeep in cloud if\u2026\nGitHub / GitLab\nYou have private repos with sensitive code, you want to own the CI infrastructure, or you want to avoid GitHub's TOS on certain projects.\nYou want public repo discoverability, GitHub Actions ecosystem, or you collaborate with people who cannot access your Gitea.\nVideo conferencing (Jitsi Meet)\nYou need private family video calls without Zoom data collection. Self-hosted Jitsi works well for small groups (2\u20138 people).\nYou regularly have calls with more than 8 people, or you need reliable mobile performance. Jitsi on residential hardware degrades under load.\nCloud storage (Dropbox/Google Drive)\nYou have replaced it with Syncthing + Immich + Nextcloud and everyone in the family uses the self-hosted version reliably.\nAnyone in the family relies on the seamless desktop client integration that Syncthing cannot replicate (real-time selective sync, shared public links with edit access).\nPassword manager (Bitwarden/1Password)\nVaultwarden with off-site backup and a tested restore procedure. You understand the risk: if the server dies and the backup is corrupt, your family loses all passwords simultaneously.\nIf any family member is not technical enough to understand the implications of the backup dependency, keep a cloud-hosted password manager.\nVPN (commercial)\nYou do not need a commercial VPN if you have Tailscale + Pangolin \u2014 you have built your own equivalent or better.\nIf you need a VPN specifically for content geo-unlocking (Netflix regions, etc.) \u2014 residential VPN from a different country. Mullvad or ProtonVPN for this specific use case."
            },
            {
                "type": "p",
                "content": "THE HONEST SUMMARY: Self-hosting is best for: storage, media, notes, productivity tools, home automation, and any internal tool where you are the user. Self-hosting is wrong for: anything customer-facing requiring real uptime SLAs, email infrastructure, payment processing, and anything where a 4-hour outage affects people who did not choose to depend on your homelab."
            }
        ]
    },
    {
        "id": "language-learning-with-your-homelab",
        "title": "Language Learning with Your Homelab",
        "elements": [
            {
                "type": "p",
                "content": "The homelab infrastructure you are building is unexpectedly good for language learning \u2014 specifically because of three things already in this plan: Whisper for speech transcription, the subtitle pipeline for Jellyfin, and Hermes with persistent memory and a dedicated profile. This section describes how to use them together as a language learning system that adapts to you and improves with use."
            },
            {
                "type": "p",
                "content": "Why This Is Different From Apps\nDuolingo and similar apps give you: gamified repetition, fixed curriculum, generic feedback. What they cannot give you is a conversation partner who: remembers every error you made last Tuesday, knows your specific weak points from your specific history, generates reading material about topics you already care about (your homelab, NYC, your family context), and never judges or gets impatient. Hermes does all of these. The infrastructure cost is the OpenRouter API spend, which is under $2/month for a daily 20-minute session at Claude Haiku rates."
            },
            {
                "type": "p",
                "content": "The Hermes Language Partner (Mandarin Focus)\nUse the language learning SOUL.md profile from the Hermes deep section. Here is how sessions actually work:"
            },
            {
                "type": "p",
                "content": "Session type\nHow to start\nWhat Hermes does\nBest frequency\nFree conversation\n'\u5f00\u59cb\u5bf9\u8bdd\u7ec3\u4e60' (Start conversation practice)\nPicks a topic from your life (the homelab, NYC news, family), conducts a conversation in Mandarin, corrects errors inline with explanation, tracks new errors in memory\nDaily, 10\u201320 minutes\nGrammar focus\n'\u6211\u60f3\u7ec3\u4e60\u628a\u5b57\u53e5' (I want to practice the ba-construction)\nExplains the pattern, gives you 5 example sentences to complete, corrects your answers, provides 3 original sentences for you to translate\n2\u20133x per week, 15 minutes\nVocabulary review\n'\u590d\u4e60\u4e0a\u5468\u7684\u8bcd\u6c47' (Review last week's vocabulary)\nLoads vocabulary from memory (words flagged in past sessions), tests you in context sentences rather than flashcard format, retires words you get right 3 times in a row\nWeekly, 10 minutes\nReading practice\nPaste a Chinese article or have Hermes fetch one\nHermes reads it, removes words above your level, gives you the simplified version with difficult words in context, asks comprehension questions\n2\u20133x per week, 20 minutes\nTone drill\n'\u58f0\u8c03\u7ec3\u4e60' (Tone practice)\nHermes gives you 10 words in pinyin only, you write the tones (1/2/3/4), Hermes corrects and explains. Low tech but effective.\nWeekly, 10 minutes"
            },
            {
                "type": "p",
                "content": "Speaking Practice with Whisper\nThe Whisper pipeline already in the plan transcribes audio. With a USB microphone (already in the accessories list), you can create a speaking practice loop entirely on your homelab:"
            },
            {
                "type": "p",
                "content": "How it works\nRecord yourself speaking Mandarin (any topic) \u2192 Whisper transcribes the audio to text \u2192 send the transcript to Hermes with the prompt 'This is what I said in Mandarin. Identify any tone marking errors (context), grammar mistakes, and unnatural phrasing. Show me the corrected version.'\nWhat Whisper gets right\nWhisper is trained on Mandarin and handles tones surprisingly well in transcription. It will often transcribe the wrong character when you get a tone wrong \u2014 which is actually useful feedback. If you say ma with the wrong tone and Whisper writes a completely different character, that tells you something about how you are being heard.\nLimitations\nWhisper cannot tell you your tones are wrong if the wrong tone still produces a valid word in context. For tone correction, pairing Whisper transcription with a Hermes review of what you meant to say vs what was transcribed is more useful than Whisper alone.\nSetup for Stage 1 (CPU-only)\nWhisper tiny or Whisper base runs on the Mini PC CPU. Processing a 2-minute recording takes 30\u201360 seconds \u2014 slow but usable for post-session review, not real-time. For real-time, use Stage 4 with GPU.\nSetup for Stage 4 (GPU)\nWhisper large-v3 via Faster-Whisper on the tower GPU processes 2 minutes of audio in under 5 seconds. Near-real-time feedback is possible."
            },
            {
                "type": "p",
                "content": "Jellyfin Subtitle Flip: Immersive Listening\nYour Jellyfin library already contains Chinese content (for parents) and English content with Chinese subtitles (from the Bazarr pipeline). The subtitle configuration is the most underused language learning tool in the entire plan:"
            },
            {
                "type": "p",
                "content": "Method\nHow to configure in Jellyfin\nLearning mode\nLevel appropriate for\nChinese audio + English subtitles\nSelect Chinese audio track, English subtitle track. Available automatically for Chinese content in your library.\nComprehensible input \u2014 hear natural Chinese while reading meaning in English. Brain maps sounds to meaning without translation stress.\nBeginner to intermediate \u2014 listening to Chinese you cannot fully understand yet\nChinese audio + Chinese subtitles\nSelect Chinese audio and Chinese subtitle track. Generate Chinese subs via Bazarr if not present.\nListening + reading simultaneously \u2014 reinforces character recognition while hearing pronunciation\nIntermediate \u2014 you can read characters but need audio reinforcement\nEnglish audio + Chinese subtitles\nSelect English audio, Chinese subtitle track generated by your translation pipeline.\nReading Chinese at natural speed \u2014 the audio tells you the meaning if you get stuck on a character\nIntermediate to advanced \u2014 tests reading fluency under time pressure\nEnglish audio + no subtitles, then add Chinese subs on rewatch\nWatch once for comprehension, rewatch key scenes with Chinese subtitles\nPost-comprehension analysis \u2014 understand the meaning first, then see how to express it in Chinese\nAdvanced \u2014 you already know the content well enough to focus on the Chinese expression"
            },
            {
                "type": "p",
                "content": "Custom Reading Material Generated From What You Care About\nThe most effective reading material is content you are already interested in. Generic language learning apps give you generic content. Hermes generates reading material about your actual life:"
            },
            {
                "type": "list",
                "items": [
                    "'Write me a short paragraph in Mandarin about setting up a ZFS storage pool. Use vocabulary appropriate for HSK 3 level. Include a glossary of technical terms with pinyin and English translation at the bottom.'",
                    "'Translate this section of my HomeAssistant documentation into Mandarin at an intermediate level. Simplify any technical concepts that would be unfamiliar to someone who does not know English tech terminology.'",
                    "'Generate a 200-character story about a family living in a NYC apartment building. Use past tense throughout, which I am practicing. Include 5 new vocabulary words with context clues.'",
                    "'Create a mock conversation in Mandarin between a landlord and tenant about a maintenance request. Use formal register throughout. This is for reading practice \u2014 make it realistic and natural.'"
                ]
            },
            {
                "type": "p",
                "content": "Vocabulary: Anki Sync Server (Already in Plan) + Hermes Integration\nAnki sync server\nanki-sync-server Docker container syncs your Anki decks across devices. Your cards are on your server, not AnkiWeb's servers. Existing functionality already mentioned in the plan.\nHermes card generation\n'Generate 10 Anki cards for the vocabulary I got wrong in today's session.' Hermes outputs in Anki's import format (tab-separated): front | back | example sentence | tags. Import directly.\nAuto-deck from Jellyfin subtitles\nn8n workflow: extract Chinese subtitle files from a watched episode \u2192 run through a frequency analysis script \u2192 identify words not yet in your Anki deck \u2192 generate cards for the top 10 unknown words. Watching a Chinese drama automatically builds your vocabulary deck.\nSentence mining\nThe most effective Anki method for language learning. Instead of word-only cards: one card = one sentence from a real source (subtitle, article, Hermes conversation) where you encountered an unknown word. Context is part of the card."
            },
            {
                "type": "p",
                "content": "Tracking Progress Over Time\n    \u2022 Hermes memory stores your error history across sessions. Every month: 'Give me a summary of my Mandarin progress this month \u2014 errors I've stopped making, patterns I'm still struggling with, and one specific focus for next month.'\n    \u2022 SilverBullet language learning note: one note per month with HSK-approximate level, active weak points, vocabulary count reached, and a sample of a Mandarin paragraph you wrote that month. Reading it back in 6 months is genuinely motivating.\n    \u2022 The Anki deck size is a concrete metric. When your deck hits 1,000 mature cards (seen and remembered correctly multiple times), you have real intermediate vocabulary. Hermes can report your mature card count weekly."
            }
        ]
    }

];
