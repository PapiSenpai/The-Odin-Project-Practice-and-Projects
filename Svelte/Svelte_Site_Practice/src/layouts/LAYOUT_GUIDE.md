# Global Layout System - Documentation & Guide

## Overview

The global layout system is a hierarchical, component-based architecture that provides consistent styling and structure across your entire Svelte application while allowing flexibility for page-specific customizations.

## Folder Structure

```
src/layouts/
├── BaseLayout.svelte          # Core layout wrapper (header, footer, main content)
├── components/
│   ├── Header.svelte          # Global header with navigation
│   ├── Footer.svelte          # Global footer with links & social media
│   └── Sidebar.svelte         # Optional sidebar component
└── pages/
    ├── HomepageLayout.svelte   # Homepage-specific layout
    └── DashboardLayout.svelte  # Dashboard-specific layout
    └── [CustomLayout.svelte]   # Add more page-specific layouts as needed
```

---

## Core Components

### 1. **BaseLayout.svelte**
The foundational layout that all pages should use. It provides:
- Consistent header and footer across all pages
- Flexible content area with optional sidebar
- Responsive design for mobile & desktop
- Configurable sidebar positioning (left/right)

#### Props:
```javascript
{
  showSidebar: boolean = false,        // Show/hide sidebar
  sidebarPosition: 'left' | 'right',   // Sidebar placement
  pageTitle: string = 'Page',          // Page title
  headerConfig: object = {},           // Header configuration
  footerConfig: object = {}            // Footer configuration
}
```

#### Usage:
```svelte
<script>
  import BaseLayout from '$lib/layouts/BaseLayout.svelte';
</script>

<BaseLayout showSidebar={false}>
  <h1>Your Page Content</h1>
  <p>This content goes in the main area</p>
</BaseLayout>
```

---

### 2. **Header.svelte**
Global header with responsive navigation.

#### Configuration Options:
```javascript
{
  title: string = 'My Site',           // Site title/logo text
  logoUrl: string | null = null,       // URL to logo image
  navItems: Array = [...]              // Navigation items
  theme: 'light' | 'dark' = 'light'    // Color theme
}
```

#### Example:
```javascript
const headerConfig = {
  title: 'My Site',
  logoUrl: '/logo.png',
  navItems: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' }
  ],
  theme: 'light'
};
```

---

### 3. **Footer.svelte**
Global footer with multi-column layout and social links.

#### Configuration Options:
```javascript
{
  year: number = 2026,
  companyName: string = 'My Company',
  columns: Array = [...]               // Footer columns with links
  socialLinks: Array = [],             // Social media links
  theme: 'light' | 'dark' = 'light'
}
```

#### Example:
```javascript
const footerConfig = {
  companyName: 'My Site',
  year: new Date().getFullYear(),
  columns: [
    {
      title: 'Product',
      links: [
        { label: 'Features', url: '#' },
        { label: 'Pricing', url: '#' }
      ]
    }
  ],
  socialLinks: [
    { name: 'Twitter', label: '𝕏', url: 'https://twitter.com' },
    { name: 'GitHub', label: '⚙', url: 'https://github.com' }
  ]
};
```

---

### 4. **Sidebar.svelte**
Optional sidebar component for navigation or supplementary content.

#### Props:
```javascript
{
  position: 'left' | 'right' = 'left',  // Sidebar position
  items: Array = [...],                 // Navigation items
  collapsible: boolean = true           // Allow collapse/expand
}
```

#### Example:
```svelte
<BaseLayout showSidebar={true} sidebarPosition="left">
  <!-- Sidebar auto-renders with items prop -->
</BaseLayout>
```

---

## Page-Specific Layouts

### **HomepageLayout.svelte**
Homepage-specific wrapper that extends BaseLayout with homepage-specific configuration.

```svelte
<script>
  import BaseLayout from '../BaseLayout.svelte';

  const headerConfig = { /* homepage nav items */ };
  const footerConfig = { /* homepage footer items */ };
</script>

<BaseLayout {headerConfig} {footerConfig} showSidebar={false}>
  <slot />
</BaseLayout>
```

### **DashboardLayout.svelte**
Dashboard layout with sidebar enabled, typically used for authenticated pages.

---

## How to Use in Pages

### Basic Usage - Homepage
```svelte
<!-- src/pages/homepage/Homepage.svelte -->
<script>
  import HomepageLayout from '../../layouts/pages/HomepageLayout.svelte';
</script>

<HomepageLayout>
  <div class="hero">
    <h1>Welcome!</h1>
    <p>Your content here...</p>
  </div>
</HomepageLayout>

<style>
  .hero {
    padding: 4rem 2rem;
    text-align: center;
  }
</style>
```

### Basic Usage - Dashboard
```svelte
<!-- src/pages/dashboard/Dashboard.svelte -->
<script>
  import DashboardLayout from '../../layouts/pages/DashboardLayout.svelte';
</script>

<DashboardLayout>
  <h1>Dashboard Overview</h1>
  <p>Your dashboard content here...</p>
</DashboardLayout>
```

---

## How to Extend & Customize

### 1. **Create a New Page Layout**

Create a new file in `src/layouts/pages/`:

```svelte
<!-- src/layouts/pages/BlogLayout.svelte -->
<script>
  import BaseLayout from '../BaseLayout.svelte';

  const headerConfig = {
    title: 'My Blog',
    navItems: [
      { label: 'Home', href: '/' },
      { label: 'Blog', href: '/blog' },
      { label: 'Archive', href: '/blog/archive' }
    ]
  };

  const footerConfig = {
    companyName: 'My Blog',
    year: new Date().getFullYear(),
    columns: [
      {
        title: 'Categories',
        links: [
          { label: 'Web Dev', url: '#' },
          { label: 'Design', url: '#' }
        ]
      }
    ]
  };
</script>

<BaseLayout {headerConfig} {footerConfig} showSidebar={true} sidebarPosition="right">
  <slot />
</BaseLayout>
```

### 2. **Override Header/Footer Styles**

Add CSS variables to customize theme colors:

```svelte
<!-- In your page or layout -->
<style>
  :global(:root) {
    --header-bg: #1a1a1a;
    --header-text: #ffffff;
    --footer-bg: #222;
    --primary-color: #ff6b6b;
    --border-color: #333;
  }
</style>
```

### 3. **Modify Navigation Items Dynamically**

```svelte
<script>
  import { writable } from 'svelte/store';
  import BaseLayout from '../layouts/BaseLayout.svelte';

  let navItems = writable([
    { label: 'Home', href: '/' }
  ]);

  // Update nav items based on user role
  $: navItems.set(isAdmin ? [...adminItems] : [...userItems]);

  $: headerConfig = {
    title: 'My Site',
    navItems: $navItems
  };
</script>

<BaseLayout {headerConfig}>
  <slot />
</BaseLayout>
```

### 4. **Add Custom Header/Footer Sections**

Extend the Header component:

```svelte
<!-- src/layouts/components/CustomHeader.svelte -->
<script>
  import Header from './Header.svelte';
</script>

<Header {...$$props} />

<!-- Add custom elements after header -->
<div class="announcement">
  <p>Important announcement!</p>
</div>

<style>
  .announcement {
    background: #fff3cd;
    padding: 1rem;
    text-align: center;
  }
</style>
```

### 5. **Create Role-Based Layouts**

```svelte
<!-- src/layouts/pages/AdminLayout.svelte -->
<script>
  import BaseLayout from '../BaseLayout.svelte';

  const headerConfig = {
    title: 'Admin Panel',
    navItems: [
      { label: 'Dashboard', href: '/admin' },
      { label: 'Users', href: '/admin/users' },
      { label: 'Settings', href: '/admin/settings' }
    ]
  };

  const sidebarItems = [
    { label: 'Overview', icon: '📊', href: '/admin' },
    { label: 'Manage Users', icon: '👥', href: '/admin/users' },
    { label: 'Analytics', icon: '📈', href: '/admin/analytics' },
    { label: 'Settings', icon: '⚙️', href: '/admin/settings' }
  ];
</script>

<BaseLayout {headerConfig} showSidebar={true} sidebarPosition="left">
  <slot />
</BaseLayout>
```

---

## Responsive Design

All layouts are fully responsive:

- **Desktop**: Full header, footer, and sidebar layout
- **Tablet**: Adjusted spacing and sidebar behavior
- **Mobile**:
  - Navigation menu collapses into hamburger menu
  - Sidebar converts to horizontal button row
  - Reduced padding and font sizes

---

## CSS Variables for Theming

Customize the entire layout system by overriding these variables:

```css
--header-bg: #f8f9fa
--header-text: #333
--footer-bg: #f8f9fa
--footer-text: #666
--footer-link-color: #666
--sidebar-bg: #f8f9fa
--sidebar-text: #333
--sidebar-hover: #e9ecef
--bg-color: #ffffff
--border-color: #e9ecef
--primary-color: #007bff
--primary-hover: #0056b3
```

---

## Best Practices

1. **Always wrap pages with a layout** - Ensures consistent look & feel
2. **Use page-specific layouts** - Create dedicated layouts for distinct page types
3. **Keep header/footer config centralized** - Makes global changes easy
4. **Use CSS variables for theming** - Easier maintenance and consistency
5. **Test responsive design** - All layouts should work on mobile/tablet/desktop
6. **Nest layouts carefully** - Avoid deeply nested layout structures

---

## File Structure Example - Full App

```
src/
├── App.svelte
├── layouts/
│   ├── BaseLayout.svelte
│   ├── components/
│   │   ├── Header.svelte
│   │   ├── Footer.svelte
│   │   └── Sidebar.svelte
│   └── pages/
│       ├── HomepageLayout.svelte
│       ├── BlogLayout.svelte
│       ├── DashboardLayout.svelte
│       └── AdminLayout.svelte
├── pages/
│   ├── homepage/
│   │   └── Homepage.svelte
│   ├── blog/
│   │   ├── Blog.svelte
│   │   └── BlogPost.svelte
│   ├── dashboard/
│   │   └── Dashboard.svelte
│   └── admin/
│       ├── AdminDashboard.svelte
│       └── UserManagement.svelte
├── components/
├── lib/
└── assets/
```

---

## Troubleshooting

**Q: Sidebar not showing?**
A: Make sure `showSidebar={true}` is set in your layout.

**Q: Navigation items not updating?**
A: Use Svelte stores and reactive variables to update `headerConfig` dynamically.

**Q: Layout not stretching full height?**
A: `BaseLayout` uses `min-height: 100vh` and flexbox. Check parent container constraints.

**Q: Styles not applying?**
A: Remember to use `:global()` for global styles; local styles only apply to that component.

