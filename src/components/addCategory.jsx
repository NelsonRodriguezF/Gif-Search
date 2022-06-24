import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {

    const [ inputValue, setInputValue ] = useState("");

    const onInputChange = ( {target} ) => {
        console.log( target.value );
        setInputValue( target.value )
    }

    const onSubmit = (event) => {
        event.preventDefault();

        const inputClear = inputValue.trim();
        
        if(inputClear.length <= 1){
            return 
        }
        // setCategories( categories => [ inputValue, ...categories ]);
        onNewCategory( inputClear );
        setInputValue("");
    }

    return(
        <form onSubmit={ onSubmit }>
            <input
                type="text"
                placeholder="Buscar Gifs"
                value={ inputValue }
                onChange={ onInputChange }
            />
        </form>
    )
}