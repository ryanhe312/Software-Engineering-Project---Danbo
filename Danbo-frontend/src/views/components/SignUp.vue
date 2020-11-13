<template>
  <v-container>
    <v-row justify="center">
      <v-form ref="form">
        <v-text-field
          label="Name"
          :counter="20"
          :rules="nameRules"
          required
          v-model="username"
        ></v-text-field>
        <v-text-field
          label="E-mail"
          :rules="emailRules"
          required
          v-model="email"
        ></v-text-field>
        <v-text-field
          label="Password"
          type="password"
          :rules="passwordRules"
          required
          v-model="password"
        ></v-text-field>
        <v-text-field
          label="Password Again"
          type="password"
          :rules="passwordRules"
          required
          v-model="password_re"
        ></v-text-field>
        <v-text-field
          label="Verification Code"
          :counter="4"
          :rules="verificationRules"
          required
          v-model="verification_code"
        ></v-text-field>
        <v-btn
          color="success"
          class="mr-12"
          @click="req_verify"
          id="btnVerify"
          max-width="250"
          min-width="200"
          >Send Verification Code</v-btn
        >
        <v-btn color="warning" class="ml-12" @click="req_register"
          >Sign Up</v-btn
        >
      </v-form>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    username: "",
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => (v && v.length <= 20) || "Name must be less than 20 characters",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    password: "",
    password_re: "",
    passwordRules: [(v) => !!v || "Password is required"],
    verification_code: "",
    verificationRules: [(v) => !!v || "Verification code is required"],
    last_verify_time: 0,
  }),
  methods: {
    req_register: function () {
      if (
        this.username == "" ||
        this.password == "" ||
        this.password_re == "" ||
        this.email == "" ||
        this.verification_code == ""
      ) {
        alert("请输入用户名、密码邮箱以及验证码！");
      } else if (this.password != this.password_re) {
        alert("两次输入的密码不一致！");
      } else if (this.password.length < 6) {
        alert("密码长度至少为6位！");
      } else {
        var formdata = new FormData();
        formdata.append("username", this.username);
        formdata.append("password", this.password);
        formdata.append("r_password", this.password_re);
        formdata.append("email", this.email);
        formdata.append("code", this.verification_code);
        this.axios
          .post("/user/register", formdata, {
            headers: { "Content-Type": "multipart/form-data" },
          })
          .then((response) => this.ack_register(response))
          .catch(function (error) {
            console.log(error);
          });
      }
    },

    ack_register: function (response) {
      var data = response.data;
      if (data.error_code == 200) {
        alert("恭喜注册成功！请牢记用户名和密码");
        this.$router.push("/home");
      } else {
        alert("注册失败\n" + data.message);
      }
    },

    req_verify: function () {
      //验证发送间隔
      // var curtime = new Date().getTime();
      // if (curtime - this.last_verify_time < 60000) {
      //   alert("发送过于频繁请一分钟后再试");
      //   return;
      // }

      // this.last_verify_time = curtime;
      var formdata = new FormData();
      formdata.append("email", this.email);
      this.axios
        .post("/user/sendRegisterCode", formdata, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((response) => this.ack_verify(response))
        .catch(function (error) {
          console.log(error);
        });
    },

    ack_verify: function (response) {
      var data = response.data;
      if (data.error_code == 200) {
        alert("发送验证码成功");
      } else {
        alert("发送验证码失败\n" + data.message);
      }
    },
  },
};
</script> 
