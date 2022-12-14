<template>
  <div>
    <v-card max-width="400" class="mx-auto" :dark="true">
      <v-card-text>
        <v-row>
          <v-col cols="6">
            <v-text-field
              label="Name"
              placeholder="FirstName"
              outlined
              dense
              hide-details="auto"
            >
            </v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
              label="Lastname"
              placeholder="LastName"
              outlined
              dense
              hide-details="auto"
            >
            </v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              label="Number"
              placeholder="Number"
              outlined
              hide-details="auto"
              dense
            >
            </v-text-field>
          </v-col>
          <v-col cols="4">
            <v-text-field
              label="Month"
              placeholder="MM"
              outlined
              hide-details="auto"
              dense
            >
            </v-text-field>
          </v-col>
          <v-col cols="4">
            <v-text-field
              label="Year"
              placeholder="YY"
              outlined
              hide-details="auto"
              dense
            >
            </v-text-field>
          </v-col>
          <v-col cols="4">
            <v-text-field
              label="Code"
              placeholder="code"
              outlined
              hide-details="auto"
              dense
            >
            </v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              label="Textword"
              placeholder="text word"
              outlined
              hide-details="auto"
              dense
            >
              <template #append>
                <v-btn small icon >
                  <v-icon>mdi-eye</v-icon>
                </v-btn>
              </template>
            </v-text-field>
          </v-col>
          <v-col cols="12">
            <div class="text-center">
              <v-btn color="primary">Submit</v-btn>
            </div>
          </v-col>
          <v-col>
            <div
              class="text-center text-uppercase text-decoration-underline red--text text--darken-3"
            >
              Back
            </div>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </div>
</template>
