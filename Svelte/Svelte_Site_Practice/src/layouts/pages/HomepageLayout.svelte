<script>
  import BaseLayout from '../BaseLayout.svelte';

  // Homepage-specific layout configuration
  const headerConfig = {
    title: 'My Site',
    theme: 'light',
    navItems: [
      { label: 'Home', href: '/' },
      { label: 'About', href: '/about' },
      { label: 'Services', href: '/services' },
      { label: 'Contact', href: '/contact' }
    ]
  };

  const footerConfig = {
    companyName: 'My Company',
    year: new Date().getFullYear(),
    columns: [
      {
        title: 'Company',
        links: [
          { label: 'About Us', url: '#' },
          { label: 'Careers', url: '#' },
          { label: 'Press', url: '#' }
        ]
      },
      {
        title: 'Product',
        links: [
          { label: 'Features', url: '#' },
          { label: 'Pricing', url: '#' },
          { label: 'Security', url: '#' }
        ]
      },
      {
        title: 'Resources',
        links: [
          { label: 'Blog', url: '#' },
          { label: 'Docs', url: '#' },
          { label: 'Support', url: '#' }
        ]
      }
    ],
    socialLinks: [
      { name: 'Twitter', label: '𝕏', url: '#' },
      { name: 'LinkedIn', label: 'in', url: '#' },
      { name: 'GitHub', label: '⚙', url: '#' }
    ]
  };
</script>

<!-- Homepage uses BaseLayout with specific config -->
<BaseLayout {headerConfig} {footerConfig} showSidebar={false}>
  <slot />
</BaseLayout>

<style global>
  /* Homepage-specific global styles */
  :global(.homepage) {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  }
</style>
