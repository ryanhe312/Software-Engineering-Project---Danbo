<template>
  <v-card class="mx-n16" width="1000" height="800">
    <v-system-bar></v-system-bar>
    <v-card elevation="0" class="mt-4 mx-auto">
      <p class="title" align="center">Security</p>
    </v-card>
    <v-divider></v-divider>
    <v-row class="mt-10">
      <v-card
    class="mx-auto"
    width="500"

  >
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
          <v-text-field
            label="Email"
            v-model="mail"
          ></v-text-field>
          <span class="caption grey--text text--darken-1">
            This is the email you used to login to your Danbo account
          </span>
        </v-card-text>
      </v-window-item>

      <v-window-item :value="2">
        <v-card-text>
            <v-text-field
            label="Verification Code"
            type="vertification"
          ></v-text-field>
          <v-text-field
            label="Password"
            type="password"
          ></v-text-field>
          <v-text-field
            label="Confirm Password"
            type="password"
          ></v-text-field>
          <span class="caption grey--text text--darken-1">
            Please enter the vertification send to your mailbox, then change your password
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
          <h3 class="title font-weight-light mb-2">
            Succeed!
          </h3>
          <span class="caption grey--text">click to continue!</span>
        </div>
      </v-window-item>
    </v-window>

    <v-divider></v-divider>

    <v-card-actions>
      <v-btn
        :disabled="step === 1"
        text
        @click="step--"
      >
        Back
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn
        color="primary"
        depressed
        @click="step++"
      >
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
      step: 1,
      mail:"17307130181@fudan.edu.cn",
  }),
  computed: {
      currentTitle () {
        switch (this.step%3) {
          case 1: return 'Verify mailbox'
          case 2: return 'Change your password'
          default: return 'Succeed'
        }
      },
    },
};
</script>