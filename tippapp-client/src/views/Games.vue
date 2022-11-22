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
        v-if="!mobile"
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
            {{ item.homeTeam }}
          </v-chip>
          <br />
          <v-chip
            :color="
              item.awayResult > item.homeResult ? '#00DB73' : 'transparent'
            "
          >
            {{ item.awayTeam }}
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

              let d = new Date(item.date).toLocaleString();
              d = d.substr(0, d.length - 3); // Remove seconds
              game.date = d;
              return game;
            });
            this.loading = false;
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