import React from 'react';
import { SpotifyAuth } from '../../server';
import scopes from '../../server/components/Scopes'

const defaultProps = {
	clientID: "3d88ab36773d4b79bde3a320432aa880",
  redirectUri: 'http://localhost:3000',
  scopes: [scopes.userReadPrivate, scopes.userReadEmail],
  onAccessToken: (token: any) => {},
  title: 'Continue with Spotify',
  localStorage: false,
  noLogo: false,
  noCookie: false,
  showDialog: false,
}

const Login = () => {
  return(
    <div>
			<SpotifyAuth props={defaultProps} />
    </div>
  );
}

export default Login;
