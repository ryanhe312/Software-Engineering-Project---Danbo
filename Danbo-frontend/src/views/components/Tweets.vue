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
          <v-col cols="12" >
            <v-textarea
              label="Share Your Feelings!"
              outlined
            ></v-textarea>

            <v-card-actions>
              <v-row justify="end">
                <v-btn tile color="success">
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

      <v-card
        elevation="1"
        class="mx-auto mb-2"
        outlined
        color="white"
        max-width="1200"
        v-for="i in list" :key="i"
      >
      <v-container fluid>
        <v-row justify="center">
          <v-col cols="12" >
        <v-card-title>
          <v-list-item-avatar color="grey darken-2">
            <v-img
              class="elevation-6"
              alt=""
              src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
            ></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>Ning</v-list-item-title>
          </v-list-item-content>
        </v-card-title>

        <v-card-text class="bold">
          Turns out semicolon-less style is easier and safer in TS because most
          gotcha edge cases are type invalid as well.fdafasfsdafDsafdsfasd
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
export default {
  name: "tweets",

  components: {},

  data: () => ({
    list: [1,2,3,4,5],
  }),

  computed: {},

  methods: {},
};
</script>
