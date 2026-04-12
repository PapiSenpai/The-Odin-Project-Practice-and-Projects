<script>
  import Header from './components/Header.svelte';
  import Footer from './components/Footer.svelte';
  import Sidebar from './components/Sidebar.svelte';

  // Props to customize the layout
  export let showSidebar = false;
  export let sidebarPosition = 'left'; // 'left' or 'right'
  export let pageTitle = 'Page';
  export let headerConfig = {};
  export let footerConfig = {};
</script>

<div class="layout-container">
  <!-- Header - Global across all pages -->
  <Header config={headerConfig} />

  <!-- Main content area with optional sidebar -->
  <div class="content-wrapper">
    {#if showSidebar}
      <Sidebar position={sidebarPosition} />
    {/if}

    <!-- Main content slot -->
    <main class="main-content" class:with-sidebar={showSidebar}>
      <slot />
    </main>
  </div>

  <!-- Footer - Global across all pages -->
  <Footer config={footerConfig} />
</div>

<style>
  .layout-container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-color: var(--bg-color, #ffffff);
  }

  .content-wrapper {
    display: flex;
    flex: 1;
    max-width: 1400px;
    width: 100%;
    margin: 0 auto;
    padding: 2rem 1rem;
  }

  .main-content {
    flex: 1;
    padding: 1rem;
  }

  .main-content.with-sidebar {
    margin-right: 1rem;
  }

  /* Responsive design */
  @media (max-width: 768px) {
    .content-wrapper {
      flex-direction: column;
      padding: 1rem;
    }

    .main-content.with-sidebar {
      margin-right: 0;
      margin-bottom: 1rem;
    }
  }
</style>
