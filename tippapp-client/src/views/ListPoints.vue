<template>
  <v-container class="fill-height table-container" max-width="1200px">
    <div class="table-wrapper">
      <v-data-table
        :headers="headers"
        :items="items"
        :items-per-page="10"
        :loading="loading"
        class="elevation-3"
        disable-filtering
        disable-sort
        locale="de-DE"
        v-if="!mobile"
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
        <template v-slot:item.username="{ item }">
          {{ item.username
          }}<v-icon color="#fcc200" dense right v-if="item.place === 1"
            >mdi-trophy</v-icon
          >
        </template>
        <!-- eslint-enable -->
      </v-data-table>
      <v-simple-table fixed-header v-else>
        <template v-slot:default>
          <thead>
            <tr>
              <th
                v-for="header in mobileHeaders"
                :key="header.value"
                class="max-width-small"
              >
                {{ header.text }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in items" :key="item.name">
              <td
                v-for="header in mobileHeaders"
                :key="header.value"
                class="text-left max-width-small"
              >
                <div v-if="header.value == 'username'">
                  <v-chip
                    :color="getColor(item.place)"
                    dark
                    v-if="item.place <= 3"
                  >
                    {{ item.place }}
                  </v-chip>
                  <v-chip color="white" v-else>
                    {{ item.place }}
                  </v-chip>
                  {{ item[header.value] }}
                </div>
                <span v-else>{{ item[header.value] }}</span>
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
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
      { text: "Gruppenphase", value: "group", align: "center" },
      { text: "Achtelfinale", value: "round_of_16", align: "center" },
      { text: "Viertelfinale", value: "quaterfinals", align: "center" },
      { text: "Halbfinale", value: "halffinals", align: "center" },
      { text: "Finale", value: "finals", align: "center" },
      { text: "Punkte", value: "points", align: "end" },
    ],
    mobileHeaders: [
      { text: "Name", value: "username" },
      { text: "GP", value: "group" },
      { text: "AF", value: "round_of_16" },
      { text: "VF", value: "quaterfinals" },
      { text: "HF", value: "halffinals" },
      { text: "F", value: "finals" },
      { text: "PTS", value: "points" },
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
      // Fetch Points
      fetch(process.env.VUE_APP_API_URL + "api/v1/guesses/listpoints", {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.user_token}`,
          "content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((points) => {
          if (Array.isArray(points)) {
            points.sort((a, b) =>
              a.points > b.points ? -1 : b.points > a.points ? 1 : 0
            );
            for (let i = 0; i < points.length; i++) {
              points[i].place = i + 1;
            }
            this.items = points;
          } else {
            this.items = [];
          }
          this.loading = false;
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
<style lang="scss" scoped>
.table-wrapper {
  flex-basis: 100%;
}
.table-container {
  display: flex;
  justify-content: center;
}

.max-width-small {
  padding-inline: 1vw !important;
  word-wrap: break-word;
  max-width: 25vw;
}
</style>