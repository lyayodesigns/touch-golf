import Link from 'next/link'

// SVG components for social icons
const TwitterIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
  </svg>
)

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
)

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
)

const GithubIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
)

export function Footer() {
  return (
    <footer 
      className="w-full mt-auto bg-white/20 backdrop-blur-lg border-t border-white/30 text-gray-900 py-12 px-4 sm:px-6 lg:px-10 xl:px-16 relative z-10"
      aria-label="Site Footer"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Branding & Contact */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">TouchGolf</h2>
          <div className="text-gray-900/80 space-y-1">
            <p>hello@touchgolf.com</p>
            <p>+1 (555) TOUCH-01</p>
          </div>
        </div>

        {/* Explore Links */}
        <nav className="space-y-4" aria-label="Explore">
          <h3 className="font-semibold text-lg">Explore</h3>
          <ul className="space-y-2">
            <li><Link href="#" className="text-gray-900/80 hover:text-gray-900 transition-colors">Solutions</Link></li>
            <li><Link href="#" className="text-gray-900/80 hover:text-gray-900 transition-colors">About Us</Link></li>
            <li><Link href="#" className="text-gray-900/80 hover:text-gray-900 transition-colors">Portfolio</Link></li>
            <li><Link href="#" className="text-gray-900/80 hover:text-gray-900 transition-colors">Insights</Link></li>
            <li><Link href="#" className="text-gray-900/80 hover:text-gray-900 transition-colors">Support</Link></li>
          </ul>
        </nav>

        {/* Follow */}
        <div className="space-y-4">
          <h3 className="font-semibold text-lg">Follow</h3>
          <div className="flex gap-4">
            <Link href="#" aria-label="LinkedIn" className="p-2 bg-white/40 rounded-full hover:bg-white/60 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-900"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </Link>
            <Link href="#" aria-label="Instagram" className="p-2 bg-white/40 rounded-full hover:bg-white/60 transition-colors">
              <InstagramIcon className="w-5 h-5 text-gray-900" />
            </Link>
            <Link href="#" aria-label="YouTube" className="p-2 bg-white/40 rounded-full hover:bg-white/60 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-900"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
            </Link>
          </div>
        </div>

        {/* Newsletter */}
        <div className="space-y-4">
          <h3 className="font-semibold text-lg">Newsletter</h3>
          <p className="text-gray-900/80 text-sm">
            Join the inner circle—get course experience insights delivered monthly.
          </p>
          <div className="flex gap-2">
            <input 
              type="email" 
              placeholder="Your email" 
              className="bg-white/50 border border-white/60 rounded-full px-4 py-2 text-sm w-full focus:outline-none focus:ring-2 focus:ring-gray-900/50"
            />
            <button className="bg-gray-900 text-white rounded-full px-4 py-2 text-sm font-semibold hover:bg-gray-800 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/20 text-center text-gray-900/60 text-sm">
        <p>&copy; {new Date().getFullYear()} TouchGolf. All rights reserved.</p>
      </div>
    </footer>
  )
}
