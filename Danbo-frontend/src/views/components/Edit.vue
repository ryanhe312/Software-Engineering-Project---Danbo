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
</template>


<script>
import global from "../components/global";

export default {
  name: "edit",

  components: {},

  data: () => ({
    Share_text: "",
  }),

  computed: {},

  mounted() {},

  methods: {
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
    },
  },
};
</script>
