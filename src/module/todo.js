export default class LIST {
    constructor() {
        this.todoList = [];
    }
    addList = (task) => {
        localStorage.setItem('todoList', JSON.stringify(task))
    }

    removeList = (index) => {
        if (index !== null) {
            const lists = this.getList()

            const listRemoved = list.filter((item, key) => {
                if (key !== index) {
                    return true
                }
                return null
            })
            this.getList(listRemoved)
            //arrage file again
        }
    }

    getList = () => {
        const list = JSON.parse(localStorage.getItem('todoList'))
        if (list) {
            return list;
        }
        return [];
    }

    deleteCompleted = () => {
        const lists = this.getList()
        const removedCompleted = lists.filter((item) => {
            if (item.completed) {
                return true
            }
            return item
        })
        this.addList(removedCompleted)
        //this.arrangeStorage()
    }
    arrangeStorage = () => {
        const lists = this.getList();
        let index = 1

        lists.forEach((list) => {
            list.index = index
            index += 1
        })
        this.addList(lists)
    }
}