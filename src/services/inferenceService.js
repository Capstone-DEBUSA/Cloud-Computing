const tf = require('@tensorflow/tfjs-node');
const InputError = require('../exceptions/InputError');

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

async function predictClassification(model, image) {
    try { 
        const tensor = tf.node
            .decodeJpeg(image)
            .resizeNearestNeighbor([416, 416])
            .expandDims()
            .toFloat()
        
        const prediction = model.predict(tensor);
        const probabilities = await prediction.data();
        const classes = ['Apel', 'Jeruk', 'Mangga', 'Strawberry', 'Pisang', 
                         'Kangkung', 'Terong', 'Toge', 'Wortel', 'Brokoli'];
        
        const predictedClassIndex = probabilities.indexOf(Math.max(...probabilities));
        const label = classes[predictedClassIndex];
        
        return { label };
    } catch (error) {
        throw new InputError(`Terjadi kesalahan input: ${error.message}`)
    }
  
}

module.exports = { predictClassification, getWikipedia };