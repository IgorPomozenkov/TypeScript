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

function dateChange(date: any) {
  return `${dF(date.getFullYear())}-${dF(date.getMonth() + 1)}-${dF(date.getDate())}`
}

export function dateDefault(arg: string) {
  let d = new Date()
  if(arg === 'in') {
    d.setDate(d.getDate() + 1)
    return dateChange(d)
  }

  if(arg === 'out') {
    d.setDate(d.getDate() + 3)
    return dateChange(d)
  }
}

export function dateSelect(arg: string) {
  let d = new Date()
  if(arg === 'min') {
    return dateChange(d)
  }

  if(arg === 'max') {
    return dateChange(new Date(d.getFullYear(), d.getMonth() + 2, 0))
  }
}
