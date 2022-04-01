var cartdata = JSON.parse(localStorage.getItem("cart"))
    console.log(cartdata)

    var total = cartdata.reduce(function(sum,elem,index,arr)
    {
        return sum+Number(elem.price)
    },0);

    console.log(total)
    document.querySelector("h1").innerText="Total Price "+ " "+ total;
    cartdata.map(function (elem,index) {

        var box = document.createElement("div");

        var img = document.createElement("img");
        img.src = elem.image_url;

        var name = document.createElement("p");
        name.textContent = elem.name;

        var price = document.createElement("p");
        price.innerText = elem.price;

        var btn = document.createElement("button");
        btn.innerText="Remove";
        btn.addEventListener("click",function()
        {
            removeItem(elem,index)
        })



        box.append(img, name, price,btn);

        document.querySelector("#container").append(box);
    });

    function removeItem(elem,index)
    {
        console.log(elem,index)
        cartdata.splice(index,1)
        localStorage.setItem("cart",JSON.stringify(cartdata))
        window.location.reload()
    }