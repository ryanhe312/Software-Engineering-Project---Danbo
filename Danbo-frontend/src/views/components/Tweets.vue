<template>
  <div>
    <Edit/>
    <Tweet/>

    <!-- </div> -->
  </div>
</template>

<script>
import global from "../components/global";
import Tweet from './Tweet.vue';

export default {
  name: "tweets",

  components: {
    Tweet: () => import("../components/Tweet"),
    Edit: () => import("../components/Edit"),
  },

  data: () => ({
    Share_text: "",
  }),

  computed: {},

  mounted() {
  },

  methods: {},
};
</script>
