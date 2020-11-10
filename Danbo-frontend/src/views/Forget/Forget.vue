<template>
  <v-app>
    <div>
      <v-card color="basil" class="mx-auto" max-width="600">
        <v-card-title class="text-center justify-center py-6">
          <h5 class="font-weight-bold display-1 basil--text">Reset your password</h5>
        </v-card-title>
        <DashboardForgetPwd />
      </v-card>
    </div>
  </v-app>
</template>

<script>
export default {
  name: "Dashboard",

  components: {
    DashboardForgetPwd: () => import("../components/ForgetPwd"),
  },
};
</script>
