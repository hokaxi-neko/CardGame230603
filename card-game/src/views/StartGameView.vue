<template>
  <StartGameTip />
</template>

<script>
// @ is an alias to /src
import StartGameTip from "@/components/StartGameTip.vue";

export default {
  name: "HomeView",
  mounted() {
    this.$store.commit("ChangeTitle", "開始遊戲");
  },
  components: {
    StartGameTip,
  },
};
</script>
