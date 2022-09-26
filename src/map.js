const products = [{ "name": "습식사료", "price": 10000, "seller": "내추럴코어", "imageUrl": "images/products/food1.jpg" }, { "name": "하네스", "price": 50000, "seller": "도기멍", "imageUrl": "images/products/acc1.jpg" }, { "name": "배변패드", "price": 30000, "seller": "흡수혁명", "imageUrl": "images/products/house1.jpg" }]

products.map(function(product,index){
    console.log(`${index}+번째 호출`);
    console.log(`${product}`);
})