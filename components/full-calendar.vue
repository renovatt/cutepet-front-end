<script setup lang="ts">
import { ref, onMounted } from 'vue'

const today = ref(new Date())
const events = ref([])
const colors = ['blue', 'indigo', 'deep-purple', 'cyan', 'green', 'orange', 'grey darken-1']
const names = ['Meeting', 'Holiday', 'PTO', 'Travel', 'Event', 'Birthday', 'Conference', 'Party']

const rnd = (a, b) => {
  return Math.floor((b - a + 1) * Math.random()) + a
}

onMounted(() => {
  const eventCount = 25
  const min = new Date().getTime() - 60 * 60 * 24 * 28 * 1000
  const max = new Date().getTime() + 60 * 60 * 24 * 28 * 1000
  const eventsArray = []

  for (let i = 0; i < eventCount; i++) {
    const allDay = rnd(0, 3) === 0
    const firstTimestamp = rnd(min, max)
    const first = new Date(firstTimestamp - (firstTimestamp % 900000))
    const secondTimestamp = rnd(2, allDay ? 288 : 8) * 900000
    const second = new Date(first.getTime() + secondTimestamp)

    eventsArray.push({
      title: names[rnd(0, names.length - 1)],
      start: first,
      end: second,
      color: colors[rnd(0, colors.length - 1)],
      allDay: !allDay
    })
  }

  events.value = eventsArray
})
</script>

<template>
  <v-locale-provider locale="pt">
    <v-row class="fill-height">
      <v-col>
        <v-sheet height="600">
          <v-calendar ref="calendar" v-model="today" :events="events" color="primary" type="month" text="Hoje" />
        </v-sheet>
      </v-col>
    </v-row>
  </v-locale-provider>
</template>

<style scoped>
/* Seu código CSS aqui */
</style>
