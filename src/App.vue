<template>
  <div class="space-x-2 mb-4">
    <router-link to="/" class="px-2 py-1">Home</router-link>
    <router-link to="/guide" class="px-2 py-1">Guide</router-link>
  </div>
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component"></component>
    </transition>
  </router-view>
</template>

<script setup>
import HelloWorld from "./components/HelloWorld.vue";
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

a:hover,
a.router-link-active {
  @apply border-b-2 border-indigo-500;
}

.fade-enter-from,
.fade-leave-to {
  @apply opacity-0;
}

.fade-enter-active,
.fade-leave-active {
  @apply transition-opacity duration-200 ease-in-out;
}
</style>