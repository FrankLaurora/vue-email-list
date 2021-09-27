const app = new Vue({
    el: "#root",

    data: {
        emailUrl: 'https://flynn.boolean.careers/exercises/api/random/mail',

        mailingList: [],
    },

    methods: {
        getNewEmail: function(){
            axios.get(this.emailUrl).then(
                (response) => {
                    let newEmail = response.data.response;
                    this.mailingList.push(newEmail);
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
