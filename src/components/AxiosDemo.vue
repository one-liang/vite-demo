<template>
  <ul class="mx-auto max-w-prose">
    <li v-for="item in data" :key="item.sno">{{ item.sno }} | {{ item.sarea }} | {{ item.sna }}</li>
  </ul>
</template>

<script>
import axios from 'axios';

export default {
  name: "AxiosDemo",
  data() {
    return {
      data: {},
    };
  },
  mounted() {
    axios
      .get(
        "api/datasets/71CD1490-A2DF-4198-BEF1-318479775E8A/json/preview"
      )
      .then((res) => {
        this.data = res.data
      });
  },
};
</script>