<template>
  <div id="experience" class="my-[4rem]">
    <div class="container mx-auto p-4">
      <h1 class="text-4xl font-bold mb-[4rem]">{{ $t('Work Experience') }}</h1>
      <Timeline :value="events" :pt="{ eventOpposite: { class: 'hidden' } }">
        <template #marker="slotProps">
          <span class="flex w-3 h-3 items-center bg-white justify-center text-white rounded-full z-10 shadow-sm">
          </span>
        </template>
        <template #content="slotProps">
          <Card class="-mt-10 mb-5 bg-transparent ">
            <template #title>
              <h1 class="">{{ $t(slotProps.item.role) }}</h1>
            </template>
            <template #subtitle>
              <div class="flex flex-col">
                <h1>{{ $t(slotProps.item.company) }}</h1>
              </div>

            </template>
            <template #content>
              <h1>{{ $t(slotProps.item.date) }}</h1>
            </template>
          </Card>
        </template>
      </Timeline>
    </div>

  </div>
</template>
<script setup lang="ts">
const events = ref([
  { role: 'Full Stack Developer', company: 'Ministry of Finance of the Dominican Republic', date: 'At the moment...', icon: 'pi pi-shopping-cart', color: '#9C27B0', image: 'game-controller.jpg' },
  { role: 'Intern',company:'Ministry of Finance of the Dominican Republic', date: 'August 2022', icon: 'pi pi-cog', color: '#673AB7' },
]);
</script>
