# Infrastructure Migration: Mixed-Vendor to UniFi Stack

!!! success "Project Goal"
    Migrating from a fragmented, mixed-vendor hardware stack to a unified **Ubiquiti UniFi** ecosystem to improve network visibility, VLAN management, and hardware reliability.

### The Modernization Path
* **The "Before":** A mixed-stack environment (diverse consumer-grade and managed hardware) with decentralized management.
* **The "After":** A standardized Ubiquiti stack controlled via a central UniFi Controller, allowing for granular traffic analysis and 802.1Q VLAN tagging.

### Current Implementation Specs:
* **Console:** [e.g., UDM Pro / Cloud Gateway Max] - Centralized SDN Management.
* **Switching:** [e.g., USW-Lite-16-PoE] - Powering access points and Docker hosts.
* **Security:** Implementing firewall rules to isolate the **Docker/Web DMZ** from the **Management** and **IoT** segments.

---

### Why Ubiquiti?
Standardizing on a single vendor allowed for:
1.  **Unified Management:** Single pane of glass for all L2/L3 operations.
2.  **VLAN Transparency:** Seamless tagging across the entire trunk from the gateway to the Docker bridge networks.
3.  **Proactive Monitoring:** Real-time throughput and latency tracking for Mas Wild Labs services.