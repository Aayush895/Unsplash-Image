/* eslint-disable react/prop-types */
import style from './Gallery.module.css'

function Gallery({searchResult}) {
  return <div id={style.galleryContainer}>
    {searchResult && searchResult.map((item) => (
      <div key={item.id}>
        <img src={item?.urls?.regular} />
      </div>
    ))}
  </div>
}
export default Gallery
