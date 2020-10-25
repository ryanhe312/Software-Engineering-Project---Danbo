<template>
  <v-app>
    <v-card class="overflow-hidden" yellow lighten-5>
      <TopBar />
      <v-container fluid>
        <v-row>
          <v-col cols="2" sm="4" offset-sm="2">
            <Tweets />
          </v-col>

          <v-col cols="2" sm="4">
            <SideBar />
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-app>
</template>

<script>
export default {
  name: "DashboardIndex",

  components: {
    TopBar: () => import("../components/TopBar"),
    Tweets: () => import("../components/Tweets"),
    SideBar: () => import("../components/SideBar"),
    // DashboardCoreDrawer: () => import('./components/Drawer'),
    // DashboardCoreSettings: () => import('./components/Settings'),
    // DashboardCoreView: () => import('./components/View'),
  },

  data: () => ({
    list: [1, 2, 3, 4, 5, 6],
  }),
};
</script>
