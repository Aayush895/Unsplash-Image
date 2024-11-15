import SearchForm from './SearchForm'
import Gallery from './Gallery'
import style from './Container.module.css'

function Container() {
  return (
    <div id={style.mainContainer}>
      <h1>Unsplash Images</h1>
      <SearchForm />
      <Gallery />
    </div>
  )
}
export default Container
