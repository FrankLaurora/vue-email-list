const app = new Vue({
    el: "#root",

    data: {
        emailUrl: 'https://flynn.boolean.careers/exercises/api/random/mail',

        mailingList: [],

        newEmail: null
    },

    methods: {
        getNewEmail: function(){
            axios.get(this.emailUrl).then(
                (response) => {
                    this.newEmail = response.data.response;
                    console.log(this.newEmail);
                    this.mailingList.push(this.newEmail)
                }
            );
        },
    },

    mounted: function(){
        for (let i = 0; i < 10; i++) {
            this.getNewEmail();
        }
    }
});
