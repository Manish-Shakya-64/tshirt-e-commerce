import React from 'react'
import { Avatar } from "antd";
import { Rate } from 'antd'
import user from "../../assets/images/user.jpeg"

const ReviewCard = () => {
    return (
        <div className='flex flex-col gap-4 border border-text-ternary px-6 py-4  text-text-ternary'>
            <Rate disabled defaultValue={4.5} allowHalf className='text-xs md:text-lg' />
            <p className='text-[15px]'>
                "I love the quality of the products. The fabric is soft and comfortable. The designs are unique and stylish. I would definitely recommend this brand to my friends and family."
            </p>
            <div className="flex items-center gap-4">
                <Avatar size={50} src={user} />
                <p>Jhon Doe</p>
            </div>
        </div>
    )
}

export default ReviewCard