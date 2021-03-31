import React from 'react';
import Categories from './Categories';
import MenuItems from './MenuItems';
import portfolios from './allportfolios';
import { useState } from 'react';




const allCategories = ['All', ...new Set(portfolios.map(item => item.category))];

function PortfoliosPage() {
    const [categories, setCategories] = useState(allCategories);
    const [menuItems, setMenuItems] = useState(portfolios);

    const filter = (category) =>{
        if(category === 'All'){
            setMenuItems(portfolios)
            return;
        }
        const filteredData  = portfolios.filter((item)=>{
            return item.category === category;
        })
        setMenuItems(filteredData);
    }

    return (
        <div id="projects">
        <div className="Portfolio-page">
            <h1 className="pt-3 text-center font-details pb-3">Projects</h1>
                <Categories filter={filter} categories={categories} />
                <MenuItems menuItem={menuItems} />
            </div>
  </div>
    )
}

export default PortfoliosPage;