# Lab Infrastructure Modernization

## 🌐 Overview
Migration of legacy standalone services into a unified, containerized ecosystem managed via Proxmox and Docker.

## 🏗️ Architecture
* **Hypervisor:** Proxmox VE
* **Network Control:** UniFi Ultra Ecosystem
* **Segmentation:** 802.1Q VLAN isolation (Management, IoT, Production)
* **Reverse Proxy:** Nginx Proxy Manager with Cloudflare SSL integration

## 🛠️ Implementation
The transition focused on move-in readiness and high availability. By utilizing Docker Compose, the entire portfolio stack (including this documentation site) is version-controlled and easily reproducible.

### Key Milestones:
* Standardized internal DNS resolution.
* Implemented persistent volume mapping to prevent data loss.
* Established "Stealth" UI theme via custom CSS overrides.
