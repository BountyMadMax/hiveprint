for proto in `ls ../protobuffers | grep ".proto"`; do
  echo "-------------- $proto --------------"
  echo "Generate js file"
  ./node_modules/protobufjs-cli/bin/pbjs -t static-module -w es6 -o "./models/${proto%.*}.js" "../protobuffers/$proto"

  # echo "Fix import"
  # sed -i 's/import \* as \$protobuf from \"protobufjs\/minimal\";.*/import \$protobuf from \"protobufjs\/minimal\";/' "./models/${proto%.*}.js"

  echo "Generate d.ts file"
  ./node_modules/protobufjs-cli/bin/pbts -o "./models/${proto%.*}.d.ts" "./models/${proto%.*}.js"
done
