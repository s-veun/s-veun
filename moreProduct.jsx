import  { useState } from 'react'
import products from '../data/Blog.json'

const MoreProduct = () => {
    const [visbleProduct, setVisbleProduct] = useState(8) 
  const handleShowMore = () => {
    setVisbleProduct(prevCount => prevCount + 4)
  }
  return (
    <div>
        {
          visbleProduct < products.length  && (
            <button
              className="w-full text-center text-sky-500 font-semibold py-3 px-10 rounded-md"
              onClick={handleShowMore}
            >
              Show More
            </button>
          )
        }
    </div>
  )
}

export default MoreProduct