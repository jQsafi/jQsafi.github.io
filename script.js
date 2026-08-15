// Pure Vanilla JavaScript for Shafayat Hossain Portfolio

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Puter auth token if available
  if (window.puter && typeof puter.setAuthToken === 'function') {
    puter.setAuthToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InYyIn0.eyJ0IjoiYXUiLCJ2IjoiMiIsInV1IjoiSjIxTVZ2TTlRcU95N1ppOEtUQnNUUT09IiwiYXUiOiJJNUpJa1VXelFaQzNYdDF5cXQ4OU1BPT0iLCJzdSI6IlZJYkIwL09lVEI2WlhXS2lyUmlHemc9PSIsImFpIjoiSjIxTVZ2TTlRcU95N1ppOEtUQnNUUT09IiwiaWF0IjoxNzg2NzY4MDg2fQ.pih8EYyfx8_iI5poVMcoweoUmyQf7g6a3TPa2ekmQQQ");
  }

  const themeToggleButton = document.getElementById('themeToggleButton');
  const themeIcon = document.getElementById('themeIcon');
  const flyoutButton = document.getElementById('flyoutButton');
  const flyoutMenu = document.getElementById('flyoutMenu');
  const chatBubbleButton = document.getElementById('chatBubbleButton');
  const chatBadge = document.getElementById('chatBadge');
  const chatWidget = document.getElementById('chatWidget');
  const closeChatButton = document.getElementById('closeChatButton');
  const chatForm = document.getElementById('chatForm');
  const chatInput = document.getElementById('chatInput');
  const chatMessages = document.getElementById('chatMessages');
  const chatSuggestions = document.getElementById('chatSuggestions');
  const html = document.documentElement;


  // 1. Theme Management (Defaults to Dark Theme)
  const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';

  function setTheme(theme) {
    if (theme === 'dark') {
      html.classList.add('dark');
      themeIcon.className = 'fas fa-moon';
      localStorage.setItem('portfolio-theme', 'dark');
    } else {
      html.classList.remove('dark');
      themeIcon.className = 'fas fa-sun';
      localStorage.setItem('portfolio-theme', 'light');
    }
  }

  // Initialize theme
  setTheme(savedTheme);

  // Toggle Theme on Button Click
  themeToggleButton.addEventListener('click', () => {
    const isDark = html.classList.contains('dark');
    setTheme(isDark ? 'light' : 'dark');
  });

  // 2. Flyout Navigation Menu Management
  function toggleMenu() {
    flyoutMenu.classList.toggle('hidden');
  }

  flyoutButton.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMenu();
  });

  // 3. Live Chat Widget Management
  function toggleChat() {
    const isHidden = chatWidget.classList.contains('hidden');
    if (isHidden) {
      chatWidget.classList.remove('hidden');
      if (chatBadge) chatBadge.classList.add('hidden');
      chatInput.focus();
    } else {
      chatWidget.classList.add('hidden');
    }
  }

  chatBubbleButton.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleChat();
  });

  // Auto-open chat window after 3 seconds of page load
  setTimeout(() => {
    if (chatWidget && chatWidget.classList.contains('hidden')) {
      chatWidget.classList.remove('hidden');
      if (chatBadge) chatBadge.classList.add('hidden');
    }
  }, 3000);


  closeChatButton.addEventListener('click', () => {
    chatWidget.classList.add('hidden');
  });

  // Close overlays when clicking outside
  document.addEventListener('click', (e) => {
    if (flyoutMenu && !flyoutMenu.contains(e.target) && !flyoutButton.contains(e.target) && !e.target.closest('#flyoutMenu')) {
      flyoutMenu.classList.add('hidden');
    }
    if (chatWidget && !chatWidget.contains(e.target) && !chatBubbleButton.contains(e.target) && !e.target.closest('#chatWidget')) {
      chatWidget.classList.add('hidden');
    }
  });


  // Close overlays on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      flyoutMenu.classList.add('hidden');
      chatWidget.classList.add('hidden');
    }
  });

  // 4. Live Chat Messaging & Puter AI Integration
  function getCurrentTime() {
    const now = new Date();
    return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }

  function formatMarkdown(text) {
    if (window.marked && typeof window.marked.parse === 'function') {
      try {
        return window.marked.parse(text);
      } catch (e) {
        console.warn('Marked parse error:', e);
      }
    }
    // Fallback simple renderer
    return text
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/`(.*?)`/g, '<code>$1</code>')
      .replace(/\n/g, '<br/>');
  }

  function appendMessage(text, sender = 'user') {
    const msgDiv = document.createElement('div');
    msgDiv.className = `chat-message ${sender}`;

    const contentDiv = document.createElement('div');
    contentDiv.className = 'message-content';

    if (sender === 'assistant') {
      contentDiv.innerHTML = formatMarkdown(text);
    } else {
      contentDiv.textContent = text;
    }

    const timeSpan = document.createElement('span');
    timeSpan.className = 'message-time';
    timeSpan.textContent = getCurrentTime();

    msgDiv.appendChild(contentDiv);
    msgDiv.appendChild(timeSpan);

    if (chatSuggestions && chatSuggestions.parentNode === chatMessages) {
      chatMessages.insertBefore(msgDiv, chatSuggestions);
    } else {
      chatMessages.appendChild(msgDiv);
    }

    chatMessages.scrollTop = chatMessages.scrollHeight;
  }


  function showTypingIndicator() {
    const typingDiv = document.createElement('div');
    typingDiv.id = 'typingIndicator';
    typingDiv.className = 'chat-message assistant';
    typingDiv.innerHTML = `
      <div class="message-content typing-indicator">
        <span></span><span></span><span></span>
      </div>
    `;
    chatMessages.appendChild(typingDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  function removeTypingIndicator() {
    const indicator = document.getElementById('typingIndicator');
    if (indicator) indicator.remove();
  }

  async function generateAutoReply(userText) {
    const systemPrompt = `You are the Personal Executive & Technical Assistant for Shafayat Hossain.
Source of Truth Profile:
- Full Name: Shafayat Hossain
- Roles: Senior Software Engineer | Technical Project Manager | Automation & Platforms Specialist
- Location: Dhaka, Mirpur, Bangladesh
- Contact: shafayat@engineer.com | Phone/WhatsApp: +880 1616-332313
- Links: Portfolio: https://jqsafi.github.io/ | LinkedIn: https://linkedin.com/in/jqsafi | GitHub: https://github.com/jqsafi
- Languages & Frameworks: Python (MicroPython, C Python), Rust, Go, Node.js, TypeScript, PHP, .NET, JavaScript, React, Next.js, Django, Flask, FastAPI, Laravel, Spring Boot, Vue.js
- DevOps & Cloud: Kubernetes, Docker, Terraform, Pulumi, GitHub Actions, Jenkins, ArgoCD, GitLab CI, AWS, Azure, GCP, Serverless, PostgreSQL, MySQL, MongoDB, Redis, TimescaleDB, CockroachDB, Oracle
- AI & Automation: Ollama, LM Studio, Local LLMs, Chrome Built-in AI, PuterAI, OpenWebUI, Groq, Selenium, Pytest, IoT/Hardware integration
- Management: Agile (Scrum), Kanban, SAFe, ERP integration, OKRs, Stakeholder Communication
- Career Highlights:
  • Arogga Ltd. (2020–Present): Senior Software Engineer. Automated workflows (reduced overhead by 65%), built 15+ microservices with 99.9% uptime for 500K+ daily requests, integrated IoT inventory tracking, improved latency by 20–30%.
  • Enormous Infonet (2018–2020): Automated 10M+ records (cut reporting time by 70%), built CI/CD pipelines reducing release time from 4h to 30m.
  • DoodleI Inc. (2016–2018): Built scalable web apps, custom CMS tooling, high-traffic integrations.
  • Zaman IT (2014–2016): Technical Project Manager. Automation processing 100K+ daily records, OMR systems, lifted test coverage to 85%.
  • The Databiz Software Ltd. (2011–2014): Automated migrations across 30+ platforms.
  • Stay Home Programs: Founder & Trainer for software engineering & automation.
  • Hardware/IoT Innovations: Fingerprint attendance device integrated with school management software, automated package-sorting warehouse system.

User query: ${userText}
Provide a professional, articulate, and technically sharp response in 2-3 concise sentences.`;


    // Try calling Puter AI SDK if available
    if (window.puter && window.puter.ai && typeof window.puter.ai.chat === 'function') {
      try {
        const response = await window.puter.ai.chat(systemPrompt);
        let resText = '';
        if (typeof response === 'string') {
          resText = response;
        } else if (response && response.message && response.message.content) {
          resText = response.message.content;
        } else if (response && response.text) {
          resText = response.text;
        }

        if (resText && resText.trim()) {
          return resText.trim();
        }
      } catch (err) {
        console.warn('Puter AI request error, using fallback reply:', err);
      }
    }

    // Fallback rule-based replies
    const query = userText.toLowerCase();
    if (query.includes('skill') || query.includes('experience') || query.includes('stack')) {
      return "Shafayat is a Senior Software Engineer & AI Specialist skilled in Prompt Engineering, NodeJS, ReactJS, Web Scraping, Bootstrap, Laravel, and WordPress!";
    }
    if (query.includes('project') || query.includes('work') || query.includes('portfolio')) {
      return "Shafayat has built several interactive web apps like Emoji World, 3D CSS Box, Animated SVG Flags, CSS Clocks, Puzzle & Memory Games. Check out the top-left menu to explore them!";
    }
    if (query.includes('contact') || query.includes('hire') || query.includes('email') || query.includes('phone') || query.includes('reach')) {
      return "You can reach Shafayat via WhatsApp (+8801616332313) or email (shafayat@engineer.com). Feel free to connect on LinkedIn or GitHub as well!";
    }
    if (query.includes('hi') || query.includes('hello') || query.includes('hey')) {
      return "Hello! Great to connect with you. How can I assist you with Shafayat's work or engineering services today?";
    }

    return "Thanks for your message! Shafayat specializes in AI Prompt Engineering, Web Development, and Web Scraping. Feel free to leave your contact details or email him directly at shafayat@engineer.com.";
  }

  async function handleSendMessage(text) {
    if (!text.trim()) return;

    appendMessage(text, 'user');
    chatInput.value = '';

    if (chatSuggestions) {
      chatSuggestions.remove();
    }

    showTypingIndicator();

    try {
      const reply = await generateAutoReply(text);
      removeTypingIndicator();
      appendMessage(reply, 'assistant');
    } catch (e) {
      removeTypingIndicator();
      appendMessage("Thanks for your message! Feel free to reach out to Shafayat directly at shafayat@engineer.com.", 'assistant');
    }
  }

  chatForm.addEventListener('submit', (e) => {
    e.preventDefault();
    handleSendMessage(chatInput.value);
  });

  // Handle Quick Suggestion Chip Clicks
  document.querySelectorAll('.chip-btn').forEach((chip) => {
    chip.addEventListener('click', (e) => {
      e.stopPropagation();
      e.preventDefault();
      const prompt = chip.getAttribute('data-prompt');
      if (prompt) {
        handleSendMessage(prompt);
      }
    });
  });

});
