<template>
  <v-container>
    <v-row justify="center">
      <v-form ref="form" v-model="valid" class="ma-12">
        <v-text-field
          label="Name"
          :counter="20"
          :rules="nameRules"
          required
          v-model="name"
        ></v-text-field>
        <v-text-field
          label="password"
          :rules="passwordRules"
          type="password"
          required
          v-model="password"
        ></v-text-field>
        <p class="text-right">
          <a href="#" class="text-decoration-none"
            ><router-link to="/forget">Forget Password?</router-link></a
          >
        </p>
        <v-btn
          name="login_btn"
          color="success"
          @click="req_login"
          max-width="300"
          min-width="300"
        >
          <router-link to="/">Sign In</router-link>
        </v-btn>
      </v-form>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    name: "",
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => (v && v.length <= 20) || "Name must be less than 20 characters",
    ],
    password: "",
    passwordRules: [
      (v) => !!v || "Password is required",
      (v) => /.+@.+\..+/.test(v) || "Password must be valid",
    ],
  }),
  mounted() {
    this.checkLogin();
  },
  methods: {
    req_login: function () {
      if (this.username == "" || this.password == "") {
        alert("请输入用户名和密码！");
      } else {
        this.axios
          .post(
            url + "/user/login",
            (data = {
              username: this.username,
              password: this.password,
            }),
            {
              headers: { "Content-Type": "application/x-www-form-urlencoded" },
            }
          )
          .then((response) => this.ack_login(response))
          .catch(function (error) {
            console.log(error);
          });
      }
    },

    ack_login: function (response) {
      var data = response.data;
      if (data.err_code == 200) {
        alert("登录成功！欢迎" + this.username);
        this.$router.push("/");
      } else {
        alert("登录失败\n" + data.message);
      }
      //location.reload();
    },

    async checkLogin() {
      await axios
        .post(url + "/user/getUsername/", (data = {}), {
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
        })
        .then((response) => ack_ask_login_user(response))
        .catch(function (error) {
          console.log(error);
        });
      if (!is_logged_in) {
        alert("请先登录！");
        location = "sign.html";
        return;
      }
    },

    ack_ask_login_user: function (response) {
      if (response.data.err_code == 200) {
        alert("已登录！");
        this.$router.push("/");
      }
    },
  },
};
</script>

<style scoped>
.router-link-active {
  text-decoration: none;
  color: rgb(255, 255, 255);
}
a {
  text-decoration: none;
}
</style>
