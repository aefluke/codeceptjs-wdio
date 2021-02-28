echo hello world
apt-get update

apt install nodejs
apt install npm

apt-get remove docker docker-engine docker.io -y
apt install docker.io
systemctl start docker
systemctl enable docker

apt install curl
curl -L "https://github.com/docker/compose/releases/download/1.28.4/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
chmod +x /usr/local/bin/docker-compose

docker pull codeception/codeceptjs

npm install
docker-compose up -d