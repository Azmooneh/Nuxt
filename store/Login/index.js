import {defineStore} from 'pinia';

export const useProfileLogin = defineStore('ProfileLogin', {
    state: () => {
        return {
            step: 1,
            phoneNumber: null,
        }
    },
    actions: {
        switchStep(step){
            this.step = step;
        }
    },
})