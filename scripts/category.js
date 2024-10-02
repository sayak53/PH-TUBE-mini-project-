// loadCategories function
const loadCategories = () => {
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then(res => res.json())
    .then(data => displayCategories(data.categories))
    .catch(err => console.log(err))
}
// DisplayCategories function
const displayCategories = (categories) => {
    const navCategory = document.getElementById('category')
    categories.forEach( item => {
        // create a button
        const btn = document.createElement('button')
        btn.classList = 'btn'
        btn.innerText = item.category
        navCategory.append(btn)
    });
}
loadCategories()