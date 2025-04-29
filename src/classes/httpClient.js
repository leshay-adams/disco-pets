const BASE_URLS = {
    cat: 'https://api.thecatapi.com/v1/images/search',
    dog: 'https://dog.ceo/api/breeds/image/random',
    default: 'https://d.newsweek.com/en/full/1898130/dog-cat-under-sheet.jpg'
}

export default {
    async getPetImage(animal) {
        try {
            const res = await fetch(BASE_URLS[animal])
            const data = await res.json()
            return animal === 'cat' ? data[0].url : data.message
        } catch (e) {
            console.error('error fetching image:', e)
            return BASE_URLS['default']
        }
    }
}
