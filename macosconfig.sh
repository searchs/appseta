#On the terminal, run command to make Finder show hidden files
defaults write com.apple.finder AppleShowAllFiles TRUE

#Fix SSL Issue on Mac OSX - Mavericks upward
export LDFLAGS=-L/usr/local/opt/openssl/lib && export CPPFLAGS=-I/usr/local/opt/openssl/include


#AWS config --add to .bash_profile
export PATH=~/.local/bin:$PATH

#source ~/.bash_profile
