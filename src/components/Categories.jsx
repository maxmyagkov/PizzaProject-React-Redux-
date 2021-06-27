import React from 'react'


function Categories({ activeCategory, items, onClick }) {



    const onSelectItem = (index) => {
        onClick(index);
    }
    return (
        <div className="categories">
            <ul>
                <li
                    onClick={() => onSelectItem(null)}
                    className={activeCategory === null ? 'active' : ''}
                >Все</li>
                {items && items.map((name, index) => (
                    <li
                        key={`${name}_${index}`}
                        onClick={() => onSelectItem(index)}
                        className={activeCategory === index ? 'active' : ''}
                    >{name}</li>
                ))}
            </ul>
        </div>
    )
}

export default Categories;
