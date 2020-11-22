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
        <v-btn color="warning" class="ml-12" @click="req_modify_pwd">Reset Password</v-btn>
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
  }),
  methods: {
    req_verify() {},
    req_modify_pwd() {},
  },
};
</script> 
