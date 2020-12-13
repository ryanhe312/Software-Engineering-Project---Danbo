<template>
  <div>
    <!-- <v-card elevation="2" max-width="444" class="mx-auto">
        <v-system-bar lights-out></v-system-bar>
        <v-carousel
          :continuous="true"
          :cycle="cycle"
          :show-arrows="false"
          hide-delimiter-background
          delimiter-icon="mdi-minus"
          height="300"
        >
          <v-carousel-item v-for="(slide, i) in slides" :key="i">
            <v-sheet :color="colors[i]" height="100%" tile>
              <v-row class="fill-height" align="center" justify="center">
                <div class="display-3">{{ slide }} Slide</div>
              </v-row>
            </v-sheet>
          </v-carousel-item>
        </v-carousel>
        <v-list two-line>
          <v-list-item>
            <v-list-item-avatar>
              <v-img src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"></v-img>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>Ning</v-list-item-title>
              <v-list-item-subtitle>Something</v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-action>
              <v-switch v-model="cycle" label="Cycle Slides" inset></v-switch>
            </v-list-item-action>
          </v-list-item>
        </v-list>
      </v-card>

<v-row class="mb-2"></v-row> -->

    <v-card elevation="2" max-width="444" class="mx-auto">
      <v-container>
        <v-row justify="center">
          <v-header>Today topics</v-header>
        </v-row>
        <v-row class="mb-4"></v-row>

        <v-expansion-panels popout>
          <v-expansion-panel
            v-for="(message, i) in hotTopics"
            :key="i"
            hide-actions
          >
            <v-expansion-panel-header>
              <v-row align="center" class="">
                <v-col cols="8" sm="4" md="2">
                  <v-avatar size="36px">
                    <v-icon>mdi-tag</v-icon>
                  </v-avatar>
                </v-col>
                <v-col class="hidden-xs-only" sm="5" md="5">

                  <strong v-html="message.topic" @click=toTopic(message.topic)></strong>
                  <span class="grey--text">
                    &nbsp;({{ message.count }})
                  </span>
                </v-col>
              </v-row>
            </v-expansion-panel-header>

            <v-expansion-panel-content>
              <v-divider></v-divider>
              <v-card-text v-text="message.time"></v-card-text>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-container>
    </v-card>
  </div>
</template>

<script>
import global from "../components/global"
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
    console.log(this.hotTopics)
  },

  methods: {
    toTopic : function(topic){
      this.$router.push({path: "topic", query:{currentTopic: topic}})
      if(this.$route.path == "/topic")
        window.location.reload();
    },
  },
};
</script>
