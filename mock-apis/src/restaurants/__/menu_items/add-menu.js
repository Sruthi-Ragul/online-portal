const listOfMenus = require(`${process.cwd()}/default_store/menu_list`);

const response = (() => {
    const newlyAdded = JSON.parse(request.body);
    return ([...listOfMenus, newlyAdded])
})();

module.exports = response;