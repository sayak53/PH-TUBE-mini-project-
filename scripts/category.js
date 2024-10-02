// loadCategories function
const loadCategories = () => {
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then(res => res.json())
    .then(data => displayCategories(data.categories))
    .catch(err => console.log(err))
}

// loadVideos function
const loadvideos = () => {
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
    .then(res => res.json())
    .then(data => DisplayVideos(data.videos))
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

// DisplayVideos function
const DisplayVideos = (videos) => {
    const vid =document.getElementById('videos')
    videos.forEach(video => {
        console.log(video)

        const div =document.createElement('div')
        div.innerHTML=`
        <figure class="h-[200px]">
      <img
        src=${video.thumbnail}
        class="h-full w-full object-cover"
        alt="Shoes" />
     </figure>
     <div class="card-body">
       <h2 class="card-title">Shoes!</h2>
       <p>If a dog chews shoes whose shoes does he choose?</p>
       <div class="card-actions justify-end">
         <button class="btn btn-primary">Buy Now</button>
       </div>
     </div>
        `
        div.classList ='card card-compact'
        vid.append(div)
    })
}
loadCategories();
loadvideos();