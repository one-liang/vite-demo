<template>
  <transition-group
    appear=""
    tag="ul"
    class="mx-auto max-w-prose"
    @before-enter="beforeEnter"
    @enter="enter"
  >
    <li v-for="(item, index) in data" :key="item.sno" :data-index="index">
      {{ item.sno }} | {{ item.sarea }} | {{ item.sna }}
    </li>
  </transition-group>
</template>

<script>
import axios from "axios";
import gsap from "gsap";

export default {
  name: "AxiosDemo",
  data() {
    return {
      data: {},
    };
  },
  mounted() {
    axios
      .get("api/datasets/71CD1490-A2DF-4198-BEF1-318479775E8A/json/preview")
      .then((res) => {
        this.data = res.data;
      });
  },
  methods: {
    beforeEnter(el) {
      console.log("beforeEnter");
      el.style.opacity = 0;
      el.style.transfrom = "translateY(100px)";
    },
    enter(el, done) {
      console.log("enter");
      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        onComplete: done,
        delay: el.dataset.index * 0.03,
      });
    },
  },
};
</script>