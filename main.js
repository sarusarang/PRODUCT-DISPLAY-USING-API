

const getProducts = async () => {

  res = await fetch("https://fakestoreapi.com/products")
  console.log(res);

  resp = res.json()

  data = await resp

  console.log(data);

  html = " "

  data.forEach(item => {

    html += `

    <div class="col mb-5">

    <div class="card h-100">
        <!-- Product image-->
        <img class="card-img-top" src="${item.image}" alt="..." />
        <!-- Product details-->
        <div class="card-body p-4">
            <div class="text-center">
                <!-- Product name-->
                <h5 class="fw-bolder">${item.title}</h5>
                <!-- Product price-->
                $ ${item.price}
            </div>
        </div>
        <!-- Product actions-->
        <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">View options</a></div>
        </div>
    </div>

</div>
        
        
        `

    result.innerHTML = html

  });

}

getProducts()