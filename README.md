# WiztecBD Frontend Task

This project is structured using **Next.js** with a clean separation of concerns for easy maintainability and scalability. Below is an overview of the file/folder organization and how assets and components are managed.

---

## Project Structure

### **1. `public/`**

Contains all static assets like fonts, icons, and images.

* **Fonts:** Custom fonts used across the project (`Blauer-Nue.otf`).
* **Icons:** Organized into subfolders by purpose:

  * `auth/` – Authentication-related icons (Google, Apple, eye, phone, etc.)
  * `common/` – Common UI icons (arrows, logo, reset, tick, etc.)
  * `courses/` – Course-related icons (brokerage, coaching, events, etc.)
  * `footer/` – Footer icons
  * `nav/` – Navigation icons (profile, favorite)
  * `org/` – Organization-related icons
  * `tools/` – Tool icons (arrows, icons 1–8)
* **Images:** Organized into functional groups:

  * `login.svg` – Login page image
  * `property/` – Images for property listings

    * Includes `modal/` images for popups
  * `testimonial/` – Images for testimonial section

### **2. `app/`**

Contains all Next.js application pages, layouts, and global styles.

* `auth/` – Authentication pages and layout

  * `login/page.tsx` → Route: `/auth/login`
  * `register/page.tsx` → Route: `/auth/register`
  * `layout.tsx` – Layout wrapper for auth pages
* Global assets:

  * `favicon.ico` – Site favicon
  * `globals.css` – Global CSS styles
* Root pages:

  * `layout.tsx` – Root layout managing Navbar, Footer, and metadata
  * `page.tsx` → Route: `/` (home page)

### **3. `layout/`**

Contains reusable layout components.

* `Container.tsx` – Generic container component used for layout consistency

### **4. `hooks/`**

(Hooks folder exists for future custom hooks, currently empty or with project-specific hooks)

---

## Routes Overview

The project currently has **3 main routes**:

| Route            | Page/File                    |
| ---------------- | ---------------------------- |
| `/`              | `app/page.tsx`               |
| `/auth/login`    | `app/auth/login/page.tsx`    |
| `/auth/register` | `app/auth/register/page.tsx` |

---

## Metadata & Global Imports

Root layout imports essential components and global styles:

```ts
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import "keen-slider/keen-slider.min.css";
import "@smastrom/react-rating/style.css";

export const metadata: Metadata = { ... };
```

* **Navbar & Footer** are included in the root layout to ensure consistency across all pages.
* **Global CSS** and external library CSS are imported for site-wide usage.

---

## Notes on Fonts & Colors

* Multiple fonts are included
* Custom color palettes are partially managed per component due to multiple color variations across sections.
* If the project had fewer fonts/colors, it would be fully manageable with a single global palette.
* could use rer-usable icon components

---

This structure ensures:

1. **Scalability:** Easy to add new pages, components, or assets.
2. **Maintainability:** Clear separation of static assets, app pages, and reusable layouts.
3. **Readability:** Logical folder organization for quick navigation and developer onboarding.

---

**Project URL:** [https://wiztech-six.vercel.app](https://wiztech-six.vercel.app)

