import React, { useCallback, useEffect, useMemo, useState } from 'react'
import Todos from 'features/todo/Todos'

export default function index() {
  return (
    <div>
      <h1>Index page</h1>
      <Todos></Todos>
    </div>
  )
}
