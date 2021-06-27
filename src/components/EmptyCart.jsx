import React from 'react'
import emptyCartImg from '../assets/img/emptyCartImg.png'
import { Link } from 'react-router-dom';

function emptyCart() {
    return (
        <div className="container container--cart">
            <div className="cart cart--empty">
                <h2>Корзина пустая <icon>😕</icon></h2>
                <p>
                    Вероятней всего, вы не заказывали ещё пиццу.<br />
                    Для того, чтобы заказать пиццу, перейди на главную страницу.
                </p>
                <img src={emptyCartImg} alt="Empty cart" />
                <Link to='/'>
                    <div className="button button--black">
                        <span>Вернуться назад</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default emptyCart;
