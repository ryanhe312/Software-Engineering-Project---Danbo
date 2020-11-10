<template>
  <v-app >
    <div class="grey lighten-5">
    <v-card class="overflow-hidden" color="#F2F2F0">
      <TopBar />
      <v-container fluid >
        <v-row justify="center">
        <v-col sm="2">
            <RightBar/>
          </v-col>
          <v-col sm="9">
              <Followers/>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
    </div>
  </v-app>
</template>

<script>
export default {
  name: "Follow",

  components: {
    TopBar: () => import("../components/TopBar"),
    Followers: () => import("../components/Followers"),
    // Tweets: () => import("../components/Tweets"),
    // SideBar: () => import("../components/SideBar"),
    RightBar: () => import("../components/RightBar"),
    // DashboardCoreDrawer: () => import('./components/Drawer'),
    // DashboardCoreSettings: () => import('./components/Settings'),
    // DashboardCoreView: () => import('./components/View'),
  },

  data: () => ({
  }),
};
</script>
