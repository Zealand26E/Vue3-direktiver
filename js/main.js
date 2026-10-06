const app = Vue.createApp({
    data() {
        return {
            intro: 'Welcome to my Vue template',
            name:'Martin',
            liste:[1,2,3,4,5],
            nr: 0,
            skjul: false,
            listenavne:[
                {name: 'Alice',age: 25},
                {name: 'Bob',age: 30},
                {name: 'Charlie',age: 35}
            ]
        }
    },
    methods: {
        myMethod(){

        },
        add(){
            this.liste.push(this.nr)
        },
        skjulliste(){
            this.skjul = !this.skjul
        }

    },
    computed: {
        myComputed() {
            return ''
        },
        
    }
})
