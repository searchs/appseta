#STORM INSTALL - My Storm Install on Ubuntu 14.10

sudo apt-get --yes install zookeeper=3.4.5* zookeeperd=3.4.5*
sudo service elasticsearch restart
sudo groupadd storm
sudo useradd --gid storm --home-dir
sudo useradd --gid storm --home-dir /home/storm --create-home --shell /bin/bash storm
sudo mv storm/ /usr/share/
sudo ln -s /usr/share/storm/bin/storm /usr/bin/storm
sudo mkdir /var/log/storm
sudo chown storm:storm /var/log/storm
sudo sed -i 's/${storm.home}\/logs/\/var\/log\/storm/g' /usr/share/storm/log4j/storm.log.properties
subl .bashrc
source .bashrc
#check storm home is set
echo $STORM_HOME
sudo sed -i 's/${storm.home}\/logs/\/var\/log\/storm/g' /usr/share/storm/log4j/storm.log.properties
sudo mkdir /etc/storm
sudo chown storm:storm /etc/storm
sudo mv /usr/share/storm/conf/storm.yaml  /etc/storm/
sudo ln -s /etc/storm/storm.yaml /usr/share/storm/conf/storm.yaml
#Install Suipervisor
sudo apt-get --yes install supervisor
