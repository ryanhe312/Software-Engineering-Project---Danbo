<template>
  <v-app>
    <div class="grey lighten-5">
      <v-card class="overflow-hidden" color="#F2F2F0">
        <TopBar />
        <v-container fluid>
          <v-row justify="center">
            <v-col sm="3">
              <SideBar />
            </v-col>

            <v-col sm="6">
              <v-card color="#6495ed" dark>
                <div class="d-flex flex-no-wrap justify-space-between">
                  <div>
                    <v-card-title
                      class="headline"
                      v-text="currentTopic"
                    ></v-card-title>
                    <v-card-actions>
                      <v-btn class="ml-2 mt-5" outlined rounded small @click="change">
                        Refresh
                      </v-btn>
                    </v-card-actions>
                  </div>
                </div>
              </v-card>
              
              <v-row class="mb-4"></v-row>

              <TweetList />
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </div>
  </v-app>
</template>

<script>
import global from "../components/global"
export default {
  name: "Home",

  components: {
    TopBar: () => import("../components/TopBar"),
    TweetList: () => import("../components/TweetList"),
    SideBar: () => import("../components/SideBar"),
  },

  data: () => ({
    currentTopic: this.$route.query.currentTopic,
  }),
  mounted: async function() {
  },
  methods: {
      change: function(){
      window.location.reload()
      // this.reload();
    },
  },
};
</script>
