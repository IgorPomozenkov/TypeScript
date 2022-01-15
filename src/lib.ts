import { SearchFormData } from "./search-form.js"

export function renderBlock(elementId, html) {
  const element = document.getElementById(elementId)
  element.innerHTML = html
}

export function renderToast(message, action) {
  let messageText = ''
  
  if (message != null) {
    messageText = `
      <div id="info-block" class="info-block ${message.type}">
        <p>${message.text}</p>
        <button id="toast-main-action">${action?.name || 'Закрыть'}</button>
      </div>
    `
  }
  
  renderBlock('toast-block', messageText)

  const button = document.getElementById('toast-main-action')
  if (button != null) {
    button.onclick = function() {
      if (action != null && action.handler != null) {
        action.handler()
      }
      renderToast(null, null)
    }
  }
}

function dF(n: number) {
  return n < 10 ? '0' + n : n
}

export function dateChange(date: any) {
  return `${dF(date.getFullYear())}-${dF(date.getMonth() + 1)}-${dF(date.getDate())}`
}

export function dateDefaultIn() {
  const d = new Date()
  d.setDate(d.getDate() + 1)
  return dateChange(d)
}

export function dateDefaultOut() {
  const d = new Date()
  d.setDate(d.getDate() + 3)
  return dateChange(d)
}

export function dateSelectMin() {
  const d = new Date()
  return dateChange(d)
}

export function dateSelectMax() {
  const d = new Date()
  return dateChange(new Date(d.getFullYear(), d.getMonth() + 2, 0))
}

export function getUserData(value: unknown) {
  const data = JSON.parse(value as string)
  return {
    userName: data.username,
    avatarUrl: data.avatarurl
  }
}

export function getFavoritesAmount(value: unknown) {
  return value as number
}

export function seacrh(data: SearchFormData) {
  console.log(data)
}
