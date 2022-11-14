<template>
  <div v-if="userData">
    <ul>
      <li>{{ userData.id }}</li>
      <li>{{ userData.username }}</li>
      <li>{{ userData.age }}</li>
      <li>{{ userData.email }}</li>
    </ul>
  </div>
  <br /><br /><br /><br />
  <div v-if="userList">
    <div>{{ userListCnt }}</div>
    <ul v-for="(item, index) in userList" :key="index">
      <li>{{ item.id }}</li>
      <li>{{ item.username }}</li>
      <li>{{ item.age }}</li>
      <li>{{ item.email }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { onBeforeMount, reactive, ref } from "vue";
import { User } from "@/api/interface";
import { getUserList, getUserData } from "@/api/modules/user";

export default {
  setup() {
    const userListCnt = ref<number>(0);
    const userList = ref<User.ResUser[]>([]);
    const userData = ref<User.ResUser>();
    const requestUserParam = reactive<User.ReqGetUserParams>({
      pageNum: 1,
      pageSize: 10,
      username: "bkjeon",
      email: "bkjeon@gmail.com",
    });
    const requestUserId = "M221114EEE";

    onBeforeMount(() => {
      getUsers();
      getUser();
    });

    const getUsers = async () => {
      await getUserList(requestUserParam).then((response) => {
        userListCnt.value = response.totalCnt;
        userList.value = response.data;
      });
    };

    const getUser = async () => {
      await getUserData({ id: requestUserId }).then((response) => {
        userData.value = response.data;
      });
    };

    return {
      userListCnt,
      userList,
      userData,
    };
  },
};
</script>

<style scoped lang="scss">
@import "./UserView.scss";
</style>
