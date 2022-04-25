export default {
    testAuth(state){
        return state.isLoggedIn // Will not work bc module doesn't have access
    },
    finalCounter(state){
        return state.counter + 2;
    },
    normalizedCounter(_, getters){
        const finalCounter = getters.finalCounter;
        if(finalCounter < 0){
            return 0;
        }
        if(finalCounter > 100){
            return 100;
        }
        return finalCounter;
    },
}