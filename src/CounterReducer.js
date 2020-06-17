import React, { createContext } from 'react';

const counterReducer = (state, action) => {
    switch (action) {
        case 'INCREMENT':
            return state - 1
    }
}


export default counterReducer;