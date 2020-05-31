let posts = []
let modal
const BASE_URL = '/api/post'

class PostApi {
    static fetch() {
        return fetch(BASE_URL, {method: 'get'}).then(res => res.json())
    }
}

document.addEventListener('DOMContentLoaded', () => {
    PostApi.fetch().then(backendPosts => {
        posts = backendPosts.filter(backendPosts => backendPosts.marks === true)
            genderFilter(posts)
            statusFilter(posts)
            groupFilter(posts)
            typeFilter(posts)
            decayFilter(posts)
            mbtFilter1(posts)
            mbtFilter2(posts)
            moreFilter1(posts)
            moreFilter2(posts)
            socialFilter(posts)
            resultFilter(posts)
    })   
})

function genderFilter(_posts = []) {
    const buf1 = _posts.filter(post => post.gender === 'Женский').map(post => post)
    const g = buf1.length
    const buf2 = _posts.filter(post => post.gender === 'Мужской').map(post => post)
    const m = buf2.length
    
    let plotPolatChart = document.querySelector('#chart-1')
        const data = {
            labels: ['Мужской', 'Женский'],
            datasets: [
                {
                    label: 'Пол',
                    backgroundColor: ['#2196f3', '#f44336'],
                    data: [m, g]
                }
            ]
        }
        const options = {
            animation: {
                duration: 2000
            },
            scales: {
                ticks: {
                    beginAtZero: true
                }
            }
        }
        const polarChart = new Chart(plotPolatChart, {
            type: 'pie',
            data: data,
            options: options
        })
}
function statusFilter(_posts = []) {
    const buf1 = _posts.filter(post => post.status === 'Впервые выявлен').map(post => post)
    const g = buf1.length
    const buf2 = _posts.filter(post => post.status === 'Хроник').map(post => post)
    const m = buf2.length
    
    let plotPolatChart = document.querySelector('#chart-2')
        const data = {
            labels: ['Хроник', 'Впервые выявлен'],
            datasets: [
                {
                    label: 'Статус',
                    backgroundColor: ['#2196f3', '#f44336'],
                    data: [m, g]
                }
            ]
        }
        const options = {
            animation: {
                duration: 2000
            },
            scales: {
                ticks: {
                    beginAtZero: true
                }
            }
        }
        var polarChart = new Chart(plotPolatChart, {
            type: 'pie',
            data: data,
            options: options
        })  
}
function groupFilter(_posts = []) {
    const buf1 = _posts.filter(post => post.group_DU === 'I').map(post => post)
    const g = buf1.length
    const buf2 = _posts.filter(post => post.group_DU === 'II A').map(post => post)
    const m = buf2.length
    const buf3 = _posts.filter(post => post.group_DU === 'II Б').map(post => post)
    const b = buf3.length
    
    let plotPolatChart = document.querySelector('#chart-3')
        const data = {
            labels: ['I', 'II А', 'II Б'],
            datasets: [
                {
                    label: 'Группа',
                    backgroundColor: ['#f44336', '#2196f3', '#ffeb3b'],
                    data: [g, m, b]
                }
            ]
        }
        const options = {
            animation: {
                duration: 2000
            },
            scales: {
                ticks: {
                    beginAtZero: true
                }
            }
        }
        const polarChart = new Chart(plotPolatChart, {
            type: 'pie',
            data: data,
            options: options
        })
}
function typeFilter(_posts = []) {
    const buf1 = _posts.filter(post => post.type_tub === 'Легочный').map(post => post)
    const g = buf1.length
    const buf2 = _posts.filter(post => post.type_tub === 'Органы дыхания').map(post => post)
    const m = buf2.length
    const buf3 = _posts.filter(post => post.type_tub === 'Вне легочный').map(post => post)
    const b = buf3.length
    
    let plotPolatChart = document.querySelector('#chart-4')
        const data = {
            labels: ['Легочный', 'Органы дыхания', 'Вне легочный'],
            datasets: [
                {
                    label: 'Группа',
                    backgroundColor: ['#f44336', '#2196f3', '#ffeb3b'],
                    data: [g, m, b]
                }
            ]
        }
        const options = {
            animation: {
                duration: 2000
            },
            scales: {
                ticks: {
                    beginAtZero: true
                }
            }
        }
        const polarChart = new Chart(plotPolatChart, {
            type: 'pie',
            data: data,
            options: options
        })
}
function decayFilter(_posts = []) {
    const buf1 = _posts.filter(post => post.decay === 'Да').map(post => post)
    const g = buf1.length
    const buf2 = _posts.filter(post => post.decay === 'Нет').map(post => post)
    const m = buf2.length
    
    let plotPolatChart = document.querySelector('#chart-5')
        const data = {
            labels: ['Да', 'Нет'],
            datasets: [
                {
                    label: 'Распад',
                    backgroundColor: ['#f44336', '#2196f3'],
                    data: [g, m]
                }
            ]
        }
        const options = {
            animation: {
                duration: 2000
            },
            scales: {
                ticks: {
                    beginAtZero: true
                }
            }
        }
        const polarChart = new Chart(plotPolatChart, {
            type: 'pie',
            data: data,
            options: options
        })
}
function mbtFilter1(_posts = []) {
    const buf1 = _posts.filter(post => post.MBT === '+').map(post => post)
    const g = buf1.length
    const buf2 = _posts.filter(post => post.MBT === '-').map(post => post)
    const m = buf2.length
    
    let plotPolatChart = document.querySelector('#chart-6_1')
        const data = {
            labels: ['+', '-'],
            datasets: [
                {
                    label: 'Распад',
                    backgroundColor: ['#f44336', '#2196f3'],
                    data: [g, m]
                }
            ]
        }
        const options = {
            animation: {
                duration: 2000
            },
            circumference : Math.PI,
            rotation : -Math.PI
        }
        const polarChart = new Chart(plotPolatChart, {
            type: 'doughnut',
            innerSize: '50%',
            data: data,
            options: options
        })
}
function mbtFilter2(_posts = []) {
    const buf1 = _posts.filter(post => (post.MBT === '+') && (post.MLU_SHLU === 'Да')).map(post => post)
    const g = buf1.length
    const buf2 = _posts.filter(post => (post.MBT === '+') && (post.MLU_SHLU === 'Нет')).map(post => post)
    const m = buf2.length
    
    let plotPolatChart = document.querySelector('#chart-6_2')
        const data = {
            labels: ['Да', 'Нет'],
            datasets: [
                {
                    label: 'Распад',
                    backgroundColor: ['#f44336', '#2196f3'],
                    data: [g, m]
                }
            ]
        }
        const options = {
            animation: {
                duration: 2000
            },
            circumference : Math.PI,
            rotation : -Math.PI
        }
        const polarChart = new Chart(plotPolatChart, {
            type: 'doughnut',
            innerSize: '50%',
            data: data,
            options: options
        })
}
function moreFilter1(_posts = []) {
    const buf1 = _posts.filter(post => post.drugs === 'Да').map(post => post)
    const g = buf1.length
    const buf2 = _posts.filter(post => post.drugs === 'Нет').map(post => post)
    const m = buf2.length
    
    let plotPolatChart = document.querySelector('#chart-7_1')
        const data = {
            labels: ['Да', 'Нет'],
            datasets: [
                {
                    label: 'Распад',
                    backgroundColor: ['#f44336', '#2196f3'],
                    data: [g, m]
                }
            ]
        }
        const options = {
            animation: {
                duration: 2000
            },
            circumference : Math.PI,
            rotation : -Math.PI
        }
        const polarChart = new Chart(plotPolatChart, {
            type: 'doughnut',
            innerSize: '50%',
            data: data,
            options: options
        })
}
function moreFilter2(_posts = []) {
    const buf1 = _posts.filter(post => post.B20_B24 === 'Да').map(post => post)
    const g = buf1.length
    const buf2 = _posts.filter(post => post.B20_B24 === 'Нет').map(post => post)
    const m = buf2.length
    
    let plotPolatChart = document.querySelector('#chart-7_2')
        const data = {
            labels: ['Да', 'Нет'],
            datasets: [
                {
                    label: 'Распад',
                    backgroundColor: ['#f44336', '#2196f3'],
                    data: [g, m]
                }
            ]
        }
        const options = {
            animation: {
                duration: 2000
            },
            circumference : Math.PI,
            rotation : -Math.PI
        }
        const polarChart = new Chart(plotPolatChart, {
            type: 'doughnut',
            innerSize: '50%',
            data: data,
            options: options
        })
}
function socialFilter(_posts = []) {
    const buf1 = _posts.filter(post => post.social_status === 'Работает').map(post => post)
    const g = buf1.length
    const buf2 = _posts.filter(post => post.social_status === 'Не работает').map(post => post)
    const m = buf2.length
    
    let plotPolatChart = document.querySelector('#chart-8')
        const data = {
            labels: ['Работает', 'Не работает'],
            datasets: [
                {
                    label: 'Статус',
                    backgroundColor: ['#f44336', '#2196f3'],
                    data: [g, m]
                }
            ]
        }
        const options = {
            animation: {
                duration: 2000
            },
            scales: {
                ticks: {
                    beginAtZero: true
                }
            }
        }
        const polarChart = new Chart(plotPolatChart, {
            type: 'pie',
            data: data,
            options: options
        })
}
function resultFilter(_posts = []) {
    const buf1 = _posts.filter(post => post.result === 'Выбыл за пределы края').map(post => post)
    const g = buf1.length
    const buf2 = _posts.filter(post => post.result === 'Умер от туб.').map(post => post)
    const m = buf2.length
    const buf3 = _posts.filter(post => post.result === 'Умер не от туб.').map(post => post)
    const b = buf3.length
    const buf4 = _posts.filter(post => post.result === 'Отрыв').map(post => post)
    const j = buf4.length
    const buf5 = _posts.filter(post => post.result === 'Эффективное лечение').map(post => post)
    const d = buf5.length
    const buf6 = _posts.filter(post => post.result === 'Не эффективное лечение').map(post => post)
    const f = buf6.length
    const buf7 = _posts.filter(post => post.result === 'Продолжает лечение').map(post => post)
    const h = buf7.length
    
    let plotPolatChart = document.querySelector('#chart-9')
        const data = {
            labels: ['Выбыл за пределы края', 'Умер от туб.', 'Умер не от туб.', 'Отрыв', 'Эффективное лечение', 'Не эффективное лечение', 'Продолжает лечение'],
            datasets: [
                {
                    label: 'Группа',
                    backgroundColor: ['#4caf50', '#424242', '#9c27b0', '#eeff41', '#f44336', '#2196f3', '#ffe0b2'],
                    data: [g, m, b, j, d, f, h]
                }
            ]
        }
        const options = {
            animation: {
                duration: 2000
            },
            scales: {
                ticks: {
                    beginAtZero: true
                }
            }
        }
        const polarChart = new Chart(plotPolatChart, {
            type: 'pie',
            data: data,
            options: options
        })
}