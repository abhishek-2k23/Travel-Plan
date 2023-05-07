import React,{useState} from 'react';
const Card = ({image,info,id,price,name, removeCard}) =>
{
    const [readmore,setReadmore] = useState(false);
    let discription = readmore ?info: `${info.substring(0,200)}....`;
    function readmoreHandler(){
        setReadmore(!readmore);
    }
    return (
        <div className='card flex flex-col gap-y-6 gap-x-5 md:gap-x-0 border border-slate-200 shadow-xl w-[400px] p-2 rounded-md  items-center justify-start align-baseline'>
                <div className=''>
                    <img src={image} alt='img' className='image w-[380px] h-[380px] rounded-sm'></img>
                </div>
                

                <div className="Tour-Info pl-1 text-justify -mt-2">
                    <div className='Toor-details'>
                        <h4 className='Toor-price text-green-600 font-bold text-xl'>₹ {price}</h4>
                        <h4 className='Toor-name font-bold text-2xl'>{name}</h4>
                    </div>    
                    <div className="discription text-lg text-left">
                        {discription}
                        <span onClick={readmoreHandler} className='readmore-btn text-blue-500 capitalize text-lg cursor-pointer'>
                            {readmore ? `show less`:`read more`}
                        </span>
                    </div>
                </div>
                <button className='Not-interested-btn bg-[#f0a0a1] border border-[#c35d5e] font-[700] text-lg hover:bg-[#f00] hover:text-white rounded-md w-10/12 py-1 mb-2 tracking-wide' onClick={() => removeCard(id)}>
                    Not Interested
                </button>
        </div>
        
    )
}
export default Card;