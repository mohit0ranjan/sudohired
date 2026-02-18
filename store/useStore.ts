import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { AppState, HiringStage, UserProgress, Company, InterviewSession } from '../types';

export const useStore = create<AppState>()(
    persist(
        (set) => ({
            user: {
                id: '1',
                name: 'Demo User',
                email: 'demo@example.com',
            },
            progress: {
                stage: 'RESUME',
                status: 'PENDING',
            },
            selectedCompany: null,
            resumeData: null,
            interviewSession: {
                currentQuestionIndex: 0,
                transcript: [],
                isCameraOn: true,
                isMicOn: true,
                isRecording: false,
            },

            setStage: (stage: HiringStage) =>
                set((state) => ({
                    progress: { ...state.progress, stage },
                })),

            updateProgress: (data: Partial<UserProgress>) =>
                set((state) => ({
                    progress: { ...state.progress, ...data },
                })),

            setCompany: (company: Company) =>
                set({ selectedCompany: company }),

            setResumeData: (data: any) =>
                set({ resumeData: data }),

            updateInterviewSession: (data: Partial<InterviewSession>) =>
                set((state) => ({
                    interviewSession: { ...state.interviewSession, ...data },
                })),
        }),
        {
            name: 'hiring-platform-storage',
        }
    )
);
