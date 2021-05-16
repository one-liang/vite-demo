<template>
  <div class="h-screen py-4 bg-indigo-50">
    <h1 class="mb-8 text-3xl font-black text-center">FBLogin</h1>

    <div class="flex flex-col items-center p-4 mx-auto text-center md:w-1/3">
      <div
        class="relative inline-flex items-center justify-center flex-shrink-0 w-12 h-12 mb-5 overflow-hidden text-indigo-500 bg-indigo-100 rounded-full"
      >
        <img :src="userpicture" class="absolute object-contain" />
      </div>
      <div class="flex-grow">
        <h2 class="mb-3 text-lg font-medium text-gray-900 title-font">
          {{ username }}
        </h2>
        <p class="text-base leading-relaxed">
          {{ userID }}
        </p>
        <button
          v-if="!connected"
          @click="connect"
          class="inline-flex items-center mt-3 text-indigo-500"
          type="button"
        >
          login
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            class="w-4 h-4 ml-2"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FBLogin",
  data() {
    return {
      connected: false,
      userID: "",
      username: "",
      userpicture: "",
    };
  },
  mounted() {
    FB.init({
      appId: "145774977565705",
      version: "v10.0",
    });
    FB.getLoginStatus(this.statusGet);
  },
  methods: {
    connect() {
      FB.login(this.statusGet);
    },
    statusGet(result) {
      if (result.status === "connected") {
        this.connected = true;
        FB.api(
          "/me",
          "GET",
          {
            fields: ["picture", "name"],
          },
          (rs) => {
            this.userID = rs.id;
            this.username = rs.name;
            this.userpicture = rs.picture.data.url;
            console.log(rs);
          }
        );
      }
    },
  },
};
</script>