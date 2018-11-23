class api {
  // getcategoryById(id){
  //   fetch(`http://jservice.io/api/category?id=${id}`).then(resp => {
  //     resp.json().then(category => {
  //       console.log(category)
  //     })
  //   }).catch(err => {
  //     console.erro(`problems happend`)
  //   })
  //   // Storage.saveItem(response);
  // }
  async getCategoryById(id) {
    const category = await fetch(`http://jservice.io/api/category?id=${id}`);
    const json = await category.json();
    return json;
  }
}
export default new api();