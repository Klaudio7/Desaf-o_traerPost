
const getPosts = async () => {

    try {

        let url = 'https://jsonplaceholder.typicode.com/posts'

        let response = await fetch(url);

        let data = await response.json();

        console.log(data);

        let nuevoArreglo = data.map((elemento) => {
            return `<ul>
            <li>
            <strong>${elemento.title}</strong>
              <p>${elemento.body}</p>
            </li>
          </ul>`
        })

        document.getElementById("post-data").innerHTML = nuevoArreglo.join(" ");


    }

    catch (error) {

        console.log("estamos en el catch")
        console.log(error)



    }





}



