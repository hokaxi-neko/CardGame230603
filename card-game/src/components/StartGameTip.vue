<template>
  <v-container>
    <div style="height: 250px"></div>
    <v-row class="text-center">
      <v-col cols="12" class="d-flex">
        <v-img
          :width="300"
          height="300"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Quads_A.svg/250px-Quads_A.svg.png"></v-img>
      </v-col>
      <v-col cols="12">
        <v-btn @click="StartGame" class="w-25 bg-blue-lighten-4"> {{ startGameButtonContent }} </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import * as Datas from '@/datas/Datas.js';
import { reactive } from 'vue';

export default {
  name: "StartGameTip",
  mounted() {
    this.Datas.SystemData.title = "開始遊戲";
  },
  methods: {
    StartGame() {
      this.$router.push('/waittingParty')
    },
  },
  data: () => ({
    Datas: reactive(Datas),
    startGameButtonContent: "開始遊戲"
  }),
};
</script>
