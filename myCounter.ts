const MyCounter = (params: { name: string }) => {
    let count = 0;
    const { name } = params;

    const add = (num = 1) => {
        count += num;
        return count;
    };

    const sub = (num = 1) => {
        count -= num;
        return count;
    };

    const getVal = () => {
        return count;
    };

    const setVal = (_count: number) => {
        count = _count;
    };

    const getName = () => {
        return name;
    };

    const log = () => {
        console.log(`${name}: ${count}`);
    };

    return Object.freeze({
        add,
        sub,
        getVal,
        setVal,
        getName,
        log
    });
};

export default MyCounter;
