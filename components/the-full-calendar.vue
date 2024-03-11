<script setup lang="ts">
const month = new Date().getMonth()
const year = new Date().getFullYear()

const masks = ref({
  weekdays: 'WWW',
})

const attributes = ref([
  {
    key: 1,
    customData: {
      title: 'Lunch with mom.',
      class: 'bg-red-600 text-white',
    },
    dates: new Date(year, month, 1),
  },
  {
    key: 2,
    customData: {
      title: 'Take Noah to basketball practice',
      class: 'bg-blue-500 text-white',
    },
    dates: new Date(year, month, 2),
  },
  {
    key: 3,
    customData: {
      title: "Noah's basketball game.",
      class: 'bg-blue-500 text-white',
    },
    dates: new Date(year, month, 5),
  },
  {
    key: 4,
    customData: {
      title: 'Take car to the shop',
      class: 'bg-indigo-500 text-white',
    },
    dates: new Date(year, month, 5),
  },
  {
    key: 4,
    customData: {
      title: 'Meeting with new client.',
      class: 'bg-teal-500 text-white',
    },
    dates: new Date(year, month, 7),
  },
  {
    key: 5,
    customData: {
      title: "Mia's gymnastics practice.",
      class: 'bg-pink-500 text-white',
    },
    dates: new Date(year, month, 11),
  },
  {
    key: 6,
    customData: {
      title: 'Cookout with friends.',
      class: 'bg-orange-500 text-white',
    },
    dates: { months: 5, ordinalWeekdays: { 2: 1 } },
  },
  {
    key: 7,
    customData: {
      title: "Mia's gymnastics recital.",
      class: 'bg-pink-500 text-white',
    },
    dates: new Date(year, month, 22),
  },
  {
    key: 8,
    customData: {
      title: 'Visit great grandma.',
      class: 'bg-red-600 text-white',
    },
    dates: new Date(year, month, 25),
  },
])
</script>

<template>
  <div class="text-center">
    <Calendar class="custom-calendar max-w-full" :masks="masks" :attributes="attributes" disable-page-swipe is-expanded>
      <template #day-content="{ day, attributes }">
        <div class="z-10 flex h-full flex-col overflow-hidden">
          <span class="day-label text-sm text-gray-900">{{ day.day }}</span>
          <div class="grow overflow-auto scrollbar-hide">
            <p v-for="attr in attributes" :key="attr.key" class="mb-1 mt-0 rounded-sm p-1 text-xs leading-tight"
              :class="attr.customData.class">
              {{ attr.customData.title }}
            </p>
          </div>
        </div>
      </template>
    </Calendar>
  </div>
</template>

<style scoped>
:deep() .custom-calendar.vc-container {
  --day-border: 1px solid #b8c2cc;
  --day-border-highlight: 1px solid #b8c2cc;
  --day-width: 90px;
  --day-height: 90px;
  --weekday-bg: #f8fafc;
  --weekday-border: 1px solid #eaeaea;

  & .vc-header {
    /* background-color: #f1f5f8; */
    padding: 10px 0;
    color: #78716c;
    border-radius: .4rem;
  }

  & .vc-pane-container {
    top: -.5rem;
  }

  & .vc-title {
    text-transform: capitalize;
  }

  & .vc-weeks {
    padding: 0;
  }

  & .vc-weekday {
    background-color: var(--weekday-bg);
    border-bottom: var(--weekday-border);
    border-top: var(--weekday-border);
    padding: 5px 0;
  }

  & .vc-day {
    padding: 0 5px 3px 5px;
    text-align: left;
    height: var(--day-height);
    min-width: var(--day-width);
    background-color: white;

    &.weekday-1,
    &.weekday-7 {
      background-color: #eff8ff;
    }

    &:not(.on-bottom) {
      border-bottom: var(--day-border);

      &.weekday-1 {
        border-bottom: var(--day-border-highlight);
      }
    }

    &:not(.on-right) {
      border-right: var(--day-border);
    }
  }

  & .vc-day-dots {
    margin-bottom: 5px;
  }
}
</style>
