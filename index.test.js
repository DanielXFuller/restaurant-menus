const {sequelize} = require('./db')
const {Restaurant, Menu} = require('./models/index')
const {
    seedRestaurant,
    seedMenu,
  } = require('./seedData');

describe('Restaurant and Menu Models', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await sequelize.sync({ force: true });
    });

    test('can create a Restaurant', async () => {
        // TODO - write test
        const restaurantData = {
            name: 'Test Restaurant',
            address: '123 Main St',
            phone: '555-1234',
        };
        const restaurant = await Restaurant.create(restaurantData);
  
        expect(restaurant.name).toEqual('Test Restaurant');
        expect(restaurant.address).toEqual('123 Main St');
        expect(restaurant.phone).toEqual('555-1234');
    });

    test('can create a Menu', async () => {
        // TODO - write test
        const menuData = {
            title: 'Test Menu',
            RestaurantId: 1,
        };
        const menu = await Menu.create(menuData);
  
        expect(menu.title).toEqual('Test Menu');
        expect(menu.RestaurantId).toEqual(1);
    });

    test('can find Restaurants', async () => {
        // TODO - write test
        await seedRestaurant();

        const restaurants = await Restaurant.findAll();
  
        expect(restaurants.length).toEqual(2);
        expect(restaurants[0].name).toEqual('Restaurant A');
        expect(restaurants[1].name).toEqual('Restaurant B');
    });

    test('can find Menus', async () => {
        // TODO - write test
        await seedMenu();

        const menus = await Menu.findAll();
  
        expect(menus.length).toEqual(2);
        expect(menus[0].title).toEqual('Menu A');
        expect(menus[1].title).toEqual('Menu B');
    });

    test('can delete Restaurants', async () => {
        // TODO - write test
        await seedRestaurant();

        const restaurantsBefore = await Restaurant.findAll();
        expect(restaurantsBefore.length).toEqual(2);
  
        await Restaurant.destroy({
            where: { name: 'Restaurant A' }
        });
  
        const restaurantsAfter = await Restaurant.findAll();
        expect(restaurantsAfter.length).toEqual(1);
        expect(restaurantsAfter[0].name).toEqual('Restaurant B');
    });
})