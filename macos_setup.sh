echo hello world
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
brew install node
brew install --cask docker
docker pull codeception/codeceptjs
npm install
docker-compose up -d

