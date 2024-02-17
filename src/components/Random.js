import Spinner from './Spinner';
import useGif from '../hooks/useGif';

const Random = () => {
    const { gif, loading, fetchData } = useGif()
    return (
        <div className='w-1/2 bg-green-500 rounded-xl border border-black flex flex-col mt-[90px] 
        gap-y-5 items-center'>
            <h1 className='mt-[15px] text-2xl underline uppercase font-bold '>A Random Gif</h1>
            {loading ? (<Spinner />) : <img src={gif} width="450" alt='gif' />}
            <button onClick={() => fetchData()}
                className='w-10/12 bg-white text-lg py-2 rounded-lg mb-[20px]'>GENERATE</button>
        </div>
    )
}

export default Random 