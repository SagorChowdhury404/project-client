// allDataLoad.js
import { useState, useEffect } from 'react';
import HotJobCard from '../../pages/HotJob/HotJobCard';

function AllDataLoad(url) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    console.log(data, loading, error);


    useEffect(() => {
        const getData = async () => {
            try {
                const res = await fetch('http://localhost:5000/jobs');
                if (!res.ok) throw new Error('Failed to fetch data');
                const result = await res.json();
                setData(result);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        getData();
    }, [url]);

    return (
        <div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-10'>
                {
                    data.map(job => <HotJobCard key={job._id} job={job}></HotJobCard>)
                }
            </div>
        </div>
    )
}


export default AllDataLoad;
