import React from 'react'
import ProductCard from '../components/Cards/ProductCard'
import products from '../utils/products'
import Pagination from '../components/Shared/Pagination'

const Collection = () => {
    return (
        <div className='w-full bg-bg-secondary pt-10'>
            <div className='mx-auto md:w-[92%] bg-bg-primary'>
                <div className='px-14'>
                    <h1 className='text-4xl md:text-7xl text-mehndi font-medium py-14'>Shop</h1>
                    <div className="">
                        <div className='w-full  md:p-0 m-auto grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-10  md:gap-y-14'>
                            {products.map((item, index) => {
                                return <ProductCard key={index} name={item.name} image={item.image} originalPrice={item.originalPrice} salePrice={item.salePrice} rating={item.rating} onSale={item.onSale} />
                            })}
                        </div>
                    </div>
                    <div className='w-full py-12'>
                        <Pagination  totalPages={10}/>
                    </div>
                </div>
            </div>
            <div></div>
        </div>

    )
}

export default Collection