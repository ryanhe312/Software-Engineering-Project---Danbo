<template>
  <v-card class="mx-auto" max-width="344" outlined>
    <v-list-item three-line>
      <v-list-item-content>
        <div class="overline mb-1">
          <router-link to="/personal">{{username}}</router-link>
        </div>
        <v-list-item-subtitle>{{signature}}</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar tile size="80" color="grey" @click="toNew()">
        <v-img :src="profile"></v-img>
      </v-list-item-avatar>
    </v-list-item>

    <v-card-actions>
      <v-btn text color="primary" @click="change(0)">
        Following
      </v-btn>
      <v-btn text color="primary" @click="change(1)">
        Followers
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
    profile:"http://127.0.0.1:8000/media/"+global.information["profile"],
  }),
  mounted: async function() {
    await this.req_all();
    await this.update();
    // console.log(this.username)
  },
  created() {
    // this.req_all();
  },
  computed: {},
  methods: {
    update: function(){
      this.username = global.information["username"];
      this.signature = global.information["signature"]+"";
      this.profile = "http://127.0.0.1:8000/media/"+global.information["profile"];
    },
    toNew: function(){
      this.$router.push({path:"/otherper", query:{user:this.username}})
      // this.$router.push()
    },

    change: function(i){
      console.log(this.$route.path,i)
      if(this.$route.path=="/follow")
      {
        if(i==0 && this.$route.query.follow_view == "false")
        {
          this.$router.push({path: "follow", query:{follow_view: "true"}})
          window.location.reload()
        }
        if(i==1 && this.$route.query.follow_view == "true")
        {
          this.$router.push({path: "follow", query:{follow_view: "false"}})
          window.location.reload()
        }
      }
      else
      {
        if(i==0)
          this.$router.push({path: "follow", query:{follow_view: "true"}})
        else
          this.$router.push({path: "follow", query:{follow_view: "false"}})
      }
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
