export const featureJobLoader = async () => {
    const jobListData = await fetch('featured-job-list.json')
    const jobLists = await jobListData.json()

    /*  const savedCart = getStoredCart()
     const initialCart = []
     for (const id in savedCart) {
         const foundProduct = products.find(product => product.id === id)
         if (foundProduct) {
             const quantity = savedCart[id]
             foundProduct.quantity = quantity
             initialCart.push(foundProduct)
         }
     } */
  
    return jobLists/* { products, initialCart } */
}