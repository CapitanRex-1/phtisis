let posts = []
let modal
const BASE_URL = '/api/post'

class PostApi {
    static fetch() {
        return fetch(BASE_URL, {method: 'get'}).then(res => res.json())
    }
}

document.addEventListener('DOMContentLoaded', () => {
    mainRender()
    document.querySelector('#searched').addEventListener('click', onCalc)
})

function mainRender() {
  PostApi.fetch().then(backendPosts => {
    posts = backendPosts.filter(backendPosts => backendPosts.marks === true)
  })
}

function onCalc(event) {
  if (event.target.classList.contains('js-search') || event.target.parentNode.classList.contains('js-search')) {
    let te2 = document.getElementById("icon_prefix").value
    document.getElementById('icon_prefix').value = ''
    if ((te2 === 0) || (!parseInt(te2))) {
      M.toast({html: 'Введите корретное число!', classes: 'rounded'})
    } else {
      const buf = posts.filter(post => post.status === 'Впервые выявлен')
      const g = buf.length
      const incidence = (g * 100000)/te2

      const buf1 = posts.length
      const soreness = (buf1 * 100000)/te2

      const buf2 = posts.filter(post => post.result === 'Умер от туб.')
      const g1 = buf2.length
      const mortality = (g1 * 10000)/te2

      const buf3 = posts.filter(post => post.result === 'Эффективное лечение')
      const g2 = buf3.length
      const efficiency = (g2 * 100)/buf1

      const buf4 = posts.filter(post => post.group_DU === 'I')
      const g3 = buf4.length
      const buf5 = posts.filter(post => post.result === 'Отрыв')
      const g4 = buf5.length
      const separation = (g4 * 100)/g3

      const buf6 = posts.filter(post => post.result === 'Не эффективное лечение')
      const g5 = buf6.length
      const chronization = (g5 * 100)/g

      document.getElementById("amount").innerHTML = 
      `
      <div class="section">
        <div class="row ">
            <div class="col s12">
              <blockquote><h4>Численность введеного района равна - ${te2}. Исходя из этого далее идут расчеты:</h4></blockquote>
            </div>    
        </div>
      </div>
      <div class="divider wow fadeInRight"></div>
      
      <div class="section wow fadeInLeft">
        <div class="row ">
            <div class="col s12">
              <h4>Заболеваемость - ${incidence.toFixed(1)} на 100 тыс. населения.</h4>
            </div>    
        </div>
      </div>
      <div class="divider wow fadeInRight"></div>

      <div class="section wow fadeInLeft">
          <div class="row ">
              <div class="col s12">
                <h4>Болезненность - ${soreness.toFixed(1)} на 100 тыс. населения.</h4>
              </div>    
          </div>
      </div>
      <div class="divider wow fadeInRight"></div>

      <div class="section wow fadeInLeft">
          <div class="row ">
              <div class="col s12">
                <h4>Смертность - ${mortality.toFixed(1)} на 10 тыс. населения.</h4>
              </div>    
          </div>
      </div>
      <div class="divider wow fadeInRight"></div>

      <div class="section wow fadeInLeft">
          <div class="row ">
              <div class="col s12">
                <h4>Эффективность лечения - ${efficiency.toFixed(1)}% от количества заболевших.</h4>
              </div>    
          </div>
      </div>
      <div class="divider wow fadeInRight"></div>

      <div class="section wow fadeInLeft">
          <div class="row ">
              <div class="col s12">
                <h4>Отрыв от лечения - ${separation.toFixed(1)}% от количества I ДУ.</h4>
              </div>    
          </div>
      </div>
      <div class="divider wow fadeInRight"></div>

      <div class="section wow fadeInLeft">
          <div class="row ">
              <div class="col s12">
                <h4>Хронизация процесса - ${chronization.toFixed(1)}% IIБ ДУ от I ДУ.</h4>
              </div>    
          </div>
      </div>
      `
    }
  }
}



