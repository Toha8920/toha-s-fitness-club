// use local storage to manage cart data
const addToDb = id => {


    //get the shopping cart from local storage
    let storedCart = localStorage.getItem('stored-cart');
    if (storedCart) {
        storedCart = JSON.parse(storedCart);
        storedCart = id;
    }
    else {
        storedCart = id;
    }
    localStorage.setItem('stored-cart', JSON.stringify(storedCart));
}

const getData = () => {
    let storedCart = localStorage.getItem('stored-cart');
    if (!storedCart) {
        storedCart = JSON.parse(storedCart);
        storedCart = [];
    }
    return storedCart;
}



export {
    addToDb,
    getData
}