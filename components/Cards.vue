<template>
    <v-container>
      <v-row no-gutters>
        <v-col
          v-for="character in $store.state.characters" :key="character.id"
          cols="12"
          sm="4"
        >
          <v-card class="pa-2" outlined tile>
            <v-img :src="character.src" height="350px"></v-img>
            <v-card-title>{{ character.name }}</v-card-title>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
</template>