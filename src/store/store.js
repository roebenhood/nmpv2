import { firebaseAuth, firebaseDb } from 'boot/firebase'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        detail: [
            {
              name: "taw",
              company: "STI College",
              pax: 200,
              building: "NP",
              status: "Done"
            }
          ]
    }
})

const state = {
    bookDetails: []

}
const mutations = {
    retrieveReservations(state, bookDetails) {
        state.bookDetails = bookDetails
    }

}
const actions = {
    bookDate({ }, payload) {
        console.log('payload: ', payload)
        firebaseDb.collection('records/').add({
            company: payload.company,
            contact: payload.contact,
            date: payload.date,
            time: payload.time,
            museum: payload.selection,
            name: payload.name,
            email: payload.email,
            pax: payload.pax
        });
    },
    retrieveReservations(context) {
        firebaseDb.collection('records').get()
            .then(querySnapshot => {
                let tempDetails = []
                querySnapshot.forEach(doc => {
                    console.log(doc.data())
                    const data = {
                        id: doc.id,
                        company: doc.data().company,
                        name: doc.data().name,
                        email: doc.data().email,
                        contact: doc.data().contact,
                        date: doc.data().date,
                        time: doc.data().time,
                        pax: doc.data().pax,
                        museum: doc.data().museum
                    }
                    
                    tempDetails.push(data)                    
                })
                // console.log(tempDetails)
                context.commit('retrieveReservations', tempDetails)
            })
    }

}
const getter = {

}
export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getter
}