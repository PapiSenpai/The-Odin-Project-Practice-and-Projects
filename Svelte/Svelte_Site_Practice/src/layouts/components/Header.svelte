<script>
  // Header component - Global navigation
  export let config = {};

  const {
    title = 'My Site',
    logoUrl = null,
    navItems = [
      { label: 'Home', href: '/' },
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' }
    ],
    theme = 'light'
  } = config;

  let mobileMenuOpen = false;

  function toggleMobileMenu() {
    mobileMenuOpen = !mobileMenuOpen;
  }
</script>

<header class="header" class:dark-theme={theme === 'dark'}>
  <div class="header-content">
    <div class="logo-section">
      {#if logoUrl}
        <img src={logoUrl} alt="Logo" class="logo" />
      {/if}
      <h1 class="site-title">{title}</h1>
    </div>

    <button
      class="mobile-toggle"
      on:click={toggleMobileMenu}
      aria-label="Toggle navigation"
    >
      ☰
    </button>

    <nav class="nav" class:mobile-open={mobileMenuOpen}>
      {#each navItems as item (item.label)}
        <a href={item.href} class="nav-link">{item.label}</a>
      {/each}
    </nav>
  </div>
</header>

<style>
  .header {
    background-color: var(--header-bg, #f8f9fa);
    border-bottom: 1px solid var(--border-color, #e9ecef);
    padding: 1rem 2rem;
    position: sticky;
    top: 0;
    z-index: 100;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .header.dark-theme {
    background-color: #333;
    border-bottom-color: #555;
  }

  .header-content {
    max-width: 1400px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo-section {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .logo {
    height: 40px;
    width: auto;
  }

  .site-title {
    margin: 0;
    font-size: 1.5rem;
    color: var(--header-text, #333);
  }

  .header.dark-theme .site-title {
    color: #fff;
  }

  .nav {
    display: flex;
    gap: 2rem;
    align-items: center;
  }

  .nav-link {
    text-decoration: none;
    color: var(--header-text, #333);
    font-weight: 500;
    transition: color 0.3s ease;
    padding: 0.5rem 0;
    border-bottom: 2px solid transparent;
  }

  .header.dark-theme .nav-link {
    color: #f0f0f0;
  }

  .nav-link:hover {
    color: var(--primary-color, #007bff);
    border-bottom-color: var(--primary-color, #007bff);
  }

  .mobile-toggle {
    display: none;
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    color: var(--header-text, #333);
  }

  .header.dark-theme .mobile-toggle {
    color: #fff;
  }

  /* Mobile responsive */
  @media (max-width: 768px) {
    .header {
      padding: 1rem;
    }

    .mobile-toggle {
      display: block;
    }

    .nav {
      position: absolute;
      top: 60px;
      left: 0;
      right: 0;
      flex-direction: column;
      background-color: var(--header-bg, #f8f9fa);
      padding: 1rem;
      gap: 1rem;
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.3s ease;
    }

    .header.dark-theme .nav {
      background-color: #333;
    }

    .nav.mobile-open {
      max-height: 300px;
    }

    .nav-link {
      padding: 0.5rem;
    }
  }
</style>
