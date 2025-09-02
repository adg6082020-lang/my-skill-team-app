import { FaUserEdit, FaUsers, FaHandshake } from 'react-icons/fa';
import './HomePage.css';

export default function HomePage() {
  return (
    <main className="mainContainer">
      <h1 className='title'>Welcome to Skill & Team Finder</h1>
      <p className='description'>Find talented people with the skills you need and connect with teams to collaborate and build amazing projects together.</p>
      <div className='buttonGroup'>
        <a href='/explore' className='exploreButton'>
         Explore
         </a>
         <a href='/profile' className='profileButton'>
         My Profile
         </a>
      </div>

      <section className='howItWorks'>
        <h2 className='sectionTitle'>How It Works</h2>
        <div className='steps'>
          <div className='step'>
            <FaUserEdit size={32} color="#2563eb" style={{ marginBottom: '12px' }} />
            <h3>1. Build Your Profile</h3>
            <p>Showcase your skills and experience to get noticed.</p>
          </div>
          <div className='step'>
            <FaUsers size={32} color="#2563eb" style={{ marginBottom: '12px' }} />
            <h3>2. Explore Talent</h3>
            <p>Find individuals and teams with the skills you need.</p>
          </div>
          <div className='step'>
            <FaHandshake size={32} color="#2563eb" style={{ marginBottom: '12px' }} />
            <h3>3. Connect and Collaborate</h3>
            <p>Start building together - side projects, startups, or more.</p>
          </div>
        </div>
      </section>

      <footer className='footer'>
        © 2025 Skill & Team Finder. Built with ❤️ using Next.js.
      </footer>
    </main>
  )
}
