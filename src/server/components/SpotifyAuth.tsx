import React, { Component, useState } from 'react'
import scopes from './Scopes'
import getRedirectUri from '../utils/generateUrl'

import { getHash } from '../utils/getHash'

interface SpotifyAuthProps {
  redirectUri: string,
  clientID: string,
  scopes: string[],
  onAccessToken: (token: any) => void,
  logoClassName?: string,
  title: string,
  noLogo: boolean,
  noCookie: boolean,
  showDialog: boolean,
  localStorage: boolean
}

interface SpotifyAuthInterface extends Component {
  props: SpotifyAuthProps
}

const SpotifyAuth = ({ props }: SpotifyAuthInterface) => {
  const [isAuthenticatedWithSpotify, setIsAuthenticatedWithSpotify] = useState(false);

  const handleClick = (event: any) => {
    event.preventDefault()

    const redirectUri = getRedirectUri(
      props.clientID,
      props.scopes,
      props.redirectUri,
      props.showDialog
    )

    // if (window.location !== window.parent.location) {
    //   const loginWindow = window.open(redirectUri)
    //   window.addEventListener('message', (event) => {
    //     if (event.data.type !== 'react-spotify-auth' || !event.data.accessToken) {
    //       return
    //     }

    //     loginWindow.close()
    //     props.onAccessToken(event.data.accessToken)
    //   }, false)
    // } else {
    //   window.location = redirectUri
    // }
  }

  const componentDidMount = () => {
    const accessToken = getHash().access_token

    if (accessToken) {
      if (!props.noCookie) {
        document.cookie = `spotifyAuthToken=${accessToken}; max-age=${60 * 60};`
      }
      if (props.localStorage) {
        window.localStorage.setItem('spotifyAuthToken', accessToken)
      }
      window.opener?.postMessage({ type: 'react-spotify-auth', accessToken }, '*')
      props.onAccessToken(accessToken)
    }
  }

  return (
    <button
      onClick={(event) => handleClick(event)}
    >
      <span>{props.title}</span>
    </button>
  )
}

// class SpotifyAuth extends Component {
//   constructor(props: SpotifyAuthProps) {
//     super(props)
//     this.state = {
//       isAuthenticatedWithSpotify: false
//     }
//   }

//   componentDidMount() {
//     const accessToken = getHash().access_token

//     if (accessToken) {
//       if (!this.props.noCookie) {
//         document.cookie = `spotifyAuthToken=${accessToken}; max-age=${60 * 60};`
//       }
//       if (this.props.localStorage) {
//         window.localStorage.setItem('spotifyAuthToken', accessToken)
//       }
//       window.opener?.postMessage({ type: 'react-spotify-auth', accessToken }, '*')
//       this.props.onAccessToken(accessToken)
//     }
//   }

//   handleClick = (event: any) => {
//     event.preventDefault()

//     const redirectUri = getRedirectUri(
//       this.props.clientID,
//       this.props.scopes,
//       this.props.redirectUri,
//       this.props.showDialog
//     )

//     if (window.location !== window.parent.location) {
//       const loginWindow = window.open(redirectUri)
//       window.addEventListener('message', (event) => {
//         if (event.data.type !== 'react-spotify-auth' || !event.data.accessToken) {
//           return
//         }

//         loginWindow.close()
//         this.props.onAccessToken(event.data.accessToken)
//       }, false)
//     } else {
//       window.location = redirectUri
//     }
//   }

//   render() {
//     return (
//       <button
//         className={this.props.btnClassName}
//         onClick={(event) => this.handleClick(event)}
//       >
//         <span>{this.props.title}</span>
//       </button>
//     )
//   }
// }

export default SpotifyAuth
