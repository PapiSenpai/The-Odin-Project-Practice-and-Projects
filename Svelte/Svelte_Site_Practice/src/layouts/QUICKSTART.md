# Quick Start Implementation Guide

## Step 1: Update App.svelte to Use Global Layout

Currently, your `App.svelte` imports Homepage directly. Update it to use the layout system:

```svelte
<script>
  import HomepageLayout from './layouts/pages/HomepageLayout.svelte';
  import Homepage from './pages/homepage/homepage.svelte';
</script>

<HomepageLayout>
  <Homepage />
</HomepageLayout>
```

This ensures all pages use the consistent layout structure.

---

## Step 2: Update Homepage Component

Simplify your homepage to only include content (layout is now handled by HomepageLayout):

```svelte
<!-- src/pages/homepage/homepage.svelte -->
<script>
  // Your homepage logic here
</script>

<section class="hero">
  <h1>Welcome to My Site</h1>
  <p>Describe your amazing service</p>
  <button>Get Started</button>
</section>

<section class="features">
  <!-- Feature content -->
</section>

<style>
  .hero {
    padding: 4rem 2rem;
    text-align: center;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
  }

  /* Your styles here */
</style>
```

---

## Step 3: Create Additional Page Layouts

### For an About Page:
```svelte
<!-- src/pages/about/About.svelte -->
<script>
  import BaseLayout from '../../layouts/BaseLayout.svelte';

  const headerConfig = {
    title: 'My Site',
    navItems: [
      { label: 'Home', href: '/' },
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' }
    ]
  };
</script>

<BaseLayout {headerConfig}>
  <h1>About Us</h1>
  <p>Your about page content...</p>
</BaseLayout>
```

### For Contact Page:
```svelte
<!-- src/pages/contact/Contact.svelte -->
<script>
  import BaseLayout from '../../layouts/BaseLayout.svelte';

  const headerConfig = {
    title: 'My Site',
    navItems: [...]
  };
</script>

<BaseLayout {headerConfig}>
  <h1>Get in Touch</h1>
  <p>Your contact form here...</p>
</BaseLayout>
```

---

## Step 4: Create a Reusable Config File

Create a centralized location for layout configs:

```javascript
// src/config/layoutConfig.js

export const headerConfig = {
  title: 'My Site',
  logoUrl: '/logo.svg',
  navItems: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Contact', href: '/contact' }
  ],
  theme: 'light'
};

export const footerConfig = {
  companyName: 'My Company',
  year: new Date().getFullYear(),
  columns: [
    {
      title: 'Company',
      links: [
        { label: 'About', url: '/about' },
        { label: 'Blog', url: '/blog' },
        { label: 'Careers', url: '/careers' }
      ]
    },
    {
      title: 'Product',
      links: [
        { label: 'Features', url: '#' },
        { label: 'Pricing', url: '#' },
        { label: 'Docs', url: '/docs' }
      ]
    }
  ],
  socialLinks: [
    { name: 'Twitter', label: '𝕏', url: 'https://twitter.com' },
    { name: 'GitHub', label: '⚙', url: 'https://github.com' },
    { name: 'LinkedIn', label: 'in', url: 'https://linkedin.com' }
  ]
};
```

Then import and use in layouts:

```svelte
<script>
  import BaseLayout from '../BaseLayout.svelte';
  import { headerConfig, footerConfig } from '../../config/layoutConfig.js';
</script>

<BaseLayout {headerConfig} {footerConfig}>
  <slot />
</BaseLayout>
```

---

## Step 5: Handle Dynamic Navigation

If navigation changes based on user state (logged in, role, etc.), use Svelte stores:

```javascript
// src/stores/authStore.js
import { writable } from 'svelte/store';

export const isAuthenticated = writable(false);
export const userRole = writable('guest');
```

```svelte
<script>
  import { isAuthenticated, userRole } from '../stores/authStore.js';
  import BaseLayout from '../layouts/BaseLayout.svelte';

  let headerConfig = {
    title: 'My Site',
    navItems: [{ label: 'Home', href: '/' }]
  };

  // Update nav based on auth state
  $: {
    if ($isAuthenticated) {
      headerConfig.navItems = [
        { label: 'Dashboard', href: '/dashboard' },
        { label: 'Profile', href: '/profile' },
        { label: 'Logout', href: '/logout' }
      ];
    } else {
      headerConfig.navItems = [
        { label: 'Home', href: '/' },
        { label: 'Sign In', href: '/signin' }
      ];
    }
  }
</script>

<BaseLayout {headerConfig}>
  <slot />
</BaseLayout>
```

---

## Step 6: Styling & Theming

Add your theme variables to `src/app.css`:

```css
:root {
  /* Header styles */
  --header-bg: #ffffff;
  --header-text: #333333;

  /* Footer styles */
  --footer-bg: #f8f9fa;
  --footer-text: #666666;
  --footer-link-color: #666666;

  /* Sidebar styles */
  --sidebar-bg: #f8f9fa;
  --sidebar-text: #333333;
  --sidebar-hover: #e9ecef;

  /* General */
  --primary-color: #007bff;
  --primary-hover: #0056b3;
  --border-color: #e9ecef;
  --bg-color: #ffffff;

  /* Fonts */
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  --font-size: 16px;
  --line-height: 1.5;
}

/* Dark mode theme */
@media (prefers-color-scheme: dark) {
  :root {
    --header-bg: #1a1a1a;
    --header-text: #ffffff;
    --footer-bg: #262626;
    --footer-text: #cccccc;
    --sidebar-bg: #1a1a1a;
    --sidebar-text: #ffffff;
    --bg-color: #121212;
    --border-color: #333333;
  }
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: var(--line-height);
  background-color: var(--bg-color);
  color: var(--header-text);
}
```

---

## Step 7: Test the Layout System

1. **Homepage Test**: Navigate to homepage, verify Header, Content, and Footer appear
2. **Responsive Test**: Resize browser window, verify mobile menu works
3. **Navigation Test**: Click nav items, verify they work
4. **Sidebar Test**: Create a page with `showSidebar={true}`, verify sidebar appears
5. **Theme Test**: Add CSS variables, verify colors change

---

## Step 8: Customization Examples

### Example 1: Add Breadcrumbs to Header

```svelte
<!-- src/layouts/components/Breadcrumbs.svelte -->
<script>
  export let items = [];
</script>

<div class="breadcrumbs">
  {#each items as item, index}
    <a href={item.href}>{item.label}</a>
    {#if index < items.length - 1}
      <span>/</span>
    {/if}
  {/each}
</div>

<style>
  .breadcrumbs {
    padding: 0.5rem;
    font-size: 0.9rem;
  }
</style>
```

Then add to Header:
```svelte
<Header config={headerConfig} />
<Breadcrumbs items={breadcrumbItems} />
```

### Example 2: Add Notification Banner

```svelte
<!-- src/layouts/components/NotificationBanner.svelte -->
<script>
  export let message = '';
  export let type = 'info'; // 'info', 'warning', 'error', 'success'

  let visible = true;

  function close() {
    visible = false;
  }
</script>

{#if visible && message}
  <div class="banner" class:type>
    <p>{message}</p>
    <button on:click={close}>×</button>
  </div>
{/if}

<style>
  .banner {
    padding: 1rem;
    background-color: #d1ecf1;
    color: #0c5460;
    border-bottom: 1px solid #bee5eb;
  }

  .banner.error {
    background-color: #f8d7da;
    color: #721c24;
    border-color: #f5c6cb;
  }
</style>
```

Add to BaseLayout:
```svelte
<script>
  import NotificationBanner from './components/NotificationBanner.svelte';

  let notificationMessage = '';
</script>

<div class="layout-container">
  {#if notificationMessage}
    <NotificationBanner message={notificationMessage} />
  {/if}
  <Header config={headerConfig} />
  {/* rest of layout */}
</div>
```

---

## Step 9: File Organization Checklist

```
✓ src/layouts/BaseLayout.svelte created
✓ src/layouts/components/Header.svelte created
✓ src/layouts/components/Footer.svelte created
✓ src/layouts/components/Sidebar.svelte created
✓ src/layouts/pages/HomepageLayout.svelte created
✓ src/layouts/pages/DashboardLayout.svelte created
✓ src/layouts/LAYOUT_GUIDE.md created
✓ src/layouts/ARCHITECTURE.md created
✓ App.svelte updated to use layout
✓ app.css updated with CSS variables
```

---

## Troubleshooting During Implementation

| Problem | Solution |
|---------|----------|
| Layout not showing | Make sure page imports correct layout component |
| Header missing | Check `headerConfig` is properly passed |
| Footer cut off | Verify BaseLayout has `display: flex; flex-direction: column` |
| Mobile menu broken | Ensure mobile-toggle button displays and toggles properly |
| Styles not applying | Check CSS variables are defined in `:root` |
| Sidebar overlapping | Verify responsive styles with media queries |

