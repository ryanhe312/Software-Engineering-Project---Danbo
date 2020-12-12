<template>
  <v-app>
    <div class="grey lighten-5">
      <v-card class="overflow-hidden" yellow lighten-5>
        <TopBar />
      </v-card>
      <v-card>
        <div>
          <v-row>
            <v-col cols="1" sm="5" offset-sm="0">
              <v-card max-width="375" class="mx-auto">
                <v-img :src="images" height="300px" dark>
                  <v-row class="fill-height">
                    <v-card-title>
                      <v-btn class="mx-5" dark icon @click="gohome()">
                        <v-icon>mdi-chevron-left</v-icon>
                      </v-btn>
                    </v-card-title>
                    <v-row align="center" justify="end">
                      <v-icon class="mx-16" x-large> </v-icon>
                      <v-icon class="mx-2" x-large> </v-icon>

                      <v-icon class="mx-16" color="grey" x-large v-if="!like_flag">
                        mdi-heart
                      </v-icon>
                      <v-icon
                        class="mx-16"
                        color="red"
                        x-large
                        v-if="like_flag"
                      >
                        mdi-heart
                      </v-icon>
                    </v-row>
                    <v-spacer></v-spacer>

                    <v-card-title class="grey--text pl-16 pt-12">
                      <div class="display-1 pl-12 pt-12" v-text="name"></div>
                      <div>
                        <v-card-actions>
                          <v-btn text color="primary" @click="change(0)">
                            Following
                          </v-btn>
                          <v-btn text color="primary" @click="change(1)">
                            Followers
                          </v-btn>
                        </v-card-actions>
                      </div>
                    </v-card-title>
                  </v-row>
                </v-img>

                <v-list two-line>
                  <v-list-item>
                    <v-list-item-icon>
                      <v-icon color="indigo"> mdi-email </v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                      <v-list-item-title v-text="signature"></v-list-item-title>
                      <v-list-item-subtitle>signature</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>

                  <v-divider inset></v-divider>
                  <v-list-item>
                    <v-list-item-icon>
                      <v-icon color="indigo"> mdi-account-group </v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                      <v-list-item-title v-text="gender"></v-list-item-title>
                      <v-list-item-subtitle>gender</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>

                  <v-divider inset></v-divider>

                  <v-list-item>
                    <v-list-item-icon>
                      <v-icon color="indigo"> mdi-map-marker </v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                      <v-list-item-title v-text="address"></v-list-item-title>
                      <v-list-item-subtitle>address</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                  <v-divider inset></v-divider>
                  <v-list-item>
                    <v-list-item-icon>
                      <v-icon color="indigo">mdi-cake-layered</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                      <v-list-item-title v-text="birthday"></v-list-item-title>
                      <v-list-item-subtitle>birthday</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                  <v-divider inset></v-divider>
                  <v-list-item>
                    <v-list-item-icon>
                      <v-icon color="indigo"> mdi-email </v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                      <v-list-item-title v-text="email"></v-list-item-title>
                      <v-list-item-subtitle>Email</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-card>
            </v-col>
            <v-col cols="2" sm="6" offset-sm="0">
               <TweetList ref="tweetlist" :get_tweets_api="tweetlist_api" :get_tweets_formdata="tweetlist_formdata"/>
            </v-col>
          </v-row>
        </div>
      </v-card>
    </div>
  </v-app>
</template>

<script>
export default {
  name: "otherperson",

  components: {
    TopBar: () => import("../components/TopBar"),
    TweetList: () => import("../components/TweetList"),
  },

  data: () => ({
    user: "",
    name: "",
    gender: "",
    birthday: "",
    signature: "",
    email: "",
    like_flag: false,
    address: "",
    images: "https://cdn.vuetifyjs.com/images/lists/ali.png",
    tweetlist_api:"",
    tweetlist_formdata:"",
  }),
  async mounted() {
    await this.getdata();
    this.req_name();
    this.req_signature();
    this.req_address();
    this.req_gender();
    this.req_birthday();
    this.req_email();
    this.req_profile();
  },
  methods: {
    async getdata() {
      this.user = this.$route.query.user;
      var formdata = new FormData();
      formdata.append("username", this.user);
      this.tweetlist_api= "/blog/getBlog";
      this.tweetlist_formdata = formdata;
    },
    change: function (i) {
      console.log(this.$route.path, i);
      if (this.$route.path == "/follow") {
        if (i == 0 && this.$route.query.follow_view == "false") {
          this.$router.push({ path: "follow", query: { follow_view: "true" } });
          window.location.reload();
        }
        if (i == 1 && this.$route.query.follow_view == "true") {
          this.$router.push({
            path: "follow",
            query: { follow_view: "false" },
          });
          window.location.reload();
        }
      } else {
        if (i == 0)
          this.$router.push({ path: "follow", query: { follow_view: "true" } });
        else
          this.$router.push({
            path: "follow",
            query: { follow_view: "false" },
          });
      }
    },
    //获取昵称
    req_name: function () {
      var formdata = new FormData();
      formdata.append("username", this.user);
      this.axios
        .post("/user/getNickname", formdata, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((response) => this.ack_name(response))
        .catch(function (error) {
          console.log(error);
        });
    },
    ack_name: function (response) {
      var data = response.data;
      if (data.error_code == 200) {
        this.name = data.data;
      } else {
        this.name = data.data;
      }
    },
    //获取个性签名
    req_signature: function () {
      var formdata = new FormData();
      formdata.append("username", this.user);
      this.axios
        .post("/user/getSignature", formdata, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((response) => this.ack_signature(response))
        .catch(function (error) {
          console.log(error);
        });
    },
    ack_signature: function (response) {
      var data = response.data;
      if (data.error_code == 200) {
        this.signature = data.data;
      } else {
        this.signature = data.data;
      }
    },
    //获取地址
    req_address: function () {
      var formdata = new FormData();
      formdata.append("username", this.user);
      this.axios
        .post("/user/getAddress", formdata, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((response) => this.ack_address(response))
        .catch(function (error) {
          console.log(error);
        });
    },
    ack_address: function (response) {
      var data = response.data;
      if (data.error_code == 200) {
        this.address = data.data;
      } else {
        this.address = data.data;
      }
    },
    //获取生日
    req_birthday: function () {
      var formdata = new FormData();
      formdata.append("username", this.user);
      this.axios
        .post("/user/getBirthday", formdata, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((response) => this.ack_birthday(response))
        .catch(function (error) {
          console.log(error);
        });
    },
    ack_birthday: function (response) {
      var data = response.data;
      if (data.error_code == 200) {
        this.birthday = data.data;
      } else {
        this.birthday = data.data;
      }
    },
    //获取性别
    req_gender: function () {
      var formdata = new FormData();
      formdata.append("username", this.user);
      this.axios
        .post("/user/getGender", formdata, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((response) => this.ack_gender(response))
        .catch(function (error) {
          console.log(error);
        });
    },
    ack_gender: function (response) {
      var data = response.data;
      if (data.error_code == 200) {
        if (data.data == 0) {
          this.gender = "Male";
        } else if (data.data == 1) {
          this.gender = "Female";
        } else {
          this.gender = "Secret";
        }
      }
    },
    //获取邮箱
    req_email: function () {
      var formdata = new FormData();
      formdata.append("username", this.user);
      this.axios
        .post("/user/getEmail", formdata, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((response) => this.ack_email(response))
        .catch(function (error) {
          console.log(error);
        });
    },
    ack_email: function (response) {
      var data = response.data;
      if (data.error_code == 200) {
        this.email = data.data;
      } else {
        this.eamil = data.data;
      }
    },
    //获取头像
    req_profile: function () {
      var formdata = new FormData();
      formdata.append("username", this.user);
      this.axios
        .post("/user/getProfile", formdata, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((response) => this.ack_profile(response))
        .catch(function (error) {
          console.log(error);
        });
    },
    ack_profile: function (response) {
      var data = response.data;
      if (data.error_code == 200) {
        this.images = "http://127.0.0.1:8000/media/" + data.data;
      } else {
        this.images = "https://cdn.vuetifyjs.com/images/lists/ali.png";
      }
    },
    gohome() {
      this.$router.push({ path: "/home" });
    },
  },
};
</script>
