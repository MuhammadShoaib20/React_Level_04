import React , {useState} from 'react';

const ProductData = [
  { id: 1, name: 'Apple iPhone' },
  { id: 2, name: 'Samsung Galaxy'},
  { id: 3, name: 'OnePlus Nord' },
  { id: 4, name: 'Google Pixel' },
  { id: 5, name: 'Nokia Lumia' }
];

const ProductFilterList =()=> {
    const [searchTerm , setSearchTerm] = useState ("")

    const filterProducts = ProductData.filter(product=>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    return (
        <div>
            <h2>Filter Product List </h2>

            <input
            type = "text"
            value = {searchTerm}
            placeholder = "Search Product"
            onChange = {(e)=> setSearchTerm(e.target.value)}
            />
            <ul> {filterProducts.length > 0 ? ( 
                filterProducts.map(product=>(
                    <li key={product.id}>
                        {product.name}
                    </li> ))) : (
                        <li style={{color : "brown"}}>No List Found</li>
                    )
                }

                </ul>
        </div>
    )
};
export default ProductFilterList;