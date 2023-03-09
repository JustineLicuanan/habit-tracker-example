<template>
  <router-view />
</template>

<script setup lang="ts">
import { onBeforeMount } from 'vue';
import { useHabitStore } from './stores/habit-store';

const habitStore = useHabitStore();

onBeforeMount(() => {
  habitStore.fetch();
});
</script>
