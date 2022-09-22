import React, { useEffect } from 'react';
import Link from 'next/link';
import { useStateContext } from '../context/StateContext';
import toast from 'react-hot-toast';

const Canceled = () => {
    const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();

    useEffect(() => {
        localStorage.clear();
        setCartItems([]);
        setTotalPrice(0);
        setTotalQuantities(0);
    }, []);

    return (
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '50vh'}}>
        <Link href="/">
            <button type="button" width="300px" className="btn">
                Return to Main Store
            </button>
        </Link>
    </div>
  )

}

export default Canceled

