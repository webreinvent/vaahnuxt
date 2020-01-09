<template>
  <b-navbar>
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img
          src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
          alt="Lightweight UI components for Vue.js based on Bulma"
        >
      </b-navbar-item>
    </template>
    <template slot="start">
      <b-navbar-item href="/">
        Home
      </b-navbar-item>

    </template>

    <template slot="end">

      <b-navbar-dropdown label="UI Guide">
        <b-navbar-item href="/buefy">
          Buefy
        </b-navbar-item>
        <b-navbar-item href="/blocks">
          Blocks
        </b-navbar-item>
        <b-navbar-item href="/docs">
          Docs
        </b-navbar-item>

      </b-navbar-dropdown>

      <b-navbar-item tag="div">
        <div class="buttons">
          <a class="button is-primary">
            <strong>Sign up</strong>
          </a>
          <a class="button is-light">
            Log in
          </a>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>
