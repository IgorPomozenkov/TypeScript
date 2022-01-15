import { renderSearchFormBlock } from './search-form.js'
import { renderSearchStubBlock } from './search-results.js'
import { renderUserBlock } from './user.js'
import { getFavoritesAmount, getUserData, renderToast } from './lib.js'

localStorage.setItem('user', JSON.stringify({ username: 'Wade Warren', avatarurl: '/img/avatar.png', }))
localStorage.setItem('favoritesAmount', '3')

const userActual:unknown = localStorage.getItem('user')
const favoritesAmountActual:unknown = localStorage.getItem('favoritesAmount')

const user = getUserData(userActual)
const favoritesAmount = getFavoritesAmount(favoritesAmountActual)

window.addEventListener('DOMContentLoaded', () => {
  renderUserBlock(user.userName, user.avatarUrl, favoritesAmount)
  renderSearchFormBlock()
  renderSearchStubBlock()
  renderToast(
    {text: 'Это пример уведомления. Используйте его при необходимости', type: 'success'},
    {name: 'Понял', handler: () => {console.log('Уведомление закрыто')}}
  )
})
