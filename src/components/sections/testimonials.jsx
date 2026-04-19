import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import { RiArrowLeftSLine, RiArrowRightSLine } from '@remixicon/react';
import { testimonialsData } from '../../utlits/fackData/testimonialsData';
import SlideUp from '../../utlits/animations/slideUp';


const Testimonials = () => {
    if (!testimonialsData || testimonialsData.length === 0) return null;

    return (
        <section className="py-20 md:py-28">
            <div className="container-main">
                <SlideUp>
                    <div className="text-center mb-12">
                        <span className="text-accent text-sm font-medium uppercase tracking-wider">Testimonials</span>
                        <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mt-2">What Clients Say</h2>
                    </div>
                </SlideUp>

                <Swiper
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        767: { slidesPerView: 2 },
                    }}
                    spaceBetween={24}
                    loop={true}
                    navigation={{
                        nextEl: ".testimonial-next",
                        prevEl: ".testimonial-prev",
                    }}
                    modules={[Navigation]}
                >
                    {testimonialsData.map(({ id, name, position, review, src }) => (
                        <SwiperSlide key={id}>
                            <Card img={src} name={name} position={position} review={review} />
                        </SwiperSlide>
                    ))}
                </Swiper>

                <SlideUp>
                    <div className="flex justify-center gap-3 mt-8">
                        <button className="testimonial-prev w-10 h-10 rounded-full border border-border text-text-secondary hover:text-accent hover:border-accent transition-colors flex items-center justify-center" aria-label="Previous testimonial">
                            <RiArrowLeftSLine size={20} />
                        </button>
                        <button className="testimonial-next w-10 h-10 rounded-full border border-border text-text-secondary hover:text-accent hover:border-accent transition-colors flex items-center justify-center" aria-label="Next testimonial">
                            <RiArrowRightSLine size={20} />
                        </button>
                    </div>
                </SlideUp>
            </div>
        </section>
    )
}

export default Testimonials


const Card = ({ img, name, position, review }) => {
    return (
        <SlideUp>
            <div className="bg-surface border border-border rounded-xl p-6">
                <div className="w-14 h-14 rounded-full overflow-hidden mb-4">
                    <img src={img} alt={name} className="w-full h-full object-cover" />
                </div>
                <p className="text-sm text-text-secondary leading-relaxed">{review}</p>
                <div className="mt-4 pt-4 border-t border-border">
                    <h5 className="text-sm font-semibold text-text-primary">{name}</h5>
                    <span className="text-xs text-text-muted">{position}</span>
                </div>
            </div>
        </SlideUp>
    )
}
