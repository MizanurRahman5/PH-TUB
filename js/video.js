const loadData = async() => {
    // const res = await fetch ('https://openapi.programming-hero.com/api/phero-tube/categories')
    // const data = await res.json();
    // displayData(data);

    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then(res => res.json())
    .then(data => displayData(data.categories))
    
}

const videoLoder = () =>{
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
    .then(res => res.json())
    .then(data => displayVideo(data.videos))
}


const demo = [
    {
        "category_id": "1001",
        "video_id": "aaaa",
        "thumbnail": "https://i.ibb.co/L1b6xSq/shape.jpg",
        "title": "Shape of You",
        "authors": [
            {
                "profile_picture": "https://i.ibb.co/D9wWRM6/olivia.jpg",
                "profile_name": "Olivia Mitchell",
                "verified": ""
            }
        ],
        "others": {
            "views": "100K",
            "posted_date": "16278"
        },
        "description": "Dive into the rhythm of 'Shape of You,' a captivating track that blends pop sensibilities with vibrant beats. Created by Olivia Mitchell, this song has already gained 100K views since its release. With its infectious melody and heartfelt lyrics, 'Shape of You' is perfect for fans looking for an uplifting musical experience. Let the music take over as Olivia's vocal prowess and unique style create a memorable listening journey."
    }
]

const displayVideo = (videos) =>{
    videos.forEach(video => {
        console.log(video);
        const videoContainer = document.getElementById('video-container');
        const card = document.createElement('div');
        card.classList.add('card')
        card.innerHTML = `
         <figure>
    <img
      src=${video.thumbnail}
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

        videoContainer.append(card);

    })
}


const displayData = (catagory) => {
    // console.log(data)
    // console.log(catagory)

    catagory.forEach((item) => {
        console.log(item);
        const buttonContainer = document.getElementById('catagore');

        const button = document.createElement('button');
        button.classList.add('btn')
        button.innerText = item.category;
        buttonContainer.append(button);
    })
}

videoLoder()
loadData()