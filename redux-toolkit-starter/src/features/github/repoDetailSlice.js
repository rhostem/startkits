import { createSlice } from '@reduxjs/toolkit'
import { getRepoDetail as getRepoDetailAPI } from 'src/api/githubAPI'

const initialState: {
  isLoading: boolean,
  data: IRepoDetail,
} = {
  isLoading: false,
  data: {},
}

const repoDetailSlice = createSlice({
  name: 'repoDetail',
  initialState,
  reducers: {
    getRepoDetailStart: state => {
      state.isLoading = true
    },
    getRepoDetailSuccess: (state, { payload }: IAction<IRepoDetail>) => {
      state.data = payload
      state.isLoading = false
    },
    getRepoDetailFail: state => {
      state.isLoading = false
    },
  },
})

export const {
  getRepoDetailStart,
  getRepoDetailSuccess,
  getRepoDetailFail,
} = repoDetailSlice.actions

/**
 * redux-thunk 미들웨어를 사용한 액션
 */
export const getRepoDetail = ({ org = '', repo = '' }) => async dispatch => {
  try {
    dispatch(getRepoDetailStart())
    const data = await getRepoDetailAPI(org, repo)
    dispatch(getRepoDetailSuccess(data))
  } catch (e) {
    console.error(e)
    dispatch(getRepoDetailFail())
  }
}

export default repoDetailSlice
