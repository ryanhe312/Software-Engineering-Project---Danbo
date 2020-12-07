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
                <v-img
                  src="https://cdn.vuetifyjs.com/images/lists/ali.png"
                  height="300px"
                  dark
                >
                  <v-row class="fill-height">
                    <v-card-title>
                      <v-btn dark icon>
                        <v-icon>mdi-chevron-left</v-icon>
                      </v-btn>

                      <v-spacer></v-spacer>

                      <v-btn dark icon class="mr-4">
                        <v-icon>mdi-pencil</v-icon>
                      </v-btn>

                      <v-btn dark icon>
                        <v-icon>mdi-dots-vertical</v-icon>
                      </v-btn>
                    </v-card-title>

                    <v-spacer></v-spacer>

                    <v-card-title class="white--text pl-12 pt-12">
                      <div class="display-1 pl-12 pt-12">Ali Conners</div>
                      <v-btn text color="primary">
                        <router-link to="/follow">Following</router-link>
                      </v-btn>
                      <v-btn text color="primary">
                        <router-link to="/follow">Followers</router-link>
                      </v-btn>
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
              <v-card
                elevation="1"
                class="mx-auto mb-2"
                outlined
                color="white"
                max-width="1200"
                v-for="i in list"
                :key="i"
              >
                <v-container fluid>
                  <v-row justify="center">
                    <v-col cols="12">
                      <v-card-title>
                        <v-list-item-avatar color="grey darken-2">
                          <v-img
                            class="elevation-6"
                            alt=""
                            src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                          ></v-img>
                        </v-list-item-avatar>

                        <v-list-item-content>
                          <v-list-item-title>Ning</v-list-item-title>
                        </v-list-item-content>
                      </v-card-title>

                      <v-card-text class="bold">
                        Turns out semicolon-less style is easier and safer in TS
                        because most gotcha edge cases are type invalid as
                        well.fdafasfsdafDsafdsfasd
                      </v-card-text>

                      <v-card-actions>
                        <v-list-item class="grow">
                          <v-row align="center" justify="end">
                            <v-icon class="mr-1"> mdi-heart </v-icon>
                            <span class="subheading mr-2">256</span>

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
              </v-card>
            </v-col>
          </v-row>
        </div>
      </v-card>
    </div>
  </v-app>
</template>

<script>
export default {
  name: "DashboardIndex",

  components: {
    TopBar: () => import("../components/TopBar"),
  },

  data: () => ({
    user:"",
    name: "piner king",
    gender: "male",
    birthday: "1999-02-14",
    signature: "1234567890-",
    list: [1, 2, 3, 4, 5],
    email: "17307130181@fudan.edu.cn",
    address: "fudan",
    images: "https://cdn.vuetifyjs.com/images/john.jpg",
  }),
  async mounted() {
    this.user = this.$route.query.user
    console.log(this.user)
    //  this.req_name();
    //  this.req_signature();
    //  this.req_address();
    //  this.req_gender();
    //  this.req_birthday();
     // this.req_email();
  },
  methods: {
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
        this.date = data.data;
      } else {
        this.date = data.data;
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
        this.radios = data.data;
      } else {
        this.radios = data.data;
      }
    },
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
  },
};
</script>
