
# Define 3.0
The official template repository for Define 3.0

![DefineHack 2025 Logo](https://github.com/user-attachments/assets/8173bc16-418e-4912-b500-c6427e4ba4b6)



#  FINOVA 
 
![LOGO](https://github.com/thusharvijay/test/blob/main/rec-ezgif.com-video-to-gif-converter.gif)

### Team Information
- **Team Name**:  Synergy 
- **Track**:  AI in FinTech 

### Team Members
| Name | Role | GitHub | LinkedIn |
|------|------|--------|----------|
| Adrija A | Frontend/Backend Developer | adrija-ani(https://github.com/adrija-ani) | Adrija A(https://linkedin.com/in/adrija-ani) |
| Adithyan S Pillai | Backend/AI Developer | XXOriginalXX(https://github.com/XXOriginalXX) | Adithyan S Pillai(https://linkedin.com/in/xxoriginalxx) |
| Thushar Vijay | Blockchain/AI Developer | thusharvijay(https://github.com/thusharvijay) | Thushar Vijay(https://linkedin.com/in/thusharvijay) |
| S V Dhanya | Frontend/Blockchain | Ayna184(https://github.com/Ayna184) | Dhanya Vinod(https://linkedin.com/in/dhanya-vinod) |

## Project Details

### Overview
Our project is an educational fintech platform designed to help users learn about financial markets through live demo trading. The platform features an **AI-powered chatbot** that acts as a financial assistant, providing real-time market insights, answering queries, and guiding users through trading concepts. Additionally, it includes an **interactive dashboard** that displays **real-time financial data**, including stock prices, cryptocurrency trends, portfolio performance, and market analytics. The platform also offers an **expense tracker** for financial management, **Ethereum wallet integration** for handling transactions, and a **real-time financial news aggregator** to keep users updated on market trends. With live market data, transaction details, and an engaging user interface, the platform enhances financial education through hands-on learning experiences.

### Problem Statement
Develop a basic prototype of a fintech website with an AI-powered chatbot that provides users with financial insights and customer support. The website should have a clean, user-friendly interface with a simple dashboard displaying sample financial data and a chatbot capable of handling basic FAQs related to fintech services. 

### Solution
Crypto Based Fintech Website with AI-Powered Chatbot
- AI-Powered Chatbot for Financial Insights & Support
  - Provides instant responses to financial FAQs related to trading, investments, and personal finance.
  - Uses AI-driven insights to analyze financial data and offer personalized recommendations.
  - Simulates financial scenarios to help users understand trading strategies and decision-making.
- User-Friendly Dashboard
  - Features a clean and intuitive 3D-designed UI for an engaging experience.
  - Displays real-time and historical financial data, including market trends, portfolio insights, and transaction history.
  - Uses lightweight charts for easy data visualization.
- Live Demo Trading in the Live Market
  - Offers a risk-free trading environment through paper trading with virtual funds.
  - Integrates live crypto and stock market APIs (e.g., CoinGecko) for real-time price tracking.
  - Enables simulated buy/sell transactions to help users practice and improve trading skills.
- Ethereum Wallet Integration
  - Allows users to connect an Ethereum wallet and view balances, transaction history, and holdings.
  - Uses secure authentication, including Zero-Knowledge Proof (ZKP) login, ensuring privacy and security.
  - Enables on-chain transaction simulation, allowing users to learn blockchain transactions without real financial risks.
- AI-Enhanced Expense Tracker with Budgeting Recommendations
  - Tracks expenses automatically, categorizing transactions for a clear spending overview.
  - Provides personalized budgeting recommendations based on spending habits and income.
  - Suggests cost-cutting strategies, saving plans, and investment opportunities.
  - Alerts users when they exceed their budget and offers AI-driven financial insights to help manage money efficiently.

### Demo
[![Project Demo]()](https://youtu.be/awoFzI-43gc)


### Live Project
[FINOVA- Click Here](https://synergy-finova-v2.vercel.app/)

## Technical Implementation

### Technologies Used
- **Frontend**: React/HTML/Tailwind-CSS/Typescript
- **Backend**: Node.js
- **Database**: MongoDB
- **APIs**: Gemini-API, Binance-API, Coingecko-API
- **DevOps**: N/A
- **Other Tools**: git

### Key Features
- AI-Powered Chatbot for Financial Insights & Support
- User-Friendly Dashboard
- Live Demo Trading in the Live Market
- Ethereum Wallet Integration
- AI-Enhanced Expense Tracker with Budgeting Recommendations

## Setup Instructions

### Prerequisites
- Node.js (v16+ recommended) - [Download Here](https://nodejs.org/en)
- npm (Comes with Node.js) or yarn
- Git - [Download Here](https://git-scm.com/)

### Installation 
- Clone the Repository
```bash
https://github.com/thusharvijay/Synergy.git
cd finova
```
- Install Dependencies
```bash
npm install
```
- Start the Development Server
```bash
npm run dev
```
### Running the Project
Enter o + < enter > to run the project locally

## Additional Resources

### Project Timeline
###  Phase 1: Ideation & Planning  
- Defined project scope: **Fintech website with AI-powered chatbot**  
- Researched **Zero-Knowledge Proof (ZKP) authentication** and **Ethereum integration**  
- Designed **wireframes & UI layout** for a user-friendly experience  

###  Phase 2: Core Development  
 **Frontend**  
- Set up **React + Vite** for fast development  
- Integrated **Tailwind CSS** for styling  
- Added **Framer Motion** for smooth animations  

 **Backend & Authentication**  
- Implemented **Zero Datik login** and **ZKP authentication**  
- Integrated **Ethereum wallet** for transactions  
- Developed a **basic AI chatbot** for financial insights  

 **Financial Features**  
- Created a **dashboard** to display sample financial data  
- Built an **expense tracker** with manual entry & bill upload options  
- Added **real-time financial news** from **CoinGecko API**  

###  Phase 3: Testing & Optimization  
- Debugged UI responsiveness & improved performance  
- Ensured **secure transactions** with **blockchain integration**  
- Optimized the chatbot’s **response accuracy**  

###  Phase 4: Deployment & Future Enhancements  
- **Deployed on Vercel/Netlify** for live access  
- Future plans:  
  - Add **live demo trading in real markets**  
  - Enhance the **AI chatbot with GPT-4**   
  - Improve **data visualization** for financial insights  

---

### Challenges Faced
###  1. **Integrating Zero-Knowledge Proof (ZKP) Authentication**  
**Challenge:** Implementing **ZKP-based login** while ensuring a smooth user experience.  
**Solution:** Used **Zero Datik login** for secure authentication, integrating it with React and managing user sessions efficiently.  

###  2. **Ethereum Wallet & Blockchain Integration**  
**Challenge:** Fetching real-time wallet balances and ensuring secure transactions.  
**Solution:** Integrated **ethers.js** to interact with Ethereum smart contracts and used **MetaMask** for seamless wallet authentication.  

###  3. **Optimizing AI Chatbot for Financial Insights**  
**Challenge:** The chatbot’s responses were too generic and lacked financial-specific knowledge.  
**Solution:** Trained the bot with **domain-specific financial prompts** and optimized **GPT-4** queries to provide accurate insights.  

###  4. **Fetching Real-Time Financial News Efficiently**  
**Challenge:** API rate limits and slow responses from external financial news providers.  
**Solution:** Cached news data locally and implemented **incremental updates** to reduce unnecessary API calls.  

###  5. **Ensuring a Smooth User Experience with a 3D UI**  
**Challenge:** Performance issues due to heavy **3D UI elements**.  
**Solution:** Used **Three.js with React Fiber**, optimized asset loading, and implemented lazy-loading techniques for better performance.  

###  6. **Developing an Interactive Expense Tracker**  
**Challenge:** Managing multiple expense entry methods (manual, bill upload).  
**Solution:** Designed a **modal-based UX** that allows easy toggling between manual input and automated bill scanning.  

---

### Future Enhancements
Our goal is to continuously innovate and enhance **Finova** to provide a seamless fintech experience. Below are our future plans:  

###  1. **Advanced AI Chatbot with GPT-4 Turbo**  
- Improve chatbot accuracy with **financial knowledge fine-tuning**  
- Add **voice-based interaction** for a hands-free experience  

###  2. **Live Demo Trading in the Real Market**  
- Enable **simulated trading** using real-time market data  
- Implement **risk analysis tools** to educate users on trading strategies  

###  3. **Enhanced Security & Privacy with Web3 Authentication**  
- Upgrade to **Decentralized Identity (DID)** for even more secure logins  
- Strengthen **Zero-Knowledge Proof (ZKP) authentication** mechanisms  

###  4. **AI-Powered Financial Insights & Predictions**  
- Develop **predictive analytics** for investment suggestions  
- Implement **personalized financial reports** using AI-driven insights  

###  5. **Gamification & User Engagement Features**  
- Introduce **badges, leaderboards, and achievements** for financial literacy milestones  
- Add **community-driven discussions & expert insights**  

###  6. **Mobile App Version for On-the-Go Access**  
- Develop a **React Native / Flutter-based mobile app**  
- Implement **push notifications for market alerts & insights**  

By focusing on **AI, blockchain, security, and user experience**, we aim to make **Finova** a leading fintech platform in the industry.   

---

### References (if any)


---

### Submission Checklist
- ✅ Completed all sections of this README
- ✅ Added project demo video
- ✅ Provided live project link
- ✅ Ensured all team members are listed
- ✅ Included setup instructions
- ✅ Submitted final code to repository

---

© Define 3.0 | [Define 3.0](https://www.define3.xyz/)
