import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";

const ResumeDownloadButton = () => {
  const [downloading, setDownloading] = useState(false);
  const resumeFile = "/assets/resume.pdf"; // Adjust path to your resume file

  const handleDownload = () => {
    setDownloading(true);

    // Create a temporary anchor element to trigger the download
    const link = document.createElement("a");
    link.href = resumeFile;
    link.download = "resume.pdf"; // Name of the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Reset the downloading state after 2 seconds
    setTimeout(() => {
      setDownloading(false);
    }, 2000);
  };

  return (
    <motion.button
      onClick={handleDownload}
      whileHover={{ y: -5 }}
      whileTap={{ scale: 1.05 }}
      className="relative px-1 py-4 text-sm text-center rounded-full font-extralight bg-primary w-[12rem] cursor-pointer overflow-hidden"
    >
      <AnimatePresence mode="wait">
        {downloading ? (
          <motion.p
            className="flex items-center justify-center gap-2"
            key="downloading"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.1, ease: "easeInOut" }}
          >
            <img src="/assets/download-done.svg" className="w-5" alt="download done icon" />
            Downloading...
          </motion.p>
        ) : (
          <motion.p
            className="flex items-center justify-center gap-2"
            key="download"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
          >
         <FiDownload className="w-5 h-5" aria-hidden="true" />
            Download Resume
          </motion.p>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

export default ResumeDownloadButton;