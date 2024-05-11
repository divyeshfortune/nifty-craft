import React from 'react'
import Link from 'next/link'

const AboveCraft = () => {
  return (
    <section className="bg-[url('/images/above-bg.png')] bg-no-repeat bg-cover h-full w-full">
        <div className='container'>
            <div className="text-center">
                <h2 className='pt-12 pb-16'>What is Nifty Craft?</h2>
                <p className='text-18 text-white max-w-[726px] m-auto'><span className='font-bold'>Watch This:</span> dolor sit amet, consectetur adipiscing elit. Duis ut diam convallis, tempor lorem non,aliquam nunc. Integer a sem eros. Sed quam <u>neque, viverra a tellus in, dignissim</u> ornare turpis. Etiam diam felis, molestie vitae euismod eget.</p>
                <div>
                    <Link href="#" className="btn_white">Learn More</Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboveCraft