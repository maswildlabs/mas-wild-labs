# Network Design & Segmentation (Logical)

!!! abstract "Executive Summary"
    The Mas Wild Labs network architecture utilizes a **Multi-Tiered Security Model**. By segmenting traffic into dedicated Virtual LANs (VLANs), employing a structured IP addressing scheme, and maintaining strict port hygiene, I’ve ensured the environment is secure, scalable, and deterministic.

### 🗺️ Logical Segmentation (VLAN Map)
Traffic is partitioned using the following schema to maintain a high security posture:

* **VLAN 10 (TRUSTED):** The core secure tier reserved for primary administrative access, core infrastructure management, and wired hosts.
* **VLAN 20 (WIRELESS):** A unified segment for wireless clients. "Chatty" IoT/Legacy devices are isolated to a **dedicated 2.4GHz lane**, preserving the 5GHz band for high-throughput clients.
* **VLAN 30 (LAB):** The production environment for Mas Wild Labs, hosting the Dockerized infrastructure and web services.
* **VLAN 99 (SANDBOX):** A strictly isolated "Exploration" zone for testing unstable configurations or new software.

### 🔢 Structured Addressing & Port Hygiene
To streamline management and minimize the attack surface, I have implemented the following standards:

1. **Odd/Even IP Logic:** * **ODD (.1, .3, .5):** Infrastructure & Hardware (Gateways, Switches, Docker Hosts).
    * **EVEN (.2, .4, .6):** Client Devices & Services (Workstations, Containers).
2. **Physical Port Hygiene:** * **Administrative Lockout:** All unused physical ports on Ubiquiti switches are set to "Disabled" to prevent unauthorized "plug-and-play" access.
    * **Profile Assignment:** Active ports are hard-coded to specific VLAN profiles; any device moving between ports will fail to handshake unless manually re-provisioned in the UniFi Controller.

### 🔒 Traffic Engineering
* **Spectral Isolation:** 2.4GHz shunting minimizes interference for high-priority 5GHz wireless clients.
* **Stateful Firewalling:** Inter-VLAN routing is restricted via "Established/Related" rules, protecting the Trusted (VLAN 10) tier from the Sandbox.
* **Deterministic Identification:** The combination of VLAN tagging and odd/even numbering allows for instantaneous identification of traffic sources during log analysis.

### 💡 Why This Logic Matters
Standardizing on a **Ubiquiti stack** allows for enterprise-grade oversight. By combining logical segmentation with physical port hygiene, Mas Wild Labs operates under the principle of **Least Privilege**, ensuring that a compromise at the edge cannot penetrate the core infrastructure.