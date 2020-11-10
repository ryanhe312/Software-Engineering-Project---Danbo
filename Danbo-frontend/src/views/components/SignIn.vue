<template>
  <v-container>
    <v-row justify="center">
      <v-form ref="form" v-model="valid" class="ma-12">
        <v-text-field
          label="Name"
          :counter="20"
          :rules="nameRules"
          required
          v-model="name"
        ></v-text-field>
        <v-text-field
          label="password"
          :rules="passwordRules"
          type="password"
          required
          v-model="password"
        ></v-text-field>
        <p class="text-right">
          <a href="#" class="text-decoration-none"
            ><router-link to="/forget">Forget Password?</router-link></a
          >
        </p>
        <v-btn
          name="login_btn"
          color="success"
          @click="req_login"
          max-width="300"
          min-width="300"
        >
          <router-link to="/">Sign In</router-link>
        </v-btn>
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
    password: "",
    passwordRules: [
      (v) => !!v || "Password is required",
      (v) => /.+@.+\..+/.test(v) || "Password must be valid",
    ],
  }),
  methods: {
    req_login() {},
  },
};
</script>

<style scoped>
.router-link-active {
  text-decoration: none;
  color: rgb(255, 255, 255);
}
a {
  text-decoration: none;
}
</style>
