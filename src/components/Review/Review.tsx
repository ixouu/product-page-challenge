import reviews from '../../data/reviews'

const Reviews = () => {

    // calculate review average
    const average = () => {
        if (reviews.length === 0){
            return 0
        }else {
            const reduced = reviews.reduce((a,b) => a+b)/reviews.length
            return reduced.toFixed(1)
        }
    }
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
                    reviewsBackgroundLength[0][1] += Math.round(100/totalNumOfReviews)/2
                    break;
                case 2:
                    reviewsBackgroundLength[1][1] += Math.round(100/totalNumOfReviews)/2
                    break;
                case 3:
                    reviewsBackgroundLength[2][1] += Math.round(100/totalNumOfReviews)/2
                    break;
                case 4:
                    reviewsBackgroundLength[3][1] += Math.round(100/totalNumOfReviews)/2
                    break;
                case 5:
                    reviewsBackgroundLength[4][1] += Math.round(100/totalNumOfReviews)/2
                    break;
                default:
                    break;
            }
        })
    }   
    calcBackgroundWidth();

  return (
    <section className='mt-4 lg:mt-8 lg:px-6 xl:px-16 2xl:px-32' >
        <h4 className='font-semibold text-xl'>Avis</h4>
        <span className='text-2xl font-bold'>{average()} / 5</span>
        <ul className='flex flex-col-reverse w-full'>
            {reviewsBackgroundLength.map((note, index) =>{
                return <li key={index} className='
                            flex
                            items-center
                            '>
                        {note[0]} 
                            <div className='h-1 w-full bg-slate-300 mx-2'>
                                <div className='h-1 bg-black' style={{ width : `${note[1]}%`}}></div></div>
                        </li>
            })}
         
        </ul>
    </section>
  )
}

export default Reviews