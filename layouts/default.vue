<template>
  <v-app>
    <div v-if="!$vuetify.breakpoint.mobile" dark>
      <v-main>
        <v-container>
          <Nuxt />
        </v-container>
      </v-main>

      <v-footer :absolute="!fixed" app>
        <span>&copy; {{ new Date().getFullYear() }}</span>
      </v-footer>
    </div>
    <div v-else>
      <v-btn @click="drawer = true" text><v-icon fixed>mdi-view-dashboard</v-icon></v-btn>
      <v-navigation-drawer v-model="drawer" fixed>
        <v-list nav dense>
          <v-list-item-group
            active-class="deep-purple--text text--accent-4"
          >
            <v-list-item >
              <v-icon>mdi-home</v-icon>
              <v-list-item-title >Home</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>about</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>contact</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>Promotion</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
      <div>
        <Nuxt />
      </div>
      <v-footer padless fixed>
        <div class="d-flex pa-5 text-center">
          <v-spacer></v-spacer>
          <v-btn fab  small>
            <v-icon >
              mdi-close
            </v-icon>
            </v-btn>
            <v-spacer></v-spacer>
        </div>
        <v-row class="container">
          <v-col class="text-center" cols="3" sm="3">
            <v-icon>mdi-home</v-icon>
            <v-btn to="/" text >Home</v-btn>
          </v-col>
          <v-col cols="3" sm="3" class="text-center">
            <v-icon>mdi-set-left</v-icon>
            <v-btn to="/form" text>About</v-btn></v-col>
          <v-col cols="3" sm="3" class="text-center"
            >
            <v-icon >mdi-point-of-sale</v-icon>
            <v-btn to="/inspire" text>Promotion</v-btn></v-col
          >
          <v-col cols="3" class="text-center"> 
            <v-icon >mdi-access-point</v-icon>
            <v-btn text>Notification</v-btn> </v-col>
        </v-row>
      </v-footer>
    </div>
  </v-app>
</template>

<script>
export default {
  name: "DefaultLayout",
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: "mdi-apps",
          title: "Welcome",
          to: "/",
        },
        {
          icon: "mdi-chart-bubble",
          title: "Inspire",
          to: "/inspire",
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Vuetify.js",
    };
  },
};
</script>
