import React from 'react'
import Counter from 'src/features/counter/Counter'
import Todos from 'src/features/todos/Todos'
import Heading from 'src/components/Heading'
import RepoDetail from 'src/features/github/RepoDetail'
import styled from 'styled-components'

const Wrap = styled.div`
  margin: 1rem 0;
  text-align: center;
`
const SectionWrap = styled.section`
  padding: 2rem;
  &:not(:first-child) {
    border-top: 1px solid #eee;
  }
`

function App() {
  return (
    <Wrap>
      <Heading>redux toolkit starter</Heading>

      <div>
        <SectionWrap>
          <Counter></Counter>
        </SectionWrap>

        <SectionWrap>
          <Todos></Todos>
        </SectionWrap>

        <SectionWrap>
          <RepoDetail></RepoDetail>
        </SectionWrap>
      </div>
    </Wrap>
  )
}

export default App
