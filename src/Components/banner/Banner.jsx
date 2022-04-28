import React from 'react';
import {SwiperSlide,Swiper} from "swiper/react"
import "swiper/css"
const SlideItem = [
    {
        id:1,
        img:"https://media.glamour.com/photos/61fd580adba78af875cb03db/master/pass/black%20women-owned%20candle%20brands.jpg"
    },
    {
        id:2,
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSeRF1EB_eoUDkW98Gm1e7rVqYH3sfWioalWyjMHzNKD6Hs3o44kIagq6ONr1d5u7o-gI&usqp=CAU"
    }
]
const Banner = () => {
    return (
        <section className="banner h-[290px] md:h-[530px] bg-tranparent page-container mb-5 overflow-hidden">
             <Swiper grabCursor={"true"} slidesPerView={"auto"}>
             {SlideItem && SlideItem.length > 0 && SlideItem.map((item)=>{
                 return (
                    <SwiperSlide key={item.id}>
                        <Banneritem  data={item}></Banneritem>
                    </SwiperSlide>
                 )
             })}
               
                
             </Swiper>
        </section>
    );
};

export default Banner;
function Banneritem({data}){
    console.log(data.img)
    return (
        <div className="relative w-full h-full">
            <div className="absolute inset-0   bg-gradient-to-t overlay from-[rgba(0,0,0,0.4)] to-[rgba(0,0,0,0.4)]"></div>
            <img src={data.img} alt="" className="object-center w-full h-full " />
            <div className="absolute md:w-[50%] w-[80%] md:top-[40%] text-white md:left-1/4 md:-translate-x-1/4 top-[50%] -translate-y-1/4 md:-translate-y-0 text-center md:text-left left-[50%] -translate-x-2/4 ">
                <h2 className="mb-3 text-3xl font-bold md:mb-5 md:text-6xl">AN_HOMEMADE</h2>
                <div className="flex items-center justify-center mb-4 text-xs md:block md:text-lg md:mb-8 gap-x-3">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                   </p>
                </div>
                <button className="w-auto shadow-2xl px-6 py-3 font-medium text-white bg-[#D7A86E] rounded-lg " >Show now</button>
            </div>
      </div> 
    )
}