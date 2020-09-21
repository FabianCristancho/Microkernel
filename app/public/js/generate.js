function generate(){
    console.log("in");
    fetch('http://localhost:3000/generate', {
        method: 'GET', 
        headers:{
          'Content-Type': 'application/json'
        }
      }).then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => {
        document.getElementById('title').value = response.title;
        document.getElementById('bodyText').value = response.message;
      });
    
}