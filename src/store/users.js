const users = {
    state: {
        users: [

        ],
    },
    getters: {
        getUsers(state){
            return state.users;
        },
        getUser(state, idx){
            let user = state.users.find(item => item.id = idx);
            if(user){
                return user
            }
            return null
        }
    },
    mutations: {
        setUsers(state, data){
            state.users = data;
        },
        setOneUser(state, data){
            state.users.push(data)
        }
    },
    actions: {
        setUsers({commit}, data) {
            commit("setUsers", data);
        },
        setOneUser({commit}, data) {
            commit("setOneUser", data);
        },
    }

}
export default users;