import axios from 'axios'
const GITHUB_URL = import.meta.env.VITE_GITHUB_URL
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN

const github = axios.create({
  baseURL: GITHUB_URL,
  headers: {
    Authorization: `token ${GITHUB_TOKEN}`,
  },
})

// SET SEARCH USERS
export const searchUsers = async (text) => {
  const params = new URLSearchParams({
    q: text,
  })

  const response = await github.get(`/search/users?${params}`)
  return response.data.items

  // Before Code With Fetch API
  //   const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
  //     headers: {
  //       Authorization: `token ${GITHUB_TOKEN}`,
  //     },
  //   })

  //   const { items } = await response.json()
  //   return items
}

// NEW SINGLE FUNCTION TO GET SINGLE USER AND REPOS && Get User and Repos Together
export const getUserAndRepos = async (login) => {
  const [user, repos] = await Promise.all([
    github.get(`/users/${login}`),
    github.get(`/users/${login}/repos`),
  ])

  return { user: user.data, repos: repos.data }
}

// GET SINGLE USER BEFORE CODE
// export const getUser = async (login) => {
//   const response = await fetch(`${GITHUB_URL}/users/${login}`, {
//     headers: {
//       Authorization: `token ${GITHUB_TOKEN}`,
//     },
//   })

//   if (response.status === 404) {
//     window.location = '/notfound'
//   } else {
//     const data = await response.json()
//     return data
//   }
// }

// GET USER REPOS BEFORE CODE
// export const getUserRepos = async (login) => {
//   const response = await fetch(`${GITHUB_URL}/users/${login}/repos`, {
//     headers: {
//       Authorization: `token ${GITHUB_TOKEN}`,
//     },
//   })

//   if (response.status === 404) {
//     window.location = '/notfound'
//   } else {
//     const data = await response.json()
//     return data
//   }
// }
