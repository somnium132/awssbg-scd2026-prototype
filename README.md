# AWS Student Community Day: South Summit 2026

![AWS Student Builder Groups](awssbg-logo.svg)

**AWS Student Community Day – South Summit 2026** is the official web portal for the event hosted by the **AWS Student Builder Groups – CALABARZON** (South Luzon, Philippines). The site provides event information, a branded Amazon Q chatbot assistant, and a lightweight, zero‑build deployment pipeline.

---

## 📖 Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Quick Start (Local Development)](#quick-start-local-development)
- [Project Structure](#project-structure)
- [Documentation Hub](#documentation-hub)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

---

## Overview

The portal showcases a modern, responsive UI built with vanilla HTML, CSS, and ES‑Modules. It includes a **theme toggle** with a custom Sun/Moon icon set, a **floating Amazon Q assistant** rendered as a circular button, and a full set of design tokens that keep the look consistent across Light and Dark modes.

---

## Features

- **Dynamic Light/Dark Theme** – CSS‑variables driven, persisted via `localStorage`.
- **Custom Theme Toggle** – 58 × 32 px sliding pill with mathematically‑precise Sun and Moon SVG icons.
- **Amazon Q Chatbot** – 56 px circular button, dual‑theme support, floating‑card UI.
- **Responsive Layout** – Fluid spacing, glass‑morphism cards, and mobile‑friendly navigation.
- **Zero‑Build Deployment** – Works directly on GitHub Pages – no bundlers required.

---

## Tech Stack

- **HTML5** – Semantic markup and SVG symbol definitions.
- **CSS3** – Custom properties, transitions, and the Cyber‑Pill switch.
- **JavaScript (ES Modules)** – Modular UI logic, data layer, and routing.
- **GitHub Pages** – Static site hosting.

---

## Quick Start (Local Development)

Because the project relies on native ES Modules, you need a local HTTP server:

```bash
# Option 1 – Python built‑in server
python -m http.server 8000

# Option 2 – Node.js serve utility
npx serve .
```

Open `http://localhost:8000` (or the port shown by the server) in your browser.

---

## Project Structure

```
AWS SCD SUMMIT/
- 📘 **[docs/FRAMEWORK_GUIDE.md](./docs/FRAMEWORK_GUIDE.md)**: Modular architecture guide and content updating instructions for non-technical team leads.
- 📋 **[docs/EVENT_GUIDELINES.md](./docs/EVENT_GUIDELINES.md)**: Official event planning guidelines, departmental deliverables, and timeline milestones.
- 📜 **[CHANGELOG.md](./CHANGELOG.md)**: Version history tracking all incremental updates after every developer prompt.

---

## 🚀 Deployment

The site is configured for zero-build deployment via **GitHub Pages**:
1. Keep `index.html` in the root folder.
2. Use relative paths for all assets (`assets/js/...`, `./theme.css`).
3. Changes pushed to the `main` branch immediately deploy live.

---

## 📄 License

This repository is licensed under the [MIT License](./LICENSE).

---
*Organized by AWS Student Builder Groups — CALABARZON*  
*Event Date: October 7, 2026*
