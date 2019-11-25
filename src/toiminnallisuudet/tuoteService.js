import axios from 'axios';

//Tässä GET pyyntö:
export default function getKaikki(callback){
axios.get('https://localhost:omanumero/api/tomaatti/')  
.then(response => {  
  //this.setState({ business: response.data }); 
  // console.log(response, 'onnistui')
  callback(response.data) 
  // debugger;  

})  
.catch(function (error) {  
  console.log(error);  
})  
}


// Tässä GET pyyntö Id:n perusteella
export function getById(id){
        return axios.get('https://localhost:omanumero/api/tomaatti/'+id)  
            .then(response => {  
           return response;  
    
            })  
            .catch(function (error) {  
                console.log(error);  
            })  
}

//Tässä POST pyyntö

export function postLisää(myJSON){
  console.log(myJSON)

axios.post('https://localhost:omanumero/api/tomaatti/', myJSON) 
.then(json => {  
if(json.status===200){  
  console.log(json.status);  
  alert("Lähetetty onnistuneesti");  
// this.props.history.push('/HaeTuote')  
}  
else{  
alert('Lähetys ei onnistunut');  
// debugger;
// this.props.history.push('/HaeTuote')  
}  
})  
}

//Tässä PUT pyyntö: 
// Sitten lähetetään muokatut tiedot PUT pyynnöllä:
export function putMuokkaa(obj, id)
{
  axios.put('https://localhost:omanumero/api/tomaatti/update/'+id, obj) 
          .then(res => {
            if(res.data.status===res.data.status){
            console.log(res.data);  
          alert("Tiedot muokattu onnistuneesti!");
          }
          else{
            alert("Ei onnistunut");
          }
        })
          // debugger;  
          // this.props.history.push('/HaeTuote')  

  //
  console.log(obj);
  axios.put('https://localhost:omanumero/api/tomaatti/update/'+id, obj) 
          .then(
            // response => response.addHeader("Access-Control-Allow-Origin", "*"))
            //  response.addHeader("Access-Control-Allow-Methods", '*')
            // response => response.addHeader("Access-Control-Request-Method", "GET, PUT, POST, DELETE, OPTIONS"));
          res => console.log(res.data))
          
          .catch(res => console.log(res))
          ;  
}


//Tässä DELETE pyyntö:
export function deletePoista(id){
  return fetch(`/api/tomaatti/delete/${id}`, {
    method: 'DELETE'
  }).then(res => {
    console.log("DELETE lähetetty, status", res.status);
    alert("Poistettu onnistuneesti");
    // return res.json();
  })
    //  return axios.delete('/api/tomaatti/delete/'+id)  
    // .then(()=> console.log("deletePoista onnistui"))
     // .then(json => {  
    // if(json.data.Status==='Delete'){  
    // alert('Ilmoitus poistettu onnistuneesti!!');  
    // }  
    // })
    // .catch(res => console.log(res)) 
  }




