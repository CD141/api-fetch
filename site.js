(async () => {
    const div = document.querySelector('div')

    const getRanbomPokemon = async () => {
        const url = await fetch('https://pokeapi.co/api/v2/pokemon/' + Math.floor(Math.random() * 1025))
        const pokemon = await url.json()

        div.textContent = JSON.stringify(pokemon)
    }

    const renderPokemon = () => {
        const img = document.createElement('img')
        // url of the image from the 'front_default' property
        img.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + getRanbomPokemon + ".png"
        // name of the pokemon
        img.alt = "https://pokeapi.co/api/v2/pokemon-species/" + getRanbomPokemon + "/"
        div.append(img)
    }

})()

