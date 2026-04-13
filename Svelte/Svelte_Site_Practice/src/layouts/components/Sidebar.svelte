<script>
  // Sidebar component - Optional sidebar for layouts
  export let position = 'left'; // 'left' or 'right'
  export let items = [
    { label: 'Dashboard', icon: '📊', href: '#' },
    { label: 'Settings', icon: '⚙️', href: '#' },
    { label: 'Help', icon: '❓', href: '#' }
  ];
  export let collapsible = true;

  let isCollapsed = false;

  function toggleCollapse() {
    if (collapsible) {
      isCollapsed = !isCollapsed;
    }
  }
</script>

<aside
  class="sidebar"
  class:left={position === 'left'}
  class:right={position === 'right'}
  class:collapsed={isCollapsed}
>
  <div class="sidebar-header">
    {#if collapsible}
      <button
        class="collapse-btn"
        on:click={toggleCollapse}
        aria-label="Toggle sidebar"
      >
        {isCollapsed ? '→' : '←'}
      </button>
    {/if}
    <h2>Menu</h2>
  </div>

  <nav class="sidebar-nav">
    {#each items as item (item.label)}
      <a href={item.href} class="sidebar-item">
        <span class="item-icon">{item.icon}</span>
        <span class="item-label">{item.label}</span>
      </a>
    {/each}
  </nav>
</aside>

<style>
  .sidebar {
    width: 250px;
    background-color: var(--sidebar-bg, #f8f9fa);
    border-right: 1px solid var(--border-color, #e9ecef);
    padding: 1rem;
    transition: width 0.3s ease;
    overflow: hidden;
  }

  .sidebar.right {
    border-right: none;
    border-left: 1px solid var(--border-color, #e9ecef);
  }

  .sidebar.collapsed {
    width: 80px;
  }

  .sidebar-header {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
  }

  .sidebar-header h2 {
    margin: 0;
    font-size: 1.1rem;
    color: var(--sidebar-text, #333);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .collapse-btn {
    background: none;
    border: none;
    cursor: pointer;
    padding: 0.5rem;
    font-size: 1rem;
    color: var(--sidebar-text, #666);
    transition: color 0.3s ease;
  }

  .collapse-btn:hover {
    color: var(--primary-color, #007bff);
  }

  .sidebar-nav {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .sidebar-item {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0.75rem 1rem;
    border-radius: 4px;
    text-decoration: none;
    color: var(--sidebar-text, #333);
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  .sidebar-item:hover {
    background-color: var(--sidebar-hover, #e9ecef);
    color: var(--primary-color, #007bff);
  }

  .item-icon {
    flex-shrink: 0;
    font-size: 1.2rem;
  }

  .item-label {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .sidebar.collapsed .item-label {
    display: none;
  }

  .sidebar.collapsed .sidebar-header h2 {
    display: none;
  }

  @media (max-width: 768px) {
    .sidebar {
      width: 100%;
      border-right: none;
      border-bottom: 1px solid var(--border-color, #e9ecef);
      padding: 1rem;
    }

    .sidebar.right {
      border-left: none;
      border-bottom: 1px solid var(--border-color, #e9ecef);
    }

    .sidebar-nav {
      flex-direction: row;
      flex-wrap: wrap;
      gap: 0.5rem;
    }

    .sidebar-item {
      flex: 1 1 auto;
      justify-content: center;
      min-width: 100px;
    }

    .item-label {
      display: none;
    }

    .sidebar.collapsed {
      width: 100%;
    }
  }
</style>
