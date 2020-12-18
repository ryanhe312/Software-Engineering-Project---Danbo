<template>
  <div>
    <Edit @refresh_content="refresh_tweetlist"/>
    <TweetList ref="tweetlist" :get_tweets_api="tweetlist_api" :get_tweets_formdata="tweetlist_formdata"/>
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

  data() {
    var formdata = new FormData();
    return {
      tweetlist_api: "/blog/refreshBlogs",
      tweetlist_formdata: formdata,
    };
  },

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