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
    <v-row class="mt-10" justify="center">
      <v-img
        max-height="300"
        max-width="400"
        src="../../../../../danbo.png"
      ></v-img>
    </v-row>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    files: [],
  }),
};
</script>