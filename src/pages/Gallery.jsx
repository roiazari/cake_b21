import React, { useContext, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/Card';
import cakesArr from '../data/cakes.json';
import { myContext } from '../App';

const Gallery = () => {
    const { addProducts } = useContext(myContext);

    // 1. State עבור ערכי הטופס (מה שהמשתמש מקליד/בוחר)
    const [searchQuery, setSearchQuery] = useState("");
    const [searchCriteria, setSearchCriteria] = useState("name"); // ברירת מחדל: חיפוש לפי שם

    // 2. State עבור הרשימה שמוצגת בפועל (מתעדכן רק בלחיצה)
    const [filteredCakes, setFilteredCakes] = useState(cakesArr);

    // 3. פונקציית החיפוש שרצה רק בלחיצת כפתור
    const handleSearch = () => {
        const results = cakesArr.filter((cake) => {
            const value = searchQuery.toLowerCase();

            switch (searchCriteria) {
                case "name":
                    return cake.name.toLowerCase().includes(value);
                case "ingredient":
                    return cake.ingredients.toLowerCase().includes(value);
                case "calories":
                    // עד מספר קלוריות מסוים
                    return cake.calories <= (parseInt(value) || Infinity);
                case "price":
                    // עד מחיר מסוים
                    return cake.price <= (parseFloat(value) || Infinity);
                default:
                    return true;
            }
        });
        setFilteredCakes(results);
    };

    return (
        <div>
            <Header title="Our Products" />
            
       {/* תפריט החיפוש */}
<div className="search-container">
    <div className="search-wrapper">
        <select 
            className="search-select"
            value={searchCriteria} 
            onChange={(e) => setSearchCriteria(e.target.value)}
        >
            <option value="name">Product name</option>
            <option value="ingredient">Ingridient</option>
            <option value="calories">Calories</option>
            <option value="price">Budget</option>
        </select>

        <input 
            type="text" 
            className="search-input"
            placeholder="type..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
        />

        <button className="search-button" onClick={handleSearch}>
            search
        </button>
    </div>
</div>

            <main className='mainGallery'>
                {filteredCakes.length > 0 ? (
                    filteredCakes.map((item, index) => (
                        <Card 
                            key={index} 
                            name={item.name} 
                            pic={item.pic} 
                            price={item.price} 
                            calories={item.calories} 
                            ingredients={item.ingredients} 
                            func={() => addProducts(item)} 
                        />
                    ))
                ) : (
                    <p style={{ textAlign: 'center' }}>לא נמצאו תוצאות התואמות לחיפוש.</p>
                )}
            </main>
            <Footer />
        </div>
    );
}

export default Gallery;