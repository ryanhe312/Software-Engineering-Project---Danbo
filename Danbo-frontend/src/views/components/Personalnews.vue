<template>
  <v-card class="mx-n16" width="1100" height="800">
    <v-system-bar></v-system-bar>
    <v-card elevation="0" class="mt-4 mx-auto">
      <p class="title" align="center">Personal imformation</p>
    </v-card>
    <v-divider></v-divider>
    <v-row class="mt-14">
      <v-col cols="2" sm="3" offset-sm="0">
        <v-card elevation="0" class="mt-2 d-flex justify-end mb-6">
          <p class="font-weight-regular" color="grey lighten-2">Nickname:</p>
        </v-card>
        <v-card elevation="0" class="mt-8 d-flex justify-end mb-6">
          <p class="font-weight-regular" color="grey lighten-2">E-mail:</p>
        </v-card>
        <v-card elevation="0" class="mt-16 d-flex justify-end mb-6">
          <p class="font-weight-regular" color="grey lighten-2">
            Personal signature:
          </p>
        </v-card>
        <v-card elevation="0" class="mt-3 d-flex justify-end mb-6"> </v-card>
        <v-card elevation="0" class="mt-15 d-flex justify-end mb-6">
          <p class="font-weight-regular" color="grey lighten-2">Address:</p>
        </v-card>
        <v-card elevation="0" class="mt-7 d-flex justify-end mb-6">
          <p class="font-weight-regular" color="grey lighten-2">Gender:</p>
        </v-card>
        <v-card elevation="0" class="mt-7 d-flex justify-end mb-6">
          <p class="font-weight-regular" color="grey lighten-2">Birthday:</p>
        </v-card>
      </v-col>
      <v-col cols="2" sm="7" offset-sm="0">
        <v-text-field solo dense v-model="name"></v-text-field>
        <v-text-field
          class="mt-1"
          v-text="mail"
          color="grey lighten-1"
        ></v-text-field>
        <v-textarea
          class="mt-10"
          solo
          dense
          name="input"
          height="120"
          v-model="signature"
        ></v-textarea>
        <v-text-field solo dense v-model="address" class="mt-2"></v-text-field>
        <v-radio-group class="mt-3" v-model="radios" row>
          <v-radio label="Male" value="Male"></v-radio>
          <v-radio label="Female" value="Female"></v-radio>
          <v-radio label="Secret" value="Secret"></v-radio>
        </v-radio-group>
        <v-menu
          ref="menu"
          v-model="menu"
          :close-on-content-click="false"
          transition="scale-transition"
          offset-y
          min-width="290px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              class="mt-2"
              v-model="date"
              label="Birthday date"
              prepend-icon="mdi-calendar"
              readonly
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker
            ref="picker"
            v-model="date"
            :max="new Date().toISOString().substr(0, 10)"
            min="1950-01-01"
            @change="save"
          ></v-date-picker>
        </v-menu>
      </v-col>
      <v-col cols="2" sm="2" offset-sm="0">
        <v-card elevation="0" class="mt-2">
          <v-btn icon color="gray" @click="req_modifyName">
            <v-icon>mdi-cached</v-icon>
          </v-btn>
        </v-card>
        <v-card elevation="0" class="mt-16" height="70"> </v-card>
        <v-card elevation="0" class="mt-14">
          <v-btn icon color="gray" @click="req_modifySignature">
            <v-icon>mdi-cached</v-icon>
          </v-btn>
        </v-card>
        <v-card elevation="0" class="mt-9">
          <v-btn icon color="gray" @click="req_modifyAddress">
            <v-icon>mdi-cached</v-icon>
          </v-btn>
        </v-card>
        <v-card elevation="0" class="mt-8">
          <v-btn icon color="gray" @click="req_modifyGender">
            <v-icon>mdi-cached</v-icon>
          </v-btn>
        </v-card>
        <v-card elevation="0" class="mt-9">
          <v-btn icon color="gray" @click="req_modifyBirthday">
            <v-icon>mdi-cached</v-icon>
          </v-btn>
        </v-card>
      </v-col>
    </v-row>
    <div class="center">
      <v-card class="mx-16" elevation="0" width="666" height="10">
        <v-divider></v-divider>
      </v-card>
    </div>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    user: "",
    name: "",
    signature: "",
    address: "",
    radios: "",
    mail: "17307130181@fudan.edu.cn",
    date: "",
    menu: false,
  }),
  created() {
    this.req_user(),
      this.req_name(),
      this.req_signature(),
      this.req_address(),
      this.req_gender(),
      this.req_birthday(),
      this.req_email();
  },
  watch: {
    menu(val) {
      val && setTimeout(() => (this.$refs.picker.activePicker = "YEAR"));
    },
  },
  methods: {
    save(date) {
      this.$refs.menu.save(date);
    },
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
        alert(data.message);
      }
    },
    //获取昵称
    req_name: function () {
      var formdata = new FormData();
      formdata.append("user", this.user);
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
    //修改昵称
    req_modifyName: function () {
      var formdata = new FormData();
      formdata.append("name", this.name);
      this.axios
        .post("/user/modifyNickname", formdata, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((response) => this.ack_modifyName(response))
        .catch(function (error) {
          console.log(error);
        });
    },
    ack_modifyName: function (response) {
      var data = response.data;
      if (data.error_code == 200) {
        alert("昵称修改成功\n");
        this.req_name();
      } else {
        alert(data.message);
      }
    },
    //获取个性签名
    req_signature: function () {
      var formdata = new FormData();
      formdata.append("user", this.user);
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
    //修改个性签名
    req_modifySignature: function () {
      var formdata = new FormData();
      formdata.append("signature", this.signature);
      this.axios
        .post("/user/modifySignature", formdata, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((response) => this.ack_modifySignature(response))
        .catch(function (error) {
          console.log(error);
        });
    },
    ack_modifySignature: function (response) {
      var data = response.data;
      if (data.error_code == 200) {
        alert("签名修改成功\n");
        this.req_signature();
      } else {
        alert(data.message);
      }
    },
    //获取地址
    req_address: function () {
      var formdata = new FormData();
      formdata.append("user", this.user);
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
    //修改地址
    req_modifyAddress: function () {
      var formdata = new FormData();
      formdata.append("address", this.address);
      this.axios
        .post("/user/modifyAddress", formdata, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((response) => this.ack_modifyAddress(response))
        .catch(function (error) {
          console.log(error);
        });
    },
    ack_modifyAddress: function (response) {
      var data = response.data;
      if (data.error_code == 200) {
        alert("签名地址成功\n");
        this.req_address();
      } else {
        alert(data.message);
      }
    },
    //获取生日
    req_birthday: function () {
      var formdata = new FormData();
      formdata.append("user", this.user);
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
    //修改生日
    req_modifyBirthday: function () {
      var formdata = new FormData();
      formdata.append("birthday", this.date);
      this.axios
        .post("/user/modifyBirthday", formdata, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((response) => this.ack_modifyBirthday(response))
        .catch(function (error) {
          console.log(error);
        });
    },
    ack_modifyBirthday: function (response) {
      var data = response.data;
      if (data.error_code == 200) {
        alert("签名生日成功\n");
        this.req_birthday();
      } else {
        alert(data.message);
      }
    },
    //获取性别
    req_gender: function () {
      var formdata = new FormData();
      formdata.append("user", this.user);
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
    //修改性别
    req_modifyGender: function () {
      var formdata = new FormData();
      formdata.append("gender", this.radios);
      this.axios
        .post("/user/modifyGender", formdata, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((response) => this.ack_modifyGender(response))
        .catch(function (error) {
          console.log(error);
        });
    },
    ack_modifyGender: function (response) {
      var data = response.data;
      if (data.error_code == 200) {
        alert("性别修改成功\n");
        this.req_gender();
      } else {
        alert(data.message);
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
  },
};
</script>