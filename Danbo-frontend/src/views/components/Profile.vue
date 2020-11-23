<template>
  <v-card class="mx-n16" width="1000" height="800">
    <v-system-bar></v-system-bar>
    <v-card elevation="0" class="mt-4 mx-auto">
      <p class="title" align="center">Profile photo</p>
    </v-card>
    <v-divider></v-divider>
    <div class="text-center">
      <v-avatar class="mt-16" size="128">
        <img :src="images" />
      </v-avatar>
    </div>
    <div class="mt-5 center">
      <v-card class="mx-auto" width="500" elevation="0">
        <v-file-input
          :rules="rules"
          v-model="value"
          accept="image/png, image/jpeg, image/bmp"
          placeholder="Pick an avatar"
          prepend-icon="mdi-camera"
          label="Avatar"
        ></v-file-input>
      </v-card>
    </div>
    <div class="text-center">
      <v-btn class="mt-14" rounded color="primary" dark> Charge </v-btn>
    </div>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    user: "",
    images: "https://cdn.vuetifyjs.com/images/john.jpg",
    value:"",
    rules: [
      (value) =>
        !value ||
        value.size < 2000000 ||
        "Avatar size should be less than 2 MB!",
    ],
  }),
  async mounted() {
    await this.req_user();
    this.req_profile();
  },
  methods: {
    //获取用户名
    async req_user () {
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
        alert("未登录！");
        this.$router.push("/");
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
    //修改头像
    req_modifyProfile: function () {
       var formdata = new FormData();
      formdata.append("file", this.value);
      this.axios
        .post("/user/modifyProfile",formdata, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((response) => this.ack_modifyProfile(response))
        .catch(function (error) {
          console.log(error);
        });
    },
    ack_modifyProfile: function (response) {
      var data = response.data;
      if (data.error_code == 200) {
        alert(data.message);
        this.req_profile();
      } else {
        alert(data.message);
      }
    },
  },
};
</script>