let shoppingList = ["pere", "mele", "arance", "albicocche", "mouse", "monitor", "led", "luci"];

let i = 0;
while (i < shoppingList.length) {
    let shoppingItem = document.createElement("li");
    let shoppingCart = document.getElementById("cart");

    shoppingItem.innerHTML += shoppingList[i];
    shoppingCart.append(shoppingItem);
    i++;
}