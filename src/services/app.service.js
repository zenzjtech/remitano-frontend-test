import { handleResponse } from './helper'

const rootUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=contentDetails&part=topicDetails&part=snippet&key=${process.env.REACT_APP_YOUTUBE_API_KEY}&id=`

function getIdFromUrl(url) {
  const urlParser = new URL(url)
  return urlParser.searchParams.get('v')
}

export function getYoutubeVideoDescription(url) {
  //1KFQTnfzMGY&key=[YOUR_API_KEY] HTTP/1.1
  const id = getIdFromUrl(url)
  fetch(`${rootUrl}${id}`).then(handleResponse).then(console.log)
}
