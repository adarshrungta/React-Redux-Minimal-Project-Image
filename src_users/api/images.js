// API Images static class
export default class ApiImages {
  // get a list of Images
  static getAllimages() {
    return fetch('https://picsum.photos/list').then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }
}


  

