import React from 'react';
import Gallery from 'react-matrix-gallery';
import photo1 from '../../img/gallery/1.jpg';
import photo2 from '../../img/gallery/2.jpg';
import photo3 from '../../img/gallery/3.jpg';
import photo4 from '../../img/gallery/4.jpg';
import photo5 from '../../img/gallery/5.jpg';
import photo6 from '../../img/gallery/6.jpg';
import photo7 from '../../img/gallery/7.jpg';
import photo8 from '../../img/gallery/8.jpg';
import photo9 from '../../img/gallery/9.jpg';
import photo10 from '../../img/gallery/10.jpg';
import photo11 from '../../img/gallery/11.jpg';
import photo12 from '../../img/gallery/12.jpg';
import photo13 from '../../img/gallery/13.jpg';
import photo14 from '../../img/gallery/14.jpg';
import photo15 from '../../img/gallery/15.jpg';

const items = [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8, photo9, photo10, photo11, photo12, photo13, photo14, photo15];
const layout = [
    [1 / 4, 1 / 4, 1 / 4, 1 / 4],
    [1 / 3, 1 / 3, 1 / 3],
    [1 / 2, 1 / 2],
    [1 / 3, 1 / 3, 1 / 3],
    [1, 1 / 2, 1 / 2]
];
export const ImagesPage = () => {
    return (
        <Gallery layout={layout}>
            {items.map(photo => <img src={photo} />)}
        </Gallery>
    )
}