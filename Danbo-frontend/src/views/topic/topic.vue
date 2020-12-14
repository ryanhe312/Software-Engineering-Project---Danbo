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
              <Edit @refresh_content="refresh_tweetlist"/>
              <TweetList ref="tweetlist" :get_tweets_api="tweetlist_api" :get_tweets_formdata="tweetlist_formdata"/>
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
    Edit: () => import("../components/Edit"),
  },

  data: () => ({
    currentTopic: "",
    Share_text: "",
    tweetlist_api: "/blog/getTopicBlogs",
    tweetlist_formdata: "",
    hotTopics: global.information["hotTopics"],
  }),
  watch: {
    '$route' (to, from) {
      this.currentTopic = to.query.currentTopic;
      var formdata = new FormData();
      formdata.append("topic",this.currentTopic);
      this.tweetlist_formdata = formdata;
    },
  }, 
  mounted: async function() {
    this.currentTopic = this.$route.query.currentTopic;
    // console.log(this.currentTopic)
    var formdata = new FormData();
    formdata.append("topic",this.currentTopic);
    this.tweetlist_formdata = formdata;
    if (this.currentTopic==null)
      this.currentTopic="Choose one topic!", console.log(this.currentTopic);
    // else
      // this.refresh_tweetlist();
    // console.log(this.currentTopic)
  },
  methods: {
      change: function(){
      window.location.reload()
      // this.reload();
    },
    refresh_tweetlist: async function () {
      // console.log("yes")
      this.$refs.tweetlist.get_tweets();
    },
  },
};
</script>
