<template>
  <v-card class="mx-n16" width="1000" height="800">
    <v-system-bar></v-system-bar>
    <v-card elevation="0" class="mt-4 mx-auto">
      <p class="title" align="center">Security</p>
    </v-card>
    <v-divider></v-divider>
    <v-row class="mt-10">
      <v-card class="mx-auto" width="500">
        <v-card-title class="title font-weight-regular justify-space-between">
          <span>{{ currentTitle }}</span>
          <v-avatar
            color="primary lighten-2"
            class="subheading white--text"
            size="24"
            v-text="step"
          ></v-avatar>
        </v-card-title>

        <v-window v-model="step">
          <v-window-item :value="1">
            <v-card-text>
              <v-text-field label="Email" v-model="mail"></v-text-field>
              <span class="caption grey--text text--darken-1">
                This is the email you used to login to your Danbo account
              </span>
            </v-card-text>
          </v-window-item>

          <v-window-item :value="2">
            <v-card-text>
              <v-text-field
                label="Verification Code"
                v-model="codes"
              ></v-text-field>
              <v-text-field
                label="Password"
                type="password"
                v-model="password"
              ></v-text-field>
              <v-text-field
                label="Confirm Password"
                type="password"
                v-model="repassword"
              ></v-text-field>
              <span class="caption grey--text text--darken-1">
                Please enter the vertification send to your mailbox, then change
                your password
              </span>
            </v-card-text>
          </v-window-item>

          <v-window-item :value="3">
            <div class="pa-4 text-center">
              <v-img
                class="mb-4"
                contain
                height="128"
                src="https://cdn.vuetifyjs.com/images/logos/v.svg"
              ></v-img>
              <h3 class="title font-weight-light mb-2">Succeed!</h3>
              <span class="caption grey--text">click to continue!</span>
            </div>
          </v-window-item>
        </v-window>

        <v-divider></v-divider>

        <v-card-actions>
          <v-btn :disabled="step === 1" text @click="step--"> Back </v-btn>
          <v-spacer></v-spacer>
          <v-btn color="primary" depressed @click="req_verify">
            Continue
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-row>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    step: 2,
    email: "",
    user: "",
    codes: "",
    password: "",
    repassword: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
  }),
  computed: {
    currentTitle() {
      switch (this.step % 3) {
        case 1:
          return "Verify mailbox";
        case 2:
          return "Change your password";
        default:
          return "Succeed";
      }
    },
  },
  created() {
    this.req_user(),
    this.req_email();
  },
  methods: {
    //获取用户名
    req_user: function () {
      this.axios
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
        alert("用户名不存在\n");
      }
    },
    //获取邮箱
    req_email: function () {
      var formdata = new FormData();
      formdata.append("user", this.user);
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
    //发送验证码
    req_verify: function () {
      var formdata = new FormData();
      formdata.append("email", this.email);
      this.axios
        .post("/user/sendLoginCode", formdata, {
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
        this.step++;
      } else {
        alert("发送验证码失败\n");
      }
    },
    //修改密码
    req_modify: function () {
      var formdata = new FormData();
      formdata.append("user", this.user);
      formdata.append("password", this.password);
      formdata.append("r_password", this.repassword);
      formdata.append("email", this.email);
      formdata.append("code", this.codes);
      this.axios
        .post("/user/modifyPwd", formdata, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((response) => this.ack_modify(response))
        .catch(function (error) {
          console.log(error);
        });
    },
    ack_modify: function (response) {
      var data = response.data;
      if (data.error_code == 200) {
        this.step++;
      } else{
        alert(data.message);
      }
    },
  },
};
</script>