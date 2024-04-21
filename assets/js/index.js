
const getPosts = async () => {


    let url = 'https://jsonplaceholder.typicode.com/posts'

    let response = await fetch(url);

    let data = await response.json();

    console.log(data);

    let template = `<ul>
    <li>
    <strong>sunt aut facere repellat provident occaecati excepturi optio reprehenderit</strong>
      <p>quia et suscipit\nsuscipit
        recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem
        sunt rem eveniet architecto
      </p>
    </li>
  </ul>`

}



