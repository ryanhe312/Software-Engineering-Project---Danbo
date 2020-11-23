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
        <v-text-field solo dense v-model="nickname"></v-text-field>
        <v-text-field
          class="mt-1"
          v-text="email"
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
              v-model="birthday"
              label="Birthday date"
              prepend-icon="mdi-calendar"
              readonly
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker
            ref="picker"
            v-model="birthday"
            :max="new Date().toISOString().substr(0, 10)"
            min="1950-01-01"
            @change="save"
          ></v-date-picker>
        </v-menu>
      </v-col>
      <v-col cols="2" sm="2" offset-sm="0">
        <v-card elevation="0" class="mt-2">
          <v-btn icon color="gray" @click="modify('nickname')">
            <v-icon>mdi-cached</v-icon>
          </v-btn>
        </v-card>
        <v-card elevation="0" class="mt-16" height="70"> </v-card>
        <v-card elevation="0" class="mt-14">
          <v-btn icon color="gray" @click="modify('signature')">
            <v-icon>mdi-cached</v-icon>
          </v-btn>
        </v-card>
        <v-card elevation="0" class="mt-9">
          <v-btn icon color="gray" @click="modify('address')">
            <v-icon>mdi-cached</v-icon>
          </v-btn>
        </v-card>
        <v-card elevation="0" class="mt-8">
          <v-btn icon color="gray" @click="modify('gender')">
            <v-icon>mdi-cached</v-icon>
          </v-btn>
        </v-card>
        <v-card elevation="0" class="mt-9">
          <v-btn icon color="gray" @click="modify('birthday')">
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
import global from "../components/global"
export default {
  data: () => ({
    username: global.information["username"],
    nickname: global.information["nickname"],
    signature: global.information["signature"],
    address: global.information["address"],
    radios: "",
    email: global.information["email"],
    birthday: global.information["birthday"],
    gender: global.information["gender"],
    menu: false,
  }),
  created() {
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

    modify(needed_data){
      this.modify_data(needed_data,this.$data[needed_data]);
    },
  },
};
</script>