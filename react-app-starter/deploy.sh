www="/folder/path/to/upload"

rsync -arv -progress -e "ssh -i ~/.ssh/private_key.pem" --exclude-from '.rsyncIgnore' ./build/* user@domain.or.ip:$www
