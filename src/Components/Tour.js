import Card from './Card';
function Tour({tours,removeCard}){

    return(
        <div className='container flex flex-col items-center mt-5 justify-center w-11/12'>
            <div >
                <h1 className='title text-4xl py-4 px-5 mb-5 rounded-lg font-bold border-[5px] underline font-mono'>Explore Like a Local</h1>
            </div>
            
            <div className='cards flex flex-wrap gap-10 justify-center items-center'>
                {
                    tours.map((tour) => {
                        return <Card {...tour} removeCard={removeCard}></Card>
                    })
                }
            </div>
        </div>
    )
}
export default Tour;