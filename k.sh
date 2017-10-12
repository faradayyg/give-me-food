concat=""
for FILE1 in "$@"
do
  concat="$concat $FILE1"
done

echo $concat

node node_modules/.bin/knex $concat
