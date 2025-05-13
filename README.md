# AI Agent

## Description

Prepwise is an AI-powered interview preparation platform that simulates realistic job interview experiences using voice agents and generative AI. Built with Next.js and styled using TailwindCSS, it leverages Firebase for secure authentication and Vapi’s conversational AI to deliver dynamic, voice-driven sessions. Integrated with Google Gemini, the platform offers real-time feedback, detailed transcripts, and smart suggestions to help users refine their interview performance. Whether you're preparing for your first job or leveling up for your next role, Prepwise delivers a sleek, modern, and educational experience designed for growth.
If anyone want see this code, [please click at this link](https://mock-interview-platform-rho.vercel.app/sign-in).

## Technologies & Methods Used

Frontend: Next.js 15, React 19, TailwindCSS, shadcn/ui (accessible UI components)
Authentication: Firebase (secure email/password auth)
Backend & Data: Firebase (Cloud Firestore & Realtime DB)
Voice AI: Vapi voice agents for conversational simulations
Generative AI: Google Gemini for feedback generation and dynamic question creation
Validation & Schema: Zod for safe and scalable form handling

## Steps to get code to run:
1. Open terminal
2. Type (You can also download the code):
```
git clone https://github.com/juliorojas81871/mock_interview_platform
```

3. Make sure that you are in the right folder, if not cd to it.

4. Type:
```
pnpm install
```
5. Rename example-.env.local to .env.local and fill the empty key
6. Type this line in terminal:
```
pnpm run dev
```
7. Go to browser and type at the address bar:
```
http://localhost:3000/
```

## Example Pic:
![Notes Example Pic](https://raw.githubusercontent.com/juliorojas81871/ai-agent/main/public/main.png)
