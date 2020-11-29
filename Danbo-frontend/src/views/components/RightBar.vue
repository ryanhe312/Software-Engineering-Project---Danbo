<template>
  <v-card class="mx-auto" max-width="344" outlined>
    <v-list-item three-line>
      <v-list-item-content>
        <div class="overline mb-1">
          <router-link to="/personal">{{username}}</router-link>
        </div>
        <v-list-item-subtitle>{{signature}}</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar tile size="80" color="grey">
        <v-img
          class="elevation-6"
          alt=""
          src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
        ></v-img>
      </v-list-item-avatar>
    </v-list-item>

    <v-card-actions>
      <v-btn text color="primary" @click="change">
        <router-link :to="{path:'/follow',query:{follow_view:true}}"   >Following</router-link>
      </v-btn>
      <v-btn text color="primary" @click="change">
        <router-link :to="{path:'/follow',query:{follow_view:false}}" >Followers</router-link>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>


<script>
import global from "../components/global"
export default {
  name: "RightBar",

  components: {
    
  },

  data: () => ({
    username: global.information["username"],
    signature: global.information["signature"],
  }),

  mounted: async function() {
    await this.req_all();
    this.username = global.information["username"];
    this.signature = global.information["signature"]+"";
    // console.log(this.username)
  },


  created() {
    // this.req_all();
  },

  computed: {},

  methods: {
    change: function(){
      window.location.reload()
      // this.reload();
    },
  },
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
