<template>
  <div class="q-pa-md bg-grey-10 text-white">
    <q-list dark bordered separator class="q-mx-auto" style="max-width: 318px">
      <q-item
        clickable
        v-ripple
        v-for="habit in habitStore.habits"
        :key="habit.id"
        @click="deleteHabit(habit.id)"
      >
        <q-item-section>{{ habit.title }}</q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script setup lang="ts">
import { useHabitStore } from 'src/stores/habit-store';

const habitStore = useHabitStore();

const deleteHabit = (id: number) => {
  habitStore.remove(id);
};
</script>
