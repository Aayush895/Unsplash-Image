import SearchForm from './SearchForm'
import style from './Container.module.css'

function Container() {
  return (
    <div id={style.mainContainer}>
      <h1>Unsplash Images</h1>
      <SearchForm />
    </div>
  )
}
export default Container
