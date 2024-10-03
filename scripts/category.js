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
     <div class="px-0 py-2 flex gap-2>
       <div>
          <img class="w-10 h-10 rounded-full" src=${video.authors[0].profile_picture} />
       </div>
       <div>
          <h2 class="font-bold">${video.title}</h2>
          <div class="flex items-center gap-2">
            <p class="text-gray-400">${video.authors[0].profile_name}</p>
            <img class="w-5" src="https://img.icons8.com/?size=48&id=98A4yZTt9abw&format=png" />
          </div>
          <p></p> 
       </div>
     </div>
        `
        div.classList ='card card-compact'
        vid.append(div)
    })
}
loadCategories();
loadvideos();