import React, {useEffect} from 'react'
import {useAuthenticatedFetch} from "../hooks/index.js";

export function TopBar() {

    let fetch = useAuthenticatedFetch();

    useEffect(() => {
        const fetchStoreInfo = async () => {
            try {
                const response = await fetch("/api/store/info");
                console.log('response', response);
                if (response.ok) {
                    if (response.headers.get("Content-Type")?.includes("application/json")) {
                        const data = await response.json();
                        console.log('Store Info:', data);
                    } else {
                        const textData = await response.text();
                        console.error('Non-JSON response received:', textData);
                    }
                } else {
                    throw new Error(`HTTP error: The status is ${response.status}`);
                }
            } catch (error) {
                console.error('Error fetching store info:', error);
            }
        };

        fetchStoreInfo();
    }, [fetch]);

    return (<div className='topbar-section'>
        <div className="logo-block">
            <h1 className='text-bold h4'>Shop Dashboard</h1>
        </div>
    </div>)
}