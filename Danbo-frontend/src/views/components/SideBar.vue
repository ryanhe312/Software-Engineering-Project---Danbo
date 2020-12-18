<template>
  <div>
    <v-card elevation="2" max-width="444" class="mx-auto">
      <v-container>
        <v-row justify="center">
          <v-header>Today topics</v-header>
        </v-row>
        <v-row class="mb-4"></v-row>

        <template>
          <v-card class="mx-auto" max-width="344" v-for="(message, i) in hotTopics" :key="i" @click="toTopic(message.topic)" >
            <v-card-text>
              <v-row>
              <v-avatar size="36px">
                    <v-icon>mdi-tag</v-icon>
                  </v-avatar>
              <h2 class="title primary--text">
                {{message.topic}}
              </h2>
              </v-row>
              
              <v-row>
                <v-col>
                  {{message.time}}
                </v-col>
                <v-col>
                <span class="primary--text subtitle-2 ">{{message.count}} Tweets</span>
                </v-col>
              </v-row>
            </v-card-text>
            <v-row class="mb-2"></v-row>
          </v-card>
        </template>
      </v-container>
    </v-card>
  </div>
</template>

<script>
import global from "../components/global";
export default {
  name: "SideBar",

  components: {},

  data: () => ({
    hotTopics: global.information["hotTopics"],
  }),

  computed: {},

  mounted: async function() {
    await this.request_data("hotTopics");
    this.hotTopics = global.information["hotTopics"];
    console.log(this.hotTopics);
  },

  methods: {
    toTopic: function(topic) {
      this.$router.push({ path: "topic", query: { currentTopic: topic } });
      if (this.$route.path == "/topic") window.location.reload();
    },
  },
};
</script>
