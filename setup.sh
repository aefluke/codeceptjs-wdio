
echo hello world
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
brew install git
brew install docker
brew install node
docker pull codeception/codeceptjs
docker-compose up -d

