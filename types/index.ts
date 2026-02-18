export type HiringStage = 'RESUME' | 'SCREENING' | 'OA' | 'INTERVIEW' | 'RESULT';

export interface UserProgress {
    stage: HiringStage;
    resumeScore?: number;
    oaScore?: number;
    interviewScore?: number;
    status: 'PENDING' | 'COMPLETED' | 'FAILED';
}

export interface Company {
    id: string;
    name: string;
    logo?: string;
    description: string;
    roles: string[];
    minResumeScore: number;
}

export interface AssessmentQuestion {
    id: string;
    type: 'MCQ' | 'CODING';
    question: string;
    options?: string[];
    correctOption?: number;
    language?: string;
    initialCode?: string;
}

export interface InterviewQuestion {
    id: string;
    question: string;
}

export interface TranscriptEntry {
    role: 'interviewer' | 'candidate';
    text: string;
    timestamp: number;
}

export interface InterviewSession {
    currentQuestionIndex: number;
    transcript: TranscriptEntry[];
    isCameraOn: boolean;
    isMicOn: boolean;
    isRecording: boolean;
}

export interface AppState {
    user: {
        id: string;
        name: string;
        email: string;
    } | null;
    progress: UserProgress;
    selectedCompany: Company | null;
    resumeData: any | null;
    interviewSession: InterviewSession;
    setStage: (stage: HiringStage) => void;
    updateProgress: (data: Partial<UserProgress>) => void;
    setCompany: (company: Company) => void;
    setResumeData: (data: any) => void;
    updateInterviewSession: (data: Partial<InterviewSession>) => void;
}
