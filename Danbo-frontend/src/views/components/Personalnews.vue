<template>
  <v-card class="mx-n16" width="1000" height="800">
    <v-system-bar></v-system-bar>
    <v-card elevation="0" class="mt-4 mx-auto">
      <p class="title" align="center">Personal imformation</p>
    </v-card>
    <v-divider></v-divider>
    <v-row class="mt-10">
      <v-col cols="2" sm="4" offset-sm="0">
        <v-card elevation="0" class="mt-2 d-flex justify-end mb-6">
          <p class="font-weight-regular" color="grey lighten-2">Nickname:</p>
        </v-card>
        <v-card elevation="0" class="mt-6 d-flex justify-end mb-6">
          <p class="font-weight-regular" color="grey lighten-2">E-mail:</p>
        </v-card>
        <v-card elevation="0" class="mt-15 d-flex justify-end mb-6">
          <p class="font-weight-regular" color="grey lighten-2">
            Personal signature:
          </p>
        </v-card>
        <v-card elevation="0" class="mt-16 d-flex justify-end mb-6">
          <p class="font-weight-regular" color="grey lighten-2">
            Constellation:
          </p>
        </v-card>
        <v-card elevation="0" class="mt-7 d-flex justify-end mb-6">
          <p class="font-weight-regular" color="grey lighten-2">Gender:</p>
        </v-card>
        <v-card elevation="0" class="mt-n1 d-flex justify-end mb-6">
          <p class="font-weight-regular" color="grey lighten-2">Birthday:</p>
        </v-card>
      </v-col>
      <v-col cols="2" sm="6" offset-sm="0">
        <v-text-field solo dense v-model="name"></v-text-field>
        <v-text-field
          class="mt-n1"
          v-text="mail"
          color="grey lighten-1"
        ></v-text-field>
        <v-textarea
          class="mt-6"
          solo
          dense
          name="input"
          height="120"
          v-model="input"
        ></v-textarea>
        <v-select v-model="select" :items="cons" solo lense></v-select>
        <v-radio-group class="mt-n1" v-model="radios" row>
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
              class="mt-n1"
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
    </v-row>
    <div class="center">
      <v-card class="mx-auto" elevation="0" width="666" height="10">
        <v-divider></v-divider>
      </v-card>
    </div>
    <div class="text-center">
      <v-btn class="mt-14" rounded color="primary" dark> Save </v-btn>
    </div>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    name: "Piner",
    select: "Aquarius",
    input: "my name is wh",
    cons: [
      "Aries",
      "Taurus",
      "Gemini",
      "Cancer",
      "Leo",
      "Virgo",
      "Libra",
      "Scorpio",
      "Sagittarius",
      "Capricorn",
      "Aquarius",
      "Pisces",
    ],
    radios: "Male",
    mail: "17307130181@fudan.edu.cn",
    date: "1999-02-14",
    menu: false,
  }),
  watch: {
    menu(val) {
      val && setTimeout(() => (this.$refs.picker.activePicker = "YEAR"));
    },
  },
  methods: {
    save(date) {
      this.$refs.menu.save(date);
    },
  },
};
</script>