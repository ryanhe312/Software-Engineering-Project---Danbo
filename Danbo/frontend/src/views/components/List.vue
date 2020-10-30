<template>
  <div>
    <v-row>
      <v-col cols="1" sm="5" offset-sm="0">
        <v-card class="mx-auto" width="256" tile height="800">
          <v-navigation-drawer permanent>
            <v-system-bar></v-system-bar>
            <v-list>
              <v-list-item>
                <v-list-item-avatar>
                  <v-img
                    src="https://cdn.vuetifyjs.com/images/john.png"
                  ></v-img>
                </v-list-item-avatar>
              </v-list-item>

              <v-list-item link>
                <v-list-item-content>
                  <v-list-item-title class="title" v-text="name">
                  </v-list-item-title>
                  <v-list-item-subtitle v-text="mail"></v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
            <v-divider></v-divider>
            <v-list nav dense>
              <v-list-item-group v-model="selectedItem" color="primary">
                <v-list-item v-for="(item, i) in items" :key="i">
                  <v-list-item-icon>
                    <v-icon v-text="item.icon"></v-icon>
                  </v-list-item-icon>

                  <v-list-item-content>
                    <v-list-item-title v-text="item.text"></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>                
              </v-list-item-group>
            </v-list>
            <v-btn
      class="ma-2"
      outlined
      center
      color="indigo"
    >
    <router-link  to="/sign">Sign Out</router-link>
    </v-btn>
          </v-navigation-drawer>
        </v-card>
      </v-col>
      <v-col cols="2" sm="6" offset-sm="0">
        <v-window v-model="selectedItem">
          <v-window-item :value="0">
            <Personalnews />
          </v-window-item>
          <v-window-item :value="1">
            <Profile />
          </v-window-item>
          <v-window-item :value="2"> 
          </v-window-item>
          <v-window-item :value="3"> </v-window-item>
          <v-window-item :value="4"> 
            <Security />
          </v-window-item>
          <v-window-item :value="5"> 
            <About />
          </v-window-item>
        </v-window>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  components: {
    Personalnews: () => import("../components/Personalnews"),
    Profile: () => import("../components/Profile"),
    About: () => import("../components/About"), 
    Security: () => import("../components/Security"), 
  },

  data: () => ({
    selectedItem: 0,
    name: "Piner",
    mail: "17307130181@fudan.edu.cn",
    items: [
      { text: "Personal information", icon: "mdi-account" },
      { text: "Profile photo", icon: "mdi-widgets" },
      { text: "Privacy", icon: "mdi-account-lock" },
      { text: "Setting", icon: "mdi-wrench" },
      { text: "Security", icon: "mdi-security" },
      { text: "About us", icon: "mdi-emoticon-kiss-outline" },
      // { text: "Sign out", icon: "mdi-arrow-down-bold-circle" },
    ],
  }),
};
</script>

<style scoped>
.router-link-active {    
  text-decoration: none;
}
 a {
  text-decoration: none;
 }
</style>
