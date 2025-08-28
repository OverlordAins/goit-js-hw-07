const countAllItemsWithClass = document.querySelectorAll('li[class="item"]').length
console.log('Number of categories:', countAllItemsWithClass)

const ctgrs = document.querySelectorAll('#categories .item')
ctgrs.forEach(item => { 
    console.log('Category:', item.querySelector('h2').textContent)
    console.log('Elements:', item.querySelectorAll('li').length)
})