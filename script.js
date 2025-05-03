/* General Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', sans-serif;
  background: linear-gradient(145deg, #0d1a16, #02150d);
  color: #eaeaea;
  min-height: 100vh;
}

/* Navbar */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  background-color: #081b14;
  border-bottom: 1px solid #144c3b;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: #2ecc71;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 2rem;
}

.nav-links a {
  color: #d4ffd4;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.nav-links a:hover {
  color: #00ffae;
}

/* Hero Section */
.hero-section {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 4rem 2rem;
  flex-wrap: wrap;
}

.content h1 {
  font-size: 3rem;
  color: #2ecc71;
}

.tagline {
  font-size: 1.5rem;
  margin-top: 1rem;
  color: #bdffe1;
}

.profile-pic img {
  width: 280px;
  height: 280px;
  border-radius: 50%;
  border: 4px solid #2ecc71;
  object-fit: cover;
  margin-top: 2rem;
}

