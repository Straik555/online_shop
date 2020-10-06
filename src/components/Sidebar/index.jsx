import React from 'react';

import BasketCart from "../BasketCart";
import Search from "../Search";
import Categories from "../Categories";

const Sidebar = () => {
    return (
        <>
            <BasketCart />
            <Search />
            <Categories />
        </>
    )
}

export default Sidebar;