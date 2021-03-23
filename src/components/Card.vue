<template>
  <div class="w-full max-w-sm p-4 mx-auto bg-white border rounded-md shadow">
    <div class="flex space-x-4">
      <img :src="data.img" class="w-16 h-16 rounded-full" />
      <div class="flex-1 py-1 space-y-4">
        <span class="w-3/4 h-4 tracking-wider text-gray-500 uppercase rounded">Write by</span>
        <div class="space-y-2">
          <h3 class="text-lg text-gray-900 rounded">{{ data.name }}</h3>
          <p class="w-5/6 leading-relaxed text-gray-700 rounded">{{ data.info }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
const loadData = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: "My Vite",
        img: "https://picsum.photos/id/1011/100/100",
        info:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      });
    }, 2000);
  });
};

export default {
  async setup() {
    const data = ref(await loadData());

    return {
      data,
    };
  },
};
</script>
