var data = [];
fetch("https://jsonplaceholder.typicode.com/comments", {
  method: "GET",
})
  .then(function (response) {
    if (response.status != 200) {
      throw response.status;
    }
    return response.json();
  })
  .then(function (responseData) {
    responseData.forEach((item) => {
      data.push(item);
    });
  })
  .catch(function (error) {
    console.log(error);
  });
function CommentsPage() {
  return (
    <div className="row d-flex flex-wrap">
      {data.map((item) => {
        return (
          <div key={item.id}>
            <h5>{item.name}</h5>
            <p>{item.body}</p>
          </div>
        );
      })}
    </div>
  );
}
export default CommentsPage;
