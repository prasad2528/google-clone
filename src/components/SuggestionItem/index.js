import './index.css'

const SuggestionItem = props => {
  const {suggestionItem, updateSearchValue} = props
  const {suggestion} = suggestionItem
  const onClickButton = () => {
    updateSearchValue(suggestion)
  }
  return (
    <li className="list-container">
      <p className="item">{suggestion}</p>
      <button type="button" className="button" onClick={onClickButton}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow-icon"
          className="arrow-logo"
        />
      </button>
    </li>
  )
}
export default SuggestionItem
