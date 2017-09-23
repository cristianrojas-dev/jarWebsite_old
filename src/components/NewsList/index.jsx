import React from 'react'

import NewsItem from '../NewsItem'

function NewsList({news}) {
    return (
        <div className="row">
            { news.map(nws => {
                return (
                    <NewsItem 
                        title={nws.title}
                        subtitle={nws.subtitle}
                        image={nws.image}
                        text={nws.text}
                    />
                )
            })
            }
        </div>
    )
}

export default NewsList
