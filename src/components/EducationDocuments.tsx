import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Download, Eye, FileText, FolderOpen, X } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

type EducationalDocument = {
  id: string;
  fileName: string;
  title: string;
  url: string;
  previewUrl?: string;
  isImage: boolean;
};

const pdfModules = import.meta.glob("../../education-pdfs/**/*.{pdf,PDF}", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;

const imageModules = import.meta.glob("../../education-pdfs/**/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;

const previewModules = import.meta.glob("../../education-pdfs/previews/**/*.{png,jpg,jpeg,webp,PNG,JPG,JPEG,WEBP}", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;

function normalizePath(path: string) {
  return path.replace(/\\/g, "/");
}

function detailsFromPath(path: string) {
  const fileName = normalizePath(path).split("/").pop() ?? "Educational document";
  return {
    fileName,
    title: fileName.replace(/\.[^.]+$/, "").replace(/[-_]+/g, " ").trim(),
  };
}

function isGeneratedPreviewPath(path: string) {
  return normalizePath(path).includes("/education-pdfs/previews/");
}

function previewPathForPdf(path: string) {
  return normalizePath(path).replace("/education-pdfs/", "/education-pdfs/previews/").replace(/\.pdf$/i, ".png");
}

const previewsByPath = new Map(
  Object.entries(previewModules).map(([path, url]) => [normalizePath(path), url]),
);

const educationalDocuments: EducationalDocument[] = [
  ...Object.entries(pdfModules).map(([path, url]) => ({
    id: path,
    ...detailsFromPath(path),
    url,
    previewUrl: previewsByPath.get(previewPathForPdf(path)),
    isImage: false,
  })),
  ...Object.entries(imageModules)
    .filter(([path]) => !isGeneratedPreviewPath(path))
    .map(([path, url]) => ({
      id: path,
      ...detailsFromPath(path),
      url,
      previewUrl: url,
      isImage: true,
    })),
].sort((a, b) => a.title.localeCompare(b.title, undefined, { sensitivity: "base" }));

export function EducationDocuments() {
  const [selectedDocument, setSelectedDocument] = useState<EducationalDocument | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!selectedDocument) return;

    previousFocusRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedDocument(null);
    };

    document.addEventListener("keydown", onKeyDown);
    const focusTimer = window.setTimeout(() => closeButtonRef.current?.focus(), 0);

    return () => {
      window.clearTimeout(focusTimer);
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      previousFocusRef.current?.focus();
    };
  }, [selectedDocument]);

  return (
    <section id="education-pdfs" className="scroll-mt-20 border-y border-slate-200 bg-[#f2f6fb] py-20 sm:py-28 dark:border-white/10 dark:bg-[#0a101d]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading kicker="Educational Documents" title="Educational PDF & image previews">
            Add verified academic PDFs or images to the <code className="font-mono text-[12px] text-accent-800 dark:text-accent-200">education-pdfs</code> folder in the project root. PDFs are converted to first-page PNG previews during the build; JPGs are displayed directly.
          </SectionHeading>
        </Reveal>

        {educationalDocuments.length === 0 ? (
          <Reveal delay={120}>
            <div className="mt-12 flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white/60 px-6 py-14 text-center dark:border-white/15 dark:bg-white/[0.03]">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-50 text-navy-700 dark:bg-white/10 dark:text-navy-200">
                <FolderOpen className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-4 font-serif text-xl font-semibold text-navy-900 dark:text-white">No educational documents yet</h3>
              <p className="mt-2 max-w-lg text-[14px] leading-relaxed text-slate-500 dark:text-slate-400">
                Copy academic PDFs or JPGs into the <code className="font-mono text-[12px]">education-pdfs</code> folder,
                then restart the development server or run the build again.
              </p>
            </div>
          </Reveal>
        ) : (
          <>
            <p className="mt-8 text-[12px] font-medium tracking-wide text-slate-500 uppercase dark:text-slate-400">
              {educationalDocuments.length} {educationalDocuments.length === 1 ? "document" : "documents"} available
            </p>
            <ul className="mt-5 grid gap-5 md:grid-cols-2">
              {educationalDocuments.map((document, index) => (
                <Reveal key={document.id} delay={120 + index * 70}>
                  <li className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-white/10 dark:bg-[#111827]">
                    <button
                      type="button"
                      onClick={() => setSelectedDocument(document)}
                      aria-label={`Show image preview of ${document.fileName}`}
                      className="group relative block aspect-[16/10] w-full overflow-hidden bg-slate-100 text-left dark:bg-slate-950"
                    >
                      {document.previewUrl ? (
                        <img
                          src={document.previewUrl}
                          alt={document.isImage ? document.title : `First page of ${document.title}`}
                          loading="lazy"
                          className={`h-full w-full ${document.isImage ? "object-cover" : "object-contain p-2"}`}
                        />
                      ) : (
                        <span className="flex h-full flex-col items-center justify-center gap-2 text-slate-500 dark:text-slate-400">
                          <FileText className="h-8 w-8" aria-hidden="true" />
                          <span className="text-[12px] font-medium">Preview unavailable</span>
                        </span>
                      )}
                      <span className="pointer-events-none absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-navy-900 opacity-0 shadow-sm transition group-focus-visible:opacity-100 group-hover:opacity-100 dark:bg-slate-900/90 dark:text-white">
                        <Eye className="h-4 w-4" aria-hidden="true" />
                      </span>
                    </button>

                    <div className="flex flex-1 flex-col p-5">
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="break-words font-serif text-lg font-semibold text-navy-900 dark:text-white">
                          {document.title}
                        </h3>
                        <span className="shrink-0 rounded-full bg-navy-50 px-2.5 py-1 text-[10px] font-semibold tracking-wide text-navy-800 uppercase dark:bg-white/10 dark:text-navy-100">
                          {document.isImage ? "JPG" : "PDF"}
                        </span>
                      </div>
                      <div className="mt-auto flex flex-wrap gap-4 pt-5">
                        <a
                          href={document.url}
                          target="_blank"
                          rel="noreferrer noopener"
                          aria-label={`Open ${document.fileName}`}
                          className="inline-flex items-center gap-1 text-[13.5px] font-semibold text-navy-900 hover:underline dark:text-white"
                        >
                          {document.isImage ? "Open image" : "Open PDF"}
                          <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                        </a>
                        <a
                          href={document.url}
                          download={document.fileName}
                          aria-label={`Download ${document.fileName}`}
                          className="inline-flex items-center gap-1 text-[13.5px] font-semibold text-accent-700 hover:underline dark:text-accent-300"
                        >
                          <Download className="h-3.5 w-3.5" aria-hidden="true" />
                          Download
                        </a>
                      </div>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ul>
          </>
        )}
      </div>

      {selectedDocument ? (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-sm"
          role="presentation"
          onClick={() => setSelectedDocument(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="document-preview-title"
            className="flex max-h-[calc(100vh-2rem)] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl dark:border-white/10 dark:bg-[#111827]"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex shrink-0 items-start justify-between gap-4 border-b border-slate-200 p-5 dark:border-white/10 sm:p-6">
              <div className="min-w-0">
                <p className="kicker">Document preview</p>
                <h3 id="document-preview-title" className="mt-1 break-words font-serif text-xl font-semibold text-navy-900 dark:text-white">
                  {selectedDocument.title}
                </h3>
              </div>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={() => setSelectedDocument(null)}
                aria-label="Close document preview"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-slate-200 text-slate-600 hover:border-accent-500 hover:text-accent-600 dark:border-white/10 dark:text-slate-300 dark:hover:text-accent-300"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            <div className="min-h-0 flex-1 overflow-auto bg-slate-100 p-4 dark:bg-slate-950">
              {selectedDocument.previewUrl ? (
                <img
                  src={selectedDocument.previewUrl}
                  alt={selectedDocument.isImage ? selectedDocument.title : `First page of ${selectedDocument.title}`}
                  className="mx-auto block max-h-[65vh] max-w-full object-contain"
                />
              ) : (
                <div className="flex h-[45vh] min-h-[280px] flex-col items-center justify-center gap-3 text-center text-slate-500 dark:text-slate-400">
                  <FileText className="h-10 w-10" aria-hidden="true" />
                  <p className="text-[14px]">This document does not have a generated image preview.</p>
                </div>
              )}
            </div>

            <div className="flex shrink-0 flex-wrap items-center justify-between gap-3 border-t border-slate-200 p-5 dark:border-white/10 sm:p-6">
              <p className="text-[12.5px] leading-relaxed text-slate-500 dark:text-slate-400">
                {selectedDocument.isImage
                  ? "This is the original image from the education documents folder."
                  : "This image is rendered from the first page of the PDF."}
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href={selectedDocument.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={`Open ${selectedDocument.fileName}`}
                  className="inline-flex items-center gap-1 text-[13.5px] font-semibold text-navy-900 hover:underline dark:text-white"
                >
                  {selectedDocument.isImage ? "Open image" : "Open PDF"}
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
                <a
                  href={selectedDocument.url}
                  download={selectedDocument.fileName}
                  aria-label={`Download ${selectedDocument.fileName}`}
                  className="inline-flex items-center gap-1 text-[13.5px] font-semibold text-accent-700 hover:underline dark:text-accent-300"
                >
                  <Download className="h-3.5 w-3.5" aria-hidden="true" />
                  Download
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
