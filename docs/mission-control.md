# NovaAdmin: Mission Control

**NovaAdmin** (`admin.novaeco.tech`) is the central launchpad and unified dashboard for your organization's circular economy operations. 

Because NovaEco uses a **Federated UI Architecture**, you do not need to log into ten different websites. NovaAdmin stitches together the interfaces of every Vertical Sector and Horizontal Enabler into a single, cohesive workspace.

## The Launchpad
Once authenticated via `id.novaeco.tech` (Keycloak), you will land on the Mission Control grid. Based on your Role-Based Access Control (RBAC) permissions, you can instantly launch:
* **NovaTrade Terminal:** To buy or sell secondary raw materials.
* **UrbanMiner Dashboard:** To view city-wide material heatmaps.
* **NovaBalance Auditor:** To view real-time Scope 1, 2, and 3 emissions.

## Cross-Sector Data Aggregation
NovaAdmin provides "God Mode" visibility for sustainability officers. The dashboard aggregates data streams from decoupled background workers:
* View live CO₂ reduction metrics pulled from the `LCACalc` worker.
* Monitor incoming IoT alerts routed through the `NovaInfra` telemetry firehose.
* Review pending compliance blockers flagged by `NovaPolicy`.

## Team & Tenant Management
Large enterprises and municipalities can manage their internal structures directly in NovaAdmin:
* Invite team members and assign strict scopes (e.g., granting the Logistics team access to `NovaLogistics`, while restricting `NovaFin` ledger access to the Finance team).
* Manage corporate Trust Profiles and upload institutional certifications for ecosystem verification.