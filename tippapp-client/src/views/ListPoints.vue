<template>
  <v-container class="fill-height table-container">
    <div class="table-wrapper">
      <v-data-table
        :headers="headers"
        :items="items"
        :items-per-page="10"
        class="elevation-3"
        disable-filtering
        locale="de-DE"
      >
        <!-- eslint-disable -->
        <template v-slot:item.place="{ item }">
          <v-chip :color="getColor(item.place)" dark v-if="item.place <= 3">
            {{ item.place }}
          </v-chip>
          <v-chip color="white" v-else>
            {{ item.place }}
          </v-chip>
        </template>
        <!-- eslint-enable -->
      </v-data-table>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "ListPoints",
  data: () => ({
    headers: [
      {
        text: "Platz",
        align: "start",
        value: "place",
      },
      { text: "Name", value: "username", align: "start" },
      { text: "Punkte", value: "points", align: "end" },
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
            const array = [];
            games.forEach((game) => {
              if (!array.includes(game.stage)) {
                array.push(game.stage);
              }
            });
            const newHeader = array.map((i) => {
              const item = {
                align: "center",
                text: i,
                value: i,
              };
              return item;
            });
            this.headers.splice.apply(this.headers, [2, 0].concat(newHeader));
          }
        });
      // Fetch Guesses
      fetch(process.env.VUE_APP_API_URL + "api/v1/guesses/list", {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.user_token}`,
          "content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((guesses) => {
          if (Array.isArray(guesses)) {
            guesses.sort((a, b) =>
              a.points > b.points ? -1 : b.points > a.points ? 1 : 0
            );
            for (let i = 0; i < guesses.length; i++) {
              guesses[i].place = i + 1;
            }
            this.items = guesses;
            console.log(this.items);
          } else {
            this.items = [];
          }
        });
    },
    getColor(place) {
      let color = "";
      switch (place) {
        case 1:
          color = "#E2B007";
          break;
        case 2:
          color = "#999999";
          break;
        case 3:
          color = "#ca5b1c";
          break;

        default:
          color = "white";
          break;
      }
      return color;
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