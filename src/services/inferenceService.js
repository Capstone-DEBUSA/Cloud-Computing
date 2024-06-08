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
        
        return { label, confidenceScore };
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