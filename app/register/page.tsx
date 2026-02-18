'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'framer-motion';
import { Mail, Lock, User, ArrowRight, Github, Chrome, Cpu } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { Navbar } from '@/components/landing/Navbar';

const registerSchema = z.object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Invalid email address'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
});

type RegisterForm = z.infer<typeof registerSchema>;

export default function RegisterPage() {
    const router = useRouter();
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<RegisterForm>({
        resolver: zodResolver(registerSchema),
    });

    const onSubmit = async (data: RegisterForm) => {
        await new Promise(resolve => setTimeout(resolve, 1500));
        toast.success('Account created successfully!');
        router.push('/login');
    };

    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Navbar />

            <main className="flex-1 flex items-center justify-center p-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="w-full max-w-sm"
                >
                    <div className="text-center mb-8">
                        <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-primary-foreground mx-auto mb-6 shadow-lg shadow-primary/20">
                            <Cpu className="w-6 h-6" />
                        </div>
                        <h1 className="text-2xl font-bold tracking-tight text-foreground">Create account</h1>
                        <p className="text-sm text-muted-foreground mt-2">
                            Join thousands of developers mastering their craft.
                        </p>
                    </div>

                    <div className="bg-card border border-border rounded-xl shadow-sm p-6 space-y-6">
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                            <div className="space-y-2">
                                <label className="text-xs font-semibold text-foreground">Full Name</label>
                                <div className="relative">
                                    <input
                                        {...register('name')}
                                        type="text"
                                        className="w-full px-3 py-2 bg-muted/30 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all pl-9"
                                        placeholder="John Doe"
                                    />
                                    <User className="w-4 h-4 text-muted-foreground absolute left-3 top-2.5" />
                                </div>
                                {errors.name && <p className="text-xs text-red-500">{errors.name.message}</p>}
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-semibold text-foreground">Email</label>
                                <div className="relative">
                                    <input
                                        {...register('email')}
                                        type="email"
                                        className="w-full px-3 py-2 bg-muted/30 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all pl-9"
                                        placeholder="name@company.com"
                                    />
                                    <Mail className="w-4 h-4 text-muted-foreground absolute left-3 top-2.5" />
                                </div>
                                {errors.email && <p className="text-xs text-red-500">{errors.email.message}</p>}
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-semibold text-foreground">Password</label>
                                <div className="relative">
                                    <input
                                        {...register('password')}
                                        type="password"
                                        className="w-full px-3 py-2 bg-muted/30 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all pl-9"
                                        placeholder="Min 6 chars"
                                    />
                                    <Lock className="w-4 h-4 text-muted-foreground absolute left-3 top-2.5" />
                                </div>
                                {errors.password && <p className="text-xs text-red-500">{errors.password.message}</p>}
                            </div>

                            <div className="flex items-start gap-2 pt-2">
                                <input type="checkbox" id="terms" className="mt-1 rounded border-border text-primary focus:ring-primary" required />
                                <label htmlFor="terms" className="text-xs text-muted-foreground leading-relaxed">
                                    I agree to the <Link href="/terms" className="text-primary hover:underline">Terms of Service</Link> and <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link>.
                                </label>
                            </div>

                            <button
                                disabled={isSubmitting}
                                type="submit"
                                className="w-full py-2.5 bg-primary text-primary-foreground rounded-lg text-sm font-semibold hover:bg-primary/90 transition-all flex items-center justify-center gap-2 shadow-sm disabled:opacity-50 mt-2"
                            >
                                {isSubmitting ? 'Creating account...' : 'Create account'} <ArrowRight className="w-4 h-4" />
                            </button>
                        </form>

                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-border"></div>
                            </div>
                            <div className="relative flex justify-center text-[10px] uppercase tracking-wider">
                                <span className="bg-card px-2 text-muted-foreground">Or sign up with</span>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                            <button className="flex items-center justify-center gap-2 py-2 px-4 bg-background border border-border rounded-lg hover:bg-muted transition-colors text-sm font-medium">
                                <Github className="w-4 h-4" /> Github
                            </button>
                            <button className="flex items-center justify-center gap-2 py-2 px-4 bg-background border border-border rounded-lg hover:bg-muted transition-colors text-sm font-medium">
                                <Chrome className="w-4 h-4" /> Google
                            </button>
                        </div>
                    </div>

                    <p className="text-center mt-6 text-sm text-muted-foreground">
                        Already have an account? <Link href="/login" className="text-primary font-medium hover:underline">Sign in</Link>
                    </p>
                </motion.div>
            </main>
        </div>
    );
}
