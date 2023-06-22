<template>
  <div class="bg-primary">
    <div class="container-wrapper bg-secondary">
    <v-container class="text-centent w-50">
    <v-row class="text-center bg-primary row-container">
      <v-col cols="6" class="text-right">
        <div @click="CreateParty" >
        <v-btn class="w-75">
          {{ createParty.content }}
        </v-btn>
        </div>
        </v-col>
      <v-col cols="6" class="text-left">
        <v-text-field
      :label="addToParty.label"
      :rules="addToParty.textFieldRules"
      hide-details="auto"
      class="w-75"
      ></v-text-field>
        <v-btn class="w-75 bg-blue-lighten-4 mt-5"> {{ addToParty.content }} </v-btn>
      </v-col>
    </v-row>
  </v-container>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
//import UserData from '@/components/UserData.vue'

export default {
  components: {
    //HelloWorld,
    //UserData
  },
  methods: {
    CreateParty() {
      alert("creat");
    }
  },
  mounted() {
    // 执行DOM相关的操作
    //this.name = userData;
    /*aa.name = "大名"
    var bb = userData;
    this.datas.SystemData.title = "加入房間";
    this.datas.UserData.name = "123";
    */
    this.$store.commit('ChangeTitle', "加入房間");
    //alert(this.$store.state.systemData.title);
  },
  data: () => ({
    createParty:{
      content: "建立房間",
    },
    addToParty: {
      content: "加入房間",
      label: "輸入房號",
      textFieldRules: [
        value => (value && value.length == 5) || '房號是5個字元',
      ],
    },
  })
}
</script>

<style>
.row-container{
  height: 30vh;
  display: flex;
  justify-content: left;
  align-items: center;
}

.container-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh; 
}
</style>
