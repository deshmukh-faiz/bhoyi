import React from 'react'
import "../styles/JournalSection.css"
import { Link } from 'react-router-dom'

const JournalSection = () => {
   
    return (
        <div className='jsMainParent mt-28'>

            <div className='jsLeft'>
                <img src='https://cdn.shopify.com/s/files/1/0081/7374/8305/files/VIOLETTA_Journal_Heading_2-01_2500x2500_6e692e60-90cb-4cd0-9006-a6f1d09fe1c4_360x.png?v=1613561992' alt='hey' className=' w-72' />
                <p className=' mt-8'> Discover the world of natural through our <br />
                    eyes! From skincare tips, lifestyle and <br />
                    environmental hacks to inspirational<br />
                    interviews! Explore it all.</p>

                <Link to={`/journal/april`}>
                    <button className='readBtn '> READ THE JOURNAL </button>
                </Link>
            </div>

            <div className='jsRight flex flex-row gap-24'>

                <Link to={`/journal/april`}>
                    <img src='https://img.freepik.com/free-photo/photo-young-woman-with-beauty-long-curly-hair_186202-8148.jpg?t=st=1716374303~exp=1716377903~hmac=e37c65e3872328c3e64a997c2b54dc39a63902cfce06985567427ce05f6b4d47&w=740' alt='hey' className='jsImg rounded-xl' />
                </Link>

                <img src='https://img.freepik.com/free-photo/beautiful-young-smiling-woman-with-long-brown-hair_186202-7975.jpg?t=st=1716374360~exp=1716377960~hmac=996189b09e34fea89ea96ae1778c3f95b49753d36a9689d36d0a2cc82f3da4dc&w=740' alt='hey' className='jsImg rounded-xl' />


            </div>

            <div className='jsRightText flex flex-row gap-36 relative font-bold'>
                <p> APRIL BLOG: PROTECTIVE HAIRCARE <br />  STYLE AND TIPS </p>
                <p> VIOLETTAS GUIDE TO A BACKYARD BBQ</p>


            </div>
        </div>
    )
}

export default JournalSection