<template>
  <div>
    <v-card
      elevation="1"
      class="mx-auto mb-2"
      outlined
      color="white"
      max-width="1200"
    >
      <v-container>
        <v-row justify="center">
          <v-col cols="12">
            <v-textarea
              label="Share Your Feelings!"
              outlined
              v-model="Share_text"
            >
            </v-textarea>

            <v-card-actions>
              <v-row justify="end">
                <v-btn tile color="success" @click="release()">
                  <v-icon left>
                    mdi-share
                  </v-icon>
                  Share
                </v-btn>
              </v-row>
            </v-card-actions>
          </v-col>
        </v-row>
      </v-container>
    </v-card>

    <!-- All the blogs! -->
    <v-card
      elevation="1"
      class="mx-auto mb-2"
      outlined
      color="white"
      max-width="1200"
      v-for="tweet in tweets"
      :key="tweet"
    >
      <v-container fluid>
        <v-row justify="center">
          <v-col cols="12">
            <v-card-title>
              <v-list-item-avatar color="grey darken-2">
                <v-img
                  class="elevation-6"
                  alt=""
                  src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                ></v-img>
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title>{{
                  tweet["origin_user"]
                }}</v-list-item-title>
              </v-list-item-content>
            </v-card-title>

            <v-card-text class="bold">
              {{ tweet["origin_content"] }}
            </v-card-text>

            <v-card-actions>
              <v-list-item class="grow">
                <v-row align="center" justify="end">
                  <v-icon class="mr-1">
                    mdi-heart
                  </v-icon>
                  <span class="subheading mr-2">256</span>

                  <v-icon class="mr-1">
                    mdi-comment
                  </v-icon>
                  <span class="subheading mr-2">10</span>

                  <v-icon class="mr-1">
                    mdi-share-variant
                  </v-icon>
                  <span class="subheading">45</span>
                </v-row>
              </v-list-item>
            </v-card-actions>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
    <!-- </v-row> -->

    <!-- </div> -->
  </div>
</template>

<script>
import global from "../components/global";

export default {
  name: "tweets",

  components: {},

  data: () => ({
    tweets: [],
    Share_text: "",
  }),

  computed: {},

  mounted() {
    this.get_tweets();
  },

  methods: {
    get_tweets: async function() {
      console.log(this.Share_text);
      await this.request_data("allBlogs");
      this.tweets = global.information["allBlogs"];
      console.log(this.tweets);
    },

    release: function() {
      var formdata = new FormData();
      formdata.append("content", this.Share_text);

      var api = "/blog/releaseBlog";
      console.log(formdata.get("content"));
      //request needed data
      this.axios.post(api, formdata).then((response) => {
        var data = response.data;
        if (data.error_code == 200)
          // console.log(data.data),
          alert(data.message);
      });
      this.Share_text = "";
      this.get_tweets();
    },
  },
};
</script>
