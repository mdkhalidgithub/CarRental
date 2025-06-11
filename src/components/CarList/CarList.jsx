import React from 'react'
import jeep from "../../assets/car/jeep.png";
import scorpio from "../../assets/car/scorpio.png";
import scorpio2 from "../../assets/car/scorpio2.png";


const CarListData = [
    {
        name: "BMW UX",
        price: 100,
        image: jeep,
        aosDelay: "0",
    },
    {
        name: "KIA UX",
        price: 100,
        image: scorpio,
        aosDelay: "500",
    },
    {
        name: "BMW UX",
        price: 100,
        image: scorpio2,
        aosDelay: "1000",
    },
]

function CarList() {
  return (
    <div className='pb-24 pt-12 bg-white dark:bg-dark
    dark:text-white'>
        <div className="container">
            {/*heading*/}
            <h1 className='text-3xl sm:text-4xl
            font-semibold font-serif mb-3'>Lorem ipsum, dolor</h1>
            <p
            data-aos="right"
            className='text-sm pb-10'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Ab placeat doloribus facere.
                </p>
                {/*CarListing cards*/}
                <div>

                    <div
                     className='grid grid-cols-1 
                    sm:grid-cols-2 md:grid-cols-3 gap-16'>
                        {CarListData.map((data)=> {
                            return (
                                <div
                                 data-aos="fade-up"
                                 data-aos-delay={data.aosDelay}
                                className='space-y-3 border-2 
                                border-grey-300 hover:border-primary p-3
                                rounded-xl relative group'>
                                    <div className='w-full h-[120px]'>

                                         <img
                                         className='w-full h-[120px]
                                    object-contain  sm:translate-x-8 
                                    duration-700 group-hover:translate-x-16'
                                     src={data.image} alt=''/> 
                                    </div>
                                    <div className='space-y-2'>
                                        <h1 className='text-primary
                                        font-semibold'>{data.name}</h1>
                                    
                                    <div className='flex justify-between items-center
                                    text-xl font-semibold'>
                                        <p>${data.price}/Day</p>
                                        <a href="#">Details</a>
                                    </div>
                                </div>
                                <p className='text-xl font-semibold
                                absolute top-0 left-3'>12km</p>
                                </div>
                                

                            );


                            })
                        }
                    </div>
                </div>
                {/* end of car listing cards */ }
                <div className='grid place-content-center mt-8'>
                    <button data-aos="right" 
                     className ="button-outline">Get Started</button>
                </div>
        </div>
    </div>
  )
}

export default CarList