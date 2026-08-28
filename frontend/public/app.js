async function loadItems(){

    const response = await fetch(
        "http://localhost:8000/items"
    );

    const data = await response.json();

    document.getElementById("output").innerHTML =
        JSON.stringify(data,null,4);

}
