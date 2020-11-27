<template>
<div>
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
            <v-list-item-title>{{ tweet["origin_user"] }}</v-list-item-title>
          </v-list-item-content>
        </v-card-title>

        <v-card-text class="bold">
          {{ tweet["origin_content"] }}
        </v-card-text>

        <v-row>
            <v-col v-for="(img, i) in tweet[`pictures`]" :key="i" class="d-flex child-flex" cols="4">
              <v-img
                :src="complete_image_url(img)"
                aspect-ratio="1"
                class="grey lighten-2"
              >
                <template v-slot:placeholder>
                  <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center"
                  >
                    <v-progress-circular
                      indeterminate
                      color="grey lighten-5"
                    ></v-progress-circular>
                  </v-row>
                </template>
              </v-img>
            </v-col>
          </v-row>

        <v-card-actions>
          <v-list-item class="grow">
            <v-row align="center" justify="end">
              <v-icon class="mr-1"> mdi-heart </v-icon>
              <span class="subheading mr-2">256</span>

              <v-icon class="mr-1"> mdi-comment </v-icon>
              <span class="subheading mr-2">10</span>

              <v-icon class="mr-1"> mdi-share-variant </v-icon>
              <span class="subheading">45</span>
            </v-row>
          </v-list-item>
        </v-card-actions>
      </v-col>
    </v-row>
  </v-container>
</div>
</template>


<script>
import global from "../components/global";

export default {
  name: "tweet",
  props: ["tweet_content", "tweet_id"],
  components: {},

  data () {
    return {
      tweet: this.tweet_content,
    }
  },

  computed: {},

  mounted() {
    console.log(this.tweet_id, this.tweet);
  },

  methods: {
    complete_image_url: function(rel_url){
      var url = "http://127.0.0.1:8090/media/" + rel_url;
      console.log(url);
      return url;
    }
  },
};
</script>
