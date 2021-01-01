import React from 'react';

import ArrowNext from './ArrowNext';
import ArrowPrev from './ArrowPrev';

const Icon = ({ name, property }) => {
  switch (name) {
    case 'arrow-next':
      return <ArrowNext property={property} />;
    case 'arrow-prev':
      return <ArrowPrev property={property} />;
    default:
      return <div>ICON HERE</div>;
  }
};

export default Icon;
