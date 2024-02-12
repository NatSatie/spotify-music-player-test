const getRedirectUrl = (clientID: string, scopes: any, redirectUri: string, showDialog: boolean) => {
    return (
      'https://accounts.spotify.com/authorize?response_type=token' +
      `&client_id=${clientID}` +
      // todo: fix typing
      `&scope=${scopes.join('%20')}` +
      `&redirect_uri=${redirectUri}` +
      '&show_dialog=' +
      Boolean(showDialog)
    )
};
  
export default getRedirectUrl