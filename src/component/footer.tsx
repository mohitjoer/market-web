import Link from 'next/link';
import { Instagram, Twitter, Linkedin } from 'lucide-react';

function Footer() {
  return (
    <div className="bg-neutral-900 text-white py-8 sm:py-10 md:py-12 px-4 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12">
          {/* Logo and description */}
          <div className="text-center sm:text-left">
            <h2 className="text-xl sm:text-2xl font-bold text-white">AdSpots</h2>
            <p className="mt-2 text-sm text-neutral-400">
              Connect brands with the right communities — all in one place.
            </p>
          </div>

          {/* Explore */}
          <div className="text-center sm:text-left">
            <h3 className="text-base sm:text-lg font-semibold text-white mb-3">Explore</h3>
            <ul className="space-y-2">
              <li><Link href="/spots" className="text-sm text-neutral-400 hover:text-white transition-colors">Browse Spots</Link></li>
              <li><Link href="/creators" className="text-sm text-neutral-400 hover:text-white transition-colors">For Creators</Link></li>
              <li><Link href="/pricing" className="text-sm text-neutral-400 hover:text-white transition-colors">Pricing</Link></li>
              <li><Link href="/faq" className="text-sm text-neutral-400 hover:text-white transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="text-center sm:text-left">
            <h3 className="text-base sm:text-lg font-semibold text-white mb-3">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-sm text-neutral-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-sm text-neutral-400 hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/blog" className="text-sm text-neutral-400 hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/careers" className="text-sm text-neutral-400 hover:text-white transition-colors">Careers</Link></li>
            </ul>
          </div>

          {/* Legal & Social */}
          <div className="text-center sm:text-left">
            <h3 className="text-base sm:text-lg font-semibold text-white mb-3">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="/privacy" className="text-sm text-neutral-400 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-sm text-neutral-400 hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>

            {/* Social Icons */}
            <div className="flex justify-center sm:justify-start space-x-4 mt-6">
              <Link 
                href="https://instagram.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-white transition-colors"
              >
                <Instagram className="h-5 w-5 sm:h-6 sm:w-6" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link 
                href="https://twitter.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-white transition-colors"
              >
                <Twitter className="h-5 w-5 sm:h-6 sm:w-6" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link 
                href="https://linkedin.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-white transition-colors"
              >
                <Linkedin className="h-5 w-5 sm:h-6 sm:w-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-neutral-800 text-center sm:text-left">
          <p className="text-sm text-neutral-400">
            © 2024 AdSpots. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;