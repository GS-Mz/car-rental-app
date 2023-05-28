import { makers } from '../constants'


const Makers = () => {
    return(
        <div className='flex gap-20 mt-24 justify-center flex md-max:flex-wrap sm-max:px-2 md-max:px-12'>
            {
                makers.map((maker, index) => (
                    <div className='w-16' key={maker.name + index}>
                    <img className='object-contain grayscale hover:grayscale-0' key={maker.name} src={maker.logo}/>
                    </div>
                ))
            }
        </div>
    )
}

export default Makers 