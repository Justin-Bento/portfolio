# Personal Website 

This GitHub repository holds the code for my personal website. It's purpose is to be a visual representation of my work, while focusing on the impact and design rather than the underlying technologies. 

- Project Start Date: Friday 10th February 2023
- Project End Date:  Tuesday 19th November 2024
- Project Link: [Node Path Getting Hired Building Your Personal Website](https://www.theodinproject.com/lessons/node-path-getting-hired-building-your-personal-website)

## Features

-  Switched framework to Next.js v14 with App Folder
   -  Fetched data
   -  Used server and client side components. 
   -  Accessed next.js route handlers with next/link
-  Utilized Tailwind CSS
   -  Setup a mobile first design using tailwinds adaptive user interfaces.
   -  Styled the light and dark mode on the sight
   -  Installed shadcn/ui for custom components.
-  Setup Sanity Content Management System.
   - Update projects with their dynamic reloading.
   - CRUD operations with their project.  
   - hosted everything underneath /studio 
 - Deployed project with vercel

## Technologies

- Front-end: HTML, CSS, TailwindCSS, JavaScript, TypeScript, React.js, 
- Back-end: Node.js, Sanity, Next.js, prettier, eslint

## Run Locally  
  
Clone the project  
  
```bash  
git clone git@github.com:Justin-Bento/portfolio.git
```  
  
Go to the project directory  
  
```bash  
cd /path/to/project/portfolio  
```  
  
Install dependencies  
  
```bash  
npm install  
```  
  
Start the server  
  
```bash  
npm run dev
```

## Environment Variables  
  
To run this project, you will need to add the following environment variables to your .env file  

- ``NEXT_PUBLIC_SANITY_KEY`` 
- ``NEXT_PUBLIC_SANITY_DATASET``

## Lessons Learned  
  
When building this project, things got complicated due too my need to prove that I'm an experienced developer. When in reality I was just an overconfident beginner protecting my own ego. This over-confidence was a double edge sword it made me dive into concepts that were beyond my skillets at the time, and thinking I could figure it out along the way. As a result, I ended up spending hours and sometime days troubleshooting issues that I probably could have avoided with simpler solutions. Looking back, I realize I was trying to prove to myself that I could handle complex tasks, but looking back I realized that scaling back and focusing on things step-by-step would have less frustrating overall while helping me learn these topics one at a time.

## Acknowledgements

I would like to thank Humber College and The Odin Project, who provided invaluable guidance and support throughout this project. Special thanks to the The Odin Project Discord for their answers and resources, which helped me overcome some key technical challenges. 