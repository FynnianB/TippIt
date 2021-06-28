<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">Willkommen bei TippIt!</h1>

        <p class="subheading font-weight-regular">
          Normalerweise befindest du dich hier in deinem Dashboard,
          <br />doch dieses ist noch in Arbeit.
        </p>
      </v-col>

      <v-col class="mb-5" cols="12">
        <h2 class="headline font-weight-bold mb-3">Wohin jetzt?</h2>

        <v-row justify="center">
          <span
            v-for="(next, i) in whatsNext"
            :key="i"
            @click="$router.push({ name: next.href })"
            class="subheading ma-3 primary--text cursor-pointer"
          >
            {{ next.text }}
          </span>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HelloWorld",

  data: () => ({
    whatsNext: [
      {
        text: "Tipps abgeben",
        href: "Guess",
      },
      {
        text: "Tippübersicht",
        href: "ListGuess",
      },
      {
        text: "Punkteübersicht",
        href: "ListPoints",
      },
      {
        text: "Spielplan",
        href: "Games",
      },
    ],
  }),
};
</script>
