import { ThreeDots } from 'react-loader-spinner';

const Loader = () => {
    return (
        <section className='loading'>
            <ThreeDots 
            height="80" 
            width="80" 
            radius="9"
            color="#00BFA6" 
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
            />
        </section>
    )
}

export default Loader;