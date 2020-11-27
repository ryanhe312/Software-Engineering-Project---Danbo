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
      await this.request_data("allBlogs");
      this.tweets = global.information["allBlogs"];
    },
  },
};
</script>
