<template>
  <v-app>
    <v-app-bar app color="primary" dark v-if="pageTitle != 'Login'">
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title>{{ pageTitle }}</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            {{ username }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list nav dense>
        <v-list-item-group
          v-model="page"
          active-class="primary--text text--accent-4"
          @change="drawer = false"
          mandatory
        >
          <v-list-item
            value="dashboard"
            link
            @click="$router.push({ name: 'Dashboard' })"
          >
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Dashboard</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item
            value="guess"
            link
            @click="$router.push({ name: 'Guess' })"
          >
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Tippen</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item
            value="listGuess"
            link
            @click="$router.push({ name: 'ListGuess' })"
          >
            <v-list-item-icon>
              <v-icon>mdi-dots-grid</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Tippübersicht</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item
            value="listPoints"
            link
            @click="$router.push({ name: 'ListPoints' })"
          >
            <v-list-item-icon>
              <v-icon>mdi-format-list-numbered</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Punkteübersicht</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item
            value="games"
            link
            @click="$router.push({ name: 'Games' })"
          >
            <v-list-item-icon>
              <v-icon>mdi-soccer-field</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Spielplan</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
      <template v-slot:append>
        <div class="pa-2">
          <v-btn block outlined @click.stop="logout"> Logout </v-btn>
        </div>
      </template>
    </v-navigation-drawer>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import jwt from "jsonwebtoken";

export default {
  name: "App",

  data: () => ({
    username: "",
    drawer: false,
    page: null,
  }),
  mounted() {
    this.getUsername();
  },
  computed: {
    pageTitle() {
      let title = "";
      switch (this.$route.name) {
        case "Login":
          title = "Login";
          break;
        case "Dashboard":
          title = "Dashboard";
          break;
        case "Guess":
          title = "Tippen";
          break;
        case "ListGuess":
          title = "Tippübersicht";
          break;
        case "ListPoints":
          title = "Punkteübersicht";
          break;
        case "Games":
          title = "Spielplan";
          break;

        default:
          title = "TippApp";
          break;
      }
      return title;
    },
  },
  methods: {
    getUsername() {
      if (localStorage.user_token)
        if (jwt.decode(localStorage.user_token))
          this.username = jwt.decode(localStorage.user_token).username;
    },
    logout() {
      localStorage.removeItem("user_token");
      this.$router.push({ name: "Login" });
    },
  },
};
</script>

<style scoped>
</style>