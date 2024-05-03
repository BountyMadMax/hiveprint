<script setup>
import { Database, Settings } from 'lucide-vue-next';

useHead({
  title: 'HivePrint',
})
</script>

<template>
  <div class="bg-slate-50 text-black dark:bg-slate-900 dark:text-slate-200 font-serif">
    <header class="w-full h-16 bg-slate-100 dark:bg-slate-700 fixed">
      <NuxtLink to="/" class="h-full w-16 flex items-center justify-center">
        Logo
      </NuxtLink>
    </header>
    <div class="flex pt-16 h-dvh">
      <aside class="hidden md:block md:min-w-60 bg-slate-200 dark:bg-slate-800">
        <nav class="h-full flex flex-col justify-between">
          <ul>
            <NavbarGroup href="/storage">
              <template #title>
                <Database/>
                <span>Storage</span>
              </template>
              <template #default>
                <NavbarItem href="/storage/new">
                  New
                </NavbarItem>
              </template>
            </NavbarGroup>
          </ul>
          <ul class="mt-auto">
            <NavbarItem href="/">
              <Settings/>
              <span>Settings</span>
            </NavbarItem>
          </ul>
          <div class="p-2 text-center">
            <div>0.1.0</div>
            <div>Made with love</div>
          </div>
        </nav>
      </aside>
      <main class="overflow-y-auto w-full bg-slate-100 dark:bg-slate-900">
        <NuxtPage />
      </main>
    </div>
  </div>
</template>
