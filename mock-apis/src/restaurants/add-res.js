const listOfRestaurants = require(`${process.cwd()}/default_store/restaurant_list`);

const response = (() => {
    const newlyAdded = JSON.parse(request.body);
    const listOfRestaurantsData = listOfRestaurants();
    return ([...listOfRestaurantsData, newlyAdded])
})();

module.exports = response;