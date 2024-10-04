const loadData = async () => {
  // const res = await fetch ('https://openapi.programming-hero.com/api/phero-tube/categories')
  // const data = await res.json();
  // displayData(data);

  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res) => res.json())
    .then((data) => displayData(data.categories));
};

const videoLoder = () => {
  fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((res) => res.json())
    .then((data) => displayVideo(data.videos));
};
function convertSeconds(seconds) {
  const hours = Math.floor(seconds / 3600); 
  seconds %= 3600; 
  const minutes = Math.floor(seconds / 60); 
  const remainingSeconds = seconds % 60; 

  return `${hours} hour, ${minutes} miniut, ${remainingSeconds} second`;
}

const demo = [
  {
    category_id: "1001",
    video_id: "aaaa",
    thumbnail: "https://i.ibb.co/L1b6xSq/shape.jpg",
    title: "Shape of You",
    authors: [
      {
        profile_picture: "https://i.ibb.co/D9wWRM6/olivia.jpg",
        profile_name: "Olivia Mitchell",
        verified: "",
      },
    ],
    others: {
      views: "100K",
      posted_date: "16278",
    },
    description:
      "Dive into the rhythm of 'Shape of You,' a captivating track that blends pop sensibilities with vibrant beats. Created by Olivia Mitchell, this song has already gained 100K views since its release. With its infectious melody and heartfelt lyrics, 'Shape of You' is perfect for fans looking for an uplifting musical experience. Let the music take over as Olivia's vocal prowess and unique style create a memorable listening journey.",
  },
];

function loadCatagory (id){
  // alert (id)
  fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`)
    .then((res) => res.json())
    .then((data) => displayVideo(data.category));
}

const displayVideo = (videos) => {
  const videoContainer = document.getElementById("video-container");
  videoContainer.innerHTML = "";

  if(videos.length == 0){
    videoContainer.classList.remove('grid')
    videoContainer.innerHTML = `
    <h1 class="text-center">No content here</h1>
    
    `;
    return;
  }else{
    videoContainer.classList.add('grid');
  }

  videos.forEach((video) => {
    // console.log(video);
    
    // videoContainer.innerHTML = "";
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
    <figure class ="h-[300px] relative">
    <img
      src=${video.thumbnail}
      class ="h-full"
      alt="Shoes" />
      ${
        video.others.posted_date.length == 0 ? "" :`<span class="absolute right-1 bottom-2 text-white text-xl">${convertSeconds(video.others.posted_date)}</span>`
      }
  </figure>
  <div class="flex gap-2 mt-4">
  <div>
  <img class="w-10 h-10 rounded-full" src=${video.authors[0].profile_picture}/>
  </div>
  <div>
  <h2 class="font-bold">${video.title}<h2/>
  <div class="flex gap-3">
  <p>${video.authors[0].profile_name}<p/>
  ${
    video.authors[0].verified == true
      ? `<img class="w-[25px]" src="/asset/verified.png"}/>`
      : ""
  }
  </div>
  
  

  </div>
  </div>
        
        `;

    videoContainer.append(card);
  });
};

const displayData = (catagory) => {
  // console.log(data)
  // console.log(catagory)

  catagory.forEach((item) => {
    console.log(item);
    const buttonContainer = document.getElementById("catagore");

    const div = document.createElement("div");
    // button.classList.add("btn");
    div.innerHTML = `
    <button class="btn" onclick="loadCatagory(${item.category_id})">${item.category}</button>
    
    `
    buttonContainer.append(div);
  });
};

videoLoder();
loadData();
