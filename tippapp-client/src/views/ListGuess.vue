<template>
  <v-container fluid>
    <v-row dense>
      <v-col v-for="(card, card_index) in cards" :key="card_index" lg="3">
        <v-card>
          <v-card-title>{{ card.title }}</v-card-title>
          <v-divider></v-divider>

          <v-list>
            <v-divider></v-divider>
            <template v-for="(item, index) in items[card_index]">
              <v-list-item
                :key="item.title"
                class="game-item"
                @click.stop="
                  $router.push({ name: 'Game', query: { id: item._id } })
                "
              >
                <v-list-item-content class="game-item_content">
                  <div class="game-item_home">
                    <v-img class="flag" :src="flagUrl(item.homeTeam)" />
                    <span class="game-item_team">{{ item.homeTeamName }}</span>
                    <span class="game-item_result">{{ item.homeResult }}</span>
                  </div>
                  <div class="game-item_away">
                    <v-img class="flag" :src="flagUrl(item.awayTeam)" />
                    <span class="game-item_team">{{ item.awayTeamName }}</span>
                    <span class="game-item_result">{{ item.awayResult }}</span>
                  </div>
                </v-list-item-content>
                <v-divider vertical></v-divider>
                <v-list-item-action
                  class="game-item_action"
                  v-if="item.homeResult === null"
                >
                  {{ item.date_day }}<br />{{ item.date_time }}
                </v-list-item-action>
                <v-list-item-action class="game-item_action" v-else>
                  Endstand<br /><span class="gray--text">{{
                    item.date_day
                  }}</span>
                </v-list-item-action>
              </v-list-item>
              <v-divider :key="index"></v-divider>
            </template>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
const regionNames = new Intl.DisplayNames(["de"], { type: "region" });

export default {
  name: "ListGuess",
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
    items: [[], [], [], [], [], [], [], []],
    cards: [[], [], [], [], [], [], [], []],
    baseFlagUrl: "http://purecatamphetamine.github.io/country-flag-icons/3x2/",
  }),
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      // Fetch Games
      fetch(process.env.VUE_APP_API_URL + "api/v1/games/listGroupStage", {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.user_token}`,
          "content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((games) => {
          if (Array.isArray(games)) {
            games.forEach((group, i) => {
              games[i].forEach((game, j) => {
                games[i][j].homeTeamName = this.unicodeToName(
                  games[i][j].homeTeam
                );
                games[i][j].awayTeamName = this.unicodeToName(
                  games[i][j].awayTeam
                );
              });
            });
            this.items = games;
            this.cards = [
              {
                title: "Gruppe A",
              },
              {
                title: "Gruppe B",
              },
              {
                title: "Gruppe C",
              },
              {
                title: "Gruppe D",
              },
              {
                title: "Gruppe E",
              },
              {
                title: "Gruppe F",
              },
              {
                title: "Gruppe G",
              },
              {
                title: "Gruppe H",
              },
            ];
          }
        });
    },
    flagUrl(unicode) {
      if (unicode == "EN" || unicode == "WL") unicode = "GB";
      return this.baseFlagUrl + unicode + ".svg";
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
.table-wrapper {
  flex-basis: 100%;
}
.table-container {
  display: flex;
  justify-content: center;
}
.game-item {
  &:hover {
    background-color: hsl(0, 0%, 80%);
    cursor: pointer;
  }

  &_content {
    padding: 1em;
    display: flex;
    gap: 0.5em;
  }

  &_team {
    display: -webkit-inline-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    width: calc(80% - 2em);
    overflow: hidden;
    float: left;
  }

  &_result {
    float: right;
  }

  &_action {
    text-align: center;
    padding: 0;
    justify-content: center;
    width: 9ch;
  }
}

.flag {
  height: 1em;
  width: 1.5em;
  border: 1px solid grey;
  float: left;
  margin-right: 0.5em;
}
</style>