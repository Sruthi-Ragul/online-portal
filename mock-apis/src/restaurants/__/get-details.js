const listOfMenus = require(`${process.cwd()}/default_store/menu_list`);
const listOfRestaurants = require(`${process.cwd()}/default_store/restaurant_list`);
const response = (() => {
    console.log(request);
    var paramValue = request.url.split('/')[2];
    const selectedRes = listOfRestaurants().filter((data) => data.name === paramValue);
    var menus = listOfMenus();
    return {
        ...selectedRes[0],
        menuItems: menus
    }
})();

module.exports = response;