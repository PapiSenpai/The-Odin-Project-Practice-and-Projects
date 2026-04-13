# Layout Architecture Overview

## Application Hierarchy

```
┌─────────────────────────────────────────────────┐
│              App.svelte (Root)                  │
│  (Routes & orchestrates page selection)         │
└──────────┬──────────────────────────────────────┘
           │
           ├─ Homepage.svelte ─┐
           │                    └─→ HomepageLayout.svelte ─→ BaseLayout.svelte
           │
           ├─ Blog.svelte ──────┐
           │                     └─→ BlogLayout.svelte ─→ BaseLayout.svelte
           │
           ├─ Dashboard.svelte ─┐
           │                     └─→ DashboardLayout.svelte ─→ BaseLayout.svelte
           │
           └─ Admin.svelte ─────┐
                                 └─→ AdminLayout.svelte ─→ BaseLayout.svelte
```

---

## BaseLayout Component Structure

```
┌────────────────────────────────────────────────────┐
│         BaseLayout.svelte                          │
├────────────────────────────────────────────────────┤
│                                                    │
│  ┌──────────────────────────────────────────────┐ │
│  │  Header Component (Global Navigation)        │ │
│  │  ┌────────────┐  ┌─────────────────────────┐ │ │
│  │  │   Logo     │  │   Navigation Items      │ │ │
│  │  └────────────┘  └─────────────────────────┘ │ │
│  └──────────────────────────────────────────────┘ │
│                                                    │
│  ┌──────────────────────────────────────────────┐ │
│  │  Content Wrapper (Flex Container)            │ │
│  │                                              │ │
│  │  ┌──────────────┐  ┌────────────────────┐   │ │
│  │  │  Sidebar     │  │   Main Content     │   │ │
│  │  │  (Optional)  │  │   (Page Content)   │   │ │
│  │  │              │  │   <slot />         │   │ │
│  │  │  • Menu Item │  │                    │   │ │
│  │  │  • Menu Item │  │                    │   │ │
│  │  │  • Menu Item │  │                    │   │ │
│  │  └──────────────┘  └────────────────────┘   │ │
│  └──────────────────────────────────────────────┘ │
│                                                    │
│  ┌──────────────────────────────────────────────┐ │
│  │  Footer Component (Global Info)              │ │
│  │  ┌────────────┐ ┌────────────┐ ┌─────────┐  │ │
│  │  │ Company    │ │ Product    │ │ Social  │  │ │
│  │  │ • About    │ │ • Features │ │ • 𝕏     │  │ │
│  │  │ • Careers  │ │ • Pricing  │ │ • GitHub│  │ │
│  │  └────────────┘ └────────────┘ └─────────┘  │ │
│  │  Copyright Info                               │ │
│  └──────────────────────────────────────────────┘ │
│                                                    │
└────────────────────────────────────────────────────┘
```

---

## Data Flow & Configuration

```
┌─────────────────────────────────────────────────────┐
│  Page Component (e.g., Homepage.svelte)             │
└──────────┬──────────────────────────────────────────┘
           │
           ├─ Instantiates PageLayout
           │  └─ Provides Config Objects
           │
           ├─→ headerConfig: {
           │     title, logoUrl, navItems[], theme
           │   }
           │
           ├─→ footerConfig: {
           │     companyName, columns[], socialLinks[]
           │   }
           │
           └─→ Page Content (via <slot />)
                 └ Rendered inside BaseLayout
```

---

## Layout Composition Pattern

### Homepage
```
HomepageLayout
  └── BaseLayout
      ├── Header (with home nav)
      ├── Main Content (Hero, Features, CTA)
      └── Footer (company info)
```

### Blog
```
BlogLayout
  └── BaseLayout
      ├── Header (with blog nav)
      ├── Content Wrapper
      │   ├── Sidebar (Categories, Recent Posts)
      │   └── Main Content (Blog Post)
      └── Footer (blog-specific links)
```

### Dashboard
```
DashboardLayout
  └── BaseLayout
      ├── Header (dashboard nav)
      ├── Content Wrapper
      │   ├── Sidebar (Dashboard Menu)
      │   └── Main Content (Analytics, Stats)
      └── Footer (minimal)
```

---

## Responsive Design Breakpoints

```
Desktop (>1024px)
├── Full header with nav items displayed
├── Sidebar visible with labels
├── Sidebar: 250px width
└── Content area: Flexible

Tablet (768px - 1024px)
├── Header with collapsed nav items
├── Sidebar visible but narrower
├── Sidebar: 150px width
└── Content area: Adjusted padding

Mobile (<768px)
├── Header with hamburger menu
├── Navigation items hidden, shown on toggle
├── Sidebar converts to horizontal buttons
├── Full-width content
└── Reduced padding and margins
```

---

## Extension Points

### 1. Custom Header
Create `src/layouts/components/CustomHeader.svelte` extending Header with additional sections

### 2. Custom Footer
Create `src/layouts/components/CustomFooter.svelte` extending Footer with additional sections

### 3. New Page Layout
Create `src/layouts/pages/YourLayout.svelte` extending BaseLayout with custom config

### 4. Theming
Override CSS variables in `:root` for global theme application

### 5. Sidebar Items
Configure sidebar items dynamically based on user role or page requirements

---

## Data Flow Example: Homepage to User

```
1. User navigates to /
   ↓
2. App.svelte routes to Homepage.svelte
   ↓
3. Homepage imports HomepageLayout
   ↓
4. HomepageLayout wraps content with BaseLayout
   ↓
5. BaseLayout renders:
   - Header (from headerConfig)
   - Main content (from <slot />)
   - Footer (from footerConfig)
   ↓
6. Header renders navigation items
7. Main content renders Homepage content
8. Footer renders company/social info
   ↓
9. User sees complete page with header, content, footer
```

