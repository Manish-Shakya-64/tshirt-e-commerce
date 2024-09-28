import React from 'react'
import { Rate } from 'antd'

const ProductCard = ({ name, image, originalPrice, salePrice, rating, onSale }) => {
    return (
        <article className="group relative max-w-sm w-full mx-auto">
            <div className="relative aspect-square overflow-hidden">
                <img
                    src={image}
                    alt={name}
                    className="object-cover w-full h-full transition-transform ease-linear duration-400 group-hover:scale-110"
                />
                <button
                    className="absolute bottom-0 w-full bg-black text-white text-xs md:text-sm py-1 md:py-2 md:px-4 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100 hover:bg-[#1d1d1d] hover:text-white"
                    onClick={() => alert('Quick View Clicked')}
                >
                    Quick View
                </button>
            </div>
            <div className="mt-4 md:mt-8 flex flex-col items-center text-center">
                <h3 className="text-xs md:text-lg font-medium text-text-primary">{name}</h3>
                <div className="mt-1 flex items-center">
                    {onSale && (<p className="mr-2 text-sm font-medium text-text-ternary">${salePrice.toFixed(2)}</p>
                    )}
                    <p className={`text-sm font-medium  ${onSale ? 'line-through text-gray-500' : 'text-text-ternary'}`}>${originalPrice.toFixed(2)}</p>
                </div>
                <div className="mt-1 flex items-center">
                    <Rate disabled defaultValue={rating} allowHalf className='text-xs md:text-lg' />
                    <span className="ml-1 text-sm text-text-ternary">({rating.toFixed(1)})</span>
                </div>
            </div>
            {onSale && (
                <span className="absolute w-[35px] h-[35px] md:w-12 md:h-12 -top-3 -right-2 bg-mehndi text-white  text-[10px] md:text-[14px] font-light rounded-full p-2 flex items-center justify-center">
                    Sale!
                </span>
            )}
            {/* Best Seller Tag */}
            <span className="absolute top-2 left-0 z-40 text-white bg-red-600 w-24 h-6 text-center text-xs font-semibold rotate-[-45deg] -translate-x-7 translate-y-3">
                Best Seller
            </span>        </article>
    )
}

export default ProductCard