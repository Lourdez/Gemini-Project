apt-get update -y

apt install openjdk-21-jdk -y

sudo wget -O /usr/share/keyrings/jenkins-keyring.asc \
  https://pkg.jenkins.io/debian-stable/jenkins.io-2023.key
echo "deb [signed-by=/usr/share/keyrings/jenkins-keyring.asc]" \
  https://pkg.jenkins.io/debian-stable binary/ | sudo tee \
  /etc/apt/sources.list.d/jenkins.list > /dev/null
apt-get update -y
apt-get install jenkins -y
systemctl start jenkins
systemctl enable jenkins

apt install docker.io -y

apt install nodejs -y

apt install npm -y 

chmod 777 /var/run/docker.sock