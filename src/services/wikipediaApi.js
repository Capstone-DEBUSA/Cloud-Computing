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

module.exports = getWikipedia;