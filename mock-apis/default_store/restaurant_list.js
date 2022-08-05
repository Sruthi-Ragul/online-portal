const restaurants = {
    "name": "Subway",
    "cuisine": "American",
    "city": "Chennai",
    "pure_veg": "false",
    "take_away_only": "false",
    "swiggy_super_discount_percentage": 10
}

module.exports = listOfRestaurants = () => {
    let res = [];
    for (let i=0; i < 400; i++) {
        if (i%2 === 0) {
            let temp = {...restaurants};
            temp.name = "TestRes"+i;
            temp.cuisine = "South Indian";
            temp.city = "Chennai";
            temp.pure_veg = "true";
            temp.take_away_only = "true";
            temp.swiggy_super_discount_percentage = "20";
            res.push({...temp});
        } else {
            let temp = {...restaurants.data};
            temp.name = "TestRes"+i;
            temp.cuisine = "North Indian";
            temp.city = "Chennai";
            temp.pure_veg = "false";
            temp.take_away_only = "false";
            temp.swiggy_super_discount_percentage = "30"
            res.push({...temp});
        }
    }
    console.log('res', res);
    return res;
}
