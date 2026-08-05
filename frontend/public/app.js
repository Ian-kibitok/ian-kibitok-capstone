async function loadItems(){

    const response = await fetch(
        "/api/items"
    );

    const data = await response.json();

    document.getElementById("output").innerHTML =
        JSON.stringify(data,null,4);

}
