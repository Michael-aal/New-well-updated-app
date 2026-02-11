

//the  interface  section 

        // Get elements
        const sidebar = document.getElementById('sidebar');
        const rightPanel = document.getElementById('rightPanel');
        const overlay = document.getElementById('overlay');
        const toggleSidebar = document.getElementById('toggleSidebar');
        const toggleRightPanel = document.getElementById('toggleRightPanel');
        const closeSidebar = document.getElementById('closeSidebar');
        const closeRightPanel = document.getElementById('closeRightPanel');
        const searchFrame = document.getElementById("searchFrame")
        // Toggle sidebar
        toggleSidebar.addEventListener('click', () => {
            sidebar.classList.add('active');
            overlay.classList.add('active');
        });

        // Toggle right panel
        toggleRightPanel.addEventListener('click', () => {
            rightPanel.classList.add('active');
            overlay.classList.add('active');
        });

        // Close sidebar
        closeSidebar.addEventListener('click', () => {
            sidebar.classList.remove('active');
            overlay.classList.remove('active');
        });

        // Close right panel
        closeRightPanel.addEventListener('click', () => {
            rightPanel.classList.remove('active');
            overlay.classList.remove('active');
        });

        // Close on overlay click
        overlay.addEventListener('click', () => {
            sidebar.classList.remove('active');
            rightPanel.classList.remove('active');
            overlay.classList.remove('active');
        });

        // Handle window resize
        window.addEventListener('resize', () => {
            if (window.innerWidth >= 1024) {
                sidebar.classList.remove('active');
                overlay.classList.remove('active');
            }
            if (window.innerWidth >= 1280) {
                rightPanel.classList.remove('active');
                overlay.classList.remove('active');
            }
        });

        // Toggle switches functionality
        const toggleSwitches = document.querySelectorAll('.toggle-switch');
        toggleSwitches.forEach(toggle => {

            toggle.addEventListener('click', () => {
                toggle.classList.toggle('off');
            });
        });


        // Tab navigation
        const tabItems = document.querySelectorAll('.tab-nav-item');
        tabItems.forEach(tab => {
            tab.addEventListener('click', () => {
                tabItems.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
            });
        });

        // Category buttons
        const categoryBtns = document.querySelectorAll('.category-btn');
        categoryBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                categoryBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
            });
        });

        // Carousel dots
        const carouselDots = document.querySelectorAll('.carousel-dot');
        carouselDots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                carouselDots.forEach(d => d.classList.remove('active'));
                dot.classList.add('active');
            });
        });

      
const searchBtn = document.querySelector(".search")
const browserView = document.getElementById("browserView");
const ContentWrapper = document.querySelector(".content-wrapper")
searchBtn.addEventListener("click", ()=>{



const searchBar = document.getElementById("searchBar").value
console.log(searchBar)

TRim()
 
const query = searchBar.value

if (query) {
  searchFrame.src = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
  console.log(query)
}


})

function TRim(){
  const searchBar = document.getElementById("searchBar").value = null

}


