import axios from 'axios'

export async function getRepoDetail(
  org: string,
  repo: string
): Promise<IRepoDetail> {
  const url = `https://api.github.com/repos/${org}/${repo}`
  const { data } = await axios.get(url)
  return data
}
