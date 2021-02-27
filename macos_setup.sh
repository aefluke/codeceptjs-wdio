echo hello world
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
brew install node
brew install --cask docker
npm install
docker pull codeception/codeceptjs
docker-compose up -d

