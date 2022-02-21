async function apiCall(url) {


    //add api call logic here

    try {
        
        let res=await fetch(url);

        let data= await res.json();
        return data;

    } catch (err) {
        console.log("err:",err);
    }


}


function appendArticles(articles, main) {

    //add append logic here

    articles.forEach((elem) => {
        let div=document.createElement("div");

        // let image= document.createElement("img");
        // image.src="image;"+elem.url;

        let image1= document.createElement("img");
        image1.src="image1;"+elem.urlToImage;

        let author=document.createElement("p");
        author.innerHTML="Author: "+ elem.author;

        let content=document.createElement("p")
        content.innerHTML= "Content "+ elem.content;

        let description=document.createElement("p");
        description.innerHTML= "Description: "+ elem.description;

        let publishedAt=document.createElement("p");
        publishedAt.innerHTML= "PublihedAt: "+ elem.publishedAt;

        let Name=document.createElement("p");
        Name.innerHTML= "Name "+elem.source.name;

        let title=document.createElement("p");
        title.innerHTML="Title "+elem.title;


        div.append(image1,Name,title,author,content,description,publishedAt);

        main.append(div);

        div.id="picture";

        div.onclick=()=>{

            localStorage.setItem("clicked_image:", JSON.stringify(elem));

        };

        main.append(div);

    });


}

export { apiCall, appendArticles }