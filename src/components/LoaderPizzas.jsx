import React from 'react'
import ContentLoader from "react-content-loader"

function LoaderPizzas(props) {
    return (
        <ContentLoader
            className='pizza-block'
            speed={2}
            width={500}
            height={460}
            viewBox="0 0 0 0 460"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
            {...props}
        >
            <rect x="0" y="271" rx="3" ry="3" width="280" height="24" />
            <rect x="0" y="312" rx="10" ry="10" width="280" height="84" />
            <rect x="127" y="408" rx="21" ry="21" width="150" height="45" />
            <circle cx="131" cy="125" r="125" />
            <rect x="9" y="418" rx="2" ry="2" width="103" height="29" />
        </ContentLoader>
    )
}

export default LoaderPizzas;
