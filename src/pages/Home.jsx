import React from 'react'
import { Categories, Sortpopup, PizzaBlock, LoaderPizzas } from '../components';
import { useSelector, useDispatch } from 'react-redux';
import { setCategory, setSortBy } from '../redux/actions/filters';
import { fetchPizzas } from '../redux/actions/pizzas';
import { setCart } from '../redux/actions/cart';





function Home() {

    const items = useSelector(({ pizzas }) => pizzas.items);
    const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
    const { category, sortBy } = useSelector(({ filters }) => filters);
    const cartItems = useSelector(({ cart }) => cart.items);

    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(fetchPizzas(category, sortBy));
    }, [category, sortBy]);


    const getCategory = index => {
        dispatch(setCategory(index));

    };

    const getSortBy = name => {
        dispatch(setSortBy(name));

    };

    const getCart = obj => {
        dispatch(setCart(obj));

    };



    return (

        < div className="container" >
            <div className="content__top">

                <Categories
                    activeCategory={category}
                    items={['Мясные', 'Вегатерианские', 'Гриль', 'Острые', 'Закрытые']}
                    onClick={getCategory}
                />
                <Sortpopup
                    activeSortBy={sortBy.type}
                    getSortBy={getSortBy}
                    items={[
                        { name: 'популярности', type: 'popular', order: 'desc' },
                        { name: 'цене', type: 'price', order: 'asc' },
                        { name: 'алфавиту', type: 'name', order: 'asc' }
                    ]}
                />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoaded
                    ? items.map((obj) => (
                        < PizzaBlock
                            key={obj.id}
                            addPizzaToCart={getCart}
                            addCount={cartItems[obj.id] && cartItems[obj.id].length}
                            {...obj}
                        />))
                    : Array(12).fill().map((_, index) => <LoaderPizzas key={`${index}`} />)
                }



            </div>
        </div >

    )
}

export default Home;
