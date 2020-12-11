<template>
  <div>
    <Edit @refresh_content="refresh_tweetlist"/>
    <TweetList ref="tweetlist" :get_tweets_api="'/blog/refreshBlogs'" />
  </div>
</template>

<script>
import global from "../components/global";
import TweetList from './TweetList.vue';

export default {
  name: "tweets",

  components: {
    TweetList: () => import("../components/TweetList"),
    Edit: () => import("../components/Edit"),
  },

  data: () => ({
    Share_text: "",
    tweetlist_api: "/blog/refreshBlogs",
  }),

  computed: {},

  mounted() {
  },

  methods: {
    refresh_tweetlist: async function () {
      this.$refs.tweetlist.get_tweets();
    },
  },
};
</script>
