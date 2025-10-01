import img1 from './assets/img1.webp'
import img2 from './assets/img2.webp'
import img3 from './assets/img3.webp'
import img4 from './assets/img4.webp'
import img5 from './assets/img5.webp'
import img6 from './assets/img6.webp'
import img7 from './assets/img7.webp'
import img8 from './assets/img8.webp'
function Trends(){

    const movies=[
        {
           "id" : 1,
           "url": img1,
        },

         {
           "id" : 2,
           "url": img2,
        },

         {
           "id" : 3,
           "url": img3,
        },

         {
           "id" : 4,
           "url": img4,
        },
        {
           "id" : 5,
           "url": img5,
        },

         {
           "id" : 6,
           "url": img6,
        },

         {
           "id" : 7,
           "url": img7,
        },

         {
           "id" : 8,
           "url": img8,
        }
    ]
    return (
        <div className='pt-30 pb-10'>
            <div className='font-bold text-2xl'>Trending Now</div>
            <div className='flex gap-10 overflow-scroll hide-scrollbar'>
               {movies.map((movie,index)=>{
                   return (
                     <div key={index} className='pt-5 relative'>
                         <img className='rounded-2xl min-w-[150px]' src={movie.url} alt=""/>
                          <div className="text-9xl font-bold absolute bottom-0 left-[-25px] text-stroke-white">
                            {movie.id}
                          </div> 
                     </div>
                   );
               })}
                
            </div> 
        </div>
    )
}

export default Trends;
