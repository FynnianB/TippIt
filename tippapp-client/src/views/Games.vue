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
      >
        <!-- eslint-disable -->
        <template v-slot:item.homeTeam="{ item }">
          <v-chip
            :color="
              item.homeResult > item.awayResult ? '#00DB73' : 'transparent'
            "
          >
            {{ item.homeTeam }}
          </v-chip>
        </template>
        <template v-slot:item.awayTeam="{ item }">
          <v-chip
            :color="
              item.awayResult > item.homeResult ? '#00DB73' : 'transparent'
            "
          >
            {{ item.awayTeam }}
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
    </div>
  </v-container>
</template>

<script>
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
    items: [],
  }),
  mounted() {
    this.fetchData();
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

              const d = new Date(item.date).toLocaleString();
              game.date = d;
              return game;
            });
          }
        });
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
</style>