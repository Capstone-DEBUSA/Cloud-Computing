const tf = require('@tensorflow/tfjs-node');
const InputError = require('../exceptions/InputError');

async function predictClassification(model, image) {
    try { 
        let tensor = tf.node
            .decodeImage(Buffer.from(image, 'base64'))
            .resizeNearestNeighbor([416, 416])
            .expandDims()
            .toFloat()

        tensor = tensor.div(tf.scalar(255));
        
        const prediction = model.predict(tensor);
        const probabilities = await prediction.data();

        class_list = ['Apel', 'Brokoli', 'Jeruk', 'Kangkung', 'Mangga', 'Pisang', 'Strawberry', 'Terong', 'Toge', 'Wortel'];
        
        let maxIndex = 0;
        let maxProbability = probabilities[0];
        for (let i = 1; i < probabilities.length; i++) {
            if (probabilities[i] > maxProbability) {
                maxProbability = probabilities[i];
                maxIndex = i;
            }
        }

        const label = class_list[maxIndex];
        const confidenceScore = Math.max(...probabilities) * 100;
        
        const manfaatList = {
            'Apel': "Apel bagus untuk perut karena ada serat di dalamnya, dan juga ada zat bernama antioksidan yang menjaga tubuh kita dari penyakit.",
            'Brokoli': "Brokoli seperti sayuran pahlawan karena mengandung banyak vitamin C yang membuat tubuh kita kuat dan melindungi kita dari penyakit.",
            'Jeruk': "Jeruk itu seperti vitamin dalam bentuk buah! Itu membantu kita tidak sakit dan membuat hati kita bahagia.",
            'Kangkung': "Kangkung itu seperti sayuran penyihir karena bisa membuat tubuh kita kuat dan sehat, serta menjaga kita dari penyakit.",
            'Mangga': "Mangga itu seperti superhero untuk mata kita karena mengandung vitamin A dan juga membantu perut kita untuk bekerja dengan baik.",
            'Pisang': "Pisang seperti makanan pelindung bagi jantung kita dan juga membuat tulang kita kuat.",
            'Strawberry': "Strawberry adalah teman baik kita yang membantu tubuh kita tetap sehat dan kuat, serta menjaga kita dari penyakit.",
            'Terong': "Terong itu seperti penyihir baik hati, karena melindungi tubuh kita dari penyakit dan juga membantu perut kita untuk bekerja dengan baik.",
            'Toge': "Toge adalah makanan super yang membuat tubuh kita besar dan kuat, serta membantu otak kita berpikir dengan baik.",
            'Wortel': "Wortel adalah sayuran penjaga mata kita, dan juga membantu perut kita bekerja dengan baik agar kita tetap sehat dan kuat."
        };

        const manfaat = manfaatList[label];

        return { label, confidenceScore, manfaat };
    } catch (error) {
        throw new InputError(`Terjadi kesalahan input: ${error.message}`)
    }
}

async function getWikipedia(label) {
    const { default: fetch } = await import('node-fetch');
    const url = `https://id.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(label)}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Failed to fetch description for ${label}`);
        }

        const data = await response.json();
        return {
            description: data.extract,
            url: data.content_urls.desktop.page
        };
    } catch (error) {
        throw new Error(`Error fetching Wikipedia description: ${error.message}`);
    }
}

module.exports = { predictClassification, getWikipedia };