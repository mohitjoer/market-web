import Link from 'next/link';
import { Instagram, Twitter, Linkedin } from 'lucide-react';

function Footer() {
  return (
    <div className="bg-neutral-900 text-white py-10 px-4 flex flex-col items-center">
        <div className="flex flex-row justify-between w-5/6">
            {/* Logo and description */}
            <div>
                <h2 className="text-2xl font-bold text-white">AdSpots</h2>
                <p className="mt-2 text-sm">
                    Connect brands with the right communities — all in one place.
                </p>
            </div>

            {/* Explore */}
            <div>
                <h3 className="text-lg font-semibold text-white mb-2">Explore</h3>
                <ul className="space-y-2 text-sm">
                    <li><Link href="/spots" className="hover:text-white">Browse Spots</Link></li>
                    <li><Link href="/creators" className="hover:text-white">For Creators</Link></li>
                    <li><Link href="/pricing" className="hover:text-white">Pricing</Link></li>
                    <li><Link href="/faq" className="hover:text-white">FAQ</Link></li>
                </ul>
            </div>

            {/* Company */}
            <div>
                <h3 className="text-lg font-semibold text-white mb-2">Company</h3>
                <ul className="space-y-2 text-sm">
                    <li><Link href="/about" className="hover:text-white">About Us</Link></li>
                    <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
                    <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
                    <li><Link href="/careers" className="hover:text-white">Careers</Link></li>
                </ul>
            </div>

            {/* Legal & Social */}
            <div>
                <h3 className="text-lg font-semibold text-white mb-2">Legal</h3>
                <ul className="space-y-2 text-sm">
                    <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
                    <li><Link href="/terms" className="hover:text-white">Terms of Service</Link></li>
                </ul>

                <div className="flex space-x-4 mt-4">
                    <Link 
                        href="https://instagram.com" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-neutral-400 hover:text-white transition-colors"
                    >
                        <Instagram className="h-6 w-6" />
                        <span className="sr-only">Instagram</span>
                    </Link>
                    <Link 
                        href="https://twitter.com" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-neutral-400 hover:text-white transition-colors"
                    >
                        <Twitter className="h-6 w-6" />
                        <span className="sr-only">Twitter</span>
                    </Link>
                    <Link 
                        href="https://linkedin.com" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-neutral-400 hover:text-white transition-colors"
                    >
                        <Linkedin className="h-6 w-6" />
                        <span className="sr-only">LinkedIn</span>
                    </Link>
                </div>
            </div>
        </div>
        <div className="mt-8 text-center text-sm text-gray-400">
            <span>© 2024 AdSpots. All rights reserved.</span>
        </div>
    </div>
  );
}

export default Footer;