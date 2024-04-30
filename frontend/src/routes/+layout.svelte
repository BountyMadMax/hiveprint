<script>
  import '@fontsource-variable/inter';
  import '$lib/styles/app.css';
	import NavbarItem from './NavbarItem.svelte';
	import NavbarGroup from './NavbarGroup.svelte';

  import Database from 'lucide-svelte/icons/database';
  import Settings from 'lucide-svelte/icons/settings';

  const { children } = $props();
</script>

<div class='bg-slate-100 text-black dark:bg-slate-900 dark:text-slate-200'>
  <header class='w-full h-16 dark:bg-slate-700 fixed'>
    <a href='/' class='h-full w-16 flex items-center justify-center'>
      Logo
    </a>
  </header>
  
  <div class='flex pt-16 h-dvh'>
    <aside class='min-w-60 bg-slate-200 dark:bg-slate-800'>
      <nav class='h-full flex flex-col justify-between'>
        <ul>
          <NavbarGroup href='/storage'>
            {#snippet header()}
              <Database/>
              <span>Storage</span>
            {/snippet}
            {#snippet body()}
              <NavbarItem href='/storage/new'>
                New
              </NavbarItem>
            {/snippet}
          </NavbarGroup>
        </ul>
        <ul class='mt-auto'>
          <NavbarItem href='/'>
            <Settings/>
            <span>Settings</span>
          </NavbarItem>
        </ul>
        <div class='p-2 text-center'>
          <div>0.1.0</div>
          <div>Made with love</div>
        </div>
      </nav>
    </aside>
    
    <main class='overflow-y-auto w-full bg-slate-100 dark:bg-slate-900'>
      {@render children()}
    </main>
  </div>
</div>
