import * as React from "react";
import { useDropzone } from "react-dropzone";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { UploadCloud, FileText } from "lucide-react";

export function CardWithPdf() {
  const [pdfFile, setPdfFile] = React.useState(null);
  const [open, setOpen] = React.useState(false); // Track dialog open/close state

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    if (file.type === "application/pdf") {
      setPdfFile(file);
    } else {
      alert("Only PDF files are allowed!");
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "application/pdf": [".pdf"] },
  });

  return (
    <Card className="w-[350px] p-4 border border-gray-300">
      <div className="mb-3">
        <CardDescription>Upload a PDF to generate the resume.</CardDescription>
      </div>
      <CardContent>
        <Dialog
          open={open}
          onOpenChange={(state) => {
            setOpen(state);
            if (!state) setPdfFile(null); // Reset file when dialog closes
          }}
        >
          <DialogTrigger asChild>
            <Button variant="outline" size="lg">
              PDF
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Upload PDF File</DialogTitle>
              <DialogDescription>
                Drag & drop or click to upload a PDF file.
              </DialogDescription>
            </DialogHeader>

            {/* Drag & Drop Area */}
            <div
              {...getRootProps()}
              className={`p-6 border-2 border-dashed rounded-lg flex flex-col items-center justify-center cursor-pointer ${
                isDragActive ? "border-blue-500 bg-blue-100" : "border-gray-300"
              }`}
            >
              <input {...getInputProps()} />
              <UploadCloud size={40} className="text-gray-500" />
              <p className="text-gray-500">
                {isDragActive
                  ? "Drop the PDF here..."
                  : "Drag & drop a PDF or click to upload"}
              </p>
            </div>

            {/* File Preview */}
            {pdfFile && (
              <div className="mt-4 p-3 border rounded-lg flex items-center gap-2 bg-gray-100">
                <FileText size={20} className="text-blue-500" />
                <p className="text-gray-700">{pdfFile.name}</p>
              </div>
            )}

            <DialogFooter>
              <Button type="submit" disabled={!pdfFile}>
                Generate
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  );
}
