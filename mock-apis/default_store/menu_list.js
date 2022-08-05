const menu = {
        "name": "Panner Tikka",
        "veg": true,
        "cost": 150
}
module.exports = listOfMenus = () => {
    let res = [];
    for (let i=0; i < 400; i++) {
        if (i%2 === 0) {
            let temp = {...menu};
            temp.name = "TestMenu"+i;
            temp.veg = true,
            temp.cost = 150+10+i;
            res.push({...temp});
        } else {
            let temp = {...menu};
            temp.name = "TestMenu"+i;
            temp.veg = false,
            temp.cost = 150+10+i;
            res.push({...temp});
        }
    }
    return res;
}