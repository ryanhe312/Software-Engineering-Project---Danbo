<template>
  <v-list three-line>
    <template v-for="(comment, i) in comments">
      <v-subheader
        v-if="comment.header"
        :key="comment.header"
        v-text="comment.header"
      ></v-subheader>

      <v-divider
        v-else-if="comment.divider"
        :key="i"
        :inset="comment.inset"
      ></v-divider>

      <v-list-item v-else :key="comment.username">
        <v-list-item-avatar>
          <v-img :src="comment.profile"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>
            <router-link
              style="display: inline-block;text-decoration:none;"
              :to="{
                path: '/otherper',
                query: { user: comment.username },
              }"
            >
              {{ comment.nickname }}
            </router-link>
          </v-list-item-title>
          <v-list-item-subtitle>
            {{ comment.content }}
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </template>
  </v-list>
</template>


<script>
import global from "../components/global";
export default {
  name: "comments",
  props: ["comment_data"],
  data: () => ({
    comments: [],
    url_prefix: "http://127.0.0.1:8000/media/",
  }),
  watch: {
    comment_data: async function (curVal, oldVal) {
      this.comments = curVal;
      for (let i in this.comments) {
        await this.get_nickname(i);
        await this.get_profile(i);
      }
      this.$forceUpdate();
    },
  },
  computed: {},
  mounted: async function () {
    this.comments = this.comment_data;
    for (let i in this.comments) {
      await this.get_nickname(i);
      await this.get_profile(i);
    }
    this.$forceUpdate();
  },
  methods: {
    get_profile: async function (index) {
      var formdata = new FormData();
      formdata.append("username", this.comments[index]["username"]);
      await this.axios
        .post("/user/getProfile", formdata, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((response) => {
          var data = response.data;
          if (data.error_code == 200) {
            this.comments[index]["profile"] = this.url_prefix + data.data;
          }
        });
    },
    get_nickname: async function (index) {
      var formdata = new FormData();
      formdata.append("username", this.comments[index]["username"]);
      await this.axios
        .post("/user/getNickname", formdata, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((response) => {
          var data = response.data;
          if (data.error_code == 200) {
            this.comments[index]["nickname"] = data.data;
          }
        });
    },
  },
};
</script>