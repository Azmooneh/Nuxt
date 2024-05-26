import { defineStore } from 'pinia';
import UniversalCookie from 'universal-cookie';

export const useCommon = defineStore('PayeYek', {
    state: () => {
        const theme = useCookie('darkmode');
        return {
            openSidebar: false,
            darkMode: theme.value != null ? theme.value : false,
        }
    },
    actions: {
        toggleSidebar() {
            this.openSidebar = !this.openSidebar;
        },
        toggleDarkmode(){
            this.darkMode = !this.darkMode;
            const cookies = new UniversalCookie();
            cookies.set('darkmode', this.darkMode);
            if (this.darkMode) {
                document.documentElement.classList.add("dark")
            } else {
                document.documentElement.classList.remove("dark")
            }
        }
    },
})

export const useHomePage = defineStore('HomePage', {
    state: () => {
        return {
            advertises: [],
            advertisePagination: {},
        }
    },
    actions: {
        saveAdvertises(list, pagination){
            this.advertises = list;
            this.advertisePagination = pagination;
        },
        updateAdvertises(list){
            this.advertises.push(list);
        }
    },
})


