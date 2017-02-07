import * as API from './resource'

export const insertTheme = (params) => {
  return API.insertTheme.save(params)
}
export const updateTheme = (params) => {
  return API.updateTheme.save(params)
}
export const deleteTheme = (params) => {
  return API.deleteTheme.save(params)
}
export const insertCard = (params) => {
  return API.insertCard.save(params)
}
export const updateCard = (params) => {
  return API.updateCard.save(params)
}
export const deleteCard = (params) => {
  return API.deleteCard.save(params)
}
export const uploadFile = (file) => {
  return API.uploadFile.save({ file })
}

export const getThemes = (params) => {
  return API.graphql.save({
    query: 'query themelist($lasttime: Float!, $count: Int!){themelist(lasttime: $lasttime, count: $count){_id, theme_id, createdate, title, desc, cover}}',
    variables: JSON.stringify(params)
  })
}
export const getCards = (params) => {
  return API.graphql.save({
    query: 'query cardlist($lastorder: Float!, $count: Int!, $theme_id: String!){cardlist(lastorder: $lastorder, count: $count, theme_id: $theme_id){_id, card_id, title, desc, img, email_title, email_content, order, attachments{filename, path}}}',
    variables: JSON.stringify(params)
  })
}
