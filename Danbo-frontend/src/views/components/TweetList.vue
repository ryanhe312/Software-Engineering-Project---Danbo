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
export default {
  name: "tweetlist",
  components: {
    Tweet: () => import("../components/Tweet"),
  },
  props: ["get_tweets_api", "get_tweets_formdata"],
  data: () => ({
    tweets: [],
  }),
  watch: {
    get_tweets_formdata(curVal, oldVal) {
      this.get_tweets();
    },
  },
  computed: {},
  mounted() {
    this.get_tweets();
  },
  methods: {
    get_tweets: async function () {
      await this.axios
        .post(this.get_tweets_api, this.get_tweets_formdata, {
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