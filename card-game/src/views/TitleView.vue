<template>
    <v-toolbar color="primary" dark>
      <v-row>
        <v-col cols="3" class="d-flex justify-start align-center">
          <p>{{ roomId }}</p>
        </v-col>

        <v-col cols="6" class="d-flex justify-center align-center">
          <v-toolbar-title>
            {{ title }}
          </v-toolbar-title>
        </v-col>
        <v-col cols="3" class="d-flex justify-end align-center">
          <p>{{ userId }}</p>
        </v-col>
      </v-row>
    </v-toolbar>
</template>

<script>
import * as Datas from "@/datas/Datas.js";
import { reactive } from "vue";

export default {
  name: "TitleView",
  data() {
    return {
      Datas: reactive(Datas),
    };
  },
  computed: {
    title() {
      return this.$store.state.systemData.title;
    },
    roomId() {
      return "房號 : " + this.$store.state.systemData.roomId;
    },
    userId() {
      return "用戶ID : " + this.$store.state.userData.id;
    },
  },
};
</script>
