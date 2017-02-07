import Vue from 'vue'
import resource from 'vue-resource'
Vue.use(resource)

const HOST = process.env.NODE_ENV === 'development' ? 'http://192.168.100.2:10006' : 'http://118.89.145.194:10006'

Vue.http.options.emulateJSON = true


export const insertTheme = Vue.resource(`${HOST}/insertTheme`)
export const updateTheme = Vue.resource(`${HOST}/updateTheme`)
export const deleteTheme = Vue.resource(`${HOST}/deleteTheme`)
export const insertCard = Vue.resource(`${HOST}/insertCard`)
export const updateCard = Vue.resource(`${HOST}/updateCard`)
export const deleteCard = Vue.resource(`${HOST}/deleteCard`)
export const uploadFile = Vue.resource(`${HOST}/uploadFile`)
export const graphql = Vue.resource(`${HOST}/graphql`)
