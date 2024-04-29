<script>
  import '@fontsource-variable/inter';
  import '$lib/styles/app.css';

  const { children } = $props();
</script>

<header style='background-color:lightsalmon'>
  <div class='branding'>
    <span class='branding-logo'>
      Logo
    </span>
    <span class='branding-text'>
      HivePrint
    </span>
  </div>
</header>

<div id='content' style='background-color:lightcoral'>
  <aside style='background-color:lightgreen'>
    <nav>
      <ul>
        <li>
          <a>Test</a>
        </li>
        <details>
          <summary>Group</summary>
          <ul>
            <li>
              <a>TestGroup</a>
            </li>
          </ul>
        </details>
      </ul>
    </nav>
  </aside>

  <main style='background-color:lightblue'>
    {@render children()}
  </main>
</div>

<style>
  header {
    height: 5rem;
  }

  .branding {
    background-color: red;
    width: 20rem;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }
  .branding-logo {}
  .branding-text {
    font-size: 2rem;
    font-weight: 600;
  }

  #content {
    display: flex;
    height: 100%;
  }

  aside {
    width: 20rem;
  }

  nav {
    padding: 1rem 0;
  }
  nav ul {
    margin: 0;
    padding: 0;
  }

  main {}

  :global(body) {
    margin:0;
    height: 100dvh;
    font-family: 'Inter Variable', sans-serif;
  }

  *, ::before, ::after {
    box-sizing: border-box;
  }
</style>