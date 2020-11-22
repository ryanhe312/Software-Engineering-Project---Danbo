<template>
  <v-app >
    <div class="grey lighten-5">
    <v-card class="overflow-hidden" color="#F2F2F0">
      <TopBar />
      <v-container fluid >
        <v-row justify="center">
          <v-col sm="2">
            <RightBar/>
          </v-col>
          <v-col sm="6">
            <Tweets />
          </v-col>
          <v-col sm="3">
            <SideBar />
          </v-col>
        </v-row>
      </v-container>
    </v-card>
    </div>
  </v-app>
</template>

<script>
export default {
  name: "Home",

  components: {
    TopBar: () => import("../components/TopBar"),
    Tweets: () => import("../components/Tweets"),
    SideBar: () => import("../components/SideBar"),
    RightBar: () => import("../components/RightBar"),
  },

  data: () => ({
  }),
  mounted() {
    this.checkLogin();
  },
  methods: {
    async checkLogin() {
      await this.axios
        .post("/user/getUsername")
        .then((response) => this.ack_ask_login_user(response))
        .catch(function (error) {
          console.log(error);
        });
    },

    ack_ask_login_user: function (response) {
      if (response.data.error_code != 200) {
        alert("未登录！");
        this.$router.push("/");
      }
    },
  },
};
</script>
