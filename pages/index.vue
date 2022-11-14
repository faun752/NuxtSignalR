<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">
        NuxtSignalR
      </h1>
      <div>
        <h2>today: {{ visitor.count }}</h2>
      </div>
      <div>
        <h2>age: {{ visitor.age }}</h2>
      </div>
      <div>
        <h2>gender: {{ visitor.gender }}</h2>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VisitorInterface } from '~/models/VisitorInterface'
import { Visitor } from '~/models/Visitor'
import { visitorStore } from '~/store'
import * as signalR from '@microsoft/signalr'
const connection = new signalR.HubConnectionBuilder()
  .withUrl(process.env.baseUrl + '/hub')
  .withAutomaticReconnect()
  .build()

export default Vue.extend({
  created() {
    if (connection.state !== signalR.HubConnectionState.Connected) {
      connection.start()
    }
    connection.on('ReceiveVisitor', (visitorCount, age, gender) => {
      const visitor = new Visitor(visitorCount, age, gender)
      visitorStore.setVisitor(visitor)
    })
  },
  // async fetch() {
  //   await this.get()
  // },
  methods: {
    async get() {
      await visitorStore.getVisitor()
    }
  },
  computed: {
    visitor(): VisitorInterface {
      return visitorStore.visitor
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
