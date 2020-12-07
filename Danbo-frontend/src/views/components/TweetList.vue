<template>
  <div>
    <!-- All the blogs! -->
    <v-card
      elevation="1"
      class="mx-auto mb-2"
      outlined
      color="white"
      max-width="1200"
      v-for="(tweet, i) in tweets"
      :key="i"
    >
      <Tweet :tweet_content="tweet" :tweet_id="i"/>
    </v-card>
    <!-- </v-row> -->
  </div>
</template>


<script>
import global from "../components/global";
import Tweet from './Tweet.vue';

export default {
  name: "tweetlist",

  components: {
      Tweet: () => import("../components/Tweet"),
  },

  data: () => ({
    tweets: [],
  }),

  computed: {},

  mounted() {
    this.get_tweets();
  },

  methods: {
    get_tweets: async function () {
      var path = this.$route.path;
      // console.log("now we are in", path);
      if(path=="/home")
      {
        await this.request_data("allBlogs");
        this.tweets = global.information["allBlogs"];
      }
      else if(path=="/topic")
      {
        // console.log("topic")
        await this.request_data("allBlogs");
        this.tweets = global.information["allBlogs"];
        // global.information["currentTopic"] = this.$route.query.currentTopic;
        // await this.request_data("getTopicBlogs");
        // this.tweets = global.information["topicBlogs"];
      }
      else
      {
        // console.log("otherperson")
        await this.request_data("allBlogs");
        this.tweets = global.information["allBlogs"];
      }

      
    },
  },
};
</script>
