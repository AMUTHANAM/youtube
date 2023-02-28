

//https://www.googleapis.com/youtube/v3/search?part=snippet&q=the%20weekend&key=AIzaSyDReXbGqs6ubPoxG90fN-rC7pf_5QWsWQY&maxResults=25


let urllink = " https://www.googleapis.com/youtube/v3/search?part=snippet&q=the weekend&key=AIzaSyDnXaT1WLcIT7cD282OJME-rQRy0JKHm9g&maxResults=25"

//let mainDiv= document.getElementById('mainDiv')
//console.log(mainDiv)


async function getelement(){
    let element = await fetch(urllink)
    let data = await element.json()
   // console.log(data.items)
    fetchyoutubedata(data.items)
}
getelement()

let mainDiv= document.getElementById('mainDiv')

function fetchyoutubedata(youtube){
    console.log(youtube)
   //mainDiv.innerHTML=" "

    youtube.map((element)=>{

        console.log(element)
        var youtubediv=document.createElement('div')
        youtubediv.classList.add('col','movie')
        youtubediv.innerHTML=  `

        <div class="card">
            <img src="https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 " class="card-img-top" alt="...">
            <div class="card-body ">
              <h4 class="card-title titlecolor">${element.title}</h4>
              <div class="d-flex justify-content-between">
                <h5 class="card-title titlecolor">${element.channelTitle}</h5>
              <h6 class="card-title titlecolor">${element.publishTime}</h6>
              </div>
              <p class="card-text textcolour">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
          </div>
       
        
        `

        


      mainDiv.append(youtubediv)


    })


}
//fetchyoutubedata(data)





// new api  AIzaSyDReXbGqs6ubPoxG90fN-rC7pf_5QWsWQY