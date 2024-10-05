let items = document.querySelectorAll('.slider .list .item')
let thumbnails = document.querySelectorAll('.thumbnail .item')
let next = document.querySelector('#next')
let prev = document.querySelector('#prev')

let countItem = items.length
let itemActive = 0

//evento no botao de proximo
next.onclick = () => {
    itemActive++
    if (itemActive >= countItem) {
        itemActive = 0
    }
    showSlider()
}

prev.onclick = () => {
    itemActive--
    if (itemActive < 0) {
        itemActive = countItem - 1
    }
    showSlider()
}

let refreshInterval = setInterval(() => {
    next.click()
}, 3000)

function showSlider() {
    //remove antigo 'active' do item
    let itemActiveOld = document.querySelector('.slider .list .item.active')
    let thumbnailActiveOld = document.querySelector('.thumbnail .item.active')
    itemActiveOld.classList.remove('active')
    thumbnailActiveOld.classList.remove('active')

    //active new item
    items[itemActive].classList.add('active')
    thumbnails[itemActive].classList.add('active')

    clearInterval(refreshInterval)
}

thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        itemActive = index
        showSlider()
    })
})
