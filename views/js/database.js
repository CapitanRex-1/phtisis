const modalWindow = post => {
  return `
  <div class="col s12">
    <div class="card z-depth-3 animated fadeInDown">
    <div class="card-content">
      <span class="card-title">Информация о пациенте</span>
      <div class="row">
        <div class="input-field col s12">
          <label for="name" class="active">Инициалы Ф.И.О.: </label>
          <input placeholder="Оооо Ооооо Оооо" id="name" type="text" class="validate" value="${post.name}" required>
        </div>
      </div>
      
      <div class="row">
        <div class="col s12">
          <label for="gender" class="active">Пол:</label>
          <select id="gender" name="gender" class="browser-default">
            <option value="${post.gender}" disabled selected>${post.gender}</option>
            <option value="Мужской" class="validate" required>Мужской</option>
            <option value="Женский" class="validate" required>Женский</option>
          </select>
        </div>
      </div>

      <div class="row">
        <div class="input-field col s12">
          <label for="snils" class="active">СНИЛС: </label>
          <input placeholder="000-000-000-00" id="snils" type="text" class="validate" value="${post.snils}" required>
        </div>
      </div>

      <div class="row">
        <div class="input-field col s12">
          <label for="passport" class="active">Паспорт: </label>
          <input placeholder="0000.000111" id="passport" type="text" class="validate" value="${post.passport}" required>
        </div>
      </div>

      <div class="row">
        <div class="input-field col s12">
          <label for="city" class="active">Населенный пункт: </label>
          <input placeholder="р.п. Тальменка" id="city" type="text" class="validate" value="${post.city}" required>
        </div>
      </div>

      <div class="row">
        <div class="input-field col s12">
          <label for="adress" class="active">Адрес: </label> 
          <input placeholder="ул. Партизанская 23" id="adress" type="text" class="validate" value="${post.adress}" required>
        </div>
      </div>

      <div class="row">
        <div class="input-field col s12">
          <label for="date_was_born" class="active">Дата рождения: </label>
          <input placeholder="01.01.1999" id="date_was_born" type="text" class="validate" value="${post.date_was_born}" required>
        </div>
      </div>

      <div class="row">
        <div class="input-field col s12">
          <label for="age" class="active">Возраст: </label>
          <input placeholder="53" id="age" type="text" class="validate" value="${post.age}" required>
        </div>
      </div>

      <div class="row">
        <div class="input-field col s12">
          <label for="date_of_registration" class="active">Дата взятия на Д учет: </label>
          <input placeholder="12.12.2012" id="date_of_registration" type="text" class="validate" value="${post.date_of_registration}" required>
        </div>
      </div>

      <div class="row">
        <div class="col s12">
          <label for="social_status" class="active">Социальный статус:</label>
          <select id="social_status" name="social_status" class="browser-default">
            <option value="${post.social_status}" disabled selected>${post.social_status}</option>
            <option value="Работает" class="validate" required>Работает</option>
            <option value="Не работает" class="validate" required>Не работает</option>
          </select>
        </div>
      </div>

      <div class="row">
        <div class="col s12">
          <label for="drugs" class="active">F10:</label>
          <select id="drugs" name="drugs" class="browser-default">
            <option value="${post.drugs}" disabled selected>${post.drugs}</option>
            <option value="Да" class="validate" required>Да</option>
            <option value="Нет" class="validate" required>Нет</option>
          </select>
        </div>
      </div>

      <div class="row">
        <div class="col s12">
          <label for="B20_B24" class="active">В20-В24:</label>
          <select id="B20_B24" name="B20_B24" class="browser-default">
            <option value="${post.B20_B24}" disabled selected>${post.B20_B24}</option>
            <option value="Да" class="validate" required>Да</option>
            <option value="Нет" class="validate" required>Нет</option>
          </select>
        </div>
      </div>

      <div class="row">
        <div class="col s12">
          <label for="status" class="active">Статус выявления:</label>
          <select id="status" name="status" class="browser-default">
            <option value="${post.status}" disabled selected>${post.status}</option>
            <option value="Впервые выявлен" class="validate" required>Впервые выявлен</option>
            <option value="Хроник" class="validate" required>Хроник</option>
          </select>
        </div>
      </div>

      <div class="row">
        <div class="col s12">
          <label for="group_DU" class="active">Группа ДУ:</label>
          <select id="group_DU" name="group_DU" class="browser-default">
            <option value="${post.group_DU}" disabled selected>${post.group_DU}</option>
            <option value="I" class="validate" required>I</option>
            <option value="II A" class="validate" required>II A</option> 
            <option value="II Б" class="validate" required>II Б</option>
          </select>
        </div>
      </div>

      <div class="row">
        <div class="col s12">
          <label for="type_tub" class="active">Вид туберкулеза:</label>
          <select id="type_tub" name="type_tub" class="browser-default">
            <option value="${post.type_tub}" disabled selected>${post.type_tub}</option>
            <option value="Легочный" class="validate" required>Легочный</option> 
            <option value="Органы дыхания" class="validate" required>Органы дыхания</option> 
            <option value="Вне легочный" class="validate" required>Вне легочный</option>
          </select>
        </div>
      </div>

      <div class="row">
        <div class="input-field col s12">
          <label for="diagnosis" class="active">Диагноз ТБС: </label>
          <input placeholder="Состояние ..." id="diagnosis" type="text" class="validate" value="${post.diagnosis}" required>
        </div>
      </div>

      <div class="row">
        <div class="col s12">
          <label for="decay" class="active">Распад:</label>
          <select id="decay" name="decay" class="browser-default">
            <option value="${post.decay}" disabled selected>${post.decay}</option>
            <option value="Да" class="validate" required>Да</option>
            <option value="Нет" class="validate" required>Нет</option>
          </select>
        </div>
      </div>

      <div class="row">
        <div class="col s12">
          <label for="MBT" class="active">МБТ:</label>
          <select id="MBT" name="MBT" class="browser-default">
            <option value="${post.MBT}" disabled selected>${post.MBT}</option>
            <option value="+" class="validate" required>+</option>
            <option value="-" class="validate" required>-</option>
          </select>
        </div>
      </div>

      <div class="row">
        <div class="col s12">
          <label for="m_ck" class="active">М/СК:</label>
          <select id="m_ck" name="m_ck" class="browser-default">
            <option value="${post.m_ck}" disabled selected>${post.m_ck}</option>
            <option value="Да" class="validate" required>Да</option>
            <option value="Нет" class="validate" required>Нет</option>
          </select>
        </div>
      </div>

      <div class="row">
        <div class="col s12">
          <label for="posev" class="active">Посев:</label>
          <select id="posev" name="posev" class="browser-default">
            <option value="${post.posev}" disabled selected>${post.posev}</option>
            <option value="Да" class="validate" required>Да</option>
            <option value="Нет" class="validate" required>Нет</option>
          </select>
        </div>
      </div>

      <div class="row">
        <div class="col s12">
          <label for="MLU_SHLU" class="active">МЛУ/ШЛУ:</label>
          <select id="MLU_SHLU" name="MLU_SHLU" class="browser-default">
            <option value="${post.MLU_SHLU}" disabled selected>${post.MLU_SHLU}</option>
            <option value="Да" class="validate" required>Да</option>
            <option value="Нет" class="validate" required>Нет</option>
          </select>
        </div>
      </div>

      <div class="row">
        <div class="col s12">
            <label for="result" class="active">Исход:</label>
            <select id="result" name="result" class="browser-default">
              <option value="${post.result}" disabled selected>${post.result}</option>
              <option value="Выбыл за пределы края" class="validate" required>Выбыл за пределы края</option> 
              <option value="Умер от туб." class="validate" required>Умер от туб.</option> 
              <option value="Умер не от туб." class="validate" required>Умер не от туб.</option>
              <option value="Отрыв" class="validate" required>Отрыв</option>
              <option value="Эффективное лечение" class="validate" required>Эффективное лечение</option>
              <option value="Не эффективное лечение" class="validate" required>Не эффективное лечение</option>
              <option value="Продолжает лечение" class="validate" required>Продолжает лечение</option>
            </select>
        </div>
      </div>

      <div class="row">
        <div class="input-field col s12">
          <label for="date_result" class="active">Дата исхода: </label>
          <input placeholder="12.12.2012" id="date_result" type="text" class="validate" value="${post.date_result}" required>
        </div>
      </div>
    </div>

    <div class="card-action">
        <button class="btn btn-small green js-update" data-id="${post._id}">Сохранить изменения
            <i class="material-icons left">cloud</i></i>
        </button>
        <button class="btn btn-small grey js-arhiv" data-id="${post._id}">Отправить в архив
            <i class="material-icons left">archive</i>
        </button>
        <button class="btn btn-small red js-reload">Отмена
            <i class="material-icons left">cancel</i>
        </button>
    </div>
  </div>
</div>
  `
}

let posts = []
let modal
const BASE_URL = '/api/post'
var elem = document.querySelector("#pagination-demo1")

class PostApi {
    static fetch() {
        return fetch(BASE_URL, {method: 'get'}).then(res => res.json())
    }

    static create(post) {
        return fetch(BASE_URL, {
            method: 'post',
            body: JSON.stringify(post),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
    } 
    
    static remove(id) {
        return fetch(`${BASE_URL}/${id}`, {
            method: 'delete'
        }).then(res => res.json())
    }
    
    static edit(id) {
        return fetch(`${BASE_URL}/${id}`, {
            method: 'get'
        }).then(res => res.json())
    }

    static update(post) {
      return fetch(BASE_URL, {
        method: 'put',
        body: JSON.stringify(post),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
      }).then(res => res.json())
    }
}

document.addEventListener('DOMContentLoaded', () => {
    mainRender()

    modal = M.Modal.init(document.querySelector('.modal'))
        
    document.querySelector('#posts').addEventListener('click', onDeletePost)
    document.querySelector('#posts').addEventListener('click', onEditPost)
    document.querySelector('#createPost').addEventListener('click', onCreatePost)
    document.querySelector('#posts').addEventListener('click', onUpdatePost)
    document.querySelector('#posts').addEventListener('click', onArchivePost)
    document.querySelector('#posts').addEventListener('click', onReloadPost)
    document.querySelector('#searched').addEventListener('click', onSearchPost)
})

function mainRender() {
  PostApi.fetch().then(backendPosts => {
    posts = backendPosts.filter(backendPosts => backendPosts.marks === true)
    document.getElementById("amount").innerHTML = `<h4 class="left-align">Всего "активных" пациентов: ${posts.length}</h4>`
    renderPosts(posts)
  })
}

function renderPosts(_posts = []) {
    const $posts = document.querySelector('#posts')
    if (_posts.length > 0) {    
      searching.classList.remove('hide')
      calcul.classList.remove('hide')
      elem.classList.remove('hide')
      $(function() {
        (function(name) {
          var container = $('#pagination-' + name);
          var sources = function () {
            var result = _posts
            return result
          }();
          var options = {
            dataSource: sources,
            pageSize: 6,
            callback: function (response, pagination) {
              var dataHtml = ''
              $.each(response, function (index, post) {
                dataHtml += 
                `<div class="col l4 m6 s12">
                  <div class="card large sticky-action hoverable wow zoomIn">
                    <div class="card-image waves-effect waves-block waves-light">
                      <img class="activator responsive-img" src="/views/img/intercity-tech.jpg" alt="image">
                    </div>
                    <div class="card-content">
                      <span class="card-title activator grey-text text-darken-4">${post.name}<i class="material-icons right">more_vert</i></span>
                    </div>
                    <div class="card-action">
                      <button class="btn btn-small blue js-edit" data-id="${post._id}">
                        <i class="material-icons">mode_edit</i></i>
                      </button>
                      <button class="btn btn-small red js-remove" data-id="${post._id}">
                        <i class="material-icons">delete</i>
                      </button>
                    </div>
                    <div class="card-reveal">
                      <span class="card-title grey-text text-darken-4">Персональная информация<i class="material-icons right">close</i></span>
                      <p data-name="${post.name}">Ф.И.О.: ${post.name}</p>
                      <p data-gender="${post.gender}">Пол: ${post.gender}</p>
                      <p data-snils="${post.snils}">СНИЛС: ${post.snils}</p>
                      <p data-passport="${post.passport}">Паспорт: ${post.passport}</p>
                      <p data-city="${post.city}">Населенный пункт: ${post.city}</p>
                      <p data-adress="${post.adress}">Адрес: ${post.adress}</p>
                      <p data-date_was_born="${post.date_was_born}">Дата рождения: ${post.date_was_born}</p>
                      <p data-age="${post.age}">Возраст: ${post.age}</p>
                      <p data-date_of_registration="${post.date_of_registration}">Дата взятия на Д учет: ${post.date_of_registration}</p>
                      <p data-social_status="${post.social_status}">Соц. статус: ${post.social_status}</p>
                      <p data-drugs="${post.drugs}">F10: ${post.drugs}</p>
                      <p data-B20_B24="${post.B20_B24}">В20-В24: ${post.B20_B24}</p>
                      <p data-status="${post.status}">Статус выявления: ${post.status}</p>
                      <p data-group_DU="${post.group_DU}">Группа ДУ: ${post.group_DU}</p>
                      <p data-type_tub="${post.type_tub}">Вид туберкулеза: ${post.type_tub}</p>
                      <p data-diagnosis="${post.diagnosis}">Диагноз: ${post.diagnosis}</p>
                      <p data-decay="${post.decay}">Фаза распада: ${post.decay}</p>
                      <p data-MBT="${post.MBT}">МБТ: ${post.MBT}</p>
                      <p data-m_ck="${post.m_ck}">М/СК: ${post.m_ck}</p>
                      <p data-posev="${post.posev}">Посев: ${post.posev}</p>
                      <p data-MLU_SHLU="${post.MLU_SHLU}">МЛУ/ШЛУ: ${post.MLU_SHLU}</p>
                      <p data-result="${post.result}">Исход: ${post.result}</p>
                      <p data-date_result="${post.date_result}">Дата исхода: ${post.date_result}</p>      
                    </div>
                  </div>
                </div>`
              });
              container.prev().html(dataHtml);
            }
          };
          container.pagination(options);
        })('demo1');
      })  
    } else {
        $posts.innerHTML = `<div class="center">База пуста</div>`
        searching.classList.add('hide')
        elem.classList.add('hide')
    }
}
function onDeletePost(event) {
    if (event.target.classList.contains('js-remove') || event.target.parentNode.classList.contains('js-remove')) {
        const decision = confirm('Вы уверены, что хотите удалить пациента?')

        if (decision) {
            const id = event.target.getAttribute('data-id') || event.target.parentNode.getAttribute('data-id')
            PostApi.remove(id).then(() => {
                const postIndex = posts.findIndex(post => post._id === id)
                posts.splice(postIndex, 1)
                mainRender()
                document.getElementById('icon_prefix').value = ''
                M.toast({html: 'Пациент удален из базы.', classes: 'rounded'})
            })
        }
    }
}
function onCreatePost(event) {
    const $name = document.querySelector('#name')
    const $gender = document.querySelector('#gender')
    const $snils = document.querySelector('#snils')
    const $passport = document.querySelector('#passport')
    const $city = document.querySelector('#city')
    const $adress = document.querySelector('#adress')
    const $date_was_born = document.querySelector('#date_was_born')
    const $age = document.querySelector('#age')
    const $date_of_registration = document.querySelector('#date_of_registration')
    const $social_status = document.querySelector('#social_status')
    const $drugs = document.querySelector('#drugs')
    const $B20_B24 = document.querySelector('#B20_B24')
    const $status = document.querySelector('#status')
    const $group_DU = document.querySelector('#group_DU')
    const $type_tub = document.querySelector('#type_tub')
    const $diagnosis = document.querySelector('#diagnosis')
    const $decay = document.querySelector('#decay')
    const $MBT = document.querySelector('#MBT')
    const $m_ck = document.querySelector('#m_ck')
    const $posev = document.querySelector('#posev')
    const $MLU_SHLU = document.querySelector('#MLU_SHLU')
    const $result = document.querySelector('#result')
    const $date_result = document.querySelector('#date_result')

    if ($name.value && $gender.value && $snils.value && $passport.value && $city.value && $adress.value && $date_was_born.value && $age.value && $date_of_registration.value && $social_status.value && $drugs.value && $B20_B24.value && $status.value && $group_DU.value && $type_tub.value && $diagnosis.value && $decay.value && $MBT.value && $m_ck.value && $posev.value && $MLU_SHLU.value && $result.value && $date_result.value) {
        const newPost = {
            name: $name.value,
            gender: $gender.value,
            snils: $snils.value,
            passport: $passport.value,
            city: $city.value,
            adress: $adress.value,
            date_was_born: $date_was_born.value,
            age: $age.value,
            date_of_registration: $date_of_registration.value,
            social_status: $social_status.value,
            drugs: $drugs.value,
            B20_B24: $B20_B24.value,
            status: $status.value,
            group_DU: $group_DU.value,
            type_tub: $type_tub.value,
            diagnosis: $diagnosis.value,
            decay: $decay.value,
            MBT: $MBT.value,            
            m_ck: $m_ck.value,
            posev: $posev.value,
            MLU_SHLU: $MLU_SHLU.value,
            result: $result.value,
            date_result: $date_result.value
        }
        PostApi.create(newPost).then(post => {
            posts.push(post)
            mainRender()
            M.toast({html: 'Пациент добавлен в базу.', classes: 'rounded'})
        })
        modal.close()
        $name.value = ''
        $gender.value = ''
        $("#gender").prop("selectedIndex", 0)
        $("#gender").formSelect()
        $snils.value = ''
        $passport.value = ''
        $city.value = ''
        $adress.value = ''
        $date_was_born.value = ''
        $age.value = ''
        $date_of_registration.value = ''
        $social_status.value = ''
        $("#social_status").prop("selectedIndex", 0)
        $("#social_status").formSelect()
        $drugs.value = ''
        $("#drugs").prop("selectedIndex", 0)
        $("#drugs").formSelect()
        $B20_B24.value = ''
        $("#B20_B24").prop("selectedIndex", 0)
        $("#B20_B24").formSelect()
        $status.value = ''
        $("#status").prop("selectedIndex", 0)
        $("#status").formSelect()
        $group_DU.value = ''
        $("#group_DU").prop("selectedIndex", 0)
        $("#group_DU").formSelect()
        $type_tub.value = ''
        $("#type_tub").prop("selectedIndex", 0)
        $("#type_tub").formSelect()
        $diagnosis.value = ''
        $decay.value = ''
        $("#decay").prop("selectedIndex", 0)
        $("#decay").formSelect()
        $MBT.value = ''
        $("#MBT").prop("selectedIndex", 0)
        $("#MBT").formSelect()
        $m_ck.value = ''
        $("#m_ck").prop("selectedIndex", 0)
        $("#m_ck").formSelect()
        $posev.value = ''
        $("#posev").prop("selectedIndex", 0)
        $("#posev").formSelect()
        $MLU_SHLU.value = ''
        $("#MLU_SHLU").prop("selectedIndex", 0)
        $("#MLU_SHLU").formSelect()
        $result.value = ''
        $("#result").prop("selectedIndex", 0)
        $("#result").formSelect()
        $date_result.value = ''
        M.updateTextFields()
    }
}
function onEditPost(event) {
    if (event.target.classList.contains('js-edit') || event.target.parentNode.classList.contains('js-edit')) {
        const decision = confirm('Вы уверены, что хотите обновить информацию?')

        if (decision) {
            const id = event.target.getAttribute('data-id') || event.target.parentNode.getAttribute('data-id')
            PostApi.edit(id).then(post => {
              const $posts = document.querySelector('#posts')
              $posts.innerHTML = post.map(post => modalWindow(post)).join(' ')
              document.getElementById('icon_prefix').value = ''
              searching.classList.add('hide')
              calcul.classList.add('hide')
              elem.classList.add('hide')  
            })
        }
    }
}
function onUpdatePost(event) {
  if (event.target.classList.contains('js-update') || event.target.parentNode.classList.contains('js-update')) {

    const idx = event.target.getAttribute('data-id') || event.target.parentNode.getAttribute('data-id')
    const $name = document.querySelector('#name')
    const $gender = document.querySelector('#gender')
    const $snils = document.querySelector('#snils')
    const $passport = document.querySelector('#passport')
    const $city = document.querySelector('#city')
    const $adress = document.querySelector('#adress')
    const $date_was_born = document.querySelector('#date_was_born')
    const $age = document.querySelector('#age')
    const $date_of_registration = document.querySelector('#date_of_registration')
    const $social_status = document.querySelector('#social_status')
    const $drugs = document.querySelector('#drugs')
    const $B20_B24 = document.querySelector('#B20_B24')
    const $status = document.querySelector('#status')
    const $group_DU = document.querySelector('#group_DU')
    const $type_tub = document.querySelector('#type_tub')
    const $diagnosis = document.querySelector('#diagnosis')
    const $decay = document.querySelector('#decay')
    const $MBT = document.querySelector('#MBT')
    const $m_ck = document.querySelector('#m_ck')
    const $posev = document.querySelector('#posev')
    const $MLU_SHLU = document.querySelector('#MLU_SHLU')
    const $result = document.querySelector('#result')
    const $date_result = document.querySelector('#date_result')
    const mark = true

    const newPost = {
        name: $name.value,
        gender: $gender.value,
        snils: $snils.value,
        passport: $passport.value,
        city: $city.value,
        adress: $adress.value,
        date_was_born: $date_was_born.value,
        age: $age.value,
        date_of_registration: $date_of_registration.value,
        social_status: $social_status.value,
        drugs: $drugs.value,
        B20_B24: $B20_B24.value,
        status: $status.value,
        group_DU: $group_DU.value,
        type_tub: $type_tub.value,
        diagnosis: $diagnosis.value,
        decay: $decay.value,
        MBT: $MBT.value,            
        m_ck: $m_ck.value,
        posev: $posev.value,
        MLU_SHLU: $MLU_SHLU.value,
        result: $result.value,
        date_result: $date_result.value,
        idx,
        mark
    }
    PostApi.update(newPost).then(post => {
      mainRender()
      M.toast({html: 'Информация обновлена.', classes: 'rounded'})
    }
    )
}
}
function onArchivePost(event) {
  if (event.target.classList.contains('js-arhiv') || event.target.parentNode.classList.contains('js-arhiv')) {
    const decision = confirm('Вы уверены, что хотите отправить в архив пациента?')

    if (decision){
      const idx = event.target.getAttribute('data-id') || event.target.parentNode.getAttribute('data-id')
      const $name = document.querySelector('#name')
      const $gender = document.querySelector('#gender')
      const $snils = document.querySelector('#snils')
      const $passport = document.querySelector('#passport')
      const $city = document.querySelector('#city')
      const $adress = document.querySelector('#adress')
      const $date_was_born = document.querySelector('#date_was_born')
      const $age = document.querySelector('#age')
      const $date_of_registration = document.querySelector('#date_of_registration')
      const $social_status = document.querySelector('#social_status')
      const $drugs = document.querySelector('#drugs')
      const $B20_B24 = document.querySelector('#B20_B24')
      const $status = document.querySelector('#status')
      const $group_DU = document.querySelector('#group_DU')
      const $type_tub = document.querySelector('#type_tub')
      const $diagnosis = document.querySelector('#diagnosis')
      const $decay = document.querySelector('#decay')
      const $MBT = document.querySelector('#MBT')
      const $m_ck = document.querySelector('#m_ck')
      const $posev = document.querySelector('#posev')
      const $MLU_SHLU = document.querySelector('#MLU_SHLU')
      const $result = document.querySelector('#result')
      const $date_result = document.querySelector('#date_result')
      const mark = false

      const newPost = {
          name: $name.value,
          gender: $gender.value,
          snils: $snils.value,
          passport: $passport.value,
          city: $city.value,
          adress: $adress.value,
          date_was_born: $date_was_born.value,
          age: $age.value,
          date_of_registration: $date_of_registration.value,
          social_status: $social_status.value,
          drugs: $drugs.value,
          B20_B24: $B20_B24.value,
          status: $status.value,
          group_DU: $group_DU.value,
          type_tub: $type_tub.value,
          diagnosis: $diagnosis.value,
          decay: $decay.value,
          MBT: $MBT.value,            
          m_ck: $m_ck.value,
          posev: $posev.value,
          MLU_SHLU: $MLU_SHLU.value,
          result: $result.value,
          date_result: $date_result.value,
          idx,
          mark
      }
      PostApi.update(newPost).then(post => {
        mainRender()
        M.toast({html: 'Пациент отправлен в архив.', classes: 'rounded'})
      })       
    }
}
}
function onReloadPost(event) {
  if (event.target.classList.contains('js-reload') || event.target.parentNode.classList.contains('js-reload')) {
    mainRender()
  }
}
function onSearchPost(event) {
  if (event.target.classList.contains('js-search') || event.target.parentNode.classList.contains('js-search')) {
    let te2 = document.getElementById("icon_prefix").value
    const id = posts.filter(post => post.name === te2)
    if (id.length === 0) {
      M.toast({html: 'Совпадений не найдено!', classes: 'rounded'})
    } else {
      renderPosts(id)
      calcul.classList.add('hide')
      elem.classList.add('hide') 
    }
  }
}