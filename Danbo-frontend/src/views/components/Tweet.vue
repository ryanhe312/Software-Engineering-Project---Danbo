<template>
  <div>
    <v-container fluid>
      <v-row justify="center">
        <v-col cols="12">
          <v-card-title>
            <v-list-item-avatar color="grey darken-2">
              <v-img
                class="elevation-6"
                alt=""
                :src="profile"
              ></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>
                <router-link :to="{path:'/otherper',query:{user:this.tweet['origin_user']}}">
                  {{ this.nickname }}
                </router-link>
              </v-list-item-title>
            </v-list-item-content>
          </v-card-title>

          <v-card-text class="bold">
            {{ tweet["origin_content"] }}
          </v-card-text>

          <v-card class="mx-auto" elevation="0" max-width="500">
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
              <v-chip v-for="tag in tweet['tags']" :key="tag" label :to="{path:'/topic',query:{currentTopic:tag}}">
               {{ tag }}
              </v-chip>
            </v-chip-group>
          </v-card-text>

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

                <v-icon class="mr-1"> mdi-comment </v-icon>
                <span class="subheading mr-2">10</span>

                <v-icon class="mr-1"> mdi-share-variant </v-icon>
                <span class="subheading">45</span>
              </v-row>
            </v-list-item>
          </v-card-actions>
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
  components: {},

  data() {
    return {
      tweet_id: 0,
      tweet: this.tweet_content,
      nickname: "",
      profile: "https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light",
      like_usernames: [],
      like_num: 0,
      like_flag: false,
      url_prefix: "http://127.0.0.1:8000/media/",
    };
  },

  watch: {
    tweet_content(curVal, oldVal) {
      this.tweet = curVal;
      this.tweet_id = this.tweet["id"];
      this.get_like();
      this.get_nickname(this.tweet["origin_user"]);
      this.get_profile(this.tweet["origin_user"]);
    },
  },

  computed: {},

  mounted() {
    this.tweet_id = this.tweet["id"];
    this.get_like();
    this.get_nickname(this.tweet["origin_user"]);
    this.get_profile(this.tweet["origin_user"]);
  },

  methods: {
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
    get_nickname: async function (username) {
      var formdata = new FormData();
      formdata.append("username", username);
      await this.axios
        .post("/user/getNickname", formdata, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((response) => {
          var data = response.data;
          if (data.error_code == 200) {
            this.nickname = data.data;
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