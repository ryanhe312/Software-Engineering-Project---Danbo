<template>
  <v-card class="mx-n16" width="1000" height="800">
    <v-system-bar></v-system-bar>
    <v-card elevation="0" class="mt-4 mx-auto">
      <p class="title" align="center">About us</p>
    </v-card>
    <v-divider></v-divider>
    <div class="mt-10 text-center">
      <p class="font-weight-black">Here is Danbo team !</p>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "blank",
  data: () => ({
   // keyword: "",   
  }),
  async mounted(){
      this.$router.push({path:"/search", query:{keyword:this.$route.query.keyword}})
  },
  methods: {
  },
};
</script>
