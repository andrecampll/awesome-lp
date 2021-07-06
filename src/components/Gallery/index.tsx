/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
import { ArrowBackIos as ArrowLeft } from '@styled-icons/material-outlined/ArrowBackIos';
import { ArrowForwardIos as ArrowRight } from '@styled-icons/material-outlined/ArrowForwardIos';

import { Wrapper } from './styles';
import Slider, { SliderSettings } from '../Slider';

export type GalleryImageProps = {
  src: string;
  label: string;
};

export type GalleryProps = {
  items: GalleryImageProps[];
};

const settings: SliderSettings = {
  arrows: true,
  nextArrow: <ArrowRight aria-label="next image" />,
  prevArrow: <ArrowLeft aria-label="previous image" />,
  slidesToShow: 4,
  infinite: false,
  lazyLoad: 'ondemand',
  responsive: [
    {
      breakpoint: 1375,
      settings: {
        arrows: false,
        slidesToShow: 3.2,
        draggable: true,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        slidesToShow: 2.2,
        draggable: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 2.2,
        draggable: true,
      },
    },
  ],
};

const Gallery = ({ items }: GalleryProps) => (
  <Wrapper>
    <Slider settings={settings}>
      {items.map((item, index) => (
        <img
          key={`thumb-${index}`}
          role="button"
          src={item.src}
          alt={`Thumb - ${item.label}`}
        />
      ))}
    </Slider>
  </Wrapper>
);

export default Gallery;
