<template>
  <div>
    <v-row>
      <v-col cols="1" sm="5" offset-sm="0">
        <v-card class="mx-auto" width="256" tile height="800">
          <v-navigation-drawer permanent>
            <v-system-bar></v-system-bar>
            <v-list>
              <v-list-item>
                <v-list-item-avatar>
                  <v-img :src="images"></v-img>
                </v-list-item-avatar>
              </v-list-item>

              <v-list-item link>
                <v-list-item-content>
                  <v-list-item-title class="title" v-text="name">
                  </v-list-item-title>
                  <v-list-item-subtitle v-text="mail"></v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
            <v-divider></v-divider>
            <v-list nav dense>
              <v-list-item-group v-model="selectedItem" color="primary">
                <v-list-item v-for="(item, i) in items" :key="i">
                  <v-list-item-icon>
                    <v-icon v-text="item.icon"></v-icon>
                  </v-list-item-icon>

                  <v-list-item-content>
                    <v-list-item-title v-text="item.text"></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
            <v-card elevation="0" class="mt-10" height="10"> </v-card>
            <v-btn
              class="mx-16"
              outlined
              center
              color="indigo"
              @click="req_quit"
            >
              Sign Out
            </v-btn>
          </v-navigation-drawer>
        </v-card>
      </v-col>
      <v-col cols="2" sm="6" offset-sm="0">
        <v-window v-model="selectedItem">
          <v-window-item :value="0">
            <Personalnews />
          </v-window-item>
          <v-window-item :value="1">
            <Profile />
          </v-window-item>
          <v-window-item :value="2"> </v-window-item>
          <v-window-item :value="3"> </v-window-item>
          <v-window-item :value="4">
            <Security />
          </v-window-item>
          <v-window-item :value="5">
            <About />
          </v-window-item>
        </v-window>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  components: {
    Personalnews: () => import("../components/Personalnews"),
    Profile: () => import("../components/Profile"),
    About: () => import("../components/About"),
    Security: () => import("../components/Security"),
  },

  data: () => ({
    selectedItem: 0,
    name: "",
    user: "",
    images: "",
    mail: "17307130181@fudan.edu.cn",
    items: [
      { text: "Personal information", icon: "mdi-account" },
      { text: "Profile photo", icon: "mdi-widgets" },
      { text: "Privacy", icon: "mdi-account-lock" },
      { text: "Setting", icon: "mdi-wrench" },
      { text: "Security", icon: "mdi-security" },
      { text: "About us", icon: "mdi-emoticon-kiss-outline" },
      //{ text: "Sign out", icon: "mdi-arrow-down-bold-circle" },
    ],
  }),
  async mounted() {
    await this.req_user();
    this.req_name();
    this.req_profile();
  },
  methods: {
    //获取用户名
    async req_user() {
      await this.axios
        .post("/user/getUsername", {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((response) => this.ack_user(response))
        .catch(function (error) {
          console.log(error);
        });
    },
    ack_user: function (response) {
      var data = response.data;
      if (data.error_code == 200) {
        this.user = data.data;
      } else {
       // alert("未登录！");
        this.$router.push("/");
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
    //获取头像
    req_profile: function () {
      var formdata = new FormData();
      formdata.append("user", this.user);
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
        this.images = data.data;
      }
    },
    //登出
    async req_quit () {
      await this.axios
        .post("/user/logout", {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((response) => this.ack_quit(response))
        .catch(function (error) {
          console.log(error);
        });
    },
    ack_quit: function (response) {
      var data = response.data;
      if (data.error_code == 200) {
        alert("成功退出登录\n");
        this.$router.push("/");
      } else {
        alert("当前未登录\n");
        this.$router.push("/");
      }
    },
  },
};
</script>

<style scoped>
.router-link-active {
  text-decoration: none;
}
a {
  text-decoration: none;
}
</style>
