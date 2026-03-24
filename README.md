# 🌐 NovaEco Public Portal (Website)

![Component ID](https://img.shields.io/badge/ID-WEBSITE-orange)
![Layer](https://img.shields.io/badge/Layer-Client-blue)
![Type](https://img.shields.io/badge/Type-Docusaurus-green)

> **The Public Face of the Digital Commons.**
> A unified developer hub and documentation portal for the NovaEco Digital Public Infrastructure.

## 📖 Overview

The **NovaEco Website** is the educational and community portal for the ecosystem. It serves as the primary Knowledge Aggregator, unifying distinct documentation streams (User Guides, API Specs, Architectural Decisions) into a single, searchable Static Site. This ensures that municipal partners, researchers, and open-source developers fully understand the underlying architecture and can easily integrate with the platform.

This component is a Static Site Generator (SSG) built on Docusaurus (React). It compiles Markdown content into highly optimized HTML/JS bundles.

* **Role:** Developer Portal, Ecosystem Education, & API Reference.
* **Input:** Markdown (`.mdx`) & OpenAPI Specs (`.json`).
* **Output:** Static HTML (deployed to cloud storage or GitHub Pages).

---

## ⚠️ Architectural Migration Notice (V2)

**This repository is part of the NovaEco v2 Polyrepo Architecture.**
Active development and migration from the legacy v1 prototype into this dedicated infrastructure component is scheduled for **Q2/Q3 2026**. 

---

## 🌟 Key Capabilities (Target Architecture)

### 1. Unified Knowledge Base
It bridges the gap between different ecosystem personas:
* **Municipalities & Enterprises:** "How to enroll IoT sensors" (User Guides).
* **Developers:** "How to use the Python SDK" (Developer Docs).
* **System Architects:** "Event Bus Protocol Specification" (Institutional Docs).

### 2. Automated API Documentation (Swagger)
The portal renders the OpenAPI Specification produced natively by the `novaeco-gateway`. By fetching the `openapi.json` at build time, it ensures the public developer documentation never drifts from the actual code deployed in Production.

### 3. SEO & Performance
Being a static site, it offers sub-second load times and perfect indexability for search engines, which is critical for open-source user acquisition and community growth.

### 4. Versioned Documentation
The portal supports strict semantic versioning (e.g., `v1.0` vs `v2.0`). Developers and integrators can switch between documentation versions to perfectly match the API version they are currently integrating with.

---

## 🤝 Contributing

We welcome contributors to help build the open-source infrastructure for the circular economy. 

Please see the central [**NovaEco Organization README**](https://github.com/novaeco-tech) for our overall contribution guidelines, Code of Conduct, and ecosystem roadmap.

## 📄 License

This project is licensed under the **Apache License 2.0**. See the [LICENSE](LICENSE) file for details.
