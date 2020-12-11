<template>
  <v-card class="mx-auto" outlined>
    <v-row>
      <v-col cols="12">
        <v-list two-line>
          <template v-for="(value,key,index) in followers">
            <v-subheader v-if="follow_view=='true' && index==0" :key="index+1000">
              Following
            </v-subheader>

            <v-subheader v-else-if="index==0" :key="index+1000">
              Follower
            </v-subheader>

            <v-list-item :key="key">
              <v-list-item-avatar>
                <img src="https://cdn.vuetifyjs.com/images/lists/1.jpg" />
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>
                  <router-link :to="{path:'/otherper',query:{user:key}}"> {{key}} </router-link>
                </v-list-item-title>
                <v-list-item-subtitle
                  v-html="value.signature"
                ></v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-divider
              :key="index"
              inset=true
            ></v-divider>
          </template>

          <!-- <template v-for="(item, index) in items">
            <v-subheader v-if="item.header" :key="item.header">
              {{ item.header }}
            </v-subheader>
            <v-divider
              v-else-if="item.divider"
              :key="index"
              :inset="item.inset"
            ></v-divider>
            <v-list-item v-else :key="item.title">
              <v-list-item-avatar>
                <img :src="item.avatar" />
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title v-html="item.title"></v-list-item-title>
                <v-list-item-subtitle
                  v-html="item.subtitle"
                ></v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </template> -->
        </v-list>
      </v-col> </v-row></v-card>
</template>

<script>
import global from "../components/global"
export default {
  name: "Followers",
  components: {},
  data: () => ({
    followers:"",
    follow_view:false,
    items: [
      { header: "Following" },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
        title: "Brunch this weekend?",
        subtitle: `<span class="font-weight-bold">Hello</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
      },
      { divider: true, inset: true },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
        title: "Brunch this weekend?",
        subtitle: `<span class="font-weight-bold">Hi</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
      },
      { divider: true, inset: true },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
        title: "Brunch this weekend?",
        subtitle: `<span class="font-weight-bold">Complete</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
      },
      { divider: true, inset: true },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
        title: "Brunch this weekend?",
        subtitle: `<span class="font-weight-bold">Yes</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
      },
      { divider: true, inset: true },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
        title: "Brunch this weekend?",
        subtitle: `<span class="font-weight-bold">Hello</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
      },
      { divider: true, inset: true },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
        title: "Brunch this weekend?",
        subtitle: `<span class="font-weight-bold">Hi</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
      },
      { divider: true, inset: true },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
        title: "Brunch this weekend?",
        subtitle: `<span class="font-weight-bold">Complete</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
      },
      { divider: true, inset: true },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
        title: "Brunch this weekend?",
        subtitle: `<span class="font-weight-bold">Yes</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
      },
      { divider: true, inset: true },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
        title: "Brunch this weekend?",
        subtitle: `<span class="font-weight-bold">Hello</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
      },
      { divider: true, inset: true },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
        title: "Brunch this weekend?",
        subtitle: `<span class="font-weight-bold">Hi</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
      },
      { divider: true, inset: true },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
        title: "Brunch this weekend?",
        subtitle: `<span class="font-weight-bold">Complete</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
      },
      { divider: true, inset: true },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
        title: "Brunch this weekend?",
        subtitle: `<span class="font-weight-bold">Yes</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
      },
      { divider: true, inset: true },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/5.jpg",
        title: "Brunch this weekend?",
        subtitle: `<span class="font-weight-bold">Ok</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
      },
    ],
  }),
  created: function(){
    this.follow_view = this.$route.query.follow_view;
    console.log("in",this.follow_view)
  },
  mounted: async function() {
    await this.req_all();
    this.username = global.information["username"];
    if(this.follow_view=="true"){
      await this.request_data("followers");
      this.followers = global.information["followers"];
      console.log("follower",this.followers);
    }
    else{
      await this.request_data("followees");
      this.followers = global.information["followees"];
      console.log("followee",this.followers);
    }
      
  },
  // mounted: async function(){
  //   await this.req_all_follower();
  //   this.followers = global.information["followers"];
  //   console.log("hello",this.followers);
  // }
};
</script>
