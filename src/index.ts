import { renderSearchFormBlock } from './search-form.js'
import { renderSearchStubBlock } from './search-results.js'
import { renderUserBlock } from './user.js'
import { getFavoritesAmount, getUserData, renderToast } from './lib.js'
import { getTodosByCount } from './request.js'

localStorage.setItem('user', JSON.stringify({ name: 'Wade Warren', avatarUrl: '/img/avatar.png', }))
localStorage.setItem('favoritesAmount', '3')

const user = getUserData(localStorage.getItem('user'))
const favoritesAmount = getFavoritesAmount(localStorage.getItem('favoritesAmount'))

window.addEventListener('DOMContentLoaded', () => {
  renderUserBlock(user.name, user.avatarUrl, favoritesAmount)
  renderSearchFormBlock()
  renderSearchStubBlock()
  renderToast(
    {text: 'Это пример уведомления. Используйте его при необходимости', type: 'success'},
    {name: 'Понял', handler: () => {console.log('Уведомление закрыто')}}
  )
  getTodosByCount(5)
})
