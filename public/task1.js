new Vue({
    el: '#app',
    data: {
        title: 'Task 1',
        message: null,
        lastId: 3,
        items: [
            {
                id: 1,
                name: 'Test',
            },
            {
                id: 2,
                name: 'Test 2',
            },
            {
                id: 3,
                name: 'Test 3'
            }
        ]
    },
    methods: {
        addNew(item) {
            this.lastId++;
            if (this.message) {
                item = this.message;
            }
            this.items.push({
                id: this.lastId,
                name: item
            });
        },
        remove(key) {
            if (this.items[key]) {
                this.items.splice(key, 1);
            }
        }
    }
});

