<template>
  <section class="flex justify-center">
    <Menubar class="border-0 bg-transparent mx-auto  " :model="items">
      <template #start>
        <div class="flex flex-row  ">

          <h1>ELMM</h1>
          <i class="pi pi-code mt-1 ml-2"></i>
        </div>
      </template>
      <template #item="{ item, props, hasSubmenu, root }">

        <a v-ripple class="flex items-center hover:bg-frost-gradient-2 active:bg-frost-gradient-2 focus:bg-frost-gradient-2" v-bind="props.action">
          <span class="mx-2">{{ $t(item.label) }}</span>
        </a>
      </template>
      <template #end>
        <div class="flex items-center gap-2 w-[10px]">
          <Select @change="handleSelectChange" v-model="selectedLang" :options="langs" dropdownIcon="pi  pi-language "
            :pt="{ label: { class: 'hidden' }, root: { class: 'bg-transparent h-[2rem] border-white ' },dropdown:{style:'color: white'},option:{class:' hover:bg-frost-gradient-2 active:bg-frost-gradient-2 focus:bg-frost-gradient-2'} }" class="w-full md:w-56">
            <template #option="slotProps">
              <div class="flex items-center">
                <div>{{ $t(slotProps.option.name) }}</div>
              </div>
            </template>
          </Select>
        </div>
      </template>
    </MenuBar>

  </section>
</template>

<script setup lang="ts">
const { locale, t } = useI18n();
const selectedLang = ref({ name: locale.value == 'en' ? 'English' : 'Spanish' });

const handleSelectChange = (e) => {
  const selectedValue = selectedLang.value.name
  console.log('Selected value:', selectedLang.value.name);
  if (selectedValue == 'English') {
    locale.value = 'en'

  } else {
    locale.value = 'es'
  }
}
const langs = ref([
  { name: 'English' },
  { name: 'Spanish' }
]);
const items = ref([
  {
    label: 'Home',
  },
  {
    label: 'Projects',
  },
  {
    label: 'Skills',
  },
  {
    label: 'Contact',
  }
]);
</script>
