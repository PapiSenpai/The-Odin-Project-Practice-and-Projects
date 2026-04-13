<script>
  import BaseLayout from '../BaseLayout.svelte';

  // Dashboard layout configuration - with sidebar
  const headerConfig = {
    title: 'Dashboard',
    theme: 'light',
    navItems: [
      { label: 'Dashboard', href: '/dashboard' },
      { label: 'Analytics', href: '/analytics' },
      { label: 'Settings', href: '/settings' },
      { label: 'Logout', href: '/' }
    ]
  };

  const footerConfig = {
    companyName: 'Dashboard App',
    year: new Date().getFullYear(),
    columns: [
      {
        title: 'Help',
        links: [
          { label: 'Documentation', url: '#' },
          { label: 'FAQ', url: '#' },
          { label: 'Contact Support', url: '#' }
        ]
      }
    ]
  };

  const sidebarItems = [
    { label: 'Overview', icon: '📊', href: '/dashboard' },
    { label: 'Analytics', icon: '📈', href: '/analytics' },
    { label: 'Reports', icon: '📄', href: '/reports' },
    { label: 'Users', icon: '👥', href: '/users' },
    { label: 'Settings', icon: '⚙️', href: '/settings' }
  ];
</script>

<!-- Dashboard uses BaseLayout with sidebar -->
<BaseLayout
  {headerConfig}
  {footerConfig}
  showSidebar={true}
  sidebarPosition="left"
>
  <!-- Sidebar content would be customized here -->
  <slot />
</BaseLayout>

<style global>
  /* Dashboard-specific global styles */
  :global(.dashboard) {
    background-color: #f5f7fa;
  }
</style>
