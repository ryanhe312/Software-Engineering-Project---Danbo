<template>
  <v-app>
    <div class="grey lighten-5">
      <v-card class="overflow-hidden" color="#F2F2F0" evelation="0">
        <TopBar />
        <v-card elevation="0" class="mt-3 d-flex justify-end mb-6"> </v-card>
        <v-row>
          <v-col>
            <v-card class="mx-auto" max-width="700">
              <v-list>
                <v-subheader>USERS</v-subheader>
                <v-list-item-group v-model="user">
                  <v-list-item
                    v-for="(item, i) in searchuser"
                    :key="i"
                    @click="postuserdata(item)"
                  >
                    <v-list-item-icon>
                      <v-icon></v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title v-text="item"></v-list-item-title>
                      <v-divider></v-divider>
                    </v-list-item-content>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </v-card>
          </v-col>
          <v-col>
            <v-card class="mx-auto" max-width="700">
              <v-list>
                <v-subheader>TOPICS</v-subheader>
                <v-list-item-group v-model="topic">
                  <v-list-item
                    v-for="(item, i) in searchtopic"
                    :key="i"
                    @click="posttopicdata(item)"
                  >
                    <v-list-item-icon>
                      <v-icon v-text="item.icon"></v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title v-text="item"></v-list-item-title>
                      <v-divider></v-divider>
                    </v-list-item-content>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </v-card>
          </v-col>
        </v-row>
        <v-card elevation="0" class="mt-3 d-flex justify-end mb-6"> </v-card>
        <v-divider></v-divider>
      </v-card>
    </div>
  </v-app>
</template>

<script>
import global from "../components/global";
export default {
  name: "search",
  components: {
    TopBar: () => import("../components/TopBar"),
  },
  data: () => ({
    //items1: [],
    searchuser: global.information["searchuser"],
    //items2: [],
    searchtopic: global.information["searchtopic"],
    user: "",
    topic: "",
  }),
  async mounted() {
    await this.getdata();
    await this.request_data("searchuser");
    await this.request_data("searchtopic");
    await this.update();
  },
  methods: {
    async getdata() {
      global.information["keyword"] = this.$route.query.keyword;
    },
    async update() {
      for (var i = 0; i < global.information["searchuser"].length; i = i + 1) {
        this.searchuser[i] = global.information["searchuser"][i]["username"];
      }
      for (var j = 0; j < global.information["searchtopic"].length; j = j + 1) {
        this.searchtopic[j] = global.information["searchtopic"][j]["topic"];
      }
    },
    //搜索用户
    /*async req_user() {
      var formdata = new FormData();
      formdata.append("keyword", this.keyword);
      await this.axios
        .post("/user/searchUser", formdata, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((response) => this.ack_user(response))
        .catch(function (error) {
          console.log(error);
        });
    },
    async ack_user(response) {
      var data = response.data;
      if (data.error_code == 200) {
        this.searchuser = data.data;
      } else {
        this.searchuser = [];
      }
    },
    //搜索话题
    /*async req_topic() {
      var formdata = new FormData();
      formdata.append("keyword", this.keyword);
      await this.axios
        .post("/blog/searchTopic", formdata, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((response) => this.ack_topic(response))
        .catch(function (error) {
          console.log(error);
        });
    },
    async ack_topic(response) {
      var data = response.data;
      if (data.error_code == 200) {
        this.items2 = data.data;
      } else {
        this.items2 = [];
      }
    },*/
    postuserdata(item) {
      this.$router.push({ path: "/otherper", query: { user: item } });
    },
    posttopicdata(item) {
      this.$router.push({ path: "/", query: { topicname: item } });
    },
  },
};
</script>
