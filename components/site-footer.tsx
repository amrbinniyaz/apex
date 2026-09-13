import { ArrowUp, ArrowUpRight } from 'lucide-react';

export function SiteFooter({ home = false }: { home?: boolean }) {
  return <footer className="apex-footer" id="contact">
        <div className="apex-footer-top">
          <div className="apex-footer-brand">
            <a className="footer-brand-lockup" href={home ? "#top" : "/"} aria-label="Apex International School home"><img src="/assets/apex-logo.svg" alt="" width="205" height="221" loading="lazy" /><span>Apex<span>International School</span></span></a>
            <p>Big ideas. Bright futures.<br /><span>Your own path.</span></p>
          </div>
          <nav className="apex-footer-nav" aria-label="Explore Apex">
            <h2>Keep exploring</h2>
            <a href={`${home ? '' : '/'}#our-school`}>Our school <ArrowUpRight size={17} /></a>
            <a href={`${home ? '' : '/'}#life-at-apex`}>Life at Apex <ArrowUpRight size={17} /></a>
            <a href={`${home ? '' : '/'}#discover`}>Watch our film <ArrowUpRight size={17} /></a>
            <a href="/visit-us">Come for a visit <ArrowUpRight size={17} /></a>
            <a href="/apply-now">Apply now <ArrowUpRight size={17} /></a>
          </nav>
          <div className="apex-footer-contact">
            <h2>Say hello</h2>
            <address>Odumbra, Olavanna P.O.<br />Kozhikode, Kerala 673025<br />India</address>
            <a href="tel:+914952965004">+91 495 296 5004 <ArrowUpRight size={17} /></a>
            <a className="footer-email" href="mailto:info@apexinternationalschool.org">info@apexinternationalschool.org <ArrowUpRight size={17} /></a>
            <a className="footer-directions" href="https://www.google.com/maps/search/?api=1&query=Apex%20International%20School%20Odumbra%20Olavanna%20Kozhikode" target="_blank" rel="noopener noreferrer">Find your way here <ArrowUpRight size={18} /></a>
          </div>
        </div>
        <div className="apex-footer-signoff"><p>Your next chapter <span>starts here.</span></p><a href="#top" aria-label="Back to top"><ArrowUp size={25} strokeWidth={1.5} /><span>Back to top</span></a></div>
        <div className="apex-footer-bottom"><p>© {new Date().getFullYear()} Apex International School</p><a href="https://apexinternationalschool.org/mandatory-public-disclosure/" target="_blank" rel="noopener noreferrer">Mandatory public disclosure <ArrowUpRight size={14} /></a><span>Made for bright futures.</span></div>
      </footer>;
}

