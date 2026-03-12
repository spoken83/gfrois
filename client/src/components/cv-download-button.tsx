import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Download, CheckCircle } from "lucide-react";
import cvFile from "@assets/GordonFrois_cv_2025_1754244128872.pdf";

interface CvDownloadButtonProps {
  variant?: "default" | "outline";
  className?: string;
}

function triggerDownload() {
  const link = document.createElement("a");
  link.href = cvFile;
  link.download = "Gordon_Frois_CV_2025.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

async function trackDownload(email?: string) {
  try {
    await fetch("/api/cv-download", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: email || null }),
    });
  } catch {
    // Don't block download if tracking fails
  }
}

export default function CvDownloadButton({
  variant = "outline",
  className = "border-2 border-accent text-accent px-8 py-3 hover:bg-accent hover:text-white transition-all duration-200",
}: CvDownloadButtonProps) {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleDownloadWithEmail = async () => {
    setSubmitted(true);
    await trackDownload(email);
    triggerDownload();
    setTimeout(() => {
      setOpen(false);
      setSubmitted(false);
      setEmail("");
    }, 2000);
  };

  const handleSkipDownload = async () => {
    setSubmitted(true);
    await trackDownload();
    triggerDownload();
    setTimeout(() => {
      setOpen(false);
      setSubmitted(false);
      setEmail("");
    }, 2000);
  };

  return (
    <>
      <Button
        variant={variant}
        className={className}
        onClick={() => setOpen(true)}
      >
        <Download className="mr-2 h-4 w-4" />
        Download CV
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md">
          {!submitted ? (
            <>
              <DialogHeader>
                <DialogTitle>Download My CV</DialogTitle>
                <DialogDescription>
                  Leave your email and I'll personally follow up — or skip straight to the download.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4 pt-2">
                <Input
                  type="email"
                  placeholder="your@email.com (optional)"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && email) handleDownloadWithEmail();
                  }}
                />
                <div className="flex flex-col gap-2">
                  <Button
                    className="w-full bg-primary text-white hover:bg-blue-700"
                    onClick={handleDownloadWithEmail}
                    disabled={!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)}
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download CV
                  </Button>
                  <button
                    onClick={handleSkipDownload}
                    className="text-sm text-secondary hover:text-primary transition-colors py-2"
                  >
                    Skip, just download →
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="flex flex-col items-center py-6">
              <CheckCircle className="h-12 w-12 text-green-500 mb-4" />
              <p className="text-lg font-semibold">
                {email ? "Thanks! I'll be in touch." : "Downloading now!"}
              </p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
