import { useState, useEffect } from 'react';

const useApi = (url, method = 'GET', body = null) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch(url, {
                    method,
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: body ? JSON.stringify(body) : null,
                });

                // Check if response is JSON
                const contentType = response.headers.get('content-type');
                if (!response.ok) throw new Error(`Error: ${response.statusText}`);

                if (contentType && contentType.includes('application/json')) {
                    const result = await response.json();
                    setData(result);
                } else {
                    throw new Error('Unexpected response format: Not JSON');
                }
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url, method, body]);

    return { data, error, loading };
};

export default useApi;
