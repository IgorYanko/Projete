
const firebaseConfig = {
    apiKey: "AIzaSyD8N-mQsRzq0p-U7PyKDS-YeK673kLwhXU",
    authDomain: "wall-e-457e1.firebaseapp.com",
    databaseURL: "https://wall-e-457e1-default-rtdb.firebaseio.com",
    projectId: "wall-e-457e1",
    storageBucket: "wall-e-457e1.appspot.com",
    messagingSenderId: "801182372746",
    appId: "1:801182372746:web:3c99d511b379d9ec60ae73",
    measurementId: "G-KC175GPV3T"
  }; 
      
  firebase.initializeApp(firebaseConfig);
  
  db = firebase.database()
  
  function EnviarDados(){
    try{
      db.ref('Marcos_Paulo').set({
        Informacoes : {'Idade': 17, 'Doença': 'Pneumonia', 'Nome': 'Marcos Paulo',
           'Grau': 'Urgente', 'Batimento Cardiaco': '96bpm'}     
      })
      alert('Funcionou')
    }
    catch(error){
      alert('Problema')
    }
    
  }
  function BuscarDados(){
    try{
      db
        .ref('Marcos_Paulo')
        .once('value')
        .then(function(snapshot){
          resposta = snapshot.val()
          // resposta = JSON.stringify(resposta)
          console.log(resposta['Informacoes']['Nome'])
          console.log(resposta['Informacoes']['Doença'])
          console.log(resposta['Informacoes']['Grau'])
          console.log(resposta['Informacoes'][ 'Batimento Cardiaco'])
          alert("Urgente");
        
  
        })
    }
    catch(error){
      alert('Problema')
    }
  }
      
  