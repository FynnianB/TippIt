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
        <template v-slot:footer.prepend>
          <v-btn color="secondary" elevation="8" large @click="saveGuesses()"
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
      { text: "Heim", value: "homeTeam", align: "start" },
      { text: "Gast", value: "awayTeam", align: "start" },
      {
        text: "Tipp",
        value: "guess",
        align: "end",
        width: "20%",
        align: "center",
      },
    ],
    items: [],
    rules: {
      numeric: (value) => {
        if (!value || (Number.isInteger(parseInt(value, 10)) && value >= 0)) {
          return true;
        } else {
          return "Nur Zahlen erlaubt";
        }
      },
    },
    error_sheet: {
      color: "red",
      enabled: false,
      context: "",
    },
  }),
  mounted() {
    this.fetchData();
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

              game.editable = Date.now() < new Date(game.date).getTime();

              const d = new Date(item.date).toLocaleString();
              game.date = d;
              return game;
            });
            this.items = gameItems;
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
</style>