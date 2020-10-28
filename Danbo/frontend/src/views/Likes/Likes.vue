<template>
  <v-app >
    <div class="grey lighten-5">
    <v-card class="overflow-hidden" yellow lighten-5>
      <LikesBar />
    </v-card>
    <v-container fluid >
        <v-row>
          <v-col cols="2" sm="4" offset-sm="0">
            <LikesList />
          </v-col>
        </v-row>
      </v-container>
    <v-container fluid >
        <v-row>
          <v-col cols="4" sm="4" offset-sm="6">
            <PossibleLikes />
          </v-col>
        </v-row>
      </v-container>
    </div>
  </v-app>
</template>

<script>
export default {
  name: "DashboardIndex",

  components: {
    LikesBar: () => import("../components/LikesBar"),
    LikesList: () => import("../components/LikesList"),
    PossibleLikes: () => import("../components/PossibleLikes"),
    // DashboardCoreDrawer: () => import('./components/Drawer'),
    // DashboardCoreSettings: () => import('./components/Settings'),
    // DashboardCoreView: () => import('./components/View'),
  },

  data: () => ({
    list: [1, 2, 3, 4, 5, 6],
  }),
};
</script>
