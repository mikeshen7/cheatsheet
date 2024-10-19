## Install
1. Install git:         sudo apt install git
2. Install VS Code:     sudo dpkg -i ~/code_1.94.2-1728494015_amd64.deb
3. Install GNOME extensioin manager:    sudo apt install gnome-shell-extension-manager
4. Install Dash to Panel
5. Install Wine
    a. sudo dpkg --add-architecture i386
    b. sudo mkdir -pm755 /etc/apt/keyrings
    c. sudo wget -O /etc/apt/keyrings/winehq-archive.key https://dl.winehq.org/wine-builds/winehq.key
    d. sudo wget -NP /etc/apt/sources.list.d/ https://dl.winehq.org/wine-builds/ubuntu/dists/noble/winehq-noble.sources~
    e. sudo apt install --install-recommends wine-stable
6. Install Docker, Docker desktop
7. Install Plex
8. Install Office
9. Install Zoom
10. Install Wireshark
11. Install Private Internet Access
12. Install Screenpresso
13. Install Yabe
14. Install bacSim




## Update   
1. sudo apt update          Fetches list of available updates
2. sudo apt upgrade         Installs some updates, does not remove packages
3. sudo apt full-upgrade    Installs udpates, may also remove some packages if needed
4. sudo apt autoremove      Removes any old packages that are no longer needed

## Creating an App (example for Yabe)
1. nano ~/.local/share/applications/yabe.desktop
[Desktop Entry]
Name=Yabe
Exec=mono /home/yourusername/Programs/Yabe_v1.2.2/Yabe.exe
Type=Application
Terminal=false
Icon=path/to/icon.png

2. chmod +x ~/.local/share/applications/yabe.desktop

3. cp ~/.local/share/applications/yabe.desktop ~/Desktop/
This creates the desktop shortcut (optional)


