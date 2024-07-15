# Portfolio.

Portfolio is Justin Bento's main repository that hosts all the files for my website. This website is based on the React eacosystem using Sanity as the content management System. The goal of my portfolio is to tell the story of how each project came to be. By focusing on the journey, challenges, and insights gained throughout the design, and development process. 

## Installation

Follow these steps to set up the project:

### Step 1: Navigate to the Main Folder

First, navigate to the main folder of the project:

```bash
cd portfolio
```

### Step 2: Install Dependencies

Use npm to install all necessary packages for the portfolio:

```bash
npm install
```

## Usage

### Step 1: Start the Development Server

Navigate to the main project folder and start the development server:

```bash
cd portfolio
npm run dev 
```
This command will start the development server and you should see output indicating that the server is running.


### Step 2: Access the Application

Open your browser and go to:

```bash
 url: http://localhost:3000
```

You should see the homepage of the portfolio application.

### Step 3: Interacting with the Application

* Homepage: View an overview of the portfolio with a summary of projects and skills.
* About: Visit the about section feel free to ket to know me 
* Projects Page: Navigate to the projects page to see detailed descriptions of each project.


### Step 4: Using Sanity Studio

To access and manage the content using Sanity Studio, navigate to the portfolio-studio folder and start the Sanity development server:

```bash
cd portfolio-studio
sanity start
```
Open your browser and go to:

```bash
http://localhost:3333
```

You should see the Sanity Studio interface where you can manage your project's content.

> Note: Ensure that your .env file is correctly configured with your Sanity project ID and dataset to avoid any issues with content display.

> Note: Changing the project ID and dataset will cause the articles related to the original project to not display, as they are linked to the original project configuration.

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

## License

None 