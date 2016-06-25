//Import Libs
import React from 'react';
import ImageDetail from './image_detail'


//Create Component
const ImageList = (props) => {
  const RenderedImages = props.images.filter(image => !image.is_album).map(image=>
    <ImageDetail key={image.id} image={image}/>
  );
  return(
    <ul className="media-list list-group">
        {RenderedImages}
    </ul>
  );
}

//Export our Component
export default ImageList;
