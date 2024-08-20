#!/usr/bin/bash
echo $SHELL;
echo "hello,world";

cd .. && touch demo.txt && echo "I love python!" >> demo.txt;

set | grep "HOME";

readonly username="soetas";
readonly email="3228891558@qq.com";

temp_path="/d/temp";

echo $username;

unset temp_path;

echo $temp_path;

echo "$0 $1 $2 $#";
echo $*;
echo $@;

echo $(( 1 / 2 ));
echo $[ 89 - 67 ];

echo $?;

[ 89 -gt 71 ] && echo "89 > 71";
[ 51 -ne 10 ] || echo "51 != 10";
[ -x ./build.sh ] && echo "xx";

if [ $username != "soetas" ]
then
  echo "username is error!";
elif [ $email != "3228891558@qq.com" ]
then
  echo "email is error!";
else  
  echo "welcome to login!";
fi

case $1 in
system)
  echo "system"
  ;;
light)
  echo "light"
  ;;
dark)
  echo "dark"
  ;;
esac

for(( i=0; i<=$#; i++ ))
do
  echo $i;
done

for arg in $*
do
  echo $arg;
done

sum=0;
i=0;

while [ $i -le 100 ]
do
  sum=$[ $sum + $i ];
  i=$[ $i + 1 ];
done

echo $sum;

# read -t 15 -p "Enter your password: " password;
# echo $password;

filename="/d/projects/webconf/scripts/build.sh";

basename $filename .sh;
dirname $filename;

function sum() {
  
}


GO_PATH="";

export GO_PATH;
