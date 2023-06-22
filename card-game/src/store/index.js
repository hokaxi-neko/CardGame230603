import { createStore } from 'vuex'

export default createStore({
  state: {
    userData: {
      id: "12346",
      name: "小名"
    },
    systemData: {
      title: "123",
      roomId: "XXXXX",
    },
  },
  getters: {
  },
  mutations: {
    AddNum(state, payload) {
      state.number.push(payload);
    },
    ChangeTitle(state, payload)
    {
      state.systemData.title = payload;
    },
    ChangeRoomId(state, payload)
    {
      state.systemData.roomId = payload;
    },
  },
  actions: {
    addNum(context, number) {
      context.commit("AddNum", number);
    },
    ChangeTitle(context, data) {
      context.commit("ChangeTitle",data);
    },
    ChangeRoomId(context, data) {
      context.commit("ChangeRoomId",data);
    }
  },
  modules: {
  }
})