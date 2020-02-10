import { firebaseAuth, firebaseDb } from 'boot/firebase'
const state = {

}
const mutations = {

}
const actions = {
    bookDate({}, payload) {
        console.log('payload: ', payload)
        firebaseDb.ref('records/').push({
            company: payload.company,
            contact: payload.contact,
            date: payload.date,
            time: payload.time,
            museum: payload.selection,
            name: payload.name,
            email: payload.email,
            pax: payload.pax
        });
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