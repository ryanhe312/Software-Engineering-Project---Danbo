<template>
  <v-app>
      <v-card class="overflow-hidden" yellow lighten-5>
        <TopBar />
        <Tweets />
        <DashboardCoreView />
      </v-card>
  </v-app>
</template>

<script>
export default {
  name: "DashboardIndex",

  components: {
    TopBar: () => import("../components/TopBar"),
    Tweets: () => import("../components/Tweets"),
    //DashboardCoreDrawer: () => import('../components/Drawer'),
    //DashboardCoreSettings: () => import('../components/Settings'),
    DashboardCoreView: () => import('../components/View'),
  },

  data: () => ({
    list: [1, 2, 3, 4, 5, 6],
  }),
};
</script>
