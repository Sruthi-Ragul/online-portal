const listOfRestaurants = require(`${process.cwd()}/default_store/restaurant_list`);

const response = (() => {
    const listOfRestaurantsData = listOfRestaurants();
    return listOfRestaurantsData;
})();

module.exports = response;