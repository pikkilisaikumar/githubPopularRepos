import './index.css'

const LanguageFilterItem = props => {
  const {each, isTrueValue, updateActiveId} = props
  const {id, language} = each
  const sai = isTrueValue ? 'button1' : 'button'

  const languageClickBtn = () => {
    updateActiveId(id)
  }

  return (
    <li className="list-item">
      <button type="button" className={sai} onClick={languageClickBtn}>
        <p>{language}</p>
      </button>
    </li>
  )
}
export default LanguageFilterItem
