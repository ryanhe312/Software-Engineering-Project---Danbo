<template>
  <v-app>
    <div>
      <DashboardSignin />
    </div>
  </v-app>
</template>

<script>
export default {
  name: "Dashboard",

  components: {
    DashboardSignin: () => import('../components/Signin'),
  },

  data: () => ({
    list: [1, 2, 3, 4, 5, 6],
  }),
};
</script>
