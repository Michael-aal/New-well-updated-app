    async function performSearch() {
            const query = document.getElementById('query').value;
            const resultsDiv = document.getElementById('results');
            const loading = document.getElementById('loading');
            const screen = document.querySelector(".screen")
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
                    body: JSON.stringify({ q: query })
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
        }

        // Allow "Enter" key to trigger search
        document.getElementById('query').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') performSearch();
        });



        function redirectToResult(url) {
    console.log("User clicked on:", url);
    // You could save this click to a database here
    window.location.href = url; // This redirects the current page to the result


}


   