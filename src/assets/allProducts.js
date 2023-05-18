const allProducts = [{
        id: 1,
        name: "Cinnaburst",
        ingredients: 'All-purpose flour, granulated sugar, active dry yeast, salt, milk, unsalted butter, large eggs, light brown sugar, ground cinnamon, unsalted butter, cream cheese, unsalted butter, powdered sugar, vanilla extract.',
        desc: "Indulge in the mouthwatering aroma and heavenly taste of our Cinnaburst cinnamon roll. With its soft and fluffy dough, swirls of cinnamon sugar, and drizzle of rich cream cheese frosting, each bite is a burst of pure bliss. Whether you're enjoying it for breakfast, dessert, or any time in between, our Cinnaburst is sure to satisfy your sweetest cravings and leave you craving more.",
        price: 500,
        src: "https://images.unsplash.com/photo-1509365465985-25d11c17e812?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"

    },
    {
        id: 2,
        name: "Ferrero Frenzy",
        ingredients: 'All-purpose flour, granulated sugar, baking powder, salt, unsalted butter, whole milk, large eggs, vanilla extract, Ferrero Rocher chocolates, finely chopped, unsalted butter, powdered sugar, Nutella, heavy cream, vanilla extract.',
        desc: "Get ready for a Ferrero frenzy with our indulgent cupcake. The moist chocolate cake is filled with a rich and creamy Ferrero Rocher ganache, then topped with a swirl of luscious chocolate buttercream frosting and crowned with a Ferrero Rocher candy. Each bite of this decadent treat is a mouthwatering explosion of hazelnut and chocolate, making it the perfect dessert for any occasion. Whether you're celebrating a special occasion or simply indulging in a sweet escape, our Ferrero Frenzy cupcake is sure to leave you in a state of pure bliss.",
        price: 750,
        src: "https://images.unsplash.com/photo-1603532648955-039310d9ed75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"

    },
    {
        id: 3,
        name: "Macaron Madness",
        ingredients: 'Almond flour, powdered sugar, egg whites, granulated sugar, gel food coloring (optional), unsalted butter, powdered sugar, heavy cream, vanilla extract, food coloring (optional).',
        desc: "Experience a taste of pure luxury with our Macaron Madness selection. Each delicate and colorful macaron is made by hand using the finest ingredients to create a melt-in-your-mouth texture that is simply irresistible. With flavors like rich dark chocolate, fruity raspberry, and fragrant lavender, our macarons are a symphony of taste and texture that will transport you to a world of pure indulgence. Perfect for weddings, parties, or simply as a sweet treat for yourself, our Macaron Madness selection is sure to satisfy your sweet tooth and leave you craving more. ",
        price: 600,
        src: "https://images.unsplash.com/photo-1558326567-98ae2405596b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=459&q=80"
    },
    {
        id: 4,
        name: " Chocolate Delight Cupcake",
        ingredients: "All-purpose flour, granulated sugar, unsweetened cocoa powder, baking powder, baking soda, salt, vegetable oil, eggs, vanilla extract, strong coffee or espresso, buttermilk, unsalted butter, unsweetened cocoa powder, confectioners' sugar, heavy cream, vanilla extract, semisweet chocolate chips, heavy cream.",
        desc: "Rich, moist chocolate cake topped with a creamy chocolate frosting and finished with a drizzle of velvety chocolate ganache. Perfect for satisfying your sweet tooth cravings. ",
        price: 600,
        src: "https://images.unsplash.com/photo-1606188074044-fcd750f6996a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
    },
    {
        id: 5,
        name: "Berry Bliss Tart",
        ingredients: "All-purpose flour, unsalted butter, confectioners' sugar, salt, egg yolk, ice water, granulated sugar, cornstarch, salt, milk, egg yolks, unsalted butter, vanilla extract, fresh berries (such as strawberries, blueberries, raspberries, and blackberries), apricot jam",
        desc: "A buttery, flaky tart shell filled with a creamy, tangy custard and topped with a colorful array of fresh, juicy berries. Each bite is a burst of sweet and tart flavors that will leave you in a state of pure berry bliss. ",
        price: 800,
        src: "https://images.unsplash.com/photo-1620980776848-84ac10194945?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
    },
    {
        id: 6,
        name: "Cinnamon Apple Harvest Pie",
        ingredients: 'All-purpose flour, salt, unsalted butter, ice water, apples (such as Granny Smith, Honeycrisp, or Braeburn), lemon juice, granulated sugar, brown sugar, cinnamon, nutmeg, salt, cornstarch, unsalted butter.',
        desc: "A warm, comforting slice of fall, this pie is bursting with juicy, caramelized apples and a fragrant blend of cinnamon and spices. The buttery crust is the perfect balance of flaky and tender, making each bite a true celebration of the harvest season.",
        price: 1200,
        src: "https://images.unsplash.com/photo-1535920527002-b35e96722eb9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
    },
    {
        id: 7,
        name: "Savory Argentinean Empanada",
        ingredients: 'All-purpose flour, salt, unsalted butter, egg yolks, ice water, white vinegar, ground beef, onion, garlic, green olives, raisins, cumin, paprika, salt, black pepper, hard-boiled eggs',
        desc: "Transport your taste buds to the streets of Buenos Aires with our traditional Argentinean empanada. Featuring a flaky, golden crust and a savory filling of seasoned ground beef, onions, and olives, this handheld delight is the perfect balance of salty and tangy flavors.",
        price: 500,
        src: "https://images.unsplash.com/photo-1608039783021-6116a558f0c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
    },
    {
        id: 8,
        name: "Golden Raisin Delight",
        type: 'cake',
        desc: "Our moist and fluffy golden raisin loaf is the perfect treat for any occasion. Made with premium quality raisins and a touch of cinnamon, this delicious bread is the perfect balance of sweetness and spice. Each slice is bursting with plump, juicy raisins and a heavenly aroma that will transport you straight to Grandma's kitchen. ",
        price: 400,
        src: "https://images.unsplash.com/photo-1572897306051-abf270479682?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
    },
    {
        id: 9,
        name: "Strawberry Swirl Dream",
        ingredients: 'Graham cracker crumbs, unsalted butter, granulated sugar, cream cheese, sour cream, vanilla extract, eggs, fresh strawberries.',
        desc: "Our creamy and decadent cheesecake is infused with the sweet and tangy flavor of ripe strawberries, and swirled to perfection with a delicate vanilla crème. Each bite of this dessert is a dreamy escape to a world of pure indulgence, leaving your taste buds begging for more.",
        price: 1500,
        src: "https://images.unsplash.com/photo-1578775887804-699de7086ff9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
    },
    {
        id: 10,
        name: "Caramel Bliss Cupcake",
        ingredients: 'Our fluffy and moist vanilla cupcake is generously topped with a creamy and decadent caramel frosting, drizzled with a luscious caramel sauce, and finished with a sprinkle of sea salt. The combination of sweet and salty flavors creates a heavenly indulgence that will make you fall in love with each biteAll-purpose flour, baking powder, salt, unsalted butter, granulated sugar, eggs, milk, vanilla extract, heavy cream, brown sugar, sea salt.',
        desc: "This Oreo Strawberry Cake is a delightful treat that combines the rich and creamy taste of Oreos with the sweet and tangy flavor of fresh strawberries. ",
        price: 1699,
        src: "https://images.unsplash.com/photo-1534148206-f085ba17015a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
    },
    {
        id: 11,
        name: "Donut Delight Box",
        ingredients: 'All-purpose flour, baking powder, salt, granulated sugar, eggs, milk, unsalted butter, vanilla extract, assorted flavorings and toppings.',
        desc: "Our Donut Delight Box is filled with an assortment of mouthwatering donuts, made fresh daily and bursting with flavor. From classic glazed to rich chocolate, fruity berry, and sweet maple bacon, every bite is a heavenly treat that will satisfy any sweet tooth.",
        price: 1699,
        src: "https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
    },
    {
        id: !2,
        name: "Berrylicious Tart",
        type: 'All-purpose flour, salt, unsalted butter, granulated sugar, egg yolks, milk, cornstarch, mixed berries.',
        desc: "Our Berrylicious Tart is a feast for the eyes and the taste buds! This buttery tart is filled with a luscious mixture of fresh berries, including juicy strawberries, tart raspberries, and plump blueberries. Each bite is a perfect balance of sweet and tangy flavors that will leave you wanting more.",
        price: 1699,
        src: "https://images.unsplash.com/photo-1628890444435-9e68e905773b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=459&q=80"
    },


]


export default allProducts