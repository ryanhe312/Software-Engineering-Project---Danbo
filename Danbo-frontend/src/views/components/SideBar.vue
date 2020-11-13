<template>
  <div>
      <v-card elevation="2" max-width="444" class="mx-auto">
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

<v-row class="mb-2"></v-row>

    <v-card elevation="2" max-width="444" class="mx-auto">
      <v-container>
        <v-row justify="center">
          <v-subheader>Today Agenda</v-subheader>
          </v-row>

          <v-expansion-panels popout>
            <v-expansion-panel
              v-for="(message, i) in messages"
              :key="i"
              hide-actions
            >
              <v-expansion-panel-header>
                <v-row align="center" class="">
                  <v-col cols="8" sm="4" md="2">
                    <v-avatar size="36px">
                      <img
                        v-if="message.avatar"
                        alt="Avatar"
                        src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                      />
                      <v-icon
                        v-else
                        :color="message.color"
                        v-text="message.icon"
                      ></v-icon>
                    </v-avatar>
                  </v-col>

                  <v-col class="hidden-xs-only" sm="5" md="5">
                    <strong v-html="message.name"></strong>
                    <span v-if="message.total" class="grey--text">
                      &nbsp;({{ message.total }})
                    </span>
                  </v-col>


                </v-row>
              </v-expansion-panel-header>

              <v-expansion-panel-content>
                <v-divider></v-divider>
                <v-card-text v-text="lorem"></v-card-text>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        
      </v-container>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "SideBar",

  components: {},

  data: () => ({
    colors: [
      "green",
      "secondary",
      "yellow darken-4",
      "red lighten-2",
      "orange darken-1",
    ],
    cycle: false,
    slides: ["First", "Second", "Third", "Fourth", "Fifth"],
    messages: [
        {
          avatar: 'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460',
          name: 'John Leider',
          title: 'Welcome to Vuetify!',
          excerpt: 'Thank you for joining our community...',
        },
        {
          color: 'red',
          icon: 'mdi-account-multiple',
          name: 'Social',
          new: 1,
          total: 3,
          title: 'Twitter',
        },
        {
          color: 'teal',
          icon: 'mdi-tag',
          name: 'Promos',
          new: 2,
          total: 4,
          title: 'Shop your way',
          exceprt: 'New deals available, Join Today',
        },
      ],
      lorem: 'Lorem ipsum dolor sit amet, at aliquam vivendum vel, everti delicatissimi cu eos. Dico iuvaret debitis mel an, et cum zril menandri. Eum in consul legimus accusam. Ea dico abhorreant duo, quo illum minimum incorrupte no, nostro voluptaria sea eu. Suas eligendi ius at, at nemore equidem est. Sed in error hendrerit, in consul constituam cum.',
  }),

  computed: {},

  methods: {},
};
</script>
