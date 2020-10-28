<template>
<v-card
    class="mx-auto"
    max-width="344"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="overline mb-1">
          Ning
        </div>
        <v-list-item-subtitle>Fudan CS.</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="80"
        color="grey"
      >
      <v-img
              class="elevation-6"
              alt=""
              src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
            ></v-img>
            </v-list-item-avatar>
    </v-list-item>

    <v-card-actions>
        <v-btn
      text
      color="primary"
    >
    <router-link  to="/follow">Following</router-link>
    </v-btn>
    <v-btn
      text
      color="primary"
    >
      Followers
    </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "RightBar",

  components: {},

  data: () => ({
    }),

  computed: {},

  methods: {},
};
</script>
