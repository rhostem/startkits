import React, { useCallback, useEffect, useMemo, useState } from 'react'
import Todos from 'features/todo/Todos'
import styled from 'styled-components'

const Wrap = styled.div``

export default function index() {
  return (
    <Wrap>
      <h1>Index page</h1>
      <Todos></Todos>
    </Wrap>
  )
}
