import { handleResponse } from './helper'

const rootUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=contentDetails&part=topicDetails&part=snippet&key=${process.env.REACT_APP_YOUTUBE_API_KEY}&id=`

function getIdFromUrl(url) {
  const urlParser = new URL(url)
  return urlParser.searchParams.get('v')
}

export function getYoutubeVideoDescription(url) {
  const id = getIdFromUrl(url)
  return fetch(`${rootUrl}${id}`).then(handleResponse)
}
