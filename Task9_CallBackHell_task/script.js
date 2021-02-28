var main_div = document.createElement('div')
main_div.classList.add('container', 'text-center', 'rounded', 'mt-5')
main_div.style.backgroundColor = "orange"

var row1 = document.createElement('div')
row1.classList.add('row')


var small_div = document.createElement('div')
small_div.classList.add('col-md-4', 'offset-md-4', 'text-center', 'rounded')
small_div.style.backgroundColor = "green"

var message = document.createElement('h1')
message.classList.add('heading')
message.style.color = 'white'

setTimeout(() => {
    message.innerHTML = "10"
    setTimeout(() => {
        message.innerHTML = "9"
        setTimeout(() => {
            message.innerHTML = "8"
            setTimeout(() => {
                message.innerHTML = "7"
                setTimeout(() => {
                    message.innerHTML = "6"
                    setTimeout(() => {
                        message.innerHTML = "5"
                        setTimeout(() => {
                            message.innerHTML = "4"
                            setTimeout(() => {
                                message.innerHTML = "3"
                                setTimeout(() => {
                                    message.innerHTML = "2"
                                    setTimeout(() => {
                                        message.innerHTML = "1"
                                        setTimeout(() => {
                                            message.innerHTML = "0"
                                            setTimeout(() => {
                                                message.innerHTML = "Happy Independence Day"
                                                message.style.fontSize = "5rem"
                                                small_div.classList.add("col-md-12")
                                                small_div.classList.remove("offset-md-4")
                                            }, 1000);
                                        }, 1000);
                                    }, 1000);    
                                }, 1000
                                );
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);


small_div.appendChild(message)
row1.appendChild(small_div)
main_div.appendChild(row1)

document.body.appendChild(main_div)

