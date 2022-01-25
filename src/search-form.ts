import { dateDefaultIn, dateDefaultOut, dateSelectMin, dateSelectMax, renderBlock, dateChange, seacrh } from './lib.js'

export interface SearchFormData {
  checkInDate: string,
  checkInOut: string,
  maxPrice: string
}

export interface Place {
  cityes: []
}

export function renderSearchFormBlock(dIn: Date = dateDefaultIn(), dOut: Date = dateDefaultOut(dIn)) {

  renderBlock(
    'search-form-block',
    `
    <form id="search_form">
      <fieldset class="search-filedset">
        <div class="row">
          <div>
            <label for="city">Город</label>
            <input id="city" type="text" disabled value="Санкт-Петербург" />
            <input type="hidden" disabled value="59.9386,30.3141" />
          </div>
          <!--<div class="providers">
            <label><input type="checkbox" name="provider" value="homy" checked /> Homy</label>
            <label><input type="checkbox" name="provider" value="flat-rent" checked /> FlatRent</label>
          </div>--!>
        </div>
        <div class="row">
          <div>
            <label for="check-in-date">Дата заезда</label>
            <input id="check-in-date" type="date" value="${dateChange(dIn)}" min="${dateSelectMin()}" max="${dateSelectMax()}" name="checkin" required />
          </div>
          <div>
            <label for="check-out-date">Дата выезда</label>
            <input id="check-out-date" type="date" value="${dateChange(dOut)}" min="${dateSelectMin()}" max="${dateSelectMax()}" name="checkout" required />
          </div>
          <div>
            <label for="max-price">Макс. цена суток</label>
            <input id="max-price" type="text" value="" name="price" class="max-price" required />
          </div>
          <div>
            <div><button type="submit">Найти</button></div>
          </div>
        </div>
      </fieldset>
    </form>
    `
  )

  const form = document.getElementById('search_form') as HTMLInputElement
  const inpIn = document.getElementById('check-in-date') as HTMLInputElement
  const inpOut = document.getElementById('check-out-date') as HTMLInputElement
  const inpPrice = document.getElementById('max-price') as HTMLInputElement

  form.onsubmit = (e: Event) => {
    e.preventDefault()
    
    const formData:SearchFormData = {
      checkInDate: inpIn.value,
      checkInOut: inpOut.value,
      maxPrice: inpPrice.value
    }
    seacrh(formData, (result) => console.log(result))
  }

}
