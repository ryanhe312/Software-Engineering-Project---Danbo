<template>
  <v-card class="mx-n16" width="1000" height="800">
    <v-system-bar></v-system-bar>
    <v-card elevation="0" class="mt-4 mx-auto">
      <p class="title" align="center">Profile photo</p>
    </v-card>
    <v-divider></v-divider>
    <div class="text-center">
      <v-avatar class="mt-16" size="128">
        <img :src="profile" />
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
      <v-btn class="mt-14" rounded color="primary" dark @click="req_modifyProfile"> Charge </v-btn>
    </div>
  </v-card>
</template>

<script>
import global from "../components/global"
export default {
  data: () => ({
    user: global.information["username"],
    //profile:require("../../../../danbo.png"),
    profile:"http://127.0.0.1:8000/media/"+global.information["profile"],
    value:"",
    rules: [
      (value) =>
        !value ||
        value.size < 2000000 ||
        "Avatar size should be less than 2 MB!",
    ],
  }),
  created() {
  },
  methods: {
    //修改头像
    req_modifyProfile: function () {
       var formdata = new FormData();
      formdata.append("profile", this.value);
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
      } else {
        alert(data.message);
      }
    },
  },
};
</script>