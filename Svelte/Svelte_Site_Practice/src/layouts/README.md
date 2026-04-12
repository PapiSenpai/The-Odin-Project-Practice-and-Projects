# Layouts

This folder contains the global webpage layout system for your Svelte application.

## 📁 Structure

```
layouts/
├── BaseLayout.svelte          # Core layout wrapper (use this as base for all pages)
├── components/                # Reusable layout components
│   ├── Header.svelte          # Global header with navigation
│   ├── Footer.svelte          # Global footer
│   └── Sidebar.svelte         # Optional sidebar navigation
├── pages/                      # Page-specific layout wrappers
│   ├── HomepageLayout.svelte   # Homepage layout configuration
│   └── DashboardLayout.svelte  # Dashboard layout with sidebar
├── LAYOUT_GUIDE.md            # Comprehensive documentation
├── ARCHITECTURE.md            # Visual architecture overview
├── QUICKSTART.md              # Implementation guide
└── README.md                  # This file
```

## 🚀 Quick Start

### 1. **View the Homepage with Layout**
The homepage automatically uses `HomepageLayout` which wraps pages with global Header and Footer.

### 2. **Create a New Page**
```svelte
<script>
  import BaseLayout from '../../layouts/BaseLayout.svelte';
</script>

<BaseLayout>
  <h1>Your Page Title</h1>
  <p>Your page content...</p>
</BaseLayout>
```

### 3. **Add Sidebar to a Page**
```svelte
<BaseLayout showSidebar={true} sidebarPosition="left">
  Your content
</BaseLayout>
```

## 📚 Documentation

- **[LAYOUT_GUIDE.md](./LAYOUT_GUIDE.md)** - Full documentation with all components, props, and customization examples
- **[ARCHITECTURE.md](./ARCHITECTURE.md)** - Visual diagrams showing how layouts compose together
- **[QUICKSTART.md](./QUICKSTART.md)** - Step-by-step implementation guide

## 🎯 Key Components

### `BaseLayout.svelte`
The foundational layout providing:
- Sticky header with navigation
- Main content area
- Optional sidebar (left/right)
- Sticky footer
- Fully responsive design

**Props:**
- `showSidebar`: boolean (show/hide sidebar)
- `sidebarPosition`: 'left' | 'right'
- `headerConfig`: object (customize header)
- `footerConfig`: object (customize footer)

### `Header.svelte`
Global navigation header with:
- Logo/title
- Responsive navigation menu
- Mobile hamburger menu
- Light/dark theme support

### `Footer.svelte`
Global footer with:
- Multi-column layout for links
- Social media links
- Copyright information
- Responsive design

### `Sidebar.svelte`
Optional navigation sidebar with:
- Collapsible menu items
- Icon support
- Left/right positioning
- Responsive mobile behavior

## 🎨 Customization

### Theme Colors
Override CSS variables in your styles:
```css
:root {
  --header-bg: #ffffff;
  --primary-color: #007bff;
  --footer-bg: #f8f9fa;
}
```

### Navigation Items
Pass custom nav items to header:
```javascript
const headerConfig = {
  navItems: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' }
  ]
};
```

### Footer Content
Configure footer columns and social links:
```javascript
const footerConfig = {
  companyName: 'My Company',
  columns: [ /* ... */ ],
  socialLinks: [ /* ... */ ]
};
```

## 🔄 Extending the System

### Create a New Page Layout
```svelte
<!-- pages/BlogLayout.svelte -->
<script>
  import BaseLayout from '../BaseLayout.svelte';

  const headerConfig = { /* custom config */ };
  const footerConfig = { /* custom config */ };
</script>

<BaseLayout {headerConfig} {footerConfig} showSidebar={true} sidebarPosition="right">
  <slot />
</BaseLayout>
```

### Create a Custom Header
Extend Header to add additional sections or functionality.

### Use with Svelte Stores
Dynamically update navigation based on user state, theme preference, etc.

## 📱 Responsive Behavior

- **Desktop (>1024px)**: Full layout with all elements visible
- **Tablet (768-1024px)**: Adjusted spacing, sidebar adjustments
- **Mobile (<768px)**:
  - Hamburger navigation menu
  - Sidebar converts to horizontal buttons
  - Stacked layout
  - Optimized touch targets

## ✅ Best Practices

1. Always wrap page content with a layout
2. Keep header/footer configuration centralized
3. Use Svelte stores for dynamic navigation
4. Define CSS variables for consistent theming
5. Test responsive design on multiple screen sizes
6. Avoid deeply nesting layout components

## 🤔 Common Use Cases

**Static Pages (About, Contact, etc.)**
```svelte
<BaseLayout {headerConfig} {footerConfig}>
  {/* page content */}
</BaseLayout>
```

**Authenticated Dashboard**
```svelte
<DashboardLayout>
  {/* dashboard content */}
</DashboardLayout>
```

**Blog with Sidebar**
```svelte
<BaseLayout showSidebar={true} sidebarPosition="right">
  {/* blog post content */}
</BaseLayout>
```

**Admin Panel**
```svelte
<AdminLayout>
  {/* admin content */}
</AdminLayout>
```

## 🐛 Troubleshooting

**Header/Footer not showing?**
- Make sure you're using a layout component in your page

**Layout not full height?**
- BaseLayout uses `min-height: 100vh` - check parent constraints

**Sidebar not visible?**
- Set `showSidebar={true}` prop on BaseLayout

**Responsive design not working?**
- Check that viewport meta tag exists in index.html
- Verify CSS media queries are being loaded

## 📖 Learn More

Read the detailed documentation:
- Full guide: [LAYOUT_GUIDE.md](./LAYOUT_GUIDE.md)
- Architecture: [ARCHITECTURE.md](./ARCHITECTURE.md)
- Implementation: [QUICKSTART.md](./QUICKSTART.md)

---

**Created for The Odin Project Practice** - A flexible, scalable layout system for Svelte applications.
