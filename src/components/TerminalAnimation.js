import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../TerminalAnimation.css';

const TerminalAnimation = () => {
    const navigate = useNavigate();
    const message = "Help me deploy my portfolio by pressing 'Run Jobs'";
    const [text, setText] = useState('');
    const [jobsStarted, setJobsStarted] = useState(false); 
    const [showButton, setShowButton] = useState(true); 
    const [jobs, setJobs] = useState([
        { name: 'Build Successful', completed: false },
        { name: 'Test Successful', completed: false },
        { name: 'Deployment Successful', completed: false }
    ]);

    useEffect(() => {
        if (!jobsStarted) {  
            let ticker = setInterval(() => {
                tick();
            }, 40);

            return () => clearInterval(ticker);
        }
    }, [text, jobsStarted]); 

    const tick = () => {
        let charIndex = text.length;
        let fullText = message;
        if (text !== fullText) {
            setText(fullText.substring(0, charIndex + 1));
        }
    };

    const runJobs = async () => {
        setJobsStarted(true);  
        setShowButton(false); 
        setText(''); 
        for (let i = 0; i < jobs.length; i++) {
            await new Promise(resolve => setTimeout(resolve, 2000)); 
            setJobs(jobs => 
                jobs.map((job, idx) => 
                    idx === i ? { ...job, completed: true } : job
                )
            );
        }
        setTimeout(() => navigate('/MainPage'), 1000);
    };

    return (
        <div className="container">
            <div className="terminal">
                <pre id="yaml">
{`name: Node.js with React CI/CD
on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
    - name: Checkout code
      uses: actions/checkout@v2
    - name: Setup Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '20'
    - name: Install dependencies
      run: npm install
    - name: Build
      run: npm run build
    - name: Test
      run: npm test
deploy:
  needs: build
  runs-on: ubuntu-latest
  steps:
    - name: Deploy to hosting platform
      run: |
        echo "Deploying to hosting platform..."`
}
                </pre>
                {jobs.map((job, index) => (
                    job.completed && <div key={index} className="job-status">
                        {job.name} <span className="success">&#10003;</span>
                    </div>
                ))}
                {showButton && <button onClick={runJobs} disabled={jobs.some(job => job.completed)}>
                    Run Jobs
                </button>}
            </div>
            <div className="text-area">
                <p>{text}</p>
            </div>
        </div>
    );
};

export default TerminalAnimation;

