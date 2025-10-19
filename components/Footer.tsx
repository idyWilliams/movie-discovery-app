import { Phone, Mail, Linkedin } from "lucide-react";

const DEVELOPER_INFO = {
  name: "Idorenyin Williams",
  phone: "+2348030939741",
  email: "widorenyin0@gmail.com",
  linkedin: "https://www.linkedin.com/in/idorenyin-williams/",
  univelcity: "https://univelcity.com/",
  github: "https://github.com/idyWilliams",
};

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-foreground mb-4">CineHub</h3>
            <p className="text-muted-foreground text-sm">
              Discover your next favorite movie
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-4">Categories</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Action
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Drama
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Sci-Fi
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <div className="flex flex-col items-center space-y-4">
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-3">
                Built & Deployed with ❤️ by{" "}
                <a
                  href={DEVELOPER_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:underline font-semibold"
                >
                  {DEVELOPER_INFO.name}
                </a>
              </p>
              <p className="text-xs text-muted-foreground italic mb-4">
                A product of frontend engineering training at{" "}
                <a
                  href={DEVELOPER_INFO.univelcity}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-medium"
                >
                  Univelcity
                </a>
                <br />
                <span className="text-xs">
                  (where satisfaction was optional, but excellence wasn't)
                </span>
              </p>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-4 text-sm text-muted-foreground">
              <a
                href={`tel:${DEVELOPER_INFO.phone}`}
                className="hover:text-primary transition-colors flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>{DEVELOPER_INFO.phone}</span>
              </a>
              <span className="hidden sm:inline">•</span>
              <a
                href={`mailto:${DEVELOPER_INFO.email}`}
                className="hover:text-primary transition-colors flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                <span>{DEVELOPER_INFO.email}</span>
              </a>
              <span className="hidden sm:inline">•</span>
              <a
                href={DEVELOPER_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors flex items-center gap-2"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
            </div>

            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} CineHub. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
