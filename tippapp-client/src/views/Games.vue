<template>
  <v-container class="fill-height table-container">
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
        @click:row="goToGame"
        v-if="!mobile"
      >
        <!-- eslint-disable -->
        <template v-slot:item.homeTeam="{ item }">
          <v-chip
            :color="
              item.homeResult > item.awayResult ? '#00DB73' : 'transparent'
            "
          >
            <v-img class="flag" :src="flagUrl(item.homeTeam)" />
            {{ item.homeTeamName }}
          </v-chip>
        </template>
        <template v-slot:item.awayTeam="{ item }">
          <v-chip
            :color="
              item.awayResult > item.homeResult ? '#00DB73' : 'transparent'
            "
          >
            <v-img class="flag" :src="flagUrl(item.awayTeam)" />
            {{ item.awayTeamName }}
          </v-chip>
        </template>
        <template v-slot:item.stage="{ item }">
          <span v-if="item.stage == 'group'"
            >Gruppenphase (Gruppe {{ item.group.toUpperCase() }})</span
          >
          <span v-else>{{ item.stage }}</span>
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
          <v-chip
            :color="
              item.homeResult > item.awayResult ? '#00DB73' : 'transparent'
            "
          >
            {{ item.homeTeamName }}
          </v-chip>
          <br />
          <v-chip
            :color="
              item.awayResult > item.homeResult ? '#00DB73' : 'transparent'
            "
          >
            {{ item.awayTeamName }}
          </v-chip>
        </template>
        <template v-slot:item.result="{ item }">
          <b v-if="item.homeResult > item.awayResult">{{ item.homeResult }}</b>
          <span v-else>{{ item.homeResult }}</span>
          <br />
          <b v-if="item.homeResult < item.awayResult">{{ item.awayResult }}</b>
          <span v-else>{{ item.awayResult }}</span>
        </template>
        <!-- eslint-enable -->
      </v-data-table>
    </div>
  </v-container>
</template>

<script>
const regionNames = new Intl.DisplayNames(["de"], { type: "region" });
export default {
  name: "Games",
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
      { text: "Ergebnis", value: "result", align: "end" },
    ],
    mobileHeaders: [
      { text: "Begegnung", value: "info", align: "start" },
      {
        text: "Mannschaften",
        value: "teams",
        align: "center",
      },
      {
        text: "Ergebnis",
        value: "result",
        align: "end",
        width: "10%",
      },
    ],
    items: [],
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
      fetch(process.env.VUE_APP_API_URL + "api/v1/games/list", {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.user_token}`,
          "content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((games) => {
          if (Array.isArray(games)) {
            this.items = games.map((item) => {
              const game = {
                ...item,
              };
              if (item.homeResult === null) item.homeResult = "-";
              if (item.awayResult === null) item.awayResult = "-";
              game.result = item.homeResult + " : " + item.awayResult;

              game.homeTeamName = this.unicodeToName(game.homeTeam);
              game.awayTeamName = this.unicodeToName(game.awayTeam);

              let d = new Date(item.date).toLocaleString();
              d = d.substr(0, d.length - 3); // Remove seconds
              game.date = d;
              return game;
            });
            this.loading = false;
          }
        });
    },
    goToGame(item) {
      this.$router.push({ name: "Game", query: { id: item._id } });
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

.flag {
  height: 1em;
  width: 1.5em;
  border: 1px solid grey;
  display: inline-block;
  margin-right: 0.5em;
}
</style>