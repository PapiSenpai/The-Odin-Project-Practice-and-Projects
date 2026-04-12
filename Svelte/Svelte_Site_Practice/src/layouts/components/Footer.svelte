<script>
  // Footer component - Global footer
  export let config = {};

  const {
    year = new Date().getFullYear(),
    companyName = 'My Company',
    columns = [
      {
        title: 'Product',
        links: [
          { label: 'Features', url: '#' },
          { label: 'Pricing', url: '#' }
        ]
      },
      {
        title: 'Resources',
        links: [
          { label: 'Blog', url: '#' },
          { label: 'Docs', url: '#' }
        ]
      }
    ],
    socialLinks = [],
    theme = 'light'
  } = config;
</script>

<footer class="footer" class:dark-theme={theme === 'dark'}>
  <div class="footer-content">
    <!-- Footer columns -->
    <div class="footer-columns">
      {#each columns as column (column.title)}
        <div class="footer-column">
          <h3>{column.title}</h3>
          <ul>
            {#each column.links as link (link.label)}
              <li>
                <a href={link.url}>{link.label}</a>
              </li>
            {/each}
          </ul>
        </div>
      {/each}
    </div>

    <!-- Social links -->
    {#if socialLinks.length > 0}
      <div class="social-links">
        {#each socialLinks as social (social.name)}
          <a
            href={social.url}
            title={social.name}
            target="_blank"
            rel="noopener noreferrer"
            class="social-link"
          >
            {social.label}
          </a>
        {/each}
      </div>
    {/if}
  </div>

  <!-- Copyright section -->
  <div class="footer-bottom">
    <p>&copy; {year} {companyName}. All rights reserved.</p>
  </div>
</footer>

<style>
  .footer {
    background-color: var(--footer-bg, #f8f9fa);
    border-top: 1px solid var(--border-color, #e9ecef);
    padding: 3rem 2rem 1rem;
    margin-top: auto;
  }

  .footer.dark-theme {
    background-color: #333;
    border-top-color: #555;
    color: #f0f0f0;
  }

  .footer-content {
    max-width: 1400px;
    margin: 0 auto 2rem;
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 3rem;
    align-items: start;
  }

  .footer-columns {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 2rem;
  }

  .footer-column h3 {
    margin: 0 0 1rem 0;
    font-size: 1rem;
    color: var(--footer-text, #333);
  }

  .footer.dark-theme .footer-column h3 {
    color: #fff;
  }

  .footer-column ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .footer-column li {
    margin-bottom: 0.5rem;
  }

  .footer-column a {
    text-decoration: none;
    color: var(--footer-link-color, #666);
    transition: color 0.3s ease;
    font-size: 0.9rem;
  }

  .footer.dark-theme .footer-column a {
    color: #bbb;
  }

  .footer-column a:hover {
    color: var(--primary-color, #007bff);
  }

  .social-links {
    display: flex;
    gap: 1rem;
  }

  .social-link {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: var(--primary-color, #007bff);
    color: white;
    text-decoration: none;
    transition: background-color 0.3s ease, transform 0.3s ease;
    font-size: 0.9rem;
  }

  .social-link:hover {
    transform: translateY(-2px);
    background-color: var(--primary-hover, #0056b3);
  }

  .footer-bottom {
    max-width: 1400px;
    margin: 0 auto;
    padding-top: 2rem;
    border-top: 1px solid var(--border-color, #e9ecef);
    text-align: center;
    color: var(--footer-text, #666);
    font-size: 0.85rem;
  }

  .footer.dark-theme .footer-bottom {
    border-top-color: #555;
    color: #999;
  }

  /* Mobile responsive */
  @media (max-width: 768px) {
    .footer {
      padding: 2rem 1rem 1rem;
    }

    .footer-content {
      grid-template-columns: 1fr;
    }

    .footer-columns {
      grid-template-columns: 1fr;
    }

    .social-links {
      justify-content: center;
    }
  }
</style>
