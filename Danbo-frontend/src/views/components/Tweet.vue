<template>
  <div>
    <v-container fluid>
      <v-row justify="center">
        <v-col cols="12">
          <v-card-title>
            <v-list-item-avatar color="grey darken-2">
              <router-link
                tag="img"
                :src="
                  this.tweet['users'].length == 0 ? origin_profile : profile
                "
                :to="{
                  path: '/otherper',
                  query: {
                    user:
                      this.tweet['users'].length == 0
                        ? this.tweet['origin_user']
                        : this.tweet['users'][0],
                  },
                }"
              >
              </router-link>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>
                <router-link
                  style="display: inline-block; text-decoration: none"
                  :to="{
                    path: '/otherper',
                    query: {
                      user:
                        this.tweet['users'].length == 0
                          ? this.tweet['origin_user']
                          : this.tweet['users'][0],
                    },
                  }"
                >
                  {{
                    this.tweet["users"].length == 0
                      ? this.origin_nickname
                      : this.nickname
                  }}
                </router-link>
              </v-list-item-title>
            </v-list-item-content>
          </v-card-title>

          <v-card-text class="bold" v-if="this.tweet['users'].length == 0">
            {{ tweet["origin_content"] }}
          </v-card-text>

          <v-card-text class="bold" v-if="this.tweet['users'].length > 0">
            {{ this.tweet["contents"][0] }}
            <template v-for="(repost, i) in repost_elements">
              <span :key="'prefix'+i">//</span>
              <router-link
                style="display: inline-block; text-decoration: none"
                :to="{
                  path: '/otherper',
                  query: { user: repost.user },
                }"
                :key="i"
              >
                @{{ repost.nickname }}
              </router-link>
              <span :key="'postfix'+i">:{{ repost.content }}</span>
            </template>
          </v-card-text>

          <v-card
            class="mx-auto"
            elevation="0"
            max-width="500"
            v-if="this.tweet['users'].length == 0"
          >
            <v-row>
              <v-col
                v-for="(img, i) in tweet[`pictures`]"
                :key="i"
                class="d-flex child-flex"
                cols="4"
              >
                <v-img
                  :src="complete_image_url(img)"
                  aspect-ratio="1"
                  class="grey lighten-2"
                >
                  <template v-slot:placeholder>
                    <v-row
                      class="fill-height ma-0"
                      align="center"
                      justify="center"
                    >
                      <v-progress-circular
                        indeterminate
                        color="grey lighten-5"
                      ></v-progress-circular>
                    </v-row>
                  </template>
                </v-img>
              </v-col>
            </v-row>
          </v-card>

          <v-card-text class="bold" v-if="this.tweet['users'].length == 0">
            <v-chip-group active-class="primary--text" column>
              <v-chip
                v-for="tag in tweet['tags']"
                :key="tag"
                label
                :to="{ path: '/topic', query: { currentTopic: tag } }"
              >
                {{ tag }}
              </v-chip>
            </v-chip-group>
          </v-card-text>

          <v-row justify="end">
            <v-col cols="11">
              <v-card
                v-if="this.tweet['users'].length > 0"
                flat
                color="#FAFAFA"
              >
                <v-card-title>
                  <v-list-item-avatar color="grey darken-2">
                    <router-link
                      tag="img"
                      :src="origin_profile"
                      :to="{
                        path: '/otherper',
                        query: { user: this.tweet['origin_user'] },
                      }"
                    >
                    </router-link>
                  </v-list-item-avatar>

                  <v-list-item-content>
                    <v-list-item-title>
                      <router-link
                        style="display: inline-block; text-decoration: none"
                        :to="{
                          path: '/otherper',
                          query: { user: this.tweet['origin_user'] },
                        }"
                      >
                        {{ this.origin_nickname }}
                      </router-link>
                    </v-list-item-title>
                  </v-list-item-content>
                </v-card-title>

                <v-card-text class="bold">
                  {{ tweet["origin_content"] }}
                </v-card-text>

                <v-card
                  class="mx-auto"
                  elevation="0"
                  max-width="500"
                  color="#FAFAFA"
                >
                  <v-row>
                    <v-col
                      v-for="(img, i) in tweet[`pictures`]"
                      :key="i"
                      class="d-flex child-flex"
                      cols="4"
                    >
                      <v-img
                        :src="complete_image_url(img)"
                        aspect-ratio="1"
                        class="grey lighten-2"
                      >
                        <template v-slot:placeholder>
                          <v-row
                            class="fill-height ma-0"
                            align="center"
                            justify="center"
                          >
                            <v-progress-circular
                              indeterminate
                              color="grey lighten-5"
                            ></v-progress-circular>
                          </v-row>
                        </template>
                      </v-img>
                    </v-col>
                  </v-row>
                </v-card>
                <v-card-text class="bold">
                  <v-chip-group active-class="primary--text" column>
                    <v-chip
                      v-for="tag in tweet['tags']"
                      :key="tag"
                      label
                      :to="{ path: '/topic', query: { currentTopic: tag } }"
                    >
                      {{ tag }}
                    </v-chip>
                  </v-chip-group>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>

          <v-card-actions>
            <v-list-item class="grow">
              <v-row align="center" justify="end">
                <v-icon class="mr-1" v-if="!like_flag" @click="like_tweet">
                  mdi-heart
                </v-icon>
                <v-icon
                  class="mr-1"
                  color="red"
                  v-if="like_flag"
                  @click="like_tweet"
                >
                  mdi-heart
                </v-icon>
                <span class="subheading mr-2">{{ this.like_num }}</span>

                <v-icon
                  class="mr-1"
                  v-if="!show_comments"
                  @click="present_comments()"
                >
                  mdi-comment
                </v-icon>
                <v-icon
                  class="mr-1"
                  color="blue"
                  v-if="show_comments"
                  @click="present_comments()"
                >
                  mdi-comment
                </v-icon>
                <span class="subheading mr-2">
                  {{ this.comments.length }}
                </span>

                <v-icon
                  class="mr-1"
                  v-if="!show_repost"
                  @click="present_repost()"
                >
                  mdi-share-variant
                </v-icon>
                <v-icon
                  class="mr-1"
                  color="blue"
                  v-if="show_repost"
                  @click="present_repost()"
                >
                  mdi-share-variant
                </v-icon>
                <!-- <span class="subheading">45</span> -->
              </v-row>
            </v-list-item>
          </v-card-actions>

          <div v-if="show_comments">
            <v-divider></v-divider>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  v-model="new_comment"
                  :append-outer-icon="new_comment ? 'mdi-send' : 'mdi-send'"
                  filled
                  counter="30"
                  :rules="comment_rules"
                  clear-icon="mdi-close-circle"
                  clearable
                  label="Comment"
                  type="text"
                  @click:append-outer="send_comment"
                  @click:clear="new_comment = ''"
                ></v-text-field>
              </v-col>
            </v-row>

            <Comments :comment_data="comments" />
          </div>

          <div v-if="show_repost">
            <v-divider></v-divider>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  v-model="new_repost"
                  :append-outer-icon="new_repost ? 'mdi-send' : 'mdi-send'"
                  filled
                  counter="100"
                  :rules="repost_rules"
                  clear-icon="mdi-close-circle"
                  clearable
                  label="Repost"
                  type="text"
                  @click:append-outer="send_repost"
                  @click:clear="new_repost = ''"
                ></v-text-field>
              </v-col>
            </v-row>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>


<script>
import global from "../components/global";

export default {
  name: "tweet",
  props: ["tweet_content"],
  components: {
    Comments: () => import("../components/Comments"),
  },

  data() {
    return {
      tweet_id: 0,
      tweet: this.tweet_content,
      origin_nickname: "",
      origin_profile:
        "https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light",
      nickname: "",
      profile:
        "https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light",
      repost_elements: [],
      like_usernames: [],
      like_num: 0,
      like_flag: false,
      comments: [],
      show_comments: false,
      new_comment: "",
      comment_rules: [(v) => v.length <= 30 || "Max 30 characters"],
      show_repost: false,
      new_repost: "",
      repost_rules: [(v) => v.length <= 100 || "Max 100 characters"],
      url_prefix: "http://127.0.0.1:8000/media/",
    };
  },

  watch: {
    tweet_content: async function(curVal, oldVal) {
      this.tweet = curVal;
      this.tweet_id = this.tweet["id"];
      await this.get_like();
      await this.get_origin_nickname(this.tweet["origin_user"]);
      await this.get_origin_profile(this.tweet["origin_user"]);
      await this.get_comments();
      if (this.tweet["users"].length > 0) {
        await this.get_profile(this.tweet["users"][0]);
        this.repost_elements = new Array(this.tweet["users"].length - 1);
        for (var i = 0; i < this.tweet["users"].length - 1; ++i) {
          this.repost_elements[i] = {};
        }
        for (let i in this.tweet["users"]) {
          await this.get_nickname(this.tweet["users"][i], i);
          if (i > 0) {
            this.repost_elements[i - 1]["user"] = this.tweet["users"][i];
            this.repost_elements[i - 1]["content"] = this.tweet["contents"][i];
          }
        }
        this.$forceUpdate();
      }
    },
  },

  computed: {},

  mounted: async function () {
    this.tweet_id = this.tweet["id"];
    await this.get_like();
    await this.get_origin_nickname(this.tweet["origin_user"]);
    await this.get_origin_profile(this.tweet["origin_user"]);
    await this.get_comments();
    if (this.tweet["users"].length > 0) {
      await this.get_profile(this.tweet["users"][0]);
      this.repost_elements = new Array(this.tweet["users"].length - 1);
      for (var i = 0; i < this.tweet["users"].length - 1; ++i) {
        this.repost_elements[i] = {};
      }
      for (let i in this.tweet["users"]) {
        await this.get_nickname(this.tweet["users"][i], i);
        if (i > 0) {
          this.repost_elements[i - 1]["user"] = this.tweet["users"][i];
          this.repost_elements[i - 1]["content"] = this.tweet["contents"][i];
        }
      }
      this.$forceUpdate();
    }
  },

  methods: {
    present_comments: function () {
      if (this.show_comments) {
        this.show_comments = false;
      } else {
        this.show_repost = false;
        this.show_comments = true;
      }
    },
    present_repost: function () {
      if (this.show_repost) {
        this.show_repost = false;
      } else {
        this.show_comments = false;
        this.show_repost = true;
      }
    },
    send_repost: async function () {
      if (this.new_repost.length > 100) {
        alert("评论内容不能超过100字！");
        return;
      }
      var formdata = new FormData();
      formdata.append("content", this.new_repost);
      formdata.append("blog_id", this.tweet_id);

      //request needed data
      await this.axios.post("/blog/repostBlog", formdata).then((response) => {
        var data = response.data;
        if (data.message) alert(data.message);
        if (data.error_code == 200) {
          this.new_repost = "";
          this.$emit("refresh_tweetlist");
        }
      });
    },
    send_comment: async function () {
      if (this.new_comment.length > 30) {
        alert("评论内容不能超过30字！");
        return;
      }
      var formdata = new FormData();
      formdata.append("content", this.new_comment);
      formdata.append("blog_id", this.tweet_id);

      //request needed data
      await this.axios.post("/blog/comment", formdata).then((response) => {
        var data = response.data;
        if (data.message) alert(data.message);
        if (data.error_code == 200) {
          this.new_comment = "";
          this.get_comments();
        }
      });
    },
    get_comments: async function () {
      var formdata = new FormData();
      formdata.append("blog_id", this.tweet_id);
      await this.axios
        .post("/blog/getComments", formdata, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((response) => {
          var data = response.data;
          if (data.error_code == 200) {
            this.comments = data.data;
          }
        });
    },
    get_profile: async function (username) {
      var formdata = new FormData();
      formdata.append("username", username);
      await this.axios
        .post("/user/getProfile", formdata, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((response) => {
          var data = response.data;
          if (data.error_code == 200) {
            this.profile = this.url_prefix + data.data;
          }
        });
    },
    get_nickname: async function (username, index) {
      var formdata = new FormData();
      formdata.append("username", username);
      await this.axios
        .post("/user/getNickname", formdata, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((response) => {
          var data = response.data;
          if (data.error_code == 200) {
            if (index > 0) {
              this.repost_elements[index - 1]["nickname"] = data.data;
            } else {
              this.nickname = data.data;
            }
          }
        });
    },
    get_origin_profile: async function (username) {
      var formdata = new FormData();
      formdata.append("username", username);
      await this.axios
        .post("/user/getProfile", formdata, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((response) => {
          var data = response.data;
          if (data.error_code == 200) {
            this.origin_profile = this.url_prefix + data.data;
          }
        });
    },
    get_origin_nickname: async function (username) {
      var formdata = new FormData();
      formdata.append("username", username);
      await this.axios
        .post("/user/getNickname", formdata, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((response) => {
          var data = response.data;
          if (data.error_code == 200) {
            this.origin_nickname = data.data;
          }
        });
    },
    get_like: async function () {
      var formdata = new FormData();
      formdata.append("blog_id", this.tweet_id);
      await this.axios
        .post("/blog/getLikes", formdata, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((response) => {
          var data = response.data;
          if (data.error_code == 200) {
            this.like_usernames = data.data;
          }
        });
      this.like_num = this.like_usernames.length;
      if (this.like_usernames.indexOf(global.information["username"]) >= 0) {
        this.like_flag = true;
      }
    },
    like_tweet: async function () {
      await this.get_like();
      var formdata = new FormData();
      formdata.append("blog_id", this.tweet_id);

      if (this.like_flag) {
        await this.axios
          .post("/blog/cancelLike", formdata, {
            headers: { "Content-Type": "multipart/form-data" },
          })
          .then((response) => {
            var data = response.data;
            if (data.error_code == 200) {
              this.like_flag = !this.like_flag;
              this.like_num -= 1;
            }
          });
      } else {
        await this.axios
          .post("/blog/giveLike", formdata, {
            headers: { "Content-Type": "multipart/form-data" },
          })
          .then((response) => {
            var data = response.data;
            if (data.error_code == 200) {
              this.like_flag = !this.like_flag;
              this.like_num += 1;
            }
          });
      }
    },
    complete_image_url: function (rel_url) {
      var url = this.url_prefix + rel_url;
      return url;
    },
  },
};
</script>