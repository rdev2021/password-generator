# Privacy-First Password Generator

A client-side only password generator built with Next.js that creates secure passwords while respecting user privacy. All password generation happens directly in the browser - no data is ever sent to a server.

## 🔐 Features

- **Privacy-first approach** - 100% client-side processing with no server communication
- **Two password types**:
  - **Strong passwords** - Alphanumeric passwords generated with special characters (e.g., `xufdud-jitdyv-hosMe3`)
  - **Normal passwords** - Same as above but without any special characters (e.g., `twekKZPGqzg6ZYi`)
- **Customizable special characters** - Define up to 2 special characters to use in your strong passwords
- **Copy to clipboard** - One-click copying of generated passwords
- **Responsive design** - Works on desktop and mobile devices
- **No data storage** - Passwords are generated on demand and never stored

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or newer)
- npm
- Docker / Podman

### Installation 

#### From Source

- Clone the repository:
   ```bash
   git clone https://github.com/rdev2021/password-generator.git
   cd password-generator
   ```

- Install dependencies:
   ```bash
   npm install
   ```

- Run the development server:
   ```bash
   npm run dev
   ```

- Open [http://localhost:3001](http://localhost:3001) in your browser to see the application.

#### As a Container
- Clond the repo just like in previous step

- Build the container image:
   ```bash
   docker build -t passgen:v1 .
   ```

- Run  the container image: [ Use the port that is not use in your host ]
   ```bash
   docker run -d -p 80:80 passgen:v1
   ```

- Open [http://localhost](http://localhost) in your browser to see the application.
