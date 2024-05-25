document.getElementById('secretForm').addEventListener('submit', function(event) {
     event.preventDefault(); // Sayfanın yeniden yüklenmesini engelle
 
     var secret = document.getElementById('secret').value;
     alert('Sırrın: ' + secret); // Sırrı bir ileti kutusuyla göster
 
     // Sırrı sıfırla ve formu gizle
     document.getElementById('secretForm').reset();
     document.getElementById('secretForm').classList.add('hidden');
 });
 