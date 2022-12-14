<template>
  <v-container fluid>
    <v-row>
      <v-col v-for="(item, i) in items" :key="i" cols="12" sm="4">
        <v-card>
          <v-card-title>
            {{ item.name }}/{{item.lastname}}
          </v-card-title>
          <v-card-subtitle>
            {{item.phone}}
          </v-card-subtitle>
          <v-card-text>
            {{no}}/{{numberup}}
          </v-card-text>
          <v-card-text>
            <v-text-field outlined hide-details="auto" dense placeholder="add number" v-model="plus">

            </v-text-field>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" sm="12">
        <v-card-actons>
          <v-btn @click="add">add</v-btn>
          <v-btn @click="count">count</v-btn>
        </v-card-actons>

      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "ProjectNameHowcard",

  data() {
    return {
      no:1,
      plus:0,
      items: [
        { name: "seng", lastname: "vang", phone: "78781525" },
        { name: "seng", lastname: "vang", phone: "78781525" },
        { name: "seng", lastname: "vang", phone: "78781525" },
        { name: "seng", lastname: "vang", phone: "78781525" },
      ],
    };
  },

  computed: {
    numberup(){
      return this.$store.state.user.count
    }
  },

  methods: {
    count(){
      this.$store.commit('user/countUp', this.plus)
      

    },
    add(){
      this.no = this.plus;
    }
  },
};
</script>

<style lang="scss" scoped></style>
