<template>
  <v-container>
    <v-row
      gutter="20"
    >
      <v-col span="6">
        <v-card 
          class="mx-auto" 
          outlined color="#FFFFFF" 
          dark height="100" 
          max-width="500"
        >
          <v-avatar size="256">
            <img
              src="https://wx2.sinaimg.cn/mw690/007nSj0nly1gk1nvsmihcj30dw0dwdgj.jpg"
          ></v-avatar>
        </v-card>
      </v-col>
      <v-col span="6">
        <v-card
          class="mx-auto"
          max-width="500"
        >
          <v-form
            ref="form"
            v-model="valid"
            lazy-validation 
            max-width="500" 
          >
            <v-text-field
              v-model="name"
              :counter="10"
              :rules="nameRules"
              label="Name"
              required
            ></v-text-field>

            <v-text-field
              :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
              v-model="password"
              :rules="passwordRules"
              label="Password"
              @click:append="show = !show"
              required
            ></v-text-field>

            <v-checkbox
              v-model="checkbox"
              :rules="[v => !!v || 'You must agree to continue!']"
              label="Do you agree?"
              required
            ></v-checkbox>

            <v-btn
              :disabled="!valid"
              color="primary lighten-2"
              class="mr-4"
              @click="validate"
            >
              Sign in
            </v-btn>

            <v-btn
              color="primary lighten-2"
              class="mr-4"
              @click="reset"
            >
              Sign up
            </v-btn>

            <v-btn
              color="primary lighten-2"
              @click="resetValidation"
            >
              Forgot Password?
            </v-btn>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      valid: true,
      name: '',
      show: false,
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      password: '',
      passwordRules: [
        v => !!v || 'Password is required',
        v => /.+@.+\..+/.test(v) || 'Password must be valid',
      ],
      select: null,
      checkbox: false,
    }),

    methods: {
      validate () {
        this.$refs.form.validate()
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
    },
  }
</script>