<template>
  <v-app>
    <div class="grey lighten-5">
      <v-card class="overflow-hidden" color="#F2F2F0" evelation="0">
        <TopBar />
        <v-card elevation="0" class="mt-3 d-flex justify-end mb-6"> </v-card>
        <v-row>
          <v-col>
            <v-card class="mx-auto" max-width="700">
              <v-subheader>USERS</v-subheader>
              <v-simple-table>
                <template v-slot:default>
                  <thead>
                    <tr>
                      <th class="text-left">Username</th>
                      <th class="text-left">Nickname</th>
                      <th class="text-left">Signature</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="(item, i) in searchuser"
                      :key="i"
                      @click="postuserdata(item.username)"
                    >
                      <td>{{ item.username }}</td>
                      <td>{{ item.nickname }}</td>
                      <td>{{ item.signature }}</td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
              <!--  <v-list>
                <v-subheader>USERS</v-subheader>
                <v-list-item-group v-model="user">
                  <v-list-item
                    v-for="(item, i) in searchuser"
                    :key="i"
                    @click="postuserdata(item.username)"
                  >
                    <v-list-item-icon>
                      <v-icon></v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      
                      <v-list-item-title v-text="item.username"></v-list-item-title>
                      <v-list-item-title v-text="item.nickname"></v-list-item-title>
                      <v-divider></v-divider>
                    </v-list-item-content>
                  </v-list-item>
                </v-list-item-group>
              </v-list> -->
            </v-card>
          </v-col>
          <v-col>
            <v-card class="mx-auto" max-width="700">
              <v-subheader>TOPICS</v-subheader>
              <v-simple-table>
                <template v-slot:default>
                  <thead>
                    <tr>
                      <th class="text-left">Topic</th>
                      <th class="text-left">Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="(item, i) in searchtopic"
                      :key="i"
                      @click="posttopicdata(item.topic)"
                    >
                      <td>{{ item.topic }}</td>
                      <td>{{ item.time }}</td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
              <!--  <v-list>
                <v-subheader>TOPICS</v-subheader>
                <v-list-item-group v-model="topic">
                  <v-list-item
                    v-for="(item, i) in searchtopic"
                    :key="i"
                    @click="posttopicdata(item.topic)"
                  >
                    <v-list-item-icon>
                      <v-icon v-text="item.icon"></v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title v-text="item.topic"></v-list-item-title>
                      <v-divider></v-divider>
                    </v-list-item-content>
                  </v-list-item>
                </v-list-item-group>
              </v-list> -->
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
    searchuser: [],
    //items2: [],
    searchtopic: [],
    user: "",
    topic: "",
  }),
  async mounted() {
    await this.getdata();
    await this.request_data("searchuser");
    await this.request_data("searchtopic");
    this.searchuser = global.information["searchuser"];
    this.searchtopic = global.information["searchtopic"];
  },
  methods: {
    async getdata() {
      global.information["keyword"] = this.$route.query.keyword;
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
      window.location.reload()
    },
    posttopicdata(item) {
      this.$router.push({ path: "/", query: { topicname: item } });
      window.location.reload()
    },
  },
};
</script>
