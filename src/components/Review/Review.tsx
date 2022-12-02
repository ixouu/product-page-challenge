import {reviews} from '../../data/data';

type AverageReturnType = number;

const Reviews = () => {

    // calculate review average
    const average = ():AverageReturnType => {
        if (reviews.length === 0){
            return 0
        }else {
            const reduced = reviews.reduce((a,b) => a+b)/reviews.length
            return Number(reduced.toFixed(1))
        }
    };
    
    // store reviews length 
    let reviewsBackgroundLength = [[1,0],[2,0],[3,0],[4,0],[5,0]];

    // calculate % of rating
    const calcBackgroundWidth = () =>{
        const totalNumOfReviews:number = reviews.length
        reviews.forEach(note =>{
            switch (note) {
                case 0: 
                    return 
                case 1:
                    reviewsBackgroundLength[0][1] += Math.round(100/totalNumOfReviews)
                    break;
                case 2:
                    reviewsBackgroundLength[1][1] += Math.round(100/totalNumOfReviews)
                    break;
                case 3:
                    reviewsBackgroundLength[2][1] += Math.round(100/totalNumOfReviews)
                    break;
                case 4:
                    reviewsBackgroundLength[3][1] += Math.round(100/totalNumOfReviews)
                    break;
                case 5:
                    reviewsBackgroundLength[4][1] += Math.round(100/totalNumOfReviews)
                    break;
                default:
                    break;
            }
        })
    }   
    calcBackgroundWidth();

  return (
    <section className='px-10 mt-4 w-full lg:w-1/2 xl:w-full lg:mt-8 lg:ml-6 lg:px-6 xl:px-16  '>
        <h3 className='font-semibold text-xl uppercase xl:w-1/2 xl:m-auto'>Avis (<a href='#' className='underline' aria-label='Ouvre la liste des avis'>{reviews.length}</a>)</h3>
        <span className='text-2xl font-bold xl:w-1/2 xl:m-auto block'>{average()} / 5</span>
        <ul className='flex flex-col-reverse w-full xl:w-1/2 xl:m-auto'>
            {reviewsBackgroundLength.map((note, index) =>{
                return <li key={index} className='
                            flex
                            items-center
                            '>
                        {note[0]} 
                            <div className='h-1 w-full bg-slate-300 mx-2'>
                                <div className='h-1 bg-gray-900' style={{ width : `${note[1]}%`}}></div></div>
                        </li>
            })}
         
        </ul>
    </section>
  )
}

export default Reviews