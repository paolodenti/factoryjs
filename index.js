const Counter = require("./myCounter");

const main = async () => {
    const c = Counter({ name: "some counter ..." });

    c.setVal(3);
    c.add();
    c.sub(6);

    console.log(`${c.getName()}: ${c.getVal()}`);

    c.add(50);
    setTimeout(c.log, 2000);
};

main().catch(err => {
    console.log(err);
});
