<template>
  <v-card class="mx-n16" width="1000" height="800">
    <v-system-bar></v-system-bar>
    <v-card elevation="0" class="mt-4 mx-auto">
      <p class="title" align="center">Profile photo</p>
    </v-card>
    <v-divider></v-divider>
    <div class="text-center">
      <v-avatar class="mt-16" size="128">
        <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
      </v-avatar>
    </div>
    <div class="mt-5 center">
        <v-card class="mx-auto" width="500" elevation="0">
        <v-file-input
          class="mt-10"
          v-model="files"
          placeholder="Upload your new Profile photo"
          label="picture upload"
          prepend-icon="mdi-camera"
        >
          <template v-slot:selection="{ text }">
            <v-chip small label color="primary">
              {{ text }}
            </v-chip>
          </template>
        </v-file-input>
        </v-card>
    </div>
    <div class="text-center">
      <v-btn class="mt-14" rounded color="primary" dark> Charge </v-btn>
    </div>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    files: [],
  }),
};
</script>