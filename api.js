    async function SearchBTN() {
            let query = document.getElementById('query').value;
            const resultsDiv = document.getElementById('results');
            const Results = document.querySelector(".G_result")
            const loading = document.getElementById('loading');
            const screen = document.querySelector(".screen")
            // const InputUrl = document.querySelector(".InputUrl")
          console.log(query)
            if (!query) return;

            // Setup
            resultsDiv.innerHTML = '';
            loading.style.display = 'block';

            try {
                const response = await fetch("https://google.serper.dev/search", {
                    method: 'POST',
                    headers: {
                        'X-API-KEY': 'd32e7442a85a07205e089f17093cf2f785149944', // <--- PASTE KEY HERE
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ q: query})
                });

                const data = await response.json();
                loading.style.display = 'none';


                   setTimeout(() => {
        screen.scrollTo({
            top: 400, // Adjust this number to your liking
            behavior: 'smooth'
        });
    }, 100);
                // Render Results
                data.organic.forEach(item => {
                    const div = document.createElement('div');
                    div.className = 'result';
                    div.innerHTML = `
                        <cite>${item.link}</cite>
                        <a href="${item.link}" target="_blank">${item.title}</a>
                        <p>${item.snippet}</p>
                    `;
                    resultsDiv.appendChild(div);
                });

            } catch (error) {
             location.href ="err.html"
            }



//  THE LOGIC FOR THE GEMINI AI
  console.log(query)

  if (!query) return;

  Results.innerHTML += `<p><strong>You:</strong> ${query}</p>`;

  const response = await fetch("http://localhost:3000/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ query })
  });

  const data = await response.json();
//   data = data.replace(/\*/g, "")
  Results.innerHTML += `<p><h4>Gemini:</h4> ${data.reply}</p>`;
  query.value = "";
  console.log(typeof data)

        }

        // Allow "Enter" key to trigger search
        document.getElementById('query').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') SearchBTN();
        });

        
    

