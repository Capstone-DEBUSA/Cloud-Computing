/*
const recipes = {
    "Apel": [
        {
            name: "Apple Slice Sandwiches",
            ingredients: [
                "1 apple",
                "Peanut butter or sunflower seed butter",
                "Granola or raisins"
            ],
            instructions: [
                "Slice the apple into thin rings, removing the core.",
                "Spread peanut butter or sunflower seed butter on one side of each apple ring.",
                "Sprinkle granola or raisins on top of the buttered side.",
                "Place another apple ring on top to make a sandwich."
            ],
            image: "https://your-cloud-bucket-url/apple-slice-sandwiches.jpg"
        },
        {
            name: "Apple Chips",
            ingredients: [
                "2 apples",
                "1 teaspoon cinnamon",
                "1 tablespoon sugar (optional)"
            ],
            instructions: [
                "Preheat oven to 225°F (110°C).",
                "Slice apples thinly and remove seeds.",
                "Arrange on a baking sheet lined with parchment paper.",
                "Sprinkle with cinnamon and sugar.",
                "Bake for 1-2 hours until crisp."
            ],
            image: "https://your-cloud-bucket-url/apple-chips.jpg"
        },
        {
            name: "Apple and Cheese Skewers",
            ingredients: [
                "1 apple, cubed",
                "1 cup cheese cubes",
                "Wooden skewers"
            ],
            instructions: [
                "Thread apple cubes and cheese cubes alternately onto wooden skewers.",
                "Serve as a fun and easy snack."
            ],
            image: "https://your-cloud-bucket-url/apple-cheese-skewers.jpg"
        },
    ],
    "Brokoli": [
        {
            name: "Cheesy Broccoli Bites",
            ingredients: [
                "2 cups broccoli florets, steamed",
                "1 cup shredded cheddar cheese",
                "1 egg",
                "1/2 cup breadcrumbs",
                "Salt and pepper to taste"
            ],
            instructions: [
                "Preheat oven to 375°F (190°C).",
                "In a bowl, combine steamed broccoli, shredded cheese, egg, breadcrumbs, salt, and pepper.",
                "Shape the mixture into small balls or nuggets.",
                "Place on a baking sheet and bake for 15-20 minutes until golden brown."
            ],
            image: "https://your-cloud-bucket-url/cheesy-broccoli-bites.jpg"
        },
        {
            name: "Broccoli Tots",
            ingredients: [
                "2 cups chopped broccoli",
                "1/2 cup shredded cheese",
                "1/4 cup breadcrumbs",
                "1 egg",
                "Salt and pepper to taste"
            ],
            instructions: [
                "Preheat oven to 400°F (200°C).",
                "Combine all ingredients in a bowl and mix well.",
                "Shape into small tot shapes.",
                "Place on a baking sheet and bake for 20-25 minutes until golden."
            ],
            image: "https://your-cloud-bucket-url/broccoli-tots.jpg"
        },
        {
            name: "Broccoli and Cheese Soup",
            ingredients: [
                "2 cups broccoli florets",
                "1 cup shredded cheese",
                "2 cups chicken or vegetable broth",
                "1/2 cup milk",
                "1 tablespoon flour",
                "1 tablespoon butter"
            ],
            instructions: [
                "Cook broccoli in broth until tender.",
                "Blend to desired consistency.",
                "In a separate pot, melt butter, add flour, and cook briefly.",
                "Stir in milk to make a thickened sauce, then add to broccoli mixture.",
                "Add cheese and stir until melted."
            ],
            image: "https://your-cloud-bucket-url/broccoli-cheese-soup.jpg"
        },
    ],
    "Jeruk": [
        {
            name: "Orange Cream Popsicles",
            ingredients: [
                "1 cup orange juice",
                "1/2 cup Greek yogurt",
                "1 tablespoon honey (optional)"
            ],
            instructions: [
                "Combine orange juice, Greek yogurt, and honey in a blender until smooth.",
                "Pour the mixture into popsicle molds.",
                "Freeze for at least 4 hours until solid."
            ],
            image: "https://your-cloud-bucket-url/orange-cream-popsicles.jpg"
        },
        {
        name: "Orange and Yogurt Parfait",
        ingredients: [
            "1 orange, peeled and segmented",
            "1 cup Greek yogurt",
            "1/4 cup granola"
            ],
            instructions: [
                "Layer Greek yogurt, orange segments, and granola in a glass.",
                "Serve immediately or refrigerate until ready to eat."
            ],
            image: "https://your-cloud-bucket-url/orange-yogurt-parfait.jpg"
        },
        {
        name: "Orange Smoothie",
        ingredients: [
            "1 orange, peeled and segmented",
            "1/2 banana",
            "1/2 cup Greek yogurt",
            "1/4 cup orange juice"
            ],
            instructions: [
                "Blend all ingredients until smooth.",
                "Serve immediately as a refreshing drink."
            ],
            image: "https://your-cloud-bucket-url/orange-smoothie.jpg"
        },
    ],
    "Kangkung": [
        {
            name: "Kale Chips",
            ingredients: [
                "1 bunch kale",
                "1 tablespoon olive oil",
                "Salt to taste"
            ],
            instructions: [
                "Preheat oven to 350°F (175°C).",
                "Remove the stems and tear kale into bite-sized pieces.",
                "Toss with olive oil and sprinkle with salt.",
                "Spread on a baking sheet and bake for 10-15 minutes until crispy."
            ],
            image: "https://your-cloud-bucket-url/kale-chips.jpg"
        },
        {
            name: "Kale Smoothie",
            ingredients: [
                "1 cup kale leaves, packed",
                "1/2 banana",
                "1/2 cup apple juice",
                "1/2 cup Greek yogurt"
            ],
            instructions: [
                "Blend kale, banana, apple juice, and Greek yogurt until smooth.",
                "Serve immediately as a nutritious drink."
            ],
            image: "https://your-cloud-bucket-url/kale-smoothie.jpg"
        },
        {
            name: "Kale and Potato Hash",
            ingredients: [
                "1 cup chopped kale",
                "2 potatoes, diced",
                "1/2 onion, chopped",
                "2 tablespoons olive oil",
                "Salt and pepper to taste"
            ],
            instructions: [
                "Heat olive oil in a pan over medium heat.",
                "Add diced potatoes and cook until starting to brown.",
                "Add onions and kale, cook until kale is wilted and potatoes are tender.",
                "Season with salt and pepper."
            ],
            image: "https://your-cloud-bucket-url/kale-potato-hash.jpg"
        },
    ],
    "Mangga": [
        {
            name: "Mango Smoothie Bowl",
            ingredients: [
                "1 cup frozen mango chunks",
                "1/2 cup Greek yogurt",
                "1/2 cup orange juice",
                "Toppings: granola, coconut flakes, fresh fruit"
            ],
            instructions: [
                "Blend frozen mango, Greek yogurt, and orange juice until smooth.",
                "Pour into a bowl.",
                "Add granola, coconut flakes, and fresh fruit on top."
            ],
            image: "https://your-cloud-bucket-url/mango-smoothie-bowl.jpg"
        },
        {
            name: "Mango Salsa",
            ingredients: [
                "1 ripe mango, diced",
                "1/2 red bell pepper, diced",
                "1/4 red onion, finely chopped",
                "1 tablespoon lime juice",
                "Salt and pepper to taste"
            ],
            instructions: [
                "Combine all ingredients in a bowl.",
                "Serve with tortilla chips or as a topping for grilled meats."
            ],
            image: "https://your-cloud-bucket-url/mango-salsa.jpg"
        },
        {
            name: "Mango and Avocado Salad",
            ingredients: [
                "1 ripe mango, diced",
                "1 avocado, diced",
                "1/2 cup cherry tomatoes, halved",
                "1 tablespoon lime juice",
                "Salt and pepper to taste"
            ],
            instructions: [
                "Gently toss all ingredients together in a bowl.",
                "Serve immediately as a refreshing side salad."
            ],
            image: "https://your-cloud-bucket-url/mango-avocado-salad.jpg"
        },
    ],
    "Pisang": [
        {
            name: "Frozen Banana Pops",
            ingredients: [
                "2 bananas",
                "1 cup Greek yogurt",
                "1/4 cup mini chocolate chips or sprinkles"
            ],
            instructions: [
                "Cut bananas in half and insert a popsicle stick into each half.",
                "Dip each banana in Greek yogurt.",
                "Roll in mini chocolate chips or sprinkles.",
                "Place on a baking sheet and freeze for 2-3 hours."
            ],
            image: "https://your-cloud-bucket-url/frozen-banana-pops.jpg"
        },
        {
            name: "Banana Pancakes",
            ingredients: [
                "1 ripe banana",
                "2 eggs",
                "1/4 teaspoon baking powder",
                "Butter or oil for cooking"
            ],
            instructions: [
                "Mash the banana in a bowl.",
                "Mix in the eggs and baking powder.",
                "Heat a non-stick pan over medium heat, add a little butter or oil.",
                "Pour small amounts of batter to make pancakes, cook until bubbles form and flip."
            ],
            image: "https://your-cloud-bucket-url/banana-pancakes.jpg"
        },
        {
            name: "Banana Sushi",
            ingredients: [
                "1 banana",
                "2 tablespoons peanut butter",
                "1/4 cup crispy rice cereal or granola"
            ],
            instructions: [
                "Spread peanut butter evenly over the banana.",
                "Roll the banana in crispy rice cereal or granola.",
                "Cut into bite-sized pieces and serve."
            ],
            image: "https://your-cloud-bucket-url/banana-sushi.jpg"
        },
    ],
    "Strawberry": [
        {
            name: "Strawberry Yogurt Parfait",
            ingredients: [
                "1 cup strawberries, sliced",
                "1 cup Greek yogurt",
                "1/2 cup granola"
            ],
            instructions: [
                "In a glass or bowl, layer Greek yogurt, strawberries, and granola.",
                "Repeat the layers as desired.",
                "Serve immediately or refrigerate until ready to eat."
            ],
            image: "https://your-cloud-bucket-url/strawberry-yogurt-parfait.jpg"
        },
        {
            name: "Strawberry Smoothie",
            ingredients: [
                "1 cup strawberries, hulled",
                "1/2 banana",
                "1/2 cup Greek yogurt",
                "1/2 cup milk"
            ],
            instructions: [
                "Blend strawberries, banana, Greek yogurt, and milk until smooth.",
                "Serve immediately as a refreshing drink."
            ],
            image: "https://your-cloud-bucket-url/strawberry-smoothie.jpg"
        },
        {
            name: "Strawberry Popsicles",
            ingredients: [
                "1 cup strawberries, hulled",
                "1/2 cup Greek yogurt",
                "1 tablespoon honey"
            ],
            instructions: [
                "Blend strawberries, Greek yogurt, and honey until smooth.",
                "Pour the mixture into popsicle molds.",
                "Freeze for at least 4 hours until solid."
            ],
            image: "https://your-cloud-bucket-url/strawberry-popsicles.jpg"
        },
    ],
    "Terong": [
        {
            name: "Eggplant Pizzas",
            ingredients: [
                "1 eggplant, sliced into rounds",
                "1/2 cup marinara sauce",
                "1 cup shredded mozzarella cheese",
                "1 tablespoon olive oil",
                "Toppings: mini pepperoni, bell peppers, olives"
            ],
            instructions: [
                "Preheat oven to 375°F (190°C).",
                "Brush eggplant slices with olive oil and place on a baking sheet.",
                "Bake for 15 minutes until tender.",
                "Spread marinara sauce on each slice, add cheese and toppings.",
                "Return to oven and bake for 5-10 minutes until cheese melts."
            ],
            image: "https://your-cloud-bucket-url/eggplant-pizzas.jpg"
        },
        {
            name: "Eggplant Fries",
            ingredients: [
                "1 large eggplant, cut into sticks",
                "1/2 cup breadcrumbs",
                "1/4 cup grated Parmesan cheese",
                "1 egg, beaten",
                "Salt and pepper to taste"
            ],
            instructions: [
                "Preheat oven to 425°F (220°C).",
                "Mix breadcrumbs and Parmesan cheese in a bowl.",
                "Dip eggplant sticks in beaten egg, then coat with breadcrumb mixture.",
                "Place on a baking sheet and bake for 20-25 minutes until crispy."
            ],
            image: "https://your-cloud-bucket-url/eggplant-fries.jpg"
        },
        {
            name: "Stuffed Eggplant Boats",
            ingredients: [
                "1 large eggplant, halved lengthwise",
                "1/2 cup marinara sauce",
                "1/2 cup cooked quinoa or rice",
                "1/4 cup shredded mozzarella cheese",
                "1 tablespoon olive oil",
                "Salt and pepper to taste"
            ],
            instructions: [
                "Preheat oven to 375°F (190°C).",
                "Scoop out the center of each eggplant half.",
                "Brush with olive oil and bake for 15 minutes.",
                "Combine marinara sauce, quinoa or rice, and season with salt and pepper.",
                "Fill eggplant halves with the mixture, top with cheese.",
                "Bake for another 10-15 minutes until cheese melts."
            ],
            image: "https://your-cloud-bucket-url/stuffed-eggplant-boats.jpg"
        },
    ],
    "Toge": [
        {
            name: "Beansprout Stir-Fry",
            ingredients: [
                "2 cups beansprouts",
                "1 small carrot, julienned",
                "1 tablespoon soy sauce",
                "1 teaspoon sesame oil",
                "1 clove garlic, minced"
            ],
            instructions: [
                "Heat sesame oil in a pan over medium heat.",
                "Sauté garlic and carrot for 2-3 minutes.",
                "Add beansprouts and soy sauce, stir-fry for 2-3 minutes until tender.",
                "Serve warm as a side dish."
            ],
            image: "https://your-cloud-bucket-url/beansprout-stir-fry.jpg"
        },
        {
            name: "Beansprout and Chicken Salad",
            ingredients: [
                "2 cups beansprouts",
                "1 cup cooked chicken, shredded",
                "1/2 cup julienned carrots",
                "2 tablespoons soy sauce",
                "1 tablespoon rice vinegar",
                "1 teaspoon sesame oil"
            ],
            instructions: [
                "Combine beansprouts, shredded chicken, and carrots in a bowl.",
                "Whisk together soy sauce, rice vinegar, and sesame oil.",
                "Pour dressing over the salad and toss to coat."
            ],
            image: "https://your-cloud-bucket-url/beansprout-chicken-salad.jpg"
        },
        {
            name: "Beansprout Pancakes",
            ingredients: [
                "1 cup beansprouts",
                "1/2 cup all-purpose flour",
                "1/2 cup water",
                "1 egg",
                "Salt and pepper to taste",
                "Oil for frying"
            ],
            instructions: [
                "Combine beansprouts, flour, water, egg, salt, and pepper in a bowl.",
                "Heat oil in a pan over medium heat.",
                "Pour batter into the pan to form small pancakes, cook until golden on both sides."
            ],
            image: "https://your-cloud-bucket-url/beansprout-pancakes.jpg"
        },
    ],
    "Wortel": [
        {
            name: "Carrot Fries",
            ingredients: [
                "4 large carrots, peeled and cut into sticks",
                "2 tablespoons olive oil",
                "1 teaspoon garlic powder",
                "1/2 teaspoon paprika",
                "Salt and pepper to taste"
            ],
            instructions: [
                "Preheat oven to 425°F (220°C).",
                "Toss carrot sticks with olive oil, garlic powder, paprika, salt, and pepper.",
                "Spread on a baking sheet and bake for 20-25 minutes until crispy."
            ],
            image: "https://your-cloud-bucket-url/carrot-fries.jpg"
        },
        {
            name: "Carrot Smoothie",
            ingredients: [
                "1 cup carrot juice",
                "1/2 banana",
                "1/2 cup Greek yogurt",
                "1/4 cup orange juice"
            ],
            instructions: [
                "Blend all ingredients until smooth.",
                "Serve immediately as a refreshing drink."
            ],
            image: "https://your-cloud-bucket-url/carrot-smoothie.jpg"
        },
        {
            name: "Carrot and Hummus Wrap",
            ingredients: [
                "1 large tortilla",
                "1/2 cup hummus",
                "1 cup shredded carrots",
                "1/2 cup spinach leaves"
            ],
            instructions: [
                "Spread hummus evenly over the tortilla.",
                "Layer shredded carrots and spinach on top.",
                "Roll up tightly and slice into pieces."
            ],
            image: "https://your-cloud-bucket-url/carrot-hummus-wrap.jpg"
        }
    ]
};
  
  module.exports = recipes;
*/