<template>
  <div>
    <Button type="primary" size="large" ref="buttonRef1">Test</Button>
    <Button type="success" size="large" ref="buttonRef2">Test</Button>
    <Button type="warning" size="large" ref="buttonRef3">Test</Button>
    <Button type="danger" size="large" ref="buttonRef4">Test</Button>
    <div></div>
    <Button type="primary" size="large" plain ref="buttonRef1">Test</Button>
    <Button type="success" size="large" plain ref="buttonRef2">Test</Button>
    <Button type="warning" size="large" plain ref="buttonRef3">Test</Button>
    <Button type="danger" size="large" plain ref="buttonRef4">Test</Button>
    <div></div>
    <Button type="primary" size="large" round ref="buttonRef1">Test</Button>
    <Button type="success" size="large" round ref="buttonRef2">Test</Button>
    <Button type="warning" size="large" round ref="buttonRef3">Test</Button>
    <Button type="danger" size="large" round ref="buttonRef4">Test</Button>
    <div></div>
    <Button type="primary" size="large" circle ref="buttonRef1">Test</Button>
    <Button type="success" size="large" circle round ref="buttonRef2">Test</Button>
    <Button type="warning" size="large" circle round ref="buttonRef3">Test</Button>
    <Button type="danger" size="large" circle round ref="buttonRef4">Test</Button>
    <div></div>
    <Collapse v-model="collapseArr" accordion>
      <CollapseItem name="a">
        <template #title>
          <h1>nice title</h1>
        </template>
        <h1>content1</h1>
        <div>this is content a</div>
      </CollapseItem>
      <CollapseItem name="b" title="qweee">
        <h1>content2</h1>
        <div>this is content b</div>
      </CollapseItem>
      <CollapseItem name="c" title="vadk" disabled>
        <h1>content3</h1>
        <div>this is content c</div>
      </CollapseItem>
    </Collapse>
    {{ collapseArr }}
    <div v-on="handlers">2222</div>
  </div>
</template>

<script setup lang="ts">
  import { onMounted, ref } from 'vue'
  import Button from './components/Button/Button.vue'
  import type { ButtonInstance } from './components/Button/types'
  import Collapse from './components/Collapse/Collapse.vue'
  import CollapseItem from './components/Collapse/CollapseItem.vue';

  const buttonRef1 = ref<ButtonInstance>()

  onMounted(() => {
    console.log(buttonRef1.value?.ref)
  })

  const handlers = {
    click() {
      console.log(123);
    },

    mouseenter() {
      console.log(333);
    }
  }

  const collapseArr = ref(['a'])
</script>

<style scoped></style>
