<template>
  <v-container>
    <div style="height: 250px"></div>
    <v-row class="text-center">
      <v-col cols="12">
        <h1>{{ gameName }}</h1>
      </v-col>
      <v-col cols="12" class="d-flex">
        <v-img
          :width="300"
          height="300"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Quads_A.svg/250px-Quads_A.svg.png"></v-img>
      </v-col>
      <v-col cols="12">
        <v-btn class="w-25 bg-blue-lighten-4"> 開始遊戲 </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "StartGameTip",

  data: () => ({
    gameName: "德州撲克牌",
  }),
};
</script>
