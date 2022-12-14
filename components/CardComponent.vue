<template>
  <div>
    <v-img
      height="260"
      src="https://stealthygaming.com/wp-content/uploads/2022/04/Roblox-sonic-games.jpeg"
    >
      <div class="d-flex pa-5">
        <v-spacer></v-spacer>
        <v-hover v-slot="{ hover }">
          <v-btn
            class="mx-2"
            fab
            small
            elevation="0"
            :color="hover ? 'second' : 'blue'"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-hover>
      </div>
    </v-img>
    <v-card class="mb-6">
      <v-card-title>{{ title }}</v-card-title>
      <v-card-subtitle> {{show}} Small plates, salads & sandwiches - an intimate setting with 12 indoor
        seats plus patio seating.
      </v-card-subtitle>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-hover v-slot="{ hover }"
          ><v-btn :color="hover ? 'yellow' : 'green'">
            <v-icon>mdi-check</v-icon>
          </v-btn></v-hover
        >

        <v-btn color="error"> <v-icon>mdi-close</v-icon> </v-btn>
        <v-spacer></v-spacer>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "ProjectNameCardComponent",
  props: {
    title: {
      type: String,
      default: "None",
    },
    show: {
        type: String,
        default: "yeah"
    }
  },
};
</script>

<style lang="scss" scoped></style>
