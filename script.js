  <script>
        // Sample destination data for search functionality
        const destinations = [
            { name: 'Tokyo, Japan', type: 'City', icon: 'fas fa-torii-gate' },
            { name: 'Paris, France', type: 'City', icon: 'fas fa-monument' },
            { name: 'Bali, Indonesia', type: 'Island', icon: 'fas fa-umbrella-beach' },
            { name: 'New York, USA', type: 'City', icon: 'fas fa-building' },
            { name: 'Santorini, Greece', type: 'Island', icon: 'fas fa-water' },
            { name: 'Iceland', type: 'Country', icon: 'fas fa-mountain' },
            { name: 'Machu Picchu, Peru', type: 'Historical', icon: 'fas fa-hiking' },
            { name: 'Dubai, UAE', type: 'City', icon: 'fas fa-city' },
            { name: 'Thailand', type: 'Country', icon: 'fas fa-pagoda' },
            { name: 'Australia', type: 'Country', icon: 'fas fa-kangaroo' }
        ];

        // Navbar scroll effect
        window.addEventListener('scroll', () => {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // Search functionality
        const searchInput = document.getElementById('searchInput');
        const searchResults = document.getElementById('searchResults');

        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase().trim();
            
            if (query.length === 0) {
                searchResults.style.display = 'none';
                return;
            }

            const filteredDestinations = destinations.filter(dest => 
                dest.name.toLowerCase().includes(query) || 
                dest.type.toLowerCase().includes(query)
            );

            if (filteredDestinations.length > 0) {
                displaySearchResults(filteredDestinations);
                searchResults.style.display = 'block';
            } else {
                searchResults.style.display = 'none';
            }
        });

        function displaySearchResults(results) {
            searchResults.innerHTML = results.map(dest => `
                <div class="search-result-item" onclick="selectDestination('${dest.name}')">
                    <div class="result-icon">
                        <i class="${dest.icon}"></i>
                    </div>
                    <div>
                        <div style="font-weight: 600; color: #374151;">${dest.name}</div>
                        <div style="font-size: 0.9rem; color: #6b7280;">${dest.type}</div>
                    </div>
                </div>
            `).join('');
        }

        function selectDestination(destination) {
            searchInput.value = destination;
            searchResults.style.display = 'none';
            
            // Show animation or feedback
            searchInput.style.background = 'linear-gradient(135deg, #ecfdf5, #f0fdf4)';
            setTimeout(() => {
                searchInput.style.background = 'rgba(255, 255, 255, 0.9)';
            }, 1000);
            
            console.log('Selected destination:', destination);
            // Here you would typically handle the destination selection
            // (e.g., redirect to results page, show destination details, etc.)
        }

        // Hide search results when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.search-container')) {
                searchResults.style.display = 'none';
            }
        });

        // Book Now button functionality
        document.getElementById('bookNowBtn').addEventListener('click', (e) => {
            e.preventDefault();
            
            // Add booking animation
            const btn = e.target.closest('.btn');
            btn.style.transform = 'scale(0.95)';
            
            setTimeout(() => {
                btn.style.transform = 'translateY(-3px)';
                alert('Booking feature coming soon! Thank you for your interest.');
            }, 150);
        });

        // Social media link interactions
        document.querySelectorAll('.social-links a').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const icon = e.currentTarget.querySelector('i');
                icon.style.transform = 'rotate(360deg)';
                
                setTimeout(() => {
                    icon.style.transform = 'rotate(0deg)';
                }, 300);
            });
        });

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Add parallax effect to hero background
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const hero = document.querySelector('.hero');
            if (hero) {
                hero.style.transform = `translateY(${scrolled * 0.5}px)`;
            }
        });
    </script>
