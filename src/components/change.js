import React from 'react';
import { useState } from 'react';
import { Sale } from './Sale';
import { Buy } from './Buy';




export function Change(){
    const [modallsOpen,SetModallsOpen]=useState(false);

    function ChangeSale(){
        SetModallsOpen(true);
    }

    function ChangeBuy(){
        SetModallsOpen(false);
    }


    return (
        <div>
            <button className='Sale' onClick={ChangeSale}>Sale</button>
            <button className='Buy' onClick={ChangeBuy}>Purchase</button>
            {modallsOpen? <Sale/>:<Buy/>}
        </div>

    );
}