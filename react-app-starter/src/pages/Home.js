import * as React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, compose } from 'redux'
import Header from 'components/layout/Header'
import SideBar from 'components/layout/SideBar'
import { MainWidthHeaderSiderBar, Content } from 'components/layout/Main'
import { fetchData } from 'store/data/dataActions'
import { messageSelector } from 'store/data//dataSelector'

class Home extends React.Component {
  static defaultProps = {}

  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    this.props.fetchData()
  }

  render() {
    return (
      <div>
        <Header />
        <SideBar />
        <MainWidthHeaderSiderBar>
          <Content>
            <h2>Home</h2>
            <p>
              <label htmlFor="">fetched data: </label>
              <span>{this.props.message}</span>
            </p>

            <h2>process.env</h2>
            <p>NODE_ENV : {process.env.NODE_ENV}</p>
            <p>REACT_APP_API_ROOT : {process.env.REACT_APP_API_ROOT}</p>
            <p>REACT_APP_PUBLIC_URL : {process.env.REACT_APP_PUBLIC_URL}</p>
            <p>REACT_APP_SECRET_TOKEN : {process.env.REACT_APP_SECRET_TOKEN}</p>
          </Content>
        </MainWidthHeaderSiderBar>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  message: messageSelector(state),
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchData,
    },
    dispatch
  )

export default compose(connect(mapStateToProps, mapDispatchToProps))(Home)
