import React from 'react';
import { useState } from 'react';
import { AddCategory } from './components/addCategory';
import { GifGrid } from "./components/GifGrid"; 

export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState(["One Punch"]);

    const onAddCategory = (newCategory) => {

        // Condicion si la categoria ya existe no hace nada
        if (categories.includes(newCategory)) return

        console.log(newCategory);
        setCategories( [newCategory, ...categories] );

        // Otra forma de agregar un elemento a un array
        // setCategories( cat => [...cat, "Valorant"] );
    }

    return (
        <>
            <h1>Gif Expert App</h1>

            <AddCategory 
                onNewCategory={ onAddCategory }
            />

            {
                categories.map( (category) => ( 
                    <GifGrid 
                        key={ category } 
                        category= { category }
                    /> 
                ))
            }
        </>
    )
}