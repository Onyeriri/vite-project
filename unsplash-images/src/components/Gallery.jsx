import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { customFetch } from '../../hooks/axios';
import { useGlobalContext } from '../../context/context';
import { toast } from 'react-toastify';

const Gallery = () => {
    const { userInput , setUserInput } = useGlobalContext();

    const { data, isError, isInitialLoading } = useQuery({
        queryKey: ['images'],
        queryFn: async () => {
            const { data } = await customFetch.get(`/photos?page=1&query=${userInput}&client_id=${import.meta.env.VITE_CODE_BOOK}`);

            const { results } = data;

            return results;
        },
        // use onSuccess to setUserInput to set userInput state to an empty string and enable page render
        onSuccess: () => {
            setUserInput('');
            toast.success('Success');
        },
        enabled: !!userInput,
    });

    
    
    const displayImages = data?.map((item) => {
        const { id, urls, alt_description
    } = item;
        return (<img key={id} className='img' src={urls?.small_s3} alt={alt_description} />);
    });

    if (isInitialLoading) {
        return <p className='loading'></p>
    }

    if (isError) {
        toast.error('Something went wrong')
    }

    return (
        <section className='image-container'>
            {data?.length < 1 ? <h4 style={{ textAlign: 'center'}}>No image found!!!</h4> : displayImages}
        </section>
  )
}

export default Gallery