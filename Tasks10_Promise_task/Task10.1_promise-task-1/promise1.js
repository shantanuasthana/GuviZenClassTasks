var tt = fetch("https://dog.ceo/api/breeds/image/random")
tt.then((response)=>{
    return response.json(); 
}).then((result)=>{
    
    var main_div = document.createElement("div")
    main_div.classList.add("container-fluid", "mt-5")

    var head1 = document.createElement("h1")
    head1.classList.add("h1")
    head1.innerHTML = "Dog Images"

    var row1 = document.createElement("div")
    row1.classList.add("row", "justify-content-md-center")

    var col1 = document.createElement("div")
    col1.classList.add("col-md-3", "text-center")
    col1.style.backgroundColor = "pink"


    var dog_img = document.createElement("img")
    dog_img.classList.add("img-fluid", "rounded")
    dog_img.setAttribute('src', result.message)
    dog_img.style.height = "300px"


    col1.append(head1,dog_img)
    row1.append(col1)
    main_div.appendChild(row1)
    document.body.append(main_div)
}).catch((err)=>{
    console.log(err)
})
