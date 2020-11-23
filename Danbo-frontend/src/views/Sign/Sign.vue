<template>
  <v-app>
    <div>
      <v-card color="basil" class="mx-auto" max-width="600">
        <v-card-title class="text-center justify-center py-6">
          <h1 class="font-weight-bold display-3 basil--text">Danbo</h1>
        </v-card-title>

        <v-tabs v-model="tab" background-color="transparent" color="basil" grow>
          <v-tab :key="signin"> Sign In </v-tab>
          <v-tab :key="signup"> Sign Up </v-tab>
        </v-tabs>

        <v-tabs-items v-model="tab">
          <v-tab-item :key="signin">
            <v-card color="basil" flat>
              <DashboardSignin />
            </v-card>
          </v-tab-item>
          <v-tab-item :key="signup">
            <v-card color="basil" flat>
              <DashboardSignup />
            </v-card>
          </v-tab-item>
        </v-tabs-items>
      </v-card>
    </div>
  </v-app>
</template>

<script>
import global from "../components/global"
export default {
  name: "Dashboard",

  components: {
    DashboardSignin: () => import("../components/SignIn"),
    DashboardSignup: () => import("../components/SignUp"),
  },

  data: () => ({
    tab: null,
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
      if (response.data.error_code == 200) {
        this.req_all();
        alert("已经登录！");
        this.$router.push("/home");
      }
    },
  },
};
</script>
