<template>
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

          <v-file-input
            v-model="images"
            accept="image/png, image/jpeg, image/bmp"
            color="deep-purple accent-4"
            counter
            label="File input"
            multiple
            placeholder="Select your files"
            prepend-icon="mdi-paperclip"
            outlined
            :show-size="1000"
          >
            <template v-slot:selection="{ index, text }">
              <v-chip
                v-if="index < 2"
                color="deep-purple accent-4"
                dark
                label
                small
              >
                {{ text }}
              </v-chip>

              <span
                v-else-if="index === 2"
                class="overline grey--text text--darken-3 mx-2"
              >
                +{{ images.length - 2 }} image(s)
              </span>
            </template>
          </v-file-input>

          <v-row>
            <v-col v-for="(img, i) in images" :key="i" class="d-flex child-flex" cols="4">
              <v-img
                :src="img2url(img)"
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
            <v-row justify="end">
              <v-btn tile color="success" @click="release()">
                <v-icon left> mdi-share </v-icon>
                Share
              </v-btn>
            </v-row>
          </v-card-actions>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>


<script>
import global from "../components/global";

export default {
  name: "edit",

  components: {},

  data: () => ({
    images: [],
    Share_text: "",
  }),

  computed: {},

  mounted() {},

  methods: {
    img2url: function (img){
      return URL.createObjectURL(img);
    },

    release: function () {
      var formdata = new FormData();
      formdata.append("content", this.Share_text);
      for(let i in this.images){
        formdata.append("pictures", this.images[i]);
      }

      var api = "/blog/releaseBlog";
      console.log("content", formdata.get("content"));
      console.log("pictures", formdata.get("pictures"));
      //request needed data
      this.axios.post(api, formdata).then((response) => {
        var data = response.data;
        if (data.error_code == 200)
          // console.log(data.data),
          alert(data.message);
        this.Share_text = "";
      });
    },
  },
};
</script>
