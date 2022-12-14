<template>
  <div>
    <hr/>
    <v-row>
      <v-col cols="12" sm="6" >
         <CardComponent :title="text.text" />
        </v-col>
        <v-col cols="12" sm="6">
          <CardComponent title="This is a womangggg"/>
        </v-col>

    </v-row>


    <CardComponent title="This is a someone" :show="text.text" />

    <v-row dense>
      <v-col cols="12" md="3" lg="3" sm="6">
        <v-text-field v-model="text.id" label="ID" outlined></v-text-field>
      </v-col>
      <v-col cols="12" md="3" lg="3" sm="6">
        <v-text-field v-model="text.text" label="text" outlined></v-text-field>
      </v-col>
    </v-row>
    {{ text }}
    <div class="mt-5 text-center">
      <v-btn @click="addItem">Add</v-btn>
    </div>
    <v-btn to="/inspire">Next</v-btn>
    <div class="mt-5 text-center">
      <v-btn @click="show">toast</v-btn>
    </div>
    <div class="mt-5 text-center">
      <v-btn @click="axios">axios</v-btn>
    </div>
    <div class="mt-5 text-center">
      <v-btn>{{num}}</v-btn>
    </div>



    <v-data-table :headers="headers" :items="item1">
      <template #[`item.action`]="{ item }">
        <!-- <v-btn text color="primary" small> action</v-btn> -->
        <v-icon small @click="deleteItem(item.id)"> mdi-minus</v-icon>
        <v-icon small @click="text = { ...item }"> mdi-pencil</v-icon>
      </template>
    </v-data-table>

    {{axios}}
  </div>
</template>

<script>
export default {
  data() {
    return {
      alert: true,
      item1: [
        { text: "Seng kue vang", id: 1 },
        { text: "Vang kue Seng", id: 2 },
        { text: "Justin Seng", id: 3 },
        { text: "Kchang Vang", id: 4 },
      ],

      headers: [
        { text: "Id", value: "id" },
        { text: "Header", value: "text" },
        { text: "edit", value: "action" },
        { text: "delect", value: "delete" },
      ],
      add: "",
      store: "",
      text: {},
    };
  },
  computed:{
    num(){
      return this.$store.state.user.number
    }

  },
  methods: {
    deleteItem(type) {
      const index = this.item1.findIndex((item) => item.id === type);

      this.$delete(this.item1, index);
    },
    addItem() {
      this.item1.push({ ...this.text });
    },
    show() {
      this.$toast.success("Successfully authenticated", {
        duration: 2000,
        position: "top-center",
        iconPack: "material",
      });
    },
    async axios() {
    const ip = await this.$axios.$get('https://jsonplaceholder.typicode.com/todos/1')
    this.ip = ip
  }
  },
};
</script>
