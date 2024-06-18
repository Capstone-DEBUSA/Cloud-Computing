const questions = {
  "Mangga": [
    {
      question: "Apa warna mangga yang matang?",
      options: ["Merah", "Hijau", "Kuning", "Oranye"],
      answer: "Oranye",
      explanation: "Mangga yang matang biasanya berwarna oranye, menandakan bahwa buah tersebut manis dan siap untuk dimakan."
    },
    {
      question: "Rasa apa yang biasanya terkait dengan mangga yang matang?",
      options: ["Pahit", "Asam", "Manis", "Asin"],
      answer: "Manis",
      explanation: "Mangga matang dikenal dengan rasa manis dan berairnya."
    },
    {
      question: "Vitamin apa yang paling banyak terdapat dalam mangga?",
      options: ["Vitamin A", "Vitamin B12", "Vitamin C", "Vitamin D"],
      answer: "Vitamin C",
      explanation: "Mangga kaya akan Vitamin C, yang membantu meningkatkan sistem kekebalan tubuh."
    }
  ],
  "Pisang": [
    {
      question: "Apa warna pisang yang matang?",
      options: ["Merah", "Hijau", "Kuning", "Biru"],
      answer: "Kuning",
      explanation: "Pisang yang matang berwarna kuning dan memiliki rasa manis, membuatnya ideal untuk dimakan."
    },
    { 
      question: "Nutrisi apa yang paling sering dikaitkan dengan pisang?",
      options: ["Kalsium", "Kalium", "Zat Besi", "Seng"],
      answer: "Kalium",
      explanation: "Pisang merupakan sumber kalium yang sangat baik, yang penting untuk kesehatan jantung."
    },
    {
      question: "Bagaimana tekstur pisang yang matang?",
      options: ["Renyah", "Berserat", "Lembut", "Berbutir"],
      answer: "Lembut",
      explanation: "Pisang matang memiliki tekstur yang lembut, membuatnya mudah dimakan dan dicerna."
    }
  ],
  "Strawberry": [
    {
      question: "Apa warna stroberi yang matang?",
      options: ["Hijau", "Kuning", "Merah", "Ungu"],
      answer: "Merah",
      explanation: "Stroberi yang matang berwarna merah, menandakan bahwa buah tersebut manis dan siap dimakan."
    },
    {
      question: "Stroberi diklasifikasikan sebagai jenis buah apa?",
      options: ["Berry", "Drupe", "Buah majemuk", "Pome"],
      answer: "Buah majemuk",
      explanation: "Stroberi diklasifikasikan sebagai buah majemuk, yang berarti buah tersebut terbentuk dari beberapa ovarium."
    },
    {
      question: "Vitamin apa yang paling banyak terdapat dalam stroberi?",
      options: ["Vitamin A", "Vitamin B6", "Vitamin C", "Vitamin D"],
      answer: "Vitamin C",
      explanation: "Stroberi tinggi Vitamin C, yang penting untuk kesehatan sistem kekebalan dan kulit."
    }
  ],
  "Jeruk": [
    {
      question: "Apa warna jeruk yang matang?",
      options: ["Kuning", "Merah", "Hijau", "Oranye"],
      answer: "Oranye",
      explanation: "Jeruk yang matang biasanya berwarna oranye, menandakan bahwa buah tersebut berair dan siap dikonsumsi."
    },
    {
      question: "Nutrisi apa yang paling banyak terdapat dalam jeruk?",
      options: ["Kalsium", "Kalium", "Zat Besi", "Vitamin C"],
      answer: "Vitamin C",
      explanation: "Jeruk kaya akan Vitamin C, yang penting untuk fungsi kekebalan tubuh dan kesehatan kulit."
    },
    {
      question: "Jeruk diklasifikasikan sebagai jenis buah apa?",
      options: ["Berry", "Drupe", "Pome", "Citrus"],
      answer: "Citrus",
      explanation: "Jeruk termasuk dalam keluarga citrus, yang dikenal dengan rasa asam dan kandungan Vitamin C yang tinggi."
    }
  ],
  "Apel": [
    {
      question: "Apa warna apel yang matang?",
      options: ["Biru", "Hijau", "RMerahed", "Ungu"],
      answer: "Merah",
      explanation: "Apel yang matang bisa berwarna merah, hijau, atau kuning, dengan varietas merah sering kali menjadi yang paling manis."
    },
    {
      question: "Apel diklasifikasikan sebagai jenis buah apa?",
      options: ["Berry", "Drupe", "Pome", "Citrus"],
      answer: "Pome",
      explanation: "Apel diklasifikasikan sebagai buah pome, yang memiliki inti dan biji yang dikelilingi oleh lapisan berdaging."
    },
    {
      question: "Vitamin apa yang paling banyak terdapat dalam apel?",
      options: ["Vitamin A", "Vitamin B6", "Vitamin C", "Vitamin D"],
      answer: "Vitamin C",
      explanation: "Apel mengandung Vitamin C, yang bermanfaat untuk kesehatan kulit dan sistem kekebalan tubuh."
    }
  ],
  "Brokoli": [
    {
      question: "Apa warna brokoli yang segar?",
      options: ["Merah", "Hijau", "Kuning", "Biru"],
      answer: "Hijau",
      explanation: "Brokoli segar berwarna hijau, yang menjadi indikator kesegaran dan kandungan nutrisinya."
    },
    {
      question: "Bagian mana dari tanaman brokoli yang biasanya dimakan?",
      options: ["Akar", "Batang", "Daun", "Bunga"],
      answer: "Bunga",
      explanation: "Bagian brokoli yang biasa dimakan adalah kepala bunga, yang kaya akan nutrisi."
    },
    {
      question: "Nutrisi apa yang banyak terdapat dalam brokoli?",
      options: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin B12"],
      answer: "Vitamin C",
      explanation: "Brokoli tinggi Vitamin C, yang penting untuk fungsi kekebalan tubuh dan kesehatan kulit."
    }
  ],
  "Wortel": [
    {
      question: "Apa warna wortel yang umum?",
      options: ["Biru", "Merah", "Kuning", "Oranye"],
      answer: "Oranye",
      explanation: "Wortel biasanya berwarna oranye karena mengandung beta-karoten, prekursor Vitamin A."
    },
    {
      question: "Vitamin apa yang banyak terdapat dalam wortel?",
      options: ["Vitamin A", "Vitamin B12", "Vitamin D", "Vitamin E"],
      answer: "Vitamin A",
      explanation: "Wortel adalah sumber Vitamin A yang kaya, yang penting untuk penglihatan dan fungsi kekebalan tubuh."
    },
    {
      question: "Bagian mana dari tanaman wortel yang biasanya dimakan?",
      options: ["Akar", "Batang", "Daun", "Bunga"],
      answer: "Akar",
      explanation: "The edible part of the carrot is the root, which is usually harvested and consumed."
    }
  ],
  "Toge": [
    {
      question: "Apa warna toge yang segar?",
      options: ["Merah", "Kuning", "Putih", "Ungu"],
      answer: "Putih",
      explanation: "Toge yang segar biasanya berwarna putih dan memiliki tekstur yang renyah."
    },
    {
      question: "Bagaimana tekstur toge yang umum?",
      options: ["Renyah", "Lembut", "Berserat", "Lembek"],
      answer: "Renyah",
      explanation: "Toge memiliki tekstur yang renyah, membuatnya populer sebagai tambahan pada salad dan tumisan."
    },
    {
      question: "Kacang apa yang biasa digunakan untuk menumbuhkan toge?",
      options: ["Kacang hitam", "Kacang hijau", "Kacang pinto", "Kacang lima"],
      answer: "Kacang hijau",
      explanation: "Kacang hijau paling umum digunakan untuk menumbuhkan toge, yang dikenal dengan pertumbuhan cepat dan kandungan nutrisinya."
    }
  ],
  "Terong": [
    {
      question: "Apa warna terong yang matang?",
      options: ["Kuning", "Hijau", "Ungu", "Oranye"],
      answer: "Ungu",
      explanation: "Terong matang biasanya berwarna ungu dan memiliki kulit mengkilap, menandakan bahwa terong siap untuk dimasak."
    },
    {
      question: "Bagian mana dari terong yang biasanya dimakan?",
      options: ["Biji", "Daun", "Bunga", "Daging"],
      answer: "Daging",
      explanation: "Daging terong adalah bagian yang biasanya dimakan, yang menjadi lembut ketika dimasak."
    },
    {
      question: "Bagaimana tekstur terong yang dimasak dengan benar?",
      options: ["Renyah", "Lembut", "Berbutir", "Kenyal"],
      answer: "Lembut",
      explanation: "Terong yang dimasak dengan benar memiliki tekstur yang lembut, membuatnya cocok untuk berbagai hidangan."
    }
  ],
  "Kangkung": [
    {
      question: "Nutrisi apa yang banyak terdapat dalam kangkung?",
      options: ["Kalsium", "Vitamin C", "Vitamin B12", "Zat Besi"],
      answer: "Vitamin C",
      explanation: "Kangkung tinggi Vitamin C, yang penting untuk fungsi kekebalan tubuh dan kesehatan kulit."
    },
    {
      question: "Bagian mana dari tanaman kangkung yang biasanya dimakan?",
      options: ["Akar", "Batang", "Daun", "Biji"],
      answer: "Daun",
      explanation: "Bagian tanaman kangkung yang bisa dimakan adalah daunnya, yang bisa dikonsumsi mentah atau dimasak."
    },
    {
      question: "Penggunaan kuliner apa yang umum untuk kangkung?",
      options: ["Jus", "Dipanggang", "Digoreng", "Dipanggang"],
      answer: "Jus",
      explanation: "Kangkung sering digunakan dalam jus karena kandungan nutrisinya yang tinggi dan manfaat kesehatannya."
    }
  ]
};
  
module.exports = questions;