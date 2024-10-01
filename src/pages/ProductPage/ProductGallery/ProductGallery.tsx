import React, { useEffect, useRef } from 'react';
import { Carousel, Fancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/carousel/carousel.css';
import '@fancyapps/ui/dist/fancybox/fancybox.css';
import { Thumbs } from '@fancyapps/ui/dist/carousel/carousel.thumbs.esm';
import '@fancyapps/ui/dist/carousel/carousel.thumbs.css';
import './product-gallery.css';

const ProductGallery: React.FC<{ images: string[], name: string }> = ({ images, name }) => {
    const carouselRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (carouselRef.current && images.length > 1) {
            const pageCarousel = new Carousel(carouselRef.current, {
                transition: 'slide',
                preload: 3,
                Dots: false,
                Thumbs: {
                    type: 'classic',
                    Carousel: {
                        dragFree: false,
                        slidesPerPage: 'auto',
                        Navigation: true,
                        axis: 'x',
                        breakpoints: {
                            '(min-width: 768px)': {
                                axis: 'y',
                            },
                        },
                    },
                },
            }, { Thumbs });

            Fancybox.bind('[data-fancybox="gallery"]', {
                compact: false,
                idle: false,
                dragToClose: false,
                contentClick: () =>
                    window.matchMedia('(max-width: 578px), (max-height: 578px)').matches
                        ? 'toggleMax'
                        : 'toggleCover',
                animated: false,
                showClass: false,
                hideClass: false,
                Hash: false,
                Thumbs: false,
                Toolbar: {
                    display: {
                        left: [],
                        middle: [],
                        right: ['close'],
                    },
                },
                Carousel: {
                    transition: 'fadeFast',
                    preload: 3,
                },
                Images: {
                    zoom: false,
                    Panzoom: {
                        panMode: 'mousemove',
                        mouseMoveFactor: 1.1,
                    },
                },
            });

            return () => {
                Fancybox.destroy();
                pageCarousel.destroy();
            };
        }
    }, [images]);

    return (
        <div id="productContainer" className="product-page-gallery">
            <div id="productCarousel" ref={carouselRef} className="f-carousel">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="f-carousel__slide"
                        data-thumb-src={image}
                        data-fancybox="gallery"
                        data-src={image}
                    >
                        <img alt={name} loading="lazy" src={image} className="product-image" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductGallery;