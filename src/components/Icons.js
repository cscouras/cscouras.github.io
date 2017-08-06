import styled from 'styled-components'

import GithubIcon from 'react-icons/lib/fa/github-square'
import LinkedInIcon from 'react-icons/lib/fa/linkedin-square'

// Social Media Icons
const GitHubLogo = styled(GithubIcon)`
  font-size: 50px;
  color: #eee;
  transition: .5s color;
  &:hover {
    color: #0092CA;
  }
`

const LinkedInLogo = styled(LinkedInIcon)`
  font-size: 50px;
  color: #eee;
  transition: .5s color;
  &:hover {
    color: #0092CA;
  }
`

export { GitHubLogo, LinkedInLogo }
