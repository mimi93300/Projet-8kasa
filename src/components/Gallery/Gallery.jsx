import React from 'react';
import Card from '../Card/Card';
import './gallery.css';
import datas from '../../data/data.json'


function Gallery() {
    return (
        <section className='home__gallery'>
            {datas.map(data => {//.map() est utilisée pour itérer sur chaque élément de datas 
                return (
                    <Card
                        key={data.id}
                        id={data.id}
                        title={data.title}
                        cover={data.cover}
                        rating={data.rating}
                    />
                )
            })}
        </section>
    )
}

export default Gallery
