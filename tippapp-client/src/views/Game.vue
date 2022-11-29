<template>
  <v-container class="fill-height max-width-1200">
    <v-card elevation="4" class="full-width">
      <v-toolbar>
        <v-app-bar-nav-icon @click.stop="$router.push({ name: 'ListGuess' })">
          <template v-slot:default
            ><v-icon>mdi-keyboard-backspace</v-icon></template
          >
        </v-app-bar-nav-icon>

        <v-toolbar-title class="text-h6">
          {{ homeTeamName }} - {{ awayTeamName }}
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn @click.stop="$router.push({ name: 'Guess' })">
          Selber tippen</v-btn
        >
      </v-toolbar>
      <v-card-title>Informationen zum Spiel:</v-card-title>
      <v-card-text>
        <div class="text--primary">
          Heim: {{ homeTeamName }}
          <v-img class="flag" :src="flagUrl(homeTeam)" /><br />
          Auswärts: {{ awayTeamName }}
          <v-img class="flag" :src="flagUrl(awayTeam)" /><br />
          Anpfiff: {{ date_formatted }}<br />
          Ergebnis: <b>{{ homeResult }} - {{ awayResult }}</b>
        </div>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-text>
        <h3>Tipps der Mitspieler:</h3>
        <v-simple-table v-if="tipps.length > 0">
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">Name</th>
                <th class="text-left">Tipp</th>
                <th class="text-left">Punkte</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in tipps" :key="item.username">
                <td>{{ item.username }}</td>
                <td>{{ item.home }} - {{ item.away }}</td>
                <td>{{ item.points }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
        <div v-else-if="new Date(date).getTime() < Date.now()">
          Niemand hat dieses Spiel getippt.
        </div>
        <div v-else>Die Tipps sind erst nach Anpfiff einsehbar.</div>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
const regionNames = new Intl.DisplayNames(["de"], { type: "region" });

export default {
  name: "Game",
  data() {
    return {
      homeTeam: null,
      awayTeam: null,
      homeTeamName: null,
      awayTeamName: null,
      homeResult: null,
      awayResult: null,
      homeFlag: null,
      awayFlag: null,
      date: 0,
      date_formatted: null,
      tipps: [],
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      if (!this.$route.query.id) return;
      // Fetch Guesses
      fetch(process.env.VUE_APP_API_URL + "api/v1/games/gameInfo", {
        method: "POST",
        headers: {
          authorization: `Bearer ${localStorage.user_token}`,
          "content-type": "application/json",
        },
        body: JSON.stringify({
          gameId: this.$route.query.id,
        }),
      })
        .then((res) => res.json())
        .then((gameInfo) => {
          this.homeTeam = gameInfo.homeTeam;
          this.awayTeam = gameInfo.awayTeam;
          this.homeTeamName = this.unicodeToName(gameInfo.homeTeam);
          this.awayTeamName = this.unicodeToName(gameInfo.awayTeam);
          this.homeResult = gameInfo.homeResult;
          this.awayResult = gameInfo.awayResult;
          this.date_formatted = new Date(gameInfo.date).toLocaleString([], {
            weekday: "long",
            day: "numeric",
            month: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          });
          this.date = gameInfo.date;
          if (Array.isArray(gameInfo.guesses)) {
            gameInfo.guesses.sort((a, b) =>
              a.points > b.points ? -1 : b.points > a.points ? 1 : 0
            );
            this.tipps = gameInfo.guesses;
          }
        });
    },
    flagUrl(unicode) {
      if (unicode === null) return;
      if (unicode == "EN" || unicode == "WL") unicode = "GB";
      return (
        "http://purecatamphetamine.github.io/country-flag-icons/3x2/" +
        unicode +
        ".svg"
      );
    },
    unicodeToName(unicode) {
      let name = regionNames.of(unicode);
      if (unicode == "EN") name = "England";
      if (unicode == "WL") name = "Wales";
      return name;
    },
  },
};
</script>
<style lang="scss" scoped>
.full-width {
  width: 100%;
}

.flag {
  height: 1em;
  width: 1.5em;
  border: 1px solid grey;
  display: inline-block;
  margin-right: 0.5em;
}
</style>