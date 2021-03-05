var tt = fetch("https://restcountries.eu/rest/v2/all")
tt.then((response)=>{
    return response.json(); 
}).then((result)=>{
    
    var main_div = document.createElement("div")
    main_div.classList.add("container-fluid", "mt-5")

    var head1 = document.createElement("h1")
    head1.classList.add("h1", "text-center")
    head1.innerHTML = "Rest Country Data"

    let table = document.createElement("table")
    table.setAttribute('id','myTable')
    table.classList.add("table")
    table.style.border = "1px solid"
    
    let th1 = document.createElement("th")
    let th2 = document.createElement("th")
    let th3 = document.createElement("th")
    let th4 = document.createElement("th")
    
    var tr_head = document.createElement("tr")

    let name_head = document.createElement("p")
    name_head.innerHTML = "Name"
    let flag_head = document.createElement("p")
    flag_head.innerHTML = "Flag"
    let cap_head = document.createElement("p")
    cap_head.innerHTML = "Capital"
    let reg_head = document.createElement("p")
    reg_head.innerHTML = "Region"
    
    th1.append(name_head)
    th2.append(flag_head)
    th3.append(cap_head)
    th4.append(reg_head)
    tr_head.append(th1, th2, th3, th4)
    table.append(tr_head)

    for(i in result)
    {
        
        var tr = document.createElement("tr")
        var td1 = document.createElement("td")
        var td2 = document.createElement("td")
        var td3 = document.createElement("td")
        var td4 = document.createElement("td")

        let country_name = document.createElement("div")
        country_name.classList.add("country_name")
        let name = document.createElement("p")
        name.innerHTML = result[i].name
        country_name.append(name)

        let country_flag = document.createElement("img")
        country_flag.classList.add("img-thumbnail")
        country_flag.setAttribute('src', result[i].flag)

        let country_capital = document.createElement('div')
        country_capital.classList.add("country_capital")
        let capital = document.createElement("p")
        capital.innerHTML = result[i].capital
        country_capital.append(capital)

        let country_region = document.createElement('div')
        country_region.classList.add("country_region")
        let region = document.createElement("p")
        region.innerHTML = result[i].region
        country_region.append(region)

        td1.append(country_name)
        td2.append(country_flag)
        td3.append(country_capital)
        td4.append(country_region)
        tr.append(td1, td2, td3, td4)
        table.append(tr)
    }

    main_div.append(head1,table)
    document.body.append(main_div)

}).catch((err)=>{
    console.log(err)
})
