const questions = {
  "Mangga": [
    {
      question: "What color is a ripe mango?",
      options: ["Red", "Green", "Yellow", "Orange"],
      answer: "Orange",
      explanation: "A ripe mango typically has an orange color, indicating it is sweet and ready to eat."
    },
    {
      question: "What flavor is typically associated with a ripe mango?",
      options: ["Bitter", "Sour", "Sweet", "Salty"],
      answer: "Sweet",
      explanation: "Ripe mangoes are known for their sweet and juicy flavor."
    },
    {
      question: "Which vitamin is most abundant in mangoes?",
      options: ["Vitamin A", "Vitamin B12", "Vitamin C", "Vitamin D"],
      answer: "Vitamin C",
      explanation: "Mangoes are rich in Vitamin C, which helps boost the immune system."
    }
  ],
  "Pisang": [
    {
      question: "What color is a ripe banana?",
      options: ["Red", "Green", "Yellow", "Blue"],
      answer: "Yellow",
      explanation: "A ripe banana is yellow and has a sweet flavor, making it ideal for eating."
    },
    { 
      question: "Which nutrient is most commonly associated with bananas?",
      options: ["Calcium", "Potassium", "Iron", "Zinc"],
      answer: "Potassium",
      explanation: "Bananas are an excellent source of potassium, which is essential for heart health."
    },
    {
      question: "What is the texture of a ripe banana?",
      options: ["Crunchy", "Fibrous", "Soft", "Grainy"],
      answer: "Soft",
      explanation: "Ripe bananas have a soft texture, which makes them easy to eat and digest."
    }
  ],
  "Strawberry": [
    {
      question: "What color is a ripe strawberry?",
      options: ["Green", "Yellow", "Red", "Purple"],
      answer: "Red",
      explanation: "Ripe strawberries are red, indicating they are sweet and ready to be eaten."
    },
    {
      question: "What type of fruit is a strawberry classified as?",
      options: ["Berry", "Drupe", "Aggregate fruit", "Pome"],
      answer: "Aggregate fruit",
      explanation: "Strawberries are classified as aggregate fruits, meaning they are formed from multiple ovaries."
    },
    {
      question: "Which vitamin is strawberries especially high in?",
      options: ["Vitamin A", "Vitamin B6", "Vitamin C", "Vitamin D"],
      answer: "Vitamin C",
      explanation: "Strawberries are high in Vitamin C, which is important for immune health and skin."
    }
  ],
  "Jeruk": [
    {
      question: "What color is a ripe orange?",
      options: ["Yellow", "Red", "Green", "Orange"],
      answer: "Orange",
      explanation: "A ripe orange is typically orange in color, signaling that it is juicy and ready to be consumed."
    },
    {
      question: "Which nutrient is oranges particularly high in?",
      options: ["Calcium", "Potassium", "Iron", "Vitamin C"],
      answer: "Vitamin C",
      explanation: "Oranges are rich in Vitamin C, which is crucial for immune function and skin health."
    },
    {
      question: "What type of fruit is an orange classified as?",
      options: ["Berry", "Drupe", "Pome", "Citrus"],
      answer: "Citrus",
      explanation: "Oranges belong to the citrus family, known for their tangy flavor and high Vitamin C content."
    }
  ],
  "Apel": [
    {
      question: "What color is a ripe apple?",
      options: ["Blue", "Green", "Red", "Purple"],
      answer: "Red",
      explanation: "Ripe apples can be red, green, or yellow, with red varieties often being the sweetest."
    },
    {
      question: "What type of fruit is an apple classified as?",
      options: ["Berry", "Drupe", "Pome", "Citrus"],
      answer: "Pome",
      explanation: "Apples are classified as pome fruits, which have a core and seeds surrounded by a fleshy layer."
    },
    {
      question: "Which vitamin is most abundant in apples?",
      options: ["Vitamin A", "Vitamin B6", "Vitamin C", "Vitamin D"],
      answer: "Vitamin C",
      explanation: "Apples contain Vitamin C, which is beneficial for skin health and the immune system."
    }
  ],
  "Brokoli": [
    {
      question: "What color is fresh broccoli?",
      options: ["Red", "Green", "Yellow", "Blue"],
      answer: "Green",
      explanation: "Fresh broccoli is green, and it is a good indicator of its freshness and nutrient content."
    },
    {
      question: "What part of the broccoli plant is commonly eaten?",
      options: ["Root", "Stem", "Leaves", "Flower"],
      answer: "Flower",
      explanation: "The part of broccoli that is commonly eaten is the flower head, which is rich in nutrients."
    },
    {
      question: "Which nutrient is broccoli especially rich in?",
      options: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin B12"],
      answer: "Vitamin C",
      explanation: "Broccoli is high in Vitamin C, which is essential for immune function and skin health."
    }
  ],
  "Wortel": [
    {
      question: "What color is a typical carrot?",
      options: ["Blue", "Red", "Yellow", "Orange"],
      answer: "Orange",
      explanation: "Carrots are typically orange due to the presence of beta-carotene, a precursor of Vitamin A."
    },
    {
      question: "Which vitamin is particularly abundant in carrots?",
      options: ["Vitamin A", "Vitamin B12", "Vitamin D", "Vitamin E"],
      answer: "Vitamin A",
      explanation: "Carrots are a rich source of Vitamin A, which is important for vision and immune function."
    },
    {
      question: "What part of the carrot plant is typically eaten?",
      options: ["Root", "Stem", "Leaves", "Flower"],
      answer: "Root",
      explanation: "The edible part of the carrot is the root, which is usually harvested and consumed."
    }
  ],
  "Toge": [
    {
      question: "What color are fresh beansprouts?",
      options: ["Red", "Yellow", "White", "Purple"],
      answer: "White",
      explanation: "Fresh beansprouts are typically white and have a crisp texture."
    },
    {
      question: "What is the typical texture of beansprouts?",
      options: ["Crunchy", "Soft", "Fibrous", "Mushy"],
      answer: "Crunchy",
      explanation: "Beansprouts have a crunchy texture, making them a popular addition to salads and stir-fries."
    },
    {
      question: "Which bean is commonly used to grow beansprouts?",
      options: ["Black bean", "Mung bean", "Pinto bean", "Lima bean"],
      answer: "Mung bean",
      explanation: "Mung beans are most commonly used to grow beansprouts, known for their quick sprouting and nutrient content."
    }
  ],
  "Terong": [
    {
      question: "What color is a typical ripe eggplant?",
      options: ["Yellow", "Green", "Purple", "Orange"],
      answer: "Purple",
      explanation: "Ripe eggplants are usually purple and have a glossy skin, indicating they are ready to cook."
    },
    {
      question: "What part of the eggplant is typically eaten?",
      options: ["Seed", "Leaf", "Flower", "Flesh"],
      answer: "Flesh",
      explanation: "The flesh of the eggplant is typically eaten, which becomes tender when cooked."
    },
    {
      question: "What texture is an eggplant when properly cooked?",
      options: ["Crunchy", "Soft", "Grainy", "Chewy"],
      answer: "Soft",
      explanation: "Properly cooked eggplant has a soft texture, making it suitable for a variety of dishes."
    }
  ],
  "Kangkung": [
    {
      question: "Which nutrient is kale particularly high in?",
      options: ["Calcium", "Vitamin C", "Vitamin B12", "Iron"],
      answer: "Vitamin C",
      explanation: "Kale is particularly high in Vitamin C, which is important for immune function and skin health."
    },
    {
      question: "What part of the kale plant is typically eaten?",
      options: ["Roots", "Stem", "Leaves", "Seeds"],
      answer: "Leaves",
      explanation: "The edible part of the kale plant is the leaves, which can be consumed raw or cooked."
    },
    {
      question: "What is a common culinary use for kale?",
      options: ["Juicing", "Baking", "Frying", "Grilling"],
      answer: "Juicing",
      explanation: "Kale is commonly used in juicing due to its high nutrient content and health benefits."
    }
  ]
};
  
module.exports = questions;