import { Place, SearchFormData } from "./search-form.js"
import { User } from "./user.js"

interface Message {
  text?: string,
  type?: string
}

interface Action {
  name?: string,
  handler?: Function
}

export function renderBlock(elementId: string, html: string) {
    const element = document.getElementById(elementId)
    if(element != null) element.innerHTML = html
}

export function renderToast(message: Message, action: Action) {
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
      renderToast({}, {})
    }
  }
}

function dF(n: number) {
  return n < 10 ? '0' + n : n
}

export function dateChange(date: Date) {
  return `${dF(date.getFullYear())}-${dF(date.getMonth() + 1)}-${dF(date.getDate())}`
}

export function dateDefaultIn() {
  const d = new Date()
  d.setDate(d.getDate() + 1)
  return d
}

export function dateDefaultOut(date: Date) {
  const d = new Date(date)
  d.setDate(d.getDate() + 2)
  return d
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
  const data = JSON.parse(value as string) as User
  if('name' in data && 'avatarUrl' in data) return data
  else return { name: '', avatarUrl: '' }
  
}

export function getFavoritesAmount(value: unknown) {
  return value as number
}

export function seacrh(data: SearchFormData, callback: (result: Error | Place[]) => void) {
  console.log(data)

  setTimeout(() => {
    if(Math.random() < 0.5) callback(new Error('error'))
    else callback([])
  }, 2000)
}
