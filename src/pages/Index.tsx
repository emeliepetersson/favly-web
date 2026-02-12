import { Mail, Shield, Smartphone } from "lucide-react";
import appIcon from "@/assets/icon.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Nav */}
      <nav className="sticky top-0 z-10 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="text-xl font-bold tracking-tight">
            Favly
          </span>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#privacy" className="hover:text-foreground transition-colors">Privacy</a>
            <a href="#support" className="hover:text-foreground transition-colors">Support</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header className="max-w-3xl mx-auto px-6 py-20 text-center">
        <img src={appIcon} alt="Favly app icon" className="w-20 h-20 rounded-2xl shadow-lg mb-6 mx-auto" />
        <h1 className="text-4xl md:text-5xl mb-4 text-foreground">Favly</h1>
        <p className="text-lg text-muted-foreground max-w-md mx-auto">
          Your favorite shopping hub. Collect, compare and decide — all in one place.
        </p>
      </header>

      {/* Privacy Policy */}
      <section id="privacy" className="max-w-3xl mx-auto px-6 py-16">
        <div className="flex items-center gap-3 mb-8">
          <Shield className="w-5 h-5 text-primary" />
          <h2 className="text-2xl text-foreground">Privacy Policy</h2>
        </div>
        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <p className="text-sm text-muted-foreground">Last updated: February 12, 2025</p>

          <div>
            <h3 className="text-lg text-foreground mb-2">Overview</h3>
            <p>
              Favly is designed with your privacy in mind. The app helps you save and organize product information 
              from websites you visit. We do not collect, store, or transmit any of your personal data to external servers.
            </p>
          </div>

          <div>
            <h3 className="text-lg text-foreground mb-2">Data Storage</h3>
            <p>
              All data you save in Favly — including product names, prices, images, descriptions, and URLs — is 
              stored <strong className="text-foreground">locally on your device only</strong> using SQLite. This data never leaves your device 
              and is not accessible to us or any third party.
            </p>
          </div>

          <div>
            <h3 className="text-lg text-foreground mb-2">Third-Party Content</h3>
            <p>
              When you save a product link, Favly may extract publicly available information (such as the product title, 
              price, and image) from the linked webpage. This content is sourced from the website you provide and is 
              stored only on your device. Favly does not modify or redistribute this content.
            </p>
          </div>

          <div>
            <h3 className="text-lg text-foreground mb-2">No Account Required</h3>
            <p>
              Favly does not require you to create an account, sign in, or provide any personal information such as 
              your name, email address, or phone number.
            </p>
          </div>

          <div>
            <h3 className="text-lg text-foreground mb-2">No Analytics or Tracking</h3>
            <p>
              Favly does not use any analytics services, advertising SDKs, or tracking technologies. We do not 
              collect usage data, device information, or location data.
            </p>
          </div>

          <div>
            <h3 className="text-lg text-foreground mb-2">Data Deletion</h3>
            <p>
              Since all data is stored locally on your device, you can delete individual items within the app at any time. 
              Uninstalling Favly will permanently remove all saved data. There is no cloud backup or data retention.
            </p>
          </div>

          <div>
            <h3 className="text-lg text-foreground mb-2">External Links</h3>
            <p>
              Favly allows you to open saved product links in your device's web browser. Once you leave Favly 
              and visit an external website, that website's own privacy policy applies. We are not responsible for 
              the privacy practices of third-party websites.
            </p>
          </div>

          <div>
            <h3 className="text-lg text-foreground mb-2">Children's Privacy</h3>
            <p>
              Favly does not knowingly collect any personal information from children. Since no personal data 
              is collected from any user, the app is safe for all ages.
            </p>
          </div>

          <div>
            <h3 className="text-lg text-foreground mb-2">Changes to This Policy</h3>
            <p>
              We may update this privacy policy from time to time. Any changes will be reflected on this page 
              with an updated revision date.
            </p>
          </div>
        </div>
      </section>

      {/* Support */}
      <section id="support" className="max-w-3xl mx-auto px-6 py-16">
        <div className="flex items-center gap-3 mb-8">
          <Smartphone className="w-5 h-5 text-primary" />
          <h2 className="text-2xl text-foreground">Support</h2>
        </div>
        <p className="text-muted-foreground mb-6">
          Have a question, found a bug, or want to suggest a feature? We'd love to hear from you.
        </p>
        <a
          href="mailto:support@example.com"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-primary-foreground transition-opacity hover:opacity-90"
          style={{ background: "var(--gradient-primary)" }}
        >
          <Mail className="w-4 h-4" />
          <span className="font-medium">support@example.com</span>
        </a>
      </section>

      {/* Footer */}
      <footer className="max-w-3xl mx-auto px-6 py-10 border-t border-border text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Favly. All rights reserved.
      </footer>
    </div>
  );
};

export default Index;
