import React from 'react';
import BasketCart from './Basket.Cart';
import Categories from './Categories';
import Search from './Search';

const Sidebar: React.FC = () => {
    return (
        <div>
            <BasketCart />
            <Search />
            <Categories />
        </div>
    );
};

export default Sidebar;