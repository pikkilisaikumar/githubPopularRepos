import {Component} from 'react'
import './index.css'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import LanguageFilterItem from '../LanguageFilterItem'
import RepositoryItem from '../RepositoryItem'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

class GithubPopularRepos extends Component {
  state = {
    activeId: languageFiltersData[0].id,
    respositoryItem: [],
    isLoading: true,
    isFailure: true,
  }

  componentDidMount() {
    this.repositoryItemmethodone()
  }

  updateActiveId = id => {
    this.setState({activeId: id, isLoading: true}, this.repositoryItemmethodone)
  }

  repositoryItemmethodone = async () => {
    console.log('Hello')
    const {activeId} = this.state
    const options = {
      method: 'GET',
    }
    const apicall = `https://apis.ccbp.in/popular-repos?language=${activeId}`
    // console.log(apicall)
    const response = await fetch(apicall, options)
    if (response.ok === true) {
      const data = await response.json()
      const value = data.popular_repos
      const updatedOne = value.map(each => ({
        name: each.name,
        id: each.id,
        issuesCount: each.issues_count,
        forksCount: each.forks_count,
        starsCount: each.stars_count,
        avatarUrl: each.avatar_url,
      }))
      //   console.log(updatedOne)
      this.setState({
        respositoryItem: updatedOne,
        isLoading: false,
        isFailure: true,
      })
    } else if (response.status === 401) {
      this.setState({isFailure: false, isLoading: false})
    }
  }

  render() {
    const {activeId, respositoryItem, isLoading, isFailure} = this.state
    console.log('Pikkilisaikumar')
    const sai = isLoading ? (
      <div testid="loader">
        <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
      </div>
    ) : (
      <ul className="secondunorderlist">
        {respositoryItem.map(each => (
          <RepositoryItem key={each.id} each={each} />
        ))}
      </ul>
    )

    return (
      <div className="backgrounddetails">
        <h1>Popular</h1>
        <ul className="unorderlist">
          {languageFiltersData.map(each => (
            <LanguageFilterItem
              key={each.id}
              each={each}
              isTrueValue={each.id === activeId}
              updateActiveId={this.updateActiveId}
            />
          ))}
        </ul>
        {isFailure ? (
          sai
        ) : (
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
              alt="failure view"
            />
            <h1>Something Went Wrong</h1>
          </div>
        )}
      </div>
    )
  }
}
export default GithubPopularRepos
