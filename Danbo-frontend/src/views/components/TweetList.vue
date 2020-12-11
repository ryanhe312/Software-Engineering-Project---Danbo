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
      <Tweet :tweet_content="tweet" />
    </v-card>
    <!-- </v-row> -->
  </div>
</template>


<script>
import global from "../components/global";
import Tweet from "./Tweet.vue";
import OtherPer from "../OtherPer/OtherPer";
export default {
  name: "tweetlist",

  components: {
    Tweet: () => import("../components/Tweet"),
  },

  props: ["get_tweets_api"],

  data: () => ({
    tweets: [],
  }),

  computed: {},

  mounted() {
    this.get_tweets();
  },

  methods: {
    get_tweets: async function () {
      var formdata = new FormData();
      await this.axios
        .post(this.get_tweets_api, formdata, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((response) => {
          var data = response.data;
          if (data.error_code == 200) {
            this.tweets = data.data;
          }
        });
    },
  },
};
</script>
