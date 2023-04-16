// const $users = document.getElementById('user-list')

// fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json())
//       .then(json => { 
//         displayUsers(json)

//       })

// async function fetchData () {
//     const response = await fetch('https://api.nasa.gov/planetary/apod?api_key=38qoXNQR95EmeoTYMiKpwSFs5UhQJLEii8VJ5NGX')
//     const json = await response.json()
    
//   }
 
// fetchData ()




// function displayUsers(users){
//     const htmlTemplate = []
//         for(const user of users ){
//             htmlTemplate.push(`<div>${user.title}</div>`)
//         }
//         $users.innerHTML = htmlTemplate.join('')


async function fetchData () {
    const response = await fetch('https://api.nasa.gov/planetary/apod?api_key=38qoXNQR95EmeoTYMiKpwSFs5UhQJLEii8VJ5NGX')
    const data = await response.json()
    const { date, explanation, title, url } = data
    
    const htmlTemplate = `
    <div class="d-flex justify-content-center flex-wrap m-5">    
    <div class="card border-white" style="width: 29rem;"><!--Start of carousel-->
        <div class="card-body">
            <h5 class="card-title text-center fw-bold">${title}</h5>
            <p class="card-text text-center" >${date}</p>
        </div>
        <div id="carouselExample" class="carousel slide">
            <div class="carousel-inner">
                <div class="carousel-item active">
                  <a href="assets/RainbowTree_Houck_960.jpg" target="_blank" class="active">
                    <img src="${url}" class="d-block w-100" alt="rainbow_tree">
                  </a>
                </div>
                <div class="carousel-item">
                  <a href="assets/Soul_Jimenez_1080.jpg" target="_blank" class="active">
                    <img src="assets/Soul_Jimenez_1080.jpg" class="d-block w-100" alt="soul_nebula">
                  </a>
                </div>
                <div class="carousel-item">
                  <a href="assets/JupiterVenus_Luy_960.jpg" target="_blank" class="active">
                    <img src="assets/JupiterVenus_Luy_960.jpg" class="d-block w-100" alt="jupiter_venus_planets">
                  </a>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
                </button>
        </div>          
        <div class="card-body text-center p-0">
            <p class="card-title text-center m-3 fst-italic">Image Credit & Copyright: Eric Houck</p>
            <button type="button" class="btn"><i class="fa-sharp fa-solid fa-star"></i></button>
        </div>
    </div><!--end of carousel -->
    <div class="border-white p-4" style="width: 50rem;"><!--beggining of paragraph explanation-->
        <h2 class="mt-5 fw-bold">Explanation:</h2>
        <p class="text-wrap">${explanation}</p>            
    </div><!--end of paragraph explanation-->
    <div class="position-relative pt-4"> <!--Folder Icon-->
    <button type="button" class="btn position-absolute bottom-0 end-0"><a href="collection.html" class="active"><i class="fa-solid fa-folder-open fs-2"></i></a></button>
    </div><!--Folder Icon-->

   
</div>`
  
  document.querySelector('body').innerHTML = htmlTemplate
}
    
    fetchData()

          