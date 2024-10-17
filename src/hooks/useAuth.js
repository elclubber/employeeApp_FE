import { useEffect, useState } from 'react';
import APIConstants from '../constants/APIConstants';

const useAuth = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(
        JSON.parse(localStorage.getItem('isAuthenticated')) || false  // Retrieve from localStorage
    );

    useEffect(() => {
        const checkAuthStatus = async () => {
            try {
                const response = await fetch(APIConstants.LOGIN.replace('/login', '/check-auth'), {
                    method: 'GET',
                    credentials: 'include',  // Ensure cookies are included
                });

                const result = await response.json();
                if (result.loggedIn) {
                    setIsAuthenticated(true);
                    localStorage.setItem('isAuthenticated', JSON.stringify(true));  // Save to localStorage
                } else {
                    setIsAuthenticated(false);
                    localStorage.removeItem('isAuthenticated');  // Remove from localStorage if not authenticated
                }
            } catch (err) {
                console.error('Authentication check failed:', err);
                setIsAuthenticated(false);
                localStorage.removeItem('isAuthenticated');  // Handle errors by clearing auth state
            }
        };

        checkAuthStatus();
    }, []);

    return isAuthenticated;
};

export default useAuth;
