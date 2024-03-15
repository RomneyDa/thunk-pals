import React from 'react'
import { topTestimonials, bottomTestimonials, Testimonial } from './testimonial-data'

const TestimonicalCard = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <div className='p-6 bg-white rounded-[20px] min-w-[450px]'>
      <p className='font-bold text-primary-foreground text-lg'>{`“${testimonial.testimonial}”`}</p>
      <p className='text-black font-bold mt-1'>{testimonial.name}</p>
      <p className='text-muted-foreground font-semibold'>{testimonial.company}</p>
    </div>
  )
}
const MovingTilesTestimonials = () => {
  return (
    <div className='flex flex-col gap-6 w-screen overflow-hidden bg-card pt-20 pb-16 px-6'>
      <div className='flex'>
        <div className='testimonial-flow flex flex-row gap-6'>
          {topTestimonials.map((testimonial, index) => (<TestimonicalCard testimonial={testimonial} key={testimonial.company} />))}
        </div>
      </div>
      <div className='flex'>
        <div className='testimonial-flow-reverse flex flex-row gap-6'>
          {bottomTestimonials.map((testimonial, index) => (<TestimonicalCard testimonial={testimonial} key={testimonial.company} />))}
        </div>
      </div>
    </div>
  )
}

export default MovingTilesTestimonials
