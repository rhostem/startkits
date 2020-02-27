import React, { useEffect } from 'react'
import { SubHeading } from 'src/components/Heading'
import { useDispatch, useSelector } from 'react-redux'
import { type IRootState } from 'src/store'
import { getRepoDetail } from 'src/features/github/repoDetailSlice'
import styled from 'styled-components'

const DataSet = styled.div`
  margin: 0 auto;
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-family: monospace;

  & > div {
    width: 100%;
    display: flex;
    &:not(:first-child) {
      margin-top: 0.3rem;
    }
  }

  label {
    text-align: right;
    width: 130px;
  }

  label + span {
    text-align: left;
    width: calc(100% - 130px);
    overflow-x: hidden;
    font-weight: bold;
    margin-left: 1rem;
  }
`

export default function RepoDetail() {
  const dispatch = useDispatch()
  const repoDetail = useSelector((state: IRootState) => state.repoDetail)
  const { isLoading, data } = repoDetail

  useEffect(() => {
    dispatch(getRepoDetail({ org: 'rhostem', repo: 'blog' }))
    return () => {}
  }, [dispatch])

  return (
    <div>
      <SubHeading>Github Repository detail</SubHeading>

      <div>
        {isLoading ? (
          <div>loading...</div>
        ) : (
          <DataSet>
            <div>
              <label>id</label>
              <span>{data.id}</span>
            </div>
            <div>
              <label>name</label>
              <span>{data.name}</span>
            </div>
            <div>
              <label>private</label>
              <span>{data.private ? 'yes' : 'no'}</span>
            </div>
            <div>
              <label>owner login</label>
              <span>{data.owner?.login}</span>
            </div>
            <div>
              <label>owner avatar</label>
              <span>
                <img
                  src={data.owner?.avatar_url}
                  alt="avatar url"
                  width="50px"
                  height="50px"
                />
              </span>
            </div>
            <div>
              <label>html_url</label>
              <span>
                <a
                  href={data.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {data.html_url}
                </a>
              </span>
            </div>
            <div>
              <label>description</label>
              <span>{data.description}</span>
            </div>
            <div>
              <label>git_url</label>
              <span>{data.git_url}</span>
            </div>
            <div>
              <label>homepage</label>
              <span>
                <a
                  href={data.homepage}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {data.homepage}
                </a>
              </span>
            </div>
            <div>
              <label>stargazers_count</label>
              <span>{data.stargazers_count}</span>
            </div>
            <div>
              <label>default_branch</label>
              <span>{data.default_branch}</span>
            </div>
          </DataSet>
        )}
      </div>
    </div>
  )
}
