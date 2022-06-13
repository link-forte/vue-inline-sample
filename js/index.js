(() => {
    const app = new Vue ({
        el: '#app',

        data () {
            return {
                title: 'hoge',
                count: 0,
                goal_flag: false,
            }
        },
        methods: {
            up: () => {
                app.count++;
            },
            down: () => {
                app.count--;
            },
        },
        computed: {
            checkCount () {
                return this.count >= 10 ? 'OK' : 'NG';
            },
        },
        watch: {
            count(val) {
                if (val >= 15) {
                    this.goal_flag = true;
                } else if (val < 15) {
                    this.goal_flag = false;
                }
            },
        },

        mounted () {
            this.$nextTick(function () {
                console.log('mounted');
            })
        },
    });
})();

