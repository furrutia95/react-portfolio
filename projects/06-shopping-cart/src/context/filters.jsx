import { createContext, useState } from "react";

export const FilterContext = createContext();

// Crear el provider para crear el contexto

export function FiltersProvider ({children}) {

    const [filter, setFilter] = useState({
        category: 'all',
        minPrice: 0
    })


    return (
        <FilterContext.Provider value={{
           filter,
           setFilter
        }}>
            {children}
        </FilterContext.Provider>
    )
}