<template>
  <v-app>
    <div class="grey lighten-5">
      <v-card class="overflow-hidden" yellow lighten-5>
        <TopBar />
      </v-card>
      <v-card>
          <List />
      </v-card>
    </div>
  </v-app>
</template>

<script>
export default {
  name: "DashboardIndex",

  components: {
    TopBar: () => import("../components/TopBar"),
    List: () => import("../components/List"),
  },

  data: () => ({
    list: [1, 2, 3, 4, 5, 6],
  }),
};
</script>
