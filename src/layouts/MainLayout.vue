<template onload="load()">
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>Quasar App</q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <!-- Button to Dialog Box -->
      <q-btn label="Prompt" color="primary" @click="prompt = true" />
      <!-- dialog starts here -->
      <q-dialog v-model="prompt" persistent>
        <q-card style="min-width: 350px">
          <q-card-section>
            <div class="text-h6">Your address</div>
          </q-card-section>

          <!-- date -->
          <div class="col-6 q-pr-md">
            Date
            <q-input filled v-model="reservationData.date" mask="date" :rules="['date']">
              <template v-slot:append>
                <q-icon name="event" class="cursor-pointer">
                  <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                    <q-date v-model="reservationData.date" @input="() => $refs.qDateProxy.hide()" />
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>
          </div>
          <!-- time -->
          <div class="col-6 q-pr-md">
            Time
            <q-input filled v-model="reservationData.time" mask="time" :rules="['time']">
              <template v-slot:append>
                <q-icon name="access_time" class="cursor-pointer">
                  <q-popup-proxy transition-show="scale" transition-hide="scale">
                    <q-time v-model="reservationData.time" />
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>
          </div>

          <!-- building of museums -->
          <q-list>
            Available Museum
            <q-item tag="label" v-ripple>
              <q-item-section avatar>
                <q-checkbox v-model="reservationData.selection" val="Planetarium" color="teal" />
              </q-item-section>
              <q-item-section>
                <q-item-label>Planetarium</q-item-label>
              </q-item-section>
            </q-item>

            <q-item tag="label" v-ripple>
              <q-item-section avatar>
                <q-checkbox v-model="reservationData.selection" val="Natural History" color="cyan" />
              </q-item-section>
              <q-item-section>
                <q-item-label>Natural History</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>

          <!-- input in dialog -->
          <q-card-section class="q-pt-none">
            <div class="col-12">
              School | Institution | Group
              <q-input outlined v-model="reservationData.company" />
            </div>
            <div class="col-12">
              Name
              <q-input outlined v-model="reservationData.name" />
            </div>
            <div class="col-6 q-pr-lg">
              Contact Number
              <q-input outlined v-model="reservationData.contact" />
            </div>
            <div class="col-6 q-pr-md">
              Email
              <q-input outlined v-model="reservationData.email" />
            </div>
            <div class="col-6 q-pr-md">
              Pax
              <q-input outlined v-model="reservationData.pax" />
            </div>
          </q-card-section>

          <!-- button in dialog -->
          <q-card-actions align="right" class="text-primary">
            <q-btn flat label="Cancel" v-close-popup />
            <q-btn flat label="Reserve" v-close-popup @click="submitReservation" type="submit" />
          </q-card-actions>
        </q-card>
      </q-dialog>
      <!-- dialog ends here -->

      <!-- Table of todays tours -->
      <div class="q-pa-md">
        <q-table
        title="Treats"
        :data="data"
        :columns="columns"
        row-key="name"
        sortable: true
        binary-state-sort
        />
      </div>

      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from "components/EssentialLink";
import { mapActions } from "vuex";
import { mapState } from "vuex";

export default {
  name: "MainLayout",

  components: {
    EssentialLink
  },
  data() {
    return {
      ...mapState("store", ["detail"]),
      data: [
        // this.$store.state.detail
      ],
      columns: [
        {
          name: "name",
          required: true,
          label: "Time",
          align: "left",
          field: row => row.name,
          format: val => `${val}`,
          sortable: true,
          classes: "bg-grey-2 ellipsis",
          style: "max-width: 100px",
          headerClasses: "bg-primary text-white"
        },
        {
          name: "company",
          align: "left",
          label: "School | Institution | Group",
          field: "company",
          sortable: true,
          style: "max-width: 10px"
        },
        { name: "pax", label: "Pax", field: "pax", sortable: true },
        { name: "status", label: "Building", field: "building" }
      ],
      prompt: false,
      reservationData: {
        selection: [],
        date: "",
        time: "",
        company: "",
        name: "",
        contact: "",
        email: "",
        pax: ""
      }
    };
  },
  // methods: {
  //   ...mapActions("store", ["bookDate"]),
  //   ...mapActions("store", ["getReservations"]),
  //   submitReservation() {
  //     this.bookDate(this.reservationData);
  //   },
  //   load() {
  //     console.log('nag load')
  //     this.getReservations();
  //   }
  // }
  methods: {
    ...mapActions("store", ["bookDate"]),
    ...mapActions("store", ["retrieveReservations"]),
    submitReservation() {
      this.bookDate(this.reservationData);
    }
  },
  mounted() {
    this.retrieveReservations();
  }
};
</script>
