<template>
  <v-app>
    <v-main>
      <!--<HelloWorld/> -->
      <startGameTip />
    </v-main>
  </v-app>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import StartGameTip from "./components/StartGameTip.vue";

export default {
  name: "App",

  components: {
    //HelloWorld,
    StartGameTip,
  },

  data: () => ({
    //
  }),
};
</script>
