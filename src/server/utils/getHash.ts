export const getHash = () => {
	return window
		? window.location.hash
			.substring(1)
			.split('&')
			.reduce((initial: any, item: string) => {
			if (item) {
				const parts = item.split('=')
				initial[parts[0]] = decodeURIComponent(parts[1])
			}
			return initial
			}, {})
		: ''
	}
  