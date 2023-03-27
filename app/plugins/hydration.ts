import { useHydration } from "#app"

export default defineNuxtPlugin(nuxtApp => {
    useHydration("hydration",  () => {
        return  {
            data: 'fetch success',
            status: 1
        }
    }, (value) => {
       console.log('Client: get hydration data is' + value.data)
    })
})