import React from 'react';
import Navbar from '../components/Shared/Navbar';
import heroImage from '../assets/images/hero-image.jpg';
import t1 from '../assets/images/t1.jpg';
import ProductCard from '../components/Cards/ProductCard';
import products from '../utils/products';
import { Link,useNavigate } from 'react-router-dom';
import heroImage2 from '../assets/images/hero-image2.webp';
import heroImage3 from '../assets/images/hero-image3.webp';
import ReviewCard from '../components/Cards/ReviewCard';

const Home = () => {
    const navigate = useNavigate();
    const handlePageChange = (link) => {
        navigate(link)
    }
    return (
        <>
            {/* <Navbar /> */}
            <div className='w-full lg:w-[92%] h-min m-auto'>
                <div className='w-full h-auto relative bg-cover bg-center'>
                    <img src={heroImage} alt="" />
                    <div className='absolute w-full top-1/2 lg:left-16 px-6 transform -translate-y-1/2 flex flex-col lg:w-2/5 text-center md:text-left lg:text-left'>
                        <h1 className='text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-white font-medium tracking-wider leading-tight'>
                            Love the Planet we live on
                        </h1>
                        <p className='text-white text-[15px] font-light md:text-xl mt-6 md:mt-8'>
                            Each stitch blends elegance with comfort, as the fabric drapes with timeless style and grace.
                        </p>
                        <div className='flex flex-col md:flex-row md:gap-4 mt-8 lg:mx-0'>
                            <Link to='/men' className='bg-container-bg text-text-primary text-sm font-medium px-9 py-4 hover:bg-hover-bg hover:text-bg-primary transition-all ease-in-out duration-300' >
                                SHOP MEN
                            </Link>
                            <Link to='/women' className='bg-container-bg text-text-primary text-sm font-medium px-9 py-4 mt-8 md:mt-0 hover:bg-hover-bg hover:text-bg-primary transition-all ease-in-out duration-300'>
                                SHOP WOMEN
                            </Link>
                        </div>
                    </div>
                </div>

                <div className='w-full md:w-[90%] md:mx-auto mt-20 grid grid-cols-1 md:grid-rows-1 md:grid-cols-2 md:gap-12 pt-16 border-t border-gray-300 space-y-10 md:space-y-0'>
                    <img src={t1} alt="" className='w-[90%] md:w-full m-auto md:m-0' />
                    <div className='w-[90%] md:w-full m-auto flex flex-col justify-center space-y-4 md:space-y-8'>
                        <h5 className='text-md md:text-lg font-medium text-orange'>Our Story</h5>
                        <h1 className='text-3xl md:text-[35px] lg:text-[40px] text-text-primary font-medium tracking-wider leading-tight'>
                            Selected materials designed for comfort and sustainability
                        </h1>
                        <p className='text-[17px] text-text-ternary'>
                            Crafted with care and precision, our clothing blends timeless elegance with modern comfort. Each piece is designed to inspire confidence and effortless style.
                        </p>
                    </div>
                </div>

                <div className='w-full mt-20 flex flex-col items-center '>
                    <div className='w-full m-auto px-8 md:px-0 md:w-[90%] md:my-8 flex justify-between'>
                        <h1 className='text-lg md:text-3xl text-text-primary font-normal tracking-wider'>
                            Our Best Sellers
                        </h1>
                        <Link to='/products' className='text-orange hover:underline text-sm md:text-lg'>View All Products</Link>
                    </div>
                    <div className='w-full p-8 md:p-0 m-auto md:w-[90%] grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-10'>
                        {products.map((item, index) => {
                            return <ProductCard key={index} name={item.name} image={item.image} originalPrice={item.originalPrice} salePrice={item.salePrice} rating={item.rating} onSale={item.onSale} />
                        })}
                    </div>

                </div>

                <div className='mt-20 grid md:grid-cols-2 items-center gap-3 md:gap-7'>

                    <div className='relative w-full'>
                        <img src={heroImage2} alt="" className='w-full   object-cover aspect-video md:aspect-square' />
                        <div
                            className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-30 inset-1 z-40 flex flex-col items-center justify-center gap-6'>
                            <h1 className='text-lg md:text-4xl text-white z-50 tracking-wider'>MEN</h1>
                            <button className='px-7 py-3  border-2 border-white text-white hover:text-black hover:bg-white transition-all ease-in-out font-medium'>SHOP MEN</button>
                        </div>
                    </div>
                    <div className='relative w-full'>
                        <img src={heroImage3} alt="" className='w-full   object-cover aspect-video md:aspect-square' />
                        <div
                            className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-30 inset-1 z-40 flex flex-col items-center justify-center gap-6'>
                            <h1 className='text-lg md:text-4xl text-white z-50 tracking-wider'>WOMEN</h1>
                            <button className='px-7 py-3  border-2 border-white text-white hover:text-black hover:bg-white transition-all ease-in-out font-medium'>SHOP WOMEN</button>
                        </div>
                    </div>
                </div>

                <div className='w-full mt-20 flex flex-col items-center '>
                    <div className='w-full m-auto px-8 md:px-0 md:w-[90%] md:my-8 flex justify-between'>
                        <h1 className='text-lg md:text-3xl text-text-primary font-normal tracking-wider'>
                            New Arraiwals
                        </h1>
                        <Link to='/products' className='text-orange hover:underline text-sm md:text-lg'>View All New Arraiwals</Link>
                    </div>
                    <div className='w-full p-8 md:p-0 m-auto md:w-[90%] grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-10'>
                        {products.map((item, index) => {
                            return <ProductCard key={index} name={item.name} image={item.image} originalPrice={item.originalPrice} salePrice={item.salePrice} rating={item.rating} onSale={item.onSale} />
                        })}
                    </div>

                </div>

                <div className='mt-20 w-full'>
                    <h1 className='text-center text-2xl md:text-4xl md:pb-8 font-medium tracking-wide text-text-primary'> Our Customers speak for us
                    </h1>
                    <div className='w-full p-8  md:w-[98%] md:m-auto md:p-0 grid  sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 '>
                        <ReviewCard />
                        <ReviewCard />
                        <ReviewCard />
                    </div>
                </div>


            </div>
        </>
    );
};

export default Home;
