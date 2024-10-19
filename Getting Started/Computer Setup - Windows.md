## Install WSL 2
1. Open command prompt with administrator privileges
2. wsl --install
3. Restart computer
4. Open Ubuntu
5. Setup username / password.  Use mike as username
6. sudo apt update && sudo apt upgrade

## Install other programs
1. Install VS Code
2. Install Docker Desktop
3. Install Git for Windows (select Git Credentials Manager (GCM)).  Allows Git credentials to be shared between Windows and WSL

## Configure VS Code
1. Install Python (Microsoft)
2. Install Better Comments
3. Install Remote Development
4. Install autoDocstring
5. Install Python Ident
6. Install Excel Viewer
7. Install Error Lens
8. Install Ruff
9. Install Docker
10. Install Rainbow Brackets


## Configure Git
1. git config --global user.name "mike"
2. git config --global user.email "michael.m.shen@gmail.com"
3. git config --global credential.helper "/mnt/c/Program\ Files/Git/mingw64/bin/git-credential-manager.exe"

## Setup Mirrored Networking
1. in c:\Users\micha\   create a file called .wslconfig
2. Enter in:
[wsl2]
networkingMode=mirrored
3. Restart computer
4. Check IP address.
    a. Open command prompt
    b. wsl hostname -I
    c. This should match the IP addresses on Windows side

## Install pip
1. sudo apt install -y python3-pip

## Create alias
1. Open .bashrc file (ubuntu/home/mike)
2. Add these lines:
    a. alias pip=pip3
    b. alias python=python3
3. Restart computer

## Install virtual environments
1. sudo apt install python3-venv