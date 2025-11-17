<template>
  <div id="app">
    <main>
      <RouterView v-slot="{Component}">
        <Transition name="page">
          <component :is="Component" :key="$route.path" />  
        </Transition>
      </RouterView>
    </main>
  </div>
</template>

<style>
.page-enter-from {
  opacity: 0;
}
.page-enter-to {
  opacity: 1;
}

.page-enter-active {
  transition: all 100ms ease-in-out;
}
</style>