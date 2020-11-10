<template>
  <v-container>
    <v-row justify="center">
      <v-form ref="form">
        <v-text-field
          label="Name"
          :counter="20"
          :rules="nameRules"
          required
          v-model="name"
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
    name: "",
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
    passwordRules: [
      (v) => !!v || "Password is required",
      (v) => /.+@.+\..+/.test(v) || "Password must be valid",
    ],
    verification_code: "",
    verificationRules: [
      (v) => !!v || "Verification code is required",
      (v) => (v && v.length == 4) || "Verification code must be 4 characters",
    ],
    last_verify_time: 0,
  }),
  methods: {
    req_register: function () {
      if (
        this.name == "" ||
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
      } else if (this.verification_code.length != 4) {
        alert("验证码错误！");
      } else {
        this.axios
          .post(
            "/user/register",
            {
              username: this.name,
              password: this.password,
              r_password: this.password_re,
              email: this.email,
              code: this.verification_code,
            },
            {
              headers: { "Content-Type": "application/x-www-form-urlencoded" },
            }
          )
          .then((response) => this.ack_register(response))
          .catch(function (error) {
            console.log(error);
          });
      }
    },

    ack_register: function (response) {
      var data = response.data;
      if (data.err_code == 200) {
        alert("恭喜注册成功！请牢记用户名和密码");
        this.$router.push("/");
      } else {
        alert("注册失败\n" + data.message);
      }
    },

    req_verify: function () {
      //验证发送间隔
      var curtime = new Date().getTime();
      if (curtime - this.last_verify_time < 60000) {
        alert("发送过于频繁请一分钟后再试");
        return;
      }

      this.last_verify_time = curtime;

      this.axios
        .post(
          "/user/sendRegisterCode",
          {
            email: this.email,
          },
          {
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
          }
        )
        .then((response) => this.ack_verify(response))
        .catch(function (error) {
          console.log(error);
        });
    },

    ack_verify: function (response) {
      var data = response.data;
      if (data.err_code == 200) {
        alert("发送验证码成功");
      } else {
        alert("发送验证码失败\n" + data.message);
      }
    },
  },
};
</script> 
