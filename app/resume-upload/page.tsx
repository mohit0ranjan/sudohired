'use client';

import { Navbar } from '@/components/Navbar';
import { useStore } from '@/store/useStore';
import { motion } from 'framer-motion';
import { Upload, File, X, CheckCircle, Loader2 } from 'lucide-react';
import { useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

export default function ResumeUploadPage() {
    const [file, setFile] = useState<File | null>(null);
    const [uploading, setUploading] = useState(false);
    const [progress, setProgress] = useState(0);
    const { setResumeData, setStage } = useStore();
    const router = useRouter();

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const selectedFile = e.target.files[0];
            if (selectedFile.type !== 'application/pdf') {
                toast.error('Please upload a PDF file');
                return;
            }
            setFile(selectedFile);
        }
    };

    const handleUpload = async () => {
        if (!file) return;

        setUploading(true);
        // Simulate upload progress
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                return prev + 10;
            });
        }, 200);

        // Simulate API call
        setTimeout(() => {
            clearInterval(interval);
            setResumeData({
                name: file.name,
                skills: ['React', 'TypeScript', 'Next.js', 'Node.js', 'Tailwind CSS'],
                experience: '2+ years',
                education: 'B.Tech Computer Science',
            });
            setStage('SCREENING');
            setUploading(false);
            toast.success('Resume uploaded and analyzed successfully!');
            router.push('/resume-analysis');
        }, 2500);
    };

    return (
        <main className="min-h-screen bg-background pt-24">
            <Navbar />
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="glass p-12 rounded-3xl border text-center"
                >
                    <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                        <Upload className="w-10 h-10 text-primary" />
                    </div>
                    <h1 className="text-3xl font-bold mb-4">Upload Your Resume</h1>
                    <p className="text-muted-foreground mb-8 text-lg">
                        We&apos;ll analyze your skills and experience to match you with top companies.
                    </p>

                    {!file ? (
                        <div
                            className="border-2 border-dashed border-muted-foreground/20 rounded-2xl p-12 hover:border-primary/50 transition-all cursor-pointer bg-secondary/30 group"
                            onClick={() => document.getElementById('resume-upload')?.click()}
                        >
                            <input
                                id="resume-upload"
                                type="file"
                                className="hidden"
                                accept=".pdf"
                                onChange={handleFileChange}
                            />
                            <File className="w-12 h-12 text-muted-foreground/50 mx-auto mb-4 group-hover:text-primary transition-colors" />
                            <p className="text-lg font-medium">Click or drag & drop to upload</p>
                            <p className="text-sm text-muted-foreground">PDF (max. 5MB)</p>
                        </div>
                    ) : (
                        <div className="bg-secondary/50 rounded-2xl p-6 border flex items-center justify-between mb-8">
                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                                    <File className="w-6 h-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <p className="font-semibold truncate max-w-[200px] md:max-w-sm">{file.name}</p>
                                    <p className="text-sm text-muted-foreground">{(file.size / (1024 * 1024)).toFixed(2)} MB</p>
                                </div>
                            </div>
                            {!uploading && (
                                <button
                                    onClick={() => setFile(null)}
                                    className="p-2 hover:bg-destructive/10 hover:text-destructive rounded-lg transition-colors"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                            )}
                        </div>
                    )}

                    {file && (
                        <div className="space-y-6">
                            {uploading && (
                                <div className="space-y-2">
                                    <div className="flex justify-between text-sm">
                                        <span>Analyzing...</span>
                                        <span>{progress}%</span>
                                    </div>
                                    <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-primary transition-all duration-300"
                                            style={{ width: `${progress}%` }}
                                        />
                                    </div>
                                </div>
                            )}

                            <button
                                disabled={uploading}
                                onClick={handleUpload}
                                className="w-full py-4 bg-primary text-primary-foreground rounded-xl font-bold text-lg hover:bg-primary/90 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                            >
                                {uploading ? (
                                    <>
                                        <Loader2 className="w-5 h-5 animate-spin" />
                                        Processing...
                                    </>
                                ) : (
                                    <>
                                        <CheckCircle className="w-5 h-5" />
                                        Confirm & Start Analysis
                                    </>
                                )}
                            </button>
                        </div>
                    )}
                </motion.div>
            </div>
        </main>
    );
}
