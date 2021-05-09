<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">
        NuxtSignalR
      </h1>
      <h2>today: {{ visitorCount.counter }}</h2>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VisitorCount } from '~/models/VisitorCount'
import { visitorStore } from '~/store'

export default Vue.extend({
  async fetch() {
    await this.get()
  },
  methods: {
    async get() {
      await visitorStore.getVisitorCount()
    }
  },
  computed: {
    visitorCount(): VisitorCount {
      return visitorStore.visitorCount
    }
  }
})
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
