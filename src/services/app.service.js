import { handleResponse } from './helper'
import cst from '../constants'

const rootUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=contentDetails&part=topicDetails&part=snippet&key=${process.env.REACT_APP_YOUTUBE_API_KEY}&id=`

function getIdFromUrl(url) {
  const urlParser = new URL(url)
  return urlParser.searchParams.get('v')
}

export function getYoutubeVideoDescription(url) {
  const id = getIdFromUrl(url)
  return fetch(`${rootUrl}${id}`).then(handleResponse)
}

function getDataFromDB() {
  const data = localStorage.getItem(cst.KEY_DB)
  return !data ? {} : JSON.parse(data)
}

function persistData(data) {
  localStorage.setItem(cst.KEY_DB, JSON.stringify(data))
}
export function checkCredential(email, password) {
  const data = getDataFromDB()
  if (!data.users) {
    data.users = [{ email, password }]
    persistData(data)
    return true
  }

  const record = data.users.find((rec) => rec.email === email)
  if (!record) {
    data.users.push({ email, password })
    persistData(data)
    return true
  }
  if (record.password !== password) return false
  return true;
}
