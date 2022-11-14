<template>
  <div v-if="sampleList">
    <ul v-for="(item, index) in sampleList" :key="index">
      <li>{{ item.id }}</li>
      <li>{{ item.title }}</li>
      <li>{{ item.description }}</li>
      <li>{{ item.image }}</li>
      <li>{{ item.ingredients }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { onBeforeMount, reactive, ref } from "vue";
import { Sample } from "@/api/interface";
import { getSampleList } from "@/api/modules/sample";

export default {
  setup() {
    const sampleList = ref<Sample.ResSampleList[]>([]);
    const requestSampleParam = reactive<Sample.ReqGetSampleParams>({});

    onBeforeMount(() => {
      getSamples();
    });

    const getSamples = async () => {
      await getSampleList(requestSampleParam).then((response) => {
        sampleList.value = response;
      });
    };

    return {
      sampleList,
    };
  },
};
</script>

<style></style>
