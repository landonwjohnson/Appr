function uIdGenerator() {
    let id = 1;
    return function uIdInc() {
        return id++;
    }
}

const getUId = uIdGenerator();

export {
    getUId
};
