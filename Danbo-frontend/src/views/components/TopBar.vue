<template>
  <v-app-bar
      bottom
      color="#6A76AB"
      dark
      shrink-on-scroll
      prominent
      src="https://picsum.photos/1920/1080?random"
      fade-img-on-scroll
      scroll-target="#scrolling-techniques-3"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
        ></v-img>
      </template>

      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>
        <router-link  to="/home">Danbo</router-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>

      <template v-slot:extension>
        <v-tabs align-with-title>
          <v-tab>
            <router-link to="/home"> My zone </router-link>
          </v-tab>
          <v-tab>
            <router-link to="/topic"> Hot </router-link>
          </v-tab>
        </v-tabs>
      </template>
    </v-app-bar>
</template>

<script>

export default {
  name: "TopBar",

  components: {
  },

  data: () => ({
  }),

  computed: {
  },

  methods: {
  },
};
</script>

<style scoped>
.router-link-active {    
  text-decoration: none;
  color:rgb(255, 255, 255);
}
.router-link {    
  text-decoration: none;
  color:rgb(255, 255, 255);
}
 a {
  text-decoration: none;
 }
</style>