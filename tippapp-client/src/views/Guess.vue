<template>
  <v-container class="fill-height table-container max-width-1200">
    <div class="table-wrapper">
      <v-data-table
        :headers="headers"
        :items="items"
        :items-per-page="-1"
        class="elevation-3"
        disable-filtering
        disable-sort
        locale="de-DE"
        :loading="loading"
        v-if="!mobile"
      >
        <!-- eslint-disable -->
        <template v-slot:item.guess="{ item }">
          <div v-if="item.editable" class="d-flex flex-row align-center">
            <v-text-field
              v-model="item.home"
              outlined
              dense
              single-line
              :rules="[rules.numeric]"
              hide-details
              class="mr-1 centered-input"
            ></v-text-field>
            <span>:</span>
            <v-text-field
              v-model="item.away"
              outlined
              dense
              single-line
              :rules="[rules.numeric]"
              hide-details
              class="ml-1 centered-input"
            ></v-text-field>
          </div>
          <span v-else>{{ getGuessStr(item.guess) }}</span>
        </template>
        <template v-slot:item.stage="{ item }">
          <span v-if="item.stage == 'group'"
            >Gruppenphase (Gruppe {{ item.group.toUpperCase() }})</span
          >
          <span v-else>{{ item.stage }}</span>
        </template>
        <template v-slot:footer.prepend>
          <v-btn color="secondary" elevation="8" large @click="saveGuesses()"
            >Speichern</v-btn
          >
        </template>
        <template v-slot:item.homeTeamName="{ item }">
          <v-img class="flag" :src="flagUrl(item.homeTeam)" />
          {{ item.homeTeamName }}
        </template>
        <template v-slot:item.awayTeamName="{ item }">
          <v-img class="flag" :src="flagUrl(item.awayTeam)" />
          {{ item.awayTeamName }}
        </template>
        <!-- eslint-enable -->
      </v-data-table>
      <v-data-table
        :headers="mobileHeaders"
        :items="items"
        :items-per-page="-1"
        class="elevation-3"
        disable-filtering
        disable-sort
        locale="de-DE"
        :loading="loading"
        mobile-breakpoint="-1"
        v-else
      >
        <!-- eslint-disable -->
        <template v-slot:item.info="{ item }">
          <b
            ><span v-if="item.stage == 'group'"
              >Gruppenphase (Gruppe {{ item.group.toUpperCase() }})</span
            >
            <span v-else>{{ item.stage }}</span></b
          ><br />{{ item.date }}
        </template>
        <template v-slot:item.teams="{ item }">
          <b>{{ item.homeTeamName }} : {{ item.awayTeamName }}</b
          ><br />
          <div v-if="item.editable" class="d-flex flex-row align-center">
            <v-text-field
              v-model="item.home"
              outlined
              dense
              single-line
              :rules="[rules.numeric]"
              hide-details
              class="mr-1 centered-input"
            ></v-text-field>
            <span>:</span>
            <v-text-field
              v-model="item.away"
              outlined
              dense
              single-line
              :rules="[rules.numeric]"
              hide-details
              class="ml-1 centered-input"
            ></v-text-field>
          </div>
          <span v-else>{{ getGuessStr(item.guess) }}</span>
        </template>
        <template v-slot:footer.prepend>
          <v-btn color="secondary" elevation="2" large @click="saveGuesses()"
            >Speichern</v-btn
          >
        </template>
        <!-- eslint-enable -->
      </v-data-table>
    </div>
    <v-snackbar v-model="error_sheet.enabled" timeout="3000">
      <div :class="'py-3 ' + error_sheet.color + '--text'">
        {{ error_sheet.context }}
      </div>

      <template v-slot:action="{ attrs }">
        <v-btn
          color="blue"
          text
          v-bind="attrs"
          @click="error_sheet.enabled = false"
        >
          Schliessen
        </v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>

<script>
const regionNames = new Intl.DisplayNames(["de"], { type: "region" });

export default {
  name: "Guess",
  data: () => ({
    headers: [
      { text: "Phase", value: "stage", align: "start" },
      {
        text: "Anpfiff",
        align: "start",
        value: "date",
      },
      { text: "Heim", value: "homeTeamName", align: "start" },
      { text: "Gast", value: "awayTeamName", align: "start" },
      {
        text: "Tipp",
        value: "guess",
        align: "end",
        width: "20%",
        align: "center",
      },
    ],
    mobileHeaders: [
      { text: "Begegnung", value: "info", align: "start" },
      {
        text: "Mannschaften / Tipp",
        value: "teams",
        align: "center",
        width: "50%",
      },
    ],
    items: [],
    rules: {
      numeric: (value) => {
        if (!value || (Number.isInteger(parseInt(value, 10)) && value >= 0)) {
          return true;
        } else {
          return "Nur positive Zahlen erlaubt";
        }
      },
    },
    error_sheet: {
      color: "red",
      enabled: false,
      context: "",
    },
    loading: true,
  }),
  mounted() {
    this.fetchData();
  },
  computed: {
    mobile() {
      return window.innerWidth < 800;
    },
  },
  methods: {
    fetchData() {
      // Fetch Games
      fetch(process.env.VUE_APP_API_URL + "api/v1/guesses/myguesses", {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.user_token}`,
          "content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((guesses) => {
          if (Array.isArray(guesses)) {
            const gameItems = guesses.map((item) => {
              const game = {
                ...item,
              };
              if (!game.guess) {
                game.guess = {
                  home: "-",
                  away: "-",
                };
              }
              if (game.guess.home === null) game.guess.home = "-";
              if (game.guess.away === null) game.guess.away = "-";
              game.home = game.guess.home === "-" ? "" : game.guess.home;
              game.away = game.guess.away === "-" ? "" : game.guess.away;
              game.guess = game.guess.home + ":" + game.guess.away;

              game.homeTeamName = this.unicodeToName(game.homeTeam);
              game.awayTeamName = this.unicodeToName(game.awayTeam);

              game.editable = Date.now() < new Date(game.date).getTime();

              let d = new Date(item.date).toLocaleString();
              d = d.substr(0, d.length - 3); // Remove seconds
              game.date = d;
              return game;
            });
            this.items = gameItems;
            this.loading = false;
          }
        });
    },
    getGuessStr(str) {
      const goals = str.split(":");
      return goals[0] + " : " + goals[1];
    },
    async saveGuesses() {
      for (let i = 0; i < this.items.length; i++) {
        const guess = this.items[i];
        if (
          guess.editable &&
          Number.isInteger(parseInt(guess.home, 10)) &&
          guess.home >= 0 &&
          Number.isInteger(parseInt(guess.away, 10)) &&
          guess.away >= 0
        ) {
          const body = {
            gameId: guess._id,
            home: guess.home,
            away: guess.away,
          };
          fetch(process.env.VUE_APP_API_URL + "api/v1/guesses/guess", {
            method: "POST",
            headers: {
              authorization: `Bearer ${localStorage.user_token}`,
              "content-type": "application/json",
            },
            body: JSON.stringify(body),
          })
            .then((res) => res.json())
            .then((res) => {
              if (res.message) {
                switch (res.message) {
                  case "Game not found":
                    this.error_sheet.context =
                      "Spiel konnte nicht gefunden werden";
                    this.error_sheet.color = "error";
                    break;
                  case "Game already started":
                    this.error_sheet.context =
                      "Das Spiel hat bereits begonnen. Du kannst nur vor Anpfiff tippen";
                    this.error_sheet.color = "error";
                    break;
                  default:
                    this.error_sheet.context =
                      "Beim Speichern ist ein Fehler aufgetreten";
                    this.error_sheet.color = "error";
                    break;
                }
                this.error_sheet.enabled = true;
              } else {
                this.error_sheet.context = "Erfolgreich gespeichert";
                this.error_sheet.color = "success";
                this.error_sheet.enabled = true;
              }
            });
        }
      }
      this.fetchData();
    },
    flagUrl(unicode) {
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

<style scoped>
.table-wrapper {
  flex-basis: 100%;
}
.table-container {
  display: flex;
  justify-content: center;
}
.max-width-1200 {
  max-width: 1200px;
}

.flag {
  height: 1em;
  width: 1.5em;
  border: 1px solid grey;
  display: inline-block;
  margin-right: 0.5em;
}
</style>