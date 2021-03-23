<template>
  <div class="text-center">
    <div class="w-64 p-2 mx-auto my-8 space-y-2 bg-gray-200 min-h-4" @drop="onDrop($event, 1)"
      @dragenter.prevent
      @dragover.prevent>
      <div class="p-1 text-white bg-green-500"
        draggable="true"
        @dragstart="startDrag($event, item)"
        v-for="item in getList(1)"
        :key="item.id">
        {{ item.title }}
      </div>
    </div>
    <div class="w-64 p-2 mx-auto my-8 space-y-2 bg-gray-200 min-h-4" @drop="onDrop($event, 2)"
      @dragenter.prevent
      @dragover.prevent>
      <div class="p-1 text-white bg-green-500"
        draggable="true"
        @dragstart="startDrag($event, item)"
        v-for="item in getList(2)"
        :key="item.id">
        {{ item.title }}
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const items = ref([
      { id: 0, title: "Item A", list: 1 },
      { id: 1, title: "Item B", list: 1 },
      { id: 2, title: "Item C", list: 2 },
    ]);

    const getList = (list) => {
      return items.value.filter((item) => item.list == list);
    };

    const startDrag = (event, item) => {
      console.log("item: ", item);
      console.log("dataTransfer: ", event.dataTransfer);
      event.dataTransfer.dropEffect = "move";
      event.dataTransfer.effectAllowed = "move";
      event.dataTransfer.setData("itemID", item.id);
    };

    const onDrop = (event, list) => {
      const itemID = event.dataTransfer.getData("itemID");
      const item = items.value.find((item) => item.id == itemID);
      item.list = list;
      console.log("itemID: ", itemID);
      console.log("item: ", item);
    };

    return {
      getList,
      onDrop,
      startDrag,
    };
  },
};
</script>