export async function getAllChacarter(url) {
    return new Promise((resolve, reject) => {
        fetch(url).then(res => res.json()).then(data => { resolve(data) })
    })
}

export function getCharacter({ url }) {
    return new Promise((resolve, reject) => {
        fetch(url).then(res => res.json()).then(data => { resolve(data) })
    })
}