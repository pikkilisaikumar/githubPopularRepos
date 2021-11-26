import './index.css'

const RepositoryItem = props => {
  const {each} = props
  const {name, issuesCount, forksCount, starsCount, avatarUrl} = each
  return (
    <li className="list-itemone">
      <img src={avatarUrl} alt={name} className="avatarimageurlclassone" />
      <h1 className="nameheadingone">{name}</h1>
      <div className="firstcontainerstar">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png "
          alt="stars"
          className="starsimage"
        />
        <p className="starcountparagraph">{starsCount} stars</p>
      </div>
      <div className="firstcontainerstar">
        <img
          src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
          alt="forks"
          className="starsimage"
        />
        <p className="starcountparagraph">{forksCount} forks</p>
      </div>

      <div className="firstcontainerstar">
        <img
          src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png "
          alt="open issues"
          className="starsimage"
        />
        <p className="starcountparagraph">{issuesCount} open issues</p>
      </div>
    </li>
  )
}

export default RepositoryItem
