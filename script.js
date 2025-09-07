function translateText(){
  const input = document.getElementById("input").value;
  fetch("/api/proxy")
    .then(res => res.json())
    .then(data => {
      console.log("API Key dari Vercel:", data.key);
      // Contoh penggunaan: disini kamu bisa panggil API eksternal dengan key tsb
      document.getElementById("output").textContent = "Hasil terjemahan untuk: " + input;
    });
}