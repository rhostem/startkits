import styled from 'styled-components'
import * as styles from 'styles'

export const Main = styled.main`
  position: relative;
  max-width: ${styles.size.appMaxWidth};
  padding-left: ${styles.size.mainHoriPadding};
  padding-right: ${styles.size.mainHoriPadding};
`

export const MainWithHeader = Main.extend`
  padding-top: ${styles.size.headerHeight};
`

export const MainWidthHeaderSiderBar = Main.extend`
  padding-top: ${styles.size.headerHeight};
  margin-left: ${styles.size.sideBarWidth};
  min-height: calc(100vh);
`

export const Content = styled.div`
  margin-top: 2rem;
  width: 100%;
`
