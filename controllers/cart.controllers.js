let cartContent = [];

export const getCart = (req, res) => {
    res.send (cartContent)
}

export const addToCart = (req, res) => {
    
    console.log('entrar')
    const itemToAdd = req.body;

    if (cartContent.findIndex(movie => movie.imdbID === itemToAdd.imdbID) < 0) {
        cartContent.push(itemToAdd);

        res.send({
            status: 'OK',
            cartContent
        });
    } else {
        res.send({
            status: 'NOT OK',
            cartContent
        })
    }

   cartContent.forEach(data => {
        console.log(data)
    });

    
}

export const removeFromCart = (req, res) => {
    const id= (req.query.id);
    const indexToRemove = cartContent.findIndex(movie => movie.imdbID === id);

    if (indexToRemove >= 0) {
        cartContent.splice(indexToRemove, 1);
        res.send({
            status: 'OK',
            cartContent
        })
    } else {
        res.send({
            status: 'NOT OK',
            cartContent
    })
    
    }

}
export const deleteAllMovies = (req, res) => {
    

    cartContent = [];

    res.send({
        status: 'OK', 
        cartContent
    })
}

// export const removeFromCart = (req, res) => {
//     const id = Number(req.query.id);
//     console.log(req.query, cartContent);
//     const indexToRemove = cartContent.findIndex(movie => movie.id === id);

//     if (indexToRemove >= 0) {
//         cartContent.splice(indexToRemove, 1);
//         res.send({
//             status: 'OK',
//             cartContent
//         });
//     } else {
//         res.send({
//             status: 'NOT OK',
//             cartContent
//         });
//     }
// }
