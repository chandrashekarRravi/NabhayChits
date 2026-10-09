# EXISTING_PROJECT_EXTRACTION_REPORT

## 1. Executive Summary

This project is a React-based frontend web application built using Vite, TypeScript, Tailwind CSS, and shadcn/ui components. It serves as a promotional and informational website for a rural banking/trust organization ("Sri Basaveshwara Graminabhirudhi Trust (R.)"). The site features multiple pages detailing services, a contact form, and localization support for English and Kannada. There is currently no active backend or database integrated into the codebase; all data and content are either managed via a local translation context or hardcoded in component files.

## 2. Technology Stack

*   **Framework**: React (v18)
*   **Build Tool**: Vite
*   **Language**: TypeScript
*   **Styling**: Tailwind CSS
*   **UI Components**: shadcn/ui (built on top of Radix UI primitives)
*   **Icons**: lucide-react
*   **Routing**: react-router-dom (v6)
*   **Form Management**: react-hook-form (with zod resolvers)
*   **State Management/Data Fetching**: @tanstack/react-query (configured but not heavily utilized as there is no backend)
*   **Animations**: tailwindcss-animate
*   **Toast Notifications**: sonner / Radix Toast

## 3. Project Structure

*   `public/`: Static assets (`SBGA.png`, `placeholder.svg`, `robots.txt`)
*   `src/`: Application source code
    *   `components/`: Reusable React components
        *   `home/`: Page sections for the Index/Home page (Hero, About, Services, Features, Testimonials, CTA)
        *   `layout/`: Core layout components (`Header.tsx`, `Footer.tsx`)
        *   `ui/`: Base UI components from shadcn/ui (Button, Card, Input, Sheet, etc.)
    *   `contexts/`: Global state contexts (specifically `LanguageContext.tsx`)
    *   `hooks/`: Custom React hooks (e.g., `use-mobile.tsx`, `use-toast.ts`)
    *   `lib/`: Utility functions (`utils.ts` for Tailwind class merging)
    *   `pages/`: Route-level components
        *   `services/`: Individual service pages (Rural Loans, Microfinance, Construction Support, Pigmy Collection)
        *   `Index.tsx`: Home page
        *   `Services.tsx`: Services listing page
        *   `Contact.tsx`: Contact form and branches
        *   `NotFound.tsx`: 404 page
    *   `App.tsx`: Main application wrapper and router definition
    *   `main.tsx`: React entry point

## 4. Pages & Routes

1.  **Home Page** (`/`): Managed by `Index.tsx`. An aggregation of various section components (`HeroSection`, `AboutSection`, `ServicesSection`, `FeaturesSection`, `TestimonialsSection`, `CTASection`).
2.  **Services Page** (`/services`): Managed by `Services.tsx`. Lists all available financial services.
3.  **Rural Loans** (`/services/rural-loans`): Specific service detail page.
4.  **Microfinance** (`/services/microfinance`): Specific service detail page.
5.  **Construction Support** (`/services/construction-support`): Specific service detail page.
6.  **Pigmy Collection** (`/services/pigmy-collection`): Specific service detail page.
7.  **Contact Page** (`/contact`): Contains a contact form and branch locations.
8.  **Not Found** (`*`): 404 error page.

## 5. Page-by-Page Content

### Home Page (`/`)
*   **Purpose**: Main landing page to introduce the Trust and funnel users to services.
*   **Sections**: Header, Hero (Value prop and primary CTA), About (Brief history and core values), Services (Overview of 4 main services), Features (Why choose us), Testimonials, CTA (Call to action to open an account), Footer.
*   **Dynamic vs Static**: Primarily static, though content is injected dynamically via the `LanguageContext`.

### Contact Page (`/contact`)
*   **Purpose**: To allow users to send messages and find branch locations.
*   **Sections**: Contact Form (Name, Email, Phone, Subject, Message), Branch Information (Head Office, Hassan, Mandya).
*   **Dynamic vs Static**: Form state is managed dynamically, but submission is currently mocked (shows a toast notification). Branch data is hardcoded in the file.

### Service Detail Pages (e.g., `/services/rural-loans`)
*   **Purpose**: Provide in-depth information about a specific financial product.
*   **Sections**: Hero (Service title and description), Features list, Eligibility list, CTA.
*   **Dynamic vs Static**: Features and eligibility criteria are hardcoded arrays within each respective file, blending plain strings with translation keys.

## 6. UI/UX Structure

*   **Design System**: Custom-themed shadcn/ui implementation.
*   **Colors**:
    *   Primary text/brand: Navy Blue (`#1f3759`)
    *   Secondary brand/accents: Deep Red (`#960f1e`)
    *   Backgrounds: Cream/Off-white (`#dfdcd3`)
*   **Typography**: Uses 'Montserrat' for headings and primary UI elements, and 'Anek_Kannada' for body text (likely to support Kannada script gracefully).
*   **Header/Navbar**: Sticky navigation bar. Includes logo, desktop links, language toggle (EN/KN), and a "Get Started" button. Mobile utilizes a right-side slide-out `Sheet` (hamburger menu).
*   **Footer**: Contains organizational info, links to services, legal links, and registration details.
*   **Responsive Behavior**: Relies heavily on Tailwind's `sm:`, `md:`, and `lg:` breakpoints. Layouts shift from stacked (mobile) to side-by-side or grid arrangements (desktop).

## 7. Components

*   **Core UI (`src/components/ui/*`)**: Standard shadcn components (Button, Input, Form, Sheet, DropdownMenu, Toast, etc.).
*   **Layout (`Header.tsx`, `Footer.tsx`)**: Reusable structural components used on every page.
*   **Home Sections (`src/components/home/*`)**: Modularized sections for the landing page to keep `Index.tsx` clean.

## 8. Existing Content Inventory

Most content exists in a bilingual format (English and Kannada).

*   **Brand**: Sri Basaveshwara Graminabhirudhi Trust (R.)
*   **Tagline**: Empowering Rural Growth Through Financial Trust / Trusted Since 1995.
*   **Services Offered**:
    *   Rural Loans (Special plans with 50% advance, No Cost EMI)
    *   Microfinance / Site Loans
    *   Construction Loans (Up to ₹15 Lakhs)
    *   Pigmy Collection (Daily savings from ₹10/day)
*   **Branches**:
    *   Head Office (123 Main Street, Rural District)
    *   Hassan Branch
    *   Mandya Branch
*   **Trust/Legal Details**: Registered under the Indian Trusts Act. License No: SBGT/2024/1234.

## 9. Code-to-Content Mapping

| Content | Current Value / Example | File | Component/Location | Replace Later? |
| :--- | :--- | :--- | :--- | :--- |
| **All Primary Text** | Headings, paragraphs, button labels, nav links, footer links | `src/contexts/LanguageContext.tsx` | `translations` object (en/kn keys) | **YES** |
| **Branch Locations** | "Head Office", "Hassan Branch", "Mandya Branch" and their addresses/phone numbers | `src/pages/Contact.tsx` | `branches` array | **YES** |
| **Pigmy Eligibility** | "Age: 18+ years", "Valid ID proof..." | `src/pages/services/PigmyCollection.tsx` | `eligibility` array | **YES** |
| **Pigmy Features** | "Flexible Saving Amounts", "Safe and Secure..." | `src/pages/services/PigmyCollection.tsx` | `features` array | **YES** |
| **Rural Loans Features** | "Interest from 9% p.a.", "Loan amount up to ₹10 lakhs" | `src/pages/services/RuralLoans.tsx` | `features` array | **YES** |
| **Microfinance/Construction Content** | Similar feature/eligibility lists | Respective files in `src/pages/services/` | Local arrays | **YES** |
| **Logos/Images** | `SBGA.png` | `public/` directory | Referenced in `Header.tsx` etc. | **YES** |

## 10. Functionality & Workflows

*   **Language Toggle**:
    *   *Trigger*: Clicking the "English/ಕನ್ನಡ" button in the Header.
    *   *Frontend Action*: Updates state in `LanguageContext.tsx` and saves choice to `localStorage`. Triggers a re-render providing new text values.
*   **Contact Form Submission**:
    *   *Trigger*: Clicking "Send Message" in `Contact.tsx`.
    *   *Frontend Action*: Validates input, prevents default submission, simulates a network delay (timeout), and shows a success Toast notification.
    *   *Result*: Clears the form. (No actual email is sent).
*   **Navigation**:
    *   *Trigger*: Clicking links in Header/Footer.
    *   *Frontend Action*: `react-router-dom` intercepts and loads the corresponding view component without a full page refresh.

## 11. Backend/API

*   **Status**: None. The application is entirely client-side.
*   **External Integrations**: None explicitly active. `react-query` is installed but not fetching from a live remote API.

## 12. Database

*   **Status**: None. No database configurations, schemas, or ORMs are present in the codebase. All data is static.

## 13. Assets

*   `public/SBGA.png` (Main Logo)
*   `public/SBGA_F.png` (Alternate Logo / Favicon)
*   `public/placeholder.svg` (Generic placeholder)
*   `public/robots.txt` (Basic SEO instructions)

## 14. SEO

*   **Robots.txt**: Present in `public/`.
*   **Meta Tags**: Not deeply implemented at the route level (no `react-helmet` or similar library found for dynamic meta tags per page).
*   **Sitemap**: Not present.
*   **Semantic HTML**: Uses proper semantic tags (`<header>`, `<main>`, `<section>`, `<nav>`).

## 15. Responsive/Mobile

*   **Navigation**: The desktop header navigation links collapse into a Hamburger menu that triggers a `Sheet` (slide-out drawer from the right) on smaller screens.
*   **Breakpoints**: Standard Tailwind breakpoints (`sm`, `md`, `lg`, `xl`).
*   **Layout Adjustments**: Heavy use of `flex-col` on mobile switching to `flex-row` or `grid-cols-2` on desktop (e.g., in Hero and About sections).

## 16. Configuration & Deployment

*   **Vite Config**: Standard `vite.config.ts` (assumed based on standard Vite/React scaffolding).
*   **Scripts**:
    *   `npm run dev`: Starts local dev server.
    *   `npm run build`: Compiles for production.
    *   `npm run lint`: Runs ESLint.
*   **Deployment**: Standard static site deployment compatible with Vercel, Netlify, or GitHub Pages (note: `gh-pages` is listed in dependencies).

## 17. Dependencies

*   **Core**: `react`, `react-dom`, `react-router-dom` (Routing).
*   **UI Libraries**: `tailwindcss`, `shadcn/ui` (via `@radix-ui/*` primitives), `lucide-react` (Icons).
*   **Forms/Validation**: `react-hook-form`, `zod`, `@hookform/resolvers`.
*   **Utilities**: `clsx`, `tailwind-merge` (for dynamic class compilation), `date-fns`.
*   **Animations**: `tailwindcss-animate`, `embla-carousel-react`.
*   **Dev Tools**: `vite`, `typescript`, `eslint`, `vitest` (Testing).

## 18. Preserve vs Replace Map

### KEEP EXACTLY
*   The `LanguageContext` implementation logic (how it switches and persists language).
*   Routing configuration in `App.tsx`.
*   Tailwind configuration and component structure in `src/components/ui`.
*   The responsive Header and Footer structural layouts.

### CONTENT TO REPLACE
*   The actual translation strings inside `src/contexts/LanguageContext.tsx`.
*   The `branches` array in `Contact.tsx`.
*   The `features` and `eligibility` arrays in all `src/pages/services/*.tsx` files.
*   The logos in the `public/` directory (`SBGA.png`).
*   The primary brand colors in Tailwind classes (if a rebranding is requested).

### POSSIBLY MODIFY
*   The number of service pages (currently 4 specific services). If the new business has 5 services, a new page and route will need to be added.
*   The specific icons used from `lucide-react` to better match new services/content.

### DO NOT TOUCH
*   `shadcn/ui` core components in `src/components/ui/` (unless structural bug fixes are needed).
*   Configuration files (`package.json`, `tsconfig.json`) unless adding specific requested functionality.

## 19. Potential Issues

*   **Missing Backend**: The contact form does not actually send emails. A backend service (like Formspree, Resend, or a custom API) must be integrated for this to work.
*   **Hardcoded Content Mixing**: While most content is cleanly in `LanguageContext.tsx`, the service pages (like `PigmyCollection.tsx`) have hardcoded English strings mixed with translated strings. When replacing content, these files must be updated manually alongside the context file to ensure complete translation.
*   **SEO Limitations**: Lack of dynamic `<title>` and `<meta name="description">` tags per route. This will hurt search engine visibility.
*   **Broken Links**: The `Header.tsx` file has commented-out login dropdown links, but the mobile menu still has active buttons pointing to `/login` and `/admin/login`, which may cause issues if those routes aren't fully implemented or intended for release.

## 20. Final Replacement Checklist

- [ ] Update `translations` object in `LanguageContext.tsx` with new English/Kannada text.
- [ ] Replace `public/SBGA.png` with the new logo.
- [ ] Update branch details in `src/pages/Contact.tsx`.
- [ ] Update features/eligibility arrays in all `src/pages/services/*.tsx` files.
- [ ] Review all `lucide-react` icons and replace them with visually appropriate ones for the new content.
- [ ] Integrate a real form submission handler for the Contact page.
- [ ] Address mobile menu links for `/login` and `/admin/login` (either implement pages or remove links).
